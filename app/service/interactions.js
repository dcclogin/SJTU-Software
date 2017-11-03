/*
* @Author: rumia
* @Date:   2017-04-28 00:53:14
* @Last Modified by:   rumia
* @Last Modified time: 2017-04-28 12:24:03
*/

module.exports = app => {
	class interactionService extends app.Service {
		* index() {
			// need revision
			const interactions = yield app.mysql.select('interaction');
			return {
				interactions,
			};
		}

		* showInt(domain1, domain2) {
			const interactionInfo = yield app.mysql.get('interaction', {
				Domain1: domain1, 
				Domain2: domain2,
			});
			return interactionInfo;
		}

		* listInt(domain) {
			const interactionList = yield app.mysql.query(
				// need revision
				`select * from interaction where Domain1 = '${domain}' or Domain2 = '${domain}'`
			);
			return {
				interactionList,
			};
		}
	};
	return interactionService;
};