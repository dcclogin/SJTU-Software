'use strict';

module.exports = appInfo => {
	const config = {

		// mysql config
	  	mysql: {
	  		client: {
	  			host: '127.0.0.1',
	  			port: 3306,
	  			user: 'root',
	  			password: '18658202560',
	  			database: 'DB_MOLC',
	  		},
	  		app: true,
	  		agent: false,
	  	},

	  	// view engine
		view: {
			defaultViewEngine: 'nunjucks',
			mapping: {
				'.nj': 'nunjucks',
				'.ejs': 'ejs',
			},
		},
	};

  // should change to your own
  config.keys = appInfo.name + '_1492754961278_1238';

  return config;
};
