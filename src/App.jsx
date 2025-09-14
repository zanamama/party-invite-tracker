import { useState } from 'react';
import './App.css';

export default function App() {
  const [guests, setGuests] = useState([]);
  const [newGuest, setNewGuest] = useState('');

  const handleAddGuest = () => {
    if (newGuest.trim() !== '') {
      const rsvp = document.querySelector('input[name="rsvp"]:checked')?.value || 'yes';
      setGuests([...guests, { name: newGuest.trim(), rsvp }]);
      setNewGuest('');
    }
  };

  return (
    <div className="App">
      <h1>Party Invite Tracker</h1>
      <div className="input-group">
        <input
          type="text"
          value={newGuest}
          onChange={(e) => setNewGuest(e.target.value)}
          placeholder="Enter guest name"
          autoFocus
        />
        <div className="rsvp-options">
          <label>
            <input type="radio" name="rsvp" value="yes" defaultChecked /> Yes
          </label>
          <label>
            <input type="radio" name="rsvp" value="no" /> No
          </label>
        </div>
        <button onClick={handleAddGuest}>Add Guest</button>
      </div>

      <ul className="guest-list">
        {guests.length === 0 ? (
          <li className="empty">No guests yet — add someone!</li>
        ) : (
          guests.map((guest, index) => (
            <li key={index} className={`guest-item ${guest.rsvp}`}>
              {guest.name} — <span className="rsvp-status">{guest.rsvp === 'yes' ? '✅ Yes' : '❌ No'}</span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}