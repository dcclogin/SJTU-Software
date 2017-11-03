/*
* @Author: rumia
* @Date:   2017-04-27 15:14:23
* @Last Modified by:   rumia
* @Last Modified time: 2017-06-26 04:54:38
*/
'use strict';

exports.index = function* (ctx) {
	const cid = this.query.cid || undefined;
	// mainly the tumor stage info.
	const cli_rps = yield ctx.curl(`http://localhost/api/clinical/${cid}`);
	// reference to TCGA API.
	const tcga_cli_api = `https://api.gdc.cancer.gov/cases/${cid}?expand=diagnoses`
	// find genome data (just the case interface)
	const tcga_gen_url = `https://portal.gdc.cancer.gov/cases/${cid}`
	// find corresponding transcriptome file(s).
	const corresp_fn = yield app.mysql.get('file_case_map', {case_id: `${cid}`})

	const cli_str = cli_rps.data.toString();

	const cli_obj = JSON.parse(cli_str)['cli_info'];

	const data = {
		case_id: cid,
		content: cli_obj,
	};
	yield ctx.render('case_info', data);
};
