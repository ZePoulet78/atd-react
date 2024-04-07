import './App.css';
import Welcome from './components/Welcome';
import PublicHeader from '@/components/Public/PublicHeader';
import UserTable from '@/pages/Admin/UserTable';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import AuthRouter from '@/pages/Auth/AuthRouter';
function App() {
  return (
    <div className="App">
      <PublicHeader/>
      <BrowserRouter>
        <Routes>
          <Route index element={<Welcome/>}/>
          <Route path="/admin/users" element={<UserTable/>}/>
          <Route path="/auth/*" element={<AuthRouter/>}/>
        </Routes>
      </BrowserRouter>
      {/* <UserTable/> */}
    </div>
  );
}

export default App;