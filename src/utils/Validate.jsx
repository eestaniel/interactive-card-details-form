import React from 'react';

function Validate(e) {

    // Check if input.value is empty
    if (e.value.trim() === '') {
        e.style.borderColor = 'red';
        e.parentElement.setAttribute('error-after', "Can't be blank");

        if (e.parentElement.id === 'date') {
            e.parentElement.classList.add('error-group')

        } else if (e.parentElement.id === 'cvc'){

            e.parentElement.classList.add('error-cvc')

        } else {
            e.parentElement.classList.add('error');

        }

    }else if (e.value.validity.patternMismatch) {
        e.parentElement.classList.add('error-group');
        e.style.borderColor = 'red';
        e.parentElement.setAttribute('error-after', "Invalid");

    }

}

export default Validate;