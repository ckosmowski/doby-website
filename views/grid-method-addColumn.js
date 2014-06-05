define([
	'underscore',
	'text!pages/grid-method-addColumn.html',
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
				}, {
					class: "nopad",
					id: "actions",
					name: "Actions",
					field: "actions",
					focusable: false,
					formatter: function () {
						return '<button class="button tiny">Add Column</button>';
					},
					width: 98
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
				}],
				rowHeight: 35
			}).appendTo('#demo-grid')
				.on('click', function (event) {
					if ($(event.target).hasClass('button')) {
						var id = this.options.columns.length + 1;
						this.addColumn({
							id: id,
							field: id,
							name: 'New Column ' + id
						});
					}
				});
		}
	});
});