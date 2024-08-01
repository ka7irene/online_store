import React, { useState } from 'react';

const Home = () => { // Home component
    const [username, setUsername] = useState(''); // State to keep track of the username input
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogin = () => { // Function to handle login
        if(username.trim() !== '') {
            setLoggedIn(true);
        }
    };

   const handleLogout = () => { // Function to handle Logout
    setLoggedIn(false);
    setUsername('');
   };

    return (
        <div>
            {loggedIn ?(
                <div>
                    <h1>Welcome {username}</h1>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div>
                    <input 
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter your name"
                    />
                    <button onClick={handleLogin}>Login</button>
                </div>
            )}
        </div>
    );
};

export default Home;