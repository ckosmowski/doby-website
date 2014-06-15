define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-options-idProperty.html'
], function (_, template, page, DobyGrid) {
	"use strict";
	
	return Backbone.DobyView.extend({
		
		initialize: function () {
			var html = _.template(template, {
				page: page
			});
			
			this.$el.append(html);
		},
		
		render: function () {}
	});
});