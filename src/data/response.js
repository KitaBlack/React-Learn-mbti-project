export const mbtiQuestionList = [
  {
    id: 1,
    step: 1,
    nextStep: 2,
    questionType: "EI",
    firstType: "E",
    lastType: "I",
    questionText: "선재가 이클립스 공연에 당신을 초대한다면?",
  },
  {
    id: 2,
    step: 2,
    nextStep: 3,
    questionType: "EI",
    firstType: "E",
    lastType: "I",
    questionText: "사랑하는 사람에게 하고 싶은 말은?",
  },
  {
    id: 3,
    step: 3,
    nextStep: 4,
    questionType: "NS",
    firstType: "N",
    lastType: "S",
    questionText: "임솔처럼 과거로 돌아갈 수 있다면?",
  },
];

export const mbtiAnswerList = [
  {
    id: 1,
    questionStep: 1,
    questionNextStep: 2,
    questionType: "EI",
    answerList: [
      {
        code: 0,
        type: "E",
        text: "꺄아! 당연히 가서 떼창도 하고 다른 팬들이랑 같이 즐겨야지!",
      },
      {
        code: 1,
        type: "I",
        text: "선재가 날 초대해 주다니..오로지 선재에게만 집중하고 싶어",
      },
    ],
  },
  {
    id: 2,
    questionStep: 2,
    questionNextStep: 3,
    questionType: "EI",
    answerList: [
      {
        code: 0,
        type: "E",
        text: "네가 내 별이다. 너라는 존재 자체가 나에게 큰 의미야",
      },
      {
        code: 1,
        type: "I",
        text: "우리 서로에게 좋은 영향을 주는 관계가 되자",
      },
    ],
  },
  {
    id: 3,
    questionStep: 3,
    questionNextStep: 4,
    questionType: "NS",
    answerList: [
      {
        code: 0,
        type: "N",
        text: "그 전에 현재의 문제를 해결하는 게 먼저야",
      },
      {
        code: 1,
        type: "S",
        text: "과거로 돌아가면 미래를 바꿀 수 있을지도 몰라!",
      },
    ],
  },
];
