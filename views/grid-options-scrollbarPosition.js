define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-options-scrollbarPosition.html',
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
			var html = _.template(template, {
				page: page
			});
			
			this.$el.append(html);
		},
		
		render: function (value) {
			if (this.grid) this.grid.destroy();
			
			var columns = [{
				id: 'id',
				field: 'id',
				name: 'ID',
				removable: true,
				width: 15
			}, {
				id: 'name',
				field: 'name',
				name: 'Name',
				removable: true
			}, {
				id: 'age',
				field: 'age',
				name: 'Age',
				removable: true,
				width: 15
			}];
			
			var data = [];
			
			for (var i = 0; i < 100; i++) {
				data.push({
					id: 1,
					data: {
						id: 1,
						name: "John",
						age: 20
					}
				});
			}
			
			this.grid = new DobyGrid({
				columns: columns,
				data: data,
				rowHeight: 35,
				scrollbarPosition: value
			}).appendTo('#demo-grid');
		},
		
		
		changeOption: function (event) {
			// Get value
			var value = $(event.currentTarget).val();
			
			// Set value
			this.render(value);
		}
	});
});