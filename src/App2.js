import React, { useCallback, useState } from 'react';
import List from './components/List';

const App2 = () => {
    const [number, setNumber] = useState(1);
    const [dark, setDark] = useState(false);
    const theme={
        backgroundColor: dark ? "#333" : "#fff",
        color : dark ? "#fff" : "#333"
    }
    const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    }, [number])
    
    //useMemo 사용방법
    // const getItems = useMemo(() =>
    //     (value) => {
    //         return [number, number + 1, number + 2] //[1,2,3]
    //     }, [number])
    
    return (
        <div style={theme}>
            <input type="number" value={number}
            onChange={e=>setNumber(Number(e.target.value))}
            />
            <button onClick={()=>{setDark(!dark)}}>테마변경</button>
            <List getItems={getItems}/>
        </div>
    );
};

export default App2
