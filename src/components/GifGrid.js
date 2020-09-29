import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifs } from '../helpers/GetGifs';
//import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
    
  //  const [images, setimages] = useState([]);
    const { daloading } = useFetchGifs();

    console.log(loading)
  

    return (
        <>
             <h3>{ category }</h3>

            
            <div className='card-grid' >
                
                {
                    data.map( img => (   
                    <GifGridItem 
                            key = { img.id }
                            { ...img }
                        />         
                    ))
                }
                
            </div> 
        </>
    )
}
