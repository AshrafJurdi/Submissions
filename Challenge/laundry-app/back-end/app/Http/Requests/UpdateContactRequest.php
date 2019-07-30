<?php

namespace App\Http\Requests;

use App\User;
use Illuminate\Contracts\Validation\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Support\Facades\Auth;

class UpdateContactRequest extends FormRequest
{
    public function authorize()
    {
        return \Gate::allows('contact_edit');
    }

    public function rules()
    {
        return [
            'subject'      => [
                'required',
            ],
            'message'      => [
                'required',
            ],
            'email'        => [
                'required',
                'email'
            ],
            'name'         => [
                'nullable',
                'string'
            ],
            'address'      => [
                'nullable',
                'string'
            ],
            'phone_number' => [
                'nullable',
                'string'
            ],
        ];
    }
    
    protected function failedValidation( Validator $validator ) {
        throw new HttpResponseException(
            response()->json( [
                'success'   => false,
                'messages' => $validator->errors()->all()
            ], 200 )
        );
    }
}
