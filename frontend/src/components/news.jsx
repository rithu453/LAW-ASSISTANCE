import React, { useEffect, useState } from 'react';

const News = () => {
    const [headlines, setHeadlines] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/news')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setHeadlines(data))
            .catch(error => setError(`Error fetching news: ${error.message}`));
    }, []);

    return (
        <div>
            <h1>News Headlines</h1>
            {error && <p>{error}</p>}
            <ul>
                {headlines.map((headline, index) => (
                    <li key={index} style={{ marginBottom: '20px' }}>
                        <a href={headline.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
                            {headline.image && <img src={headline.image} alt={headline.text} style={{ width: '300px', height: 'auto', marginRight: '10px' }} />}
                            <span>{headline.text}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default News;
