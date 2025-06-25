import {promises as fs} from 'fs';
import path from 'path';

const GIFS_DIR = path.join(process.cwd(), './public/gifs');
const OUT_PATH:string = path.join(process.cwd(), '/data/gifs.json');

function slugToTitle(slug: string):string
{
  return slug
      .replace(/[-_]/g, ' ')
      .replace(/\.[^/.]+$/,'')
      .replace(/\b\w/g, l => l.toUpperCase());
}

async function generate()
{
    console.log(GIFS_DIR);
    const files = await fs.readdir(GIFS_DIR);
    let i = 0;
    const data = files.map(file => ({
        file,
            index:i++,
            title: slugToTitle(file),
            filename: file,
            tags:[]
    }));

    await fs.writeFile(OUT_PATH, JSON.stringify(data, null, 2));
    console.log(`✅ gifs.json written with ${data.length} entries.`);
}

generate().catch(err => console.error('❌ Failed to generate gifs.json:', err))