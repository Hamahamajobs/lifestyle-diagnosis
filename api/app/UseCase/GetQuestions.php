<?php

namespace App\UseCase;

// use App\Models\Answer;
use App\Models\Question;
use App\Models\Category;
use App\Models\PersonalType;


class GetQuestions {
    /**
     * 設問取得
     */
   public function invoke(){
     $questons = Question::from('questions as q')->leftJoin('categories as c', 'q.category_id', '=', 'c.id')->select(['q.id', 'c.category_name','q.question_contents','is_reversal'])->get();
    
     return $questons;
   }
}
