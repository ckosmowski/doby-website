define([
	'underscore',
	'text!pages/grid-method-resize.html',
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
					id: "country",
					name: "Country",
					field: "country"
				}, {
					id: "city",
					name: "City",
					field: "city"
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
				}, {
					id: 5,
					data: {
						id: 5,          
						name: "Bobby",
						age: 12
					}
				}, {
					id: 6,
					data: {
						id: 6,          
						name: "Perry",
						age: 70
					}
				}],
				rowHeight: 65
			}).appendTo('#demo-grid');
			
			$('#demo-grid').resizable();
		}
	});
});