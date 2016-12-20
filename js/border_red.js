/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

var elements = document.getElementsByTagName ("*");
for (var i = 0; i < elements.length; i++)
  elements[i].style.border = "1px solid rgba(255, 0, 0, .25)";

var tmp = document.getElementById ('_z_alert');
if (tmp !== null && tmp && tmp.parentNode) tmp.parentNode.removeChild (tmp);

var _z_alert = document.createElement ('div');
_z_alert.setAttribute ('id', '_z_alert');
document.body.appendChild (_z_alert);

setTimeout (function () {
  _z_alert.setAttribute ('class', 'show');
  setTimeout (function () { _z_alert.removeAttribute ('class'); }, 5000);
}, 500);
