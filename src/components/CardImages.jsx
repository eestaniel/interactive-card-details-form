import React from 'react';

const CardImages = ({cvcInput, cardImgNumber, cardName, monthInput, yearInput}) => (
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
                        !cardImgNumber ? '0000 0000 0000 0000' : cardImgNumber.match(/.{1,4}/g).join(' ')
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
    </div>
);

export default CardImages;
