/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

document.addEventListener ('DOMContentLoaded', function () {
  document.getElementById ('analysis').addEventListener ('click', function () {
    chrome.tabs.executeScript (null, {
      file: "js/analysis.js",
    });
  });
  document.getElementById ('translate_cn2tw').addEventListener ('click', function () {
    chrome.tabs.executeScript (null, {
      file: "js/translate_cn2tw.js",
    }, function () {
      window.close ();
    });
  });
  document.getElementById ('right_click').addEventListener ('click', function () {
    chrome.tabs.executeScript (null, {
      file: "js/right_click.js",
    }, function () {
      window.close ();
    });
  });
  document.getElementById ('border_red').addEventListener ('click', function () {
    chrome.tabs.executeScript (null, {
      file: "js/border_red.js",
    }, function () {
      window.close ();
    });
  });
  document.getElementById ('reload_all_tab').addEventListener ('click', function () {
    chrome.tabs.query ({}, function (tabs) {
      for (var i = 0; i < tabs.length; i++) chrome.tabs.update(tabs[i].id, {"url": tabs[i].url});
    });
  });

});