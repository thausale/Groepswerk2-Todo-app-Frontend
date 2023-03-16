import React from "react";
import { useParams } from "react-router-dom";

const List = () => {
  const { id } = useParams();
  const [listName, setListName] = useState("");
  const [listItems, setListItems] = useState([]);
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
