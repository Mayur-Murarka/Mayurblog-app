import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

export async function GET() {
  const dirPath = path.join(process.cwd(), 'content');
  const dirContent = fs.readdirSync(dirPath, 'utf-8');

  const blogs = dirContent.map(file => {
    const filePath = path.join(dirPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    return data;
  });

  return NextResponse.json(blogs, { status: 200 });
}