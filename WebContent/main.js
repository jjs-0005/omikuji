window.onload = function() {

	var num = Math.floor(11*Math.random());

	if (num === 10) {
		document.getElementById("omikuji").innerText = "大吉";

	} else if (num >= 7) {
		document.getElementById("omikuji").innerText = "吉";

	} else if (num >= 5) {
		document.getElementById("omikuji").innerText = "中吉";

	} else if (num >= 3) {
		document.getElementById("omikuji").innerText = "小吉";

	}else {
			document.getElementById("omikuji").innerText = "凶";
	}

}