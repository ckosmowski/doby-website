/* global $, Backbone, require, window */

$(function () {
	"use strict";
	
	require.config({
		baseUrl: '',
		paths: {
			text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.10/text'	
		}
	});

	var Router = Backbone.Router.extend({
		routes: {
			"*all": "load"
		},

		load: function (page) {
			page = page || 'home';
			
			// Load page contenxt
			require(['text!pages/' + page + '.html'], function (html) {
				var showPage = function (immediate) {
					// Insert content
					$('#content').append(html);
					
					// Fade in current page
					var $page = $('#page-' + page).hide();

					// If this is the first page loaded - show it immediately, don't fade in
					if (immediate) {
						$page.show();
					} else {
						$page.fadeIn();
					}
				};
				
				// Fade out previous page
				var $pages = $('.page');
				if ($pages.length) {
					$pages.each(function () {
						$(this).fadeOut(function () {
							$(this).remove();
							showPage();
						});
					});
				} else {
					showPage(true);	
				}
				
				// Scroll to top
				window.scrollTop = 0;
				
			}, function (err) {
				// If page doesn't exist -- show 404
				if (err.xhr.status === 404) {
					this.load('404');
				}
			}.bind(this));
		}
	});

	// Initiaze the App
	new Router();
	Backbone.history.start();
});