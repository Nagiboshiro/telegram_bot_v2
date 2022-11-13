import React, {useEffect} from 'react';
import './App.css'
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";

const App = () => {
    const {tg, onToggleButton} = useTelegram()

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div>
            <Header/>
            <span>test : {tg.initDataUnsafe?.user?.username}</span>
            <span>test0 : {tg.initDataUnsafe.user.username}</span>
            <span>test1 : {tg.initDataUnsafe?.user}</span>
            <button onClick={onToggleButton}>toggle</button>
        </div>
    );
};

export default App;