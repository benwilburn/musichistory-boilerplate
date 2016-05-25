'use strict'
const gulp = require('gulp')
const sass = require('gulp-sass')
const jshint = require('gulp-jshint')
const sassLint = require('gulp-sass-lint')

gulp.task('sass', ['lint:sass', 'sass:compile', 'sass:watch'])

gulp.task('sass:compile', () => (
		gulp.src('./src/**/*.scss')
			.pipe(sass())
			.pipe(gulp.dest('./dest/**/*.css'))
	))

gulp.task('sass:watch', () => (
	gulp.watch('./src/**/*.scss', ['lint:sass', 'sass:compile'])
	))

gulp.task('lint', ['lint:js', 'lint:sass'])

gulp.task('lint:js', () => (
		gulp.src('./dest/**/*.js')
			.pipe(jshint())
			.pipe(jshint.reporter('jshint-stylish'))
	))

gulp.task('lint:sass', () => (
	gulp.src('src/**/*.scss')
		.pipe(sassLint.format())
		.pipe(sassLint.failOnError())

	))

gulp.task('default', ['sass', 'lint'])
