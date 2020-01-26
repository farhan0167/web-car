import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components'
import pic from '../assets/pic.jpg'



const Styles = styled.div`
	.title {
		text-align: center;
	}
	.resultText {
		text-align: center;
	}
	

	
	
`

class Home extends Component {
	constructor(props) {
	    super(props);

	    this.state = {
	      isLoading: false,
	      formData: {
		    	brand: "Toyota",
		        model_name: "Premio",
		        model_yr: "2010",
		        body: "Saloon",
		        fuelType: "Octane",
		        engineCap: "1,500 cc",
		        milage: 10000,
		        registration:'2008.0'
	      },
	      result: ""
	    };
	}

 	handleChange = (event) => {
	    const value = event.target.value;
	    const name = event.target.name;
	    var formData = this.state.formData;
	    formData[name] = value;
	    this.setState({
	      formData
	    });
	}

  	handlePredictClick = (event) => {
	    const formData = this.state.formData;
	    this.setState({ isLoading: true });
	    fetch('http://127.0.0.1:5000/prediction/', 
	      	{
		        headers: {
		          'Accept': 'application/json',
		          'Content-Type': 'application/json'
	        },
	        method: 'POST',
	        body: JSON.stringify(formData)
	      })
	      .then(response => response.json())
	      .then(response => {
	        this.setState({
	          result: response.result,
	          isLoading: false
	        });
	      });
	}

  	handleCancelClick = (event) => {
    	this.setState({ result: "" });
  	}
	render() {
		const isLoading = this.state.isLoading;
	    const formData = this.state.formData;
	    const result = this.state.result;



	    var model_name = ['Vezel', 'Axio', 'Allion', 'X-Trail', 'Premio', 'Prado']
	    for (var i = 0; i <= 5; i = +(i + 1).toFixed(1)) {
	      model_name.push(<option key = {model_name[i]} value = {model_name[i]}>{ model_name[i] }</option>);
	    }
	    var model_yr = ['2015', '2005', '2013', '2014', '2009', '2010', '2012', '2004',
        '2008', '2007', '2011', '2006', '2016', '2017', '2003', '2002',
        '2000', '1998'].sort()
	    for (var i = 0; i <= 17; i = +(i + 1).toFixed(1)) {
	      model_yr.push(<option key = {model_yr[i]} value = {model_yr[i]}>{model_yr[i]}</option>);
	    }
	    
	    
	    var body = ['SUV / 4x4', 'Saloon', 'Hatchback', 'None', 'Estate', 'MPV']
	    for (var i = 0; i <= 5; i = +(i + 1).toFixed(1)) {
	      body.push(<option key = {body[i]} value = {body[i]}>{body[i]}</option>);
	    }
	    var fuelType = ['Hybrid', 'Hybrid, Octane', 'CNG, Octane', 'Octane',
        'Petrol, CNG, Octane', 'Petrol, Hybrid, Octane', 'Diesel',
        'Petrol, Octane']
	    for (var i = 0; i <= 7; i = +(i + 1).toFixed(1)) {
	      fuelType.push(<option key = {fuelType[i]} value = {fuelType[i]}>{fuelType[i]}</option>);
	    }
	    var engineCap = ['1,500 cc', '2,000 cc', '2,700 cc', '2,800 cc', '1,997 cc']
	    for (var i = 0; i <= 4; i = +(i + 1).toFixed(1)) {
	      engineCap.push(<option key = {engineCap[i]} value = {engineCap[i]}>{engineCap[i]}</option>);
	    }
	    var registration = ['nan', '2007.0', '2016.0', '2015.0', '2017.0', '2010.0', '2008.0',
        '2013.0', '2012.0', '2014.0', '2018.0', '2011.0', '2009.0',
        '2005.0', '2006.0', '2001.0', '2004.0'].sort()
	    for (var i = 0; i <= 16; i = +(i + 1).toFixed(1)) {
	      registration.push(<option key = {registration[i]} value = {registration[i]}>{registration[i]}</option>);
	    }
	    var brand = ['Honda', 'Toyota', 'Nissan']
	    for (var i = 0; i <= 2; i = +(i + 1).toFixed(1)) {
	      brand.push(<option key = {brand[i]} value = {brand[i]}>{brand[i]}</option>);
	    }	    


	    return(
	        <Container>

	        	<div>
	        		<Styles>
	          			<h1 className="title">Predictor</h1>
	          		</Styles>
	        	</div>
	        	<div className="content">
		        	<Form>
					  	<Form.Row>
						<Form.Group as={Col}>
			                <Form.Label> Brand </Form.Label>
			                <Form.Control
			                 as="select"
			                 value={formData.brand}
			                 name="brand"
			                 onChange={this.handleChange}> 
			                 		{brand} 
			            	</Form.Control>
			            </Form.Group>

			            <Form.Group as={Col}>
				            <Form.Label> Model </Form.Label>
				            <Form.Control
				            as="select"
				            value={formData.model_name}
				            name="model_name"
				            onChange={this.handleChange}> 
				                  {model_name}
				            </Form.Control>
			            </Form.Group>

			            <Form.Group as={Col}>
				            <Form.Label> Body Type </Form.Label>
				            <Form.Control
				            as="select"
				            value={formData.body}
				            name="body"
				            onChange={this.handleChange}> 
				                  {body}
				            </Form.Control>
			            </Form.Group>

						</Form.Row>

						<Form.Row>

						<Form.Group controlId="milage">
						   <Form.Label>Milage (in km)</Form.Label>
						   <Form.Control placeholder=" Milage" onChange={this.handleChange} name='milage' value={formData.milage}/>
						   		
						</Form.Group>

						<Form.Group as={Col}>
				            <Form.Label> Fuel Type </Form.Label>
				            <Form.Control
				            as="select"
				            value={formData.fuelType}
				            name="fuelType"
				            onChange={this.handleChange}> 
				                  {fuelType}
				            </Form.Control>
			            </Form.Group>

			            <Form.Group as={Col}>
				            <Form.Label> Engine Capacity </Form.Label>
				            <Form.Control
				            as="select"
				            value={formData.engineCap}
				            name="engineCap"
				            onChange={this.handleChange}> 
				                  {engineCap}
				            </Form.Control>
			            </Form.Group>

			            <Form.Group as={Col}>
				            <Form.Label> Model Year </Form.Label>
				            <Form.Control
				            as="select"
				            value={formData.model_yr}
				            name="model_yr"
				            onChange={this.handleChange}> 
				                  {model_yr}
				            </Form.Control>
			            </Form.Group>

			            <Form.Group as={Col}>
				            <Form.Label> Registration Year </Form.Label>
				            <Form.Control
				            as="select"
				            value={formData.registration}
				            name="registration"
				            onChange={this.handleChange}> 
				                  {registration}
				            </Form.Control>
			            </Form.Group>

						</Form.Row>

						<Row>
			              <Col>
			                <Button
			                  block
			                  variant="success"
			                  disabled={isLoading}
			                  onClick={!isLoading ? this.handlePredictClick : null}>
			                   { isLoading ? 'Making prediction' : 'Predict' }
			                </Button>
			              </Col>
			              <Col>
			                <Button block
			                 variant="danger"
			                 disabled={isLoading}
			                 onClick={this.handleCancelClick}>
			                  Reset prediction
			                </Button>
			              </Col>
		            	</Row>

					  
					</Form>

					{result === "" ? null :
		            (<Styles>
			            <Row>
			              <Col className="result-container">
			                <h5 className="resultText" id="result">{result}</h5>
			              </Col>
			            </Row>
		            </Styles>)
		          }
				</div>
			</Container>

	    );
	}
};


export default Home;
