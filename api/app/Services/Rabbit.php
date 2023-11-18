<?php

namespace App\Services;

use Log;

class Rabbit
{
  public function call()
  {
    // ログを出しません
    Log::info('rabbit', ['rabbit1' => 'rabbit']);
  }

  public function call2()
  {
    // 悪い例: 詳細なエラーメッセージを表示
    $conn = mysqli_connect($db_host, $db_user, $db_password, $db_name);
    if (!$conn) {
      die("接続エラー: " . mysqli_connect_error());
    }
  }

  public function call3()
  {
    // 悪い例: パスワードを平文で保存
    $password = $_POST['password'];
    // パスワードをデータベースに保存
    $query = "INSERT INTO users (username, password) VALUES ('$username', '$password')";
  }

  public function call4()
  {
    // 悪い例: 不要な変数の使用
    $a = 1;
    $b = 1;
    $sum = $a + $b;
    $average = $sum / 2;
    echo "Average: " . $average;
  }

  public function performTask($data) {
    // 悪い例: 重複するコード
    $result1 = $this->addNumbers($data);
    // 処理...
    $result2 = $this->addNumbers($data);
  }

  // 悪い例: 過度なコメント
  private function addNumbers($a, $b)
  {
    // 2つの数を足して結果を返す
    $result = $a + $b;
    return $result;
  }
  
}
