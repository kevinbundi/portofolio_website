// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
// = require jquery
//= require jquery-ui.min
// = require jquery_ujs

//= require turbolinks
//= require_tree .
//= require bootstrap
//= require homes

// $(document).ready(function(){
// 	// extend this function to jquery.js. it detects when an animation ends and removes that added class
// 	$.fn.extend({
// 	    animateCss: function (animationName) {
// 	        var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
// 	        this.addClass('animated ' + animationName).one(animationEnd, function() {
// 	            $(this).removeClass('animated ' + animationName);
// 	        });
// 	        return this;
// 	    }
// 	});

// 	$('#portofolio').animateCss('bounceInLeft')
// 	$('#about').animateCss('bounceInUp')
// 	$('#contact').animateCss('bounceInRight')

// 	$('.my_name').click(function(){
// 		$('#portofolio').animateCss('bounceInLeft')
// 		$('#about').animateCss('bounceInUp')
// 		$('#contact').animateCss('bounceInRight')
// 	})
// }) 