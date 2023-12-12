
/*
Initial function to determine if a Javascript object looks like
an IIIF Annotation instance with criteria:
-- the type attribute is string value "Annotation"
-- the object has an attribute "body" which itself has type "Model"

@obj -- a Javascript object, but generally this will be dictionary retrieved
        from a json stream
@returns  -- boolean
*/
function IsModel3DAnnotation( obj )
{
    if ( obj.type == "Annotation" &&
             obj.body.type == "Model"    
           ) return true;
    return false;
}

/*
A recursive search for a Annotation object somewhere in the tree of a 
general javascript object.
In practice, in the initial call to SearchForModel from client, the argument obj
will be the javascript dictionary value of an IIIF Presentation API Manifest.

The heart of identifying an Annotation is implemented in the IsModel3DAnnotation function.
This search is independent of, and ignores, additional structure of the Manifest
such as AnnotationPages or attributes of Canvas instances.
 
This function will return the first Annotation object which is found and identified
in the as a "3D" Annotation. The recursive search is depth-first.

A javascript 'undefined' type is returned if no 3D Annotation is identified.

@param obj A javascript object, in most cases a call to SearchForModel from client code
the obj will be a IIIF Manifest object retrieved from a json stream
@return an object that satisfies the IsModel3DAnnotation function or "undefined" type
*/
function SearchForModel( obj )
{
    if (IsModel3DAnnotation( obj )) return obj;
    
    if (obj.items )    
    {
    for ( key in Object.keys(obj.items) )
    {
        item = obj.items[key];
        sub = SearchForModel(item);
        if (sub != undefined) return sub;
    }
    return undefined;
    }
}

