<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class CategoriesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $types = [
            ['cn' => 'active_practice_attitude', 'avs' => 26.38, 'std_devi' => 5.16 , 't_i' => 7],
            ['cn' => 'creative_attitude', 'avs' => 28.55, 'std_devi' => 5.29, 't_i' => 7],
            ['cn' => 'coexistence', 'avs' => 22.44, 'std_devi' => 3.82, 't_i' =>  5],
            ['cn' => 'have_no_grudge', 'avs' => 14.47, 'std_devi' => 3.8, 't_i' =>  5],
            ['cn' => 'respect_for_others', 'avs' => 15.03, 'std_devi' => 2.68, 't_i' =>  4],
        ];

        foreach ($types as $type) {
            DB::table('categories')->insert([
                'category_name' => $type['cn'],
                'average_score' => $type['avs'],
                'standard_deviation' => $type['std_devi'],
                'total_item' => $type['t_i'],
            ]);
        }
    }
}
