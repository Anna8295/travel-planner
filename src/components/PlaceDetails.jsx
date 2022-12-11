import React from "react";
import { Card, ListGroup, Badge, Button } from "react-bootstrap";
import { BsFillGeoAltFill, BsFillTelephoneFill } from "react-icons/bs";

const PlaceDetails = ({ place, selected, refProp, type }) => {
    if (selected) refProp?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

    return (
        <Card>
            <Card.Img variant="top"  src={place.photo ? place.photo.images.large.url : 'https://unsplash.com/photos/poI7DelFiVA'}/>
            <Card.Body>
                <Card.Title><Button id={type} value={place.name} variant="link">{place.name}</Button></Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
                <ListGroup.Item >Price: <strong>{place.price_level}</strong></ListGroup.Item>
                <ListGroup.Item >Ranking: <strong>{place.ranking}</strong></ListGroup.Item>
            </ListGroup>
            <Card.Body>
                {place?.cuisine?.map(({ name }) => (
                    <Badge pill bg="info" key={name}>
                        {name}
                    </Badge>
                ))}
            </Card.Body>
            <ListGroup className="list-group-flush">
            {place.address && (
                <ListGroup.Item ><BsFillGeoAltFill /><strong>{place.address}</strong></ListGroup.Item>
            )}
            {place.phone && (
                <ListGroup.Item ><BsFillTelephoneFill /> <strong>{place.phone}</strong></ListGroup.Item>
            )}
            </ListGroup>
            <Card.Body>
                <Card.Link href={place.web_url} target="_blank">Trip Adviser</Card.Link>
                <Card.Link href={place.website} target="_blank">Website</Card.Link>
            </Card.Body>
        </Card>
    );
};

export default PlaceDetails;