import { uploadPhoto, createUser } from './utils.js';

export default async function handleProfileSignup() {
  const errorLog = () => console.log('Signup system offline')
  const photo = await uploadPhoto().then((res) => res.body).catch(() => errorLog());
  const user = await createUser()
    .then((res) => ({ firstName: res.firstName, lastName: res.lastName }))
    .catch(() => errorLog());

  console.log(photo, user.firstName, user.lastName);
}
