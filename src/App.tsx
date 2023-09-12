import { Route, Switch } from 'wouter'

import { Footer } from './layout/index'
import { Home, Publications, PostDetail, NotFound  } from './pages'

import './App.css'

function App() {

    return (
        <>
            <Switch>
                <Route path='/' component={Home} />
                <Route path='/publications' component={Publications}/>
                <Route path='/postDetail:pid' component={PostDetail} />
                <Route  component={NotFound} />
            </Switch>
            <Footer />
        </>
    )
}

export default App
