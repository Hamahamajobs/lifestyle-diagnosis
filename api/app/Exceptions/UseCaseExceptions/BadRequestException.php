<?php

namespace App\Exceptions\UseCaseExceptions;

use Exception;

/**
 * UseCase内でリクエストに問題があり、サーバがリクエストを処理できない場合に使う例外クラス
 */
class BadRequestException extends Exception
{
}
