'use client';
// import React, { useState } from 'react';
// function counter(){
//     const [count, setCount] = useState(0);

//     return(
//         <div>
//         <h1>Count is:{count}</h1>
//         <button onClick={ ()=> setCount(count+1)}>Add</button>
//         </div>
//     );
// }
// export default counter;

// import {useState, useEffect} from 'react';
// function Time (){
//     const [time, setTime] = useState(0);

//     useEffect(()=>{
//         const interval = setInterval(()=>{
//             setTime(prev => prev+1)
//         },1000);
//         return ()=> clearInterval (interval);
//     }, []);

//     return(
//         <div>
//             time spent:{time}
//         </div>
//     );
// }


// export default Time;

import {useState, useEffect} from 'react';
function useTime(){
    const [time, setTime] = useState(0);

    useEffect(()=>{
        const interval = setInterval(()=>{
            setTime(prev =>prev+1);
        },1000);
        return ()=> clearInterval(interval); 
    },[]);
    return time;
}

export default useTime;

// function TimerComponent() {
//   const seconds = useTimer();

//   return (
//     <div>Seconds passed: {seconds}</div>
//   );
// }

// export default TimerComponent;