<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreProductRequest;
use App\Http\Requests\UpdateProductRequest;
use App\Jobs\EmailNotification;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductController extends Controller
{
    public function index()
    {
        $products = Product::all();
        return view('index', compact('products'));
    }

    public function show(Product $product)
    {
        return response()->json($product);
    }

    public function store(StoreProductRequest $request)
    {
        try {
            DB::beginTransaction();
            $request->validated();
            $product = new Product();
            $product->NAME = $request->name;
            $product->ARTICLE = $request->article;
            $product->STATUS = $request->status;
            $product->DATA = $request->data;
            $product->save();
            EmailNotification::dispatch(auth()->user(), $product);
            DB::commit();
            return redirect()->route('index');
        } catch (\Exception $e) {
            DB::rollback();
            return response($e->getMessage(), 500);
        }
    }

    public function update(UpdateProductRequest $request)
    {
        $request->validated();

        try {
            DB::beginTransaction();
            $product = Product::where('ID', $request->id)->first();
            if (auth()->user()->role !== 'admin' && $product->ARTICLE !== $request->article) {
                return redirect()->back()->withErrors(['article' => ['У вас нету права на редактирование артикул продукта']]);
            } else {
                $product->update([
                    'ARTICLE' => $request->article,
                    'NAME' => $request->name,
                    'STATUS' => $request->status,
                    'DATA' => $request->data
                ]);
                DB::commit();
                return redirect()->route('index');
            }
        } catch (\Exception $e) {
            DB::rollback();
            return response($e->getMessage(), 500);
        }
    }

    public function delete(Product $product)
    {
        $product->delete();
        return response('', 200);
    }
}
