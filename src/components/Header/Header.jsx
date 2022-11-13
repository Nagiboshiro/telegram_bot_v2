import React, {useEffect} from 'react';
import './Header.css'
import Button from "../Button/Button";

const Header = () => {
    const tg = window.Telegram.WebApp;

    const onCLose = () => {
        tg.close();
    }

    return (
        <div className={'header'}>
            <Button onClick={onCLose}>Закрыть</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </div>
    );
};

export default Header;