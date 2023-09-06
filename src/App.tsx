import { Route } from 'wouter'
import './App.css'
import { Footer } from './layout/index'
import { Home, Publications } from './pages'


function App() {

    return (
        <>
                <Route path='/home' component={Home}> </Route>
                <Route path='/publications' component={Publications}> </Route>
            <Footer />
        </>
    )
}

export default App
