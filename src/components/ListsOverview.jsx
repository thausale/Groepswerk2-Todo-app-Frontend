import React, { useState, useEffect } from "react";
import axios from "axios";
import Add from "./Add";
import config from "../config";
import ListName from "./ListName";
import Category from "./Category";
import "bulma/css/bulma.css";

const ListsOverview = (props) => {
  const [allLists, setAllLists] = useState([]);
  const [allCats, setAllCats] = useState([]);
  const [impLists, setImpLists] = useState([]);
  const [lists, setLists] = useState([]);
  const [shopping, setShopping] = useState([]);
  const [listsWCat, setListsWCat] = useState([]);
  const [shoppingWCat, setShoppingWCat] = useState([]);
  const [listCats, setListCats] = useState([]);
  const [shopCats, setShopCats] = useState([]);
  const baseUrl = config.apiBaseUrl;

  const getLists = async () => {
    const {
      data: { data },
    } = await axios(baseUrl + "/lists");
    return data;
  };
  const getCats = async () => {
    const {
      data: { data },
    } = await axios(baseUrl + "/categories");
    return data;
  };

  useEffect(() => {
    const fetchLists = async () => {
      const allLists = await getLists();
      setAllLists(allLists);
      const allCats = await getCats();
      setAllCats(allLists);

      // get all lists with imp = 1;
      const importantLists = allLists.filter((list) => list.important === "1");
      setImpLists(importantLists);

      const listsType1 = allLists.filter(
        (list) => list.type_name === "lists" && list.important === "0"
      );
      const shoppingType2 = allLists.filter(
        (list) => list.type_name === "shopping" && list.important === "0"
      );

      const listsWoCat = listsType1.filter(
        (list) => list.category_name === null
      );
      setLists(listsWoCat);
      const shoppingWoCat = shoppingType2.filter(
        (list) => list.category_name === null
      );
      setShopping(shoppingWoCat);

      const listsWCat = listsType1.filter(
        (list) => list.category_name !== null
      );
      setListsWCat(listsWCat);
      const shoppingWCat = shoppingType2.filter(
        (list) => list.category_name !== null
      );
      setShoppingWCat(shoppingWCat);

      const listCategoriesOccurence = listsType1.reduce((listObj, el) => {
        if (el.category_name !== null) {
          listObj[el.category_name] = listObj[el.category_name] + 1 || 1;
        }
        return listObj;
      }, {});
      const shoppingCategoriesOccurence = shoppingType2.reduce(
        (listObj, el) => {
          if (el.category_name !== null) {
            listObj[el.category_name] = listObj[el.category_name] + 1 || 1;
          }
          return listObj;
        },
        {}
      );

      const listCats = allCats.filter((cat) =>
        Object.keys(listCategoriesOccurence).includes(cat.name)
      );
      setListCats(listCats);
      // console.log(listCats);
      const shopCats = allCats.filter((cat) =>
        Object.keys(shoppingCategoriesOccurence).includes(cat.name)
      );
      setShopCats(shopCats);
      // console.log(shopCats);
    };
    fetchLists();
  }, []);

  return (
    <section className="hero is-light is-fullheight">
      <div>
        <h1 className="title my-5 mx-4">All my lists</h1>
        <aside className="menu is-large mx-4">
          {impLists && (
            <>
              <p className="menu-label">Important</p>
              <ul className="menu-list">
                {impLists.map((list) => (
                  <ListName key={list.id} id={list.id} name={list.name} />
                ))}
              </ul>
            </>
          )}

          {lists && (
            <>
              <p className="menu-label">Lists</p>
              <ul className="menu-list">
                {lists.map((list) => (
                  <ListName key={list.id} id={list.id} name={list.name} />
                ))}

                <Category cats={listCats} listsWCat={listsWCat}></Category>
              </ul>
            </>
          )}
        </aside>
      </div>
      <Add placeholder="Add list"></Add>
    </section>
  );
};

export default ListsOverview;
