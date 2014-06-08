define([], function () {
	"use strict";
	
	require.config({
		baseUrl: '',
		paths: {
			backbone: '//cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min',
			dobygrid: 'modules/grid/doby-grid.min',
			jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/2.0.3/jquery.min',
			jqueryeventdrag: 'js/libs/jquery.event.drag',
			jqueryui: '//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min',
			filesaver: 'js/libs/FileSaver',
			prism: 'js/libs/prism',
			text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.10/text',
			underscore: '//cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min'
		},
		shim: {
			backbone: {
				deps: ['underscore'],
				exports: 'Backbone'
			},
			dobygrid: {
				deps: ['jquery', 'jqueryui', 'jqueryeventdrag', 'filesaver', 'backbone']
			},
			jqueryeventdrag: {
				deps: ['jquery']
			},
			jqueryui: {
				deps: ['jquery']	
			},
			prism: {
				exports: 'Prism'
			},
			underscore: {
				exports: '_'
			}
		}
	});
	
	require(['underscore', 'backbone', 'prism'], function (_, Backbone, Prism) {
		
		// Custom Backbone View for all pages
		Backbone.DobyView = Backbone.View.extend({
			events: {
				"keyup #doc-search":		"docSearch"
			},
			
			className: 'page',
			
			
			/**
			 * Filters the documentation sidebar when users type into the "Search Docs" input
			 * @method docSearch
			 * @memberof DobyView
			 * 
			 * @param	{object}	event		- Javascript event object
			 * 
			 */
			docSearch: function (event) {
				var value = $(event.currentTarget).val();
				
				this.$el.find('.sidebar .side-nav li').each(function () {
					// Re-enable everything first
					$(this).show();
					
					// Hide items which are filtered out
					if (value.length > 0 && $(this).text().toLowerCase().indexOf(value.toLowerCase()) < 0) {
						$(this).hide();
					}
				});
			}
		});
		
		// Change to handlebars to allow <% %> to render Python
		_.templateSettings = {
			interpolate: /\{\{(.+?)\}\}/gim,
			evaluate: /<@([\s\S]+?)@>/g
		};
		
		// Page Router
		var Router = Backbone.Router.extend({
			routes: {
				"*all": "load"
			},

			load: function (page) {
				page = page || 'home';

				// Load page context
				require([
					'views/' + page
				], function (PageView) {
					var showPage = function (immediate) {
						// Load view
						var view = new PageView({
							id: 'page-' + page
						});
						
						// Insert into DOM
						view.$el.appendTo('#content');
						
						// Scroll to top
						view.$el[0].scrollTop = 0;

						if (immediate) {
							// If this is the first page loaded - show it immediately, don't fade in
							view.$el.show();
							if (view.render) view.render();
							
							// Highlight syntax
							Prism.highlightAll();
						} else {
							// Fade in current page
							view.$el.fadeIn(250, function () {
								if (view.render) view.render();
								// Highlight syntax
								Prism.highlightAll();
							});
						}
					}.bind(this);

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

				}.bind(this), function (err) {
					// Prevent infinite loop
					if (err.requireModules.indexOf('404') < 0) {
						// If page doesn't exist -- show 404
						this.load('404');
					}
				}.bind(this));
			}
		});

		// Initiaze the App
		new Router();
		Backbone.history.start();
	});
});
