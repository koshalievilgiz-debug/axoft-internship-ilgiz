import { useState, useEffect } from 'react';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!res.ok) throw new Error('Ошибка загрузки');
      const data = await res.ok ? await res.json() : [];
      setUsers(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filtered = users.filter(u => 
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: '20px', background: '#f1f5f9', borderRadius: '12px' }}>
      <h3>Задание B3: Пользователи API</h3>
      
      <input 
        placeholder="Поиск по имени..." 
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: '15px', padding: '8px', width: '100%' }}
      />

      {loading && <div className="spinner">Загрузка...</div>}
      {error && (
        <div style={{ color: 'red' }}>
          {error} <button onClick={fetchUsers}>Повторить</button>
        </div>
      )}

      <div style={{ display: 'grid', gap: '10px' }}>
        {!loading && filtered.map(u => (
          <div key={u.id} style={{ background: 'white', padding: '10px', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
            <p><strong>{u.name}</strong></p>
            <p style={{ fontSize: '0.8rem', color: '#64748b' }}>{u.email} | {u.address.city}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UserList;