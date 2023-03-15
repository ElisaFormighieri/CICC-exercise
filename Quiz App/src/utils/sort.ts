import { UserScore } from '../types';

export const sortTopFiveUserScoresDescending = (userScores: UserScore[]): UserScore[] => {
  const sortedUserScores = userScores.sort((a, b) => {
    if (a.username === b.username) {
      return b.score - a.score;
    } else {
      return a.username.localeCompare(b.username);
    }
  });

 

  const uniqueUserScores: UserScore[] = [];
  let currentUser: string | null = null;

  for (const userScore of sortedUserScores) {
    if (currentUser !== userScore.username) {
      uniqueUserScores.push(userScore);
      currentUser = userScore.username;
    }
  }



  return uniqueUserScores.sort((a, b) => b.score - a.score).slice(0, 5);

};

