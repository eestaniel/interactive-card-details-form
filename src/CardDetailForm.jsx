// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import Validate from "./utils/Validate.jsx";
import Form from './components/Form.jsx';
import CardImages from './components/CardImages.jsx';
import Completed from "./components/Completed.jsx";


const CardDetailForm = () => {
    const [cardData, setCardData] = useState({
        cardImgNumber: '',
        monthInput: '',
        yearInput: '',
        cvcInput: '',
        cardName: '',
    });

    const [isValid, setIsValid] = useState(false);


    const handleFocus = (e) => {
        if (e.target.id === 'month-input' || e.target.id === 'year-input') {
            console.log('hello')
            e.target.parentElement.parentElement.classList.remove('error-group');
        } else if (e.target.id === 'cvc') {
            e.target.parentElement.classList.remove('error-cvc');
        } else {
            e.target.parentElement.classList.remove('error');
        }
        e.target.style.borderColor = 'hsl(263deg 3% 81%)';
    }

    const handleBlur = (e) => {
        Validate(e.target);

    };

    function handleFormSubmit(e) {
        e.preventDefault();
        let hasError = 0;
        const items = document.querySelectorAll('input')
        items.forEach(item => {
            let validateError = Validate(item);
            if (validateError === true) {
                hasError += 1
            }

        })
        if (hasError === 0) {
            setIsValid(true);
        }
    }

    return (
        <div className={'grid-container'}>
            <CardImages
                cvcInput={cardData.cvcInput}
                cardImgNumber={cardData.cardImgNumber}
                cardName={cardData.cardName}
                monthInput={cardData.monthInput}
                yearInput={cardData.yearInput}
            />

            {!isValid ?
                <Form
                    handleFormSubmit={handleFormSubmit}
                    handleFocus={handleFocus}
                    handleBlur={handleBlur}
                    cardData={cardData}
                    setCardData={setCardData}
                />
                :
                <Completed/>


            }
            <div className="attribution">
                Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend
                Mentor</a>.
                Coded by <a href="https://github.com/eestaniel" target="_blank" rel="noreferrer">Edwin Estaniel</a>.
            </div>
        </div>
    );
};

export default CardDetailForm;
