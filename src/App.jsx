import { Route, Routes } from "react-router-dom"
import "./App.css"
import TodoPage from "./pages/Todopage"
import TodayPage from "./pages/TodayPage"
import CalendarPage from "./pages/CalendarPage"


function App() {
  return (
    <div className="App">
      <Routes>
          <Route exect path="/" element={<TodoPage />} />
          <Route path="/todo" element={<TodoPage />} />
          <Route path="/today" element={<TodayPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
      </Routes>
    
    </div>
  )
}

export default App
