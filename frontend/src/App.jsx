import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Home from './components/pages/Home';
import CardF from './components/CardF';
import OurVision from './OurVision';
import LoginPage from './components/loginpage/LoginPage';
import FamilyCard from './components/FamilyCard';
import EmploymentCard from './components/EmploymentCard';
import PropertyCard from './components/PropertyCard';
import LabourCard from './components/LabourCard';
import TrafficCard from './components/TrafficCard';
import VotingCard from './components/VotingCard';
import AboutUsPage from './components/AboutUs';
import NavBar from './components/NavBar';
import RegistrationPage from './components/register';
import Footer from './components/Footer';
import Chatbot from './components/chatbot';
import ChatInterface from './components/assist';
import EmploymentContracts from './components/contract';
import  CourtCases from './components/famouscases';
import News from './components/news';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {/* Conditionally render the NavBar based on the current route */}
      {location.pathname !== '/register' && location.pathname !=='/login' && location.pathname !=='/' && <NavBar /> }
      <Routes>
        <Route path="/" element={<Home />} />   {/* HeroSection*/}
        <Route path="/home" element={<CardF />} />
        <Route path="/ourvision" element={<OurVision />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/familycard" element={<FamilyCard />} />
        <Route path="/employmentcard" element={<EmploymentCard />} />
        <Route path="/propertycard" element={<PropertyCard />} />
        <Route path="/labourcard" element={<LabourCard />} />
        <Route path="/trafficcard" element={<TrafficCard />} />
        <Route path="/votingcard" element={<VotingCard />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegistrationPage />} /> 
        <Route path="/chatbot" element={<Chatbot/>}/>
        <Route path="/assist" element={<ChatInterface/>}/>
        <Route path="/contract" element={<EmploymentContracts/>}/>
        <Route path="/famous" element={<CourtCases/>}/>
        <Route path="/news" element={<News/>}/>

      </Routes>
      {location.pathname !== '/register' && location.pathname !=='/login' && location.pathname !=='/' && location.pathname !=='/chatbot' && <Footer /> }
    </div>
  );
}

export default App;
