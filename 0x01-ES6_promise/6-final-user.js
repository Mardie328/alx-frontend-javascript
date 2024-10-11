import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return Promise.allSettled([
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ]).then((results) => {
    return results.map((result) => {
      if (result.status === 'fulfilled') {
        return result.value; // This will have the shape: { firstName: string; lastName: string; }
      }
      return result.reason.message; // This will be a string from the rejection.
    });
  });
}
