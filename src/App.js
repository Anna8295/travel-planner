import React, { useState, useEffect } from "react";
import {Container, Row, Col} from 'react-bootstrap';

import { getPlacesData } from "./api/index";
import Header from './components/Header';
import Calendar from './components/Calendar';
import List from './components/List';
import Map from './components/Map';


const App = () => {
    const [ places, setPLaces ] = useState([]);

    const [coordinates, setCordinates] = useState({});
    const [bounds, setBounds] = useState({});

    const [ isLoading ,setIsLoading] = useState(false);
    const [childClicked, setChildClicked] = useState(null);
    const [type, setType] = useState();
    const [autocomplete, setAutocomplete] = useState(null);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(({ coords: {latitude, longitude} }) => {
            setCordinates({ lat: latitude, lng: longitude });
        })
    }, []);
    
    useEffect(() => {
        if(bounds.sw && bounds.ne){
            setIsLoading(true)
            getPlacesData(type, bounds.sw, bounds.ne)
                .then((data) => {
                    setPLaces(data?.filter((place) => place.name));
                    setIsLoading(false);
                })
        }
    }, [type, bounds]);

    const onLoad = (autoC) => setAutocomplete(autoC);

    const onPlaceChanged = () => {
        const lat = autocomplete.getPlace().geometry.location.lat();
        const lng = autocomplete.getPlace().geometry.location.lng();

        setCordinates({lat, lng});
    }

    return(
        <Container fluid>
            <Header onPlaceChanged={onPlaceChanged} onLoad={onLoad}/>
            <Row >
                <Col xs={12} md={3} > <Calendar/> </Col>
                <Col xs={12} md={3} > <List places={places} isLoading={isLoading} type={type} setType={setType} childClicked={childClicked}/> </Col>
                <Col xs={12} md={6} > <Map setChildClicked={setChildClicked} setCordinates={setCordinates} setBounds={setBounds} coordinates={coordinates} places={places}/> 
                </Col>
            </Row>
        </Container>
    );
}

export default App;