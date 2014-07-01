define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-options-columns-tooltip.html',
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
				name: 'Hover Me',
				tooltip: "Well hello there!"
			}, {
				id: 'age',
				field: 'age',
				name: 'Hover Me Too',
				tooltip: "How are you?"
			}];
			
			this.grid = new DobyGrid({
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
				quickFilter: true
			}).appendTo('#demo-grid');
		}
	});
});