const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.sass('resources/sass/app-create.scss', 'public/css')
    .sass('resources/sass/app-admin.scss', 'public/css')
    .sass('resources/sass/app-lite.scss', 'public/css')
    .sass('resources/sass/app.scss', 'public/css');
    
// if (mix.inProduction()) {
//     mix.version();
// }
