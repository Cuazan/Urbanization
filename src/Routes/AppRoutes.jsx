import { Route, Routes } from 'react-router-dom';
import { Home } from '../Home';
import { Urbanizations } from '../Pages/Urbanizations';
import { Layout } from '../Pages/Layout';
import { Houses } from '../Pages/Houses/Houses';

export function AppRoutes() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path='/' element={<Home />} />
                <Route path='/urbanizations' element={<Urbanizations />} />
                <Route path='/houses' element={<Houses/>}/>
            </Route>
        </Routes>
    )
}