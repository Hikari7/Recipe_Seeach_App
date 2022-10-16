import React, { useState, useEffect, useRef } from "react";
import ToBuyListItem from "./ToBuyListItem";

const ToBuyList = ({ text }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    if (!!text) {
      setLists((prevState) => [
        ...prevState,
        { id: Math.random(), completed: false, text, isEditing: false },
      ]);
    }
  }, [text]);

  const handleDelete = (key) => {
    const removeItem = lists.filter((list) => {
      return list.id !== key;
    });
    setLists(removeItem);
  };

  const handleCompleted = (key) => {
    const completedItem = lists.map((list) => {
      if (key === list.id) {
        return {
          ...list,
          completed: !list.completed,
        };
      }
      return list;
    });
    setLists(completedItem);
  };

  const handleEdit = ({ text, id }) => {
    const editItem = lists.map((list) => {
      if (id === list.id) {
        list.text = text;
      }
      return list;
    });
    setLists(editItem);
  };

  return (
    <div>
      <ul className="mt-5">
        {lists.map((list) => (
          <ToBuyListItem
            key={list.id}
            list={list.id}
            text={list.text}
            completed={list.completed}
            handleCompleted={handleCompleted}
            handleDelete={handleDelete}
            handleEdit={handleEdit}
          />
        ))}
      </ul>
    </div>
  );
};

export default ToBuyList;
