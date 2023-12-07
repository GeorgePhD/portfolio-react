import { Routes, Route, NavLink, BrowserRouter } from 'react-router-dom';
import {Home} from '../components/Home';
import {Portfolio} from '../components/Portfolio';
import {Services} from '../components/Services';
import {Curriculum} from '../components/Curriculum';
import {Contact} from '../components/Contact';
import { HeaderNav } from '../components/layout/HeaderNav';
import { Footer } from '../components/layout/Footer';
import { Projects } from '../components/Projects';
const MyRoutes = () => {
    return (
        <BrowserRouter>
        {/* header and navigation */}
        <HeaderNav />
        {/* main content */}
        <section className='content'>
            <Routes>
            <Route path='/' element={<Home />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/Portfolio' element={<Portfolio />} />
                <Route path='/Services' element={<Services />} />
                <Route path='/Curriculum' element={<Curriculum />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path='/Projects/:id' element={<Projects />} />
                <Route path='*' element={
                    <div className='page'>
                <h1 className='h1'>Error 404, page not found</h1> 
                </div>
                } />
            </Routes>
        </section>

        {/* Footer */}
        <Footer />
        <h1>MyRoutes</h1>
        </BrowserRouter>
    )
}

export default MyRoutes