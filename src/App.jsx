import Home from "./components/Home"
import Todo from "./components/Todo"

import { Route, Routes } from "react-router-dom"
import "./App.css"
import TodoPage from "./pages/Todopage"
import TodayPage from "./pages/TodayPage"
import CalendarPage from "./pages/CalendarPage"
import HomePage from "./pages/HomePage"

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exect path="/" element={<HomePage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/today" element={<TodayPage />} />
          <Route path="/calendar" element={<CalendarPage />} />

      </Routes>
    
    </div>
  )
}

export default App
