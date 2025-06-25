
'use client'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';

const RegisterForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState<boolean>(false);
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [nameErrText, setNameErrText] = useState<string>('');
    const [passwordErrText, setPasswordErrText] = useState<string>('');
    const [confirmErrText, setConfirmErrText] = useState<string>('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setNameErrText('');
        setPasswordErrText('');
        setConfirmErrText('');

        let error = false;

        if (username === '') {
            error = true;
            setNameErrText('ユーザー名を入力してください');
        }
        if (password === '') {
            error = true;
            setPasswordErrText('パスワードを入力してください');
        }
        if (confirmPassword === '') {
            error = true;
            setConfirmErrText('確認用パスワードを入力してください');
        }
        if (password !== confirmPassword) {
            error = true;
            setConfirmErrText('パスワードと確認用パスワードが異なります');
        }

        if (error) return;

        setLoading(true);

        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/auth/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username,
                    password,
                    confirmPassword,
                })
            });
            const jsonData = await response.json();
            if (response.ok) {
                alert(jsonData.message);
                router.push('/login');
            } else {
                const errors = jsonData.errors;
                errors.forEach((err: any) => {
                    if (err.path === 'username') {
                        setNameErrText(err.msg);
                    }
                    if (err.path === 'password') {
                        setPasswordErrText(err.msg);
                    }
                    if (err.path === 'confirmPassword') {
                        setConfirmErrText(err.msg);
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
                  dark:bg-gray-400 dark:placeholder:text-white
                    ${nameErrText ? '' : 'mb-6'}
                    ${nameErrText ? 'border-red-500' : 'border-gray-300'}`}
                    onChange={(e) => setUsername(e.target.value)}
                    name='username'
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

                <div className='relative'>
                    <input
                        disabled={loading}
                        className={`w-full rounded py-3 px-4 border border-gray-300 focus:outline-blue-500 
                      dark:bg-gray-400 dark:placeholder:text-white
                        ${confirmErrText ? '' : 'mb-6'}
                        ${confirmErrText ? 'border-red-500' : 'border-gray-300'}`}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        name='confirmPassword'
                        placeholder='確認用パスワード'
                        required
                        type={showConfirmPassword ? 'text' : 'password'}
                    />
                    {confirmErrText !== '' && (
                        <p className='my-2 text-sm text-red-500'>※{confirmErrText}</p>
                    )}
                    <button
                        className='absolute top-4 right-4'
                        type='button'
                        onClick={() => setConfirmShowPassword(!showConfirmPassword)}
                    >
                        {showConfirmPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
                    </button>
                </div>

                <button
                    disabled={loading}
                    className='w-full py-2 border border-blue-400 rounded text-blue-500 hover:bg-blue-50 duration-300 mb-4'
                    type='submit'
                >
                    {loading ? '登録中...' : 'アカウント作成'}
                </button>
            </form>
            <Link
                className='text-blue-500 text-sm p-2 hover:bg-blue-50 duration-300'
                href='/login'>
                アカウントをもっていますか？ログイン
            </Link>
        </div>
    );
};

export default RegisterForm;