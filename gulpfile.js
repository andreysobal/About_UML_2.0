var gulp=require('gulp'),
		sass = require('gulp-sass'),
		browserSync = require('browser-sync'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglifyjs');

gulp.task('sass', function(){
	return gulp.src('app/sass/**/*.sass')
				.pipe(sass())
				.pipe(gulp.dest('app/css/'))
				.pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: 'app'
        },
        notify: false
    });
});
gulp.task('scripts', function() {
  return gulp.src([ // Берем все необходимые библиотеки
     'node_modules/jquery/dist/jquery.min.js',
     'node_modules/magnific-popup/dist/jquery.magnific-popup.min.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify()) // Сжимаем JS файл
    .pipe(gulp.dest('app/js'));
});

gulp.task('watch', ['browser-sync', 'sass'], function() {
  gulp.watch('app/sass/**/*.sass', ['sass']);
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/js/**/*.js', browserSync.reload);
});