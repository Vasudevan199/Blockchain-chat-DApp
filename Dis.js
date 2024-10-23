const ChatApp = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState('');

    useEffect(() => {
        const loadMessages = async () => {
            const msg = await fetchMessages();
            setMessages(msg);
        };
        loadMessages();
    }, []);

    const handleSend = async () => {
        await sendMessage(input);
        setInput('');
        const msg = await fetchMessages();
        setMessages(msg);
    };

    return (
        <div>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.sender}</strong>: {msg.content}
                    </div>
                ))}
            </div>
            <input 
                value={input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Type a message"
            />
            <button onClick={handleSend}>Send</button>
        </div>
    );
};
