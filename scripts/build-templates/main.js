/**
 * Backbone Forms v{{version}}
 *
 * Copyright (c) 2013 Charles Davison, Pow Media Ltd
 *
 * License and more information at:
 * http://github.com/powmedia/backbone-forms
 */

/**
 * NOTE: This is a fork of backbone-forms that injects data-i18n attributes into labels
 * for localization support. The fork is located at https://github.com/cluebcke/backbone-forms
 */

;(function(root) {

  //DEPENDENCIES
  //CommonJS
  if (typeof exports !== 'undefined' && typeof require !== 'undefined') {
    var $ = root.jQuery || root.Zepto || root.ender || require('jquery'),
        _ = root._ || require('underscore'),
        Backbone = root.Backbone || require('backbone');
  }

  //Browser
  else {
    var $ = root.jQuery,
        _ = root._,
        Backbone = root.Backbone;
  }


  //SOURCE
  {{body}}


  //Metadata
  Form.VERSION = '{{version}}';


  //Exports
  Backbone.Form = Form;

})(this);
