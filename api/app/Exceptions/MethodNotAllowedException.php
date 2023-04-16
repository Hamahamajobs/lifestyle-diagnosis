<?php

namespace App\Exceptions;

use App\Exceptions\BaseErrorResponseException;

class MethodNotAllowedException extends BaseErrorResponseException
{
    public static function throw($request)
    {
        $baseRes = new BaseErrorResponseException();
        $baseRes->setErrorMessage('This is method_not_allowed error message.');
        $baseRes->setStatusCode(405);
        $baseRes->setErrorCode('method_not_allowed_error');
        return $baseRes->toResponse($request);
    }
}
