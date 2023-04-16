<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('categories', function (Blueprint $table) {
            $table->id();
            $table->enum('category_name', ['active_practice_attitude',
                'creative_attitude', 'coexistence', 'have_no_grudge','respect_for_others',])->comment('板津さんの生き方尺度の因子5つ'); // 5つの因子のenum
            $table->double('average_score', 5, 3)->comment('平均点');
            $table->double('standard_deviation', 5, 3)->comment('標準偏差');
            $table->smallInteger('total_item')->comment('全設問におけるそのカテゴリーの項目数の合計');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('categories');
    }
}
