import { Routes, Route } from "react-router-dom";
import { PostProvider } from "./context/PostsContext";
import { UserProvider } from "./context/UserContext";
import { useTheme } from "./context/ThemeContext";

 import Header from "./components/Header";
// import ProfileCard from "./components/ProfileCard"
import Home from "./pages/Home";
import Prifile from "./pages/Profile";
import Settings from "./pages/Settings";
import Info from "./pages/Info";
// import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import ProfileCard from "./components/ProfileCard";
// import './App.css'

function App() {

  const { theme } = useTheme();
  return (
    <div className={`app theme-${theme}`}>
      <Header />
      <main>
        <UserProvider>
          <PostProvider>
            <Routes>
              <Route path="/home" element={<Home />}/>
              <Route path="/profile" element={<Prifile />}/>
              <Route path="/settings" element={<Settings />}/>
              <Route path="/info" element={<Info />}/>
            </Routes>
          </PostProvider>
        </UserProvider>
      </main>
    </div>

  );
}

export default App
