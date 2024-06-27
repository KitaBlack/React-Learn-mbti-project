import React, { useEffect, useState } from "react";
import Progess from "../components/Progess";
import Question from "../components/Question";
import Answer from "../components/Answer";
import { initialMbtiAnswer, initialMbtiQuestion } from "../data/initialState";
import { mbtiAnswerList, mbtiQuestionList } from "./../data/response";

const Test = () => {
  // logic
  const [currentStep, setCurrentStep] = useState(1);
  const [mbtiQuestion, setmbtiQuestion] = useState(initialMbtiQuestion);
  const [mbtiAnswer, setMbtiAnswer] = useState(initialMbtiAnswer);

  const { step, questionText } = mbtiQuestion;

  const handleAnswerClick = () => {
    setCurrentStep(currentStep + 1);
  };

  // 원하는 state 감시
  useEffect(() => {
    // state 변경 시 실행 될 실행문
    // question 데이터 변경
    const nextQuestion = mbtiQuestionList.find(
      (item) => item.step === currentStep
    ); // undefined

    nextQuestion && setmbtiQuestion(nextQuestion);

    // answer 데이터 변경
    const NextAnswer = mbtiAnswerList.find(
      (answer) => answer.questionStep === currentStep
    );
    NextAnswer && setMbtiAnswer(NextAnswer);
  }, [currentStep]);

  // useEffect(() => {
  //   console.log("init", mbtiQuestion);
  // }, [mbtiQuestion]);

  // answer 버튼 클릭 이벤트 잡기
  // mbtiQuestion.step 값 변경

  // view
  return (
    <section className="h-full py-12 flex flex-col justify-between">
      {/* START: Progress 컴포넌트 */}
      <Progess />
      {/* END: Progress 컴포넌트 */}
      {/* START: Question 컴포넌트 */}
      <Question text={questionText} step={step} />
      {/* END: Question 컴포넌트 */}
      {/* START: Answer 컴포넌트 */}
      <Answer data={mbtiAnswer} onAnswerClick={handleAnswerClick} />
      {/* END: Answer 컴포넌트 */}
    </section>
  );
};

export default Test;
