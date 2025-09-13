import { useState } from 'react';
import './App.css';

export default function App() {
  const [guests, setGuests] = useState([]);
  const [newGuest, setNewGuest] = useState('');

  return (
    <div>
      <h1>Party Invite Tracker</h1>
      <p>Test: This should show up.</p>
      <input 
        type="text" 
        value={newGuest}
        onChange={(e) => setNewGuest(e.target.value)}
        placeholder="Enter guest name" />
        <button>Add Guest</button>
    </div>
  );
}