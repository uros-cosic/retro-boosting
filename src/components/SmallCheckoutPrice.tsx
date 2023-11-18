import React from "react";

function SmallCheckoutPrice() {
  return (
    <div className="flex flex-col w-full items-end space-y-1">
      {/* only show discounted price if good code is applied */}
      <p className="line-through text-sm font-black">420.50$</p>
      <div className="flex justify-between w-full items-center">
        <p className="font-bold">Total Price:</p>
        <p className="font-black text-lg">399.47$</p>
      </div>
    </div>
  );
}

export default SmallCheckoutPrice;
