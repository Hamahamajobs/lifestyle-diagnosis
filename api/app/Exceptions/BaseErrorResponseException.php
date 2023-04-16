<?php

namespace App\Exceptions;

use Illuminate\Http\JsonResponse;
use Exception;

class BaseErrorResponseException extends Exception
{
    /**
     * @var string
     */
    protected $message;

    /**
     * @var int
     */
    protected $statusCode;

    /**
     * @var string|null
     */
    protected $errorCode;

    /**
     * 初期エラーコード一覧
     * ステータスコードに紐付いた基本的なエラーコードで、アプリケーション固有のエラーコードは定義しない
     *
     * @var array
     */
    protected $defaultErrorCodes = [
        400 => 'bad_request',
        401 => 'unauthorized',
        403 => 'forbidden',
        404 => 'not_found',
        405 => 'method_not_allowed',
        409 => 'conflict',
        422 => 'validation_error',
        500 => 'internal_server_error',
    ];

    /**
     * BaseErrorException constructor.
     *
     * @param string $message 簡易エラーメッセージ
     * @param int $statusCode ステータスコード
     */
    public function __construct($message = '', $statusCode = 500)
    {
        $this->message = $message;
        $this->statusCode = $statusCode;
    }

    /**
     * @param string $message
     */
    public function setErrorMessage($message)
    {
        $this->message = $message;
    }

    /**
     * @param int $statusCode
     */
    public function setStatusCode($statusCode)
    {
        $this->statusCode = $statusCode;
    }

    /**
     * @param string $errorCode
     */
    public function setErrorCode($errorCode)
    {
        $this->errorCode = $errorCode;
    }

    /**
     * @return string
     */
    public function getErrorMessage()
    {
        return $this->message;
    }

    /**
     * @return int
     */
    public function getStatusCode()
    {
        return $this->statusCode;
    }

    /**
     * @return null|string
     */
    public function getErrorCode()
    {
        return $this->errorCode;
    }

    public function toResponse($request)
    {
        return new JsonResponse(
            $this->getBasicResponse(),
            $this->getStatusCode()
        );
    }

    protected function getBasicResponse()
    {
        $code = !empty($this->getErrorCode()) ? $this->getErrorCode() : $this->getDefaultErrorCode();
        return [
            'message' => $this->getErrorMessage(),
            'code' => $code,
        ];
    }

    protected function getDefaultErrorCode()
    {
        return $this->defaultErrorCodes[$this->getStatusCode()];
    }
}
