import React from 'react'
import './ProgressRing.css'

function ProgressRing() {
    const percentage = 70;
    const radius = 40;
    const strokeWidth = 10;
    const duration = 500;
    // const color = 'rgb(27, 180, 95)';
    const color = 'rgb(162, 225, 186)';
    const delay = 0;
    const textColor = '';
    const max = 100;
    const halfCircle = radius + strokeWidth;
    const circleCircumference = 2 * Math.PI * radius;

    const macPerc = 100 * percentage / max;
    const strokeDashoffset = circleCircumference - (circleCircumference * macPerc) / 100;

    return (
        <div className='progressRing'>
            <div className="grupo">
            <svg 
                width={radius * 2} 
                height={radius*2}
                viewBox={`0 0 ${halfCircle * 2} ${halfCircle * 2}`}
            >
            <g transform="rotate(-90 50 50)" origin={`${halfCircle}, ${halfCircle}`}>
                <circle
                    cx='50%'
                    cy='50%'
                    stroke={color}
                    strokeWidth={strokeWidth}
                    r={radius}
                    fill='transparent'
                    strokeOpacity={0.2}
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
            
            <h5>{percentage}%</h5> 
            
        </div>
    )
}

export default ProgressRing
