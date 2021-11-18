
import './App.css';
import { Route, Switch } from 'react-router';
import AppBar from './components/AppBar';
import Home from './pages/Home';
import ComponentViewer from './pages/ComponentViewer';
import ThemeBuilder from './pages/ThemeBuilder';
import ComponentTester from './pages/ComponentTester';



function App() {

  return (
    <div className="font-roboto-300">
      
      <AppBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/component-viewer" component={ComponentViewer} />
        <Route exact path="/theme-builder" component={ThemeBuilder} />
        <Route exact path="/component-tester" component={ComponentTester} />
      </Switch>
    </div>
  );
}

export default App;
