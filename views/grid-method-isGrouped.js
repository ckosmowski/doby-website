define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-method-isGrouped.html',
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
					id: "age",
					name: "Age",
					field: "age"
				}, {
					class: "nopad",
					id: "actions",
					name: "Actions",
					field: "actions",
					focusable: false,
					formatter: function () {
						return '<button class="button-add tiny">Toggle Grouping</button>';
					},
					width: 115
				}, {
					class: "nopad",
					id: "test",
					name: "Test",
					field: "test",
					focusable: false,
					formatter: function () {
						return '<button class="button-grp tiny">Is It Grouped?</button>';
					},
					width: 105
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
			}).appendTo('#demo-grid')
				.on('click', function (event) {
					if ($(event.target).hasClass('button-add')) {
						if (this.isGrouped()) {
							this.setGrouping(null);
						} else {
							this.addGrouping('age', {
								collapsed: false
							});
						}
					}
					
					if ($(event.target).hasClass('button-grp')) {
						alert(this.isGrouped());
					}
				});
		}
	});
});