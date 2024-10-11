export default function getResponseFromApi() {
  return new Promise((resolve, reject) => {
    const success = true;

    if (success) {
      setTimeout(() => resolve('Success!'), 1000);
    } else {
      setTimeout(() => reject(new Error('Something went wrong!')), 1000);
    }
  });
}
