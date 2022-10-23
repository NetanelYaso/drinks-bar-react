import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home/Home';
import AboutUs from "./components/pages/AboutUs/AboutUs";
import Profile from './components/pages/Profile/Profile';
import Registration from "./components/pages/Registration/Registration";
import Products from "./components/pages/Products/Products";
import Contact from "./components/pages/Contact/Contact";
import Team from "./components/pages/Team/Team";
import { useEffect } from "react";

export default function Router() {
    useEffect(()=>{

    },[])
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AboutUs" element={<AboutUs/>} />
                <Route path="/Contact" element={<Contact />} />
                {/* <Route path="/Profile" element={<Profile />} /> */}
                <Route path="/Registration" element={<Registration />} />
                <Route path="/Products" element={<Products />} />
                <Route path="/Team" element={<Team />} />
            </Routes>
        </div>
    )
}