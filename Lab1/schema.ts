enum QuestionType {
  SINGLE_CHOICE = "SINGLE_CHOICE",
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  TEXT = "TEXT",
}

enum AttemptStatus {
  IN_PROGRESS = "IN_PROGRESS",
  FINISHED = "FINISHED",
}

class User {
  constructor(
    public user_id: string,
    public email: string,
    public password: string,
    public name: string,
    public avatar_url: string
  ) {}
}

class Quiz {
  constructor(
    public quiz_id: string,
    public author_id: User["user_id"],
    public title: string,
    public description: string,
    public time_limit: number | null,
    public attempts_limit: number | null,
    public created_at: Date,
    public updated_at: Date,
    public difficulty: number
  ) {}
}

class QuizAttempt {
  public status: AttemptStatus;
  public duration: number;

  constructor(
    public attempt_id: string,
    public quiz_id: Quiz["quiz_id"],
    public user_id: User["user_id"],
    public started_at: Date,
    public finished_at: Date | null,
    public score: number
  ) {
    this.status = finished_at
      ? AttemptStatus.FINISHED
      : AttemptStatus.IN_PROGRESS;
    const end = finished_at ?? new Date();
    this.duration = Math.max(
      0,
      Math.ceil((end.getTime() - started_at.getTime()) / (1000 * 60))
    );
  }
}

class Question {
  constructor(
    public question_id: string,
    public quiz_id: Quiz["quiz_id"],
    public text: string,
    public type: QuestionType,
    public points: number
  ) {}
}

class AnswerOption {
  constructor(
    public answer_option_id: string,
    public question_id: Question["question_id"],
    public text: string,
    public is_correct: boolean
  ) {}
}

class QuestionResponse {
  constructor(
    public question_response_id: string,
    public attempt_id: QuizAttempt["attempt_id"],
    public question_id: Question["question_id"],
    public free_text: string | null,
    public is_correct: boolean | null,
    public earned_points: number
  ) {}
}

class SelectedAnswer {
  constructor(
    public question_response_id: QuestionResponse["question_response_id"],
    public answer_option_id: AnswerOption["answer_option_id"]
    ) {}
}

class Review {
  constructor(
    public review_id: string,
    public user_id: User["user_id"],
    public quiz_id: Quiz["quiz_id"],
    public rating: number,
    public text: string,
    public created_at: Date
  ) {}
}

class UserQuizStats {
  constructor(
    public user_id: User["user_id"],
    public quiz_id: Quiz["quiz_id"],
    public best_score: number,
    public last_score: number,
    public updated_at: Date,
    public attempts: number
  ) {}
}
