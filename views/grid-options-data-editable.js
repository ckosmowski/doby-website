define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-options-data-editable.html',
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
				name: 'Name'
			}, {
				id: 'age',
				field: 'age',
				name: 'Age'
			}];
			
			this.grid = new DobyGrid({
				columns: columns,
				editable: true,
				data: [{
					id: 1,
					data: {
						id: 1,
						name: "John (edit)",
						age: "20 (edit)"
					},
					editable: true
				}, {
					id: 2,
					data: {
						id: 2,          
						name: "Steve",
						age: 20
					},
					editable: false
				}, {
					id: 3,
					data: {
						id: 3,          
						name: "Michael (edit)",
						age: "21 (edit)"
					},
					editable: true
				}, {
					id: 4,
					data: {
						id: 4,          
						name: "Robert",
						age: 30
					},
					editable: false
				}],
				quickFilter: true
			}).appendTo('#demo-grid');
		}
	});
});