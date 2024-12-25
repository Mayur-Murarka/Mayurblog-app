import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const dirPath = path.join(process.cwd(), 'content');
  const dirContent = fs.readdirSync(dirPath, 'utf-8');

  const blogs = dirContent.map(file => {
    const filePath = path.join(dirPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return data;
  });

  res.status(200).json(blogs);
}