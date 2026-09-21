import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const dirPath = path.join(process.cwd(), 'content');

    if (!fs.existsSync(dirPath)) {
      return NextResponse.json([], { status: 200 });
    }

    const dirContent = fs.readdirSync(dirPath, 'utf-8');
    // Only process .md files — ignore folders, .DS_Store, etc.
    const mdFiles = dirContent.filter((file) => file.endsWith('.md'));

    const blogs = mdFiles
      .map((file) => {
        try {
          const filePath = path.join(dirPath, file);
          const fileContent = fs.readFileSync(filePath, 'utf-8');
          const { data } = matter(fileContent);
          // Ensure the slug is always present (derive from filename as fallback)
          if (!data.slug) {
            data.slug = file.replace(/\.md$/, '');
          }
          return data;
        } catch {
          // Skip files that can't be parsed
          return null;
        }
      })
      .filter(Boolean); // Remove any nulls from failed parses

    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    console.error('Error reading blogs:', error);
    return NextResponse.json(
      { error: 'Failed to load blogs' },
      { status: 500 }
    );
  }
}