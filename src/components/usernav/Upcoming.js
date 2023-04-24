import React from 'react'
import Task from '../task/Task';


const Upcoming = ({tasks, handleCheck, selectedDate, name}) => {

let copy = [];
for(let i = 0; i < tasks.length; i++) {
    // console.log(tasks[i].date)
    // console.log(selectedDate)
    if(tasks[i].date === selectedDate.toString()) {
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
        <div className="section">
            <hr className="taskLine"></hr>
            <div className="tasks">
                {copy?.map(task => {
                    return (
                    <div>
                        <Task task={task} handleCheck={handleCheck} type = {name}/>
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


