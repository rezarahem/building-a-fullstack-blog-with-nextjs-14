'use server';

import prismadb from '@/libs/prismadb';
import { revalidatePath } from 'next/cache';

export const CreatePostAction = async (formdata: FormData) => {
  try {
    const { title, body, image } = Object.fromEntries(formdata);
    const post = await prismadb.post.create({
      data: {
        title: title as string,
        description: body as string,
        image: image as string,
      },
    });

    if (!post) throw new Error('creating post failed');

    revalidatePath('/admin');

    if (post) return { success: true };
  } catch (error) {
    console.log('[CreatePostAction]', error);
  }
};
