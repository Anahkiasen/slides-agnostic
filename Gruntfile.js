module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-shell');

	grunt.initConfig({
		shell: {
			reveal: {
				command: 'reveal-ck generate',
			},
		},
		watch: {
			options: {
				livereload: true
			},
			reveal: {
				files: ['config.yml', 'slides.md'],
				tasks: 'shell:reveal',
			},
		}
	});

};
