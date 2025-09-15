import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [guests, setGuests] = useState([]);
  const [newGuest, setNewGuest] = useState('');

  useEffect(() => {
    const saved = localStorage.getItem('guests');
    if (saved) setGuests(JSON.parse(saved));
  }, []);

  const handleAddGuest = () => {
    if (newGuest.trim() !== '') {
      const rsvp = document.querySelector('input[name="rsvp"]:checked')?.value || 'yes';
      const updatedGuests = [...guests, { name: newGuest.trim(), rsvp }];
      setGuests(updatedGuests);
      setNewGuest('');
      localStorage.setItem('guests', JSON.stringify(updatedGuests));
    }
  };

  const handleDeleteGuest = (index) => {
    const updatedGuests = guests.filter((_, i) => i !== index);
    setGuests(updatedGuests);
    localStorage.setItem('guests', JSON.stringify(updatedGuests));
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
              <button
                onClick={() => handleDeleteGuest(index)}
                className="delete-btn"
                aria-label="Remove guest"
              >
                🗑️
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}