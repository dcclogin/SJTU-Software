'use strict';

module.exports = app => {
	app.get('/', 'home.index');
	app.get('/search', 'search.index');
	app.resources('clinical', '/api/clinical', 'clinical');
	app.resources('fcmap', '/api/fcmap', 'fcmap');
	//app.resources('pfam', '/api/pfam', 'pfam');
	//app.resources('interactions', '/api/interactions', 'interactions');
	//app.resources('go', '/api/go', 'go');
	//app.resources('pgmap', '/api/pgmap', 'pgmap');
};