import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.preprocessing import StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer
from sklearn.linear_model import LinearRegression
from sklearn.model_selection import cross_val_score
from sklearn.metrics import mean_squared_error
from sklearn.externals import joblib

def changeToObject(self):
    df[self] = df[self].astype('str')
    

df = pd.read_csv('car.csv')
changeToObject('registration')
changeToObject('model_yr')

#Change name of model to model_name to avoid confusion:
df.columns = ['brand', 'model_name', 'model_yr', 'condition', 'body', 'fuel_type', 'engine_cap', 'milage', 'price' , 'registration']

#drop column condition:
df.drop(columns='condition', inplace = True)

replace_by_none = df.loc[:, ['registration','body']]
for i in replace_by_none.columns:
    df[i].fillna('None', inplace = True)
    
df = df[(df.brand == 'Toyota')|(df.brand == 'Honda') | (df.brand == 'Nissan') ]

topmodel = df.model_name.value_counts().head(6).index

df = df[(df.model_name == topmodel[0])|(df.model_name == topmodel[1]) | (df.model_name == topmodel[2]) | (df.model_name == topmodel[3])|
(df.model_name == topmodel[4]) | (df.model_name == topmodel[5])]

q3 = df['price'].quantile(q=.75)
q2 = df['price'].quantile(q=.5)
q1 = df['price'].quantile(q=.25)
iqr = q3-q1
outli = q3 + (1.5 * iqr)
outli

index_names = df[df['price'] > outli].index
df.drop(index_names,inplace=True)

q3 = df['price'].quantile(q=.75)
q2 = df['price'].quantile(q=.5)
q1 = df['price'].quantile(q=.25)
iqr = q3-q1
outli = q3 + (1.5 * iqr)
outli

index_names = df[df['price'] > outli].index
df.drop(index_names,inplace=True)

## Drop selling price for train our model
sale_price = df['price']
df.drop('price',axis=1,inplace=True)

cat = df.select_dtypes(include=['object'])
num = df.select_dtypes(include=["int64","float64"])

num_attribs = list(num)
cat_attribs = list(cat)

X_train, X_test, y_train, y_test = train_test_split(df,sale_price,random_state=42,train_size=0.99,)

pipeline = ColumnTransformer([
                             ('numm', StandardScaler(),num_attribs),
                              ('catt', OneHotEncoder(sparse=False,handle_unknown='ignore'),cat_attribs)
])

X = pipeline.fit_transform(X_train)
X_test_tr = pipeline.transform(X_test)

lin_reg = LinearRegression()
lin_reg.fit(X,y_train)

prediction = lin_reg.predict(X_test_tr)


joblib.dump(lin_reg, 'reg.joblib')
joblib.dump(pipeline,'transformer.joblib')





