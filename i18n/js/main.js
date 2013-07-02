require.config({
  baseUrl: ".",
  paths: {
    underscore: "js/underscore",
    backbone: "js/backbone",
    "backbone-forms": "../distribution.amd/backbone-forms"
  },
  shim: {
    "underscore": {
      exports: "_"
    },
    "backbone": {
      deps: ["underscore", "jquery"],
      exports: "Backbone"
    }
  }
});

require([
  "underscore",
  "backbone",
  "backbone-forms"
], function(_, Backbone, BackboneForms) {
  var testModel, form;

  var TestModel = Backbone.Model.extend({
  });

  testModel = new TestModel({
    name:"My name is what?"
  });

  form = new Backbone.Form({
    model: testModel,
    schema: {
      name: {
        type: "Text",
        i18n:"localName"
      }
    }
  }).render();

  $("#localizedForm").append(form.el);


});