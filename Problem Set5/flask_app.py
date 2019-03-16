## A very simple Flask Hello World app for you to get started with...

from flask import Flask, render_template, request, json, redirect, session
from flask import Markup
import requests

app = Flask(__name__)

@app.route("/")
def home():
    return render_template('index.html')

@app.route("/appendix.html/")
def appendix():
    r = requests.get('https://api.airtable.com/v0/appURqPIQIxvuVI8v/Imported%20table?api_key=keyV24tV2nJhgN75C&view=Grid%20view')
    dict = r.json()
    dataset = []
    for i in dict['records']:
         dict = i['fields']
         dataset.append(dict)
    return render_template('appendix.html', entries=dataset, title='poco人气贴 ')

@app.route("/wp-chart.html/")
def record():
    r = requests.get('https://api.airtable.com/v0/appnzPnseQ2WP2wpq/Actions?api_key=keyV24tV2nJhgN75C&view=Grid%20view')
    dict1 = r.json()
    dict2 = {}
    dataset = []
    name_list = []
    sum_list=[]
    for i in dict1['records']:
         dict2 = i['fields']
         dataset.append(dict2)
    for item in dataset:
        name_list.append(item.get('name'))
        sum_list.append(item.get('sum'))

    r2 = requests.get('https://api.airtable.com/v0/appnzPnseQ2WP2wpq/Users?api_key=keyV24tV2nJhgN75C&view=Grid%20view')
    dict3 = r2.json()
    dict4 = {}
    dataset2 = []
    user_list = []
    total_list=[]
    for i in dict3['records']:
         dict4 = i['fields']
         dataset2.append(dict4)
    for item in dataset2:
        user_list.append(item.get('user'))
        total_list.append(item.get('total'))

    return render_template('wp-chart.html', entries=zip(name_list, sum_list), infos=zip(user_list, total_list))
