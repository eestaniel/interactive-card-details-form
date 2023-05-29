// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import {isWhiteSpaces} from "eslint-plugin-react/lib/util/jsx.js";
import Validate from "./utils/Validate.jsx";

const CardDetailForm = () => {
    const [cardInputNumber, setCardInputNumber] = useState('');
    const [cardImgNumber, setCardImgNumber] = useState('');
    const [monthInput, setMonthInput] = useState('');
    const [yearInput, setYearInput] = useState('');
    const [cvcInput, setCvcInput] = useState('');
    const [cardName, setCardName] = useState('');


    /*handle onNumberChange*/
    function onnumberChange(e) {
        let inputValue = e.target.value.replace(/\s/g, '');
        if (inputValue.length > 16) {
            inputValue = inputValue.substring(0, 16);
        }
        setCardInputNumber(inputValue);
        const formattedNumber = inputValue.replace(/(.{4})/g, '$1 ').trim();
        setCardImgNumber(formattedNumber.padEnd(19, ' '));
    }


    const handleFocus = (e) => {
        e.target.parentElement.classList.remove('error');
        e.target.parentElement.classList.remove('error-group');
        e.target.parentElement.classList.remove('error-cvc');
        e.target.style.borderColor = '#ccc';
    }

    const handleNameInputBlur = (e) => {
        Validate(e.target);
    };

    /*
    TODO: Fix handleClick
     */
    /*handle onMonthChange*/
    const handleClick = (e) => {

        e.preventDefault();
        // check if all inputs are filled
        let inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            Validate(input.target);
        })
    }

    return (
        <div className={'grid-container'}>
            <div className="form__images">
                <div className="form__bg"></div>
                <div className="form__card-back" id={'card-1'}>
                    <div className="form__card-back__cvc" id={'card-1-cvc'}>
                        {!cvcInput ? '000' : cvcInput}
                    </div>
                </div>
                <div className="form__card-front" id={'card-2'}>
                    <div className="form__card-front__logo"></div>
                    <div className="form__card-front__number" id={'card-1-number'}>
                        {
                            isWhiteSpaces(cardImgNumber) ? '0000 0000 0000 0000' : cardImgNumber
                        }
                    </div>
                    <div className="form__card-front__name" id={'card-1-name'}>
                        {!cardName ? 'Jane Appleseed' : cardName}
                    </div>
                    <div className="form__card-front__date" id={'card-1-date'}>
                        {!monthInput ? '00' : monthInput}
                        /
                        {!yearInput ? '00' : yearInput}
                    </div>
                </div>
            </div>
            <form className={"form-container"}>
                <label className={`form__name`} id="name-label">
                    <input type="text"
                           id={'name-input'}
                           placeholder={'e.g. Jane Appleseed'}
                           pattern={'[a-zA-Z ]+'}
                           onChange={e => setCardName(e.target.value)}
                           onFocus={event => handleFocus(event)}
                           onBlur={event=>handleNameInputBlur(event)}
                           //edit parent attribute error-after


                    />
                </label>
                <label className="form__number" id={'number-label'}>
                    <input type="text" id={'number-input'} pattern={'[0-9]+'}
                           value={cardInputNumber.replace(/(.{4})/g, '$1 ').trim()}
                           onChange={onnumberChange}
                           placeholder={'e.g. 0000 0000 0000 0000'}
                           onFocus={event => handleFocus(event)}
                           onBlur={event=>handleNameInputBlur(event)}
                    />
                </label>
                <div className="form__group">
                    <label className="form__date" id={'date'}>
                        <input
                            type="text"
                            className="form__month"
                            id={'month'}
                            maxLength={2}
                            pattern={'[0-9]+'}
                            placeholder={'MM'}
                            value={monthInput}
                            onChange={e => setMonthInput(e.target.value)}
                            onFocus={event => handleFocus(event)}
                            onBlur={event=>handleNameInputBlur(event)}


                        />

                        <input
                            type="text"
                            className="form__year"
                            id={'year'}
                            maxLength={2}
                            pattern={'[0-9]+'}
                            placeholder={'YY'}
                            value={yearInput}
                            onChange={e => setYearInput(e.target.value)}
                            onFocus={event => handleFocus(event)}
                            onBlur={event=>handleNameInputBlur(event)}
                        />
                    </label>
                    <label className="form__cvc" id={'cvc'}>
                        <input type="text"
                               maxLength={3}
                               pattern={'[0-9]+'}
                               placeholder={'e.g.123'}
                               onChange={event => setCvcInput(event.target.value)}
                               onFocus={event => handleFocus(event)}
                               onBlur={event=>handleNameInputBlur(event)}
                        />
                    </label>
                </div>
                <button className="button" onClick={e => handleClick(e)}>Confirm</button>
            </form>
        </div>
    );
};

export default CardDetailForm;