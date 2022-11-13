$(function () {
    'use strict';
  
    $.validator.addMethod("regex", function(value, element, regexpr) {          
        return regexpr.test(value);
    }, "Provide a valid password.");

    var form = $('form')

    $.validator.addMethod("regexPhone", function(value, element, regexpr) {          
        return regexpr.test(value);
    }, "Provide a valid phone number.");

    // jQuery Validation
    // --------------------------------------------------------------------
    if (form.length) {
      form.each(function () {
        var $this = $(this);
  
        $this.validate({
          rules: {
            'accountActivation': {
              required: true
            },
            'org-pin': {
              required: true,
              digits: true,
              minlength: 10,
              maxlength: 10
            },
            'authenticationCode': {
              required: true,
              digits: true
            },
            'two-factor-code': {
              required: true,
              digits: true
            },
            'reset-num': {
              required: true, 
              regexPhone: /^\([0-9]{3}\) [0-9]{3}-[0-9]{4}$/
            },
            username: {
              required: true
            },
            name: {
              required: true
            },
            email: {
              required: true,
              email: true
            },
            password: {
              required: true
            },
            company: {
              required: true
            },
            'account-password': {
              required: true,
              minlength: 12,
              regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{12,}/
            },
            'account-password-reset': {
              required: true,
              minlength: 12,
              regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{12,}/
            },
            'account-password-2fa': {
              required: true,
              minlength: 12,
              regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{12,}/
            },
            'new-password': {
              required: true,
              minlength: 12,
              regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{12,}/
            },
            'password': {
              required: true,
              minlength: 12,
              regex: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{12,}/
            },
            'confirm-new-password': {
              required: true,
              minlength: 12,
              equalTo: '#account-new-password'
            },
            dob: {
              required: true
            },
            phone: {
              required: true
            },
            website: {
              required: true
            },
            'select-country': {
              required: true
            }
          }
        });
        $this.on('submit', function (e) {
          e.preventDefault();
        });
      });
    }
  });