<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreatePersonalTypesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('personal_types', function (Blueprint $table) {
            $table->id();
            $table->string('type_name')->comment('13類型の名前');
            $table->string('type_name_jp')->comment('13類型の名前 日本語');
            $table->double('border_active_practice_attitude', 5, 3)->comment('能動的実践的態度の基点'); // 基準値は5桁で小数点は３桁分含めて計算するとした
            $table->double('border_creative_attitude', 5, 3)->comment('自己の創造・開発の基点');
            $table->double('border_coexistence', 5, 3)->comment('自他共存の基点');
            $table->double('border_have_no_grudge', 5, 3)->comment('こだわりのなさ・執着心のなさの基点');
            $table->double('border_respect_for_others', 5, 3)->comment('他者尊重の基点');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('personal_types');
    }
}
