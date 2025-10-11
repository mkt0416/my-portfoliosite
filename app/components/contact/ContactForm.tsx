
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
            <SubTitle
                text='Contact'
                description='ここまでご覧いただきありがとうございます。応援やフィードバックも大歓迎です。以下のフォームよりお気軽にどうぞ！'
            />
            <form
                onSubmit={sendEmail}
                ref={form}
                className='mt-10'
            >
                <input
                    className='w-full dark:bg-gray-400 dark:placeholder:text-white border border-gray-300 rounded px-4 py-3 mb-5 outline-none'
                    type="text"
                    name='name'
                    placeholder='お名前'
                    required
                />
                <input
                    className='w-full dark:bg-gray-400 dark:placeholder:text-white border border-gray-300 rounded px-4 py-3 mb-5 outline-none'
                    type="email"
                    name='email'
                    placeholder='メールアドレス'
                    required
                />
                <input
                    className='w-full dark:bg-gray-400 dark:placeholder:text-white border border-gray-300 rounded px-4 py-3 mb-5 outline-none'
                    type="text"
                    name='subject'
                    placeholder='タイトル'
                    required
                />
                <textarea
                    className='w-full dark:bg-gray-400 dark:placeholder:text-white border border-gray-300 rounded px-4 py-3 mb-5 outline-none'
                    name='message'
                    placeholder='メッセージ'
                    rows={12}
                    required
                />
                <button
                    type='submit'
                    className='w-full text-xl text-white font-semibold bg-gray-500 hover:bg-gray-600 duration-300
                    px-10 py-3 rounded shadow-xl'
                >
                    送信
                </button>
            </form>
        </Container>
    );
};

export default ContactForm;