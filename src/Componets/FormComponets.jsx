import React from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
export default function FormComponets(props) {
  const [isFormShown, setIsFormShown] = React.useState(false);
  const [isListShown, setListShown] = React.useState(false);
  if (isFormShown && isListShown) {
    setIsFormShown((prevState) => !prevState);
    setListShown((prevState) => !prevState);
  }
  function AddEntry() {
    setIsFormShown((prevState) => !prevState);
    setListShown((prevState) => !prevState);
  }
  function renderList() {
    setListShown((prevState) => !prevState);
  }
  return (
    <>
      <div className="form">
        <div className="formHeading" onClick={renderList}>
          <h1>{props.name}</h1>
          {isListShown ? (
            <IoMdArrowDropup className="toggle-icon" />
          ) : (
            <IoMdArrowDropdown className="toggle-icon" />
          )}
        </div>
      </div>
      {isListShown && (
        <>
          {props.listItems}
          <div className="button-container">
            <button className="add-btn" onClick={AddEntry}>
              {props.name} +
            </button>
          </div>
        </>
      )}

      {isFormShown && (
        <div className="form">
          <props.form handleFormSubmition={props.handleFormSubmition} />
          <button className="close-btn" onClick={AddEntry}>
            Close
          </button>
        </div>
      )}
    </>
  );
}
