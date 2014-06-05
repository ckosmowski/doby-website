define([
	'text!pages/home.html'
], function (template) {
	"use strict";
	
	return Backbone.DobyView.extend({
		
		initialize: function () {
			this.$el.append(template);
		}
		
	});
});