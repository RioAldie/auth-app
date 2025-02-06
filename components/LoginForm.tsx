'use client';

import { redirect } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';

interface LoginFormProps {
  onSubmit: (data: {
    email: string;
    password: string;
  }) => Promise<{ success: boolean; error?: string }>;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
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
      // toast({
      //   title: "Success",
      //   description: "You have successfully signed in.",
      // });

      console.log('success');
    } else {
      // toast({
      //   title: "Error signing in",
      //   description: result.error ?? "An error occurred.",
      //   variant: "destructive",
      // });
      console.log('failed');
    }
  };

  return (
    <div className="w-96 border p-4">
      <form
        className="flex flex-col gap-3"
        onSubmit={handleSubmit(handleLogin)}>
        <input
          {...register('email')}
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
        />
        <input
          {...register('password')}
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded">
          Masuk
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
