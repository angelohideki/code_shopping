<?php

use CodeShopping\Models\Product;
use CodeShopping\Models\ProductOutput;
use Illuminate\Database\Seeder;

class ProductOutputsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $products = Product::all();
        factory(ProductOutput::class,200)
            ->make()
            ->each(function ($input) use($products){
                $product = $products->random();
                $input->product_id = $product->id;
                $input->save();
            });
    }
}
