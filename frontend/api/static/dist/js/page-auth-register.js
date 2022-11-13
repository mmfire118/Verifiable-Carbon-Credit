$(function () {
    'use strict';
  
    var pageResetForm = $('.auth-register-form');
  
    // jQuery Validation
    // --------------------------------------------------------------------

    $.validator.addMethod("regex", function(value, element, regexpr) {          
        return regexpr.test(value);
    }, "Please enter a valid password.");

    /*!
    * REGEX/METHOD FOR BELOW METHOD COMBINED FROM:
    * jQuery Validation Plugin 1.11.1
    *
    * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
    * http://docs.jquery.com/Plugins/Validation
    *
    * Copyright 2013 JÃ¶rn Zaefferer
    * Released under the MIT license:
    *   http://www.opensource.org/licenses/mit-license.php
    */

    $.validator.addMethod("phoneUSUK", function(phone_number, element) {
      phone_number = phone_number.replace(/\s+/g, "");
      return this.optional(element) || phone_number.length > 9 &&
        (phone_number.match(/^(\+?1-?)?(\([2-9]\d{2}\)|[2-9]\d{2})-?[2-9]\d{2}-?\d{4}$/) || phone_number.match(/^(?:(?:(?:00\s?|\+)44\s?|0)(?:1\d{8,9}|[23]\d{9}|7(?:[45789]\d{8}|624\d{6})))$/))
    }, "Please enter a valid phone number");

    /*!
    END jQuery Validation Plugin 1.11.1
    */



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
        errorElement: 'div',
        errorPlacement: function(error, element) {
          error.insertAfter(element.parent().parent());
        },
        rules: {
          'select-country': {
            required: true,
          },
          'two-factor-code': {
            required: true,
            digits: true
          },
          'phone-number-input': {
            required: true,
            phoneUSUK: true
          },
          'register-email': {
            required: true,
            email: true
          },
          'register-password': {
            required: true,
            regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{10,}/
          },
        }
      });
    }
  });
  