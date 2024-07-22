<?php

namespace Laba\Rest\Actions;


class GetHighLoadListAction
{

	private static $response = [
			'error'   => false,
			'message' => '',
			'data'    => null,
		];

	public static function run($highload_id, $data): array
	{
		$entityDataClass = getHlblObject($highload_id);
		$resGet = $entityDataClass::getList($data);
		self::$response['data'] = [];
		while ($row = $resGet->fetch()) {
			self::$response['data'][] = replaceFromHighloadFields($row);
		}

		return self::$response;
	}
}