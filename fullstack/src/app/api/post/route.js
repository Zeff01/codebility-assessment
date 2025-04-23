import { posts } from '@/data/posts';
import { NextResponse } from 'next/server';

export const GET = async (req) => {
	return NextResponse.json(posts);
};
