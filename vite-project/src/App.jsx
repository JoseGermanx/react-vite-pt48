/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import SecondsCounter from './components/SecondsCounter';


// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { seconds: 0 };
//   }

//   componentDidMount() {
//     this.interval = setInterval(() => {
//       this.setState(prevState => ({ seconds: prevState.seconds + 1 }));
//     }, 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.interval);
//   }

//   render() {
//     return <SecondsCounter seconds={this.state.seconds} />;
//   }
// }

// export default App;





















const App = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <SecondsCounter seconds={seconds} />;
};

export default App;