import React, { useState, useEffect } from 'react';

const VoiceAssistant = () => {
  const [listening, setListening] = useState(false);
  const [transcript, setTranscript] = useState('');

  useEffect(() => {
    if (listening) {
      startListening();
    } else {
      stopListening();
    }
  }, [listening]);

  const startListening = () => {
    const recognition = new window.SpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      let interimTranscript = '';
      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcriptChunk = event.results[i][0].transcript;
        if (event.results[i].isFinal) {
          setTranscript((prev) => prev + transcriptChunk);
        } else {
          interimTranscript += transcriptChunk;
        }
      }
      console.log(interimTranscript); // Use this for interim transcript display if needed
    };

    recognition.start();

    recognition.onend = () => {
      if (listening) {
        recognition.start();
      }
    };
  };

  const stopListening = () => {
    window.SpeechRecognition.stop();
  };

  const handleToggleListening = () => {
    setListening((prevListening) => !prevListening);
  };

  return (
    <div>
      <h2>Voice Assistant</h2>
      <button onClick={handleToggleListening}>
        {listening ? 'Stop Listening' : 'Start Listening'}
      </button>
      <p>{transcript}</p>
    </div>
  );
};

export default VoiceAssistant;
