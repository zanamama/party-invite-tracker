import { useState } from 'react';

export default function App() {
  const [guests, setGuests] = useState([]);
  const [newGuest, setNewGuest] = useState('');
  
  const handleAddGuest = () => {
    if (newGuest.trim() !== '') {
      setGuests([...guests, newGuest]);
      setNewGuest('');
    }
  };
  return <div>Party Invite Tracker</div>;
    return (
    <div>
      <h1>Party Invite Tracker</h1>
              <input
        type="text"
        value={newGuest}
        onChange={(e) => setNewGuest(e.target.value)}
        placeholder="Enter guest name"
      />
      <button>Add Guest</button>
    </div>
  );
}
