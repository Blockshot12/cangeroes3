'use strict'

export const dirs = {
  src: 'src',
  dist: 'dist'
}

export const paths = {
  local: `http://cangeroes3.dd:8083/`,
  styles: {
    src: `${dirs.src}/scss/**/*.scss`,
    dist: `${dirs.dist}/css`
  },
  scripts: {
    src: `${dirs.src}/js/**/*.js`,
    file: `scripts`,
    dist: `${dirs.dist}/js`
  },
  images: {
    src: `${dirs.src}/img/**/*`,
    dist: `${dirs.dist}/img`
  }
}
