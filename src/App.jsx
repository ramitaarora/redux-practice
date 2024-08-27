import { createStore } from 'redux';

const notes = [
  {
    text: "Wash dishes",
    completed: false,
  },
  {
    text: "Vacuum",
    completed: false,
  },
]

const notesReducer = (state = notes, action) => {
  switch (action.type) {
    case 'completed':
      return state.completed === false ? true : false;
    default:
      return state;
  }
}

export const store = createStore(notesReducer);

export default function App() {
  return (
    <div>
      <header>
        <h1>Redux Practice: To-Do List</h1>
      </header>
      <main>
      
        <form>
          <input type="text" name="to-do" placeholder="To Do..."/>
          <input type="submit" value="Add"/>
        </form>

        <div>
          <ol>
            
          </ol>
        </div>
      </main>
    </div>
  )
}