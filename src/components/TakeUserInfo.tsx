import { useUserContext } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import React, { useId, useState } from 'react';

const TakeUserInfo: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');

    const router = useRouter();

    const { setUser } = useUserContext()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        setUser({ name, email, bio: bio ? bio : "Software engineer with a passion for building scalable applications." })
        router.replace("/profile")
    };

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleSubmit}
                className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-6 w-full max-w-sm">

                <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white mb-4">User Info</h2>

                <InputBox type='text' label="Full Name" value={name} onChange={setName}></InputBox>
                <InputBox type='email' label='Email Address' value={email} onChange={setEmail}></InputBox>
                <InputBox type='text' label='Bio' value={bio} onChange={setBio}></InputBox>

                <button type="submit"
                    className="w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600 transition duration-300">
                    Next
                </button>
            </form>
        </div>
    );
};

export default TakeUserInfo;

interface InputProps {
    type: string;
    label: string;
    value: string;
    onChange: (currentValue: string) => void;
    required?: boolean;
}

export const InputBox: React.FC<InputProps> = ({ type, label, value, onChange, required, }) => {
    const inputId = useId()
    return (
        <div className="mb-4">
            <label htmlFor={inputId} className="block text-gray-700 dark:text-gray-300 mb-1">{label}</label>
            <input
                type={type}
                id={inputId}
                value={value}
                placeholder={label}
                onChange={(e) => onChange(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg text-gray-700 focus:outline-none focus:ring focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white"
                required={required}
            />
        </div>
    );
};

