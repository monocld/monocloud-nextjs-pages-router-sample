import { getSession } from '@monocloud/nextjs-auth';
import { InferGetServerSidePropsType, NextApiRequest, NextApiResponse, GetServerSideProps } from 'next';

export default function ServerPage({
  user,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!user) return <div>Please Sign In...</div>;

  return (
    <div className='mt-5 ml-5'>
      <p>Hello {user.email} from the Server</p>
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

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const session = await getSession(ctx.req, ctx.res);
  return { props: { user: session?.user } };
};
