const images = [
	"./images/vapor-image-1.gif",
	"./images/vapor-image-2.gif",
	"./images/vapor-image-3.gif",
	"./images/vapor-image-4.gif",
	"./images/vapor-image-5.gif",
	"./images/vapor-image-6.webp"
];

$(document).ready(function () {
	let current = 0;
	$("#mirror-content").on("click", function () {
		$(this).css({
			"background-image": `url(${images[++current % images.length]})`
		});
	});
});

let fullscreen;
let fsEnter = document.getElementById('fullscr');
fsEnter.addEventListener('click', function (e) {
    e.preventDefault();
    if (!fullscreen) {
        fullscreen = true;
        document.documentElement.requestFullscreen();
        fsEnter.innerHTML = "Exit Fullscreen";
    }
    else {
        fullscreen = false;
        document.exitFullscreen();
        fsEnter.innerHTML = "Go Fullscreen";
    }
});
