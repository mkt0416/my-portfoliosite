
'use client'
import React, { useContext, useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { AuthContext } from '@/app/context/AuthProvider';

const LoginForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [nameErrText, setNameErrText] = useState<string>('');
    const [passwordErrText, setPasswordErrText] = useState<string>('');
    const context = useContext(AuthContext);

    if (!context) return null;

    const { setCurrentUser } = context;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setNameErrText('');
        setPasswordErrText('');

        let error = false;

        if (name === '') {
            error = true;
            setNameErrText('ユーザー名を入力してください');
        }
        if (password === '') {
            error = true;
            setPasswordErrText('パスワードを入力してください');
        }

        if (error) return;

        setLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/login`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name,
                    password,
                })
            });
            const jsonData = await response.json();
            if (response.ok) {
                localStorage.setItem('token', jsonData.token);
                setCurrentUser(jsonData.user);
                alert(jsonData.message);
                router.push('/');
            } else {
                const errors = jsonData.errors;
                errors.forEach((err: any) => {
                    if (err.path === 'name') {
                        setNameErrText(err.msg);
                    }
                    if (err.path === 'password') {
                        setPasswordErrText(err.msg);
                    }
                });
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className='mt-5'>
            <form
                onSubmit={handleSubmit}
                noValidate
            >
                <input
                    disabled={loading}
                    className={`w-full rounded py-3 px-4 border border-gray-300 focus:outline-blue-500 
                    ${nameErrText ? '' : 'mb-6'}
                    ${nameErrText ? 'border-red-500' : 'border-gray-300'}`}
                    onChange={(e) => setName(e.target.value)}
                    name='name'
                    placeholder='お名前'
                    required
                />
                {nameErrText !== '' && (
                    <p className='my-2 text-sm text-red-500'>※{nameErrText}</p>
                )}

                <div className='relative'>
                    <input
                        disabled={loading}
                        className={`w-full rounded py-3 px-4 border border-gray-300 focus:outline-blue-500 
                        ${passwordErrText ? '' : 'mb-6'}
                        ${passwordErrText ? 'border-red-500' : 'border-gray-300'}`}
                        onChange={(e) => setPassword(e.target.value)}
                        name='password'
                        placeholder='パスワード'
                        required
                        type={showPassword ? 'text' : 'password'}
                    />
                    {passwordErrText !== '' && (
                        <p className='my-2 text-sm text-red-500'>※{passwordErrText}</p>
                    )}
                    <button
                        className='absolute top-4 right-4'
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
                    </button>
                </div>

                <button
                    disabled={loading}
                    className='w-full py-2 bg-white border border-blue-400 rounded text-blue-500 hover:bg-blue-50 duration-300 mb-4'
                    type='submit'
                >
                    {loading ? 'ログイン中...' : 'ログイン'}
                </button>
            </form>
            <Link
                className='text-blue-500 text-sm p-2 hover:bg-blue-50 duration-300'
                href='/register'>
                アカウントをもっていませんか？新規登録
            </Link>
        </div>
    );
};

export default LoginForm;