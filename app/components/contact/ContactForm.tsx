
'use client'
import { useRef } from 'react';
import SubTitle from '../common/SubTitle'
import Container from '../common/Container';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);

    const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
        throw new Error("必要な環境変数が設定されていません。");
    }

    const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            await emailjs.sendForm(serviceId, templateId, form.current!, {
                publicKey: publicKey,
            });
            console.log('SUCCESS!');
            form.current?.reset();
            alert('送信完了！');
        } catch (err) {
            console.log('FAILED...', err);
            alert('送信に失敗しました');
        }
    };

    return (
        <Container>
            <SubTitle text='Contact' />
            <p>Thank you for visiting my portfolio. Feel free to contact me with any job inquiries or questions.</p>
            <span className='text-gray-400 text-xs'>ご覧いただきありがとうございます。お仕事のご相談やご質問など、お気軽にご連絡ください。</span>
            <form
                onSubmit={sendEmail}
                ref={form}
                className='mt-10'
            >
                <input
                    className='w-full dark:bg-gray-400 placeholder:text-white border border-gray-300 rounded px-4 py-3 mb-5 outline-none'
                    type="text"
                    name='name'
                    placeholder='Name'
                    required
                />
                <input
                    className='w-full dark:bg-gray-400 placeholder:text-white border border-gray-300 rounded px-4 py-3 mb-5 outline-none'
                    type="email"
                    name='email'
                    placeholder='Mailadress'
                    required
                />
                <input
                    className='w-full dark:bg-gray-400 placeholder:text-white border border-gray-300 rounded px-4 py-3 mb-5 outline-none'
                    type="text"
                    name='subject'
                    placeholder='Subject'
                    required
                />
                <textarea
                    className='w-full dark:bg-gray-400 placeholder:text-white border border-gray-300 rounded px-4 py-3 mb-5 outline-none'
                    name='message'
                    placeholder='Message'
                    rows={12}
                    required
                />
                <button
                    type='submit'
                    style={{ boxShadow: "5px 5px 5px rgba(0, 0, 0, 0.5)" }}
                    className='w-full text-xl text-white font-semibold bg-slate-500 hover:bg-slate-600 duration-300
                 px-10 py-3 rounded'
                >
                    Submit
                </button>
            </form>
        </Container>
    );
};

export default ContactForm;