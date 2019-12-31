<?php

use Faker\Generator as Faker;

$factory->define(\CodeShopping\Models\Product::class, function (Faker $faker) {
    return [
        'name' => $faker->colorName,
        'description' => $faker->colorName,
        'price' => $faker->buildingNumber
    ];
});
