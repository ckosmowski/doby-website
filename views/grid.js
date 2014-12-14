define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid.html',
	'dobygrid',
	'js/sample-data'
], function (_, template, page, DobyGrid, data) {
	"use strict";

	return Backbone.DobyView.extend({

		initialize: function () {
			var html = _.template(template)({page: page});
			this.$el.append(html);
		},

		render: function () {
			new DobyGrid({
				columns: [{
					id: 'id',
					field: 'id',
					name: 'ID',
					removable: true
				}, {
					id: 'guid',
					field: 'guid',
					name: 'Guid',
					removable: true
				}, {
					id: 'isActive',
					field: 'isActive',
					name: 'Is Active',
					removable: true
				}, {
					id: 'balance',
					field: 'balance',
					name: 'Balance',
					removable: true
				}, {
					id: 'age',
					field: 'age',
					name: 'Age',
					removable: true
				}, {
					id: 'name',
					field: 'name',
					name: 'Name',
					removable: true
				}, {
					id: 'gender',
					field: 'gender',
					name: 'Gender',
					removable: true
				}, {
					id: 'company',
					field: 'company',
					name: 'Company',
					removable: true
				}, {
					id: 'email',
					field: 'email',
					name: 'Email',
					removable: true
				}, {
					id: 'phone',
					field: 'phone',
					name: 'Phone',
					removable: true
				}, {
					id: 'address',
					field: 'address',
					name: 'Address',
					removable: true
				}, {
					id: 'about',
					field: 'about',
					name: 'About',
					removable: true
				}, {
					id: 'registered',
					field: 'registered',
					name: 'Registered',
					removable: true
				}, {
					id: 'latitude',
					field: 'latitude',
					name: 'Latitude',
					removable: true
				}, {
					id: 'tags',
					field: 'tags',
					name: 'Tags',
					removable: true,
					formatter: function (row, cell, value) {
						return '<span class="label secondary">' + value.join('</span><span class="label secondary">') + '</span>';
					}
				}, {
					id: 'friends',
					field: 'friends',
					name: 'Friends',
					removable: true,
					formatter: function (row, cell, value) {
						return value.map(function (i) { return i.name; }).join(', ');
					}
				}, {
					id: 'customField',
					field: 'customField',
					name: 'Custom Field',
					removable: true
				}],
				data: data,
				editable: true,
				quickFilter: true
			}).appendTo('#demo-grid');
		}
	});
});