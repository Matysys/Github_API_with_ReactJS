import React, { useState, useEffect } from 'react'; 

import './styles.css';
import { Card } from '../../components/Card';

export function Home() {
  const [userName, setUserName] = useState();
  const [users, setUsers] = useState([]);


  //Função que adiciona usuário na lista.
  function handleAddUser(){
    
    //Consumindo API do GitHub
    fetch(`https://api.github.com/users/${userName}`)
      .then(response => response.json())
      .then(data => {

        //Verificando se o usuário existe
        if(typeof data.message !== "undefined"){
          alert("Usuário inexistente");
          return;
        }else{
          const newUser = {
            avatar: data.avatar_url,
            name: data.name,
            bio: data.bio,
            time: new Date().toLocaleTimeString("pt-br", {
              hour: '2-digit',
              minute: '2-digit',
              second: '2-digit'
            })            
          }
          //Adicionando o usuário no array
          setUsers(prevState => [...prevState, newUser]);
      }})
      .catch(err => alert(err));

  }
  
  
  return (
   <div className='container'>
      <header>
      <h1>Lista de usuários do GitHub</h1>
      <h3>Você está procurando por: {userName}</h3>
      </header>
      <input type="text" placeholder="Escreva um nome" onChange={e => setUserName(e.target.value)}/>
      <button type="button" onClick={handleAddUser}>Mostrar usuários</button>
      {
        //Componente que vai ser renderizado de acordo com o número de usuários
        users.map(user => <Card key={user.time} name={user.name} time={user.time} avatar={user.avatar} bio={user.bio}/>)
      }
   </div> 
  )
}


