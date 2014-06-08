define([
	'underscore',
	'text!pages/grid-method-sortBy.html',
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
			var columns = [{
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
					return '<button class="button tiny">Change Sorting</button>';
				},
				selectable: false,
				width: 110
			}];
			
			new DobyGrid({
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
				rowHeight: 35
			}).appendTo('#demo-grid')
				.on('click', function (event) {
					if ($(event.target).hasClass('button')) {
						this.sortBy(_.sample(['name', 'age', 'id']), _.sample([true, false]));
					}
				});
		}
	});
});