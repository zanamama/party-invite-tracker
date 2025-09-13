import { useState } from 'react';

export default function App() {
  const [guests, setGuests] = useState([]);

  return <div>Party Invite Tracker</div>;
    return (
    <div>
      <h1>Party Invite Tracker</h1>
            <input type="text" placeholder="Enter guest name" />
      <button>Add Guest</button>
    </div>
  );
}
