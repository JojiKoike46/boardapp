import * as React from "react";

const Component = () => {
  const [count, setCount] = React.useState(0);
  const handleClick = React.useCallback(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleClick}>+1</button>
    </div>
  );
};

export default Component;
