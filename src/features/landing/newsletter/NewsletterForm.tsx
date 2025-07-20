'use client';
import { Input } from '@heroui/input';
import { Button } from '@heroui/button';
import { useSubscribeToNewsletterMutation } from '@/features/landing/newsletter/useSubscribeToNewsletterMutation';
import { type ComponentProps, type FormEvent, useRef, useState } from 'react';
import { cn } from '@/shared/utils/cn';
import { Alert } from '@heroui/alert';


export function NewsletterForm({ className, ...props }: ComponentProps<'form'>) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [email, setEmail] = useState('');
  const m = useSubscribeToNewsletterMutation();

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    m.mutate(email);
  };

  const isValid = !!email && !!inputRef.current?.validity.valid;
  const isEmailSame = m.isSuccess && m.variables === email;

  return (
    <form onSubmit={onSubmit} className={cn('grid grid-cols-[1fr_auto]', className)} {...props}>
      <Input
        ref={inputRef}
        labelPlacement='outside'
        type='email'
        placeholder='your@email.com'
        name='email'
        variant='faded'
        value={email}
        onChange={event => setEmail(event.target.value)}
      />

      <Button
        type='submit'
        color={isEmailSame ? 'success' : 'primary'}
        variant='shadow'
        isLoading={m.isPending}
        isDisabled={isEmailSame || !isValid}
      >{isEmailSame ? 'Success!' : 'Subscribe'}</Button>

      {m.isError && (
        <Alert color='danger' variant='faded' className='col-span-full'>
          {'Error while subscribing: '}{m.error.message}
        </Alert>
      )}
    </form>
  );
}
