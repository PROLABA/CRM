<?php

namespace Laba\Rest\Actions;

use Bitrix\Main\DB\Exception;
use Laba\Rest\Actions;


class UpdateHighLoadRowAction
{

	private static array $response
		= [
			'error'   => false,
			'message' => '',
			'data'    => null,
		];

	public static function run(int $highload_id, int $intId, array $data): array
	{
		$entityDataClass = getHlblObject($highload_id);
		// check existing item row
		$rowCurrent = Actions\GetHighLoadItemAction::run($highload_id, $intId)['data'];

		//check fields type
		checkFieldsType($highload_id, $data);


		$resUpdate = $entityDataClass::update($intId, replaceToHighloadFields($data));
		$rowUpdated = Actions\GetHighLoadItemAction::run($highload_id, $intId)['data'];
		try {
			if ($resUpdate) {
				self::$response['data'] = $rowUpdated;
			}
			else {
				throw new \Exception('Ошибка полей');
			}
		} catch (\Exception $e) {
			self::$response['data']    = $resUpdate->getErrors();
			self::$response['message'] = $e->getMessage();
			self::$response['error']   = true;
			echo json_encode(self::$response);
			exit();
		}

		return self::$response;
	}
}