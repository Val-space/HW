import React, { useEffect, useState } from "react";

function TotalSum({ cart }) {
  const [totalSum, setTotalSum] = useState(0);

  useEffect(() => {
    let updatedPrice = cart.reduce(
      (acc, el) => acc + el.newItem.price * el.count,
      0
    );
    setTotalSum(updatedPrice);
  }, [cart]);
  return (
    <div
      className="my-3 rounded-sm text-center p-1"
      style={{ fontSize: "1.3rem" }}
    >
      Total price is <span style={{ fontWeight: "700" }}>{totalSum}$</span>
    </div>
  );
}

export default TotalSum;
