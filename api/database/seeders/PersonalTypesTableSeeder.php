<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PersonalTypesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /** 
         * memo
         * 奉仕型	23.8	25.8	23.9	13.8	15.8
         * 安楽型   23.8	25.8	22.5	15.2	15.4
         * 慈愛型	23.8	27.2	23.9	14.5	15.8
         * 中庸型	23.8	28.6	22.5	16	15.
         * 受容型	25.1	25.8	22.5	16	15.
         * 多彩型	25.1	31.4	21.8	16	15.1
         * 享楽型	25.1	31.4	21.8	15.2	14.4
         * 協同型	26.4	25.8	23.9	13.8	15.8
         * 達観型	27.8	31.4	22.5	14.5	14.7
         * 克己型	27.8	31.4	21	13.1	14.4
         * 活動型	29.1	30.3	23.9	14.5	14.
         * 瞑想・内面型	29.1	31.4	21	15.2	15.
         * 行動・努力型	29.1	31.4	22.5	13.1	14.4
         */
        $types = [
            ['name' => '奉仕型', 'in1' => 23.8, 'in2' => 25.8, 'in3' => 23.9, 'in4' => 13.8, 'in5' => 15.8],
            ['name' => '安楽型', 'in1' => 23.8, 'in2' => 25.8, 'in3' => 22.5, 'in4' => 15.2, 'in5' => 15.4],
            ['name' => '慈愛型', 'in1' => 23.8, 'in2' => 27.2, 'in3' => 23.9, 'in4' => 14.5, 'in5' => 15.8],
            ['name' => '中庸型', 'in1' => 23.8, 'in2' => 28.6, 'in3' => 22.5, 'in4' => 16.0, 'in5' => 15.0],
            ['name' => '受容型', 'in1' => 25.1, 'in2' => 25.8, 'in3' => 22.5, 'in4' => 16.0, 'in5' => 15.0],
            ['name' => '多彩型', 'in1' => 25.1, 'in2' => 31.4, 'in3' => 21.8, 'in4' => 16.0, 'in5' => 15.1],
            ['name' => '享楽型', 'in1' => 25.1, 'in2' => 31.4, 'in3' => 21.8, 'in4' => 15.2, 'in5' => 14.4],
            ['name' => '協同型', 'in1' => 26.4, 'in2' => 25.8, 'in3' => 23.9, 'in4' => 13.8, 'in5' => 15.8],
            ['name' => '達観型', 'in1' => 27.8, 'in2' => 31.4, 'in3' => 22.5, 'in4' => 14.5, 'in5' => 14.7],
            ['name' => '克己型', 'in1' => 27.8, 'in2' => 31.4, 'in3' => 21.0, 'in4' => 13.1, 'in5' => 14.4],
            ['name' => '活動型', 'in1' => 29.1, 'in2' => 30.3, 'in3' => 23.9, 'in4' => 14.5, 'in5' => 14.4],
            ['name' => '瞑想・内面型', 'in1' => 29.1, 'in2' => 31.4, 'in3' => 21.0, 'in4' => 15.2, 'in5' => 15.1],
            ['name' => '行動・努力型', 'in1' => 29.1, 'in2' => 31.4, 'in3' => 22.5, 'in4' => 13.1, 'in5' => 14.4],
    ];

        foreach ($types as $type) {
            DB::table('personal_types')->insert([
                'type_name' => $type['name'],
                'border_active_practice_attitude' => $type['in1'],
                'border_creative_attitude' => $type['in2'],
                'border_coexistence' => $type['in3'],
                'border_have_no_grudge' => $type['in4'],
                'border_respect_for_others' => $type['in5']
            ]);
        }
    }
}
