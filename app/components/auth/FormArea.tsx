
'use client'
import { Dispatch, SetStateAction, useState } from "react";
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import SubmitButton from "./SubmitButton";
import LinkButton from "./LinkButton";

type Props = {
    type: 'login' | 'register';
    loading: boolean;
    setters: {
        setUsername: Dispatch<SetStateAction<string>>;
        setPassword: Dispatch<SetStateAction<string>>;
        setConfirmPassword?: Dispatch<SetStateAction<string>>;
    };
    errors: {
        nameErrText: string;
        passwordErrText: string;
        confirmErrText?: string;
    };
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
};

const FormArea = ({
    type,
    loading,
    setters,
    errors,
    handleSubmit }: Props) => {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState<boolean>(false);

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
                    ${errors.nameErrText ? '' : 'mb-6'}
                    ${errors.nameErrText ? 'border-red-500' : 'border-gray-300'}`}
                    onChange={(e) => setters.setUsername(e.target.value)}
                    name='username'
                    placeholder='お名前'
                    required
                />
                {errors.nameErrText !== '' && (
                    <p className='my-2 text-sm text-red-500'>※{errors.nameErrText}</p>
                )}
                <div className='relative'>
                    <input
                        disabled={loading}
                        className={`w-full rounded py-3 px-4 border border-gray-300 focus:outline-blue-500 
                      dark:bg-gray-400 dark:placeholder:text-white
                        ${errors.passwordErrText ? '' : 'mb-6'}
                        ${errors.passwordErrText ? 'border-red-500' : 'border-gray-300'}`}
                        onChange={(e) => setters.setPassword(e.target.value)}
                        name='password'
                        placeholder='パスワード'
                        required
                        type={showPassword ? 'text' : 'password'}
                    />
                    {errors.passwordErrText !== '' && (
                        <p className='my-2 text-sm text-red-500'>※{errors.passwordErrText}</p>
                    )}
                    <button
                        className='absolute top-4 right-4'
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                    >
                        {showPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
                    </button>
                </div>
                {type === 'register' && (
                    <div className='relative'>
                        <input
                            disabled={loading}
                            className={`w-full rounded py-3 px-4 border border-gray-300 focus:outline-blue-500 
                          dark:bg-gray-400 dark:placeholder:text-white
                           ${errors.confirmErrText ? '' : 'mb-6'}
                           ${errors.confirmErrText ? 'border-red-500' : 'border-gray-300'}`}
                            onChange={(e) => setters.setConfirmPassword?.(e.target.value)}
                            name='confirmPassword'
                            placeholder='確認用パスワード'
                            required
                            type={showConfirmPassword ? 'text' : 'password'}
                        />
                        {errors.confirmErrText !== '' && (
                            <p className='my-2 text-sm text-red-500'>※{errors.confirmErrText}</p>
                        )}
                        <button
                            className='absolute top-4 right-4'
                            type='button'
                            onClick={() => setConfirmShowPassword(!showConfirmPassword)}
                        >
                            {showConfirmPassword ? <IoMdEye size={20} /> : <IoMdEyeOff size={20} />}
                        </button>
                    </div>
                )}
                <SubmitButton
                    text={type === 'register' ? 'アカウント作成' : 'ログイン'}
                    loading={loading}
                />
                <LinkButton
                    href={type === 'register' ? '/auth/login' : '/auth/register'}
                    text={type === 'register' ? 'アカウントをもっていますか？ログイン' : 'アカウントをもっていませんか？新規登録'} />
            </form>
        </div>
    );
};

export default FormArea;