import { useDispatch, useSelector } from "react-redux";
import { del } from "../reducers/task_slice";
import './listTask.css';
function ListTask() {
    const dispatch = useDispatch();
    const arrTask = useSelector((state) => state.task ? state.task.list : []);

    const handleDeleteTask = (name) => {
        dispatch(del(name));
    }

    return (
        <div className="task">
            <h1>Danh sách task</h1>
            <div className="task-1">
            {
               
                arrTask.map(function(task, index) {
                    return (
                        <div className="task-item" key={index}>{task}
                            <button onClick={() => handleDeleteTask(task)}>Xóa</button>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default ListTask;
