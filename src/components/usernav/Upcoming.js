import React from 'react'
import Task from '../task/Task';

const Upcoming = ({tasks, handleCheck, selectedDate, name, handler}) => {
    // Given the name, make sure task.EventType.toUpper matches.
    let s = (new Date(selectedDate).toISOString()).substring(0, 10);
    let copy = [];
    for(let i = 0; i < tasks.length; i++) {
        let date = (tasks[i].date).substring(0, 10)
        
        // Get correct date and type of event.
        if(date === s && tasks[i].eventType === name.toUpperCase()) {
            copy.push(tasks[i])
        }
    }
    
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
            <div className="section" style={{"margin-top": "1.5rem"}}>
                <h6>{name}'s</h6>
                <hr className="taskLine"></hr>
                <div className="tasks">
                    {copy?.map(task => {
                        return (
                        <div>
                            <Task task={task} handleCheck={handleCheck} type={name} handlerData={handler}/>
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


