<?php

namespace Laba\Rest\Actions;

use Bitrix\Main\DB\Exception;


class CreateHighLoadRowAction
{

	private static $response
		= [
			'error'   => false,
			'message' => '',
			'data'    => null,
		];

	public static function run($highload_id, $data): array
	{
		$entityDataClass = getHlblObject($highload_id);
		$resCreate       = $entityDataClass::add(replaceToHighloadFields($data));
		$orderId         = $resCreate->getId();
		//check fields type
		checkFieldsType($highload_id, $data);
		try {
			if (intval($orderId) > 0) {
				self::$response['data'] = replaceFromHighloadFields($entityDataClass::getById($resCreate->getId())->fetch());
			}
			else {
				throw new Exception('Ошибка создания '.$entityDataClass::getTableName());
			}
		} catch (Exception $e) {
			http_response_code(400);
			self::$response['data']    = $resCreate->getErrors();
			self::$response['message'] = $e->getMessage();
			self::$response['error']   = true;
			echo json_encode(self::$response);
			exit();
		}


		return self::$response;
	}
}