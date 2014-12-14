define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-options-stickyGroupRows.html',
	'dobygrid'
], function (_, template, page, DobyGrid) {
	"use strict";
	
	return Backbone.DobyView.extend({
		
		events: function () {
			return _.extend({}, Backbone.DobyView.prototype.events, {
				"change #option-value":		"changeOption"
			});
		},
		
		initialize: function () {
			var html = _.template(template)({page: page});
			
			this.$el.append(html);
		},
		
		render: function () {
			
			// Generate Data
			var data = [];
			for (var i = 0; i < 50; i++) {
				data.push({
					id: i,
					data: {
						id: i,
						population: _.sample(_.range(15, 100)),
						elevation: _.sample(_.range(500, 10000)),
						language: _.sample(["English", "French", "Italian", "Latin", null]),
						city: ['Venice', 'Vatican City', 'Rome', 'Milan', 'Constantinople'][_.random(0, 4)]
					}
				});
			}

			// Generate Columns
			var columns = [{
				id: "id",
				name: "ID",
				field: "id",
				sortable: true,
				removable: true
			}, {
				id: "city",
				name: "City",
				field: "city",
				minWidth: 160,
				sortable: true,
				removable: true
			}, {
				category: "Statistical",
				id: "elevation",
				name: "Elevation",
				field: "elevation",
				minWidth: 100,
				sortable: true,
				removable: true
			}, {
				category: "Statistical",
				id: "population",
				name: "Population",
				field: "population",
				minWidth: 100,
				sortable: true,
				removable: true
			}, {
				category: "Statistical",
				id: "language",
				name: "Language",
				field: "language",
				sortable: true,
				removable: true
			}];
			
			this.grid = new DobyGrid({
				columns: columns,
				data: data,
				rowHeight: 35
			}).setGrouping([
				{column_id: 'city', collapsed: false}
			]).appendTo('#demo-grid');
		},
		
		
		changeOption: function (event) {
			// Get value
			var value = $(event.currentTarget).val();
			
			// Set value
			this.grid.setOptions({stickyGroupRows: value === 'false' ? false : true});
		}
	});
});