'use client';

import { useLanguage } from '@/context/LanguageContext';
import { toast } from '@/hooks/use-toast';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

interface LoginFormProps {
  onSubmit: (data: {
    email: string;
    password: string;
  }) => Promise<{ success: boolean; error?: string }>;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const router = useRouter();
  const { t } = useLanguage();
  const { register, handleSubmit } = useForm<{
    email: string;
    password: string;
  }>();

  const handleLogin = async (data: {
    email: string;
    password: string;
  }) => {
    const result = await onSubmit(data);

    console.log(result);
    if (result.success) {
      toast({
        title: 'Success',
        description: 'You have successfully signed in.',
      });

      router.push('/dashboard');
    } else {
      toast({
        title: 'Error signing in',
        description: result.error ?? 'An error occurred.',
        variant: 'destructive',
      });
    }
  };

  return (
    <div className="w-96 border p-4">
      <h1 className="text-2xl text-primary font-bold mb-4">
        {t('login')}
      </h1>
      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(handleLogin)}>
        <input
          {...register('email')}
          type="email"
          placeholder={t('email')}
          className="border p-2 rounded"
        />
        <input
          {...register('password')}
          type="password"
          placeholder={t('password')}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="button-login text-white p-2 rounded">
          {t('login')}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
