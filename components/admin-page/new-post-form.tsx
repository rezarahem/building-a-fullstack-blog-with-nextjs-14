'use client';

import { CreatePostAction } from '@/actions/post-action';
import { useRef } from 'react';
import { useFormStatus } from 'react-dom';
import SubmitButton from '../ui/submit-button';

const NewPostForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <>
      <form
        ref={formRef}
        action={async (formdata) => {
          formRef.current?.reset();

          await CreatePostAction(formdata);
        }}
        className='space-y-6'
      >
        <div className='flex flex-col gap-y-1'>
          <label>عنوان</label>
          <input
            type='text'
            className='rounded-md border p-2 shadow-sm'
            placeholder='پست جدید'
            name='title'
          />
        </div>
        <div className='flex flex-col gap-y-1'>
          <label>توضیحات</label>
          <textarea
            className='rounded-md border p-2 shadow-sm'
            placeholder='شرح پست'
            rows={5}
            name='body'
          />
        </div>
        <div className='flex flex-col gap-y-1'>
          <label>تصویر</label>
          <input
            type='text'
            className='rounded-md border p-2 shadow-sm'
            placeholder='آدرس تصویر'
            name='image'
          />
        </div>
        <SubmitButton />
      </form>
    </>
  );
};

export default NewPostForm;
