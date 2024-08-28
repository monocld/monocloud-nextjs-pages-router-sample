import { SignIn, SignOut, SignUp } from "@monocloud/nextjs-auth/components";
import { useUser } from "@monocloud/nextjs-auth/client";
import Link from "next/link";

export default function Header() {
  const { user, isAuthenticated } = useUser();

  return (
    <nav className='flex bg-slate-900 p-4 justify-between text-white'>
      {isAuthenticated ? (
        <h1>Hello {user?.email}</h1>
      ) : (
        <div>Welcome</div>
      )}

      <div className='flex gap-4'>
        <Link href='/'>Home</Link>
        {isAuthenticated ? (
          <>
            <Link href='/server'>Server Page</Link>
            <Link href='/client'>Client Page</Link>
            <SignOut>Sign Out</SignOut>
          </>
        ) : (
          <>
            <SignIn>Sign In</SignIn>
            <SignUp>Sign Up</SignUp>
          </>
        )}
      </div>
    </nav>
  );
}
