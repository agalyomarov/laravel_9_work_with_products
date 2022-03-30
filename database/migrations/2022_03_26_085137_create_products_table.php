<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('products', function (Blueprint $table) {
            $table->unsignedInteger('ID')->autoIncrement();
            $table->string('ARTICLE', 255);
            $table->string('NAME', 255);
            $table->string('STATUS', 255);
            $table->jsonb('DATA');
            $table->timestamps();
            $table->softDeletes();
            $table->unique('ARTICLE', 'uniquex_article');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('products');
    }
};
