var gulp = require('gulp');
var concat=require('gulp-concat');
var ts = require('gulp-typescript');
var browserify = require("browserify");
var babelify=require("babelify");
var source = require('vinyl-source-stream');
var less=require('gulp-less');
var path=require('path');
var fs = require("fs");

var babel=require('gulp-babel');
/*
Latest versions of sass-compiler seem to require Python.
That is an overkill for simple demo. If sass is required
install it separately. 
- npm install gulp-sass
var sass = require('gulp-sass');
*/



var server="server";
var wwwroot="wwwroot";
var libDir=wwwroot+"/libs";
var appDir=wwwroot+"/app";
var scriptDir=wwwroot+"/script";
var cssDir=wwwroot+"/css";


function lessCss(cb) {
	gulp.src('./styles/**/*.less')
		.pipe(less({
		  paths: [ path.join(__dirname, 'less', 'includes') ]
		}))
		.pipe(gulp.dest(cssDir));
	cb();
}

/* See the comment above */
function sassCss(cb) {
//  return gulp.src('./styles/**/*.scss')
//    .pipe(sass().on('error', sass.logError))
//    .pipe(gulp.dest(cssDir));
	cb();
}


function jsx(){
	var fn="es6.app";
	var file="./jsx/"+fn+".jsx";
	var bundle=fn+".bundle.js";
	return browserify({
			entries: file,
			extensions: ['.jsx','.js'],
			debug: true
		})
		.transform(babelify.configure({presets: ["env","react"]}))
		.bundle()
		.on("error",err => {
			console.log("ERROR:",err.message);
			console.log(err.codeFrame);
		})
		.pipe(source(bundle))
		.pipe(gulp.dest(appDir));
}


function tsc(cb){
	var ts = require('gulp-typescript');
	var tsProject = ts.createProject('tsconfig.json', {
		typescript: require('typescript')
	});
    tsProject.src() 
        .pipe(tsProject())
        .js.pipe(gulp.dest(appDir));
	cb();
}

function build(cb){
	gulp.parallel(tsc,jsx,lessCss,sassCss)(cb)
}


exports.tsc=tsc;
exports.jsx=jsx;
exports.less=lessCss;
exports.sass=sassCss;
exports.build=build;



