import React from 'react';
import './OrderForm.css';
import useInputValidation from '../../hooks/useInputValidation';
import axios from 'axios';

export default function OrderForm(props) {
    const {
        value: enteredName,
        enteredValueIsValid: nameIsValid,
        inputHasError: nameHasError,
        handleInputBlur: handleNameInputBlur,
        handleInputChange: handleNameInputChange,
        reset: resetNameInput
    } = useInputValidation(value => value.trim() !== '');
    const {
        value: enteredStreet,
        enteredValueIsValid: streetIsValid,
        inputHasError: streetHasError,
        handleInputBlur: handleStreetInputBlur,
        handleInputChange: handleStreetInputChange,
        reset: resetStreetInput
    } = useInputValidation(value => value.trim() !== '');
    const {
        value: enteredPostal,
        enteredValueIsValid: postalIsValid,
        inputHasError: postalHasError,
        handleInputBlur: handlePostalInputBlur,
        handleInputChange: handlePostalInputChange,
        reset: resetPostalInput
    } = useInputValidation(value => value.trim() !== '');
    const {
        value: enteredCity,
        enteredValueIsValid: cityIsValid,
        inputHasError: cityHasError,
        handleInputBlur: handleCityInputBlur,
        handleInputChange: handleCityInputChange,
        reset: resetCityInput
    } = useInputValidation(value => value.trim() !== '');

    let formIsValid = false;

    if (nameIsValid && streetIsValid && postalIsValid && cityIsValid) {
        formIsValid = true;
    };

    function handleCancel() {
        props.setOrdering(false);
        props.clearModal();
    };

    function handleFormSubmission (e) {
        e.preventDefault();
        const orderObject = {
            orderedMeal: {
                ...props.selectedItems,
            },
            user: {
                name: enteredName,
                street: enteredStreet,
                postalCode: enteredPostal,
                city: enteredCity
            }
        }
        axios({
            method: 'post',
            url: 'https://react-meals-c2f5b-default-rtdb.firebaseio.com/orders.json',
            data: JSON.stringify(orderObject),
            headers: {'Content-type' : 'application/json'}
          });
        props.setOrdering(false);
        props.clearModal();
        props.setSelectedItems([]);
        props.setTotal(0);
    };



    const nameInputClass = nameHasError ? 'form-control invalid' : 'form-control';
    const streetInputClass = streetHasError ? 'form-control invalid' : 'form-control';
    const postalInputClass = postalHasError ? 'form-control invalid' : 'form-control';
    const cityInputClass = cityHasError ? 'form-control invalid' : 'form-control';


    return (
        <div className='OrderForm'>
            <form onSubmit={handleFormSubmission}>
                <div>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Your Name</label>
                        <input onChange={handleNameInputChange} onBlur={handleNameInputBlur} type="text" className={nameInputClass} id="name" aria-describedby="name" value={enteredName} autoComplete='off'/>
                        {nameHasError && <p className='mt-1 fw-bold'>Name is invalid</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="street" className="form-label">Street</label>
                        <input onChange={handleStreetInputChange} onBlur={handleStreetInputBlur} type="text" className={streetInputClass} id="street" aria-describedby="street" value={enteredStreet} autoComplete='off'/>
                        {streetHasError && <p className='mt-1 fw-bold'>Street is invalid</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="postalCode" className="form-label">Postal Code</label>
                        <input onChange={handlePostalInputChange} onBlur={handlePostalInputBlur} type="text" className={postalInputClass} id="postalCode" aria-describedby="postalCode" value={enteredPostal} autoComplete='off'/>
                        {postalHasError && <p className='mt-1 fw-bold'>Postal code is invalid</p>}
                    </div>
                    <div className="mb-3">
                        <label htmlFor="city" className="form-label">City</label>
                        <input onChange={handleCityInputChange} onBlur={handleCityInputBlur} type="text" className={cityInputClass} id="city" aria-describedby="city" value={enteredCity}/>
                        {cityHasError && <p className='mt-1 fw-bold'>City is invalid</p>}
                    </div>
                </div>
                <div className='OrderForm-buttonGroup'>
                    <button onClick={handleCancel}type="button">cancel</button>
                    <button disabled={!formIsValid} type="submit">Confirm</button>
                </div>
            </form>
        </div>
    );
};