/*
* @Author: rumia
* @Date:   2017-06-26 03:35:31
* @Last Modified by:   rumia
* @Last Modified time: 2017-06-26 03:42:09
*/

exports.index = function* (ctx) {
	const case_id = this.query.case_id || undefined;
	if (case_id === undefined) {
		ctx.body = yield ctx.service.clinical.index();
		ctx.status = 200;
	} else {
		const cli_info = yield ctx.service.clinical.show(case_id);
		if (cli_info['cli_info'] === null) {
			ctx.status = 404;
		} else {
			ctx.body = cli_info;
			ctx.status = 200;
		}
	}
};

exports.show = function* (ctx) {
	const case_id = ctx.params.id;
	const cli_info = yield ctx.service.clinical.show(case_id);
	if (cli_info['cli_info'] === null) {
		ctx.status = 404;
	} else {
		ctx.body = cli_info;
		ctx.status = 200;
	}	
}