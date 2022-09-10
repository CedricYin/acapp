#! /bin/bash

JS_PATH=/home/ysq/acapp/game/static/js/
JS_PATH_DIST=${JS_PATH}dist/
JS_PATH_SRC=${JS_PATH}src/

find $JS_PATH_SRC -type f -name '*.js' | sort | cat > ${JS_PATH_DIST}game.js
