<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\UseCase\InsertAnswer;

use App\Exceptions\UseCaseExceptions\BadRequestException;

class AnswerController extends Controller
{
    /**
     * 設問取得
     * 
     * @param Request $request リクエストパラメータ
     * @param GetQuestions $getQuestions ユースケースクラス
     * @return object レスポンスJSON
     */
    public function store(Request $request, InsertAnswer $useCase)
    {

        try {
            $result = $useCase->invoke(
                $request->answers
            );
            echo 'これは開発用のメッセージです';
            echo 'これは開発用のメッセージです';
            echo 'これは開発用のメッセージです';
            echo 'これは開発用のメッセージです';echo 'これは開発用のメッセージです';
            echo 'これは開発用のメッセージです';
            echo 'これは開発用のメッセージです';echo 'これは開発用のメッセージです';
            echo 'これは開発用のメッセージです';
            
            echo 'これは開発用のメッセージです';
            echo 'これは開発用のメッセージです';
            echo 'これは開発用のメッセージです';
            echo 'これは開発用のメッセージです';echo 'これは開発用のメッセージです';
            echo 'これは開発用のメッセージです';
            echo 'これは開発用のメッセージです';echo 'これは開発用のメッセージです';
            echo 'これは開発用のメッセージです';

            return response()->json([
                'result' => $result
            ], 200);
        } catch (BadRequestException $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 400);
        }
    }
}
