import { action } from 'easy-peasy'
import iterator from '../../utils/idGenerator';

const gen = iterator();

const userModel = {
    users: {},
    AddUser: action((state, payload) => {
        state.users[gen.next().value] = payload
    })
}

export default userModel;
