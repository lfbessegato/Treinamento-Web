const gulp = require('gulp')

gulp.task('default', () => { //default -> porta de entrada
    //console.log('OK!')
    gulp.start('copiar','fim')
})

gulp.task('copiar', ['antes1', 'antes2'], () => { // pré-requisito antes1, e antes2
    //console.log('Copiar !!!')
    return gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
        //.pipe(transformacao1())
        //.pipe(transformacao2())
        .pipe(gulp.dest('pastaB'))
})

gulp.task('antes1', () => {
    console.log('Antes 1 !!!')
})

gulp.task('antes2', () => {
    console.log('Antes 2!!!')
})

gulp.task('fim', () => {
    console.log('Fim !!!')
})