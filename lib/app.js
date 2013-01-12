require.config({
  paths: {
    'backbone': 'vendor/backbone.min',
    'underscore': 'vendor/underscore.min'
  },
  shim: {
    'backbone': {
      deps: ['underscore', 'vendor/jquery.min'],
      exports: 'Backbone'
    },
    'underscore': {
      exports: '_'
    }
  }
});

require(["backbone"], function(B) {
  console.log(B);
});

