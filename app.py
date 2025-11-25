# app.py
from flask import Flask, render_template, request, redirect, url_for, flash
from datetime import datetime
import os

app = Flask(__name__)
app.secret_key = 'your_secret_key_here'

# Sample data - in a real app, this would come from a database
upcoming_events = [
    {
        'id': 1,
        'title': 'Blockchain Fundamentals Workshop',
        'date': '2023-11-15',
        'time': '6:00 PM',
        'location': 'Tech Building Room 203',
        'description': 'Learn the basics of blockchain technology and its applications in finance.'
    },
    {
        'id': 2,
        'title': 'FinTech Career Panel',
        'date': '2023-11-22',
        'time': '5:30 PM',
        'location': 'Business School Auditorium',
        'description': 'Hear from professionals in various FinTech sectors about career opportunities.'
    },
    {
        'id': 3,
        'title': 'Algorithmic Trading Competition',
        'date': '2023-12-05',
        'time': 'All Day',
        'location': 'Online',
        'description': 'Test your algorithmic trading strategies in our annual competition.'
    }
]

team_members = [
    {
        'name': 'Tarun',
        'role': 'President',
        'bio': 'LAAMP (BoD), WEF, MEA, FSI.',
        'image': 'tarun.jpg'
    },
    {
        'name': 'Devendra Choudhary',
        'role': 'Vice President',
        'bio': 'Sau, BSms, Sec-B.',
        'image': 'dev.jpg'
    },
    {
        'name': 'Anushka Singh',
        'role': 'Social Secratory',
        'bio': 'Sau, Bsms, Section B',
        'image': 'anu.jpg'
    },
    {
        'name': 'Bhumika Tanwar',
        'role': 'General Secratorry',
        'bio': 'Chota Bheem Dhomm Machayeee',
        'image': 'bhumi.jpg'
    }
]

@app.route('/')
def index():
    return render_template('index.html', 
                          events=upcoming_events, 
                          team=team_members)

@app.route('/join', methods=['GET', 'POST'])
def join():
    if request.method == 'POST':
        # Process form submission
        name = request.form.get('name')
        email = request.form.get('email')
        major = request.form.get('major')
        interests = request.form.get('interests')
        
        # In a real application, you would save this to a database
        flash(f'Thank you {name}! Your application has been received.')
        return redirect(url_for('index'))
    
    return render_template('join.html')

@app.route('/events')
def events():
    return render_template('events.html', events=upcoming_events)

if __name__ == '__main__':
    app.run(debug=True)