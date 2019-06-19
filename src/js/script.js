$(document).ready(function() {

    $('.login-form__button').prop('disabled', 'disabled');

    $('.login-form').validate({
        rules: {
            'number': {
                required: true,
                regx: /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/
            },
            'password': {
                required: true,
                minlength: 5,
            }
        },
        messages: {
            'number': {
                required: ''
            },
            'password': {
                required: '',
                minlength: '',
            }
        }
    });

    $.validator.addMethod("regx", function(value, element, regexpr) {
        if (!regexpr.test(value)) {
            $('.number').addClass('number--error').removeClass('number--valid');
        } else {
            $('.number').removeClass('number--error').addClass('number--valid');
        }

        return regexpr.test(value);
    }, '');

    $('input').on('blur keyup', function() {
        if ($('.login-form').valid()) {
            $('.login-form__button').prop('disabled', false);
        } else {
            $('.login-form__button').prop('disabled', 'disabled');
        }
    });
});
