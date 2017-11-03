/*
* @Author: rumia
* @Date:   2017-04-28 12:54:29
* @Last Modified by:   rumia
* @Last Modified time: 2017-04-28 12:56:49
*/

module.exports = app => {
	class pgmapService extends app.Service {
		* index() {
			const pgmap = yield app.mysql.query('select * from pgmap natural join GO');
			return {
				pgmap
			};
		}
	};
	return pgmapService;
};