import { useState } from "react";

const useMyInput = (validateFunc) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const valueIsValid = validateFunc(value);

  const changeHandler = (event) => {
    setValue(event.target.value);
  };
  const blurHandler = () => {
    setTouched(true);
  };

  const reset = () => {
    setValue("");
    setTouched(false);
  };

  let hasError = !valueIsValid && touched;

  return {
    value,
    isValid: valueIsValid,
    hasError,
    blurHandler,
    changeHandler,
    reset,
  };
};

export default useMyInput;
