<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreServiceRequest;
use App\Http\Requests\UpdateServiceRequest;
use App\Service;

/**
 * @group Service management
 *
 * APIs for managing services
 */
class ServicesApiController extends Controller {
    /**
     * Fetch the list of all services
     *
     * This api route return all the services in the database.
     *
     */
    public function index() {
        $services = Service::all();
        
        return $services;
    }
    
    /**
     * Store a new sliders inside the database
     *
     * @bodyParam title string required The slider title.
     * @bodyParam image file required The slider image.
     * @bodyParam description string The service description.
     *
     */
    public function store( StoreServiceRequest $request ) {
        return Service::create( $request->all() );
    }
    
    /**
     * Update an existing service inside the database
     *
     * @bodyParam title string required The slider title.
     * @bodyParam image file The slider image.
     * @bodyParam description string The service description.
     *
     */
    public function update( UpdateServiceRequest $request, Service $service ) {
        return $service->update( $request->all() );
    }
    
    /**
     * List the details of 1 service by providing the service id <br/>
     */
    public function show( Service $service ) {
        return $service;
    }
    
    /**
     * Completely delete service by providing 1 service id per time
     *  /api/v1/services/{service} where service is an integer
     */
    public function destroy( Service $service ) {
        $service->delete();
        
        return response( "OK", 200 );
    }
}
