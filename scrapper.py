from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager

def get_toi_legal_news():
    options = webdriver.ChromeOptions()
    options.add_argument('--headless')
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    
    try:
        driver.get("https://timesofindia.indiatimes.com/topic/Legal/news")
        news_items = []

        elements = driver.find_elements(By.CSS_SELECTOR, '.news-card')
        for element in elements:
            headline = element.find_element(By.CSS_SELECTOR, '.news-title').text if element.find_element(By.CSS_SELECTOR, '.news-title') else None
            image = element.find_element(By.TAG_NAME, 'img').get_attribute('src') if element.find_element(By.TAG_NAME, 'img') else None
            
            if headline:
                news_items.append({
                    'headline': headline,
                    'image': image
                })
        
    finally:
        driver.quit()

    return news_items

if __name__ == "__main__":
    news_items = get_toi_legal_news()
    print("News items fetched successfully:")
    for idx, item in enumerate(news_items, 1):
        print(f"{idx}. Headline: {item['headline']}")
        if item['image']:
            print(f"   Image URL: {item['image']}")
