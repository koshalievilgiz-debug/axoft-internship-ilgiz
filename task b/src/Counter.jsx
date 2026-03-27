import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

  const handleUpdate = (delta) => {
    const nextValue = count + delta;
    if (nextValue < 0) return;

    setCount(nextValue);
    setHistory(prev => [nextValue, ...prev].slice(0, 5));
  };

  const reset = () => {
    setCount(0);
    setHistory([]);
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ddd', borderRadius: '12px', textAlign: 'center' }}>
      <h2>Счётчик</h2>
      
      <h1 style={{ color: count > 0 ? '#10b981' : '#6b7280', fontSize: '3rem' }}>
        {count}
      </h1>

      <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '20px' }}>
        <button onClick={() => handleUpdate(1)} style={btnStyle}>+</button>
        <button onClick={() => handleUpdate(-1)} style={btnStyle}>-</button>
        <button onClick={reset} style={{ ...btnStyle, background: '#ef4444' }}>Сброс</button>
      </div>

      <div style={{ textAlign: 'left', maxWidth: '250px', margin: '0 auto' }}>
        <h4>История:</h4>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {history.map((val, i) => (
            <li key={i} style={{ borderBottom: '1px solid #eee', padding: '5px 0' }}>
              Значение: {val}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const btnStyle = {
  padding: '10px 20px',
  cursor: 'pointer',
  borderRadius: '8px',
  border: 'none',
  background: '#2563eb',
  color: 'white',
  fontWeight: 'bold'
};

export default Counter;