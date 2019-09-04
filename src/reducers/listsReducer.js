import { CONSTANTS } from '../actions';

let cardID = 7;

const initialState = [
  {
    title: "To do",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "Make the fire"
      },
      {
        id: `card-${1}`,
        text: "Fix the breakfast"
      },
      {
        id: `card-${2}`,
        text: "Wash the dishes"
      },
      {
        id: `card-${3}`,
        text: "Do the mopping"
      }
    ]
  },
  {
    title: "Doing",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${4}`,
        text: "Walk the dog"
      },
      {
        id: `card-${5}`,
        text: "Walk the cat"
      },
    ]
  },
  {
    title: "Done",
    id: `list-${2}`,
    cards: [
      {
        id: `card-${6}`,
        text: "Finish take home project for Healthie"
      },
    ]
  }
]

const listsReducer = (state = initialState, action) => {
  switch(action.type){
    case CONSTANTS.ADD_CARD: {
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
    }

    case CONSTANTS.DRAG_HAPPENED: {
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexEnd,
        droppableIndexStart,
        draggableId
      } = action.payload

      const newState = [...state];

      if(droppableIdStart === droppableIdEnd){
        const list = state.find(list => droppableIdStart === list.id)
        const card = list.cards.splice(droppableIndexStart, 1)
        list.cards.splice(droppableIndexEnd, 0, ...card)
      }

      if(droppableIdStart !== droppableIdEnd){
        const listStart = state.find(list => droppableIdStart === list.id);

        const card = listStart.cards.splice(droppableIndexStart, 1);

        const listEnd = state.find(list => droppableIdEnd === list.id);

        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;
    }

    default: return state;
  }
}

export default listsReducer;
