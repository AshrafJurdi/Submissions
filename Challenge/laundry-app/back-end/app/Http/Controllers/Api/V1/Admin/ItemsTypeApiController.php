<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreItemsTypeRequest;
use App\Http\Requests\UpdateItemsTypeRequest;
use App\ItemsType;

/**
 * @group Items type management
 *
 * APIs for managing items type
 */
class ItemsTypeApiController extends Controller
{
    public function __construct() {
        $this->middleware('jwt.auth');
    }
    
    /**
     * Fetch the list of all the available item types
     *
     * This api route return all the available item types in the database.
     *
     */
    public function index()
    {
        $itemsTypes = ItemsType::all();

        return $itemsTypes;
    }
    
    /**
     * Store a new order inside the database
     *
     * @bodyParam title string required The item type title.
     * @bodyParam price money required The item type title, number format should be with no more than 2 leading number after the decimal, 12.22 222,22.
     *
     */
    public function store(StoreItemsTypeRequest $request)
    {
        return ItemsType::create($request->all());
    }
    
    /**
     * Update am existing item type inside the database
     *
     * @bodyParam title string required The item type title.
     * @bodyParam price money required The item type title, number format should be with no more than 2 leading number after the decimal, 12.22 222,22.
     *
     */
    public function update(UpdateItemsTypeRequest $request, ItemsType $itemsType)
    {
        return $itemsType->update($request->all());
    }
    
    /**
     * List the details of 1 item type<br/>
     */
    public function show(ItemsType $itemsType)
    {
        return $itemsType;
    }
    
    /**
     * Completely delete an item type by providing the item type id
     */
    public function destroy(ItemsType $itemsType)
    {
        return $itemsType->delete();
    }
}
