module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            all: ['script.js', 'Gruntfile.js'],
            options: {
                jshintrc: true
            }
        },
        sass: {
            dist: {
                files: [{
                    src: ['style.scss'],
                    dest: 'style.css'
                }]
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', ['jshint', 'sass']);
};