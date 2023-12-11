

function IsModel3DAnnotation( obj )
{
    if ( obj.type == "Annotation" &&
             obj.body.type == "Model"    
           ) return true;
    return false;
}

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

