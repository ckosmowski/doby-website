define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-method-restoreState.html',
	'dobygrid'
], function (_, template, page, DobyGrid) {
	"use strict";
	
	return Backbone.DobyView.extend({
		
		events: function () {
			return _.extend({}, Backbone.DobyView.prototype.events, {
				"click .button": "restore"
			});
		},
		
		initialize: function () {
			var html = _.template(template, {
				page: page
			});
			
			this.$el.append(html);
		},
		
		render: function () {
			this.grid = new DobyGrid({
				columns: [{
					id: "id",
					name: "ID",
					field: "id",
					visible: false
				}, {
					id: "name",
					name: "Name",
					field: "name",
					visible: false
				}, {
					id: "age",
					name: "Age",
					field: "age",
					visible: false
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
				}],
				rowHeight: 35
			}).appendTo('#demo-grid');
			
			this.grid.showOverlay({
				html: '<div style="display:table;height:100%;width:100%"><div style="display:table-cell;vertical-align:middle;text-align:center"><button class="button tiny">Restore State</button></div></div>'
			});
		},
		
		
		restore: function () {
			this.grid.restoreState({
				"autoColumnWidth": false,
				"columns": [{
					"id": "id",
					"width": 80
				}, {
					"id": "name",
					"width": 80
				}, {
					"id": "age",
					"width": 80
				}],
				"filters": [],
				"grouping": [],
				"sort": []
			});
		}
	});
});