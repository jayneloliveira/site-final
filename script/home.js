var hoverElement = document.getElementById('dropdown');
var hoverItem = document.getElementById('dropdown-item');

hoverElement.onmouseover = function() {
hoverItem.style.display = "block";
}

hoverElement.onmouseout = function() {
hoverItem.style.display = "none";
}