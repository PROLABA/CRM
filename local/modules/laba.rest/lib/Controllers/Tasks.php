<?php

namespace Laba\Rest\Controllers;

use Bitrix\Main\DB\Exception;
use \Bitrix\Main\Error;
use \Laba\Rest\Actions;
use Laba\Rest\Controller;

class Tasks extends Controller
{
	const HLBL_ID = HLBL_ID_Tasks;

	public static function createAction(array $data)
	{
		return Actions\CreateHighLoadRowAction::run(self::HLBL_ID, $data);
	}

	public static function getByIdAction(?int $intId): array
	{
		return Actions\GetHighLoadItemAction::run(self::HLBL_ID, $intId);
	}

	public static function getListAction(array $arFilter, int $intLimit): array
	{
		return Actions\GetHighLoadListAction::run(
			self::HLBL_ID, [
			"select" => ["*"],
			"order"  => ["ID" => "ASC"],
			"filter" => $arFilter,
			"limit"  => $intLimit,
		]);
	}

	public static function updateAction(int $intId, $data): array
	{
		return Actions\UpdateHighLoadRowAction::run(self::HLBL_ID, $intId, $data);
	}
}