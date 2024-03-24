<?php 

namespace App\Helpers;

class Api 
{ 
    public static function apiSuccessResponse($message,$data=[])
    {
        $success = [
            'status'        => true,
            'statusCode'    => 200,
            'message'       => $message,
            'data'          => $data
        ]; 
        
        return $success;
    }

    public static function validationResponse($validator)
    {
        foreach($validator->errors()->toArray() as $v => $a){

            $validationError = [
                'status'        => false,
                'statusCode'    => 422,
                'message'       => $a[0],
            ];
    
            return $validationError;
            
        }

    }

    public static function apiErrorResponse($message,$errorCode=422)
    {
        $error = [
            'status'        => false,
            'statusCode'    => $errorCode,
            'message'       => $message,
        ];

        return $error;
    }

}