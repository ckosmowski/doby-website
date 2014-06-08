define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-method-removeColumn.html',
	'dobygrid'
], function (_, template, page, DobyGrid) {
	"use strict";
	
	return Backbone.DobyView.extend({
		
		initialize: function () {
			var html = _.template(template, {
				page: page
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
						return '<button class="button tiny">Remove This Column</button>';
					},
					removable: true,
					width: 140
				}, {
					class: "nopad",
					id: "two",
					name: "Two",
					field: "two",
					focusable: false,
					formatter: function () {
						return '<button class="button tiny">Remove This Column</button>';
					},
					removable: true,
					width: 140
				}, {
					class: "nopad",
					id: "three",
					name: "Three",
					field: "three",
					focusable: false,
					formatter: function () {
						return '<button class="button tiny">Remove This Column</button>';
					},
					removable: true,
					width: 140
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
						this.removeColumn(args.column.id);
					}
				});
		}
	});
});