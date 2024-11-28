import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import About from "./components/About";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('white'); // Default background color

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      setBackgroundColor('black'); // Change background for dark mode
      showAlert("Dark Mode Has Been Enabled", "Success");
      document.title = "Text-Utils Dark Mode"
    } else {
      setMode('light');
      setBackgroundColor('white'); // Change background for light mode
      showAlert("Light Mode Has Been Enabled", "Success");
      document.title = "Text-Utils light Mode"
    }
  };

  const changeColor = (newColor) => {
    setBackgroundColor(newColor); // Set background color based on palette selection
  };

  return (
    <div style={{ backgroundColor: backgroundColor, minHeight: '100vh' }}>
      <Navbar title="T e x t U t i l s" mode={mode} togglemode={togglemode} changeColor={changeColor} />
      <Alert alert={alert} />
      <div className="container my-4">
      <Routes>
      <Route path="/" element={<TextForm Heading="Enter Your Text To Analyze" mode={mode} />} />
      <Route path="/home" element={<TextForm Heading="Enter Your Text To Analyze" mode={mode} />} />
      <Route path="/about" element= {<About mode= {mode}/>}/>
      </Routes>
      </div>
    </div>
  );
}

export default App;
