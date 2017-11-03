/*
* @Author: rumia
* @Date:   2017-06-26 03:36:35
* @Last Modified by:   rumia
* @Last Modified time: 2017-06-26 03:39:27
*/

module.exports = app => {
	class clinicalService extends app.Service {
		* index() {
			// need revision
			const clinical = yield app.mysql.select('clinical');
			return {
				clinical,
			};
		}

		* show(case_id) {
			const cli_info = yield app.mysql.get('clinical', {case_id: `${case_id}`});
			return {
				cli_info,
			};
		}
	};
	return clinicalService;
};