const gulp = require('gulp')
const { series, parallel } = require('gulp')
//const series = gulp.series

const antes1 = cb => {
    console.log('Tarefa Antes 1')
    return cb()
}

const antes2 = cb => {
    console.log('Tarefa Antes 2')
    return cb()
}

function copiar(cb){
    //gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])
      gulp.src('pastaA/**/*.txt')
        .pipe(gulp.dest('pastaB'))
        //.pipe(imagePelaMetade())
        //.pipe(imageEmPretoEBranco())
        //.pipe(TransformacaoA())
        //.pipe(TransformacaoB())
        //.pipe(TransformacaoC())
    return cb()
}

const fim = cb => {
    console.log('Tarefa fim!')
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim,
)