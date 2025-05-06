
'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { FaUser } from "react-icons/fa";
import { TextField, Button } from '@mui/material';

const Page = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
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

        if (name === '') {
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
                    name,
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
                    if (err.path === 'name') {
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
        <div className='w-full max-w-screen-sm mx-auto px-8'>
            <div className='my-28'>
                <div className='flex items-center gap-2 text-xl text-gray-600'>
                    <FaUser />
                    <h1>ユーザー登録</h1>
                </div>
                <form
                    onSubmit={handleSubmit}
                    noValidate
                >
                    <TextField
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        margin='normal'
                        label='お名前'
                        name='name'
                        required
                        helperText={nameErrText}
                        error={nameErrText !== ''}
                    />
                    <div className='relative'>
                        <TextField
                            onChange={(e) => setPassword(e.target.value)}
                            fullWidth
                            margin='normal'
                            label='パスワード'
                            name='password'
                            required
                            type={showPassword ? 'text' : 'password'}
                            helperText={passwordErrText}
                            error={passwordErrText !== ''}
                        />
                        <button
                            className='absolute top-8 right-4'
                            type='button'
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
                        </button>
                    </div>
                    <div className='relative'>
                        <TextField
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            fullWidth
                            margin='normal'
                            label='確認用パスワード'
                            name='confirmPassword'
                            required
                            type={showConfirmPassword ? 'text' : 'password'}
                            helperText={confirmErrText}
                            error={confirmErrText !== ''}
                        />
                        <button
                            className='absolute top-8 right-4'
                            type='button'
                            onClick={() => setConfirmShowPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
                        </button>
                    </div>
                    <Button
                        type='submit'
                        variant='outlined'
                        fullWidth
                        sx={{ mt: 3, mb: 2 }}
                        loading={loading}
                    >
                        アカウント作成
                    </Button>
                </form>
                <Button component={Link} href='/login'>
                    アカウントをもっていますか？ログイン
                </Button>
            </div>
        </div>
    );
};

export default Page;