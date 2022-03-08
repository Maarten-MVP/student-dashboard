import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { add, subtract } from '../store/filteredData'

function WeekSelector() {

    const dispatch = useDispatch()
    function onChange(event) {
        if(event.target.checked) {
            dispatch(add(event.target.value))
        }
        else {
            dispatch(subtract(event.target.value))
        }
    }

    useEffect(() => {
        document.getElementById('week1').checked = true
        dispatch(add('W1'))
    }, [])
    
    return (
        <div className='week-filters'>
            <label>
                <input 
                    id='week1'
                    type={'checkbox'} 
                    value={'W1'}
                    onChange={onChange}
                />
                Week 1
            </label>
            <label>
                <input 
                    type={'checkbox'} 
                    value={'W2'}
                    onChange={onChange}                    
                />
                Week 2
            </label>
            <label>
                <input 
                    type={'checkbox'} 
                    value={'W3'}
                    onChange={onChange}
                />
                Week 3
            </label>
            <label>
                <input 
                    type={'checkbox'} 
                    value={'W4'}
                    onChange={onChange}
                />
                Week 4
            </label>
            <label>
                <input 
                    type={'checkbox'} 
                    value={'W5'}
                    onChange={onChange}
                />
                Week 5
            </label>
        </div>
    )
}

export default WeekSelector