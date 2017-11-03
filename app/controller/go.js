/*
* @Author: rumia
* @Date:   2017-04-28 01:36:43
* @Last Modified by:   rumia
* @Last Modified time: 2017-04-28 12:42:37
*/

exports.index = function* (ctx) {
	const term = this.query.term || undefined;
	if (term === undefined) {
		ctx.body = yield ctx.service.go.index();
		ctx.status = 200;
	} else {
		const goInfo = yield ctx.service.go.show(term);
		if (goInfo['goInfo'] === null) {
			ctx.status = 404;
		} else {
			ctx.body = goInfo;
			ctx.status = 200;
		}
	}
};

exports.show = function* (ctx) {
	const term = ctx.params.id;
	const goInfo = yield ctx.service.go.show(term);
	if (goInfo['goInfo'] === null) {
		ctx.status = 404;
	} else {
		ctx.body = goInfo;
		ctx.status = 200;
	}	
}