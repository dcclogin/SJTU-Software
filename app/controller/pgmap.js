/*
* @Author: rumia
* @Date:   2017-04-28 12:25:17
* @Last Modified by:   rumia
* @Last Modified time: 2017-04-28 12:54:12
*/

exports.index = function* (ctx) {
	const domain = this.query.dm || undefined;
	const goterm = this.query.tm || undefined;
	if (domain === undefined) {
		ctx.body = yield ctx.service.pgmap.index();
		ctx.status = 200;
	}
};