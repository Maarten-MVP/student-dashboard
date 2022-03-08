import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addStudentToFilter, removeStudentFromFilter } from '../store/studentFilter'

function StudentList() {
    const evaluationData = useSelector(state => state.evaluationData)
    const uniqueStudents = [...new Set(evaluationData.map(item => item.student))]
    const student = useSelector(state => state.student)
    const dispatch = useDispatch()

    const checkboxes = document.getElementsByClassName('student-filter')

    function selectAllStudents() {
        for(let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = true
        }
    }

    useEffect(() => {
        selectAllStudents()
        for(let i = 0; i < uniqueStudents.length; i++) {
            dispatch(addStudentToFilter(uniqueStudents[i]))
        }
    }, [])

    let id = 0

    function onChange(event) {
        if(event.target.checked) {
            dispatch(addStudentToFilter(event.target.value))
        } else {
            dispatch(removeStudentFromFilter(event.target.value))
        }
    }

    const students =
        uniqueStudents
            .map(item => {
                return (
                    <label key={id++} >
                        <input
                            className='student-filter'
                            type={'checkbox'}
                            value={item}
                            onChange={onChange} 
                        />
                        {item}
                    </label>
                )
            })
    
    const currentStudent = 
        uniqueStudents
            .filter(item => item === student)          
            .map(item => {
                return (
                    <label key={id++} >
                        <input type={'checkbox'} checked={true}/>
                        {item}
                    </label>
                )
            })
    
    function conditionalRenderStudentFilter() {
        if(student === "") {
                return students
        }
        return currentStudent
    }
    
    return (
        <div className='student-filters'>
            {conditionalRenderStudentFilter()}
        </div>
    )
}

export default StudentList