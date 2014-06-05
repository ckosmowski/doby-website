define([
	'underscore',
	'text!pages/grid-method-constructor.html',
	'text!pages/grid-sidebar.html',
	'dobygrid'
], function (_, template, sidebar, DobyGrid) {
	"use strict";
	
	return Backbone.DobyView.extend({
		
		initialize: function () {
			var html = _.template(template, {
				sidebar: sidebar
			});
			
			this.$el.append(html);
		},
		
		render: function () {
			new DobyGrid({
				columns: [{
					id: "id",
					name: "ID",
					field: "id"
				}, {
					id: "name",
					name: "Name",
					field: "name"
				}],
				data: [{
					id: 1,
					data: {
						id: 1,
						name: "John"
					}
				}, {
					id: 2,
					data: {
						id: 2,          
						name: "Steve"
					}
				}]
			}).appendTo('#demo-grid');
		}
	});
});