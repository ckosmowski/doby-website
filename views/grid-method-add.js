define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-method-add.html',
	'dobygrid'
], function (_, template, page, DobyGrid) {
	"use strict";
	
	return Backbone.DobyView.extend({
		
		initialize: function () {
			var html = _.template(template)({page: page});
			
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
						return '<button class="button tiny">Add Another Row</button>';
					},
					width: 120
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
						var id = this.options.data.length + 1;
						this.add({
							id: id,
							data: {
								name: 'New Item #' + id,
								id: id
							}
						});
					}
				});
		}
	});
});