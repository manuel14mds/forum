import { Route } from 'wouter'
import './App.css'
import { Footer } from './layout/index'
import { Home, Publications, PostDetail } from './pages'



function App() {

    return (
        <>
            <Route path='/' component={Home} />
            <Route path='/publications' component={Publications}/>
            <Route path='/post' component={PostDetail} />
{/*             <Route path='/postDetail:pid' component={PostDetail} />
            <Route path='/:rest*' component={PostDetail} /> */}
            <Footer />
        </>
    )
}

export default App
