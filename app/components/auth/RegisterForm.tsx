
'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react'
import FormArea from './FormArea';
import { FaUser } from 'react-icons/fa';
import AuthLoading from './AuthLoading';

const RegisterForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
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
                router.push('/auth/login');
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
        <div className='mt-32'>
            {loading
                ? <AuthLoading text='アカウント作成中です。しばらくお待ちください。' />
                : <>
                    <div className='flex items-center gap-2 text-xl text-gray-600 dark:text-white mb-5'>
                        <FaUser />
                        <h1>ユーザー登録</h1>
                    </div>
                    <FormArea
                        type='register'
                        loading={loading}
                        setters={{
                            setUsername,
                            setPassword,
                            setConfirmPassword,
                        }}
                        errors={{
                            nameErrText,
                            passwordErrText,
                            confirmErrText,
                        }}
                        handleSubmit={handleSubmit}
                    />
                </>
            }
        </div>
    );
};

export default RegisterForm;