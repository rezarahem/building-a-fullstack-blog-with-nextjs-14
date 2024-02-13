'use server';

import prismadb from '@/libs/prismadb';
import { revalidatePath } from 'next/cache';

export const CreatePostAction = async (formdata: FormData) => {
  try {
    const { title, body, image } = Object.fromEntries(formdata);

    const address = String(title).split(' ').join('-');

    const post = await prismadb.post.create({
      data: {
        title: title as string,
        address: address,
        body: body as string,
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

export const DeletePostAction = async (id: number) => {
  try {
    await prismadb.post.delete({
      where: {
        id,
      },
    });

    revalidatePath('/admin');
  } catch (error) {
    console.log('[DeletePostAction]', error);
  }
};
