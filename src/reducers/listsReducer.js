import { CONSTANTS } from '../actions';

let cardID = 3;

const initialState = [
  {
    title: "To do",
    id: 0,
    cards: [
      {
        id: 0,
        text: "example card"
      },
      {
        id: 1,
        text: "another example card"
      }
    ]
  },
  {
    title: "Doing",
    id: 1,
    cards: [
      {
        id: 0,
        text: "example card"
      },
      {
        id: 1,
        text: "another example card"
      },
      {
        id: 2,
        text: "yet another example card"
      }
    ]
  },
  {
    title: "Done",
    id: 2,
    cards: [
      {
        id: 0,
        text: "example card"
      },
      {
        id: 1,
        text: "another example card"
      },
      {
        id: 2,
        text: "yet another example card"
      }
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch(action.type){
    case CONSTANTS.ADD_CARD:
      const newCard = {
        text: action.payload.text,
        id: cardID
      };
      cardID += 1;

      const newState = state.map(list => {
        if(list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard]
          };
        } else {
          return list;
        }
      });

      return newState;

    default: return state;
  }
}

export default listsReducer;