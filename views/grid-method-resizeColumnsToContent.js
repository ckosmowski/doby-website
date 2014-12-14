define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-method-resizeColumnsToContent.html',
	'dobygrid'
], function (_, template, page, DobyGrid) {
	"use strict";

	return Backbone.DobyView.extend({

		events: {
			"click #resizeColumnsToContent": "resizeColumnsToContent"
		},

		initialize: function () {
			var html = _.template(template)({page: page});

			this.$el.append(html);
		},

		render: function () {
			this.grid = new DobyGrid({
				autoColumnWidth: true,
				columns: [{
					id: "id",
					name: "ID",
					field: "id"
				}, {
					id: "name",
					name: "Name",
					field: "name"
				}, {
					id: "age",
					name: "Age",
					field: "age"
				}, {
					id: "description",
					name: "Description",
					field: "description"
				}],
				data: [{
					id: 1,
					data: {
						id: 1,
						name: "John",
						age: 20,
						description: "This is very long description about John."
					}
				}, {
					id: 2,
					data: {
						id: 2,
						name: "Steve",
						age: 20,
						description: "This is an incredibly long description about Steve."
					}
				}, {
					id: 3,
					data: {
						id: 3,
						name: "Michael",
						age: 21,
						description: "This is a short description about Michael."
					}
				}, {
					id: 4,
					data: {
						id: 4,
						name: "Robert",
						age: 30,
						description: "Robert's description"
					}
				}, {
					id: 5,
					data: {
						id: 5,
						name: "Bobby",
						age: 12,
						description: "Bobby's description"
					}
				}, {
					id: 6,
					data: {
						id: 6,
						name: "Perry",
						age: 70,
						description: "Perry's description"
					}
				}],
				rowHeight: 65
			}).appendTo('#demo-grid');
		},

		resizeColumnsToContent: function () {
			this.grid.resizeColumnsToContent();
		}
	});
});