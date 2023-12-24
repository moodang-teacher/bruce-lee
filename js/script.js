$(function () {
	// const scream = new Audio('scream.mp3');
	const scream = $('.scream').get(0);

	const TL = gsap.timeline();
	TL.from('nav a', { y: -100, stagger: 0.2, ease: 'power2.out' });
	TL.from('.menu', { y: -100, autoAlpha: 0 });
	TL.from('.logo', {
		autoAlpha: 0,
		ease: 'none',
		rotation: 360,
		duration: 1,
		ease: 'bounce.out',
	});
	TL.from('.foot-box', { autoAlpha: 0, width: 0 });
	TL.from('.sns-link li', { autoAlpha: 0, scale: 0.5, stagger: 0.1 });
	TL.from('.copyright', { autoAlpha: 0, x: -20 }, '<');
	TL.from('.bruce-lee-bg', { autoAlpha: 0, duration: 2, scale: 0.9 }, 0);
	TL.fromTo(
		'.bruce-lee',
		{ opacity: 0, scale: 1.2 },
		{ opacity: 1, scale: 1, duration: 1, ease: 'power4.inOut' }
	);
	TL.from('.title h2 strong', { x: -50, autoAlpha: 0, duration: 1 });
	TL.from(
		'.title h2 span',
		{
			x: -50,
			autoAlpha: 0,
			duration: 1,
			onComplete: () => Splitting(),
		},
		'-=.8'
	);
	TL.from('.small-bruce-lee', { x: 50, autoAlpha: 0, duration: 0.5 }, '-=.5');
	TL.from('.title h2 span b', {
		color: '#000',
		delay: 2,
		onComplete: () => {
			$('.small-bruce-lee').addClass('action');
			setTimeout(function () {
				mover();
			}, 300);
		},
	});

	$('.small-bruce-lee').on('click', () => scream.play());

	var X, Y;
	var Xtratado, Ytratado;

	function mover() {
		$('.bruce-lee').css({
			transform: `translateX(${Xtratado}px)`,
		});
		$('.bruce-lee-bg').css({
			transform: `translate(-${Xtratado}px, ${Ytratado}px)`,
		});
		$('.title').css({
			transform: `translate(-${Xtratado * 1.8}px, -50%)`,
		});

		requestAnimationFrame(mover);
	}
	$(document).on('mousemove', (event) => {
		X = event.pageX;
		Y = event.pageY;

		ancho = $(window).width() / 2;
		largo = $(window).height() / 2;

		Xtratado = (ancho - X) * (1 / 50);
		Ytratado = (largo - Y) * (1 / 50);
	});
});
