export default async (name, message, prefix) => {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');
  myHeaders.append('Cookie', 'JSESSIONID=8vmvXRsIrVHUXC7goMZPdhXE.jvm1');

  var urlencoded = new URLSearchParams();
  urlencoded.append('name', name);
  urlencoded.append('message', message);
  urlencoded.append('prefix', prefix);

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow',
  };
  const response = await fetch(
    'http://10.157.192.95:8080/condolence/SaveCondolenceMessage',
    requestOptions
  );

  // const json = await response.json();

  return response;
};
