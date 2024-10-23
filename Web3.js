import Web3 from 'web3';
import ChatContract from './abis/Chat.json';

const web3 = new Web3(window.ethereum);
const contractAddress = "YOUR_CONTRACT_ADDRESS";
const chat = new web3.eth.Contract(ChatContract.abi, contractAddress);

const sendMessage = async (content) => {
    const accounts = await web3.eth.getAccounts();
    await chat.methods.sendMessage(content).send({ from: accounts[0] });
};

const fetchMessages = async () => {
    const messages = await chat.methods.getMessages().call();
    return messages;
};
