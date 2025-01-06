<?php

namespace App\Helpers;
use Illuminate\Support\Facades\DB;

class CrudHelper
{
    public static function Create($tabledb, $create_array)
    {
        return DB::table($tabledb)->insert($create_array);
    }

    public static function Exist($tabledb, $where_array)
    {
        return DB::table($tabledb)->where($where_array)->exists();
    }

    public static function Get($tabledb, $get_array){
        return DB::table($tabledb)->where($get_array)->orderBy('updated_at', 'asc')->get();
    }

    public static function Geteverything($tabledb){
        return DB::table($tabledb)->orderBy('updated_at', 'desc')->get();
    }

    public static function Update($tabledb, $where_array, $update_array){
        return DB::table($tabledb)->where($where_array)->update($update_array);
    }

    public static function Delete($tabledb, $where_array){
        return DB::table($tabledb)->where($where_array)->delete();
    }
}