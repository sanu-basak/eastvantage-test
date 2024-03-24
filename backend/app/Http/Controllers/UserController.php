<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Validator;
use Api;

class UserController extends Controller
{
    public function registerUser(Request $request)
    {
        try {

            $validator = Validator::make($request->all(), [
                'name' => 'required|string',
                'email' => 'required|email|unique:users,email',
                'role' => 'required|string|in:author,editor,subscriber,administrator'
            ]);

            if ($validator->fails()) {
                return response()->json(Api::validationResponse($validator), 422);
            }

            User::create([
                'name' => $request->name,
                'email' => $request->email,
                'role' => $request->role
            ]);
    
            return response()->json(Api::apiSuccessResponse(__('message.userRegisterSuccessfully'),$user),200);
        } catch (\Exception $e) {
            return response()->json(Api::apiErrorResponse(__('message.somethingWentWrong')),500);
        }
        
    }

    public function getUser(Request $request)
    {
        try {

            $validator = Validator::make($request->all(),[
                'role'      => 'required|in:"author", "editor", "subscriber", "administrator"'
            ]);
    
            if($validator->fails()){
                return response()->json(Api::validationResponse($validator),422);
            }

            $user = User::select('id','name','email','role')->where('role',$request->role)->get();

            return response()->json(Api::apiSuccessResponse(__('message.userDataFetchSuccessfully'),$user),200);
            
        } catch (\Exception $e) {
            return response()->json(Api::apiErrorResponse(__('message.somethingWentWrong')),500);
        }
    }
}
