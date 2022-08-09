import contacts from "./contacts.json"
import './App.css';
import { useState } from "react";

function App() {

  const [contactos, setContacts] = useState(contacts.slice(0, 6))

  const add = ()=>{
    const randomArtist = contacts[Math.floor(Math.random() * contacts.length)]
    setContacts([randomArtist, ...contactos])
  }

  const sortName = ()=> {
    let clone = JSON.parse(JSON.stringify(contactos))
    let sorted = clone.sort((a,b)=> a.name < b.name ? -1 : 1)
    setContacts(sorted)
  }

  const sortPop = ()=> {
    let clone = JSON.parse(JSON.stringify(contactos))
    let sorted = clone.sort((a,b)=> a.popularity < b.popularity ? 1 : -1)
    setContacts(sorted)
  }

  const borrar = (id)=>{
    const idArr = contactos.filter(e=> e.id !== id)
    setContacts(idArr)
  }
  
  return (
    <div className="App">
      <h1>IronContacts</h1>
      <button onClick={add}>Add random Contact</button>
      <button onClick={sortPop}>Sort by popularity</button>
      <button onClick={sortName}>Sort by name</button>
      <div style={{display: "flex", gap: "1rem"}}>
        <p>Picture</p>
        <p>Name</p>
        <p>Popularity</p>
        <p>Won Oscar</p>
        <p>Won Emily</p>
        <p>Actions</p>
      </div>
      {
      contactos.map(e=>{
        return <div style={{display: "flex", gap: "1rem", alignItems:"center"}} key={e.id}>
          <img style={{width: "160pxpx", height:"230px"}} src={e.pictureUrl} alt="foto"/>
          <p>{e.name}</p>
          <p>{e.popularity.toFixed(2)}</p>
          {e.wonOscar ? <p>🏆</p> : <p> </p>}
          {e.wonEmmy ? <p>🏆</p> : <p> </p>}
          <button onClick={()=>borrar(e.id)}>delete</button>
        </div>
      })
      }
    </div>
  );
}

export default App;
