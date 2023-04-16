<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\UseCase\GetQuestions;

use App\Exceptions\UseCaseExceptions\NotFoundException;
use App\Exceptions\UseCaseExceptions\BadRequestException;
use App\Exceptions\UseCaseExceptions\PermissionException;

class QuestionController extends Controller
{
    /**
     * 設問取得
     * 
     * @param Request $request リクエストパラメータ
     * @param GetQuestions $useCase ユースケースクラス
     * @return object レスポンスJSON
     */
    public function index(Request $request, GetQuestions $useCase) {

        try {
            $response = $useCase->invoke();

          return response($response);
        } catch (BadRequestException $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 400);
        } catch (PermissionException $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 403);
        } catch (NotFoundException $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 404);
        }
        
    }
}
