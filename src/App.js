import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import StudentList from './components/StudentList'
import WeekFilter from './components/WeekFilter'
import StudentFilter from './components/StudentFilter'
import MainPage from './pages/MainPage'
import StudentPage from './pages/StudentPage'

function App() {
  return (
    
    <Router>
      <StudentList />
      <Routes>
        <Route path='/' element={ <MainPage /> } />
        <Route path='/student/:student' element={ <StudentPage /> } />
      </Routes>
      <div className='filters'>
        <WeekFilter />
        <StudentFilter /> 
      </div>
    </Router>
  );
}

export default App
