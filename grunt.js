module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      head: {
        src: [
          'js/vendor/modernizr-*.js',
          'js/vendor/respond-*.js'
        ],
        dest: 'js/head.js'
      },
      foot: {
        src: [
          'js/plugins.js',
          'js/main.js'
        ],
        dest: 'js/foot.js'
      }
    },
    min: {
      foot: {
        src: ['js/foot.js'],
        dest: 'js/foot.min.js'
      }
    },
    less: {
      all: {
        src: 'less/style.less',
        dest: 'css/style.css',
        options: {
          compress: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-less');
};