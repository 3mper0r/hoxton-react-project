import { useState } from 'react'
import { Fireworks } from 'fireworks-js/dist/react'
import './App.scss'
import { SideMenu } from './side-menu'
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import {
  ButtonPage,
  InputPage,
  Gradient,
  Font,
  BoxShadow,
  Canada,
  Norway,
  Kosova,
} from './pages';

function App() {

  return (
    <div className="App">
      <aside className="App-header">
        <SideMenu />
      </aside>

      <Routes>
        <Route path="/buttons" element={<ButtonPage />} />
        <Route path="/inputs" element={<InputPage />} />
        <Route path="/font" element={<Font />} />
        <Route path="/box-shadow" element={<BoxShadow />} />
        <Route path="/gradient" element={<Gradient />} />
        <Route path="/gradient/canada" element={<Canada />} />
        <Route path="/gradient/norway" element={<Norway />} />
        <Route path="/gradient/kosova" element={<Kosova />} />

      </Routes>
    </div>
  )
}

export default App
