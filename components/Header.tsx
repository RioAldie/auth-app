import { auth } from '@/auth';

const Header = async () => {
  const session = await auth();

  return (
    <header className="admin-header">
      <div>
        <h2 className="text-2xl font-semibold text-dark-400">
          welcome Admin {session?.user?.email}
        </h2>
      </div>
    </header>
  );
};
export default Header;
