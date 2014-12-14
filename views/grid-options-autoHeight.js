define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-options-autoHeight.html',
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
			}], data = [];
			
			for (var i = 0; i < 10; i++) {
				data =  data.concat([{
					id: 1 + i,
					data: {
						id: 1 + i,
						name: "John",
						age: 20
					}
				}, {
					id: 2 + i,
					data: {
						id: 2 + i,          
						name: "Steve",
						age: 20
					}
				}, {
					id: 3 + i,
					data: {
						id: 3 + i,          
						name: "Michael",
						age: 21
					}
				}, {
					id: 4 + i,
					data: {
						id: 4 + i,
						name: "Robert",
						age: 30
					}
				}]);
			}
			
			this.grid = new DobyGrid({
				columns: columns,
				data: data
			}).appendTo('#demo-grid');
		},
		
		
		changeOption: function (event) {
			// Get value
			var value = $(event.currentTarget).val();
			
			// Set value
			this.grid.setOptions({autoHeight: value === 'false' ? false : true});
		}
	});
});