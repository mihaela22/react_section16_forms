import useInput from "../hooks/use-myinput";

const isNotEmpty = (value) => value.trim() !== "";
const isEmail = (value) =>
  value
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

const BasicForm = (props) => {
  const {
    value: firstNameValue,
    isValid: firstNameIsValid,
    hasError: firstNameHasErr,
    blurHandler: firstNameBlurHandler,
    changeHandler: firstNameChangeHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: lastNameValue,
    isValid: lastNameIsValid,
    hasError: lastNameHasErr,
    blurHandler: lastNameBlurHandler,
    changeHandler: lastNameChangeHandler,
    reset: resetLastName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailHasErr,
    blurHandler: emailBlurHandler,
    changeHandler: emailChangeHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (e) => {
    e.preventDefault();
    if (!formIsValid) {
      return;
    }

    console.log("Submitted!");
    console.log(firstNameValue);
    console.log(lastNameValue);
    console.log(emailValue);

    resetName();
    resetLastName();
    resetEmail();
  };

  const classFirstName = !firstNameHasErr
    ? "form-control"
    : "form-control invalid";

  const classLastName = !lastNameHasErr
    ? "form-control"
    : "form-control invalid";

  const classEmail = !emailHasErr ? "form-control" : "form-control invalid";

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={classFirstName}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={firstNameValue}
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
          />
          {firstNameHasErr && (
            <p className="error-text">Please enter firstname.</p>
          )}
        </div>
        <div className={classLastName}>
          <label htmlFor="lastname">Last Name</label>
          <input
            type="text"
            id="lastname"
            value={lastNameValue}
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
          />
          {lastNameHasErr && (
            <p className="error-text">Please enter lastname.</p>
          )}
        </div>
      </div>
      <div className={classEmail}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="email"
          id="emal"
          value={emailValue}
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
        />
        {emailHasErr && <p className="error-text">Please enter valid email.</p>}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
