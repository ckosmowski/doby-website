define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-options-columns-formatter.html',
	'dobygrid'
], function (_, template, page, DobyGrid) {
	"use strict";
	
	return Backbone.DobyView.extend({
		
		initialize: function () {
			var html = _.template(template)({page: page});
			
			this.$el.append(html);
		},
		
		render: function () {
			var exporter = function () {
				return "test";
			};
			
			var columns = [{
				id: 'id',
				field: 'id',
				filterable: false,
				name: 'ID',
				removable: true
			}, {
				id: 'name',
				field: 'name',
				name: 'Name'
			}, {
				id: 'cost',
				field: 'cost',
				name: 'Formatted Cost',
				formatter: function (row, cell, value) {
					return "$" + value + ".00";
				},
				width: 180
			}];
			
			this.grid = new DobyGrid({
				columns: columns,
				data: [{
					id: 1,
					data: {
						id: 1,
						name: "Plate",
						cost: 20
					}
				}, {
					id: 2,
					data: {
						id: 2,          
						name: "Fork",
						cost: 20
					}
				}, {
					id: 3,
					data: {
						id: 3,          
						name: "Cup",
						cost: 21
					}
				}, {
					id: 4,
					data: {
						id: 4,          
						name: "Spoon",
						cost: 30
					}
				}],
				quickFilter: true
			}).appendTo('#demo-grid');
		}
	});
});