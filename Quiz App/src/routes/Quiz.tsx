import { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Text,
  FormControl,
  Heading,
  VStack,
  Flex,
  useToast,
} from '@chakra-ui/react';
import { Question, CorrectAnswers, AnswerKey, QuizCategory } from '../types';
import {
  staticBrazilQuestions,
  staticMathQuestions,
  staticProgrammingQuestions,
} from '../utils/staticQuestions';
import { useParams } from 'react-router-dom';
import { getScores, saveScoreToLocalStorage } from '../utils/storage';
import { sortTopFiveUserScoresDescending } from '../utils/sort';

export const Quiz = () => {
  let { quizCategory } = useParams<{
    quizCategory: QuizCategory;
  }>();
  const quizzes = {
    brazil: staticBrazilQuestions,
    programming: staticProgrammingQuestions,
    math: staticMathQuestions,
  };
  const questions = !!quizCategory ? quizzes[quizCategory] : quizzes.brazil;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [chosenAnswer, setChosenAnswer] = useState<
    Record<string, string | null>
  >({});
  const [selectedAnswer, setSelectedAnswer] = useState<AnswerKey | null>(null);
  const [score, setScore] = useState(0);

  const handleAnswer = (answer: AnswerKey) => {
    setSelectedAnswer(answer);
    setChosenAnswer((prevState) => {
      return {
        ...prevState,
        [currentQuestion]: answer,
      };
    });
  };

  const handleNextQuestion = () => {
    setSelectedAnswer(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      let newScore = 0;
      questions.forEach((question, index) => {
        const correctAnswer = Object.keys(question.correct_answers).find(
          (answer) => question.correct_answers[answer] === 'true'
        ) as keyof CorrectAnswers;
        if (chosenAnswer[index] === correctAnswer) {
          newScore++;
        }
      });
      setScore(newScore);
      if (!!quizCategory) {
        saveScoreToLocalStorage(newScore, quizCategory);
      }
      setCurrentQuestion(questions.length);
    }
  };

  return (
    <Flex w="100%" px={10}>
      {questions.length > 0 && currentQuestion < questions.length && (
        <Flex w="100%" flexDir="column">
          <Button
            alignSelf="flex-end"
            mt={2}
            colorScheme="teal"
            variant="outline"
            onClick={handleNextQuestion}>
            Next Question
          </Button>
          <Box mt={4} bg="gray.700" py={8} borderRadius="16px">
            <Text color="white" textAlign="center" fontSize="3xl" mb={12}>
              {questions[currentQuestion].question}
            </Text>
            <VStack spacing={4}>
              {Object.keys(questions[currentQuestion].answers)
                .filter(
                  (key) =>
                    key.startsWith('answer_') &&
                    questions[currentQuestion].answers[key as AnswerKey] !==
                      null
                )
                .map((key) => (
                  <Button
                    colorScheme="teal"
                    key={key}
                    variant={key === selectedAnswer ? 'solid' : 'ghost'}
                    onClick={() => handleAnswer(key as AnswerKey)}>
                    {questions[currentQuestion].answers[key as AnswerKey]}
                  </Button>
                ))}
            </VStack>
          </Box>
        </Flex>
      )}
      {questions.length > 0 && currentQuestion === questions.length && (
        <Flex py={20} alignItems="center" w="100%" flexDir="column">
          <Text color="white" fontSize="3xl">Quiz Finished!</Text>

          <Box color="white" fontSize="3xl">
            Your score:{' '}
            <Text as="span" color="teal.100">
              {score}
            </Text>{' '}
          </Box>

          <Box
            fontSize="2xl"
            maxW="500px"
            w="100%"
            mt={20}
            bg="gray.700"
            py={4}
            borderRadius="16px"
            textAlign="center"
            color="white" >
            Best Scores:{' '}
            <VStack mt={2} fontSize="md" spacing={1}>
              {!!quizCategory &&
                sortTopFiveUserScoresDescending(getScores(quizCategory)).map(
                  (userScore) => (
                    <Box key={`userScore:${userScore.username}`}>
                      @{userScore.username}:{' '}
                      <Text as="span" color="teal.100">
                        {userScore.score}
                      </Text>
                    </Box>
                  )
                )}
            </VStack>
          </Box>
        </Flex>
      )}
    </Flex>
  );
};
