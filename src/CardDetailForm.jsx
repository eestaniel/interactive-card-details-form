// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import Validate from "./utils/Validate.jsx";
import Form from './components/Form.jsx';
import CardImages from './components/CardImages.jsx';


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
        e.target.parentElement.classList.remove('error');
        e.target.parentElement.classList.remove('error-group');
        e.target.parentElement.classList.remove('error-cvc');
        e.target.style.borderColor = '#ccc';
    }

    const handleBlur = (e) => {
        Validate(e.target);
    };

    function handleFormSubmit (e) {
        e.preventDefault();
        let hasError = false;
        const items = document.querySelectorAll('input')
        items.forEach(item => {
            if (Validate(item) === true) {
                hasError = true;
            } else {
                hasError = false;
            }
        })
        if (!hasError) {
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

            { !isValid ?
                <Form
                handleFormSubmit={handleFormSubmit}
                handleFocus={handleFocus}
                handleBlur={handleBlur}
                cardData={cardData}
                setCardData={setCardData}
                />
                :
                <div>Valid</div>



            }


        </div>
    );
};

export default CardDetailForm;
