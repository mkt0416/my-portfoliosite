
'use client'
import { useEffect, useRef, useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

type Message = {
    text: string;
    sender: 'user' | 'bot';
};

const Chat = () => {
    const [inputMessage, setInputMessage] = useState('');
    const [message, setMessage] = useState<Message[]>([]);
    const [loading, setLoading] = useState(false);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [message]);

    const sendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const trimmed = inputMessage.trim();
        if (!trimmed) return;

        setMessage((prev) => [...prev, { text: trimmed, sender: 'user' }]);
        setInputMessage('');

        try {
            setLoading(true);
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/chat`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message: trimmed,
                })
            });
            const jsonData = await response.json();
            setMessage((prev) => [...prev, { text: jsonData.reply, sender: 'bot' }]);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-20 w-full max-w-screen-md mx-auto px-8">
            <div className="flex flex-col">
                <h1 className="text-center text-lg sm:text-2xl font-bold">お手伝いできることはありますか？</h1>
                <div className=" pb-40">
                    {message.map((msg, index) => (
                        <div
                            className={msg.sender === 'user'
                                ? 'text-right'
                                : 'text-left'
                            }
                            key={index}
                        >
                            <div className="mt-20 inline-block bg-gray-200 dark:bg-gray-500 rounded-xl p-4">
                                {msg.text}
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="text-left">
                            <div className="mt-20 inline-block bg-gray-200 dark:bg-gray-500 rounded-xl p-4 animate-pulse">
                                回答を作成中...
                            </div>
                        </div>
                    )}
                    <div ref={bottomRef}></div>
                </div>
            </div>
            <div className="fixed bottom-5 left-0 right-0 max-w-screen-md mx-auto px-8">
                <form
                    onSubmit={sendMessage}
                    className="relative"
                >
                    <textarea
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        className="resize-none border dark:bg-gray-500 rounded-xl w-full focus:outline-none overflow-y-auto p-4"
                        placeholder="メッセージを入力してください"
                        rows={3}
                    />
                    <button
                        type="submit"
                        className="absolute top-6 right-4 text-xl text-gray-500 dark:text-white"
                    >
                        <FaPaperPlane />
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Chat;