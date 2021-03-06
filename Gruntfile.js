/* global module */

module.exports = function (grunt) {
    "use strict";

    grunt.initConfig({
        eslint: {
            target: [
                "Gruntfile.js",
                "public/js/*.js"
            ]
        },
        "bower-install-simple": {
            app: {
                options: {
                    color: true,
                    production: false,
                    cwd: "public",
                    directory: "lib"
                }
            }
        }
    });

    // Package management
    grunt.loadNpmTasks("grunt-npm-install");
    grunt.loadNpmTasks("grunt-bower-install-simple");
    grunt.loadNpmTasks("grunt-eslint");

    grunt.registerTask("install", ["bower-install-simple:app", "npm-install"]);
    grunt.registerTask("default", ["eslint"]);
};
