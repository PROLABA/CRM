<?php

namespace Laba\Api;

use Bitrix\Main\Loader;
use Bitrix\Highloadblock as HL;
use Bitrix\Main\Entity;

Loader::includeModule("highloadblock");

class Helper
{

  public static function includeFile($filePath, $incDir = false)
  {
    $filePathCurrent = $filePath;
    $filePathFull    = $_SERVER["DOCUMENT_ROOT"].$filePath;
    if ($incDir) {
      $filePathFull    = $_SERVER["DOCUMENT_ROOT"].'/_inc.files/'.$incDir.'/'.$filePath;
      $filePathCurrent = '/_inc.files/'.$incDir.'/'.$filePath;;
    }

    if (file_exists($filePathFull)) {
      $arFuncParams = [
        "MODE"        => 'html',
        "NAME"        => '',
        "SHOW_BORDER" => false,
      ];
      global $APPLICATION;
      $APPLICATION->IncludeFile($filePathCurrent, [], $arFuncParams);
    } else {
      echo "<div style='color:red'>Файл $filePathCurrent не существует</div>";
    }
  }

  public static function includeIcon($iconName)
  {
    $filePath = '/_inc.icons/'.$iconName.'.svg';

    if (file_exists($_SERVER["DOCUMENT_ROOT"].$filePath)) {
      $arFuncParams = [
        "MODE"        => 'html',
        "NAME"        => '',
        "SHOW_BORDER" => false,
      ];

      global $APPLICATION;
      $APPLICATION->IncludeFile($filePath, [], $arFuncParams);
    } else {
      echo "<div style='color:red'>Файл $filePath не существует</div>";
    }
  }

  public static function formatPhone($phone)
  {
    $phone = trim($phone);

    $res = preg_replace([
      '/[\+]?([7|8])[-|\s]?\([-|\s]?(\d{3})[-|\s]?\)[-|\s]?(\d{3})[-|\s]?(\d{2})[-|\s]?(\d{2})/',
      '/[\+]?([7|8])[-|\s]?(\d{3})[-|\s]?(\d{3})[-|\s]?(\d{2})[-|\s]?(\d{2})/',
      '/[\+]?([7|8])[-|\s]?\([-|\s]?(\d{4})[-|\s]?\)[-|\s]?(\d{2})[-|\s]?(\d{2})[-|\s]?(\d{2})/',
      '/[\+]?([7|8])[-|\s]?(\d{4})[-|\s]?(\d{2})[-|\s]?(\d{2})[-|\s]?(\d{2})/',
      '/[\+]?([7|8])[-|\s]?\([-|\s]?(\d{4})[-|\s]?\)[-|\s]?(\d{3})[-|\s]?(\d{3})/',
      '/[\+]?([7|8])[-|\s]?(\d{4})[-|\s]?(\d{3})[-|\s]?(\d{3})/',
    ], [
      '+7$2$3$4$5',
      '+7$2$3$4$5',
      '+7$2$3$4$5',
      '+7$2$3$4$5',
      '+7$2$3$4',
      '+7$2$3$4',
    ], $phone);

    return $res;
  }

  public static function convertBytes($size)
  {
    $i = 0;
    while (floor($size / 1024) > 0) {
      ++$i;
      $size /= 1024;
    }

    $size = str_replace('.', ',', round($size, 1));
    switch ($i) {
      case 0:
        return $size .= ' байт';
      case 1:
        return $size .= ' КБ';
      case 2:
        return $size .= ' МБ';
    }
  }


  /**
   * @return void
   * Функция получение информации о разделе из section.php
   */
  public static function getSectionProperty($arParams, $arSelect): array
  {
    $arResult = [];
    $arFilter = ['IBLOCK_ID' => $arParams['IBLOCK_ID']];

    if (!empty($arParams['SECTION_CODE'])) {
      $arFilter['CODE'] = $arParams['SECTION_CODE'];
    }
    if (!empty($arParams['SECTION_ID'])) {
      $arFilter['ID'] = $arParams['SECTION_ID'];
    }

    $rsSect = \CIBlockSection::GetList(['left_margin' => 'asc'], $arFilter, false, $arSelect);
    while ($arSect = $rsSect->GetNext()) {
      $arResult = $arSect;
      break;
    }

    return $arResult;
  }

  
  /**
   * @return array
   * Функция получение информации о разделе из section.php
   */
  public static function getBlockProperty($iblockId, $elementId):array
  {
    $rsBlock = \CIBlockElement::GetProperty($iblockId, $elementId);
    $arResult =[];
    while ($arProp = $rsBlock->GetNext()) {
      if($arProp['ACTIVE'] === 'N') continue;
      if($arProp["MULTIPLE"] === 'N'){
        $arResult[$arProp['CODE']] = $arProp['VALUE'];
      }else{
        $arResult[$arProp['CODE']][] = $arProp['VALUE'];
      }
    }
    return $arResult;
  }

}
