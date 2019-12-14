module.exports = function(grunt) {

  grunt.initConfig({
    multi: {
        opt1:'Some data',
        opt2:'Other data'
    }
  });  

  // Arguments given > grunt simple:abc
  grunt.registerTask("simple",function(pars){
    grunt.log.writeln("Running simple task: "+pars)
  });

  // If grunt multi -> runs runs with opt1 and then opt2
  // grunt multi:opt1 -> shows opt1:Some data
  // grunt multi:opt2 -> shows opt2:Other data
  grunt.registerMultiTask("multi",function(){
    grunt.log.writeln(this.target+":"+this.data);
  });

  grunt.registerTask('default', ['simple','multi']);

  grunt.registerTask('opts', ['simple:abc','multi:opt2']);

};
