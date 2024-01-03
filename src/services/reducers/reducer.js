import { ADD_TO_CART } from "../ContentIndex";
const initialState = {
  cardData: [],
};


export default function cardItems(state = [], actions) {
  switch (actions.type) {
    case ADD_TO_CART:
      console.log("reducer",actions);
      return [
        ...state,
       {cardData: actions.data}
      ];
      break;
      default:
        return state;
  }
}
