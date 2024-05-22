import { useUser } from '@monocloud/nextjs-auth/client';

export default function ClientSide() {
  const { user, isAuthenticated, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (!user) return <div>Something went wrong!</div>;
  if (!isAuthenticated) return <div>Please Sign In...</div>;

  return (
    <div className='mt-5 ml-5'>
      <p>Hello {user.email} from the Client</p>
      <h1>User:</h1>
      <div className='pl-2 flex flex-col gap-2'>
        <textarea
          className='text-black w-3/5 p-2 rounded-md text-sm'
          cols={30}
          rows={10}
          value={JSON.stringify(user, undefined, 2)}
          readOnly={true}
        />
      </div>
    </div>
  );
}
