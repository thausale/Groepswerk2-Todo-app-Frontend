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

const List1 = () => {
  return <h1>List</h1>;
  //   const { id } = useParams();
  //   // console.log(useParams());
  //   // console.log(id);
  //   const [listName, setListName] = useState("");
  //   const [listId, setListId] = useState(id);
  //   const [listItems, setListItems] = useState([]);
  //   const baseUrl = config.apiBaseUrl;
  //   const getAllByListId = async () => {
  //     console.log(id);
  //     const response = await axios(baseUrl + "/list/" + "1");
  //     console.log(response);
  //     return response;
  //   };
  //   //"SELECT list_item.id, list_item.name as list_item_name, checked, list.name AS list_name, list.id as list_id
  //   // FROM list_item
  //   // INNER JOIN list ON list_item.list_id = list.id;
  //   // WHERE list.id = " + id
  //   useEffect(() => {
  //     (async function () {
  //       const data = await getAllByListId();
  //       console.log(data);
  //     })();
  //     setListItems(data);
  //     setListName(data[0].list_name);
  //   }, []);
  //   return (
  //     <>
  //       {data ? (
  //         <>
  //           <h2>{listName}</h2>
  //           <ul>
  //             {listItems.map((item) => (
  //               <li key={item.id}>{item.list_item_name}</li>
  //             ))}
  //           </ul>
  //         </>
  //       ) : (
  //         <h2>Loading...</h2>
  //       )}
  //     </>
  //   );
};

export default List;
