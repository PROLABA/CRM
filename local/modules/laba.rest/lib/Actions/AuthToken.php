<?php

namespace Laba\Rest\Actions;

use Bitrix\Main\DB\Exception;


class AuthToken
{
	public static function create($login, $password): string
	{
		$string = LABA__AUTH_SALT."|||".$login."|||".$password;

		return base64_encode($string);
	}

	public static function decode($auth_hashed, $user_id): array
	{
		$decoded = base64_decode($auth_hashed);
		[$salt, $login, $password] = explode('|||', $decoded);
		$arUser = \CUser::GetByLogin($login)->GetNext();
		$response = [
			'error'   => false,
			'message' => '',
		];
		if ($salt !== LABA__AUTH_SALT || !$arUser) {
			http_response_code(400);
			$response['data']    = null;
			$response['message'] = 'Токен не валиден';
			$response['error']   = true;
			echo json_encode($response);
			exit();
		}
		else {
			$response['data']    = $arUser;
			return $response;
		}
	}
}