import React, { useEffect, useState } from 'react';
import AppNavigation from './src/navigations/AppNavigation';
import LoadingScreen from './src/screens/app/LoadingScreen';

const App = () => {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 3000)
    });

    return loading ? <LoadingScreen/> : <AppNavigation/>
}

export default App;