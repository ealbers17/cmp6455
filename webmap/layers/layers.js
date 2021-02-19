var wms_layers = [];


        var lyr_MapSurferASTERGDEMSRTMHillshade_0 = new ol.layer.Tile({
            'title': 'MapSurfer ASTER GDEM-SRTM Hillshade',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="http://srtm.csi.cgiar.org/; https://lpdaac.usgs.gov/products/aster_policies;">SRTM, ASTER GDEM is a product of METI and NASA, Imagery GIScience Research Group @ Heidelberg University</a>',
                url: 'https://maps.heigit.org/openmapsurfer/tiles/asterh/webmercator/{z}/{x}/{y}.png'
            })
        });
var format_SLCo_Healthcare_Facilities_Tracts_1 = new ol.format.GeoJSON();
var features_SLCo_Healthcare_Facilities_Tracts_1 = format_SLCo_Healthcare_Facilities_Tracts_1.readFeatures(json_SLCo_Healthcare_Facilities_Tracts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLCo_Healthcare_Facilities_Tracts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLCo_Healthcare_Facilities_Tracts_1.addFeatures(features_SLCo_Healthcare_Facilities_Tracts_1);
var lyr_SLCo_Healthcare_Facilities_Tracts_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLCo_Healthcare_Facilities_Tracts_1, 
                style: style_SLCo_Healthcare_Facilities_Tracts_1,
                interactive: true,
    title: 'SLCo_Healthcare_Facilities_Tracts<br />\
    <img src="styles/legend/SLCo_Healthcare_Facilities_Tracts_1_0.png" /> 0 - 0<br />\
    <img src="styles/legend/SLCo_Healthcare_Facilities_Tracts_1_1.png" /> 0 - 2<br />\
    <img src="styles/legend/SLCo_Healthcare_Facilities_Tracts_1_2.png" /> 2 - 5<br />\
    <img src="styles/legend/SLCo_Healthcare_Facilities_Tracts_1_3.png" /> 5 - 10<br />\
    <img src="styles/legend/SLCo_Healthcare_Facilities_Tracts_1_4.png" /> 10 - 17<br />'
        });
var format_SLCo_County_Boundary_2 = new ol.format.GeoJSON();
var features_SLCo_County_Boundary_2 = format_SLCo_County_Boundary_2.readFeatures(json_SLCo_County_Boundary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SLCo_County_Boundary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SLCo_County_Boundary_2.addFeatures(features_SLCo_County_Boundary_2);
var lyr_SLCo_County_Boundary_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_SLCo_County_Boundary_2, 
                style: style_SLCo_County_Boundary_2,
                interactive: true,
                title: '<img src="styles/legend/SLCo_County_Boundary_2.png" /> SLCo_County_Boundary'
            });

lyr_MapSurferASTERGDEMSRTMHillshade_0.setVisible(true);lyr_SLCo_Healthcare_Facilities_Tracts_1.setVisible(true);lyr_SLCo_County_Boundary_2.setVisible(true);
var layersList = [lyr_MapSurferASTERGDEMSRTMHillshade_0,lyr_SLCo_Healthcare_Facilities_Tracts_1,lyr_SLCo_County_Boundary_2];
lyr_SLCo_Healthcare_Facilities_Tracts_1.set('fieldAliases', {'objectid': 'objectid', 'geoid10': 'geoid10', 'total_count': 'total_count', 'total': 'total', });
lyr_SLCo_County_Boundary_2.set('fieldAliases', {'pk': 'pk', 'objectid': 'objectid', 'countynbr': 'countynbr', 'entitynbr': 'entitynbr', 'entityyr': 'entityyr', 'name': 'name', 'fips': 'fips', 'stateplane': 'stateplane', 'pop_lastce': 'pop_lastce', 'pop_curres': 'pop_curres', 'globalid': 'globalid', 'fips_str': 'fips_str', 'color4': 'color4', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_SLCo_Healthcare_Facilities_Tracts_1.set('fieldImages', {'objectid': 'TextEdit', 'geoid10': 'TextEdit', 'total_count': 'TextEdit', 'total': 'TextEdit', });
lyr_SLCo_County_Boundary_2.set('fieldImages', {'pk': 'TextEdit', 'objectid': 'Range', 'countynbr': 'TextEdit', 'entitynbr': 'Range', 'entityyr': 'Range', 'name': 'TextEdit', 'fips': 'Range', 'stateplane': 'TextEdit', 'pop_lastce': 'Range', 'pop_curres': 'Range', 'globalid': 'TextEdit', 'fips_str': 'TextEdit', 'color4': 'Range', 'shape_leng': 'TextEdit', 'shape_area': 'TextEdit', });
lyr_SLCo_Healthcare_Facilities_Tracts_1.set('fieldLabels', {'objectid': 'no label', 'geoid10': 'no label', 'total_count': 'no label', 'total': 'no label', });
lyr_SLCo_County_Boundary_2.set('fieldLabels', {'pk': 'inline label', 'objectid': 'inline label', 'countynbr': 'inline label', 'entitynbr': 'inline label', 'entityyr': 'inline label', 'name': 'inline label', 'fips': 'inline label', 'stateplane': 'inline label', 'pop_lastce': 'inline label', 'pop_curres': 'inline label', 'globalid': 'inline label', 'fips_str': 'inline label', 'color4': 'inline label', 'shape_leng': 'inline label', 'shape_area': 'inline label', });
lyr_SLCo_County_Boundary_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});