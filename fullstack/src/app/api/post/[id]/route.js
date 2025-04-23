import { posts } from '@/data/posts';
import { NextResponse } from 'next/server';

export const GET = async (req, { params }) => {
	const { id } = await params;

	const post = posts.find((post) => post.id === Number(id));
	return NextResponse.json(post);
};
