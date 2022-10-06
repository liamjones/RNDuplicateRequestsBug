import {Buffer} from 'buffer';
import React from 'react';
import {Button, SafeAreaView} from 'react-native';

const App = () => (
  <SafeAreaView>
    <Button title="auth with 401" onPress={request401} />
    <Button title="auth with 200" onPress={request200} />
  </SafeAreaView>
);

const request401 = () => {
  // https://mockbin.org/bin/3275aeb4-a08d-43cd-9ed1-7c2410277124/view
  // {
  //   "status": 401,
  //   "statusText": "Unauthorized",
  //   "httpVersion": "HTTP/1.1",
  //   "headers": [
  //     {
  //       "name": "WWW-Authenticate",
  //       "value": "Basic realm=\"Test realm\""
  //     }
  //   ],
  //   "cookies": [],
  //   "content": {
  //     "mimeType": "text/plain",
  //     "text": "",
  //     "size": 0
  //   },
  //   "redirectURL": "",
  //   "bodySize": 0,
  //   "headersSize": 0
  // }
  fetch('https://mockbin.org/bin/3275aeb4-a08d-43cd-9ed1-7c2410277124', {
    headers: {
      Authorization: `Basic ${new Buffer('bad@example.org:password').toString(
        'base64',
      )}`,
    },
  })
    .then(value => console.warn('done', value))
    .catch(reason => console.warn('error', reason));
};

const request200 = () => {
  // https://mockbin.org/bin/a93f2f09-1957-464b-84c9-38e3597572e8/view
  // {
  //   "status": 200,
  //   "statusText": "OK",
  //   "httpVersion": "HTTP/1.1",
  //   "headers": [],
  //   "cookies": [],
  //   "content": {
  //     "mimeType": "text/plain",
  //     "text": "",
  //     "size": 0
  //   },
  //   "redirectURL": "",
  //   "bodySize": 0,
  //   "headersSize": 0
  // }
  fetch('https://mockbin.org/bin/a93f2f09-1957-464b-84c9-38e3597572e8', {
    headers: {
      Authorization: `Basic ${new Buffer('good@example.org:password').toString(
        'base64',
      )}`,
    },
  })
    .then(value => console.warn('done', value))
    .catch(reason => console.warn('error', reason));
};

export default App;
