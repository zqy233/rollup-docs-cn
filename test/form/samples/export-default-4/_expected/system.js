System.register('my.global.namespace', [], function (exports, module) {
	'use strict';
	return {
		execute: function () {

			var main = exports('default', 42);

		}
	};
});
