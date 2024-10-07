import React, { useState } from 'react';

const questions = [
    {
      id: 1,
      question: "What is the time complexity of Merge Sort in the worst case?",
      options: [
        { id: 'a', text: 'O(n)', correct: false },
        { id: 'b', text: 'O(n log n)', correct: true },
        { id: 'c', text: 'O(n^2)', correct: false },
        { id: 'd', text: 'O(log n)', correct: false },
      ],
    },
    {
      id: 2,
      question: "In which case does Quick Sort have its worst time complexity?",
      options: [
        { id: 'a', text: 'When the pivot is the median', correct: false },
        { id: 'b', text: 'When the pivot is the first or last element in a sorted or reverse-sorted array', correct: true },
        { id: 'c', text: 'When the array is already sorted in random order', correct: false },
        { id: 'd', text: 'When using a randomized pivot', correct: false },
      ],
    },
    {
      id: 3,
      question: "Which data structure is used to efficiently implement a priority queue?",
      options: [
        { id: 'a', text: 'Linked List', correct: false },
        { id: 'b', text: 'Binary Heap', correct: true },
        { id: 'c', text: 'Hash Table', correct: false },
        { id: 'd', text: 'Binary Search Tree', correct: false },
      ],
    },
  
    {
        id: 4,
        question: "Which searching algorithm works well with a sorted array and is typically used in practice for large datasets?",
        options: [
          { id: 'a', text: 'Linear Search', correct: false },
          { id: 'b', text: 'Binary Search', correct: true },
          { id: 'c', text: 'Interpolation Search', correct: false },
          { id: 'd', text: 'Jump Search', correct: false },
        ],
      },
      {
        id: 5,
        question: "What is the average time complexity of the Heap Sort algorithm?",
        options: [
          { id: 'a', text: 'O(n log n)', correct: true },
          { id: 'b', text: 'O(n)', correct: false },
          { id: 'c', text: 'O(n^2)', correct: false },
          { id: 'd', text: 'O(log n)', correct: false },
        ],
      },
      {
        id: 7,
        question: "What is the primary advantage of using a Binary Search Tree (BST) over a simple array for searching?",
        options: [
          { id: 'a', text: 'Binary Search Tree requires less space', correct: false },
          { id: 'b', text: 'Binary Search Tree can be sorted more easily', correct: false },
          { id: 'c', text: 'Binary Search Tree allows for O(log n) average time complexity for search, insert, and delete operations', correct: true },
          { id: 'd', text: 'Binary Search Tree always maintains the array in sorted order', correct: false },
        ],
      },
    ];
    

function Posttest() {
  const [answers, setAnswers] = useState({});

  const handleAnswerChange = (questionId, optionId) => {
    setAnswers(prevAnswers => ({
      ...prevAnswers,
      [questionId]: optionId,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Calculate score or handle submission logic here
    alert('Posttest submitted!');
  };

  return (
    <form onSubmit={handleSubmit}>
      {questions.map(question => (
        <fieldset key={question.id}>
          <legend>{question.question}</legend>
          {question.options.map(option => (
            <div key={option.id}>
              <label>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option.id}
                  checked={answers[question.id] === option.id}
                  onChange={() => handleAnswerChange(question.id, option.id)}
                />
                {option.text}
              </label>
            </div>
          ))}
        </fieldset>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
}

export default Posttest;
