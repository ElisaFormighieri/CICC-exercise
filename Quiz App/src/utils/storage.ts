import { User, LoggedUser, UserScore, QuizCategory } from '../types';

const storagePrefix = 'QuizGame_';

export const getUsers = (): User[] => {
  return getStorageByKey<User[]>('users') ?? [];
};

export const setUsers = (users: User[]) => {
  setStorage<User[]>('users', users);
};

export const getLoggedUser = (): LoggedUser | null => {
  return getStorageByKey<LoggedUser>('loggedUser');
};

export const setLoggedUser = (loggedUser: LoggedUser) => {
  setStorage<LoggedUser>('loggedUser', loggedUser);
};

export const signIn = (username: string, password: string) => {
  const users = getUsers();
  const foundUser = users.find(
    (user) => user.username === username && user.password === password
  );
  if (foundUser) {
    const loggedUser: LoggedUser = { username, isLoggedIn: true };
    setLoggedUser(loggedUser);
  } else {
    throw new Error('Invalid credentials');
  }
};

export const signUp = (username: string, name: string, password: string) => {
  const users = getUsers();
  const foundUser = users.find((user) => user.username === username);
  if (foundUser) {
    throw new Error('Username already in use');
  }
  const newUser: User = { username, name, password };
  users.push(newUser);
  setUsers(users);
};

export const signOut = () => {
  deleteStorageByKey('loggedUser');
};

export const getScores = (quizCategory: QuizCategory): UserScore[] => {
  return getStorageByKey<UserScore[]>(`quizRecords-${quizCategory}`) ?? [];
};

export const setScores = (scores: UserScore[], quizCategory: QuizCategory) => {
  setStorage<UserScore[]>(`quizRecords-${quizCategory}`, scores);
};

export const saveScoreToLocalStorage = (
  score: number,
  quizCategory: QuizCategory
) => {
  const scores = getScores(quizCategory);
  const username = getLoggedUser()?.username;
  if (!!username) {
    const newScore: UserScore = { score, username };
    scores.push(newScore);
    setScores(scores, quizCategory);
  }
};

const getStorageByKey = <T>(key: string): T | null => {
  const storedValue = window.localStorage.getItem(`${storagePrefix}${key}`);
  return storedValue ? (JSON.parse(storedValue) as T) : null;
};

export const setStorage = <T>(key: string, value: T) => {
  window.localStorage.setItem(`${storagePrefix}${key}`, JSON.stringify(value));
};

export const deleteStorageByKey = (key: string) => {
  window.localStorage.removeItem(`${storagePrefix}${key}`);
};
