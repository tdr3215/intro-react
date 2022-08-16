const CharacterCounter = (props) => {
  const { change, count } = props;

  return (
    <div>
      <textarea cols={80} rows={10} defaultValue="Count: X" onChange={change} />
      <div>Count: {count.length}</div>
    </div>
  );
};

export default CharacterCounter;
