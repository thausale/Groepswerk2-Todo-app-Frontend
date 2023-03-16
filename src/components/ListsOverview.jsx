import React, { useState, useEffect } from "react";
import axios from "axios";
import config from "../config";
import "bulma/css/bulma.css";

const ListsOverview = (props) => {
  // const [lists, setListsData] = useState([]);
  const [groupedLists, setGroupedLists] = useState({});
  const baseUrl = config.apiBaseUrl;

  const getLists = async () => {
    const {
      data: { data },
    } = await axios(baseUrl + "/lists");
    return data;
  };

  useEffect(() => {
    const fetchLists = async () => {
      const lists = await getLists();
      // setListsData(lists);

      const groupedLists = lists.reduce((acc, list) => {
        const category = list.category_name;
        if (!acc[category]) {
          acc[category] = [];
        }
        acc[category].push(list);
        return acc;
      }, {});

      setGroupedLists(groupedLists);
    };
    fetchLists();
  }, []);

  const categories = Object.keys(groupedLists);

  return (
    <div className="container">
      <div className="columns is-multiline is-variable is-1">
        {categories.map((categoryName) => (
          <div key={categoryName} className="column is-full">
            <div className="box">
              {categoryName === "null" ? (
                <h4 className="title is-4">General</h4>
              ) : (
                ""
              )}

              {categoryName !== "null" && (
                <h4 className="title is-4">{categoryName}</h4>
              )}
              <ul>
                {groupedLists[categoryName].map((list) => (
                  <li key={list.id}>
                    <span className="tag is-light">{list.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListsOverview;
