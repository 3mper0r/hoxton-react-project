import { useState } from 'react'
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
  Color,
  Font,
  BoxShadow
} from './pages';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <aside className="App-header">
        <SideMenu />
      </aside>

      <Routes>
        <Route path="/buttons" element={<ButtonPage />} />
        <Route path="/inputs" element={<InputPage />} />
        <Route path="/color" element={<Color />} />
        <Route path="/font" element={<Font />} />
        <Route path="/box-shadow" element={<BoxShadow />} />
      </Routes>
    </div>
  )
}

export default App
