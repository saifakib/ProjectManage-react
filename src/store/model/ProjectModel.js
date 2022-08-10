import { action } from 'easy-peasy'
import iterator from '../../utils/idGenerator';

const gen = iterator();

const projectModel = {
    projects: {},
    AddProject: action((state, payload) => {
        state.projects[gen.next().value] = payload
    }),
    UpdateProject: action((state, payload) => {
        state.projects[payload.id] = payload.data
    })
}

export default projectModel;


