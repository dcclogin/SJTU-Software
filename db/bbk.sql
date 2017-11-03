use bat_bbk_db;

CREATE TABLE factors
( 
	fid varchar(16), 
	author varchar(64),
	time_of_enter varchar(16),
	ctype varchar(20),  
	status_of_part varchar(20),
	status_of_smpl varchar(20),
	status_of_dna varchar(20),
	results varchar(20),
	comments int,
	stars int,
	uses int,
	qualitative_exp varchar(16),
	description varchar(256),
	score numeric(5,2),
	PRIMARY KEY (fid) 
);

CREATE TABLE bbk 
( 
	bid varchar(16),  
	author varchar(64),
	time_of_enter varchar(16),
	btype varchar(20),
	status_of_part varchar(20),
	status_of_smpl varchar(20),
	status_of_dna varchar(20),
	results varchar(20),
	comments int,
	stars int,
	Uses int,
	qualitative_exp varchar(16),
	Del varchar(20),
	description varchar(256),
	score numeric(5,2),
	PRIMARY KEY (bid) 
);
