<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class LocationStoreRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {

        return [
            'hiddenLocationToggle' => 'required',
            'city' => 'required',
            'region' => 'required',
            'country' => 'required',
            'hiddenLocation' => 'max:500'
        ];
    }
}
