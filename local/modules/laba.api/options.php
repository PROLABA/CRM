<?php

use \Bitrix\Main\HttpApplication;
use \Bitrix\Main\Loader;
use \Bitrix\Main\Config\Option;

global $APPLICATION;

$request = HttpApplication::getInstance()->getContext()->getRequest();

$module_id = htmlspecialcharsbx($request["mid"] != "" ? $request["mid"] : $request["id"]);

Loader::includeModule($module_id);

$aTabs = [
  [
    "DIV"     => "edit",
    "TAB"     => "Настройки",
    "TITLE"   => "Настройки",
    "OPTIONS" => [
      // Основные
      "Основные",
      [
        "USE_LABA_REST_API",
        "API Включен",
        "",
        ["checkbox"],
      ],
      [
        "LABA_LOG_PATH",
        "Путь к папке логов",
        "/logs/api/",
        ["text", 30],
      ],
    ],
  ],
];

if ($request->isPost() && check_bitrix_sessid()) {
  foreach ($aTabs as $aTab) {
    foreach ($aTab["OPTIONS"] as $arOption) {
      if (!is_array($arOption)) {
        continue;
      }

      if ($arOption["note"]) {
        continue;
      }

      if ($request["apply"]) {
        $optionValue = $request->getPost($arOption[0]);

        if ($arOption[0] == "switch_on") {
          if ($optionValue == "") {
            $optionValue = "N";
          }
        }

        Option::set($module_id, $arOption[0], is_array($optionValue) ? implode(",", $optionValue) : $optionValue);
      } elseif ($request["default"]) {
        Option::set($module_id, $arOption[0], $arOption[2]);
      }
    }
  }

  CAdminMessage::ShowMessage(["MESSAGE" => "Значения обновленны", "TYPE" => "OK"]);
}

$tabControl = new CAdminTabControl("tabControl", $aTabs);

$tabControl->Begin();
?>
  <form action="<?= $APPLICATION->GetCurPage() ?>?mid=<?= $module_id ?>&lang=<?= LANG ?>" method="post">
    <?= bitrix_sessid_post() ?>
    <?
    foreach ($aTabs as $aTab) {
      if ($aTab["OPTIONS"]) {
        $tabControl->BeginNextTab();
        __AdmSettingsDrawList($module_id, $aTab["OPTIONS"]);
      }
    }

    $tabControl->Buttons();
    ?>

    <input type="submit" name="apply" value="Применить" class="adm-btn-save"/>
    <input type="submit" name="default" value="По умолчанию"/>
  </form>
<?
$tabControl->End();
