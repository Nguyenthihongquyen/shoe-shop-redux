const initialState = {
  shoppingList: [],
};
const shoeShopReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_TO_SHOPPING_LIST": {
      const shoppingListUpdate = [...state.shoppingList];
      const index = shoppingListUpdate.findIndex(
        (item) => item.id === payload.id
      );
      if (index === -1) {
        const newShoe = { ...payload, quantity: 1 };
        shoppingListUpdate.push(newShoe);
      } else {
        shoppingListUpdate[index].quantity += 1;
      }
      return { ...state, shoppingList: shoppingListUpdate };
    }
    case "UPDATE_QUANTITY": {
      console.log(payload);
      const shoppingListUpdate = [...state.shoppingList];
      const index = shoppingListUpdate.findIndex(
        (item) => item.id === payload.id
      );
      if (payload.act) {
        shoppingListUpdate[index].quantity += 1;
      } else {
        if (shoppingListUpdate[index].quantity > 1) {
          shoppingListUpdate[index].quantity -= 1;
        }
      }
      return { ...state, shoppingList: shoppingListUpdate };
    }
    case "REMOVE_FROM_SHOPPING_LIST": {
      const shoppingListUpdate = [...state.shoppingList];
      const index = shoppingListUpdate.findIndex((item) => item.id === payload);
      shoppingListUpdate.splice(index, 1);
     
      return { ...state, shoppingList: shoppingListUpdate };
    }
    default:
      return state;
  }
};
export default shoeShopReducer;
