import create from 'zustand';

const data = {
  "pickPoints": [
    {
      "id": 1,
      "address": "ул. Авиационная, 14",
      "budgets": [
        { id: 11, name: "Самовывоз" },
        { id: 12, name: "Доставка" },
        { id: 13, name: "Примерочная" }
      ],
      "latitude": 56.80245,
      "longitude": 60.604913
    },
    {
      "id": 2,
      "address": "ул. Белореченская, 54",
      "budgets": [
        { id: 21, name: "Самовывоз" }
      ],
      "latitude": 54.708415,
      "longitude": 55.975993
    },
    {
      "id": 3,
      "address": "ул. Первомайская, 8",
      "budgets": [
        { id: 31, name: "Доставка" },
        { id: 32, name: "Примерочная" },
        { id: 33, name: "Шоурум" }
      ],
      "latitude": 53.364343,
      "longitude": 55.925364
    },
    {
      "id": 4,
      "address": "пер. Встречный, 9",
      "budgets": [
        { id: 41, name: "Примерочная" },
        { id: 42, name: "Шоурум" }
      ],
      "latitude": 56.821932,
      "longitude": 60.563563
    }
  ]
};

const useStore = create((set, get) => ({
  adresses: data.pickPoints
}));

export default useStore;
