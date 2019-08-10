import React from "react";

const MemoComponent = ({ name }) => {
  console.log("Memo");
  return <div>Memo: {name}</div>;
};

export default React.memo(MemoComponent);
