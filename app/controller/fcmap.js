/*
* @Author: rumia
* @Date:   2017-06-26 03:47:57
* @Last Modified by:   rumia
* @Last Modified time: 2017-06-26 04:04:00
*/

exports.index = function* (ctx) {
	const fn = this.query.fn || undefined;
	if (fn === undefined) {
		ctx.body = yield ctx.service.fcmap.index();
		ctx.status = 200;
	} else {
		const fcmap_info = yield ctx.service.fcmap.show(fn);
		if (fcmap_info['fcmap_info'] === null) {
			ctx.status = 404;
		} else {
			ctx.body = fcmap_info;
			ctx.status = 200;
		}
	}
};

exports.show = function* (ctx) {
	const fn = ctx.params.id;
	const fcmap_info = yield ctx.service.fcmap.show(fn);
	if (fcmap_info['fcmap_info'] === null) {
		ctx.status = 404;
	} else {
		ctx.body = fcmap_info;
		ctx.status = 200;
	}	
}