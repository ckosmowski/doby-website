define([
	'text!pages/404.html'
], function (template) {
	"use strict";
	return Backbone.DobyView.extend({
		initialize: function () {
			this.$el.append(template);
		}
	});
});