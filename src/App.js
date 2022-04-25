import { Route, Switch } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetup';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/new-meetup">
          <NewMeetupsPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
