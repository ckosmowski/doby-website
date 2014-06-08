define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-method-scrollToRow.html',
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
			var data = [];
			
			for (var i = 0; i < 500; i++) {
				data.push({
					id: i + 1,
					data: {
						id: i + 1,
						name: "Mr. #" + (i + 1),
						age: Math.floor(Math.random() * 100)
					}
				});
			}
			
			new DobyGrid({
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
					class: "nopad",
					id: "actions",
					name: "Actions",
					field: "actions",
					focusable: false,
					formatter: function () {
						return '<button class="button tiny">Scroll to Row #50</button>';
					},
					width: 120
				}],
				data: data,
				rowHeight: 35
			}).appendTo('#demo-grid')
				.on('click', function (event, args) {
					if ($(event.target).hasClass('button')) {
						this.scrollToRow(49);
					}
				});
		}
	});
});