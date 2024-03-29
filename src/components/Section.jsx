import React from "react";
import Add from "./Add";
import Nav from "./Nav";

const Section = ({
  children,
  inputError,
  postValue,
  setPostValue,
  placeholder,
  baseUrl,
  sectionName,
  catPostValue,
  setCatPostValue,
  catBtn,
  ...props
}) => {
  return (
    <section className="hero is-light is-fullheight">
      {props && <Nav {...props}></Nav>}
      <div>
        <h1 className="title my-5 mx-4">{sectionName}</h1>
        <aside className="menu is-large mx-4">{children}</aside>
      </div>

      {inputError > 0 && <p>{inputError}</p>}
      <Add
        postValue={postValue}
        setPostValue={setPostValue}
        placeholder={placeholder}
        baseUrl={baseUrl}
        catBtn={catBtn}
        setCatPostValue={setCatPostValue}
      ></Add>
    </section>
  );
};

export default Section;
