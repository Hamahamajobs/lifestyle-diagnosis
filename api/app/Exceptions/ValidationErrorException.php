<?php

namespace App\Exceptions;

use App\Exceptions\BaseErrorResponseException;

class ValidationErrorException extends BaseErrorResponseException
{
    public static function throw($request)
    {
        $baseRes = new BaseErrorResponseException();
        $baseRes->setErrorMessage('This is validation error message.');
        $baseRes->setStatusCode(422);
        $baseRes->setErrorCode('validation_error');
        return $baseRes->toResponse($request);
    }
}
