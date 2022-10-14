import { Route, Routes } from "react-router-dom";
import Home from './components/pages/Home/Home';
import AboutUs from "./components/pages/AboutUs/AboutUs";
import Connect from "./components/pages/Connect/Connect";
import Profile from './components/pages/Profile/Profile';
import Registration from "./components/pages/Registration/Registration";
import Store from "./components/pages/Store/Store";

export default function Router() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/AboutUs" element={<AboutUs/>} />
                <Route path="/Connect" element={<Connect />} />
                <Route path="/Profile" element={<Profile />} />
                <Route path="/Registration" element={<Registration />} />
                <Route path="/Store" element={<Store />} />
            </Routes>
        </div>
    )
}