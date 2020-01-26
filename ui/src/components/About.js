import React, { PropTypes } from 'react';
import styled from 'styled-components'
import Image from 'react-bootstrap/Image';
import Engine from '../assets/Engine.png'
import brandManfType from '../assets/brandManfType.png'
import modelYearPrice from '../assets/modelYearPrice.png'

const Styles = styled.div`
	.paratitle {
		text-align: center;
	}
    `

const About = () => {

	

    return (
        <div>
        	<Styles>
	        	<h1 className='paratitle'><strong>Car Price Prediction in Bangladesh</strong></h1>
				<p><strong>&nbsp;</strong></p>
				<p>In this project I will be demonstrating how we can solve a problem every car seller faces in Bangladesh. In Bangladesh, there are many people that buys their car from showrooms that sell new cars but for the majority amount of people buying a new car is not an option. Most people resort to dealerships that sells used cars and due to imperfect information, most customers end up paying higher prices for cars than what it&rsquo;s actually worth. Then there is another side to this story, where sellers of used cars cannot find the best price to sell their cars unless they devote time to market research. Sellers would usually use Facebook and Bikroy.com to post ads of their cars, which leads those sellers to first go through a list of postings within the websites to find a perfect price. This in itself is a time consuming task which is why this web application is here to reduce that time</p>
                <h3><strong>Things to consider:</strong></h3>
                <ol>
                <li>For models such as Premio, Axio, Allion and Premio, the model will only recognize 1,500cc input because these cars do not come in any other capacities. A plot of the dataset shows:&nbsp;</li>
                <Image src={Engine}/>
                <li>Every model has their own body type, and inputing incorrect body type will result in error. This plot can help you familiarize with the different body types for the models:</li>
                <Image src={brandManfType}/>
                <li>Analysis have shown that, prices are higher for vehicles which were released in later years compared to previous years:</li>
                <Image src={modelYearPrice}/>
                </ol>
                <p>For more information, please spend some time on the two jupyter notebooks- "Model_Notebook" and "Analytics" to understand the data and model.&nbsp;</p>
                <p>&nbsp;</p>
        		<div>
        			<h3> - Ahmad Farhan Ishraq </h3>
        		</div>
        	</Styles>
        </div>
    );
};


export default About;