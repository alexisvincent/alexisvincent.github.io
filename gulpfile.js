/**
 * Compile script for gulp - Here Be Stuff
 *
 * @author Alexis Vincent
 */
var gulpir = require('gulpir');

gulpir.config.projectName = "alexisvincent";
gulpir.config.srcDir = "/";
gulpir.config.assetsDir = "src/";
gulpir.config.publicDir = "build/";
gulpir.config.cssOutput = "build/css";
gulpir.config.jsOutput = "build/js";
gulpir.config.sourcemaps = true;
gulpir.config.autoprefix = true;
gulpir.config.watchers = {"default": {}};

var watch = false;

gulpir(function (mix) {
	//Copy Index File
	mix.syncFile(gulpir.config.assetsDir + 'index.html', gulpir.config.publicDir);

	//Copy Images
	mix.syncDir(gulpir.config.assetsDir + 'img', gulpir.config.publicDir + 'img');

	//Copy SVG's
	//mix.syncDir(gulpir.config.assetsDir + 'libs/Iconic/svg/smart', gulpir.config.publicDir + 'svg');

	//Compile Styles
	mix.sass(gulpir.config.projectName + '.scss');

	//Compile JS
	mix.webpack({
		entry: "./" + gulpir.config.assetsDir + 'js/' + gulpir.config.projectName + '.js',
		output: {
			filename: gulpir.config.projectName + '.app.min.js',
			path: gulpir.config.jsOutput + "/",
			publicPath: './'
		}
	}, watch);

	//Libs JS
	mix.scripts(['libs/googleAnalytics.js'], gulpir.config.jsOutput + "/" + gulpir.config.projectName + '.libs.min.js')
});