<?php
/**
 * @var $APPLICATION
 */

use Bitrix\Main\Context;

function getPageCanonical()
{
  global $APPLICATION;

  if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] == 'on') {
    $protocol = 'https://';
  } else {
    $protocol = 'http://';
  }

  $sCanonicalUrl = $protocol.$_SERVER['SERVER_NAME'].$APPLICATION->GetCurPage(false);
  $request       = Context::getCurrent()->getRequest();
  $arValues      = $request->getQueryList();

  if (!empty($arValues)) {
    $arPage = [];
    foreach ($arValues as $queryName => $sVal) {
      if (strpos($queryName, 'PAGEN_') !== false) {
        $arPage[$queryName] = $sVal;
      }
    }

    if (!empty($arPage)) {
      //$sCanonicalUrl .= http_build_query($arPage);
      return '';
    }
  }

  return '<link rel="canonical" href="'.$sCanonicalUrl.'">';
}

function pre_dump(...$data)
{
  echo '<pre>';
	foreach ($data as $d){
		var_dump($d);
	}
  echo '</pre>';
}

function includeText($templateFolder, $title, $filename)
{
  global $APPLICATION;
  $APPLICATION->IncludeFile($templateFolder."/inc-text/{$filename}.php", [], ["NAME" => $title, "TEMPLATE" => "none"]);
}

function getPhotoResized($imgId, $x1)
{
  $renderImageLazy = CFile::ResizeImageGet($imgId, ["width" => 10, "height" => 10], BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);

  $renderImageX1 = CFile::ResizeImageGet($imgId, ["width" => $x1, "height" => $x1], BX_RESIZE_IMAGE_PROPORTIONAL_ALT, false);


  return [
    'x0'       => $renderImageLazy['src'],
    'x1'       => $renderImageX1['src'],
    'original' => CFile::GetPath($imgId),
  ];
}


function getGallerySection($arPhotos_list){
  extract([$arPhotos_list]);
  ob_start();
  include $_SERVER['DOCUMENT_ROOT'].'/local/templates/elegrant/components/prolaba/gallery/template.php';
  $res = ob_get_contents();
  ob_end_clean();
  return $res;
}

function getInputHtml($type, $name, $key, $label, $placeholder = '', $desc = '', $value = false){
  switch ($type){
    case 'radio': {
      return <<<HTML
                <div class="input-wrap input-wrap--radio">
                  <input class="input-field input-field--radio"
                         type="radio"
                         id="{$key}"
                         value="{$value}"
                         name="{$name}">
                  <label for="{$key}"
                         class="input-label">{$label}</label>
                </div>
              HTML;
    }
    case 'text': {
      return <<<HTML
                <div class="input-wrap input-wrap--text">
                  <label for="$key"
                         class="input-label">$label</label>
                  <input class="input-field input-field--text"
                         type="text"
                         id="$key"
                         name="$name"
                         placeholder="$placeholder">
                  <div class="input-desc">$desc</div>
                </div>
              HTML;

    }
  }
}
function getInputRadioHtml($name, $key, $label, $value, $checked){
	return <<<HTML
                <div class="input-wrap input-wrap--radio">
                  <input class="input-field input-field--radio"
                         type="radio"
                         id="{$key}"
                         value="{$value}"
                         checked="{$checked}"
                         name="{$name}">
                  <label for="{$key}"
                         class="input-label">{$label}</label>
                </div>
              HTML;
}