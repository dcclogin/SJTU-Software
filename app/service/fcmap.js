/*
* @Author: rumia
* @Date:   2017-06-26 03:48:12
* @Last Modified by:   rumia
* @Last Modified time: 2017-06-26 04:04:22
*/

module.exports = app => {
	class fcmapService extends app.Service {
		* index() {
			// need revision
			const fcmap = yield app.mysql.select('file_case_map');
			return {
				fcmap,
			};
		}

		* show(fn) {
			const fcmap_info = yield app.mysql.get('file_case_map', {file_name: `${fn}`});
			return {
				fcmap_info,
			};
		}
	};
	return fcmapService;
};