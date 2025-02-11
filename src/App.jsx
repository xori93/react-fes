import { BrowserRouter as Router,Routes, Route, } from 'react-router-dom';
import './App.css';
import Counter from './components/Counter.jsx';
import Modal from './components/Modal.jsx';
import Title from './components/Title.jsx';
import Todo from './components/Todo.jsx';
import React, { useState, useEffect } from 'react'
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Nav from './components/Nav.jsx';
import User from './pages/User.jsx';


function App() {
  return (
      <Router> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user/:name" element={<User />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} /> */}
        </Routes>
      </Router>
  )
}

export default App

















































// function App() {
//   // const [showModal, setShowModal] = useState(false)

//   // function onToDoDelete() {
//   //   setShowModal(true)
//   //   console.log('onToDoDelete()')
//   // }

//   // function cancelModal() {
//   //   setShowModal(false)
//   //   console.log('cancelModal()')
//   // }

//   // function confirmModal() {
//   //   setShowModal(false)
//   //   console.log("confirmModal()")
//   // }

//   // // The most common use is to do something as soon as a component mounts
//   // // fetch data soon as the page mounts
//   // // first argument is the call back function
//   // // second is a dependency
//   // useEffect(() => {
//   //   console.log('runs ONLY on mount')
//   // }, [])

//   // useEffect(() => {
//   //   console.log(`on mount AND on${showModal} change`)
//   // }, [showModal])

//   // useEffect(() => {
//   //   console.log('runs EVERY render')
//   // })
  

//   return (
//     <div>
//       <Title />
//       <div>
//         <input type="text" onChange={(event) => {
//           console.log(event.target.value)
//         }} />
//         <button onClick={() => setShowModal(true)}>Add todo</button>
//       </div>
//       <div className="todo__wrapper">
//       <Todo onToDoDelete={onToDoDelete} title="Finish Frontend Simplified" />
//       <Todo onToDoDelete={onToDoDelete} title="Finish Interview Section" />
//       <Todo onToDoDelete={onToDoDelete} title="Land 100k Job" />
//       </div>
//       {showModal && (
//         <Modal 
//           cancelModal={cancelModal} 
//           confirmModal={confirmModal} 
//           title="Are you sure you want to delete?" 
//         />
//       )}
//     </div>
//   );
// }

// export default App;
