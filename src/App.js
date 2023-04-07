import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import Nav from './components/Nav/Nav';
import SignIn from './components/signin/SignIn';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Nav />}>
        <Route index element={<Home />} />
        <Route path='signin' element={<SignIn />} />
      </Route>
    </Routes>
  );
}

export default App;
