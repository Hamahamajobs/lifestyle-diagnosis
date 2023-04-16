<?php

namespace App\Exceptions;

use App\Exceptions\BaseErrorResponseException;

class ForbiddenException extends BaseErrorResponseException
{
    public static function throw($request)
    {
        $baseRes = new BaseErrorResponseException();
        $baseRes->setErrorMessage('This is forbidden error message.');
        $baseRes->setStatusCode(403);
        $baseRes->setErrorCode('forbidden_error');
        return $baseRes->toResponse($request);
    }
}
