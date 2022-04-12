import tuitsModel from '../models/tuits-model.js';

export const createTuit = async (newTuit) => {
    return await tuitsModel.create(newTuit);
}

export const findAllTuits = async () => {
    return tuitsModel.find();
}

export const updateTuit = async (tid, tuit) => {
    return tuitsModel.updateOne(
        {_id: tid}, {$set: tuit}
    );
}

export const deleteTuit = async (tid) => {
    return tuitsModel.deleteOne(tid);
}