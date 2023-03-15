import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Header } from '../components/Header';
import { Quiz } from './Quiz';
import { SelectQuiz } from './SelectQuiz';
import { SignIn } from './SignIn';
import { SignUp } from './SignUp';

const QuizRoutes = () => {
  return (
    <>
      <Header />

      <Routes>
        <Route index element={<SelectQuiz />} />
        <Route path=":quizCategory" element={<Quiz />} />
      </Routes>
    </>
  );
};

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/play/*" element={<QuizRoutes />} />
      </Routes>
    </BrowserRouter>
  );
};
