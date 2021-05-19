import { BrowserRouter as Router, Route } from 'react-router-dom';
import Join from './components/Join';
import Chat from './components/Chat';
import { ThemeProvider } from '@material-ui/core';
import { UserProvider } from './contexts/userContext';
import { SocketProvider } from './contexts/socketContext';
import theme from './theme';

function App() {

  return (
    <SocketProvider>
      <UserProvider>
        <ThemeProvider theme={theme}>
          <Router>
            <Route exact path="/" component={ Join } />
            <Route path="/chat" component={ Chat } />
          </Router>
        </ThemeProvider>
      </UserProvider>
    </SocketProvider>
  );
}

export default App;
