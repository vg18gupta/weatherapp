// @ts-ignore
import React, {useState} from "react";
// @ts-ignore
import {connect} from 'react-redux';
import {Alert,Jumbotron,Container,Row,Col,Button, Form,Spinner} from 'react-bootstrap'
import {getCityWeatherInfo} from '../Actions/action';
import WeatherInfo from './weatherInfo';


export interface City { id?: string; name?: string; displayName?:string }

let p:any;

export const LandingPage = (props: any) =>{

  const [query, setQuery] = useState("");

    const {loading,cities,cityWI,error} = props.data
    return (
      <Jumbotron>
        <Container>
          <Row>
            <Col>
              <h3>Enter City to see weather information</h3>
            </Col>
          </Row>
          <br />
          <div className="search-container">
            <Col>
                <input
                  type="text"
                  className="search-bar"
                  placeholder="Search..."
                  onChange={(e) => setQuery(e.target.value)}
                  value={query}
                />
            </Col>
            <div className="button-container">
              {!loading ? (
                <Button variant="dark" onClick={() => props.search(query)}>
                  Search
                </Button>
              ) : (
                <Button variant="dark" disabled>
                  <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  Loading...
                </Button>
              )}
            </div>
          </div>
        </Container>
        <Container>
          {error ? (
            <Alert variant="danger">Error occured! please try again!!</Alert>
          ) : null}
          {cityWI ? <WeatherInfo data={cityWI}></WeatherInfo> : null}
        </Container>
      </Jumbotron>
    );
}

const mapStateToProps = (state:any) =>{
    return {
        data : state.w_data
    }
}
const mapActionToProps = (dispatch:any) => {
    return {
        search: (city:any)=> dispatch(getCityWeatherInfo(city))
    }
}

export default connect(mapStateToProps, mapActionToProps)(LandingPage);