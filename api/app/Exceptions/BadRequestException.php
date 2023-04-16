<?php

namespace App\Exceptions;

use App\Exceptions\BaseErrorResponseException;

class BadRequestException extends BaseErrorResponseException
{
    public static function throw($request)
    {
        $baseRes = new BaseErrorResponseException();
        $baseRes->setErrorMessage('This is badRequest error message.');
        $baseRes->setStatusCode(400);
        $baseRes->setErrorCode('badRequest_error');
        return $baseRes->toResponse($request);
    }
}
