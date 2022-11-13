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
  
    var pageResetForm = $('.auth-register-form');
  
    // jQuery Validation
    // --------------------------------------------------------------------

    $.validator.addMethod("regex", function(value, element, regexpr) {          
        return regexpr.test(value);
    }, "Provide a valid password.");

    if (pageResetForm.length) {
      pageResetForm.validate({
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
          'org-pin': {
            required: true,
            minlength: 10,
            maxlength: 10,
            digits: true
          },
          'register-username': {
            required: true
          },
          'register-email': {
            required: true,
            email: true
          },
          'register-password': {
            required: true,
            minlength: 12,
            regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{12,}/
          },
          'register-confirmation': {
            required: true,
            minlength: 12,
            equalTo: '#register-password'
          }
        }
      });
    }
  });
  