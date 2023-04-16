<?php

namespace App\Exceptions;

use App\Exceptions\BaseErrorResponseException;

class ConflictException extends BaseErrorResponseException
{
    public static function throw($request)
    {
        $baseRes = new BaseErrorResponseException();
        $baseRes->setErrorMessage('This is conflict error message.');
        $baseRes->setStatusCode(409);
        $baseRes->setErrorCode('conflict_error');
        return $baseRes->toResponse($request);
    }
}
