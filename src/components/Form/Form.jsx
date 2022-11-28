import React, {useEffect, useState} from 'react';
import './Form.css'
import {useTelegram} from "../../hooks/useTelegram";

const Form = () => {
    const [country, setCountry] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('')
    const {tg} = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: "Отправить данные"
        })
    }, [])

    useEffect(() => {
        if (!street || !country) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    },[country, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    const onChangeStreet= (e) => {
        setStreet(e.target.value)
    }

    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }

    return (
        <div className={'form'}>
            <h3>Введите ваши данные</h3>
            <input
                className={'input'}
                placeholder={'Страна'}
                type="text"
                value={country}
                onChange={(e) => onChangeCountry(e)}
            />
            <input
                className={'input'}
                placeholder={'Улица'}
                type="text"
                value={street}
                onChange={(e) => onChangeStreet(e)}
            />
            <select value={subject} onChange={(e) => onChangeSubject(e)} className={'select'}>
                <option value="physical">Физ. лица</option>
                <option value="legal">Юр. лицо</option>
            </select>
        </div>
    );
};

export default Form;