import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
  const [showInfo,setShowInfo] = useState(false)
  return (
     <article className='question'>
   <header>
    <h4>{title}</h4>
    <button className='btn' onClick={()=> setShowInfo(!showInfo)}>                       {/*Here a button been made to if the -showInfo is Fasle then it will make it true r vice-versa */}
      {showInfo? <AiOutlineMinus/> : <AiOutlinePlus/>}                                   {/*Here we used +and - Icon */}
    </button>
    </header> 
    {showInfo && <p>{info}</p>}                                                          {/*Here we are &-Opertor to check if its truethen  Display any one of it */}
  </article>
  );
};

export default Question;
