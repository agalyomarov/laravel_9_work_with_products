<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
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
            'name' => ['required', 'min:10', 'max:255'],
            'article' => ['required', 'regex:/^[a-zA-Z0-9_\-]+$/', 'unique:products,ARTICLE', 'max:255'],
            'status' => [],
            'data' => [],
        ];
    }
}
