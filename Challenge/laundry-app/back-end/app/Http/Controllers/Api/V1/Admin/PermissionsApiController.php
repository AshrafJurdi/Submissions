<?php

namespace App\Http\Controllers\Api\V1\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\StorePermissionRequest;
use App\Http\Requests\UpdatePermissionRequest;
use App\Permission;

/**
 * @group Permission management
 *
 * APIs for managing permission
 */
class PermissionsApiController extends Controller
{
    public function __construct() {
        $this->middleware('jwt.auth');
    }
    
    public function index()
    {
        $permissions = Permission::all();

        return $permissions;
    }

    public function store(StorePermissionRequest $request)
    {
        return Permission::create($request->all());
    }

    public function update(UpdatePermissionRequest $request, Permission $permission)
    {
        return $permission->update($request->all());
    }

    public function show(Permission $permission)
    {
        return $permission;
    }

    public function destroy(Permission $permission)
    {
        return $permission->delete();
    }
}
