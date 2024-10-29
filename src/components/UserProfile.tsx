import { useUserContext } from '@/context/UserContext';
import Image from 'next/image';
import React from 'react';

const UserProfile: React.FC = () => {

    const { user } = useUserContext()

    return (
        <div className="max-w-md mt-24 mx-auto p-6 bg-white dark:bg-gray-800 shadow-md rounded-lg transition duration-300">
            <div className="flex items-center mb-4">
                <Image
                    src="/profile-photo.jpg"
                    alt={`${user?.name}'s profile`}
                    width={0}
                    height={0}
                    sizes='100vw'
                    style={{ width: "100px", height: "100px" }}
                    priority
                    className="w-24 h-24 rounded-full border-2 border-gray-300 dark:border-gray-600 object-cover bg-center"
                />
                <div className="ml-4">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white">{user?.name}</h2>
                    <p className="text-gray-600 dark:text-gray-400">{user?.email}</p>
                </div>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">{user?.bio}</p>
            <button className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 dark:bg-blue-700 dark:hover:bg-blue-600 transition duration-300">
                Edit Profile
            </button>
        </div>
    );
};

export default UserProfile;
