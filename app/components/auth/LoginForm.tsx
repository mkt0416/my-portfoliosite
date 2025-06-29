
'use client'
import { useRouter } from 'next/navigation';
import { useContext, useState } from 'react'
import { AuthContext } from '@/app/context/AuthProvider';
import { FaUser } from 'react-icons/fa';
import AuthLoading from './AuthLoading';
import FormArea from './FormArea';

const LoginForm = () => {
    const router = useRouter();
    const [loading, setLoading] = useState<boolean>(false);
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
                ? <AuthLoading text='ログイン中です。しばらくお待ちください。' />
                : <>
                    <div className='flex items-center gap-2 text-xl text-gray-600 dark:text-white mb-5'>
                        <FaUser />
                        <h1>ログイン</h1>
                    </div>
                    <FormArea
                        type='login'
                        loading={loading}
                        setters={{
                            setUsername,
                            setPassword
                        }}
                        errors={{
                            nameErrText,
                            passwordErrText
                        }}
                        handleSubmit={handleSubmit}
                    />
                </>
            }
        </div>
    );
};

export default LoginForm;