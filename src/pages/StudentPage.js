import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import StudentBarChart from '../components/StudentBarChart'
import WeekSelector from '../components/WeekFilter'
import { useDispatch } from 'react-redux'
import { addStudent } from '../store/student'

function StudentPage() {

    const { student } = useParams()
    const dispatch = useDispatch()

    dispatch(addStudent(student))

    return (
        <div className='chart-section-wrapper'>
            <StudentBarChart />
        </div>
    )
}

export default StudentPage