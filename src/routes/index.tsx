import {Routes, Route, Navigate } from 'react-router-dom';

export const AppRoutes = () =>{
    return(
  <Routes>

  <Route path ="/pagina-inicial" element={
   <div><h1> veremos se essa bagaça funciona </h1>
     <p>Pagina Inicial</p>
  </div> 
  }/>

  <Route path ="*" element={<Navigate to="/pagina-inicial"/>}/>

  </Routes> 
    );
} 