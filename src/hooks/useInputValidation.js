import React, { useState } from 'react';

export default function useInputValidation(validateInput) {
    const [enteredValue, setEnteredValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const enteredValueIsValid = validateInput(enteredValue);
    const inputHasError = !enteredValueIsValid && isTouched;

    function handleInputChange(e) {
        setEnteredValue(e.target.value);
    };
    function handleInputBlur(e) {
        setIsTouched(true);
    };
    function reset() {
        setEnteredValue('');
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        enteredValueIsValid,
        inputHasError,
        handleInputChange,
        handleInputBlur,
        reset
    };
};
