import React from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink, Navigate, } from "react-router-dom";
// import About from './About';
import Dashboard from './Dashboard';
import People from './People';
import Appoinments from './Appoinments';
import Service from './Service';
import Currency from './Currency';
import Receiption from './Receiption';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PeopleIcon from '@mui/icons-material/People';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ReceiptIcon from '@mui/icons-material/Receipt';
import SettingsIcon from '@mui/icons-material/Settings';
const Menu = () => {
    return (
        <>
            {/* <h1>Menu</h1> */}
            <Router>
                <div className="menu_style">
                    <NavLink className="active_class" to="/">
                        <DashboardIcon />
                    </NavLink>
                    &nbsp; &nbsp;
                    <NavLink className="active_class" to="/people">
                        <PeopleIcon />
                    </NavLink>
                    &nbsp; &nbsp;
                    <NavLink className="active_class" to="/appoinment">
                        <EventAvailableIcon />
                    </NavLink>
                    &nbsp; &nbsp;
                    <NavLink className="active_class" to="/currency">
                        <  CurrencyRupeeIcon />
                    </NavLink>
                    &nbsp; &nbsp;
                    <NavLink className="active_class" to="/receiption">
                        <  ReceiptIcon />
                    </NavLink>
                    &nbsp; &nbsp;
                    <NavLink className="active_class" to="/setting">
                        <  SettingsIcon />
                    </NavLink>
                    &nbsp; &nbsp;
                    <br />
                </div>
                <Routes>
                    
                    <Route exact path="/" element={<Dashboard name="Dashboard" />} />
                    <Route exact path="/people" element={<People name="People" />} />
                    <Route exact path="/appoinment" element={<Appoinments />} />
                    <Route exact path="/currency" element={<Currency name="Currency" />} />
                    <Route exact path="/receiption" element={<Receiption name="Receiption" />} />
                    <Route exact path="/service" element={<Service name="Service" />} />
                    <Route exact path="*" element={<Navigate to="/" />} />
                </Routes>
            </Router>
        </>
    )
}

export default Menu