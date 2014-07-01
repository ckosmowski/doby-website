define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-options-data-class.html',
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
				data: [{
					class: "example-red",
					id: 1,
					data: {
						id: 1,
						name: "John",
						age: 20
					}
				}, {
					class: "example-blue",
					id: 2,
					data: {
						id: 2,          
						name: "Steve",
						age: 20
					}
				}, {
					class: "example-red",
					id: 3,
					data: {
						id: 3,          
						name: "Michael",
						age: 21
					}
				}, {
					class: "example-blue",
					id: 4,
					data: {
						id: 4,          
						name: "Robert",
						age: 30
					}
				}],
				quickFilter: true
			}).appendTo('#demo-grid');
		}
	});
});