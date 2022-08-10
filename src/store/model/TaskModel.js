import { action } from 'easy-peasy'
import iterator from '../../utils/idGenerator';

const gen = iterator();

const taskModel = {
    tasks: {},
    AddTask: action((state, payload) => {
        state.tasks[payload.id] = payload.data
    }),
    UpdateTask: action((state, payload) => {
        state.tasks[payload.id] = payload.data
    })
}

export default taskModel;


