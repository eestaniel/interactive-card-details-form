// eslint-disable-next-line no-unused-vars
import React from 'react';

const CardDetailForm = () => {

    function handleClick(e) {
        e.preventDefault();
        // check if all inputs are filled
        let monthError = false;
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {

            // check if input is empty
            if (input.value === '') {
                if (input.parentElement.id === 'date') {
                    input.parentElement.parentElement.classList.add('error-group');
                    input.style.borderColor = 'red';
                    input.parentElement.parentElement.setAttribute('error-after', "Can't be blank");
                    monthError = true;
                    return
                } else if (input.parentElement.id === 'cvc') {
                    input.parentElement.classList.add('error-cvc');
                    input.style.borderColor = 'red';
                    input.parentElement.setAttribute('error-after', "Can't be blank");
                    return
                } else {
                    input.parentElement.classList.add('error');
                    input.style.borderColor = 'red';
                    input.parentElement.setAttribute('error-after', "Can't be blank");
                    return
                }
            }

            // check if input is valid
            if (input.validity.patternMismatch) {
                if (input.parentElement.id === 'date') {
                    input.parentElement.parentElement.classList.add('error-group');
                    input.style.borderColor = 'red';
                    input.parentElement.parentElement.setAttribute('error-after', "Invalid");
                    monthError = true;
                    return
                } else if (input.parentElement.id === 'cvc') {
                    input.parentElement.classList.add('error-cvc');
                    input.style.borderColor = 'red';
                    input.parentElement.setAttribute('error-after', "Invalid");
                    return
                } else {
                    input.parentElement.classList.add('error');
                    input.style.borderColor = 'red';
                    input.parentElement.setAttribute('error-after', "Wrong format, numbers only");
                    return
                }
            }
            // reset error
            if (input.parentElement.id === 'date' && !monthError) {
                input.parentElement.parentElement.classList.remove('error-group');
                input.style.borderColor = '#ccc';
                input.parentElement.parentElement.removeAttribute('error-after');

            } else if (input.parentElement.id === 'cvc') {
                input.parentElement.classList.remove('error-cvc');
                input.style.borderColor = '#ccc';
                input.parentElement.removeAttribute('error-after');

            } else {
                input.parentElement.classList.remove('error');
                input.style.borderColor = '#ccc';
                input.parentElement.removeAttribute('error-after');
             
            }
        });
    }

    return (
        <>
            <div className="form__images">
                <div className="form__bg"></div>
                <div className="form__card-back" id={'card-1'}>
                    <div className="form__card-back__cvc" id={'card-1-cvc'}>000</div>
                </div>
                <div className="form__card-front" id={'card-2'}>
                    <div className="form__card-front__logo"></div>
                    <div className="form__card-front__number" id={'card-1-number'}>0000 0000 0000 0000</div>
                    <div className="form__card-front__name" id={'card-1-name'}>Jane Appleseed</div>
                    <div className="form__card-front__date" id={'card-1-date'}>00/00</div>
                </div>
            </div>
            <form className={"form-container"}>
                <label className="form__name" id={'name-label'}>
                    <input type="text" id={'name-input'} placeholder={'e.g. Jane Appleseed'} pattern={'[a-zA-Z ]+'}/>
                </label>
                <label className="form__number" id={'number-label'}>
                    <input type="text" id={'number-input'} maxLength={16} pattern={'[0-9]+'} inputMode={'numeric'}
                           placeholder={'e.g. 0000 0000 0000 0000'}/>
                </label>
                <div className="form__group">
                    <label className="form__date" id={'date'}>
                        <input type="text" className="form__month" id={'month'} maxLength={2} pattern={'[0-9]+'}
                               placeholder={'MM'}/>
                        <input type="text" className="form__year" id={'year'} maxLength={2} pattern={'[0-9]+'}
                               placeholder={'YY'}/>
                    </label>
                    <label className="form__cvc" id={'cvc'}>
                        <input type="text" maxLength={3} pattern={'[0-9]'} placeholder={'e.g.123'}/>
                    </label>
                </div>
                <button className="button" onClick={handleClick}>Confirm</button>
            </form>
        </>
    );
};

export default CardDetailForm;