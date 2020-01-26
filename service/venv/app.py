from flask import Flask, request, jsonify, make_response
from flask_cors import CORS
from flask_restplus import Api, Resource, fields
from sklearn.externals import joblib
import pandas as pd
import numpy as np
import sys

flask_app = Flask(__name__)
app = Api(app = flask_app, 
		  version = "1.0", 
		  title = "Bangladesh Second Hand Car Market", 
		  description = "Predict car prices")


name_space = app.namespace('prediction', description='Prediction APIs')

model = app.model('Prediction params', 
				  {'brand': fields.String(required = True, 
				  							   description="Brand", 
    					  				 	   help="Brand cannot be blank"),
				  'model_name': fields.String(required = True, 
				  							   description="Model Name", 
    					  				 	   help="Model Name cannot be blank"),
				  'model_yr': fields.String(required = True, 
				  							description="Model Year", 
    					  				 	help="Model Year cannot be blank"),
				  'body': fields.String(required = True, 
				  							description="Body", 
    					  				 	help="Body cannot be blank"),
				  'fuelType': fields.String(required = True, 
				  							description="Fuel Type", 
    					  				 	help="Fuel Type cannot be blank"),
				  'engineCap': fields.String(required = True, 
				  							description="Engine Capacity", 
    					  				 	help="Engine Capacity cannot be blank"),
				  'milage': fields.Integer(required = True, 
				  							description="Milage", 
    					  				 	help="Milage cannot be blank"),
				  'Registration': fields.String(required = True, 
				  							description="Registration", 
    					  				 	help="Registration cannot be blank")})

lin_reg = joblib.load('reg.joblib')
pipeline = joblib.load('transformer.joblib')

@name_space.route("/")
class MainClass(Resource):

	def options(self):
		response = make_response()
		response.headers.add("Access-Control-Allow-Origin", "*")
		response.headers.add('Access-Control-Allow-Headers', "*")
		response.headers.add('Access-Control-Allow-Methods', "*")
		return response

	@app.expect(model)		
	def post(self):
		try: 
			formData = request.json
			data = [val for val in formData.values()]
			dataframe = pd.DataFrame(np.array(data).reshape(1, -1), columns=['brand', 'model_name', 'model_yr',
				'body', 'fuel_type', 'engine_cap', 'milage', 'registration'])
			X_trail = pipeline.transform(dataframe)
			prediction = lin_reg.predict(X_trail) 
			response = jsonify({
				"statusCode": 200,
				"status": "Prediction made",
				"result": ("The value of the Car is: {} Taka ").format(prediction[0].round(2))
				})
			response.headers.add('Access-Control-Allow-Origin', '*')
			return response
		except Exception as error:
			return jsonify({
				"statusCode": 500,
				"status": "Could not make prediction",
				"error": str(error)
			})