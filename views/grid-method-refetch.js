define([
	'underscore',
	'text!pages/grid-method-refetch.html',
	'text!pages/grid-sidebar.html',
	'dobygrid',
	'js/sample-fetcher'
], function (_, template, sidebar, DobyGrid, remotedata) {
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