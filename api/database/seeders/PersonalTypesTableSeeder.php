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

        $types = [['name' => 'altruist', 'name_jp' => '奉仕型', 'in1' => 21.1, 'in2' => 23, 'in3' => 25.4, 'in4' => 13.1, 'in5' => 16.5], ['name' => 'hedonistic', 'name_jp' => '安楽型', 'in1' => 21.1, 'in2' => 23, 'in3' => 22.5, 'in4' => 16, 'in5' => 15.8], ['name' => 'love', 'name_jp' => '慈愛型', 'in1' => 21.1, 'in2' => 25.8, 'in3' => 25.4, 'in4' => 14.5, 'in5' => 16.5], ['name' => 'moderation', 'name_jp' => '中庸型', 'in1' => 21.1, 'in2' => 28.6, 'in3' => 22.5, 'in4' => 17.4, 'in5' => 15.1], ['name' => 'accepting', 'name_jp' => '受容型', 'in1' => 23.8, 'in2' => 23, 'in3' => 22.5, 'in4' => 17.4, 'in5' => 16.5], ['name' => 'variety', 'name_jp' => '多彩型', 'in1' => 23.8, 'in2' => 34.2, 'in3' => 21, 'in4' => 17.4, 'in5' => 15.1], ['name' => 'hedonism', 'name_jp' => '享楽型', 'in1' => 23.8, 'in2' => 31.4, 'in3' => 21, 'in4' => 16, 'in5' => 13.6], ['name' => 'cooperation', 'name_jp' => '協同型', 'in1' => 26.4, 'in2' => 23, 'in3' => 25.4, 'in4' => 13.1, 'in5' => 16.5], ['name' => 'acceptance-of-life', 'name_jp' => '達観型', 'in1' => 29.1, 'in2' => 34.2, 'in3' => 22.5, 'in4' => 14.5, 'in5' => 14.4], ['name' => 'self-disciplined', 'name_jp' => '克己型', 'in1' => 29.1, 'in2' => 34.2, 'in3' => 19.6, 'in4' => 11.6, 'in5' => 13.6], ['name' => 'activist', 'name_jp' => '活動型', 'in1' => 31.8, 'in2' => 32, 'in3' => 25.4, 'in4' => 14.5, 'in5' => 13.6], ['name' => 'meditative', 'name_jp' => '瞑想・内面型', 'in1' => 31.8, 'in2' => 34.2, 'in3' => 19.6, 'in4' => 16, 'in5' => 15.1], ['name' => 'achievement', 'name_jp' => '行動・努力型', 'in1' => 31.8, 'in2' => 34.2, 'in3' => 22.5, 'in4' => 11.6, 'in5' => 11.6],];

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
