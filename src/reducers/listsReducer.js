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
    id: 0,
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
    id: 0,
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
    default: return state;
  }
}

export default listsReducer;