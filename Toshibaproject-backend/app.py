from flask import Flask, request, jsonify
import csv
import json
import pandas as pd
from flask_cors import CORS 


app = Flask(__name__)
CORS(app)

csv_file_path = './Toshibaproject-backend/dataset.csv'

def moving_average_downsample(data, window_size):
    if window_size <= 1 or window_size >= len(data):
        return data

    downsampled_data = []
    for i in range(window_size, len(data)):
        window_data = data[i - window_size + 1:i + 1]

        avg_profit_percentage = sum(row['Profit Percentage'] for row in window_data) / window_size
        avg_timestamp = window_data[-1]['Timestamp']  # Use the timestamp of the last data point in the window

        downsampled_data.append({'Profit Percentage': avg_profit_percentage, 'Timestamp': avg_timestamp})

    return downsampled_data

window_size = 4
for row in csv_file_path:
    row['Profit Percentage'] = float(row['Profit Percentage'])

downsampled_data = moving_average_downsample(csv_file_path, window_size)
df_downsampled = pd.DataFrame(downsampled_data)

df_downsampled.to_csv('./Toshibaproject-backend/downsampled_data.csv', index=False)

downsampled_data ='./Toshibaproject-backend/downsampled_data.csv'

@app.route('/upload', methods=['POST'])
def upload():
    try:
        with open(downsampled_data, 'r') as csv_file:
            data = list(csv.DictReader(csv_file))

        json_data = json.dumps(data, indent=2)

        with open('output.json', 'w') as json_file:
            json_file.write(json_data)

        return jsonify({'success': True, 'data': data})

    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)
