import React, {useState, useEffect} from "react";

import apiService from "../ApiService/index.js";

export default function TriviaQuiz() {
  const [question, setQuestion] = useState(null);
  const [answerText, setAnswerText] = useState("");
  const [answer, setAnswer] = useState(null);
  const [answerStatus, setAnswerStatus] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [loadNext, setLoadNext] = useState(false);

  useEffect(() =>{ 
  (async() => 
    {
      try{
        setIsLoading(true);
        setAnswerStatus(null);
        const res = await apiService();
        if(res && res.length > 0) {
          const {question: questionFromResponse, answer: answerFromResponse} = res.find(x => x.question);
          questionFromResponse && setQuestion(questionFromResponse);
          answerFromResponse && setAnswer(answerFromResponse);
        }
        console.log(res)
        setIsLoading(false);
      }catch(err) {
        console.log(err);
        setIsLoading(false);
        setAnswerStatus(null);
      }
    }
    )();
  },[loadNext])

  const verifyAnswer = answerText => {
    if(answerText === answer) setAnswerStatus("Kudos! That's absolutely correct")
    else setAnswerStatus("Sorry, thats incorrect !")
    setTimeout(() => setLoadNext(x => !x), 3000);
  }

  return (
    <div>
      <h1> Welcome to the Trivia Quiz </h1>
      <div>
        {isLoading?"Loading Question...": question ? `Q: ${question}` : null}
      </div>
      {!answerStatus ? (
        <>
          <input type="textarea" 
            placeholder={!isLoading ? "Please enter your answer here...": ""}
            value={answerText}
            disabled={isLoading}
            onChange={e => setAnswerText(e.target.value)}
          />
          <div>
            <button 
              onClick={() => {
                verifyAnswer(answerText); 
                setAnswerText("");
              }} 
              disabled={!answerText || isLoading}>
              Submit
            </button>
          </div>
        </>
        ): 
        <div style={{marginTop:"2rem", fontSize:"larger"}}>
          {answerStatus}
        </div>
      }
    </div>
  );
}