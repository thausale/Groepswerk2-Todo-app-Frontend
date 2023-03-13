import React from "react";

const ListsOverview = (props) => {
  const { data } = props;
  const { lists, category } = data;

  //THE FOLLOWING STEPS ARE PROBABLY NOT NEEDED IF WE JUST DO AN INNER JOIN WITH THE SQL
  //CREATES AN OBJECT THAT PAIRS THE ID TO THE NAME OF THE CATEGORY
  const categoryMap = {};
  if (Array.isArray(category)) {
    category.forEach((cat) => {
      categoryMap[cat.id] = cat.categoryName;
    });
  } else {
    categoryMap[category?.id] = category?.categoryName;
  }

  //REPLACES THE CATEGORY ID'S WITH THE CATEGORY NAME
  const updatedLists = lists.map((list) => {
    if (list.category) {
      return { ...list, category: categoryMap[list.category] };
    } else {
      return { ...list };
    }
  });

  //GROUPS LISTS BY CATEGORY
  const groupedListsByCategory = updatedLists.reduce((result, list) => {
    if (!result[list.category]) {
      result[list.category] = [];
    }
    result[list.category].push(list);
    return result;
  }, {});

  //GETS ALL CATEGORYNAMES
  const categoryNames = Object.keys(groupedListsByCategory);

  return (
    <div>
      {categoryNames.map((categoryName) => (
        <div key={categoryName}>
          {categoryName !== "undefined" && (
            <h4 className="category">{categoryName}</h4>
          )}
          <ul>
            {groupedListsByCategory[categoryName].map((list) => (
              <li key={list.id}>{list.name}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default ListsOverview;
