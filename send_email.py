import smtplib
from email.mime.text import MIMEText
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/send_email', methods=['POST'])
def send_email():
    data = request.get_json()
    email = data['email']
    result = data['result']

    msg = MIMEText(f'The calculated result is: {result}')
    msg['Subject'] = 'Answer'
    msg['From'] = 'your_email@example.com'
    msg['To'] = email

    try:
        with smtplib.SMTP('localhost') as server:
            server.sendmail('your_email@example.com', [email], msg.as_string())
        return jsonify({'success': True})
    except Exception as e:
        print(f'Error: {e}')
        return jsonify({'success': False})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
