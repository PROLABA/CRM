<?

global $APPLICATION;

if (!check_bitrix_sessid()) {
  return;
}

if ($errorException = $APPLICATION->GetException()) {
  echo CAdminMessage::ShowMessage($errorException->GetString());
} else {
  echo CAdminMessage::ShowNote("Модуль установлен");
}
?>

<form action="<?= $APPLICATION->GetCurPage() ?>">
  <input type="hidden" name="lang" value="<?= LANG ?>"/>
  <input type="submit" value="Вернуться в список">
</form>
