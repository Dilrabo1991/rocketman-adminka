import { BrowserRouter, Route, Routes } from "react-router-dom";


import MainLayout from "./Components/MainLayout/MainLayout";
import Maxsulotlar from "./Components/Pages/Maxsulotlar/Maxsulotlar";
import Buyurtmalar from "./Components/Pages/Buyurtmalar/Buyurtmalar";
import Mijozlar from "./Components/Pages/Mijozlar/Mijozlar";
import Login from "./Components/Login";
import { useState } from "react";
import Takliflar from "./Components/Pages/Takliflar/Takliflar";

function App() {
  const get = localStorage.getItem('token')
  const [token, setToken] = useState(get?.token || '');
  return (
    token ?
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<MainLayout />}>
            <Route path="buyurtmalar" element={<Buyurtmalar />} />
            <Route path="mijozlar" element={<Mijozlar />} />
            <Route path="maxsulotlar" element={<Maxsulotlar />} />
            <Route path="takliflar" element={<Takliflar />} />
          </Route>
        </Routes>
      </BrowserRouter>

      : <Login setToken={setToken} />
  );
}

export default App;
