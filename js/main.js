/* global $, Backbone, require, window */

$(function () {
	"use strict";
	
	require.config({
		baseUrl: '',
		paths: {
			text: '//cdnjs.cloudflare.com/ajax/libs/require-text/2.0.10/text',
			dobygrid: 'modules/grid/doby-grid.min'
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
					
					// If page has a custom function -- call it now
					if (this[page]) this[page]();
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
				// If page doesn't exist -- show 404
				if (err.xhr.status === 404) {
					this.load('404');
				}
			}.bind(this));
		},
		
		
		grid: function () {
			
			require(['js/sample-data'], function (data) {
				var $target = $('#grid-demo');
				new DobyGrid({
					columns: [{
						id: 'id',
						field: 'id',
						name: 'ID',
						removable: true
					}, {
						id: 'guid',
						field: 'guid',
						name: 'Guid',
						removable: true
					}, {
						id: 'isActive',
						field: 'isActive',
						name: 'Is Active',
						removable: true
					}, {
						id: 'balance',
						field: 'balance',
						name: 'Balance',
						removable: true
					}, {
						id: 'age',
						field: 'age',
						name: 'Age',
						removable: true
					}, {
						id: 'name',
						field: 'name',
						name: 'Name',
						removable: true
					}, {
						id: 'gender',
						field: 'gender',
						name: 'Gender',
						removable: true
					}, {
						id: 'company',
						field: 'company',
						name: 'Company',
						removable: true
					}, {
						id: 'email',
						field: 'email',
						name: 'Email',
						removable: true
					}, {
						id: 'phone',
						field: 'phone',
						name: 'Phone',
						removable: true
					}, {
						id: 'address',
						field: 'address',
						name: 'Address',
						removable: true
					}, {
						id: 'about',
						field: 'about',
						name: 'About',
						removable: true
					}, {
						id: 'registered',
						field: 'registered',
						name: 'Registered',
						removable: true
					}, {
						id: 'latitude',
						field: 'latitude',
						name: 'Latitude',
						removable: true
					}, {
						id: 'tags',
						field: 'tags',
						name: 'Tags',
						removable: true,
						formatter: function (row, cell, value, columnDef, data) {
							return '<span class="label secondary">' + value.join('</span><span class="label secondary">') + '</span>';
						}
					}, {
						id: 'friends',
						field: 'friends',
						name: 'Friends',
						removable: true,
						formatter: function (row, cell, value, columnDef, data) {
							return value.map(function (i) { return i.name; }).join(', ');
						}
					}, {
						id: 'customField',
						field: 'customField',
						name: 'Custom Field',
						removable: true
					}],
					data: data,
					editable: true,
					quickFilter: true
				}).appendTo($target);
			});
		}
	});

	// Initiaze the App
	new Router();
	Backbone.history.start();
});