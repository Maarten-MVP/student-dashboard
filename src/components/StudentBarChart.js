import React from 'react'
import { useSelector } from 'react-redux'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  )

function BarChart(props) {

    const filteredData = useSelector(state => state.filteredData)

    const student = useSelector(state => state.student)

    const dataPerStudent = filteredData.filter(item => item.student === student )

    let countsDifficulty = dataPerStudent.reduce((prev, curr) => {
        let count = prev.get(curr.assignment) || 0
        prev.set(curr.assignment, curr.difficulty + count)
        return prev
    }, new Map())

    let averageDifficultScores = Array.from(countsDifficulty).map(([assignment, difficulty]) => {
        return { assignment, difficulty: difficulty }
    })

    let countsLiking = dataPerStudent.reduce((prev, curr) => {
        let count = prev.get(curr.assignment) || 0
        prev.set(curr.assignment, curr.liking + count)
        return prev
    }, new Map())

    let averageLikingScores = Array.from(countsLiking).map(([assignment, liking]) => {
        return { assignment, liking: liking }
    })

const data = {
    labels: averageDifficultScores.map(item => item.assignment),
    datasets: [
        {
            label: "Difficulty",
            data: averageDifficultScores.map(item => item.difficulty),
            backgroundColor: ['rgba(58, 89, 201, 0.5)'],
            borderColor: ['rgba(58, 89, 201)'],
            borderWidth: 2,
        },
        {
            label: "Liking",
            data: averageLikingScores.map(item => item.liking),
            backgroundColor: ['rgba(58, 165, 201, 0.5)'],
            borderColor: ['rgba(58, 165, 201)'],
            borderWidth: 2,
        },
    ]
}

const options = {
    scales: {
        y: {
          min: 0,
          max: 5,
          ticks: {
              stepSize: 1
          }
        }
      }
}

    return (
        <div className='chart'>
            <Bar data={data} options={options} />
        </div>

    )
}

export default BarChart