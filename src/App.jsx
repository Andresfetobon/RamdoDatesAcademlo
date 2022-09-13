import { useState } from 'react';
import './App.css';
import './Styles/Card.css'
import users from './users.json'

function App() {

  const randomIndex = Math.floor(Math.random() * users.length)
  const [ index, setIndex ] = useState(randomIndex)
  const colors = ['#B93DAF', '#00C9A7', '#51308E', '#D63423', '#3596B5', '#AF5C00', '#F9F871', '#FF9671']
  
  const changeUsers = () => {
    const randomIndex = Math.floor(Math.random() * users.length)
    setIndex(randomIndex)
  }

  const randomColor = Math.floor(Math.random() * colors.length)
  document.body.style = `background: ${colors[randomColor]}`

  return (
    <div className='App'>

      <div className='Image'>
       <img src={users[index].picture.large} alt="" />
      </div>

      <div className='Dates' style={{color: colors[randomColor]}}>
      <h2> <i class="fa-solid fa-user"></i> {users[index].name.title} {users[index].name.first} {users[index].name.last}</h2>
      <h3> <i class="fa-solid fa-location-pin"></i> <b>Ubication: </b>{users[index].location.country} {users[index].location.city}</h3>
      <h3> <i class="fa-solid fa-phone"></i> <b>Phone: </b>{users[index].cell}</h3>
      <h3> <i class="fa-solid fa-venus-mars"></i>  <b>Gender: </b>{users[index].gender}</h3>
      <h3> <i class="fa-solid fa-envelope"></i> <b>Email: </b>{users[index].email}</h3>
     </div>

     
     <button className='' style={{color: colors[randomColor]}} onClick={changeUsers}><i class="fa-solid fa-shuffle"></i></button>
  
    </div>
  );
}

export default App;
