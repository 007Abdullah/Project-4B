import React from 'react';
import starts from './../images/starts.png';


export const Repeat = (props) => {
    return (
        <React.Fragment>
            <div style={{ textAlign: 'center' }}>
                <h2 style={{ textAlign: 'center', fontFamily: 'Serif' }}>{props.text}</h2>
                <figure>
                    <img src={starts} alt="Starts" style={{ width: '2%' }} />
                    <img src={starts} alt="Starts" style={{ width: '2%' }} />
                    <img src={starts} alt="Starts" style={{ width: '2%' }} />
                </figure>
                <hr style={{ width: '12%' }} />
            </div>
        </React.Fragment>
    )
}
