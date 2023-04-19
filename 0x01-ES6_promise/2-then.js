/* eslint-disable no-console */

export default function handleResponseFromAPI(promise) {
  const fulfilledLog = () => console.log('Got a response from the API');
  return promise
    .then(() => ({ status: 200, body: 'success' }))
    .catch(() => new Error())
    .finally(() => fulfilledLog());
}
