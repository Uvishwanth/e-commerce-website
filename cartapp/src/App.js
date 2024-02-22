
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./product/Home";

import Cart from "./product/Cart";
import { Provider } from "react-redux";
import store from './redux/App/Store'
import IndividualItem from "./product/IndividuaItem";
import Login from "./product/login";
import SignUp from "./product/signup";



function App() {
  return (

    <div className="">
      <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<IndividualItem/>} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
