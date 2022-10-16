import './App.css';
import React, {Component} from 'react';
import Header from "./header/Header";
import ContentProvider from "./ContentProvider";

class App extends Component {

    render() {
        return <div className="App" style={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh"
        }}>
            <Header />
            <ContentProvider />
        </div>
    }
}

export default App;
