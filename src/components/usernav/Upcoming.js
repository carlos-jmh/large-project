import React, { useEffect } from 'react'
import { useState } from 'react';
import Task from '../task/Task';

const Upcoming = ({tasks, eventHandlerData, handleCheck, selectedDate, name}) => {
    
    // Given the name, make sure task.EventType.toUpper matches.
    const [copy, setCopy] = useState([]);

    useEffect(() => {
        if (eventHandlerData && eventHandlerData.length > 0 && tasks && tasks.length > 0) {
            let s = (new Date(selectedDate).toISOString()).substring(0, 10);

            setCopy([]);

            for (let i = 0; i < tasks.length; i++) {
                let date = (tasks[i].date).substring(0, 10)
                
                // Get correct date and type of event.
                if(date === s && tasks[i].eventType === name.toUpperCase()) {
                    setCopy((prevCopy) => {
                        const newCopy = [...prevCopy, tasks[i]];
                        return newCopy;
                    });
                }
            }
        }
    }, [tasks, eventHandlerData, selectedDate]);
    
    if(copy.length === 0) {
        return (
            <div className="section">
                <hr className="taskLine"></hr>
                <div className="tasks">
                No Upcoming {name}s
                </div>
            </div>
        );
    } else {
        return (
            <div className="section" style={{"marginTop": "1.5rem"}}>
                <h6>{name}'s</h6>
                <hr className="taskLine"></hr>
                <div className="tasks">
                    {copy?.map((task, index) => {
                        return (
                        <div key={index}>
                            <Task
                                task={task}
                                eventHandlerData={eventHandlerData}
                                handleCheck={handleCheck}
                                type={name}
                            />
                        </div>
                        )
                    })}
                    <hr></hr>
                </div>
            </div>
        );
    }
};

export default Upcoming;


