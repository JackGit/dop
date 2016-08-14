
dop.protocol._onsubscribe = function( node, request_id, request, response ) {

    if (response[0] !== 0)
        request.promise.reject( dop.core.getRejectError(response[0], request[2]) );

    else {
        var object_name = request[2],
            object_remote_id = response[1],
            object_remote = response[2];

        var proxy = dop.core.registerObject(object_remote, node.token ),
        object_id = proxy[dop.specialkey.object_path][0];
        dop.core.registerNodeObject(node, object_id, object_name);
        node.object_ref[object_remote_id] = object_id;
        request.promise.resolve( proxy );
    }

};