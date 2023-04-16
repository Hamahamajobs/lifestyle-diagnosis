<?php

namespace App\Exceptions;

use App\Exceptions\BaseErrorResponseException;

class NotFountException extends BaseErrorResponseException
{
    public static function throw($request)
    {
        $baseRes = new BaseErrorResponseException();
        $baseRes->setErrorMessage('This is not_fount error message.');
        $baseRes->setStatusCode(404);
        $baseRes->setErrorCode('not_fount_error');
        return $baseRes->toResponse($request);
    }
}
