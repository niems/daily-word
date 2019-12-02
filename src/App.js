import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/firestore';

import WordArchive from './components/view/WordArchive';
import './main.css';

var config = {
  apiKey: "AIzaSyDYIbT2tI5aQcBc2x_jNFgZ-zcaT3h2Rpw",
  authDomain: "daily-word-37d68.firebaseapp.com",
  databaseURL: "https://daily-word-37d68.firebaseio.com",
  projectId: "daily-word-37d68",
  storageBucket: "daily-word-37d68.appspot.com",
  messagingSenderId: "1003839959525",
  appId: "1:1003839959525:web:da8db9af5120f0d722ff0c",
  measurementId: "G-DWMMH7Q9G4"
};

// Initialize Firebase
const app = firebase.initializeApp(config);
const database = app.firestore();

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: null //* stores all daily words
    }
  }


  //* firestore call
  componentDidMount() {
    const words = database.collection("daily-words");
    const wordLimit = 3; //* number of words to retrieve

    let wordsPromise = new Promise((resolve, reject) => {
      words.limit(wordLimit).get().then(function (querySnapshot) {
        const words = [];

        querySnapshot.forEach(function (doc) {
          console.log(doc.id, ' => ', doc.data());
          words.push({
            name: doc.id, ...doc.data()
          });
        });

        if (words.length) {
          resolve(words);
        }
      });
    });

    wordsPromise.then(words => {
      this.setState({ words });
    });
  }

  render() {
    return (
      <main className='App'>
        {
          this.state.words ?
          <WordArchive words={this.state.words} /> : null
        }
      </main>
    );
  }
}
