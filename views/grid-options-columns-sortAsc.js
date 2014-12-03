define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-options-columns-sortAsc.html',
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
			var columns = [{
				id: 'id',
				field: 'id',
				name: 'ID'
			}, {
				id: 'name',
				field: 'name',
				name: 'Default Ascending',
				sortAsc: true,
				width: 160
			}, {
				id: 'age',
				field: 'age',
				name: 'Default Descending',
				sortAsc: false,
				width: 160
			}];

			this.grid = new DobyGrid({
				columns: columns,
				data: [{
					id: 1,
					data: {
						id: 1,
						name: "John",
						age: 20
					}
				}, {
					id: 2,
					data: {
						id: 2,
						name: "Steve",
						age: 20
					}
				}, {
					id: 3,
					data: {
						id: 3,
						name: "Michael",
						age: 21
					}
				}, {
					id: 4,
					data: {
						id: 4,
						name: "Robert",
						age: 30
					}
				}],
				quickFilter: true
			}).appendTo('#demo-grid');
		}
	});
});