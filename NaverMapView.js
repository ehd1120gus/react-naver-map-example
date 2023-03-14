import { NaverMap, Marker } from 'react-naver-maps';
import { NavermapsProvider } from 'react-naver-maps';

const NaverMapView =({mapLat, mapLng})=> {
    return (
        <>
            <NavermapsProvider	   // render 후 지도 호출(비동기 랜더링)
                ncpClientId={'f0gr3p52ak'} // 지도서비스 Client ID
                error={<p>error</p>}
                loading={<p>Maps Loading</p>}
                submodules={["geocoder"]} //추가로 사용할 서브모듈이 있는경우
            >
                <NaverMap
                    id="react-naver-maps"
                    style={{ width: '100%', height: '100vh' }}
                    center={{ lat: mapLat, lng: mapLng }}
                >
                    <Marker position={{ lat: mapLat, lng: mapLng }}/>
                </NaverMap>
            </NavermapsProvider>
        </>
    )
}

export default NaverMapView;