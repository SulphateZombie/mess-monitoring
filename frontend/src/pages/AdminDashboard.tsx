import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();

    // Simulated state that admin can view and change
    const currentPeople = 85;
    const [mealType, setMealType] = useState('Lunch');
    const [dayStatus, setDayStatus] = useState('Normal Day');

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className="flex-col h-screen" style={{ overflowY: 'auto', backgroundColor: 'var(--color-white)' }}>
            {/* Navbar */}
            <nav className="navbar">
                <h2>Mess Monitoring System - Admin Panel</h2>
                <button onClick={handleLogout} className="btn btn-outline" style={{ padding: '0.5rem 1rem' }}>
                    Logout
                </button>
            </nav>

            {/* Main Content */}
            <main className="container p-6 flex flex-col" style={{ gap: '3rem' }}>
                <h1 className="mb-6">Admin Dashboard</h1>

                {/* Current Status Section */}
                <section className="card" >
                    <h2 className="mb-4">Current Status</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="flex-col justify-center">
                            <span style={{ fontWeight: 600, opacity: 0.8 }}>Current People:</span>
                            <div style={{ fontSize: '2.5rem', fontWeight: 700, color: 'var(--color-dark-blue)' }}>
                                {currentPeople}
                            </div>
                        </div>

                        <div className="flex-col justify-center">
                            <span style={{ fontWeight: 600, opacity: 0.8, marginBottom: '8px' }}>Current Meal Type:</span>
                            <span className="badge badge-outline" style={{ alignSelf: 'flex-start', fontSize: '1rem' }}>
                                {mealType}
                            </span>
                        </div>

                        <div className="flex-col justify-center">
                            <span style={{ fontWeight: 600, opacity: 0.8, marginBottom: '8px' }}>Current Day Status:</span>
                            <span className="badge badge-solid" style={{ alignSelf: 'flex-start', fontSize: '1rem' }}>
                                {dayStatus}
                            </span>
                        </div>
                    </div>
                </section>

                {/* Controls Section */}
                <section className="card">
                    <h2 className="mb-6">Controls</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Meal Type Toggles */}
                        <div className="flex-col gap-2">
                            <label htmlFor="mealType" style={{ fontSize: '1.2rem', fontWeight: 600 }}>Change Meal Type</label>
                            <select
                                id="mealType"
                                className="input"
                                value={mealType}
                                onChange={(e) => setMealType(e.target.value)}
                                style={{ cursor: 'pointer', padding: '1rem', fontSize: '1.1rem' }}
                            >
                                {['Breakfast', 'Lunch', 'Snacks', 'Dinner'].map(meal => (
                                    <option key={meal} value={meal}>{meal}</option>
                                ))}
                            </select>
                        </div>

                        {/* Special Day Toggles */}
                        <div className="flex-col gap-2">
                            <label htmlFor="dayStatus" style={{ fontSize: '1.2rem', fontWeight: 600 }}>Toggle Special Day</label>
                            <select
                                id="dayStatus"
                                className="input"
                                value={dayStatus}
                                onChange={(e) => setDayStatus(e.target.value)}
                                style={{ cursor: 'pointer', padding: '1rem', fontSize: '1.1rem' }}
                            >
                                {['Normal Day', 'Exam Day', 'Feast', 'Holiday'].map(day => (
                                    <option key={day} value={day}>{day}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </section>

                <section className="card">
                    <div className="grid md:grid-cols-2 gap-8"></div>
                    <div className="mt-8 pt-6">
                        <button className="btn" style={{ padding: '1rem 2rem' }} onClick={() => alert('Opening Historical Data Modal/Page...')}>
                            View Historical Data
                        </button>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default AdminDashboard;
