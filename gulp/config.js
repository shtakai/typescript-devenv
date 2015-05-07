var dest = '../dest';
var src = '../src';
var path = require('path');
var relativeSrcPath = path.relative('.', src);

module.exports = {
    js: {
        src: dest + '/js/*.js',
        dest: dest + '/js/min',
    },

    ts: {
        src: [
            src + '/ts/*.ts'
        ],
        dest: src + '/js',
        options: {
            noImplicitAny : true,
            target : 'ES3',
            module : 'commonjs'
        }
    },

    browserify: {
        entry: {
            entries: src + '/js/main.js',
            debug: true
        },
        dest: dest + '/js',
        output: {
            filename: 'bundle.js'
        }
    },

    watch: {
        ts: relativeSrcPath + '/ts/*.ts',
        js: relativeSrcPath + '/js/*.js'
    }
}