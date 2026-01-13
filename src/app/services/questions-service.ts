import {SupabaseService} from './supabase-service';
import {Injectable} from '@angular/core';
import {Question} from '../models/question';

export interface QuestionRow {
  id: number;
}

@Injectable({providedIn: 'root'})
export class QuestionsService {
  constructor(private supabase: SupabaseService) {
  }

  async fetchQuestions(ruleNumber: string, amount: number, offset: number): Promise<Question[]> {
    let query = this.supabase.supabase
      .from('questions_content')
      .select(`
      q_text,
      answers,
      rule,
      question:questions!inner (
        id,
        number,
        correct_ans
      )
    `)
      .eq('lang', 'pl')
      .order('question_id')
      .range(offset, offset + amount - 1);

    if (ruleNumber !== "0") {
      query = query.like("question.number", `${ruleNumber}.%`);
    }

    const { data, error } = await query as { data: Array<{
      q_text: string;
      answers: Record<string, string>;
      rule: string | null;
      question: {
        id: number;
        number: string;
        correct_ans: Record<string, number>;
      };
    }> | null, error: any };

    if (error) {
      console.error("Błąd:", error);
      return [];
    }

    let wynik = (data ?? []).map(row => ({
      id: row.question.id,
      number: row.question.number,
      text: row.q_text,
      answers: row.answers,
      correct: row.question.correct_ans,
      rule: row.rule ?? null
    }));

    console.log(wynik);

    return wynik;

  }

  async randomQuestion(): Promise<Question[]> {   // lepiej zwracać Question[] jak w fetchQuestions
    const { data: count, error: countErr } = await this.supabase.supabase
      .from('questions')
      .select('*', { count: 'exact' });

    if (countErr) {
      console.error(countErr);
      throw Error(countErr.message);
    }

    const q_id = this.randomNumberInRange(1, count?.length ?? 432);

    const { data, error } = await this.supabase.supabase
      .from("questions_content")
      .select(`
      q_text,
      answers,
      rule,
      question:questions!inner (
        id,
        number,
        correct_ans
      )
    `)
      .eq("question_id", q_id)
      .eq("lang", "pl") as {
      data: Array<{
        q_text: string;
        answers: Record<string, string>;
        rule: string | null;
        question: {
          id: number;
          number: string;
          correct_ans: Record<string, number>;
        };
      }> | null,
      error: any
    };

    if (error) {
      console.error(error);
      throw Error(error.message);
    }

    const wynik = (data ?? []).map(row => ({
      id: row.question.id,
      number: row.question.number,
      text: row.q_text,
      answers: row.answers,
      correct: row.question.correct_ans,
      rule: row.rule ?? null
    }));

    console.log(wynik);

    return wynik;
  }


  randomNumberInRange = (min: number, max: number): number => {
    return Math.floor(Math.random()
      * (max - min + 1)) + min;
  };
}

