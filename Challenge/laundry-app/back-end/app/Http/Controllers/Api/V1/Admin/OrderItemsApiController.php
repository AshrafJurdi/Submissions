<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreOrderItemRequest;
use App\Http\Requests\UpdateOrderItemRequest;
use App\OrderItem;
/**
 * @group Order Items management
 *
 * APIs for managing order items
 */
class OrderItemsApiController extends Controller
{
    public function __construct() {
        $this->middleware('jwt.auth');
    }
    
    /**
     * Fetch the list of all orders items
     *
     * This api route return all the orders in the database.
     *
     */
    public function index()
    {
        $orderItems = OrderItem::all();

        return $orderItems;
    }
    
    /**
     * Store a new order item inside the database
     *
     * @bodyParam order_id integer required The order Id, it should be a valid order id.
     * @bodyParam item_type_id integer required The Item type Id, it should be a valid item_type id.
     * @bodyParam status string The order item status, should be one of the following pending, processing, done.
     * @bodyParam details string The order item details.
     */
    public function store(StoreOrderItemRequest $request)
    {
        return OrderItem::create($request->all());
    }
    
    /**
     * Modify an existing order item inside the database
     *
     * @bodyParam order_id integer required The order Id, it should be a valid order id.
     * @bodyParam item_type_id integer required The Item type Id, it should be a valid item_type id.
     * @bodyParam status string The order item status, should be one of the following pending, processing, done.
     * @bodyParam details string The order item details.
     */
    public function update(UpdateOrderItemRequest $request, OrderItem $orderItem)
    {
        return $orderItem->update($request->all());
    }
    
    /**
     * List the details of 1 order item by Order item id <br/>
     *  /api/v1/order-items/{order_item} where order_item is an integer
     */
    public function show(OrderItem $orderItem)
    {
        return $orderItem;
    }
    
    /**
     * Completely delete an order item by providing the order_item id
     *  /api/v1/order-items/{order_item} where order_item is an integer
     */
    public function destroy(OrderItem $orderItem)
    {
        return $orderItem->delete();
    }
}
