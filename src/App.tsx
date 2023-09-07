import { Route, Switch } from 'wouter'
import './App.css'
import { Footer } from './layout/index'
import { Home, Publications, PostDetail, NotFound } from './pages'



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
            {/* <Route path='/postDetail:pid' component={PostDetail} />*/}
        </>
    )
}

export default App
