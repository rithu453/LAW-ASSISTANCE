from flask import Flask, jsonify
from flask_cors import CORS
import requests
from bs4 import BeautifulSoup

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

def get_toi_news():
    url = "https://timesofindia.indiatimes.com/topic/law"
    response = requests.get(url)
    
    if response.status_code != 200:
        return []

    soup = BeautifulSoup(response.text, 'html.parser')
    
    headlines = []
    for item in soup.find_all('div', class_='uwU81'):
        link_tag = item.find('a')
        headline_text = link_tag.find('span').get_text(strip=True) if link_tag.find('span') else ''
        headline_link = link_tag['href'] if 'href' in link_tag.attrs else ''
        image_tag = link_tag.find('img')
        image_url = image_tag['src'] if image_tag else ''
        
        headlines.append({
            'text': headline_text,
            'link': headline_link,
            'image': image_url
        })
    
    print(f"Fetched headlines: {headlines}")  # Debug line
    return headlines

@app.route('/news', methods=['GET'])
def news():
    headlines = get_toi_news()
    return jsonify(headlines)

if __name__ == "__main__":
    app.run(debug=True)
