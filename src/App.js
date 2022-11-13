import React, {useEffect} from 'react';
const tg = window.Telegram.WebApp;

const App = () => {

    useEffect(() => {
        tg.ready();
    }, [])

    const onCLose = () => {
        tg.close();
    }

    return (
        <div>
          <button onClick={onCLose}>Закрыть</button>
        </div>
    );
};

export default App;