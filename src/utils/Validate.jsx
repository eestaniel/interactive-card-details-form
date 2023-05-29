import React from 'react';

function Validate(e) {
    let hasError = false

    // Check if input.value is empty
    if (e.value.trim() === '') {
        e.style.borderColor = 'red';
        e.parentElement.setAttribute('error-after', "Can't be blank");
        hasError = true;
        if (e.parentElement.id === 'date') {
            e.parentElement.classList.add('error-group')

        } else if (e.parentElement.id === 'cvc') {

            e.parentElement.classList.add('error-cvc')
        } else {
            e.parentElement.classList.add('error');

        }

    } else {
        // Check if name has first-name and second-name
        if (e.parentElement.id === 'name-label') {
            const name = e.value.split(' ');
            if (name.length < 2) {
                e.style.borderColor = 'red';
                e.parentElement.setAttribute('error-after', "Please enter your full name");
                e.parentElement.classList.add('error');
            }
            if (e.validity.patternMismatch) {
                e.style.borderColor = 'red';
                e.parentElement.setAttribute('error-after', "Wrong format, letters only");
                e.parentElement.classList.add('error');
            }
        } else if (e.parentElement.id === 'number-label') {
            // Check if card number is 16 digits
            if (e.value.replace(/\s/g, '').length < 16) {
                e.style.borderColor = 'red';
                e.parentElement.setAttribute('error-after', "Please enter 16 digits");
                e.parentElement.classList.add('error');

            }
            if (e.validity.patternMismatch) {
                e.style.borderColor = 'red';
                e.parentElement.setAttribute('error-after', "Wrong format, numbers only");
                e.parentElement.classList.add('error');

            }
        } else if (e.parentElement.id === 'date') {
            if (e.id === 'month') {
                if (parseInt(e.value) < 1 || parseInt(e.value) > 12) {
                    e.style.borderColor = 'red';
                    e.parentElement.setAttribute('error-after', "Wrong format, numbers only");
                    e.parentElement.classList.add('error-group');

                }
            }
            if (e.validity.patternMismatch) {
                e.style.borderColor = 'red';
                e.parentElement.setAttribute('error-after', "Wrong format, numbers only");
                e.parentElement.classList.add('error-group');

            }
        } else if (e.parentElement.id === 'cvc') {
            if (e.value.length < 3) {
                e.style.borderColor = 'red';
                e.parentElement.setAttribute('error-after', "Please enter 3 digits");
                e.parentElement.classList.add('error-cvc');

            }
            if (e.validity.patternMismatch) {
                e.style.borderColor = 'red';
                e.parentElement.setAttribute('error-after', "Wrong format, numbers only");
                e.parentElement.classList.add('error-cvc');

            }
        }
    }
    return hasError;

}

export default Validate;
