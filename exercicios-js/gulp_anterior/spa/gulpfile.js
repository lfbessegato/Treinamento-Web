const gulp = require('gulp')
const util = require('gulp-util') // Ficar monitorando a mudanca dos arquivos
const sequence = require('run-sequence') // Para o gulp não executar em paralelo, e sim em sequencia
/* 
Foi comentado para utilizar com futuras versões do Gulp 4.x
*/ 

require ('./gulpTasks/app')
require ('./gulpTasks/deps')
require ('./gulpTasks/servidor')

gulp.task('default', () => {
    if (util.env.production){
        sequence('deps', 'app')
        //gulp.start('deps', 'app')
    } else {
        sequence('deps', 'app', 'servidor')
        //gulp.start('deps', 'app', 'servidor')
    }
})