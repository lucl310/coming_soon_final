
window.onload = function () {
	function Popup() {
	var email = prompt("If You Like This, And Want To Recieve Email Updates About What Is Coming Soon In The Gaming And Movie Industry, Enter Your Email")
		if (email != null) {
			document.getElementById('Email').innerHTML = "Thanks for signing up with us! We'll catch up with you very soon at " + email;
		}
	}
	console.log("YA DIGGETY DEET")
	AOS.init();
	var x = document.getElementById('music');
	// x.autoplay = true
	// x.load;
	document.addEventListener('click', function() {
		x.play();
	})

	setTimeout(Popup, 10000)
}
