import os
import re

articles = [
    'src/content/blog-ru/crypto-staking-guide-2026/index.md',
    'src/content/blog-en/crypto-staking-guide-2026/index.md',
    'src/content/blog-es/crypto-staking-guide-2026/index.md',
    'src/content/blog-ru/how-to-verify-crypto-project/index.md',
    'src/content/blog-en/how-to-verify-crypto-project/index.md',
    'src/content/blog-es/how-to-verify-crypto-project/index.md',
]

for article in articles:
    with open(article, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Count words (approximate)
    text_only = re.sub(r'^---.*?---', '', content, flags=re.DOTALL)
    text_only = re.sub(r'!\[.*?\]\(.*?\)', '', text_only)
    text_only = re.sub(r'\[.*?\]\(.*?\)', '', text_only)
    text_only = re.sub(r'#{1,6}\s*', '', text_only)
    text_only = re.sub(r'[*_`|]', '', text_only)
    words = len(text_only.split())
    
    # Check FAQ
    has_faq = '## FAQ' in content or '## Preguntas' in content or '## Вопросы' in content
    
    # Check internal links
    internal_links = len(re.findall(r'marketlab-academy\.org/[a-z]{2}/library/', content))
    
    # Check tables
    tables = content.count('|---|')
    
    # Check images
    images = len(re.findall(r'!\[.*?\]\(.*?\)', content))
    
    # Extract frontmatter
    fm_match = re.search(r'^---(.*?)---', content, re.DOTALL)
    pubDate = ''
    draft = ''
    if fm_match:
        fm = fm_match.group(1)
        pubDate_match = re.search(r"pubDate:\s*['\"]?([^'\"\n]+)", fm)
        draft_match = re.search(r'draft:\s*(\w+)', fm)
        if pubDate_match:
            pubDate = pubDate_match.group(1).strip().strip("'\"")
        if draft_match:
            draft = draft_match.group(1)
    
    lang = 'RU' if 'blog-ru' in article else ('EN' if 'blog-en' in article else 'ES')
    name = article.split('/')[-2]
    
    print(f'{lang} | {name[:30]:30} | words: {words:5} | FAQ: {has_faq} | int.links: {internal_links:2} | tables: {tables} | images: {images:2} | pubDate: {pubDate} | draft: {draft}')
