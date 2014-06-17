define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-options-columns-category.html',
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
				category: "Category A",
				id: 'id',
				field: 'id',
				name: 'ID',
				removable: true,
				width: 15
			}, {
				category: "Category B",
				id: 'name',
				field: 'name',
				name: 'Name',
				removable: true
			}, {
				category: "Category C",
				id: 'age',
				field: 'age',
				name: 'Age',
				removable: true
			}];
			
			this.grid = new DobyGrid({
				columns: columns,
				data: [{
					id: 1,
					data: {
						id: 1,
						name: "Abraham",
						age: 20
					}
				}, {
					id: 2,
					data: {
						id: 2,          
						name: "Bobby",
						age: 20
					}
				}, {
					id: 3,
					data: {
						id: 3,          
						name: "James",
						age: 21
					}
				}, {
					id: 4,
					data: {
						id: 4,          
						name: "Steve",
						age: 30
					}
				}],
			}).appendTo('#demo-grid');
		}
	});
});