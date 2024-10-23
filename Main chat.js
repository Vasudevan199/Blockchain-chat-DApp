
import React, { useState } from 'react';
import UserDashboard from './components/UserDashboard';
import AIPrediction from './components/AIPrediction';
import { ethers } from 'ethers';

function App() {
    const [userAddress, setUserAddress] = useState('');

    const connectWallet = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setUserAddress(account);
    };

    return (
        <div className="App">
            <h1>Blockchain Chat DApp</h1>
            <button onClick={connectWallet}>Connect Wallet</button>
            {userAddress && <UserDashboard userAddress={userAddress} />}
            <AIPrediction message="This is an urgent message." />
        </div>
    );
}

export default App;
