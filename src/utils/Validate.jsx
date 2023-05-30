// eslint-disable-next-line no-unused-vars
import React from 'react';

function Validate(e) {
    let hasError = false

    // Check if input.value is empty
    if (e.value.trim() === '') {
        e.style.borderColor = 'hsl(359, 39%, 58%)';
        e.parentElement.setAttribute('error-after', "Can't be blank");
        hasError = true;
        if (e.id === 'month-input' || e.id === 'year-input') {
            e.parentElement.parentElement.classList.add('error-group')
            e.parentElement.parentElement.setAttribute('error-after', "Can't be blank");
            hasError = true;

        } else if (e.id === 'cvc-input') {
            e.parentElement.classList.add('error-cvc')
            hasError = true;
        } else {
            e.parentElement.classList.add('error');
            hasError = true;
        }

    } else {
        // Check if name has first-name and second-name
        if (e.id === 'name-input') {
            const name = e.value.trim().split(' ');
            if (name.length < 2) {
                e.style.borderColor = 'hsl(359, 39%, 58%)';
                e.parentElement.setAttribute('error-after', "Please enter your full name");
                e.parentElement.classList.add('error');
                hasError = true;
            }
            if (e.validity.patternMismatch) {
                e.style.borderColor = 'hsl(359, 39%, 58%)';
                e.parentElement.setAttribute('error-after', "Wrong format, letters only");
                e.parentElement.classList.add('error');
                hasError = true;
            }
        } else if (e.id === 'number-input') {
            // Check if card number is 16 digits
            if (e.value.replace(/\s/g, '').length < 16) {
                e.style.borderColor = 'hsl(359, 39%, 58%)';
                e.parentElement.setAttribute('error-after', "Please enter 16 digits");
                e.parentElement.classList.add('error');
                hasError = true;

            }
            if (e.validity.patternMismatch) {
                e.style.borderColor = 'hsl(359, 39%, 58%)';
                e.parentElement.setAttribute('error-after', "Wrong format, numbers only");
                e.parentElement.classList.add('error');
                hasError = true;

            }
        } else if (e.id === 'month-input' || e.id === 'year-input') {
            if (e.id === 'month-input') {
                if (parseInt(e.value) < 1 || parseInt(e.value) > 12) {
                    e.style.borderColor = 'hsl(359, 39%, 58%)';
                    e.parentElement.parentElement.setAttribute('error-after', "Invalid month");
                    e.parentElement.parentElement.classList.add('error-group');
                    hasError = true;
                }
            }
            if (e.validity.patternMismatch) {
                e.style.borderColor = 'hsl(359, 39%, 58%)';
                e.parentElement.parentElement.setAttribute('error-after', "Wrong format, numbers only");
                e.parentElement.parentElement.add('error-group');
                hasError = true;
            }
        } else if (e.id === 'cvc-input') {

            if (e.validity.patternMismatch) {
                e.style.borderColor = 'hsl(359, 39%, 58%)';
                e.parentElement.setAttribute('error-after', "Wrong format, numbers only");
                e.parentElement.classList.add('error-cvc');
                hasError = true;
            } else if (e.value.length < 3) {
                e.style.borderColor = 'hsl(359, 39%, 58%)';
                e.parentElement.setAttribute('error-after', "Please enter 3 digits");
                e.parentElement.classList.add('error-cvc');
                hasError = true;

            }
        }
    }
    return hasError;

}

export default Validate;
