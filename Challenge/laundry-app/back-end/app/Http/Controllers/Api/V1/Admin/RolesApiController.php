<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreRoleRequest;
use App\Http\Requests\UpdateRoleRequest;
use App\Role;

/**
 * @group Role management
 *
 * APIs for managing user roles
 */
class RolesApiController extends Controller {
    public function __construct() {
        $this->middleware( 'jwt.auth' );
    }
    
    /**
     * Fetch the list of all roles
     *
     * This api route return all the roles in the database.
     *
     */
    public function index() {
        $roles = Role::all();
        
        return $roles;
    }
    
    /**
     * Store a new role inside the database
     *
     * @bodyParam title string required The new role title.
     * @bodyParam permissions array required The set of permission id's.
     * @bodyParam permissions.* integer The permission id.
     *
     */
    public function store( StoreRoleRequest $request ) {
        return Role::create( $request->all() );
    }
    
    /**
     * Update an existing role inside the database
     *
     * @bodyParam title string required The new role title.
     * @bodyParam permissions array required The set of permission id's.
     * @bodyParam permissions.* integer The permission id.
     *
     */
    public function update( UpdateRoleRequest $request, Role $role ) {
        return $role->update( $request->all() );
    }
    
    /**
     * List the details of 1 role by role id <br/>
     *  /api/v1/roles/{role} where role is an integer
     */
    public function show( Role $role ) {
        return $role;
    }
    
    /**
     * Completely delete role by providing 1 role id per time
     *  /api/v1/roles/{role} where role is an integer
     */
    public function destroy( Role $role ) {
        return $role->delete();
    }
}
