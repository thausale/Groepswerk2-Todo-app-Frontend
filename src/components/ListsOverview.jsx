import React, { useState, useEffect } from "react";
import axios from "axios";
import Add from "./Add";
import config from "../config";
import "bulma/css/bulma.css";

const ListsOverview = (props) => {
  const [allLists, setAllLists] = useState([]);
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
    } = await axios(baseUrl + "?resource=lists");
    // } = await axios(baseUrl + "/lists");
    return data;
  };

  useEffect(() => {
    const fetchLists = async () => {
      const allLists = await getLists();
      setAllLists(allLists);

      // get all lists with imp = 1;
      const importantLists = allLists.filter((list) => list.important === "1");
      setImpLists(importantLists);

      const listsType1 = allLists.filter((list) => list.type_name === "lists");
      const shoppingType2 = allLists.filter(
        (list) => list.type_name === "shopping"
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

      const listCats = Object.keys(listCategoriesOccurence);
      setListCats(listCats);
      const shopCats = Object.keys(shoppingCategoriesOccurence);
      setShopCats(shopCats);
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
                  <li key={list.id}>
                    <a>
                      <span className="icon-text">
                        <span className="icon has-text-warning">
                          <i className="fa-regular fa-star"></i>
                        </span>
                        <span>list.name</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </>
          )}

          {lists && (
            <>
              <p className="menu-label">Lists</p>
              <ul className="menu-list">
                {lists &&
                  lists.map((list) => (
                    <li key={list.id}>
                      <a>
                        <span className="icon-text">
                          <span className="icon">
                            <i className="fa-solid fa-list-ul"></i>
                          </span>
                          <span>{list.name}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                {/* need an endpoint with categories */}
                {listCats &&
                  listCats.map((cat) => (
                    <li key={cat}>
                      <a>
                        <span className="icon-text">
                          <span className="icon">
                            <i className="fa-solid fa-bars-staggered"></i>
                          </span>
                          <span>{cat}</span>
                        </span>
                      </a>
                      <ul>
                        {listsWCat
                          .filter((list) => list.category_name == cat)
                          .map((list) => (
                            <li key={list.id}>
                              <a>
                                <span className="icon-text">
                                  <span className="icon">
                                    <i className="fa-solid fa-list-ul"></i>
                                  </span>
                                  <span>{list.name}</span>
                                </span>
                              </a>
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
              </ul>
            </>
          )}

          {shopping && (
            <>
              <p className="menu-label">Shopping</p>
              <ul className="menu-list">
                {shopping &&
                  shopping.map((list) => (
                    <li key={list.id}>
                      <a>
                        <span className="icon-text">
                          <span className="icon">
                            <i className="fa-solid fa-list-ul"></i>
                          </span>
                          <span>{list.name}</span>
                        </span>
                      </a>
                    </li>
                  ))}
                {/* need an endpoint with categories */}
                {shopCats &&
                  shopCats.map((cat) => (
                    <li key={cat}>
                      <a>
                        <span className="icon-text">
                          <span className="icon">
                            <i className="fa-solid fa-bars-staggered"></i>
                          </span>
                          <span>{cat}</span>
                        </span>
                      </a>
                      <ul>
                        {shoppingWCat
                          .filter((list) => list.category_name == cat)
                          .map((list) => (
                            <li key={list.id}>
                              <a>
                                <span className="icon-text">
                                  <span className="icon">
                                    <i className="fa-solid fa-list-ul"></i>
                                  </span>
                                  <span>{list.name}</span>
                                </span>
                              </a>
                            </li>
                          ))}
                      </ul>
                    </li>
                  ))}
              </ul>
            </>
          )}
        </aside>
      </div>
      <Add placeholder="Add list"></Add>
    </section>
  );

  // return (
  //   <div className="container">
  //     <div className="columns is-multiline is-variable is-1">
  //       {categories.map((categoryName) => (
  //         <div key={categoryName} className="column is-full">
  //           <div className="box">
  //             {categoryName === "null" ? (
  //               <h4 className="title is-4">General</h4>
  //             ) : (
  //               ""
  //             )}

  //             {categoryName !== "null" && (
  //               <h4 className="title is-4">{categoryName}</h4>
  //             )}
  //             <ul>
  //               {groupedLists[categoryName].map((list) => (
  //                 <li key={list.id}>
  //                   <span className="tag is-light">{list.name}</span>
  //                 </li>
  //               ))}
  //             </ul>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  // );
};

export default ListsOverview;
