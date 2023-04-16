<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuestionsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        /**
         * category_id
         * question_contents
         * is_reversal
         * 1	active_practice_attitude
         * 2	creative_attitude
         * 3	coexistence
         * 4	have_no_grudge
         * 5	respect_for_others
         */
        $types = [
            ['c_id' => 1, 'cnts' => '努力を惜しまずに、自分のできることに向かって完全燃焼する', 'rvs' => false],
            ['c_id' => 2, 'cnts' => '自分の持っている潜在的可能性を追求し続ける', 'rvs' => false],
            ['c_id' => 3, 'cnts' => '他者との関わりを大事にする', 'rvs' => false],
            ['c_id' => 4, 'cnts' => '過去の失敗をくよくよ後悔しない', 'rvs' => false],
            ['c_id' => 5, 'cnts' => '他人と争うようなことはしたくない', 'rvs' => false],
            ['c_id' => 1, 'cnts' => '自分のやることに最善の努力を尽くす', 'rvs' => false],
            ['c_id' => 2, 'cnts' => '自らを創造・開発していく', 'rvs' => false],
            ['c_id' => 3, 'cnts' => '何事も人間1人の力で出来るものでないから、お互いの協力を大事にする', 'rvs' => false],
            ['c_id' => 4, 'cnts' => '何かに失敗しても混乱したり絶望したりしない', 'rvs' => false],
            ['c_id' => 5, 'cnts' => '周囲の人と利害関係をはなれた付き合いをする', 'rvs' => false],
            ['c_id' => 1, 'cnts' => '時間やものを無駄にしない', 'rvs' => false],
            ['c_id' => 2, 'cnts' => '将来に希望と期待をいだいている', 'rvs' => false],
            ['c_id' => 3, 'cnts' => '他人には誠実な心を持って接する', 'rvs' => false],
            ['c_id' => 4, 'cnts' => '事実をわだかあまりなく、さっぱりと受け入れる', 'rvs' => false],
            ['c_id' => 5, 'cnts' => '他人をないがしろにしない', 'rvs' => false],
            ['c_id' => 1, 'cnts' => '今という時を大切にする', 'rvs' => false],
            ['c_id' => 2, 'cnts' => '何事も自分のことは自分でやる', 'rvs' => false],
            ['c_id' => 3, 'cnts' => '今という時を大切にする', 'rvs' => false],
            ['c_id' => 4, 'cnts' => '自分自身にこだわりをもたない', 'rvs' => false],
            ['c_id' => 5, 'cnts' => '自分の欲望のためには他人に迷惑をかけてもかまわない', 'rvs' => true],
            ['c_id' => 1, 'cnts' => '義務や責任をすすんで果たす', 'rvs' => false],
            ['c_id' => 2, 'cnts' => '自分のなかに好まない面を見つけたら、隠すよりも良くしていこうとする', 'rvs' => false],
            ['c_id' => 3, 'cnts' => '出来るだけ多くの物事を見聞きしようとする', 'rvs' => false],
            ['c_id' => 4, 'cnts' => '自分自身の行為に自信を持っている', 'rvs' => false],
            ['c_id' => 1, 'cnts' => '何か自分のできることに専念する', 'rvs' => false],
            ['c_id' => 2, 'cnts' => '何事にも興味と好奇心を持って接する', 'rvs' => false],
            ['c_id' => 1, 'cnts' => 'かけがえのない生命を精一杯生きる', 'rvs' => false],
            ['c_id' => 2, 'cnts' => '自分の良い面は否定せずに素直に受け入れる', 'rvs' => false],
        ];

        foreach ($types as $type) {
            DB::table('questions')->insert([
                'category_id' => $type['c_id'],
                'question_contents' => $type['cnts'],
                'is_reversal' => $type['rvs'],
            ]);
        }
    }
}
