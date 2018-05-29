<?php

Route::get('/', 'OrderController@index');

Route::resource('orders', 'OrderController');
