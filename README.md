# Car Prediction and Analytics in Bangladesh

In this project I have created a website using React.js and Flask to predict car prices in Bangladesh based on a popular buy
and sell website, which I have scraped using BeautifulSoup. The website is frequently used by the people of Bangladesh when
it comes to
buying used products. Most people in Bangladesh rely on online websites for used products
like almost any other nation, except for websites here have less functionalities when it comes to giving buyers or sellers
insights on market prices. The idea, inspired from a friend, was to build a web application that enables users to be able to 
predict prices of cars based on key features people consider when buying or selling cars or in other words, price determinants.
Such a prediction can benefit can both buyers and sellers, wherein buyers can get to know what the price for a car they want to
buy might cost, and sellers can instantly get an idea of the price at which they can sell their car at. <br/>
<br/>
## About the Dataset: <br/>
The predictions were made based on training my scrapped dataset on Linear Regression, the simple approach. The data 
'cars.csv', in service/venv, folder as you might observe is a small dataset and with that came limitations.  
* Even though I was able to get some form of representative sample of widely sold cars, the data was still limited to less than
300 instances. 
* Not all features considered for predicting car prices were scrapped. For example, people make decisions to buy a car
based on pictures as well as the features included in my project. Employing pictures would require using more advanced machine
learning algorithms but that is beyond the scope of this project. <br/> <br/>
## Using the Repository <br/>
1. Clone the repository in your local directory.
2. You will see two folders: <br/>
  -service: This folder contains all the backend files written in Flask, which is responsible for making the predictions.
  The folder also contains two jupyter notebooks:
    - Analytics.ipynp: This is an interactive notebook that runs some analytics.
    - Model_Notebook.ipynb: This notebook outlines the steps I have taken to make the predictions, demonstrating data analysis,
    data cleaning, feature selection. <br/> 
   
    -ui: This folder contains the React files which make up the frontend of my website.
### Using The Notebooks:
1. Go to the service/venv folder from your command line with the code ` cd service/venv `.
2. Activate the environment and run Jupyter Notebook:
```
source bin/activate
jupyter notebook
```

### Deployment <br/>
1. Go to the ui folder using the command line and run the following code: <br/>
` npm install -g serve ` <br/>
` npm run build ` <br/>
` serve -s build -l 3000 ` <br/>
You can go to ` http://localhost:3000/ ` to see the ui. 

2. Now that the ui is running, you would need to run the flask backend which will serve the website.
Go to the service folder from the command line, and then to venv, running the following: <br/>
```
cd service/venv
source bin/activate
FLASK_APP=app.py flask run
```
The server should be running on ` http://127.0.0.1:5000/ `. Now you can go back to ` http://localhost:3000/ ` to use the 
fully functioning website! 

