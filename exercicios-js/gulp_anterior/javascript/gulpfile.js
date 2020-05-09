const gulp = require('gulp')
const concat = require('gulp-concat') // Concatenar no Gulp
const uglify = require('gulp-uglify') // Tira os espaços em branco 
const babel = require('gulp-babel')

gulp.task('default', () => {
    return gulp.src('src/**/*.js') // pega inclusive as subPastas
        .pipe(babel({  // babel -> Tradução das línguas em JS
            minified: true, // é o mesmo que utilizasse o uglifly (deixa o código mais enxutono)
            comments: false,
            presets: ["env"] // determina automaticamente os plug-ins necessários para o JS
        }))
        .pipe(uglify())  //uglifly -> tornar o código mais enxuto possível
        .on('error', function(err) { console.log(err) })
        .pipe(concat('codigo.min.js')) // Para informar que o código foi minificado
        .pipe(gulp.dest('build'))
})