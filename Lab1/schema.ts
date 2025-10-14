enum Difficulty {
  EASY = "easy",
  MEDIUM = "medium",
  HARD = "hard",
}

enum QuestionType {
  SINGLE_CHOICE = "single_choice",
  MULTIPLE_CHOICE = "multiple_choice",
  FREE_TEXT = "free_text",
}

enum AttemptStatus {
  IN_PROGRESS = "in_progress",
  COMPLETED = "completed",
  TIME_EXPIRED = "time_expired",
  CANCELLED = "cancelled",
}

class User {
  constructor(
    public user_id: number,
    public username: string, 
    public email: string,
    public avatar_url: string | null,
    public created_at: Date
  ) {}
}

class Quiz {
  constructor(
    public quiz_id: number,
    public author_id: User["user_id"],
    public title: string,
    public description: string | null,
    public time_limit: number | null,
    public attempts_limit: number | null,
    public created_at: Date,
    public updated_at: Date,
    public difficulty: Difficulty | null 
  ) {}
}

class QuizAttempt {
  constructor(
    public attempt_id: number,
    public quiz_id: Quiz["quiz_id"],
    public user_id: User["user_id"],
    public started_at: Date,
    public finished_at: Date | null,
    public score: number | null,
    public status: AttemptStatus 
  ) {}
}

class Question {
  constructor(
    public question_id: number,
    public quiz_id: Quiz["quiz_id"],
    public question_text: string, 
    public question_type: QuestionType, 
    public points: number
  ) {}
}

class AnswerOption {
  constructor(
    public answer_option_id: number,
    public question_id: Question["question_id"],
    public option_text: string, 
    public is_correct: boolean
  ) {}
}

class QuestionResponse {
  constructor(
    public question_response_id: number,
    public attempt_id: QuizAttempt["attempt_id"],
    public question_id: Question["question_id"],
    public free_text_answer: string | null, 
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
    public review_id: number,
    public user_id: User["user_id"],
    public quiz_id: Quiz["quiz_id"],
    public rating: number,
    public review_text: string | null, 
    public created_at: Date
  ) {}
}

class UserQuizStats {
  constructor(
    public user_id: User["user_id"],
    public quiz_id: Quiz["quiz_id"],
    public best_score: number,
    public last_score: number,
    public attempts: number,
    public created_at: Date, 
    public updated_at: Date
  ) {}
}
