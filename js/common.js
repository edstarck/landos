$(function() {

	$(".link-scroll").on("click", function() {
		$("html, body").animate({
			 scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			 duration: 500,
			 easing: "swing"
		});
		return false;
 });

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
	
});

$(window).load(function() {
	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	var controllerMenu = new ScrollMagic.Controller({globalSceneOptions: {triggerHook: .5}});
	var timeHome = $('#welcome').innerHeight(),
			timeDevelopment = $('#offers').innerHeight(),
			timeTeam = $('#partners').innerHeight(),
			timePortfolio = $('#contacts').innerHeight();
	
	new ScrollMagic.Scene({triggerElement: "#welcome", duration: timeHome})
		.setClassToggle("#high1", "menu-dot__link--active")
		.addTo(controllerMenu);
	new ScrollMagic.Scene({triggerElement: "#offers", duration: timeDevelopment})
		.setClassToggle("#high2", "menu-dot__link--active")
		.addTo(controllerMenu);
	new ScrollMagic.Scene({triggerElement: "#partners", duration: timeTeam})
		.setClassToggle("#high3", "menu-dot__link--active")
		.addTo(controllerMenu);
	new ScrollMagic.Scene({triggerElement: "#contacts", duration: timePortfolio})
		.setClassToggle("#high4", "menu-dot__link--active")
		.addTo(controllerMenu);
});
