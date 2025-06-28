
'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react'
import { AuthContext } from '@/app/context/AuthProvider';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { FaUser } from 'react-icons/fa';
import AuthLoading from '../common/AuthLoading';

const LoginForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [nameErrText, setNameErrText] = useState<string>('');
    const [passwordErrText, setPasswordErrText] = useState<string>('');
    const context = useContext(AuthContext);

    if (!context) return null;

    const { setCurrentUser, setLoggedIn } = context;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setNameErrText('');
        setPasswordErrText('');

        let error = false;

        if (username === '') {
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
                    username,
                    password,
                })
            });
            const jsonData = await response.json();
            if (response.ok) {
                localStorage.setItem('token', jsonData.token);
                setCurrentUser(jsonData.user);
                setLoggedIn(true);
                router.push('/');
            } else {
                const errors = jsonData.errors;
                errors.forEach((err: any) => {
                    if (err.path === 'username') {
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
        <div className='mt-32'>
            {loading
                ? (
                    <AuthLoading text='ログイン中です。しばらくお待ちください。' />
                )
                : (
                    <>
                        <div className='flex items-center gap-2 text-xl text-gray-600 dark:text-white mb-5'>
                            <FaUser />
                            <h1>ログイン</h1>
                        </div>
                        <form
                            onSubmit={handleSubmit}
                            noValidate
                        >
                            <input
                                disabled={loading}
                                className={`w-full rounded py-3 px-4 border border-gray-300 focus:outline-blue-500
                              dark:bg-gray-400 dark:placeholder:text-white
                                ${nameErrText ? '' : 'mb-6'}
                                ${nameErrText ? 'border-red-500' : 'border-gray-300'}`}
                                onChange={(e) => setUsername(e.target.value)}
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
                                  dark:bg-gray-400 dark:placeholder:text-white
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
                                className='w-full py-2 border border-blue-400 rounded text-blue-500 hover:bg-blue-50 duration-300 mb-4'
                                type='submit'
                            >
                                ログイン
                            </button>
                        </form>
                        <div className='flex justify-between'>
                            <Link
                                className='text-blue-500 text-sm p-2 hover:bg-blue-50 duration-300'
                                href='/auth/register'
                            >
                                アカウントをもっていませんか？新規登録
                            </Link>
                            <Link
                                className='text-blue-500 text-sm p-2 hover:bg-blue-50 duration-300'
                                href='/'
                            >
                                ホームへ戻る
                            </Link>
                        </div>
                    </>
                )
            }
        </div>
    );
};

export default LoginForm;