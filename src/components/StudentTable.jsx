import StudentRow from './StudentRow'
import './StudentTable.css'

function StudentTable({ students, updateScore }) {
  if (students.length === 0) {
    return (
      <div className="table-empty">
        <p>No students yet. Add one below! 👇</p>
      </div>
    )
  }

  return (
    <div className="table-wrapper">
      <table className="student-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Student Name</th>
            <th>Score</th>
            <th>Status</th>
            <th>Update Score</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <StudentRow
              key={student.id}
              student={student}
              index={index + 1}
              updateScore={updateScore}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default StudentTable
