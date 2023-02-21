import React, { useEffect, useState } from 'react';
import {FaDice} from 'react-icons/fa'
import { toast } from 'react-toastify';
import api from '../../services/axios';
import { Card, Content, MainApp } from './styled';

interface IData {
    id: number
    advice: string,
}

export const Main = () => {
    const [data, setData] = useState<IData>()
    const [refresh, setRefresh] = useState<boolean>(false)

    
    useEffect(() => {
        const getData = async() => {
            try{
                const response = await api.get('/advice');
                setData(response.data.slip)
            }catch(err){
                toast.error('Erro na aplicação.')
            }            
        }
        getData();        
    }, [refresh])

    const handleRefresh = () => {
       setRefresh(!refresh)
    }

    return (
        <MainApp>
            <Card>
                <Content aria-label="Content">
                    <div>
                        <h1 aria-label="Title">ADVICE #{data?.id}</h1>
                    </div>
                    <div>
                        <h2 aria-label="Advice">{data?.advice}</h2>   
                    </div>           
                </Content>
                <hr />
                <button onClick={handleRefresh} aria-label="Atualizar"><FaDice size={36}/></button>
            </Card>
        </MainApp>
    )
}

export default Main