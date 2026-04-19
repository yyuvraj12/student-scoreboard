import { useState } from 'react';

function App() {
  const initialStudents = [
    { id: 1, name: 'Aarav Sharma', score: 85 },
    { id: 2, name: 'Priya Mehta', score: 37 },
    { id: 3, name: 'Rohan Verma', score: 62 },
    { id: 4, name: 'Ananya Singh', score: 28 },
    { id: 5, name: 'Karan Patel', score: 74 },
  ];

  const [students, setStudents] = useState(initialStudents);
  const [newName, setNewName] = useState('');
  const [newScore, setNewScore] = useState('');

  // 1. Naya student add karne ka function
  const addStudent = (e) => {
    e.preventDefault();
    if (newName && newScore) {
      const newEntry = {
        id: students.length + 1,
        name: newName,
        score: Number(newScore)
      };
      setStudents([...students, newEntry]);
      setNewName(''); // Input clear karne ke liye
      setNewScore('');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Student Scoreboard</h1>

      {/* 2. Add Student Form */}
      <form onSubmit={addStudent} style={{ marginBottom: '20px' }}>
        <input 
          type="text" 
          placeholder="Student Name" 
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          required 
        />
        <input 
          type="number" 
          placeholder="Score" 
          value={newScore}
          onChange={(e) => setNewScore(e.target.value)}
          required 
        />
        <button type="submit">Add Student</button>
      </form>

      {/* 3. Table */}
      <table border="1" cellPadding="10" style={{ width: '100%', textAlign: 'left' }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Score</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.score}</td>
              <td style={{ color: s.score >= 40 ? 'green' : 'red' }}>
                {s.score >= 40 ? '✅ Pass' : '❌ Fail'}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

