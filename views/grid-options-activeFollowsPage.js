define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-options-activeFollowsPage.html',
	'dobygrid',
	'js/sample-data'
], function (_, template, page, DobyGrid, data) {
	"use strict";
	
	return Backbone.DobyView.extend({
		
		events: {
			"change #option-value":		"changeOption"
		},
		
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
				name: 'ID',
				removable: true,
				width: 15
			}, {
				id: 'guid',
				field: 'guid',
				name: 'Guid',
				removable: true
			}, {
				id: 'isActive',
				field: 'isActive',
				name: 'Is Active',
				removable: true,
				width: 30
			}, {
				id: 'balance',
				field: 'balance',
				name: 'Balance',
				removable: true
			}, {
				id: 'age',
				field: 'age',
				name: 'Age',
				removable: true,
				width: 15
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
			}];
			
			this.grid = new DobyGrid({
				columns: columns,
				data: data,
				rowHeight: 35
			}).appendTo('#demo-grid');
		},
		
		
		changeOption: function (event) {
			// Get value
			var value = $(event.currentTarget).val();
			
			// Set value
			this.grid.setOptions({activeFollowsPage: value === 'false' ? false : true});
		}
	});
});