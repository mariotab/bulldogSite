var gulp = require('gulp'),
	sass = require('gulp-sass');
	browserSync = require('browser-sync'); // Подключаем Browser Sync

gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('src/scss/main.scss') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(gulp.dest('src/css')) // Выгружаем результата в папку app/css
        .pipe(browserSync.reload({stream: true}))
});

gulp.task('browser-sync', function() { // Создаем таск browser-sync
    browserSync({ // Выполняем browser Sync
        server: { // Определяем параметры сервера
            baseDir: 'src' // Директория для сервера - app
        },
        notify: false // Отключаем уведомления
    });
});


  gulp.task('watch', ['browser-sync', 'sass'], function() {
    gulp.watch('src/scss/main.scss', ['sass']); // Наблюдение за sass файлами
    gulp.watch('src/index.html', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/js/main.js', browserSync.reload); 
});

  gulp.task('default', ['watch']);