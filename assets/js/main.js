/*==================== DISABLE RIGHT CLICK ON IMAGE ====================*/
window.addEventListener(
	"contextmenu",
	function (ev) {
		ev.preventDefault();
		return false;
	},
	false
);
