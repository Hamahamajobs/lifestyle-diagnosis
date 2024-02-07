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
   * 回答結果
   * 
   * @param array $answers 回答
   * @return array $result 診断結果 どのタイプか
   */
  public function invoke($answers)
  {
    $personalTypes = PersonalType::all();
    $compareScore = 100; // 比較基準となるスコア 初期値は外れ値
    $result = ""; // ユーザーの診断結果

    // ユーザーのカテゴリーごとの偏差値を取得
    $deviationScores = self::calculateDeviationScorePerCategory($answers);

    foreach ($personalTypes as $key => $type) {
      $total = 0;

      // 偏差値の差の合計を算出
      $total += abs($type['border_active_practice_attitude'] - $deviationScores['active_practice_attitude']);
      $total += abs($type['border_creative_attitude'] - $deviationScores['creative_attitude']);
      $total += abs($type['border_coexistence'] - $deviationScores['coexistence']);
      $total += abs($type['border_have_no_grudge'] - $deviationScores['have_no_grudge']);
      $total += abs($type['border_respect_for_others'] - $deviationScores['respect_for_others']);

      // その基準(タイプ)との距離が最も短い場合は、そのタイプに最も近しいと判定
      if ($total <= $compareScore) {
        $compareScore = $total;
        $result = $type['type_name'];
      }
    }
    
    // TODO 回答結果をDB保存

    return $result;
  }
  /** 
   *  そのユーザーのカテゴリーごとの偏差値を計算する
   * 
   *  @param array $answers 回答
   *  @return array $scores カテゴリーごとの偏差値
   */
  private function calculateDeviationScorePerCategory($answers)
  {
    $scores['active_practice_attitude'] = 0;
    $scores['creative_attitude'] = 0;
    $scores['coexistence'] = 0;
    $scores['have_no_grudge'] = 0;
    $scores['respect_for_others'] = 0;

    // スコアとしての合計点を計算
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

    // 偏差値を算出して格納 偏差値=（個人の得点ー平均点)/標準偏差×10＋50
    // TODO 定数で管理する
    // 能動的実践的態度 平均点26.38 標準偏差5.16
    $deviationScores['active_practice_attitude'] = ($scores['active_practice_attitude'] - 26.38) / 5.16 * 10 + 50;
    // 自己の創造・開発 平均点28.55 標準偏差5.29
    $deviationScores['creative_attitude'] = ($scores['creative_attitude'] - 28.55) / 5.29 * 10 + 50;
    // 自他共存 平均点22.44 標準偏差3.82
    $deviationScores['coexistence'] = ($scores['coexistence'] - 22.44) / 3.82 * 10 + 50;
    // こだわりのなさ・執着心のなさ　 平均点14.47 標準偏差3.8
    $deviationScores['have_no_grudge'] = ($scores['have_no_grudge'] - 14.47) / 3.8 * 10 + 50;
    // 他者尊重 平均点15.03 標準偏差2.68
    $deviationScores['respect_for_others'] = ($scores['respect_for_others'] - 15.03) / 2.68 * 10 + 50;
    
    return $deviationScores;
  }
}
