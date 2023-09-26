<?php

namespace App\UseCase;

class Shit
{
    public function めちゃねネスト()
    {
        $variable1 = 'variable1';
        $variable2 = 'variable2';
        
        if ($variable1){
            if($variable2){
                if ($variable1) {
                    if ($variable2) {
                        if ($variable1) {
                            if ($variable2) {
                                if ($variable1) {
                                    return $variable2;
                                }
                            }
                        }
                    }
                }   
            }
        }
    }

    public function マジックナンバーが乱用()
    {
        $variable1 = '';
        $variable2 = '';

        if ($variable1 ===  'マジックナンバー1') {
        }
        if ($variable2 ===  'マジックナンバー2') {
            switch ($variable1) {
                case 12345:
                    # code...
                    break;
                case '12345':
                    # code...
                    break;
                case 'マジックナンバー':
                    # code...
                    break;
                default:
                    # code...
                    break;
            }
        }
    }

    public function 共通処理されてない()
    {
        $variable1 = 1;
        $variable2 = 2;
        $variable3 = 3;
        $variable4 = 4;
        $variable5 = 5;
        
        $result = false;

        if ($variable1 % 2 != 0) {
            $result = true;
        } else {
            $result = false;
        }

        if ($variable2 % 2 != 0) {
            $result = true;
        } else {
            $result = false;
        }

        if ($variable3 % 2 != 0) {
            $result = true;
        } else {
            $result = false;
        }

        if ($variable4 % 2 != 0) {
            $result = true;
        } else {
            $result = false;
        }

        if ($variable5 % 2 != 0) {
            $result = true;
        } else {
            $result = false;
        }
        
        return $result;
        
    }
    // function isOdd($number)
    // {
    //     if ($number % 2 != 0) {
    //         return true; // 奇数
    //     } else {
    //         return false; // 偶数
    //     }
    // }
}
