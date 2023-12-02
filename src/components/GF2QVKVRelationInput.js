import { useContext, useState } from "react";
import useEnterBlur from "../hooks/useEnterBlur";
import InputSelect from "../functions/InputSelect";
import GF2Context from "../context/GF2Context";

/* 
This component handles changing the GF2 versions KVValue from GF2Context
*/

const GF2QVKVRelationInput = ({ index, id }) => {
  const { GF2Data, setGF2Data } = useContext(GF2Context);

  const maxInput = 5;
  const minInput = 1;
  /* Blurs the input when user presses enter or done on iphone */
  useEnterBlur();

  /* Only allows numbers and comma */
  const isValidInput = (string) => {
    return /^[\d.,]*$/.test(string);
  };

  /* Sets the start value to the value saved in context, or empty string */
  const [input, setInput] =
    useState(GF2Data[index + 1] && GF2Data[index + 1].QVKVRelation) || "";

  /* handleChange updates the input state, but not the context */
  const handleChange = (e) => {
    /* Guard clause making sure input is a number */
    if (!isValidInput(e.target.value)) {
      return console.log("only numbers are allowed");
    }

    /* Guard clauses for keeping input between the allowed range */
    if (e.target.value < minInput) {
      setInput(minInput);
      return;
    }
    if (e.target.value > maxInput) {
      setInput(maxInput);
      return;
    }

    /* Guard clause making sure if user accidentally leaves input empty, it does not remain so */
    if (e.target.value.length === 0) {
      setInput(0);
      return;
    }

    setInput(e.target.value);
  };

  /* handleBlur updates the input state and the respective context value */
  const handleBlur = (e) => {
    setInput(e.target.value);

    /* Updates context to reflect user input */
    setGF2Data((prevData) => {
      let newData = [...prevData];
      newData[index + 1].QVKVRelation = Number(e.target.value);
      return newData;
    });
  };

  return (
    <>
      <input
        className="max-w-[30px] m-0 p-0 text-center bg-gray-200"
        key={"QVKVInput" + index}
        /* Index starts at 0, but the KVs are labeled 1-5, so its index + 1 to make parent components labels work */
        id={id + (index + 1)}
        type="numeric"
        value={input}
        /* handleBlur updates the input state and the respective context value */
        onBlur={handleBlur}
        /* handleChange updates the input state, but not the context */
        onChange={handleChange}
        /* Selects the input, so typing will replace the value */
        onClick={InputSelect}
      />
    </>
  );
};

export default GF2QVKVRelationInput;
