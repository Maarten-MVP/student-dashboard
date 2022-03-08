import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function StudentList() {
    const evaluationData = useSelector(state => state.evaluationData)
    const uniqueStudents = [...new Set(evaluationData.map(item => item.student))]

    const navigate = useNavigate()

    let id = 0

    const students = 
        uniqueStudents
            .map(item => {
                return (
                        <div className='nav-item' key={id++} onClick={ () => navigate(`/student/${item}`) }>
                            {item}
                        </div>
                )
            })
    
    return (
        <nav>
            <div className='nav-item' onClick={ () => navigate(`/`) } >All students</div>
            {students}
        </nav>
    )
}

export default StudentList