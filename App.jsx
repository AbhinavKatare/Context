
import './App.css'
import Profile from './components/profile'
import Login from './components/login'
import UserContextProvider from './context/UserContextProvider' // Importing the context provider


function App() {
  

  return (
    <UserContextProvider> 
      <h1>React and Context</h1>
      <Login />
      <Profile />

  </UserContextProvider>
  ) 
}

export default App


//  pucho na mujhse kahani meri 
// zindagi kha gyi jawani meri 
// tere gham mein bigada hai chehra mera 
// warna saari duniya thi diwani meri  

// usko hasta dekh kar meine rona chod diya 
// use yaad karne ke liye meine sona chod diya
// or aana toh bhot log chahe meri zindagi mein
// par kya kre uske baad meine kisika hona chod diya --/

