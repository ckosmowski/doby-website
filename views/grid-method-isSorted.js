define([
	'underscore',
	'text!pages/grid-method-isSorted.html',
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
					id: "test",
					name: "Test",
					field: "test",
					focusable: false,
					formatter: function () {
						return '<button class="button tiny">Is It Sorted?</button>';
					},
					width: 95
				}],
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
				rowHeight: 35
			}).appendTo('#demo-grid')
				.on('click', function (event) {
					if ($(event.target).hasClass('button')) {
						alert(this.isSorted());
					}
				});
		}
	});
});