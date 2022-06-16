const { src, dest } = require("gulp");

const imagemin = require("gulp-imagemin");

function imagenes(done) {
  src("src/img/**/*")
    .pipe(imagemin({ optimizationLavel: 3 }))
    .pipe(dest("build/img"));

  done();
}

exports.imagenes = imagenes;
