          
var travGeoJsonProvince = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name": "British Columbia",
          "icon": "bcMarker", 
          "isPOE" : false, 
          "isRoad" : false
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -124.9805,55.2290
          ]
        }
      },
    ]  
  };

var travGeoJsonMarine = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name":"Cruise Ship Operations",
          "icon": "marineMarker", 
          "isPOE" : true, 
          "isRoad" : false
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -123.11247,49.28801
          ]
        }
      },
    ]
};

var travGeoJsonAir = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "properties": {
          "name":"Vancouver Airport",
          "icon": "airMarker", 
          "isPOE" : true, 
          "isRoad" : false
        },
        "geometry": {
          "type": "Point",
          "coordinates": [
            -123.17879676818848,49.195110495472456
          ]
        }
      },
    ]
};


var travGeoJsonHighway = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {
        "name":"Abbotsford - Huntingdon (817)",
        "icon": "carMarker", 
        "isPOE" : true, 
        "isRoad" : true
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.26598,49.01230
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name":"Pacific Highway (813)",
        "icon": "carMarker", 
        "isPOE" : true, 
        "isRoad" : true
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.73428,49.00375
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name":"Douglas (840)",
        "icon": "carMarker", 
        "isPOE" : true, 
        "isRoad" : true
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.75745,49.00555
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name":"Stewart",
        "icon": "carMarker", 
        "isPOE" : true, 
        "isRoad" : true
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -130.01789,55.91199
        ]
      }
    },
    {
      "type": "Feature",
      "properties": {
        "name":"Pleasant Camp (891)",
        "icon": "carMarker", 
        "isPOE" : true, 
        "isRoad" : true
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -136.36662,59.45468
        ]
      }
    }
  ]
};

var travGeoJsonAll = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "id": 'province',
      "properties": {
        "name": "British Columbia",
        "icon": "bcMarker", 
        "isPOE" : false, 
        "isRoad" : false
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -124.9805,55.2290
        ]
      }
    },
    {
      "type": "Feature",
      "id": 'marine',
      "properties": {
        "name":"Cruise Ship Operations",
        "icon": "marineMarker", 
        "isPOE" : true, 
        "isRoad" : false
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.11247,49.28801
        ]
      }
    },
    {
      "type": "Feature",
      "id": 'air',
      "properties": {
        "name":"Vancouver Airport",
        "icon": "airMarker", 
        "isPOE" : true, 
        "isRoad" : false
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -123.17879676818848,49.195110495472456
        ]
      }
    },
    {
      "type": "Feature",
      "id": 'car',
      "properties": {
        "name":"Abbotsford - Huntingdon (817)",
        "icon": "carMarker", 
        "isPOE" : true, 
        "isRoad" : true
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.26598,49.01230
        ]
      }
    },
    {
      "type": "Feature",
      "id": 'car',
      "properties": {
        "name":"Pacific Highway (813)",
        "icon": "carMarker", 
        "isPOE" : true, 
        "isRoad" : true
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.73428,49.00375
        ]
      }
    },
    {
      "type": "Feature",
      "id": 'car',
      "properties": {
        "name":"Douglas (840)",
        "icon": "carMarker", 
        "isPOE" : true, 
        "isRoad" : true
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -122.75745,49.00555
        ]
      }
    },
    {
      "type": "Feature",
      "id": 'car',
      "properties": {
        "name":"Stewart",
        "icon": "carMarker", 
        "isPOE" : true, 
        "isRoad" : true
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -130.01789,55.91199
        ]
      }
    },
    {
      "type": "Feature",
      "id": 'car',
      "properties": {
        "name":"Pleasant Camp (891)",
        "icon": "carMarker", 
        "isPOE" : true, 
        "isRoad" : true
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          -136.36662,59.45468
        ]
      }
    }
  ]
}
                
export {travGeoJsonHighway, travGeoJsonAir, travGeoJsonMarine, travGeoJsonProvince, travGeoJsonAll};