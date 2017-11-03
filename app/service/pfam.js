/*
* @Author: rumia
* @Date:   2017-04-27 21:18:14
* @Last Modified by:   rumia
* @Last Modified time: 2017-04-28 12:24:17
*/

module.exports = app => {
	class pfamService extends app.Service {
		* index() {
			// need revision
			const pfamInfo = yield app.mysql.select('pfam');
			return {
				pfamInfo,
			};
		}

		* show(domainId) {
			const domainInfo = yield app.mysql.get('pfam', {DomainId: domainId});
			return {
				domainInfo,
			};
		}
	};
	return pfamService;
};