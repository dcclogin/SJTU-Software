/*
* @Author: rumia
* @Date:   2017-04-27 21:15:46
* @Last Modified by:   rumia
* @Last Modified time: 2017-04-28 01:33:08
*/

exports.index = function* (ctx) {
	const domainId  = this.query.id || undefined;
	//const domainAcc = this.query.acc || undefined;
	//console.log(this.query);
	if (domainId === undefined) {
		ctx.body = yield ctx.service.pfam.index();
		ctx.status = 200;
	} else {
		const domainInfo = yield ctx.service.pfam.show(domainId);
		if (domainInfo['domainInfo'] === null) {
			ctx.status = 404;
		} else {
			ctx.body = domainInfo;
			ctx.status = 200;
		}
	}
};

exports.show = function* (ctx) {
	const domainId = ctx.params.id;
	const domainInfo = yield ctx.service.pfam.show(domainId);
	if (domainInfo['domainInfo'] === null) {
		ctx.status = 404;
	} else {
		ctx.body = domainInfo;
		ctx.status = 200;
	}
};