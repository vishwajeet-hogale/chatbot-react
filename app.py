from chatterbot import ChatBot
from flask_cors import CORS, cross_origin
from flask import Flask,request
from chatterbot.trainers import ChatterBotCorpusTrainer

app = Flask(__name__)
CORS(app,resources={r"/api/*":{"origins":"*"}})
app.config['CORS_HEADERS'] = 'Content-Type'
bot = ChatBot('chatterbot',storage_adapter="chatterbot.storage.SQLStorageAdapter")
trainer = ChatterBotCorpusTrainer(bot)
trainer.train('chatterbot.corpus.english')



@app.route('/')
@cross_origin()
def home():
    return "Welcome Home"

@app.route('/user',methods=["POST"])
@cross_origin()
def user():
    jsony = request.json
    data = jsony['msg']
    return str(bot.get_response(data))

if __name__ == "__main__":
    app.run(debug=True)