define([
	'underscore',
	'text!pages/grid-method-appendTo.html',
	'text!pages/grid-sidebar.html'
], function (_, template, sidebar) {
	"use strict";
	
	return Backbone.DobyView.extend({
		
		initialize: function () {
			var html = _.template(template, {
				sidebar: sidebar
			});
			
			this.$el.append(html);
		},
		
		render: function () {}
	});
});