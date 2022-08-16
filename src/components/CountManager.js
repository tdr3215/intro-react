import { useState } from "react";
import Button from "./Button";
import CharacterCounter from "./CharacterCounter";
import Display from "./Display";

const CountManager = () => {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const incrementCounter = (clickValue) => {
    setCount(count + clickValue);
  };

  const handleChange = (event) => {
    const element = event.target;
    setInputValue(element.value);
  };
  return (
    <>
      <Button clickAction={incrementCounter} clickValue={1} />
      <Button clickAction={incrementCounter} clickValue={5} />
      <Button clickAction={incrementCounter} clickValue={10} />
      <Display content={count} />

      <CharacterCounter change={handleChange} count={inputValue} />
    </>
  );
};

export default CountManager;
