'use strict';

const fs = require('fs');
const normalize = require('path').normalize;

const axios = require('axios');

const extract = require('../utils/extract');

const newapp = async (appname, options) => {
	console.log(`Spinning up a new WordBox app at ${appname}...`);

	//const stream = fs.createWriteStream;
	// const stream = normalize(process.cwd() + '/temp.zip');
	// console.log(stream)
	// const responseStream = await axios({
	// 	method: 'get',
	// 	url: 'https://github.com/codefeathers/up-serve/archive/master.zip',
	// 	responseType: 'stream'
	// })
	// await responseStream.data.pipe(fs.createWriteStream(stream))
	// const extractResponse = await extract(stream, normalize(process.cwd() + '/' + appname))
	// console.log(extractResponse)
	// fs.unlink(stream, (err, res) => console.log(err, res))
};

module.exports.newapp = newapp;