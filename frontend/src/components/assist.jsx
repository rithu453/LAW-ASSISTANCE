import React, { useState } from 'react';
import './assist.css'; // Import the CSS file for styling
import axios from 'axios';

const ChatInterface = () => {
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(null);

        try {
            const response = await axios.post('', {//change link here
                query: question
            });

            // Split response into sentences and join with new lines
            const formattedAnswer = response.data.answer.split('. ').join('.\n');
            setAnswer(formattedAnswer);
        } catch (err) {
            setError('Error fetching response from backend.');
            console.error('Error:', err);
        }

        setLoading(false);
        setQuestion('');
    };

    return (
        <div className="chat-interface">
            <div className="chat-container">
                <div className="chat-box">
                    <form onSubmit={handleSubmit} className="form">
                        <textarea
                            className="question-input"
                            placeholder="Ask your question here..."
                            value={question}
                            onChange={(e) => setQuestion(e.target.value)}
                            required
                        />
                        <button type="submit" className="submit-button" disabled={loading}>
                            {loading ? 'Loading...' : 'Submit'}
                        </button>
                    </form>
                </div>
                <div className="response-box">
                    <div className="response-container">
                        {error && <div className="error-message">{error}</div>}
                        {answer && (
                            <>
                                <div className="response-header">Response:</div>
                                <div className="response-text" style={{ whiteSpace: 'pre-wrap' }}>{answer}</div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatInterface;
