<?php

namespace Laba\Rest\Controllers;

use Bitrix\Main\DB\Exception;
use \Bitrix\Main\Error;
use \Laba\Rest\Actions;
use Laba\Rest\Controller;

class Teeth extends Controller
{
	const HLBL_ID = HLBL_ID_Teeth;

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
		], true);
	}
	public static function getSectionsListAction(): array
	{
		return Actions\GetHighLoadListAction::run(
			 HLBL_ID_TeethSections, [
			"select" => ["*"],
			"order"  => ["ID" => "ASC"],
		], false, true);
	}
}