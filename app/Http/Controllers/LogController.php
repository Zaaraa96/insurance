<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class LogController extends Controller
{
    public function log(Request $request){
      $input = $request->all();
      \App\Log::create($input);
    }
}
