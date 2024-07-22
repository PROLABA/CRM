<?php

use \Bitrix\Main\Config\Option;
use \Bitrix\Main\EventManager;
use \Bitrix\Main\ModuleManager;

class laba_rest extends CModule
{
  private $moduleEvents;

  private $moduleAgents;

  public function __construct()
  {
    $this->MODULE_ID           = "laba.rest";
    $this->MODULE_NAME         = 'laba Rest';
    $this->MODULE_DESCRIPTION  = '';
    $this->MODULE_VERSION      = '0.1';
    $this->MODULE_VERSION_DATE = '2022-11-24 23:00:00';
    $this->PARTNER_NAME        = 'Prolaba';
    $this->PARTNER_URI         = 'labatrs.ru';

    $this->moduleAgents = [

    ];
    $this->moduleEvents = [];
  }

  public function DoInstall()
  {
    global $APPLICATION;

    ModuleManager::registerModule($this->MODULE_ID);

    $this->InstallFiles();
    $this->InstallAgents();
    $this->InstallEvents();

    $APPLICATION->IncludeAdminFile('Установка модуля', __DIR__.'/step.php');
  }


  public function InstallFiles()
  {
    return true;
  }

  public function InstallAgents()
  {
    if (empty($this->moduleAgents)) {
      return true;
    }

    foreach ($this->moduleAgents as $agent) {
      CAgent::AddAgent($agent, $this->MODULE_ID, "N", 60, "", "N", "", 1);
    }

    return true;
  }

  public function InstallEvents()
  {
    if (empty($this->moduleEvents)) {
      return true;
    }

    foreach ($this->moduleEvents as $event) {
      EventManager::getInstance()->registerEventHandler("main", $event, $this->MODULE_ID, "\\Laba\\Api\\Handler", $event);
    }

    return true;
  }

  public function DoUninstall()
  {
    global $APPLICATION;

    $this->UnInstallFiles();
    $this->UnInstallAgents();
    $this->UnInstallEvents();

    ModuleManager::unRegisterModule($this->MODULE_ID);

    $APPLICATION->IncludeAdminFile('Удаление модуля', __DIR__."/unstep.php");

    return true;
  }

  public function UnInstallFiles()
  {
    return true;
  }

  public function UnInstallAgents()
  {
    //Option::delete($this->MODULE_ID);
    CAgent::RemoveModuleAgents($this->MODULE_ID);

    return true;
  }

  public function UnInstallEvents()
  {
    if (empty($this->moduleEvents)) {
      return true;
    }

    foreach ($this->moduleEvents as $event) {
      EventManager::getInstance()->unRegisterEventHandler("main", $event, $this->MODULE_ID, "Laba\\Api\\Handler", $event);
    }

    return true;
  }
}
