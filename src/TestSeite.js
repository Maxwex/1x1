import React, {useState} from 'react';
import { FaRocket, FaCar, FaFish, FaGamepad, FaStar } from 'react-icons/fa';

const Testseite = () => {
    const [isPressed, setPressed] = useState(false);

    const handlePress = () => {
        setPressed(true);
    };

    const handleRelease = () => {
        setPressed(false);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-yellow-300 p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">3D-Buttons</h1>
            <div className="flex space-x-4 mb-8">
                <button
                    className={`px-6 py-3 bg-blue-500 transform hover:shadow-md transition duration-300 ease-in-out ${
                        isPressed ? 'translate-y-1' : ''
                    }`}
                    onMouseDown={handlePress}
                    onMouseUp={handleRelease}
                    onMouseLeave={handleRelease}
                >
                    Button 1
                </button>
                <button
                    className={`px-6 py-3 bg-green-500 transform hover:shadow-md hover:rotate-3 transition duration-300 ease-in-out ${
                        isPressed ? 'translate-y-1' : ''
                    }`}
                    onMouseDown={handlePress}
                    onMouseUp={handleRelease}
                    onMouseLeave={handleRelease}
                >
                    Button 2
                </button>
                <button
                    className={`px-6 py-3 bg-yellow-500 transform hover:shadow-lg hover:-translate-y-1 transition duration-300 ease-in-out ${
                        isPressed ? 'translate-y-1' : ''
                    }`}
                    onMouseDown={handlePress}
                    onMouseUp={handleRelease}
                    onMouseLeave={handleRelease}
                >
                    Button 3
                </button>
            </div>
            <div className="flex space-x-4">
                <button
                    className={`px-6 py-3 bg-purple-500 transform hover:shadow-inner hover:skew-y-6 transition duration-300 ease-in-out ${
                        isPressed ? 'translate-y-1' : ''
                    }`}
                    onMouseDown={handlePress}
                    onMouseUp={handleRelease}
                    onMouseLeave={handleRelease}
                >
                    Button 4
                </button>
                <button
                    className={`px-6 py-3 bg-red-500 transform hover:shadow-lg hover:rotate-3 transition duration-300 ease-in-out ${
                        isPressed ? 'translate-y-1' : ''
                    }`}
                    onMouseDown={handlePress}
                    onMouseUp={handleRelease}
                    onMouseLeave={handleRelease}
                >
                    Button 5
                </button>
                <button
                    className={`px-6 py-3 bg-indigo-500 transform hover:shadow-md hover:translate-y-1 transition duration-300 ease-in-out ${
                        isPressed ? 'translate-y-1' : ''
                    }`}
                    onMouseDown={handlePress}
                    onMouseUp={handleRelease}
                    onMouseLeave={handleRelease}
                >
                    Button 6
                </button>
            </div>
        </div>
    );
}

export default Testseite;
