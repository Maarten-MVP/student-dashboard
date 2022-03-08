import React, { useEffect } from 'react'
import BarChart from '../components/BarChart'
import { useDispatch } from 'react-redux'
import { addStudent } from '../store/student'

function MainPage() {
  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(addStudent(''))
  }, [])

  return (
    <div className='chart-section-wrapper'>
        <BarChart />
    </div>
  )
}

export default MainPage