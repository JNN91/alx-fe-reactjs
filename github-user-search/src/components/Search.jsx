import React, { useState } from 'react';
import { fetchUserData } from '../services/githubService';

export default function Search() {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    setLoading(true);
    setError('');
    setUser(null);

    try {
      const data = await fetchUserData(username);
      setUser(data);
    } catch (err) {
      setError('Looks like we cant find the user'); // ✅ matches required text
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', textAlign: 'center' }}>
      <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            padding: '10px',
            width: '70%',
            marginRight: '5px'
          }}
        />
        <button type="submit" style={{ padding: '10px' }}>
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {user && (
        <div style={{ border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <img
            src={user.avatar_url}
            alt={user.login}
            style={{ width: '100px', borderRadius: '50%' }}
          />
          <h3>{user.name || user.login}</h3>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
}
