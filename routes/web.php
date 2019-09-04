<?php

Route::get('/', function () {
    return view('welcome');
});

Route::get('/view', function(){
		return view('view');
});

Route::resource('tasks', 'TaskController');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
