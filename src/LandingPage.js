import React from 'react';
import { Link } from 'react-router-dom';


function LandingPage() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-purple-50 p-8">
            <div className="text-6xl mb-8">🎯</div>
            <h1 className="text-3xl text-center font-bold text-purple-800 mb-8">
                Willkommen beim <span className="font-bold text-4xl text-blue-500">1-mal-1</span> <br/> Lernspiel!
            </h1>
            <p className="text-2xl text-center text-gray-800 mb-8">Tippe auf 'Start', um loszulegen! 🚀</p>
            <Link to="/home">
                <button className="bg-purple-500 hover:bg-purple-600 text-white py-3 px-8 rounded-lg text-2xl">
                    Start
                </button>
            </Link>
        </div>

    );
}

export default LandingPage;

