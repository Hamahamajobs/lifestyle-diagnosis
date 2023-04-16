<?php

namespace App\Exceptions;

use App\Exceptions\BaseErrorResponseException;

class UnAuthorizedException extends BaseErrorResponseException
{
    public static function throw($request)
    {
        $baseRes = new BaseErrorResponseException();
        $baseRes->setErrorMessage('This is unAuthorized error message.');
        $baseRes->setStatusCode(401);
        $baseRes->setErrorCode('unAuthorized_error');
        return $baseRes->toResponse($request);
    }
}
