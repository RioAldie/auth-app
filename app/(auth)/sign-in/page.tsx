import { signInWithCredentials } from '@/lib/auth';
import LoginForm from '@/components/LoginForm';

const Page = () => {
  return (
    <section className="w-screen min-h-screen flex justify-center items-center">
      <LoginForm onSubmit={signInWithCredentials} />
    </section>
  );
};

export default Page;
