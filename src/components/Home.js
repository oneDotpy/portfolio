// src/components/Home.js
import React, { useState, useEffect, useRef } from 'react';
import './Home.css'; // Import Home CSS

const Home = () => {
  const [text, setText] = useState(''); // State for typed text
  const [index, setIndex] = useState(0); // Track the current character index
  const [isTyping, setIsTyping] = useState(true); // Track if typing is ongoing

  const introduction = {
    fullText: "Hello, my name is ",
    name: "Ahnaf Keenan Ardhito", // Blue-colored name
    description: "I’m a second-year Computer Science student at the University of Toronto.",
    languages: ['[.py', '.java', '.html', '.css', '.js', '.c', '.cpp]'],
  };

  const typingSpeed = 100; // Typing speed in ms
  const pauseBetweenLoops = 2000; // Pause before resetting the typing effect

  const combinedText = introduction.fullText + introduction.name; // Full text to type

  // Ref to store the timeout ID to ensure proper cleanup
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (isTyping && index < combinedText.length) {
      // Type the next character
      timeoutRef.current = setTimeout(() => {
        setText((prev) => prev + combinedText.charAt(index));
        setIndex(index + 1); // Increment the index for the next character
      }, typingSpeed);
    } else if (index >= combinedText.length) {
      // Finished typing, wait and then reset the typing effect
      setIsTyping(false);
      timeoutRef.current = setTimeout(() => {
        setText(''); // Clear the text
        setIndex(0); // Reset the index
        setIsTyping(true); // Start typing again
      }, pauseBetweenLoops);
    }

    // Cleanup timeout on component unmount
    return () => clearTimeout(timeoutRef.current);
  }, [index, isTyping, combinedText]);

  const renderTypedText = () => {
    const regularText = text.slice(0, introduction.fullText.length); // Regular part
    const coloredText = text.slice(introduction.fullText.length); // Name part

    return (
      <>
        {regularText}
        <span className="highlight">{coloredText}</span>
      </>
    );
  };

  return (
    <div className="home" id="home">
      <div className="home-content">
        <h1 className="typewriter">
          {renderTypedText()}
          <span className="cursor">|</span>
        </h1>
        <p>{introduction.description}</p>
        <p>Languages I have used: {introduction.languages.join(', ')}</p>
        <button
        className="resume-btn"
        onClick={() => window.open("https://drive.google.com/file/d/1GjmrTvBRqP_ni6OcTj0bspdtRMWmEOjZ/view?usp=sharing", "_blank")}
        >
  Resume
</button>

      </div>
    </div>
  );
};

export default Home;
