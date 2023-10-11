import React, {useState, useEffect} from "react";
// import 'ol/ol.css'
// import ol from 'ol';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';


// import '/style.css';
import 'ol/ol.css';
import Maps from 'ol/Map';
import OSM from 'ol/source/OSM';
import TileLayer from 'ol/layer/Tile';
import View from 'ol/View';

const Map = () => {
    const [map, setMap] = useState(null);

    useEffect(() => {
        const map = new Maps({
            target: 'map',
            layers: [
                new TileLayer({
                    source: new OSM(),
                }),
            ],
            view: new View({
                center: [0, 0],
                zoom: 5,
            }),
        });
        setMap(map);

        return () => {
            map.setTarget(null)
        };
    }, []);

    return (
        <>
            <div id="map" style={{width: '100%', height: '700px'}}>
                <div className="menu">
                    <h1>Меню</h1>
                </div>
            </div>
        </>
    )


}

export default Map;