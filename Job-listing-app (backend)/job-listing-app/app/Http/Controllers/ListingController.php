<?php

namespace App\Http\Controllers;

use App\Models\listings;
use Illuminate\Http\Request;

class ListingController extends Controller
{
    public function show(Request $r ,$id = null){
        // $data = listings::find($id);
        // return response()->json($data);
        $data = $id?listings::find($id):listings::latest()->get();
        return response()->json($data);
    }

    public function show_one($id){
        $data = listings::find($id);
        // dd($data);
        return response()->json($data);
    }

    public function create(Request $req){

        $data = new listings();
        $data->title = $req->title;
        $data->company = $req->company;
        $data->email = $req->email;
        $data->experience = $req->experience;
        $data->location = $req->location;
        $data->skills = $req->skills;
        $data->job_link = $req->job_link;
        $data->description = $req->description;
        $result = $data->save();
        if($result){
            return['Result' => 'success'];
        }else{
            return['Result' => 'failed'];
        }


    }

    public function edit(Request $req, $id){

        $data = listings::find($id);
        $data->title = $req->title;
        $data->company = $req->company;
        $data->email = $req->email;
        $data->experience = $req->experience;
        $data->location = $req->location;
        $data->skills = $req->skills;
        $data->job_link = $req->job_link;
        $data->description = $req->description;
        $result = $data->save();
        if($result){
            return['Result' => 'success edit'];
        }else{
            return['Result' => 'failed edit'];
        }


    }

    public function search($title){
        $result = listings::where('title', 'like', '%'.$title.'%')->get();
        if(count($result)){
            return $result;
        } else {
            return ['Result' => 'No records found'];
        }

    }

    public function delete($id){
        $data = listings::find($id);
        $result = $data->delete();
        if ($result) {
            return['Result' => 'successfully deleted'];
        }else{
            return['Result' => 'failed'];
        }

    }




}
