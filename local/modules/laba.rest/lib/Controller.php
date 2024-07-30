<?php
namespace Laba\Rest;
use Bitrix\Main\DB\Exception;
use Bitrix\Highloadblock;
class Controller {
	protected static $response
		= [
			'error'   => false,
			'message' => '',
			'data'    => null,
		];
	protected static function issetHighloadItem($highload_id, $id){
		Actions\GetHighLoadItemAction::run($highload_id, $id);
	}
	protected static function checkPermission($userId)
	{
		try {
			$user = \CUser::GetByID($userId)->Fetch();
			if ($user['ID'] != 1) {
				throw new Exception('У вас нет прав на создание наряда');
			}
		} catch (Exception $e) {
			http_response_code(403);
			echo json_encode(
				[
					'error'   => true,
					'message' => $e->getMessage(),
					'data'    => (int)$userId,
				]);
			exit();
		}
	}
	protected static function issetUser($userId)
	{
		try {
			if ($created_user = \CUser::GetByID($userId)->Fetch()) {
				self::checkPermission($created_user['ID']);
			}
			else {
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

	public static function test($id){
		return [];
	}

}