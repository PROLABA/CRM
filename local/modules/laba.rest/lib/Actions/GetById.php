<?php

namespace Laba\Rest\Actions;

use Bitrix\Main\DB\Exception;

class GetHighLoadItemAction
{

	private static $response
		= [
			'error'   => false,
			'message' => '',
			'data'    => null,
		];

	public static function run($highload_id, $intId): array
	{
		try {
			$entityDataClass = getHlblObject($highload_id);
			$resGet          = $entityDataClass::getById($intId)->fetch();
			if ($resGet) {
				self::$response['data'] = replaceFromHighloadFields($resGet);
			}
			else {
				throw new Exception($entityDataClass::getTableName()." не существует");
			}
		} catch (Exception $e) {
			self::$response['data']    = [
				[
					"message"    => $e->getMessage(),
					"code"       => LABA__GET_ERROR,
					"customData" => $intId,
				],
			];
			self::$response['message'] = $e->getMessage();
			self::$response['error']   = true;
			http_response_code(400);
			echo json_encode(self::$response);
			exit();
		}

		return self::$response;
	}
}