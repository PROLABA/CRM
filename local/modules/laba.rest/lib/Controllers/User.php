<?php

namespace Laba\Rest\Controllers;

use \Bitrix\Main\Error;
use \Laba\Rest\Actions;
use Laba\Rest\Controller;

class Users extends Controller
{

	public static function createAction(?array $data): array
	{
		$needleFields = [
			'LOGIN',
			'NAME',
			'EMAIL',
			'PASSWORD',
			'CONFIRM_PASSWORD',
		];
		foreach ($needleFields as $keyField) {
			if (!$data[$keyField]) {
				self::$response['error']  = true;
				self::$response['data'][] = [
					"message"    => 'Поле '.$keyField.' отсутствует',
					"code"       => LABA__GET_ERROR,
					"customData" => $data,
				];
			}
		}
		if (self::$response['error']) {
			self::$response['error']   = true;
			self::$response['message'] = 'Пользователь не создан';

			return self::$response;
		}
		$classUser        = new \CUser;
		$resCreatedUserID = $classUser->Add(
			[
				"LOGIN"            => $data['LOGIN'],
				"NAME"             => $data['NAME'],
				"LAST_NAME"        => $data['LAST_NAME'],
				"SECOND_NAME"      => $data['SECOND_NAME'],
				"EMAIL"            => $data['EMAIL'],
				"PASSWORD"         => $data['PASSWORD'],
				"CONFIRM_PASSWORD" => $data['CONFIRM_PASSWORD'],
			]
		);
		if (!$resCreatedUserID) {
			self::$response['error']   = true;
			self::$response['message'] = 'Пользователь не создан';
			self::$response['data'][]  = [
				"message"    => $classUser->LAST_ERROR,
				"code"       => LABA__GET_ERROR,
				"customData" => $data,
			];
		}
		else {
			self::$response['data'] = [
				"ID" => $resCreatedUserID,
			];
		}

		return self::$response;
	}

	public static function getByIdAction(?int $intId): array
	{
		$arUser = \CUser::GetByID($intId)->GetNext();
		if ($arUser) {
			self::$response['data'] = $arUser;
		}
		else {
			self::$response['error']   = true;
			self::$response['message'] = 'Пользователь не найден';
		}

		return self::$response;
	}

	public static function getListAction(array $arFilter, int $intLimit): array
	{
		$arResUser = \CUser::GetList(
			[
			]
		);
		while ($row = $arResUser->fetch()) {
			self::$response['data'][] = ($row);
		}

		return self::$response;
	}

	public static function updateAction(int $intId, $data): array
	{
		$arIsUser = self::getByIdAction($intId);
		if ($arIsUser['error']) {
			return $arIsUser;
		}

		$classUser      = new \CUser;
		$resCreatedUser = $classUser->Update($intId, $data);

		if (!$resCreatedUser) {
			self::$response['error']   = true;
			self::$response['message'] = 'Пользователь не обновлён';
			self::$response['data'][]  = [
				"message"    => $classUser->LAST_ERROR,
				"code"       => LABA__GET_ERROR,
				"customData" => $data,
			];
		}
		else {
			self::$response['data'] = $resCreatedUser;
		}

		return self::$response;
	}

	public static function loginAction(?array $data): array
	{
		global $USER, $APPLICATION;
		if (!is_object($USER)) {
			$USER = new \CUser;
		}
		$arAuthResult              = $USER->Login($data['LOGIN'], $data['PASSWORD']);
		$APPLICATION->arAuthResult = $arAuthResult;
		$message                   = str_replace("<br>", '', $arAuthResult['MESSAGE']);
		if ($arAuthResult['ERROR_TYPE']) {
			self::$response['error']   = true;
			self::$response['message'] = 'Ошибка авторизации';
			self::$response['data'][]  = [
				"message"    => $message,
				"code"       => $arAuthResult['ERROR_TYPE'],
				"customData" => $data,
			];
		}
		else {
			$token                  = Actions\AuthToken::create($data['LOGIN'], $data['PASSWORD']);
			self::$response['data'] = [
				"ID"    => $USER->GetID(),
				"token" => $token,
				"user"  => Actions\AuthToken::decode($token, $USER->GetID())['data'],
			];
		}

		return self::$response;
	}
}