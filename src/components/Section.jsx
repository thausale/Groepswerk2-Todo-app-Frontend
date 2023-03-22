import React from "react";
import Add from "./Add";

const Section = ({
  children,
  inputError,
  postValue,
  setPostValue,
  placeholder,
  baseUrl,
  sectionName,
}) => {
  return (
    <section className="hero is-light is-fullheight">
      <div>
        <h1 className="title my-5 mx-4">{sectionName}</h1>
        <aside className="menu is-large mx-4">{children}</aside>
      </div>

      {inputError && <p>{inputError}</p>}
      <Add
        postValue={postValue}
        setPostValue={setPostValue}
        placeholder={placeholder}
        baseUrl={baseUrl}
      ></Add>
    </section>
  );
};

export default Section;
