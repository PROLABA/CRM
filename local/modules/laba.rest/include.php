<?php

use \Bitrix\Main\Loader;

Loader::includeModule("main");
Loader::includeModule("iblock");
Loader::includeModule('highloadblock');

require_once __DIR__."/lib/include/functions.php";
require_once __DIR__."/lib/include/constants.php";

Loader::registerAutoLoadClasses(
	"laba.rest", [
	'\\Laba\\Rest\\Controller' => 'lib/Controller.php',
	'\\Laba\\Rest\\Controllers\\Order' => 'lib/Controllers/Order.php',
	'\\Laba\\Rest\\Controllers\\Organization' => 'lib/Controllers/Organization.php',
	'\\Laba\\Rest\\Controllers\\Banks' => 'lib/Controllers/Banks.php',
	'\\Laba\\Rest\\Controllers\\Tasks' => 'lib/Controllers/Tasks.php',
	'\\Laba\\Rest\\Controllers\\Teeth' => 'lib/Controllers/Teeth.php',
	'\\Laba\\Rest\\Actions\\CreateHighLoadRowAction' => 'lib/Actions/Create.php',
	'\\Laba\\Rest\\Actions\\GetHighLoadListAction' => 'lib/Actions/GetList.php',
	'\\Laba\\Rest\\Actions\\GetHighLoadItemAction' => 'lib/Actions/GetById.php',
	'\\Laba\\Rest\\Actions\\UpdateHighLoadRowAction' => 'lib/Actions/UpdateById.php',
]);