import dbConnect from '@/app/lib/dbConnect';
import Post from '@/app/lib/models/Post';
import { NextRequest, NextResponse } from 'next/server';


export async function POST(request: NextRequest) {
    try {
        await dbConnect();

        const body = await request.json();
        const post = await Post.create(body);

        return NextResponse.json(post, { status: 201 });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Failed to create post' },
            { status: 500 }
        );
    }
}

export async function GET() {
    try {
        await dbConnect();

        const posts = await Post.find({}).sort({ createdAt: -1 });

        return NextResponse.json(posts);
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Failed to fetch posts' },
            { status: 500 }
        );
    }
}