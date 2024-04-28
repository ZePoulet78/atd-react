// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AdminRouter from '@/pages/Admin/AdminRouter';
import AuthProvider from '@/_helpers/AuthProvider';
import AuthRouter from './pages/Auth/AuthRouter';
// import { NavigationProvider } from '@/_helpers/NavigationProvider';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <NavigationProvider> */}
        <Routes>
        
          <Route path="/admin/*" element={
            <AuthProvider >
              <AdminRouter />
            </AuthProvider>
          }/>
          <Route path="/auth/*" element={
            <AuthRouter />
          }/>
        </Routes>
        {/* </NavigationProvider> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
