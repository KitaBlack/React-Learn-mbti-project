import React from "react";

const Answer = ({ data, onAnswerClick }) => {
  // logic
  console.log("data", data);

  const { answerList } = data;

  const handleClick = () => {
    onAnswerClick();
  };

  // view
  return (
    <div>
      {answerList.map((answer, index) => (
        <div key={index} className="py-2">
          <button
            type="button"
            className="block w-full p-4 rounded-xl bg-white border-2 border-black"
            onClick={handleClick}
          >
            {answer.text}
          </button>
        </div>
      ))}
      {/* <div className="py-2">
        <button
          type="button"
          className="block w-full p-4 rounded-xl bg-white border-2 border-black"
          onClick={handleClick}
        >
          꺄아! 당연히 가서 떼창도 하고 다른 팬들이랑 같이 즐겨야지!
        </button>
      </div>
      <div className="py-2">
        <button
          type="button"
          className="block w-full p-4 rounded-xl bg-white border-2 border-black"
          onClick={handleClick}
        >
          선재가 날 초대해 주다니..오로지 선재에게만 집중하고 싶어
        </button>
      </div> */}
    </div>
  );
};

export default Answer;
