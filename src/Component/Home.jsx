import Main from './Main'
import {Filter} from './Filter'
import { Outlet } from 'react-router-dom'


const Home = () => {
    return (
        <>  
            <Filter />
            <Main />
        </>
    )
}

export default Home