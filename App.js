import { NavermapsProvider, Container as Mapdiv, NaverMap, Marker, useNavermaps } from 'react-naver-maps';

function MyMap() {
    // instead of window.naver.maps
    const navermaps = useNavermaps()

    return (
        <NaverMap
            defaultCenter={new navermaps.LatLng(37.3595704, 127.105399)}
            defaultZoom={15}
        >
            <Marker
                defaultPosition={new navermaps.LatLng(37.3595704, 127.105399)}
            />
        </NaverMap>
    )
}
function App() {
    return (
        <NavermapsProvider
            ncpClientId ='my Client ID'
            // or finClientId, govClientId
        >
            <Mapdiv
                style={{
                    width: '100%',
                    height: '600px',
                }}
            >
                <MyMap />
            </Mapdiv>
        </NavermapsProvider>
    )
}

export default App;

