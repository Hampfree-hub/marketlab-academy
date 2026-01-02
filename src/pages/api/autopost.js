import { getCollection } from 'astro:content';

export async function POST({ request }) {
  try {
    const body = await request.json();

    // Проверяем API ключ для безопасности
    const apiKey = request.headers.get('X-API-Key');
    if (apiKey !== process.env.N8N_WEBHOOK_KEY) {
      return new Response(JSON.stringify({ error: 'Unauthorized' }), {
        status: 401,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Получаем последний пост из блога
    const posts = await getCollection('blog');
    const latestPost = posts.sort((a, b) =>
      new Date(b.data.pubDate) - new Date(a.data.pubDate)
    )[0];

    if (!latestPost) {
      return new Response(JSON.stringify({ error: 'No posts found' }), {
        status: 404,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Формируем данные для автопостинга
    const postData = {
      title: latestPost.data.title,
      description: latestPost.data.description,
      link: `/marketlab-academy/blog/${latestPost.id}/`,
      pubDate: latestPost.data.pubDate,
      content: latestPost.body
    };

    return new Response(JSON.stringify({
      success: true,
      post: postData,
      message: 'Latest blog post retrieved successfully'
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });

  } catch (error) {
    console.error('Autopost API error:', error);
    return new Response(JSON.stringify({ error: 'Internal server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
