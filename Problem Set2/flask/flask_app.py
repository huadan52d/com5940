# A very simple Flask Hello World app for you to get started with...

from flask import Flask, render_template, request, json, redirect, session
from flask import Markup
import requests

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("templates/appendix.html")
def appendix():
    r = requests.get('https://api.airtable.com/v0/appURqPIQIxvuVI8v/Imported%20table?api_key=keyV24tV2nJhgN75C&view=Grid%20view')
    dict = r.json()
    dataset = []
    for i in dict['records']:
         dict = i['fields']
         dataset.append(dict)
    return render_template('templates/appendix.html', entries=dataset, title='poco人气贴 ')
