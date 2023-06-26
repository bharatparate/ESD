import React from 'react';
import Navigation from '../components/Navigation/Navigation';
import BlackBanner from '../components/BlackBanner/BlackBanner';
import AccordianCustom from '../components/Accordian/AccordianCustom';



const DetailPage = () => {
 
  return (
    <>
        <div className='detailPage'>
            <div className='detailPage__left'>
                <Navigation/>
            </div>
            <div className='detailPage__right'>
               <BlackBanner title={"When you are doing something neat, and you're doing it with neat people, and there is that convergence, something amazing will happen 123."}/>
              
              <div className='detailPage__right-content'>
                   <AccordianCustom/>
              </div>
            </div>
        </div>
        
        
    </>
  );
}

export default DetailPage;