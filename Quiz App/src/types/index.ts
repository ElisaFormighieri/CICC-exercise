export type Question = {
  question: string;

  answers: {
    answer_a: string | null;
    answer_b: string | null;
    answer_c: string | null;
    answer_d: string | null;
    answer_e: string | null;
    answer_f: string | null;
  };
  correct_answers: CorrectAnswers;
};

export type CorrectAnswers = {
  [key: string]: string;
};
export type AnswerKey =
  | 'answer_a'
  | 'answer_b'
  | 'answer_c'
  | 'answer_d'
  | 'answer_e'
  | 'answer_f';

export type User = {
  username: string;
  name: string;
  password: string;
};

export type LoggedUser = {
  username: string;
  isLoggedIn: boolean;
};

export type UserScore = {
  username: string;
  score: number;
};

export type QuizCategory = 'brazil' | 'programming' | 'math';
