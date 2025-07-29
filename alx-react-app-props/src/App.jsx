import ProfilePage from './components/ProfilePage';
import UserContext from './components/UserContext';

function App() {
  const userData = {
     name: "Patrick Mwangi", 
     email: "Mwangipatrick@gmail.com" 
    };

  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;