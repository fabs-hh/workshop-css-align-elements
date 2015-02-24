module.exports = function(grunt) {

        // Load grunt tasks automatically
        require('load-grunt-tasks')(grunt);

        grunt.initConfig({

                connect: {
                        server: {
                                options: {
                                        port: 9001,
                                        hostname: '0.0.0.0',
                                        livereload: 35730,
                                        middleware: function(connect, options, middlewares) {
                                                middlewares.push(require('connect-livereload')());
                                                return middlewares;
                                        },
                                        open: true
                                }
                        }
                },

                watch: {
                        all: {
                                files: ['**/*'],
                                options: {
                                        spawn: false,
                                        livereload: 35730

                                },
                        },
                }
        });

        grunt.registerTask('default', 'Start a connect web server and watch all files for changes', function(target) {
                grunt.task.run([
                        'connect',
                        'watch'
                ]);
        });

};