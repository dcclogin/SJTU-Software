'use strict';

module.exports = app => {
	class HomeController extends app.Controller {
		* index() {
			yield this.ctx.render('index'); 
		}

		* demo() {
			yield this.ctx.render('demo');
		}
	}
	return HomeController;
};
