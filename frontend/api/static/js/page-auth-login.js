/*=========================================================================================
  File Name: form-validation.js
  Description: jquery bootstrap validation js
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy  - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: PIXINVENT
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

$(function () {
    'use strict';
  
    var pageLoginForm = $('.auth-login-form');
  
    // jQuery Validation
    // --------------------------------------------------------------------
    $.validator.addMethod("regex", function(value, element, regexpr) {          
        return regexpr.test(value);
    }, "Provide a valid password.");

    if (pageLoginForm.length) {
      pageLoginForm.validate({
        /*
        * ? To enable validation onkeyup
        onkeyup: function (element) {
          $(element).valid();
        },*/
        /*
        * ? To enable validation on focusout
        onfocusout: function (element) {
          $(element).valid();
        }, */
        rules: {
          'login-email': {
            required: true,
            email: true
          },
          'login-password': {
            required: true,
            minlength: 12,
            regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{12,}/
          }
        }
      });
    }
  });
  