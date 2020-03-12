const { createStore } = Redux;

const initialState = {
  pups: [
    {
      rating: '5',
      url: 'https://media.giphy.com/media/O3iWjzootMuQw/giphy.gif'
    }
  ]
}

// Reducer

const gifReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD_PUP:
      const newPupList = state.pups.concat(action.newPup)
      return Object.assign({}, state, {
        pups: newPupList
      })
    default:
      return state
  }
}

// JS to access new pup form

const newPupForm = document.getElementById('new-pup-form')

// Declare action type

const ADD_PUP = 'ADD_PUP'

// Submits form and dispatches add action
const addNewPup = (pupObj) => {
  return {
    type: ADD_PUP,
    newPup: pupObj
  }
}

newPupForm.addEventListener('submit', () => {
  event.preventDefault();
  const gifUrl = document.getElementById('gif-url').value
  const gifRating = document.getElementById('gif-rating').value
  document.getElementById('gif-url').value = ''
  document.getElementById('gif-rating').value = ''
  const newPup = { url: gifUrl, rating: gifRating }
  store.dispatch(addNewPup(newPup))
})

// Sets up store
const store = createStore(gifReducer);

// Renders list of gifs to page
const gifList = document.getElementById('gif-list')
