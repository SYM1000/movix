import React from 'react'
import './ProgressRing.css'

function ProgressRing({percentageValue}) {
    // const percentage = {percentageValue};
    const radius = 25;
    const strokeWidth = 10;
    const duration = 500;
    const color = 'rgb(27, 180, 95)';
    // const color = 'rgb(162, 225, 186)';
    const delay = 0;
    const textColor = '';
    const max = 100;
    const halfCircle = radius + strokeWidth;
    const circleCircumference = 2 * Math.PI * radius;

    const maxPerc = 100 * {percentageValue}.percentageValue / max;
    var strokeDashoffset = circleCircumference - (circleCircumference * maxPerc) / 100;

    return (
        <div className='progressRing'>
            <div className="grupo">
            <svg 
                width={radius * 2} 
                height={radius*2}
                viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
            >
            <g  transform="rotate(-90 35 35)" origin={`${halfCircle}, ${halfCircle}`}> 
                <circle
                    cx='50%'
                    cy='50%'
                    stroke={color}
                    strokeWidth={strokeWidth}
                    r={radius}
                    fill='transparent'
                    strokeOpacity={0.3}
                />
                <circle
                    cx='50%'
                    cy='50%'
                    stroke={color}
                    strokeWidth={strokeWidth}
                    r={radius}
                    fill='transparent'
                    strokeDasharray={circleCircumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap='round'
                />
            </g>

            </svg>
            </div>
            
            <h5>{percentageValue}</h5> 
            
        </div>
    )
}

export default ProgressRing
