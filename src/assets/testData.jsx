export const testData = {
  type: {
    id: 1,
    typeName: "Shopping",
  },

  category: {
    id: 1,
    categoryName: "Full Stack Developer",
  },

  lists: [
    {
      id: 1,
      type: 1,
      name: "listName 1",
      headColor: "red",
      listItems: [
        { id: 1, name: "gras afrijden", completed: false },
        { id: 2, name: "terras kuisen", completed: true },
      ],
    },
    {
      id: 2,
      type: 1,
      name: "listName 2",
      headColor: "green",
      listItems: [
        { id: 3, name: "Banen kopen", completed: false },
        { id: 4, name: "appels kopen", completed: true },
      ],
    },
    {
      id: 3,
      type: 1,
      category: 1,
      name: "listName 3",
      headColor: "purple",
      listItems: [
        { id: 5, name: "gras afrijden", completed: false },
        { id: 6, name: "terras kuisen", completed: true },
      ],
    },
    {
      id: 4,
      type: 1,
      category: 1,
      name: "listName 4",
      headColor: "orange",
      listItems: [
        { id: 7, name: "Banen kopen", completed: false },
        { id: 8, name: "appels kopen", completed: true },
      ],
    },
  ],
};
