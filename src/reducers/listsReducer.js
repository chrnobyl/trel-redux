import { CONSTANTS } from '../actions';

let cardID = 6;

const initialState = [
  {
    title: "To do",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "example card"
      },
      {
        id: `card-${1}`,
        text: "another example card"
      }
    ]
  },
  {
    title: "Doing",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "example card"
      },
      {
        id: `card-${3}`,
        text: "another example card"
      },
      {
        id: `card-${4}`,
        text: "yet another example card"
      }
    ]
  },
  {
    title: "Done",
    id: `list-${2}`,
    cards: [
      {
        id: `card-${5}`,
        text: "example card"
      },
      {
        id: `card-${6}`,
        text: "another example card"
      },
      {
        id: `card-${7}`,
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
        id: `card-${cardID}`
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