from flask import Flask, jsonify, request
import subprocess
import os
import json

app = Flask(__name__)

@app.route('/api/fetch-tiktok-data', methods=['POST'])
def fetch_tiktok_data():
    # Define the path to your TikTok pipeline script
    script_path = os.path.join(os.getcwd(), 'server', 'tiktok_pipeline_script.py')
    
    try:
        # Execute the script and capture the output
        result = subprocess.run(['python', script_path], capture_output=True, text=True, check=True)
        
        # Convert the string output to a Python dictionary
        data = json.loads(result.stdout)
        
        # Return the data as a JSON response
        return jsonify(data), 200
    except subprocess.CalledProcessError as e:
        return jsonify({"success": False, "error": str(e)}), 500

if __name__ == '__main__':
    # Specify the host and port for the Flask server
    app.run(host='0.0.0.0', port=5000)