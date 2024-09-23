import React from 'react';

const HomePage = () => {
    return (
        <div>
            <header>
                <h1>Welcome to Our Hotel</h1>
            </header>
            <main>
                <section>
                    <h2>About Us</h2>
                    <p>Experience luxury and comfort at our hotel. We offer the best services to make your stay memorable.</p>
                </section>
                <section>
                    <h2>Our Services</h2>
                    <ul>
                        <li>24/7 Room Service</li>
                        <li>Free Wi-Fi</li>
                        <li>Spa and Wellness Center</li>
                        <li>Swimming Pool</li>
                        <li>Restaurant and Bar</li>
                    </ul>
                </section>
            </main>
            <footer>
                <p>&copy; 2023 Our Hotel. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default HomePage;
