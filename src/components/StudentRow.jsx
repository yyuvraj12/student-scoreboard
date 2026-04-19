import { useState } from 'react'
import './StudentRow.css'

function StudentRow({ student, index, updateScore }) {
  const [inputVal, setInputVal] = useState(student.score)

  const isPassing = student.score >= 40

  const handleUpdate = () => {
    const val = Number(inputVal)
    if (isNaN(val) || val < 0 || val > 100) {
      alert('Please enter a valid score between 0 and 100.')
      return
    }
    updateScore(student.id, val)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleUpdate()
  }

  return (
    <tr className="student-row">
      <td className="col-index">{index}</td>
      <td className="col-name">{student.name}</td>
      <td className="col-score">
        <span className={`score-badge ${isPassing ? 'pass' : 'fail'}`}>
          {student.score}
        </span>
      </td>
      <td className="col-status">
        <span className={`status-pill ${isPassing ? 'pass' : 'fail'}`}>
          {isPassing ? '✓ Pass' : '✗ Fail'}
        </span>
      </td>
      <td className="col-update">
        <div className="update-group">
          <input
            type="number"
            className="score-input"
            value={inputVal}
            min="0"
            max="100"
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="btn-update" onClick={handleUpdate}>
            Save
          </button>
        </div>
      </td>
    </tr>
  )
}

export default StudentRow
