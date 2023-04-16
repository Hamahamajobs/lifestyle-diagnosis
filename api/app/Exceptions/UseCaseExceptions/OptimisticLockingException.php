<?php

namespace App\Exceptions\UseCaseExceptions;

use Exception;

/**
 * UseCase内で楽観的ロックの失敗を表したいときに使う例外クラス
 */
class OptimisticLockingException extends Exception
{
}
