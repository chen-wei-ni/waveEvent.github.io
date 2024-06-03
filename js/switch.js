/*語言切換選單*/
$('.switch-list').hide()
$('.language-pack').click(function (e) {
	e.stopPropagation();
	$('.switch-list').toggle(300, 'linear')
})
$("body").click(function () {
	$('.switch-list').hide()
})
$('.switch-list').click(function (e) {
	e.stopPropagation();
})

/*語言圖示hover變色*/
$('.language-pack').hover(function () {
	$('.switch-icon').attr("src", "images/language/icon_language_hover.svg");
},
	function () {
		$('.switch-icon').attr("src", "images/language/icon_language.svg");

	});

/*滑動至最上方*/
$('.top_btn').hide();
$(window).scroll(function () {
	var sh = $(window).scrollTop();

	if (sh > 100) {
		$('.top_btn').show(500, 'swing');
	} else {
		$('.top_btn').hide(500, 'swing');
	}
});

$('.top_btn').click(function () {
	$('html,body').animate({
		scrollTop: 0 //到最上面  
	}, 500);
	return false;
});

/*獎金跳動動畫每2.5秒一次*/
const animate = document.querySelector('.award');
animate.classList.add('fuyofuyo');
animate.addEventListener('animationend', () => {
	animate.classList.remove('fuyofuyo');
	setTimeout(function () {
		animate.classList.add('fuyofuyo');
	}, 2500)
});

function sloganEffect() {
	coins.classList.add('effect');
};
function coinEffect() {
	eCoins.forEach((e) => {
		e.classList.add('effect');
	})

};

const coins = document.querySelector(".glow")
const eCoins = document.querySelectorAll(".bg_decorate .coin")

anime({
	targets: ".glow",
	translateY: [-200, 0],
	scale: [0, 1],
	duration: 1500,
	delay: 800,
	easing: 'spring(1, 180, 10, 0)',
	complete: function () {
		animationDone = true;
		sloganEffect();
	}
});

anime({
	targets: " .one",
	translateX: [1200, 0],
	translateY: [-200, 0],
	scale: [0, 1],
	rotate: {
		value: '+=2turn', // 0 + 2 = '2turn'
		duration: 500,
		easing: 'easeInOutSine'
	},
	duration: 1500,
	delay: 800,
	easing: "spring(1, 80, 10, 0)",
	complete: function () {
		animationDone = true;
		coinEffect();
	}
});

anime({
	targets: " .two",
	translateX: [1000, 0],
	rotateY: {
		value: '+=1turn', // 0 + 2 = '2turn'
		duration: 600,
		easing: 'easeInOutSine'
	},
	translateY: [200, 0],
	scale: [0, 1],
	duration: 1500,
	delay: 800,
	complete: function () {
		animationDone = true;
		coinEffect();
	}
});

anime({
	targets: " .three",
	scale: [0, 1],
	translateX: [-450, 0],
	rotate: {
		value: '+=1turn', // 0 + 2 = '2turn'
		duration: 600,
		easing: 'easeInOutSine'
	},
	translateY: [-200, 0],
	duration: 1500,
	delay: 800,
	complete: function () {
		animationDone = true;
		coinEffect();
	}
});

