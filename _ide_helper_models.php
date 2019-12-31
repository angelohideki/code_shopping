<?php

// @formatter:off
/**
 * A helper file for your Eloquent Models
 * Copy the phpDocs from this file to the correct Model,
 * And remove them from this file, to prevent double declarations.
 *
 * @author Barry vd. Heuvel <barryvdh@gmail.com>
 */


namespace CodeShopping\Models{
/**
 * CodeShopping\Models\Category
 *
 * @property int $id
 * @property string $name
 * @property string $slug
 * @property int $active
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @method static \Illuminate\Database\Eloquent\Builder|\CodeShopping\Models\Category findSimilarSlugs($attribute, $config, $slug)
 * @method static \Illuminate\Database\Eloquent\Builder|\CodeShopping\Models\Category newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CodeShopping\Models\Category newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CodeShopping\Models\Category query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CodeShopping\Models\Category whereActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CodeShopping\Models\Category whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CodeShopping\Models\Category whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CodeShopping\Models\Category whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CodeShopping\Models\Category whereSlug($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CodeShopping\Models\Category whereUpdatedAt($value)
 */
	class Category extends \Eloquent {}
}

namespace CodeShopping\Models{
/**
 * CodeShopping\Models\User
 *
 * @property int $id
 * @property string $name
 * @property string $email
 * @property string $password
 * @property string|null $remember_token
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * @property-read \Illuminate\Notifications\DatabaseNotificationCollection|\Illuminate\Notifications\DatabaseNotification[] $notifications
 * @property-read int|null $notifications_count
 * @method static \Illuminate\Database\Eloquent\Builder|\CodeShopping\Models\User newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CodeShopping\Models\User newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\CodeShopping\Models\User query()
 * @method static \Illuminate\Database\Eloquent\Builder|\CodeShopping\Models\User whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CodeShopping\Models\User whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CodeShopping\Models\User whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CodeShopping\Models\User whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CodeShopping\Models\User wherePassword($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CodeShopping\Models\User whereRememberToken($value)
 * @method static \Illuminate\Database\Eloquent\Builder|\CodeShopping\Models\User whereUpdatedAt($value)
 */
	class User extends \Eloquent {}
}

