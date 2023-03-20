import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import config from "../config";

const List = () => {
  const { id } = useParams();
  const [listName, setListName] = useState("");
  const [listItems, setListItems] = useState([]);
  const baseUrl = config.apiBaseUrl;

  const getAllByListId = async (id) => {
    const { data } = await axios(baseUrl + "/list/" + id);
    return data;
  };

  //"SELECT list_item.id, list_item.name as list_item_name, checked, list.name AS list_name, list.id as list_id
  // FROM list_item
  // INNER JOIN list ON list_item.list_id = list.id;
  // WHERE list.id = " + id

  useEffect(() => {
    (async function () {
      const data = await getAllByListId(id);
      setListItems(data);
      setListName(data[0].list_name);
    })();
  }, []);

  return (
    <>
      {data ? (
        <>
          <h2>{listName}</h2>
          <ul>
            {listItems.map((item) => (
              <li key={item.id}>{item.list_item_name}</li>
            ))}
          </ul>
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};

export default List;
