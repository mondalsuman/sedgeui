
import './App.css';
import { Route, Switch } from 'react-router';
import AppBar from './components/AppBar';
import Home from './pages/Home';
import ComponentViewer from './pages/ComponentViewer';
import ThemeBuilder from './pages/ThemeBuilder';



function App() {

  return (
    <div>
      <AppBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/component-viewer" component={ComponentViewer} />
        <Route exact path="/theme-builder" component={ThemeBuilder} />
      </Switch>
    </div>
  );
}

export default App;
