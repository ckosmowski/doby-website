define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-method-refetch.html',
	'dobygrid',
	'js/sample-fetcher'
], function (_, template, page, DobyGrid, remotedata) {
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
						return '<button class="button tiny">Refetch</button>';
					},
					width: 77
				}],
				data: remotedata,
				rowHeight: 35
			}).appendTo('#demo-grid')
				.on('click', function (event) {
					if ($(event.target).hasClass('button')) {
						this.refetch();
					}
				});
		}
	});
});