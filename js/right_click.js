/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

var tmp = document.getElementById ('zeus_right_click');
if (tmp !== null && tmp && tmp.parentNode) tmp.parentNode.removeChild (tmp);

var actualCode = 'window.ZEUS_RC = function (a) { ona = "on" + a; if(window.addEventListener) window.addEventListener (a, function (e) { for(var n = e.originalTarget; n; n = n.parentNode) n[ona]=null; }, true); window[ona] = null; document[ona] = null; document.onkeydown = null; if(document.body) document.body[ona] = null; document.body.oncopy = null; }; window.ZEUS_RC ("contextmenu"); window.ZEUS_RC ("click"); window.ZEUS_RC ("mousedown"); window.ZEUS_RC ("mouseup"); window.ZEUS_RC ("selectstart");';
var script = document.createElement ('script');
script.setAttribute ('id', 'zeus_right_click');
script.textContent = actualCode;
(document.head||document.documentElement).appendChild (script);
script.remove ();

tmp = document.getElementById ('_z_alert');
if (tmp !== null && tmp && tmp.parentNode) tmp.parentNode.removeChild (tmp);

var _z_alert = document.createElement ('div');
_z_alert.setAttribute ('id', '_z_alert').setAttribute ('class', '_z_clean');
document.body.appendChild (_z_alert);

setTimeout (function () {
  _z_alert.setAttribute ('class', 'show');
  setTimeout (function () { _z_alert.removeAttribute ('class'); }, 5000);
}, 500);
