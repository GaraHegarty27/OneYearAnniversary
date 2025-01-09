import './Css/App.css';
import { Routes, Route } from "react-router-dom";
import Layout from "./Components/Layout";
import HomePage from './Components/HomePage';
import AboutUs from "./Components/AboutUs";
import PriceList from "./Components/PriceList";
import OrderPage from "./Components/OrderPage";
import DisplayOrder from "./Components/DisplayOrder";


function App() {
   return (

       <div className="App">

           <header className="App-header">

               <Routes>
                   <Route element={<Layout />}>
                       <Route path="*" element={<HomePage />} />
                       <Route path="aboutus" element={<AboutUs />} />
                       <Route path="pricelist" element={<PriceList />} />
                       <Route path="orderpage" element={<OrderPage />} />
                       <Route path="displayorder" element={<DisplayOrder />} />
                   </Route>
               </Routes>

           </header>

       </div>

   );

}

export default App;