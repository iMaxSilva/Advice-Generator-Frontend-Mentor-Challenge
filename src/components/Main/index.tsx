import React, { useEffect, useState } from 'react';
import {FaDice} from 'react-icons/fa'
import api from '../../services/axios';
import { Card, Content } from './styled';

interface IData {
    id: number
    advice: string,
}

export const Main = () => {
    const [data, setData] = useState<IData>()
    const [refresh, setRefresh] = useState<boolean>(false)

    
    useEffect(() => {
        const getData = async() => {
            const response = await api.get('/advice');
            setData(response.data.slip)
        }
        getData();        
    }, [refresh])

    const handleRefresh = () => {
       setRefresh(!refresh)
    }

    return (
        <main>
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
        </main>
    )
}

export default Main