Demo of React + react-router with Mongo DB.
==============

Installation instructions
==============

Run this in root directory to install dependencies and create bundle.
--------------
	npm install
	browserify -t [ reactify --es6 ] main.js | uglifyjs -o bundle.js

Run these commands in root/data directory to create the database.
--------------
Run in seperate processes

	mongod --dbpath .
	mongoimport --db journal --collection entries --file ../journal.json --jsonArray

Start web server from root directory.
--------------
	node server
	open http://localhost:3000

Extra: Build Process for Development
--------------
	browserify -t [ reactify --es6 ] main.js -o bundle.js