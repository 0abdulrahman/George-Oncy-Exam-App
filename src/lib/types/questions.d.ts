// Why is it named Root?
export interface Root {
  message: string;
  questions: Question[];
}

export interface Question extends DatabaseProperties {
  answers: Answer[];
  type: string;
  question: string;
  correct: string;
  subject: Subject;
  exam: Exam;
}

export interface Answer {
  answer: string;
  key: string;
}

export interface Subject extends DatabaseProperties {
  name: string;
  icon: string;
}

export interface Exam extends DatabaseProperties {
  title: string;
  duration: number;
  subject: string;
  numberOfQuestions: number;
  active: boolean;
}
