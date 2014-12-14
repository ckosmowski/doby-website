define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-method-filter.html',
	'dobygrid'
], function (_, template, page, DobyGrid) {
	"use strict";
	
	return Backbone.DobyView.extend({
		
		events: function () {
			return _.extend({}, Backbone.DobyView.prototype.events, {
				"keyup #grid-filter-input": "filter"
			});
		},
		
		initialize: function () {
			var html = _.template(template)({page: page});
			
			this.$el.append(html);
		},
		
		render: function () {
			this.grid = new DobyGrid({
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
						name: "Jermaine",
						age: 50
					}
				}]
			}).appendTo('#demo-grid');
		},
		
		
		filter: function (event) {
			var value = $(event.currentTarget).val();
			
			if (value && value.length) {
				this.grid.filter([
					['name', '~*', value]
				]);
			} else {
				this.grid.filter(null);
			}
		}
	});
});