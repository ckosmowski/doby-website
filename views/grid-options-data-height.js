define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-options-data-height.html',
	'dobygrid'
], function (_, template, page, DobyGrid) {
	"use strict";
	
	return Backbone.DobyView.extend({
		
		initialize: function () {
			var html = _.template(template)({page: page});
			
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
				id: 'height',
				field: 'height',
				name: 'Height'
			}];
			
			this.grid = new DobyGrid({
				columns: columns,
				data: [{
					id: 1,
					data: {
						id: 1,
						name: "John",
						height: 20
					},
					height: 20
				}, {
					id: 2,
					data: {
						id: 2,          
						name: "Steve",
						height: 25
					},
					height: 25
				}, {
					id: 3,
					data: {
						id: 3,          
						name: "Michael",
						height: 30
					},
					height: 30
				}, {
					id: 4,
					data: {
						id: 4,          
						name: "Robert",
						height: 35
					},
					height: 35
				}],
				quickFilter: true
			}).appendTo('#demo-grid');
		}
	});
});