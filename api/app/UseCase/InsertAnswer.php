<?php

namespace App\UseCase;

// use App\Models\Answer;
use App\Models\Question;
use App\Models\Category;
use App\Models\PersonalType;

use App\Exceptions\UseCaseExceptions\BadRequestException;
use Illuminate\Support\Facades\Log;

class InsertAnswer
{
  /**
   * 回答
   */
  public function invoke($answers)
  {
    $personal_types = PersonalType::all();
    $compare_score = 100; // 比較基準となるスコア 初期値は外れ値
    $result = ""; // ユーザーの診断結果
    
    // ユーザーのカテゴリーごとのスコア取得
    $scores = self::calculateScorePerCategory($answers);

    foreach ($personal_types as $key => $type_obj) {
      $total_score = 0;

      // 各基準との距離の合計値を計算
      $total_score += abs($type_obj['border_active_practice_attitude'] - $scores['active_practice_attitude']);
      $total_score += abs($type_obj['border_creative_attitude'] - $scores['creative_attitude']);
      $total_score += abs($type_obj['border_coexistence'] - $scores['coexistence']);
      $total_score += abs($type_obj['border_have_no_grudge'] - $scores['have_no_grudge']);
      $total_score += abs($type_obj['border_respect_for_others'] - $scores['respect_for_others']);

      // その基準(タイプ)との距離が最も短い場合は、それに近しいとする
      if ($total_score <= $compare_score) {
        $compare_score = $total_score;
        $result = $type_obj['type_name'];
      }
    }

    return $result;
  }
  /**
   *  @param array $answers 回答
   *  @return array $scores カテゴリーごとのスコア
   */
  private function calculateScorePerCategory($answers)
  {
    $scores['active_practice_attitude'] = 0;
    $scores['creative_attitude'] = 0;
    $scores['coexistence'] = 0;
    $scores['have_no_grudge'] = 0;
    $scores['respect_for_others'] = 0;

    foreach ($answers as $key => $answer) {
      switch ($answer['category_name']) {
        case 'active_practice_attitude':
          $scores['active_practice_attitude'] += $answer['answer'];
          break;
        case 'creative_attitude':
          $scores['creative_attitude'] += $answer['answer'];
          break;
        case 'coexistence':
          $scores['coexistence'] += $answer['answer'];
          break;
        case 'have_no_grudge':
          $scores['have_no_grudge'] += $answer['answer'];
          break;
        case 'respect_for_others':
          $scores['respect_for_others'] += $answer['answer'];
          break;
        default:
          new BadRequestException('不正なカテゴリー名が指定されています');
      }
    }
    return $scores;
  }
}
