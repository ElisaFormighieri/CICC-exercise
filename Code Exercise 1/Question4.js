function gradeStudents(score1, score2, score3, score4) {
  let averageScore = (score1 + score2 + score3 + score4) / 4

  if (averageScore > 90) {
    console.log('Grade A')
  } else if (averageScore > 70 && averageScore <= 90) {
    console.log('Grade B')
  } else if (averageScore > 50 && averageScore >= 70) {
    console.log('Grade C')
  } else {
    console.log('Grade F')
  }
}

gradeStudents(91, 90, 85, 80)
