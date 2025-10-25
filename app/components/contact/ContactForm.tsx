
"use client";
import { useState } from 'react';
import SubTitle from '../common/SubTitle'
import Container from '../common/Container';

const ContactForm = () => {
    const [loading, setLoading] = useState(false);
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/send-email`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(form)
            });
            const jsonData = await response.json();
            alert(jsonData.success || jsonData.error);
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch (err) {
            console.log(err);
            alert("メールの送信に失敗しました");
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container>
            <SubTitle
                text='ContactForm'
                description='ここまでご覧いただきありがとうございます。応援やフィードバックも大歓迎です。以下のフォームよりお気軽にどうぞ！'
            />
            {loading
                ? (
                    <div className='w-full h-96 flex flex-col items-center justify-center'>
                        <div className='w-12 h-12 border-4 border-blue-500 rounded-full border-t-transparent animate-spin'></div>
                        <p className='mt-1 text-blue-500'>メール送信中...</p>
                    </div>
                )
                : (
                    <form
                        onSubmit={sendEmail}
                        className='mt-10'
                    >
                        <input
                            onChange={handleChange}
                            value={form.name}
                            className='w-full dark:bg-gray-400 dark:placeholder:text-white border border-gray-300 
                            rounded px-4 py-3 mb-5 outline-none'
                            type="text"
                            name='name'
                            placeholder='お名前'
                            required
                        />
                        <input
                            onChange={handleChange}
                            value={form.email}
                            className='w-full dark:bg-gray-400 dark:placeholder:text-white border border-gray-300  
                            rounded px-4 py-3 mb-5 outline-none'
                            type="email"
                            name='email'
                            placeholder='メールアドレス'
                            required
                        />
                        <input
                            onChange={handleChange}
                            value={form.subject}
                            className='w-full dark:bg-gray-400 dark:placeholder:text-white border border-gray-300  
                            rounded px-4 py-3 mb-5 outline-none'
                            type="text"
                            name='subject'
                            placeholder='タイトル'
                            required
                        />
                        <textarea
                            onChange={handleChange}
                            value={form.message}
                            className='w-full dark:bg-gray-400 dark:placeholder:text-white border border-gray-300 
                            rounded px-4 py-3 mb-5 outline-none'
                            name='message'
                            placeholder='メッセージ'
                            rows={12}
                            required
                        />
                        <button
                            type='submit'
                            className='w-full border border-indigo-500 text-indigo-500 bg-indigo-50 dark:bg-indigo-600
                          dark:text-white dark:bg-none dark:hover:bg-indigo-500 hover:bg-indigo-200 duration-300 px-10 py-3
                            rounded shadow-xl'
                        >
                            送信
                        </button>
                    </form>
                )
            }
        </Container>
    );
};

export default ContactForm;