<?php

namespace Laba\Api;

use Bitrix\Iblock\Iblock;
use CIBlockSection;

class Menu
{
  public string $sectionId;

  private $arSections = [];

  public function __construct($sectionId)
  {
    $this->sectionId = $sectionId;
  }

  public function getMenuItems(): array
  {
    return $this->getListMenu();
  }

  private function getListMenu(): array
  {
    $tree = CIBlockSection::GetTreeList(['IBLOCK_ID' => MENU_IB], ['ID', 'IBLOCK_SECTION_ID', 'NAME', 'UF_URL']);
    while ($section = $tree->GetNext()) {
      if (empty($section['IBLOCK_SECTION_ID'])) {
        $section['IBLOCK_SECTION_ID'] = 'parent';
      }
      $this->arSections[$section['IBLOCK_SECTION_ID']][$section['ID']] = $section;
    }
    $arResult = [];
    foreach ($this->arSections['parent'] as $arParent) {
      if ($arParent['ID'] === $this->sectionId) {
        foreach ($this->arSections[$arParent['ID']] as $arChild) {
          $arResult[$arChild['ID']] = [
            'NAME' => $arChild['NAME'],
            'URL'  => $arChild['UF_URL'],
          ];
          if (!empty($this->arSections[$arChild['ID']])) {
            foreach ($this->arSections[$arChild['ID']] as $arSubChild) {
              $arResult[$arChild['ID']]['CHILD'][$arSubChild['ID']] = [
                'NAME' => $arSubChild['NAME'],
                'URL'  => $arSubChild['UF_URL'],
              ];
              if (!empty($this->arSections[$arSubChild['ID']])) {
                foreach ($this->arSections[$arSubChild['ID']] as $ar2SubChild) {
                  $arResult[$arChild['ID']]['CHILD'][$arSubChild['ID']]['CHILD'][$ar2SubChild['ID']] = [
                    'NAME' => $ar2SubChild['NAME'],
                    'URL'  => $ar2SubChild['UF_URL'],
                  ];
                }
              }
            }
          }
        }
      }
    }

    return $arResult;
  }
}