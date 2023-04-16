<?php

namespace App\Http\Controllers\Api\Supervisor\Ky;

use App\Utility\CommonUtil;
use App\Http\Controllers\Controller;
use App\UseCase\Supervisor\Ky\InsertAnswerUsers;
use App\UseCase\Supervisor\Ky\UpdateAnswerUser;
use App\UseCase\Supervisor\Ky\DeleteAnswerUser;
use App\Http\Requests\Ky\SupervisorAnswerUsersPostRequest;
use App\Exceptions\UseCaseExceptions\NotFoundException;
use App\Exceptions\UseCaseExceptions\BadRequestException;
use App\Exceptions\UseCaseExceptions\PermissionException;

/**
 * 職長回答登録API
 */
class AnswerUsersController extends Controller
{
    /**
     * 職長回答登録.
     *
     * @param SupervisorAnswerUsersPostRequest $request リクエストパラメータ
     * @param InsertAnswerUsers $useCase ユースケースクラス
     * @return object レスポンスJSON
     */
    public function store(SupervisorAnswerUsersPostRequest $request, InsertAnswerUsers $useCase)
    {
        $supervisorData = CommonUtil::getSupervisorInfo($request);

        try {
            $useCase->invoke(
                $request->form_id,
                $request->job_id,
                $request->target_date,
                $request->users,
                $supervisorData->seq_no
            );

            return response()->json([
                'OK' => 200
            ]);
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
    /**
     * 職長回答者更新
     * @param SupervisorAnswerUsersPostRequest $request リクエストパラメータ
     * @param UpdateAnswerUser $useCase ユースケースクラス
     * @return object レスポンスJSON
     */
    public function update(SupervisorAnswerUsersPostRequest $request, UpdateAnswerUser $useCase)
    {
        $supervisorData = CommonUtil::getSupervisorInfo($request);

        try {
            $useCase->invoke(
                $request->form_id,
                $request->job_id,
                $request->target_date,
                $request->user_id,
                $request->new_user_id,
                $supervisorData->seq_no
            );

            return response()->json([
                'OK' => 200
            ]);
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
        } catch (Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }

    /**
     * 職長回答者削除
     * @param SupervisorAnswerUsersPostRequest $request リクエストパラメータ
     * @param DeleteAnswerUser $useCase ユースケースクラス
     * @return object レスポンスJSON
     */
    public function delete(SupervisorAnswerUsersPostRequest $request, DeleteAnswerUser $useCase)
    {
        $supervisorData = CommonUtil::getSupervisorInfo($request);

        try {
            $useCase->invoke(
                $request->form_id,
                $request->job_id,
                $request->target_date,
                $request->user_id,
                $supervisorData->seq_no
            );
            return response()->json([
                'OK' => 200
            ]);
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
        } catch (Exception $e) {
            return response()->json([
                'message' => $e->getMessage()
            ], 500);
        }
    }
}
