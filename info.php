<?php
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/modules/main/include/prolog_before.php");

use Laba\Rest\Controllers\Order;
var_dump(Order::updateAction());