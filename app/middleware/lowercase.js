/*
* @Author: rumia
* @Date:   2017-04-27 16:24:10
* @Last Modified by:   rumia
* @Last Modified time: 2017-04-27 16:25:31
*/

module.exports = () => {
	return function* (next) {
		this.query.name = this.query.name && this.query.name.toLowerCase();
		yield next;
	};
};