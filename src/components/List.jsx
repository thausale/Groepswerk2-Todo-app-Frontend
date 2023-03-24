import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Section from "./Section";
import MenuSection from "./MenuSection";
import axios from "axios";
import config from "../config";
import ListSection from "./ListSection";

const List = () => {
  const [list, setList] = useState({ test: "hello" });
  const [listItems, setListItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [uncheckedItems, setUncheckedItems] = useState([]);
  const [handledCheck, setHandledCheck] = useState(false);
  const { id } = useParams();
  const baseUrl = config.apiBaseUrl;
  const [inputError, setInputError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const [postValue, setPostValue] = useState("");

  const fetchData = async () => {
    try {
      const {
        data: { data },
      } = await axios(`${baseUrl}/list/${id}`);
      setList(data);
      setListItems(data.listItems);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const addTodo = async () => {
    setInputError(false);
    if (postValue.length < 1) {
      setInputError("list item can't be empty");
      return;
    }

    const formData = new FormData();
    formData.append("name", postValue);
    setPostValue("");
    formData.append("list_id", id);
    await axios.post(baseUrl + "/todo", formData);
  };

  useEffect(() => {
    fetchData();
  }, [handledCheck]);

  useEffect(() => {
    (async () => {
      await addTodo();
      await fetchData();
    })();
  }, [postValue]);

  useEffect(() => {
    setCheckedItems(listItems.filter((item) => item.checked == "1"));
    setUncheckedItems(listItems.filter((item) => item.checked == "0"));
  }, [listItems]);

  return (
    <>
      <Section
        sectionName={list.name}
        placeholder="Add To Do"
        baseUrl={baseUrl}
        postValue={postValue}
        setPostValue={setPostValue}
        inputError={inputError}
        back
        settings
        list={list}
      >
        {isLoading ? (
          <p>Loading ...</p>
        ) : (
          <>
            {listItems.length > 0 ? (
              <>
                <ListSection
                  setHandledCheck={setHandledCheck}
                  handledCheck={handledCheck}
                  labelName="unchecked"
                  lists={uncheckedItems}
                />
                <ListSection
                  setHandledCheck={setHandledCheck}
                  handledCheck={handledCheck}
                  labelName="checked"
                  lists={checkedItems}
                />
              </>
            ) : (
              <img src="/noLi.jpg" alt="No List items" />
            )}
          </>
        )}
      </Section>
    </>
  );
};

export default List;
