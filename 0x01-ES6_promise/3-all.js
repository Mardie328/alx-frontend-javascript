import { uploadPhoto, createUser } from '../utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto(), createUser()])
    .then((values) => {
      const { body } = values[0]; // Assuming uploadPhoto resolves with { body: '...' }
      const { firstName, lastName } = values[1];
      console.log(`${body} ${firstName} ${lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
