var exec = require('child_process').exec;

function clean() {
	return exec('rm -rf ./dist');
}

module.exports = clean;
