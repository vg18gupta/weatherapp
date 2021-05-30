// @ts-ignore
import React from "react";
import get from 'lodash/get';
import { Alert,Card, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const getStyleInfo = (condition:string) =>{
    let logo,clsName;
    switch(condition){
        case "Clear" : logo = <FontAwesomeIcon title="Clear" icon="moon"/>;clsName ="Blue-Skies"; break;
        case "Breezy" : logo = <FontAwesomeIcon title="Breezy" icon="wind"/>; break;
        case "Sunny" : logo = <FontAwesomeIcon title="Sunny" icon="sun"/>;clsName ="SunKist"; break;
        case "Cloudy" : logo = <FontAwesomeIcon title="Cloudy" icon="cloud"/>;clsName ="Dark-Skies"; break;
        case "Rainy" : logo = <FontAwesomeIcon title="Rainy" icon="cloud-rain"/>;clsName ="Dark-Skies"; break;
        case "Mostly Sunny" : logo = <FontAwesomeIcon title="Mostly Sunny" icon="cloud-sun"/>; break;
        case "Mostly Cloudy" : logo = <FontAwesomeIcon title="Mostly Cloudy" icon="cloud-sun"/>; break;
        default: logo = null;
    }
    return {
        logo : logo,
        clsName : clsName
    }
}

const WeatherInfo = (props: any) =>{
    const {location,current_observation } = props.data; 
    const info = get(current_observation,'condition.text','');
    const cName = info.clsName ? info.clsName : "Zinc";
    return(
        <Card className="Orange-Coral ">
            {
                location != undefined && info != '' ?
                    <>
                        <Card.Header as="h5">{location.city} </Card.Header>
                            <Card.Body className={cName}>
                                <Card.Title>
                                {info.logo ? info.logo : current_observation.condition.text} 
                                <small className="left"> {location.city}{', '}<cite title="Source Title">{location.region}{', '}{location.country}</cite> </small>
                                </Card.Title>
                                <Row>
                                    <Col> <FontAwesomeIcon title="Temperature"  icon="temperature-high"/> </Col>
                                    <Col> <FontAwesomeIcon title="Humidity" icon="tint"/> </Col>
                                    <Col> <FontAwesomeIcon title="Visibility"  icon="eye"/> </Col>
                                    <Col> <FontAwesomeIcon title="Wind Speed" icon="wind"/> </Col>

                                </Row>
                                <Row>
                                    <Col>{current_observation.condition.temperature} </Col>
                                    <Col>{current_observation.atmosphere.humidity + '%'} </Col>
                                    <Col>{current_observation.atmosphere.visibility + ' miles'}  </Col>
                                    <Col> {current_observation.wind.speed + ' mph'} </Col>
                                </Row>
                    
                            </Card.Body>
                    </> 
                    :   <Alert variant="danger">
                           please try again with other City!!
                        </Alert>
            }
            
        </Card>
    )
}

export default WeatherInfo; 