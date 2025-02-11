import './Todo.css'

function Todo({ title, onToDoDelete }) {
  return (
    <div className="todo">
      <p>{title}</p>
{/* If you pass in a function and you need (), You need to pass in a argument into the function  */}
      <button onClick={onToDoDelete}>Delete</button>
    </div>
  )
}

export default Todo