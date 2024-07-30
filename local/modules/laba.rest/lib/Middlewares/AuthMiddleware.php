<?php

namespace Laba\Rest\Middlewares;

use Bitrix\Main\DB\Exception;


class AuthMiddleware
{

	private static $response
		= [
			'error'   => false,
			'message' => '',
			'data'    => null,
		];

	public static function run(): array
	{
		[$SECRET_TOKEN, $AUTH_TOKEN] = explode('::', getallheaders()['Authorization']);
		try {
			if (!($AUTH_TOKEN)) {
				throw new Exception('У вас нет прав на действие');
			}
		} catch (Exception $e) {
			self::$response['data']    = null;
			self::$response['message'] = $e->getMessage();
			self::$response['error']   = true;
			echo json_encode(self::$response);
			exit();
		}


		return self::$response;
	}
}