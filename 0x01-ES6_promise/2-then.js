export default function handleResponseFromAPI(promise) {
  const fulfilledLog = () => console.log('Got a response from the API');
  promise.then((success) => ({ status: 200, body: success }))
    .catch(() => new Error())
    .then(() => fulfilledLog());
}
