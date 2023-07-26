import './App.css';
import NumberList from './pages/numberPage/NumberPage';
import UsersPage from './pages/usersPage/UsersPage';
// import MainPage from './pages/mainPage/MainPage';


function App() {
  return (
    <div className="App">
      {/* <MainPage /> */}
      <UsersPage />
      <NumberList />
    </div>
  );
}

export default App;