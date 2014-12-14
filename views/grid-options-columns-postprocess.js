define([
	'underscore',
	'text!templates/grid-docs.html',
	'text!pages/grid-options-columns-postprocess.html',
	'dobygrid'
], function (_, template, page, DobyGrid) {
	"use strict";
	
	return Backbone.DobyView.extend({
		
		initialize: function () {
			var html = _.template(template)({page: page});
			
			this.$el.append(html);
		},
		
		render: function () {
			var postprocess = function (data, callback) {
				var value = data.data.data[data.column.field];
				value = value === null ? '' : value;
				setTimeout(function () {
					data.$cell.html('<div style="background:#300;color:#FFF">' + value + '</div>');
					callback();
				}, 500);
			}, columns = [{
				class: 'nopad',
				id: 'id',
				field: 'id',
				name: 'ID',
				removable: true,
				width: 15,
				postprocess: postprocess
			}, {
				class: 'nopad',
				id: 'population',
				field: 'population',
				name: 'Population',
				removable: true,
				postprocess: postprocess
			}, {
				class: 'nopad',
				id: 'language',
				field: 'language',
				name: 'Language',
				removable: true,
				postprocess: postprocess
			}];
			
			// Generate Data
			var data = [];
			for (var i = 0; i < 500; i++) {
				data.push({
					id: i,
					data: {
						id: i,
						population: _.sample(_.range(15, 100)),
						language: _.sample(["English", "French", "Italian", "Latin"])
					}
				});
			}
			
			this.grid = new DobyGrid({
				columns: columns,
				data: data
			}).appendTo('#demo-grid');
		}
	});
});