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

        // in1~in5には基準となる偏差値が入る
        $types = [['name' => 'altruist', 'name_jp' => '奉仕型', 'in1' => 42.26, 'in2' => 42.065, 'in3' => 57.64, 'in4' => 46.2, 'in5' => 54.824], ['name' => 'hedonistic', 'name_jp' => '安楽型', 'in1' => 42.26, 'in2' => 42.065, 'in3' => 50, 'in4' => 53.8, 'in5' => 52.68], ['name' => 'love', 'name_jp' => '慈愛型', 'in1' => 40.712, 'in2' => 44.71, 'in3' => 56.876, 'in4' => 50, 'in5' => 55.36], ['name' => 'moderation', 'name_jp' => '中庸型', 'in1' => 39.68, 'in2' => 51.058, 'in3' => 52.292, 'in4' => 57.6, 'in5' => 50.536], ['name' => 'accepting', 'name_jp' => '受容型', 'in1' => 44.84, 'in2' => 39.42, 'in3' => 50, 'in4' => 56.84, 'in5' => 54.288], ['name' => 'variety', 'name_jp' => '多彩型', 'in1' => 44.84, 'in2' => 59.522, 'in3' => 46.18, 'in4' => 56.08, 'in5' => 50], ['name' => 'hedonism', 'name_jp' => '享楽型', 'in1' => 44.84, 'in2' => 58.464, 'in3' => 46.18, 'in4' => 53.8, 'in5' => 44.64], ['name' => 'cooperation', 'name_jp' => '協同型', 'in1' => 50, 'in2' => 39.42, 'in3' => 56.876, 'in4' => 46.2, 'in5' => 54.02], ['name' => 'acceptance-of-life', 'name_jp' => '達観型', 'in1' => 56.192, 'in2' => 60.58, 'in3' => 48.472, 'in4' => 48.48, 'in5' => 47.32], ['name' => 'self-disciplined', 'name_jp' => '克己型', 'in1' => 55.16, 'in2' => 59.522, 'in3' => 42.36, 'in4' => 44.3, 'in5' => 45.98], ['name' => 'activist', 'name_jp' => '活動型', 'in1' => 59.288, 'in2' => 56.348, 'in3' => 56.112, 'in4' => 50, 'in5' => 45.98], ['name' => 'meditative', 'name_jp' => '瞑想・内面型', 'in1' => 58.256, 'in2' => 60.58, 'in3' => 42.36, 'in4' => 53.8, 'in5' => 50], ['name' => 'achievement', 'name_jp' => '行動・努力型', 'in1' => 60.32, 'in2' => 58.464, 'in3' => 50, 'in4' => 42.4, 'in5' => 42.4
        ],];

        foreach ($types as $type) {
            DB::table('personal_types')->insert([
                'type_name' => $type['name'],
                'type_name_jp' => $type['name_jp'],
                'border_active_practice_attitude' => $type['in1'],
                'border_creative_attitude' => $type['in2'],
                'border_coexistence' => $type['in3'],
                'border_have_no_grudge' => $type['in4'],
                'border_respect_for_others' => $type['in5']
            ]);
        }
    }
}
