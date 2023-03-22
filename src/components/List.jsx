import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Section from "./Section";
import MenuSection from "./MenuSection";
import axios from "axios";
import config from "../config";
import ListSection from "./ListSection";

const List = () => {
  const [list, setList] = useState({});
  const [listItems, setListItems] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [uncheckedItems, setUncheckedItems] = useState([]);
  const [handledCheck, setHandledCheck] = useState(false);
  const { id } = useParams();
  const baseUrl = config.apiBaseUrl;
  const [inputError, setInputError] = useState();

  const [postValue, setPostValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const {
          data: { data },
        } = await axios(`${baseUrl}/list/${id}`);
        setList(data);
        setListItems(data.listItems);
        // console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [handledCheck]);

  useEffect(() => {
    setCheckedItems(listItems.filter((item) => item.checked == "1"));
    setUncheckedItems(listItems.filter((item) => item.checked == "0"));
  }, [listItems]);

  return (
    <>
      {/* <Link to={`/settings/list/${id}`}>settings</Link> */}
      <Section
        sectionName={list.name}
        placeholder="Add To Do"
        baseUrl={baseUrl}
        postValue={postValue}
        inputError={inputError}
      >
        <ListSection
          setHandledCheck={setHandledCheck}
          handledCheck={handledCheck}
          labelName="unchecked"
          lists={uncheckedItems}
        ></ListSection>
        <ListSection
          setHandledCheck={setHandledCheck}
          handledCheck={handledCheck}
          labelName="checked"
          lists={checkedItems}
        ></ListSection>
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
