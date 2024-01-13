#! python


MANIFEST_URL_BASE="https://spri-open-resources.s3.us-east-2.amazonaws.com/iiif3dtsg/manifests/20231220/"
LOADER_URL="three_d_manifest_loader.html"


manifest_entries = [
("Astronaut",    "astronaut.json",   "build_astronaut.py"),
("Archimedes",    "archimedes.json", "build_archimedes.py"),
("Saxophone",     "saxophone.json",   "build_saxophone.py"),
("Nun's cell",    "nuns_cell.json",  "build_nuns_cell.py"),
("Venus de Milo", "venus.json"    ,  "build_venus.py"),
("Whale Skull" ,  "whale.json"    ,  "build_whale.py"),
]

import urllib.parse, posixpath

for name, basename,_ in manifest_entries:
    manfest_parsed_base = urllib.parse.urlparse(MANIFEST_URL_BASE)
    manifest_url = urllib.parse.urlunparse(
        manfest_parsed_base._replace(
            path=posixpath.join(
                manfest_parsed_base.path,
                basename
            )
        )    
    )
    manifest_query=urllib.parse.urlencode({"url":manifest_url})
    
    loader_parsed_url=urllib.parse.urlparse(LOADER_URL)
    href=urllib.parse.urlunparse(
        loader_parsed_url._replace(
            query = manifest_query
        )
    )

    print(f'<li><a href="{href}">{name}</a></li>')
    

