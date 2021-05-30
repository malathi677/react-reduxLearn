import BUY_ICECREAM from "./iceCreamActionTypes";

const buyIceCream = () => {
  return {
    type: BUY_ICECREAM,
    info: "Ice cream action",
  };
};

export default buyIceCream;
