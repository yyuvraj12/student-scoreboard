import { useState } from 'react'
import './AddStudentForm.css'

function AddStudentForm({ addStudent }) {
  const [name, setName]   = useState('')
  const [score, setScore] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    const trimmedName = name.trim()
    const numScore    = Number(score)

    if (!trimmedName) {
      setError('Student name cannot be empty.')
      return
    }
    if (score === '' || isNaN(numScore) || numScore < 0 || numScore > 100) {
      setError('Score must be a number between 0 and 100.')
      return
    }

    addStudent(trimmedName, numScore)
    setName('')
    setScore('')
  }

  return (
    <div className="form-card">
      <h2 className="form-title">➕ Add New Student</h2>

      {error && <p className="form-error">{error}</p>}

      <form className="add-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label className="form-label" htmlFor="studentName">Student Name</label>
          <input
            id="studentName"
            type="text"
            className="form-input"
            placeholder="e.g. Riya Kapoor"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="studentScore">Score (0 – 100)</label>
          <input
            id="studentScore"
            type="number"
            className="form-input"
            placeholder="e.g. 75"
            min="0"
            max="100"
            value={score}
            onChange={(e) => setScore(e.target.value)}
          />
        </div>

        <button type="submit" className="btn-add">
          Add Student
        </button>
      </form>
    </div>
  )
}

export default AddStudentForm
