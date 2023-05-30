// eslint-disable-next-line no-unused-vars
import React from 'react';
import FormInput from './FormInput.jsx';
import PropTypes from 'prop-types';


const Form = ({handleFormSubmit, handleFocus, handleBlur, cardData, setCardData}) => (
    <form className="form-container" onSubmit={handleFormSubmit}>
        <FormInput
            id="name"
            type="text"
            placeholder="e.g. Jane Appleseed"
            pattern="[a-zA-Z ]+"
            maxLength={null}
            value={cardData.cardName}
            onChange={e => setCardData({...cardData, cardName: e.target.value})}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
        <FormInput
            id="number"
            type="text"
            placeholder="e.g. 0000 0000 0000 0000"
            pattern="[0-9]+"
            maxLength={16}
            value={cardData.cardImgNumber}
            onChange={e => setCardData({...cardData, cardImgNumber: e.target.value})}
            onFocus={handleFocus}
            onBlur={handleBlur}
        />
        <div className="form__group">
            <FormInput
                id="month"
                type="text"
                placeholder="MM"
                pattern="[0-9]+"
                maxLength={2}
                value={cardData.monthInput}
                onChange={e => setCardData({...cardData, monthInput: e.target.value})}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <FormInput
                id="year"
                type="text"
                placeholder="YY"
                pattern="[0-9]+"
                maxLength={2}
                value={cardData.yearInput}
                onChange={e => setCardData({...cardData, yearInput: e.target.value})}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
            <FormInput
                id="cvc"
                type="text"
                placeholder="e.g.123"
                pattern="[0-9]+"
                maxLength={3}
                value={cardData.cvcInput}
                onChange={e => setCardData({...cardData, cvcInput: e.target.value})}
                onFocus={handleFocus}
                onBlur={handleBlur}
            />
        </div>


        <button type="submit" className="button">Confirm</button>
    </form>
);

Form.propTypes = {
    handleFormSubmit: PropTypes.func.isRequired,
    handleFocus: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    cardData: PropTypes.object.isRequired,
    setCardData: PropTypes.func.isRequired,
}

export default Form;
