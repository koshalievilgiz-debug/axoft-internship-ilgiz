import Counter from './Counter';
import TodoApp from './TodoApp';
import UserList from './UserList';

function App() {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '40px', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center' }}>Axoft Internship - React Tasks</h1>
      
      <section style={sectionStyle}>
        <Counter />
      </section>

      <section style={sectionStyle}>
        <TodoApp />
      </section>

      <section style={sectionStyle}>
        <UserList />
      </section>
    </div>
  );
}

const sectionStyle = {
  marginBottom: '40px',
  padding: '20px',
  borderBottom: '2px solid #eee'
};

export default App;