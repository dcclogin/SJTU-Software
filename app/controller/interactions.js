/*
* @Author: rumia
* @Date:   2017-04-28 00:51:20
* @Last Modified by:   rumia
* @Last Modified time: 2017-04-28 01:35:21
*/

exports.index = function* (ctx) {
	const domain1 = this.query.dm1 || undefined;
	const domain2 = this.query.dm2 || undefined;
	//console.log(this.query);
	if (domain1 === undefined || domain2 === undefined) {
		ctx.body = yield ctx.service.interactions.index();
		ctx.status = 200;
	} else {
		// show detailed info for two domains (if they have interactions)
		const interactionInfo = yield ctx.service.interactions.showInt(domain1, domain2);
		// console.log(interactionInfo);
		if (interactionInfo === null) {
			ctx.status = 404;
		} else {
			ctx.body = interactionInfo;
			ctx.status = 200;
		}
	}
};

exports.show = function* (ctx) {
	const domain = ctx.params.id;
	// list all interactions given one domain
	const interactionList = yield ctx.service.interactions.listInt(domain);
	//console.log(interactionList);
	if (interactionList['interactionList'].length == 0) {
		// return 404 if not found in database
		ctx.status = 404;
	} else {
		ctx.body = interactionList;
		ctx.status = 200;
	}
};