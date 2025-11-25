# FinTech Club Website

A modern, responsive website for our FinTech Club built with Flask, featuring beautiful animations and interactive elements.

## 🚀 Features

- **Modern Design**: Clean, professional layout with glass morphism effects
- **Responsive**: Fully responsive design that works on all devices
- **Interactive Animations**: Smooth scroll animations and hover effects
- **Membership System**: Online membership application form
- **Event Management**: Display upcoming events and workshops
- **Team Showcase**: Team member profiles with images
- **Beautiful UI**: Gradient backgrounds and modern card designs

## 🛠️ Tech Stack

- **Backend**: Python Flask
- **Frontend**: HTML5, CSS3, JavaScript
- **Styling**: Custom CSS with CSS Variables
- **Icons**: Font Awesome
- **Animations**: Animate.css + Custom JavaScript
- **Background**: Custom particle animation system

## 📁 Project Structure

```
fintech-club/
├── app.py                 # Main Flask application
├── templates/
│   ├── base.html          # Base template with navigation
│   ├── index.html         # Homepage
│   ├── events.html        # Events page
│   └── join.html          # Membership application page
├── static/
│   ├── css/
│   │   └── style.css      # Main stylesheet
│   ├── js/
│   │   ├── script.js      # Main JavaScript
│   │   ├── auto-typer.js  # Auto-typing effect
│   │   ├── event-animations.js  # Event card animations
│   │   └── enhanced-animations.js # Enhanced animations
│   └── images/
│       └── team/          # Team member photos
│           ├── tarun.jpg
│           ├── dev.jpg
│           ├── anu.jpg
│           └── bhu.jpg
└── requirements.txt       # Python dependencies
```

## 🚀 Quick Start

### Prerequisites

- Python 3.7+
- pip (Python package manager)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/fintech-club-website.git
   cd fintech-club-website
   ```

2. **Create a virtual environment** (recommended)
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

3. **Install dependencies**
   ```bash
   pip install -r requirements.txt
   ```

4. **Add team member images**
   - Create folder: `static/images/team/`
   - Add team photos with filenames matching the data in `app.py`:
     - `tarun.jpg`
     - `dev.jpg`
     - `anu.jpg`
     - `bhu.jpg`

5. **Run the application**
   ```bash
   python app.py
   ```

6. **View the website**
   - Open your browser and go to: `http://localhost:5000`

## 📝 Configuration

### Team Members Data

Update team information in `app.py`:

```python
team_members = [
    {
        'name': 'Tarun',
        'role': 'President',
        'bio': 'LAAMP (BoD), WEF, MEA, FSI.',
        'image': 'tarun.jpg'
    },
    # Add more team members...
]
```

### Events Data

Update events in `app.py`:

```python
upcoming_events = [
    {
        'id': 1,
        'title': 'Blockchain Fundamentals Workshop',
        'date': '2023-11-15',
        'time': '6:00 PM',
        'location': 'Tech Building Room 203',
        'description': 'Learn the basics of blockchain technology...'
    },
    # Add more events...
]
```

## 🎨 Customization

### Changing Colors

Update CSS variables in `style.css`:

```css
:root {
    --primary-color: #667eea;
    --secondary-color: #764ba2;
    --accent-color: #f093fb;
    /* Add more variables... */
}
```

### Adding New Animations

1. **CSS Animations**: Add to `style.css`
2. **JavaScript**: Add to appropriate `.js` files
3. **Update HTML**: Add animation classes to elements

### Modifying Sections

- **Homepage**: Edit `templates/index.html`
- **Events**: Edit `templates/events.html` 
- **Join Form**: Edit `templates/join.html`
- **Styling**: Edit `static/css/style.css`

## 🎯 Club Features Highlight

### Membership Benefits
- **Educational**: Workshops, Seminars, Field Trips
- **Competitive**: Trading Tournaments, Battles, Quizzes
- **Gaming**: FinTech Games, Puzzles, Market Simulations
- **Rewards**: Monthly Contests, Meme Competitions
- **Networking**: Expert Connections, Exclusive Events

### Events & Activities
- Paper Trading Competitions
- Algorithmic Trading Battles  
- Blockchain Workshops
- Financial Puzzle Solving
- Industry Expert Sessions
- Monthly Reward Contests

## 📱 Pages Overview

### Homepage (`/`)
- Hero section with auto-typing effect
- About section with statistics
- Upcoming events showcase
- Team member profiles
- Call-to-action section

### Events (`/events`)
- Detailed event listings
- Event dates and locations
- RSVP functionality
- Event archives

### Join (`/join`) 
- Membership application form
- Benefits showcase
- Interactive form with validation

## 🔧 Development

### Running in Development Mode

```bash
python app.py
```

The app will run with `debug=True` for easier development.

### Project Structure Details

- `app.py`: Flask routes and application logic
- `templates/`: Jinja2 templates for pages
- `static/`: All static assets (CSS, JS, images)
- Team images should be placed in `static/images/team/`

## 🐛 Troubleshooting

### Common Issues

1. **Images not loading**
   - Check filenames match exactly in `app.py` and file system
   - Ensure images are in `static/images/team/` folder
   - Verify file permissions

2. **CSS/JS not loading**
   - Check browser console for 404 errors
   - Verify static file paths in templates
   - Clear browser cache

3. **Flask app not starting**
   - Verify Python and Flask installation
   - Check virtual environment is activated
   - Ensure no other service is using port 5000

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **Tarun** - President
- **Devendra Choudhary** - Vice President  
- **Anushka Singh** - Social Secretary
- **Bhumika Tanwar** - General Secretary

## 📞 Contact

- Email: contact@fintechclub.edu
- Location: Business School, Room 305
- Connect with us on social media through the website footer

---

**Made with ❤️ by the FinTech Club Team**