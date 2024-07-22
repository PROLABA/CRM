<?

global $APPLICATION;

if (!check_bitrix_sessid()) {
  return;
}

echo CAdminMessage::ShowNote("Модуль удален");
?>

<form action="<?= $APPLICATION->GetCurPage() ?>">
  <input type="hidden" name="lang" value="<?= LANG ?>"/>
  <input type="submit" value="Вернуться в список">
</form>
