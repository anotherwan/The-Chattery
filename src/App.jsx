import React, {Component} from 'react';
// import Nav from './Nav.jsx';
import MessageList from './MessageList.jsx';
import Message from './Message.jsx';
import ChatBar from './ChatBar.jsx';


class App extends Component {
  constructor(props) {
    super(props);
    this.state =  {
                    currentUser: {name: "Bob"}, // optional. if currentUser is not defined, it means the user is Anonymous
                    messages: [
                      {
                        id: 1,
                        username: "Bob",
                        content: "Has anyone seen my marbles?",
                      },
                      {
                        id: 2,
                        username: "Anonymous",
                        content: "No, I think you lost them. You lost your marbles Bob. You lost them for good."
                      }
                    ]
                  }

     this.addNewMessage = (message) => {
      const newMessage = {
        id: this.state.messages.length+1,
        username: this.state.currentUser.name,
        content: message
      }

      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
    };

  }


  componentDidMount() {
    this.setState({messages: this.state.messages})
    // setTimeout(() => {
    //   console.log("Simulating incoming message");
    //   // Add a new message to the list of messages in the data store
    //   const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    //   const messages = this.state.messages.concat(newMessage)
    //   // Update the state of the app component.
    //   // Calling setState will trigger a call to render() in App and all child components.
    //   this.setState({messages: messages})
    // }, 3000);
  }

  render() {
    return (
    <div>
      <MessageList
        messages={this.state.messages}
      />
      <Message />
      <ChatBar
        currentUser={this.state.currentUser}
        addNewMessage={this.addNewMessage}
      />
    </div>
  );
  }
}
export default App;
