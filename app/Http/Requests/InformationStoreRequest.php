<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class InformationStoreRequest extends FormRequest
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
            'websiteUrl' => 'required',
            'ticketUrl' => 'required',
            'ageRestriction' => 'required',
            'generalPricing' => 'required',
        ];
    }
}
