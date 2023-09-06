import React, { useCallback, useEffect, useState } from "react";
import { Form, Modal } from "react-bootstrap";
import "./psctestquiz.css";
import Button from "../../components/Common/Buttons/Button";
import BackButton from "../../components/Common/Buttons/BackButton";
import Copyright from "../../components/Footer/Copyright";
import { useNavigate } from "react-router-dom";
import { useProgramdataPscMutation } from "../../gql/generated";

interface QuizAnswer {
  question: string;
  answer: string;
}

const PSC_Test_Quiz: React.FC = () => {
  const [formId, setFormId] = useState(0);
  const history = useNavigate();
  const [answers, setAnswers] = useState<QuizAnswer[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [questions, setQuestions] = useState<any | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [result, executeMutation] = useProgramdataPscMutation();
  const [score, setScore] = useState("");

  const loadQuestions = useCallback(async (age: string | null) => {
    let questionSet;
    if (age && Number(age) < 18) {
      setFormId(22);
      questionSet = await import(
        "../../assets/jsons/psc-child-assessment.json"
      );
    } else {
      setFormId(23);
      questionSet = await import(
        "../../assets/jsons/psc-youth-assessments.json"
      );
    }

    setQuestions(questionSet);
  }, []);

  useEffect(() => {
    const age = localStorage.getItem("age");

    loadQuestions(age);
  }, []);

  if (!questions) {
    return (
      <div className="d-flex align-items-center justify-content-center vh-100">
        <div className="spinner-border" role="status">
          <span className="sr-only"></span>
        </div>
      </div>
    );
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedAnswer(e.target.value);
  };

  const handleRadioClick = (option) => {
    setSelectedAnswer(option);
  };

  console.log(answers, "Selected Answers");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newAnswer: QuizAnswer = {
      question: questions.questions[currentQuestion].questions,
      answer: selectedAnswer!,
    };
    setAnswers((prev) => [...prev, newAnswer]);
    if (currentQuestion < questions.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null); // clear the selected answer for the next question
    } else if (score) {
      setShowModal(true); // show modal when form is submittedx
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    history("/"); // navigate to /home when "Exit" button is clicked
  };

  const handleConsult = () => {
    console.log(answers); // print answers when "Consult" button is clicked
    history("/schedule-appointment");
    setShowModal(false);
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      const previousAnswer = answers.find(
        (ans) => ans.question === questions.questions[currentQuestion].question
      );
      setSelectedAnswer(previousAnswer?.answer || null);
    }
  };

  const dataSubmit = () => {
    executeMutation({
      Data: {
        formId: formId,
        metadata: answers,
      },
    }).then((res) => {
      setScore(res.data?.programform.data);
    });
  };

  return (
    <div className="main-container">
      <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
        <Form
          onSubmit={handleSubmit}
          className="p-4 shadow bg-white rounded form-container"
        >
          <div className="d-flex justify-content-between mb-4">
            <BackButton onClick={goBack} />
            <span className="steps">
              Step {currentQuestion + 1}/{questions.questions.length}
            </span>
          </div>
          <p className="quiz-question mb-4">
            {questions.questions[currentQuestion].questions}
          </p>
          {questions.questions[currentQuestion].options.map(
            (option: string, i: number) => (
              <div
                key={i}
                className="mb-3"
                onClick={() => handleRadioClick(option)}
              >
                <Form.Check
                  type="radio"
                  id={`default-radio-${currentQuestion}-${i}`}
                  label={option}
                  value={option}
                  name={questions.questions[currentQuestion].question}
                  checked={selectedAnswer === option}
                  onChange={handleChange}
                  className={`optionRadio text-primary ${
                    selectedAnswer === option ? "selected" : ""
                  }`}
                />
              </div>
            )
          )}
          <Button
            onClick={() =>
              currentQuestion < questions.questions.length - 1
                ? null
                : dataSubmit()
            }
            title={
              currentQuestion < questions.questions.length - 1
                ? "Next"
                : "Submit"
            }
            className="w-100"
            disabled={selectedAnswer ? false : true}
          />
        </Form>
      </div>
      <Copyright />
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        className="d-flex align-items-center justify-content-center"
      >
        <Modal.Body className="d-flex flex-column justify-content-center py-3 px-4">
          <span className="modal-title">PSC Test</span>
          <span className="modal-text py-3">
            Based on your answers,
            <br /> {score}
          </span>
          <div className="d-flex justify-content-center ">
            <Button
              onClick={handleCloseModal}
              title="Exit"
              variant="secondary"
              className="me-4 w-100"
            />
            <Button onClick={handleConsult} title="Consult" className="w-100" />
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default PSC_Test_Quiz;
