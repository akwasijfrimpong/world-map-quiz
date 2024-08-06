import { useState } from "react";
import Countdown from "react-countdown";

export default function Timer(props) {
  const [quizStarted, setQuizStarted] = useState(false);
  const [endTime, setEndTime] = useState(Date.now());

  const pad = (num, size) => String(num).padStart(size, "0");
  const renderer = ({ minutes, seconds }) => (
    <p className="font-bold text-red-900 text-2xl pr-5">
      {pad(minutes, 2)}:{pad(seconds, 2)}
    </p>
  );

  const startQuiz = () => {
    setEndTime(Date.now() + 900000); // 15 minutes from now
    setQuizStarted(true);
    props.gameStartedFunction();
  };
  const endQuiz = () => {
    setEndTime(Date.now() + 900000); // 15 minutes from now
    setQuizStarted(false);
    props.gameEndedFunction();
  };

  return (
    <div className="flex ">
      {quizStarted && (
        <Countdown
          date={endTime}
          zeroPadTime={2}
          zeroPadDays={2}
          renderer={renderer}
          className="text-red-900 font-bold text-xl"
        />
      )}
      {!quizStarted && (
        <div className="pb-3">
          <button
            className="btn btn-primary bg-green-700 w-[150px] h-[35px] rounded-md text-white"
            onClick={startQuiz}
          >
            Start Game
          </button>
        </div>
      )}
      {quizStarted && (
        <div className="pb-3">
          <button
            className="btn btn-primary bg-red-700 w-[150px] h-[35px] rounded-md text-white"
            onClick={endQuiz}
          >
            Give Up
          </button>
        </div>
      )}
    </div>
  );
}
