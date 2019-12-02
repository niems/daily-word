import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';

import WordArchive from './view/WordArchive';

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
const database = app.database();

export default class DailyWord extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      words: null //* stores all daily words
    }
  }

  componentDidMount() {
    const words = database.ref("daily-words/words").limitToFirst(10);

    let wordsPromise = new Promise((resolve, reject) => {
      words.once('value').then((snapshot) => {
        if (snapshot.val()) {
          resolve(snapshot.val());
        }

        else {
          reject(snapshot.val());
        }
      });
    });

    wordsPromise.then(data => {
      console.log(Object.entries(data));

      this.setState({
        words: Object.entries(data)
      });
    });
  }

  render() {
    return (
      <main className='App'>
        <h1>Data</h1>
        {
          this.state.words ?
          <WordArchive words={this.state.words} /> : null
        }
      </main>
    );
  }
}

