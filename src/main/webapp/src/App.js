import './App.css';
import React, {Component} from 'react';
import Header from "./header/Header";
import ContentProvider from "./ContentProvider";

class App extends Component {

    render() {
        return <div className="App">
            <Header />
            <ContentProvider />
        </div>
    }
}

export default App;
