// import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AdminRouter from '@/pages/Admin/AdminRouter';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
        
          <Route path="/admin/*" element={
            
              <AdminRouter />
           
          }/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
