define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-options-class.html'
], function (_, template, page) {
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