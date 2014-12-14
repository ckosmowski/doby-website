define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-options-forceRemoteSort.html',
	'dobygrid',
	'js/sample-fetcher'
], function (_, template, page, DobyGrid, remotedata) {
	"use strict";
	
	return Backbone.DobyView.extend({
		
		events: function () {
			return _.extend({}, Backbone.DobyView.prototype.events, {
				"change #option-value":		"changeOption"
			});
		},
		
		initialize: function () {
			var html = _.template(template)({page: page});
			
			this.$el.append(html);
		},
		
		render: function () {
			
			// Limit the data set
			window.sampleFetcherLimit = 5;
			
			this.grid = new DobyGrid({
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
				}],
				data: remotedata,
				rowHeight: 35
			}).appendTo('#demo-grid');
		},
		
		changeOption: function (event) {
			// Get value
			var value = $(event.currentTarget).val();
			
			// Set value
			this.grid.setOptions({forceRemoteSort: value === 'true'});
		}
	});
});