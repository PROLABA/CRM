<?php

namespace Laba\Rest\Actions;


class GetHighLoadListAction
{

	public static function run($highload_id, $data, $isGetParent = false, $isGetItems = false): array
	{
		$response         = [
			'error'   => false,
			'message' => '',
			'data'    => null,
		];
		$entityDataClass  = getHlblObject($highload_id);
		$resGet           = $entityDataClass::getList($data);
		$response['data'] = [];
		while ($row = $resGet->fetch()) {
			$row = parsePhotos($highload_id, $row);
			if ($isGetParent) {
				$row = parseParents($highload_id, $row);
			}
			if ($isGetItems) {
				$row = parseItems($highload_id, $row);
			}
			$response['data'][] = replaceFromHighloadFields($row);
		}

		return $response;
	}

}