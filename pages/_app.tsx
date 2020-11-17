import type { AppProps } from 'next/app';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from '@/styles/theme';

import firebase from 'firebase/app';
import 'firebase/firestore';
import { firebaseConfig } from '../_firebase_Config';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

// firestoe data 불러오기 sample
const docRef = db.collection('test_collection').doc('test_doc');
docRef
  .get()
  .then(function (doc) {
    if (doc.exists) {
      console.log('Document data:', doc.data());
      console.log('Document data in test_field1:', doc.data()['test_field1']);
      console.log('Document data in test_field2:', doc.data()['test_field2']);
      // fielddata = doc.data()['test_field1'];
    } else {
      // doc.data() will be undefined in this case
      console.log('No such document!');
    }
  })
  .catch(function (error) {
    console.log('Error getting document:', error);
  });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
