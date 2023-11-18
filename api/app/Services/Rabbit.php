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
    // ログを出しません
    Log::info('rabbit', ['rabbit1' => 'rabbit']);
  }
}
