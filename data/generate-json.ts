import { promises as fs } from 'fs';
import path from 'path';

const GIFS_DIR = path.join(process.cwd(), './public/gifs');
const OUT_PATH = path.join(process.cwd(), './data/gifs.json');
const REDDIT_JSON = path.join(process.cwd(), './data/reddit_gif_posts.json');

function slugToTitle(slug: string): string {
    return slug
        .replace(/[-_]/g, ' ')
        .replace(/\.[^/.]+$/, '')
        .replace(/\b\w/g, l => l.toUpperCase());
}

async function generate() {
    console.log('📂 Reading from:', GIFS_DIR);

    const files = await fs.readdir(GIFS_DIR);
    const redditRaw = await fs.readFile(REDDIT_JSON, 'utf-8');
    const redditPosts = JSON.parse(redditRaw);

    // Create map by Reddit post ID
    const redditMap = new Map<string, any>();
    redditPosts.forEach((post: any) => {
        redditMap.set(post.id, post);
    });

    //console.log(redditMap);

    let i = 0;
    const data = files
        .filter(file => file.endsWith('.mp4'))
        .map(file => {
            const id = file.replace(/\.[^/.]+$/, '');

            // Find ALL Reddit posts that match this gif ID in their URL
            const matches = redditPosts.filter((post: any) =>
                post.url?.toLowerCase().includes(id.toLowerCase())
            );

            // Collect all unique subreddits this GIF was posted to
            const subreddits = Array.from(new Set(matches.map(p => p.subreddit).filter(Boolean)));

            // Use the first Reddit match (for title, permalink, etc.)
            const reddit = matches[0];

            return {
                gfycat_title:id,
                file,
                index: reddit?.id || i++,
                title: reddit?.title || slugToTitle(file),
                permalink: reddit?.permalink || null,
                subreddit: reddit?.subreddit || null,
                score: reddit?.score || null,
                created_utc: reddit?.created_utc || null,
                filename: file,
                tags: subreddits // <- tags now include all subreddits
            };
        });


    await fs.writeFile(OUT_PATH, JSON.stringify(data, null, 2));
    console.log(`✅ gifs.json written with ${data.length} enriched entries.`);
}

generate().catch(err =>
    console.error('❌ Failed to generate gifs.json:', err)
);
