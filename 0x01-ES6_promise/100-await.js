import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
//  const errorLog = () => console.log('Signup system offline')
  const photo = await uploadPhoto().then((res) => res).catch(() => null);
  const user = await createUser().then((res) => res).catch(() => null);

  if (photo == null || user == null) {
    return { photo: null, user: null };
  }
  return { photo, user };
}
