/*
* @Author: rumia
* @Date:   2017-04-28 01:42:38
* @Last Modified by:   rumia
* @Last Modified time: 2017-04-28 12:38:32
*/

module.exports = app => {
	class goService extends app.Service {
		* index() {
			// need revision
			const go = yield app.mysql.select('GO');
			return {
				go,
			};
		}

		* show(term) {
			const goInfo = yield app.mysql.get('GO', {GoTerm: `GO:${term}`});
			return {
				goInfo,
			};
		}
	};
	return goService;
};