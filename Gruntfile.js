module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-rev');
  grunt.loadNpmTasks('grunt-usemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: {
      build: {
        src: ['publish/*'],
      },
    },
    copy: {
      publish: {
        files: [{
          expand: true,
          src: ['index.html', 'css/*.css', 'js/*.js'],
          dest: 'publish/',
        }],
      },
    },
    uglify: {
      options: {
        report: 'gzip',
      },
    },
    jshint: {
      files: ['Gruntfile.js', 'js/*.js'],
    },
    ngmin: {
      app: {
        src: ['publish/js/main.js'],
        dest: 'publish/js/main.js',
      },
    },
    concat: {
      js: {
        options: {
          // Replace all 'use strict' statements in the code with a single one at the top
          //banner: "'use strict';\n",
          process: function(src, filepath) {
            return '// Source: ' + filepath + '\n' +
                src.replace(/(^|\n)[ \t]*('use strict'|"use strict");?\s*/g, '$1');
          },
        },
      },
    },
    cssmin: {
      options: {
        report: 'gzip',
      },
    },
    rev: {
      files: {
        src: ['publish/css/style.min.css', 'publish/js/main.min.js'],
      },
    },
    'useminPrepare': {
      html: ['publish/index.html'],
    },
    usemin: {
      html: ['publish/index.html'],
    },
    htmlmin: {
      dist: {
        options: {
          //removeComments: true,
          //collapseWhitespace: true,
          useShortDoctype: true,
        },
        files: {
          'publish/index.html': 'publish/index.html',
        },
      },
    },
  });

  grunt.registerTask('default', ['clean', 'copy', 'useminPrepare', 
      'concat', 'uglify', 'cssmin', 'rev', 'usemin', 'htmlmin']);

}
