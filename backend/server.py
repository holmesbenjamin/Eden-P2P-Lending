from flask import Flask, request, jsonify
from flask_cors import CORS
import pandas as pd
import numpy as np
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler
import tensorflow as tf
from tensorflow.python.keras.models import Sequential
from tensorflow.python.keras.layers import Dense,Dropout
from tensorflow.python.keras.models import load_model
from sklearn.metrics import classification_report, confusion_matrix
from tensorflow import keras

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": ["http://localhost:4173"]}})


@app.route('/api/form-data', methods=['POST'])
def form_data():
    data = request.json
    model = tf.keras.models.load_model('lend_club_model.h5')




    def number_to_letter_number(n, dic):
        quotient, remainder = divmod(n-1, 5)
        letter = chr(65 + quotient)
        number = remainder + 1
        place = str(f"grade_{letter}{number}")
        dic[place]=1
        return dic


    def create_grades_dict():
        grades = {}
        for col in range(0, 7):
            for row in range(0, 5):
                letter = chr(ord('A') + col)
                num = row + 1
                grade = 'grade_' + letter + str(num)
                grades[grade] = 0
        return grades

    grade_dict = create_grades_dict()
    grade_dict = number_to_letter_number(int(data['loan_grade']), grade_dict)
    purpose = ['purpose_small_business', 'purpose_credit_card', 'purpose_debt_consolidation', 'purpose_educational', 'purpose_home_improvement', 'purpose_house', 'purpose_major_purchase', 'purpose_medical', 'purpose_moving',  'purpose_renewable_energy',  'purpose_vacation', 'purpose_wedding','purpose_other']
    purpose_dict = {p:0 for p in purpose}
    purpose_dict[purpose[int(data['purpose'])]] = 1

    home_type = ['home_own_RENT','home_own_OWN','home_own_OTHER']
    home_dict = {h:0 for h in home_type}
    home_dict[home_type[int(data['home_own'])]] = 1

    app_type = ['app_type_INDIVIDUAL', 'app_type_JOINT']
    app_dict = {a:0 for a in app_type}
    app_dict[app_type[int(data['app_type'])]] = 1

    new_data = {}
    for key in data.keys():
        new_data[key] = data[key]
        if key == 'term_36_or_60':
            for grade_key in grade_dict.keys():
                new_data[grade_key] = grade_dict[grade_key]
        if key == 'term_36_or_60':
            for app_key in app_dict.keys():
                new_data[app_key] = app_dict[app_key]
        if key == 'app_type':
            for purpose_key in purpose_dict.keys():
                new_data[purpose_key] = purpose_dict[purpose_key]
        if key == 'home_own':
            for home_key in home_dict.keys():
                new_data[home_key] = home_dict[home_key]

    del new_data["app_type"]
    del new_data["home_own"]
    del new_data["purpose"]
    del new_data["loan_grade"]
    del new_data["grade_A1"]
    new_customer = new_data
    res_array = np.array(list(new_customer.values()))
    res_array = res_array.reshape(1,66)
    result = (model.predict(res_array) > 0.5).astype("int32")
    print(result[0][0])

    
    if request.method == 'POST':
        return jsonify({'message': 'Form data received'})

if __name__ == '__main__':
    app.run()
