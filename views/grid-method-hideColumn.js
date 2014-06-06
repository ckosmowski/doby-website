define([
	'underscore',
	'text!pages/grid-method-hideColumn.html',
	'text!pages/grid-sidebar.html',
	'dobygrid'
], function (_, template, sidebar, DobyGrid) {
	"use strict";
	
	return Backbone.DobyView.extend({
		
		initialize: function () {
			var html = _.template(template, {
				sidebar: sidebar
			});
			
			this.$el.append(html);
		},
		
		render: function () {
			new DobyGrid({
				columns: [{
					class: "nopad",
					id: "one",
					name: "One",
					field: "one",
					focusable: false,
					formatter: function () {
						return '<button class="button tiny">Hide This Column</button>';
					},
					removable: true,
					width: 122
				}, {
					class: "nopad",
					id: "two",
					name: "Two",
					field: "two",
					focusable: false,
					formatter: function () {
						return '<button class="button tiny">Hide This Column</button>';
					},
					removable: true,
					width: 122
				}, {
					class: "nopad",
					id: "three",
					name: "Three",
					field: "three",
					focusable: false,
					formatter: function () {
						return '<button class="button tiny">Hide This Column</button>';
					},
					removable: true,
					width: 122
				}],
				data: [{
					id: 1
				}, {
					id: 2
				}, {
					id: 3
				}, {
					id: 4
				}],
				rowHeight: 35
			}).appendTo('#demo-grid')
				.on('click', function (event, args) {
					if ($(event.target).hasClass('button')) {
						this.hideColumn(args.column.id)
					}
				});
		}
	});
});