import NextAuth, { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
    providers: [
      {
        id: 'monocloud',
        name: 'MonoCloud',
        type: 'oauth',
        wellKnown: `${process.env.MONOCLOUD_ISSUER}/.well-known/openid-configuration`,
        clientId: process.env.MONOCLOUD_CLIENT_ID,
        clientSecret: process.env.MONOCLOUD_CLIENT_SECRET,
        authorization: { params: { scope: process.env.MONOCLOUD_SCOPES } },
        idToken: true,
        checks: ['pkce', 'state'],
        profile(profile) {
          let name: string;
  
          if (profile.name) {
            name = profile.name;
          } else if (profile.given_name && profile.given_name) {
            name = profile.given_name + ' ' + profile.family_name;
          } else {
            name = profile.given_name ?? profile.preferred_username;
          }
  
          return {
            id: profile.sub,
            name: name,
            email: profile.email,
            image: profile.picture,
          }
        }
      }
    ]
};

export default NextAuth(authOptions);