import logo from './logo.svg';
import './App.css';
import Maps from "./Components/Map/Map";
import {YMaps, Map} from '@pbe/react-yandex-maps';

function App() {
    return (
        <>
            {/*<h1>Карта Яндекс</h1>*/}
            {/*<Maps />*/}
            <div id="map">
                <YMaps>
                    <Map defaultState={{center: [55.75, 37.57], zoom: 4}}/>
                </YMaps>
            </div>
        </>
    );
}

export default App;
