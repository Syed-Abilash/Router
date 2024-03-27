import React from 'react';
import Card from './Card';


const Datascience = ({ data }) => {
    const datascience = data.filter((item)=>item.head === 'Data Science')
    return (
        <div>
            <div className="row row-cols-4 mt-5">

                {datascience.map((item, index) => {
                    return (
                        <>
                            <Card item={item} index={index } />
                        </>
                    )
                })}
             </div>
        </div>
    );
};

export default Datascience;