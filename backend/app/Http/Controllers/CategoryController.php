<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Category;
use Illuminate\Support\Facades\DB;


class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Category::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'color' => 'nullable|string|max:20',
        ]);

        $exists = DB::table('category')->where('title', $validated['title'])->exists();

        if ($exists) {
            return response()->json([
                'message' => 'Category with this title already exists',
            ], 422);
        } else {
            $category = Category::create($validated);

            return response()->json([
                'message' => 'Category created successfully',
                'category' => $category
            ], 201);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $category = Category::findOrFail($id);

        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'nullable|string',
            'color' => 'nullable|string|max:20',
        ]);

        $category->update($validated);

        return response()->json([
            'message' => 'Category updated successfully',
            'category' => $category
        ], 201);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $category = Category::findOrFail($id);
        
        if ($category->delete()) {
            return response()->json([
                'message' => 'Category successfully deleted',
                'category' => $id
            ], 201);
        } else {
            return response()->json([
                'message' => 'Failed to delete Category',
                'category' => $id
            ], 401);
        }

    }
}
