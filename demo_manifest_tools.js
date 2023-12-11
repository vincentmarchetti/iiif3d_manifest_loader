manifest={"@context":["http://www.w3.org/ns/anno.jsonld","http://iiif.io/api/presentation/3/context.json"],
          "id":"https://www.rpm-api.io/records/5e7de766317ed200177bdeb7?_format=iiif",
          "type":"Manifest",
          "items":[{"id":"https://www.rpm-api.io/records/5e7de766317ed200177bdeb7/canvas/0","type":"Canvas","items":[{"id":"https://www.rpm-api.io/records/5e7de766317ed200177bdeb7/canvas/0/annotationpage/0","type":"AnnotationPage","items":[{"id":"https://www.rpm-api.io/records/5e7de766317ed200177bdeb7/canvas/0/annotation/0","type":"Annotation","motivation":"painting","body":{"id":"https://rpm-collections.s3.eu-west-2.amazonaws.com/e4fd82cfa63942218e1568a28efe46db.glb","type":"Model","format":"model/gltf-binary","label":{"@none":["Greenfinch"]}},"target":"https://www.rpm-api.io/records/5e7de766317ed200177bdeb7/canvas/0"}]}],"label":{"@none":["Greenfinch"]},"thumbnail":[]}],"label":{"@none":["Greenfinch"]},"metadata":[{"label":{"@none":["Title"]},"value":{"@none":["Greenfinch"]}},{"label":{"@none":["Department"]},"value":{"@none":["Natural Sciences"]}},{"label":{"@none":["Category"]},"value":{"@none":["Greenfinch"]}},{"label":{"@none":["Creator"]},"value":{"@none":["Not recorded"]}},{"label":{"@none":["Place Created"]},"value":{"@none":["Hove"]}},{"label":{"@none":["Date Created"]},"value":{"@none":["Not recorded"]}},{"label":{"@none":["Collector"]},"value":{"@none":["No recorded"]}},{"label":{"@none":["Materials"]},"value":{"@none":["Not recorded"]}},{"label":{"@none":["Measurements"]},"value":{"@none":["Not recorded"]}},{"label":{"@none":["Description"]},"value":{"@none":["Greenfinch. Mounted on wire and suspended from a piece of wood."]}},{"label":{"@none":["Licence"]},"value":{"@none":["https://creativecommons.org/licenses/by-sa/4.0/"]}},{"label":{"@none":["Accession Id"]},"value":{"@none":["209181"]}}],"requiredStatement":{"label":{"en":["Attribution"]},"value":{"en":["Photogrammetry by Sophie Dixon."]}},"rights":"https://creativecommons.org/licenses/by-sa/4.0/"}

model = {"id":"https://www.rpm-api.io/records/5e7de766317ed200177bdeb7/canvas/0/annotation/0",
         "type":"Annotation",
         "motivation":"painting",
         "body":{"id":"https://rpm-collections.s3.eu-west-2.amazonaws.com/e4fd82cfa63942218e1568a28efe46db.glb",
                 "type":"Model","format":"model/gltf-binary","label":{"@none":["Greenfinch"]}},
         "target":"https://www.rpm-api.io/records/5e7de766317ed200177bdeb7/canvas/0"}

result = SearchForModel( manifest );
//result = SearchForModel( model )
//result = IsModel3DAnnotation( model )
if (result == undefined)
{
    print("no result found");
}
else
{
    print( result.body.id)

}