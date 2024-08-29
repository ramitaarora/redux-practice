export default function App({ state, dispatch }) {
  console.log(state);
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
            {/*state.length && state.map((note, index) => (
              <li key={index}>{note}</li>
            ))*/}
          </ol>
        </div>
      </main>
    </div>
  )
}