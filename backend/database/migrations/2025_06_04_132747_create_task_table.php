<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('task', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('description')->nullable();
            
            $table->unsignedBigInteger('status_id');
            $table->foreign('status_id')->references('id')->on('status')->onDelete('restrict');
            
            $table->unsignedBigInteger('priority_id');
            $table->foreign('priority_id')->references('id')->on('priority')->onDelete('restrict');

            $table->string('comment')->nullable();
            $table->date('until')->nullable();

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('task');
    }
};
