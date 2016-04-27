module.exports = function(grunt) {

  grunt.initConfig({
    compass: {
      dist: {
        options: {
          sassDir: 'scss',
          cssDir: 'dist/css',
          environment: 'development',
          outputStyle: 'compressed'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.registerTask('default', ['compass']);

};
