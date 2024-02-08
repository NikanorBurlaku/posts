import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../route';
import { AuthContext } from '../context';

const AppRouter = () => {

    const { isAuth, isLoading } = useContext(AuthContext)


    return (

        isAuth
            ?
            <Routes>
                {privateRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.component
                            key={route.path}
                        />}

                    />)}

                <Route path='/*' element={<Navigate to='/posts' />} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={<route.component
                            key={route.path}
                        />}
                    />)}

                <Route path='/*' element={<Navigate to='/login' />} />
            </Routes>
    );
};

export default AppRouter;