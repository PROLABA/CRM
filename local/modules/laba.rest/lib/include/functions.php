<?php
/**
 * @var $APPLICATION
 */


use Bitrix\Main\Loader;
use Bitrix\Highloadblock;
use \Laba\Rest\Actions;

use Bitrix\Main\DB\Exception;

date_default_timezone_set('Europe/Moscow');
Loader::includeModule("highloadblock");
function getHlblObject($Id)
{
	try {
		$hlbl    = $Id;
		$hlblock = Highloadblock\HighloadBlockTable::getById($hlbl)->fetch();
		if (!$hlblock) {
			throw new \Exception("Таблица {$Id} не найдена");
		}
	} catch (Exception $e) {
		http_response_code(400);
		echo json_encode(
			[
				'data'    => [],
				'message' => $e->getMessage(),
				'error'   => true,
			]);
		exit();
	}
	$entity          = Highloadblock\HighloadBlockTable::compileEntity($hlblock);
	$entityDataClass = $entity->getDataClass();

	return $entityDataClass;
}

function replaceFromHighloadFields($arFields): array
{
	$beautifyFields = [];
	foreach ($arFields as $sFieldName => $arFieldValue) {
		$beautifyFields[str_replace('UF_', '', $sFieldName)] = $arFieldValue;
	}

	return $beautifyFields;
}

function replaceToHighloadFields($arFields): array
{
	$beautifyFields = [];
	foreach ($arFields as $sFieldName => $arFieldValue) {
		$key                  = $sFieldName === 'ID' ? $sFieldName : 'UF_'.$sFieldName;
		$beautifyFields[$key] = $arFieldValue;
	}

	return $beautifyFields;
}

function getHighloadFields($id = 'all')
{
	global $USER_FIELD_MANAGER;

	return $USER_FIELD_MANAGER->GetUserFields(
		($id === 'all' ? "" : "HLBLOCK_".$id)
	);
}

function checkFiledType($ufPrimary, $value, $key)
{
	$typeGet  = gettype($value);
	$typeNeed = [$ufPrimary['USER_TYPE_ID']];
	if ($ufPrimary['SETTINGS']['DEFAULT_VALUE'] === 'NULL') {
		$typeNeed[] = 'NULL';
	}
	if ($ufPrimary['USER_TYPE_ID'] === 'hlblock') {
		$typeNeed[] = 'integer';
	}
	if ($ufPrimary['USER_TYPE_ID'] === 'double') {
		$typeNeed[] = 'integer';
	}
	if ($ufPrimary['USER_TYPE_ID'] === 'string') {
		$typeNeed[] = 'integer';
	}
	if ($typeGet === 'string' && intval($value) == $value) {
		$typeNeed[] = 'string';
	}
	if ($ufPrimary['MULTIPLE'] === 'Y') {
		$typeNeed = ['array'];
	}
	if (!in_array($typeGet, $typeNeed)) {
		$fieldTypeErrors = [
			'message'    => "Expected ".json_encode($typeNeed).". Given {$typeGet}",
			'code'       => 'TYPE_ERROR',
			'customData' => $key,
		];
	}

	return $fieldTypeErrors;
}

function issetUser($userId)
{
	try {
		if (!(\CUser::GetByID($userId)->Fetch())) {
			throw new Exception('Пользователь не найден');
		}
	} catch (Exception $e) {
		echo json_encode(
			[
				'error'   => true,
				'message' => $e->getMessage(),
				'data'    => (int)$userId,
			]);
		exit();
	}
}

function checkFieldsType($highload_id, $fields)
{
	$arHighFields    = getHighloadFields($highload_id);
	$fieldTypeErrors = [];
	foreach (replaceToHighloadFields($fields) as $key => $value) {
		$ufPrimary = $arHighFields[$key];
		$isError   = checkFiledType($ufPrimary, $value, $key);
		if ($isError) {
			$fieldTypeErrors[] = $isError;
		}
		if (!count($fieldTypeErrors)) {
			if ($ufPrimary['USER_TYPE_ID'] === 'hlblock') {
				if ($ufPrimary['MULTIPLE'] === 'Y') {
					foreach ($value as $v) {
						Actions\GetHighLoadItemAction::run($ufPrimary['SETTINGS']['HLBLOCK_ID'], $v);
					}
				}
				else {
					Actions\GetHighLoadItemAction::run($ufPrimary['SETTINGS']['HLBLOCK_ID'], $value);
				}
			}
			elseif (str_contains($key, "USER_ID")) {
				if ($ufPrimary['MULTIPLE'] === 'Y') {
					foreach ($value as $v) {
						issetUser($v);
					}
				}
				else {
					issetUser($value);
				}
			}
		}
	}

	try {
		if (count($fieldTypeErrors) > 0) {
			throw new \Exception('Типы полей не соответствуют');
		}
	} catch (\Exception  $e) {
		echo json_encode(
			[
				'message' => $e->getMessage(),
				'data'    => $fieldTypeErrors,
				'error'   => true,
			]);
		exit();
	}
}

function getFullHostUrl()
{
	return ($_SERVER['HTTPS'] ? 'https' : 'http').'://'.$_SERVER['HTTP_HOST'];
}

function parsePhotos($hgId, array $fields): array
{
	$arHighFields = getHighloadFields($hgId);
	foreach ($fields as $key => $field) {
		$ufPrimary = $arHighFields[$key];
		if ($ufPrimary['USER_TYPE_ID'] === 'file') {
			if ($ufPrimary['MULTIPLE'] === 'Y') {
				$newFiles = [];
				foreach ($field as $field_item) {
					$newFiles[] = \CFile::GetByID($field_item)->Fetch();
				}
				$fields[$key] = $newFiles;
			}
			else {
				$fields[$key]        = \CFile::GetByID($field)->Fetch();
				$fields[$key]['SRC'] = getFullHostUrl().$fields[$key]['SRC'];
			}
		}
	}

	return $fields;
}

function parseParents($hgId, array $fields): array
{
	$arHighFields = getHighloadFields($hgId);
	foreach ($fields as $key => $value) {
		$ufPrimary = $arHighFields[$key];
		if ($ufPrimary['USER_TYPE_ID'] === 'hlblock') {
			$parent                 = Actions\GetHighLoadListAction::run(
				$ufPrimary['SETTINGS']['HLBLOCK_ID'], [
				"select" => ["*"],
				"filter" => ["ID" => $value],
			])['data'];
			$fields[$key."_PARENT"] = $parent;
		}
	}

	return $fields;
}

function getChainItem($filed)
{
	global $hgIdGlobal;

	return $filed["USER_TYPE_ID"] === 'hlblock' && $filed["SETTINGS"]["HLBLOCK_ID"] == $hgIdGlobal;
}

function parseItems($hgId, array $fields): array
{
	$arHighFields = getHighloadFields();

	global $hgIdGlobal;
	$hgIdGlobal = $hgId;

	$arChainFields = array_filter($arHighFields, "getChainItem");

	foreach ($arChainFields as $key => $field) {
		$fields[$key."_ITEMS"] = Actions\GetHighLoadListAction::run(
			str_replace('HLBLOCK_', '', $field['ENTITY_ID']), [
			"filter" => [
				$key => $fields['ID'],
			],
		])['data'];
	}

	return $fields;
}
