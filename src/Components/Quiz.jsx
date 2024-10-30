import React, { useState } from 'react'

const Quiz = () => {
    const [activeQuesIndex , setActiveQuesIndex] = useState(0);
    const [userAnswers , setUserAnswers] = useState([]);
  return (
    <p>Currently active question</p>
  )
}
 
export default Quiz
