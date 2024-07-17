from flask import Flask

app = Flask(__name__)

@app.route("/")
def helloWorld():
    return 'Hello World!'

@app.route('/ping/')
@app.route('/ping/<data>')
def ping(data=''):
    return f'pong -- {data}'

if __name__ == '__main__':
    app.run(port=8000, debug=True)
