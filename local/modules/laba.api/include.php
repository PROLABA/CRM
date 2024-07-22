<?php

use \Bitrix\Main\Loader;

Loader::includeModule("main");
Loader::includeModule("iblock");
Loader::includeModule('highloadblock');
Loader::includeModule('sale');

require_once __DIR__."/lib/include/functions.php";
require_once __DIR__."/lib/include/constants.php";
require_once __DIR__."/lib/include/handlers.php";

Loader::registerAutoLoadClasses("laba.api", [
  '\\Laba\\Api\\Helper' => 'lib/Helper.php',
  '\\Laba\\Api\\Parser' => 'lib/Parser.php',
  '\\Laba\\Api\\Breef'  => 'lib/Breef.php',
  '\\Laba\\Api\\Basket' => 'lib/Basket.php',
]);




