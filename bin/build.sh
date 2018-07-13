#!/bin/sh

declare ___DIST___='./dist'
BABEL=./node_modules/.bin/babel

echo "clean ${___DIST___}"
rm -rf ${___DIST___}

echo "build file ------> ${___DIST___}"
${BABEL} --ignore node_modules,gulpfile.js  ./ -d ${___DIST___}