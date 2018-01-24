var sevenZip = require('node-7z')
var Zip = new sevenZip()

const extract = (filename, destination) => {
Zip.extractFull(filenames, destination)
	.progress((files) => console.log('Some files are extracted: %s', files))
	.then(() => console.log('Extracting done!'))
	.catch(function (err) => console.error(err))
}

module.exports = extract
