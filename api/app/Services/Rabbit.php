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
    // ログを出しません
    Log::info('rabbit', ['rabbit1' => 'rabbit']);
  }

  public function call3()
  {
    // ログを出しません
    Log::info('rabbit', ['rabbit1' => 'rabbit']);
  }

  public function call4()
  {
    // ログを出しません
    Log::info('rabbit', ['rabbit1' => 'rabbit']);
  }
}
