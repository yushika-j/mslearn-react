import React from 'react';
import './Steps.css';

function Steps(props) {
    const steps = props.steps.map((step, index) => {
        return <li key={index}>{ step }</li>
    });

    return (
        <section>
            <h2>Steps</h2>
            <ol>
                { steps }
            </ol>
        </section>
    );
}

export default Steps;