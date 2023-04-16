<?php

namespace App\Exceptions\UseCaseExceptions;

use Exception;

/**
 * UseCase内でアクセスしたデータが存在しないときに使う例外クラス
 */
class NotFoundException extends Exception
{
}
