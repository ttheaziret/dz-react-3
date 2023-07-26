import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNumber, clearList } from "../../redux/actions";

const NumberList = () => {
    const [number, setNumber] = useState("");
    const dispatch = useDispatch();
    const numbers = useSelector((state) => state);
  
    const handleAddNumber = () => {
      dispatch(addNumber(Number(number)));
      setNumber("");
    };
  
    const handleClearList = () => {
      dispatch(clearList());
    };
  
    return (
      <div>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button onClick={handleAddNumber}>Add</button>
        <button onClick={handleClearList}>Clear</button>
        <ul>
          {Array.isArray(numbers) &&
            numbers.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
        </ul>
      </div>
    );
  };

  export default NumberList
  
