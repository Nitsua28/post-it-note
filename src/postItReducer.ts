
export type PostState = {
    input: string,
    postItArr: string[]
}

export type InputAction = {type: "INPUT", payload: string};
export type PostAction = {type: "POST"};
export type ClearAction = {type: "CLEAR"};
export type DeleteAction = {type: "DELETE"};
export type PostItAction = ClearAction | PostAction | InputAction | DeleteAction;

export function postItReducer(state: PostState, action: PostItAction): PostState{
    const newState: PostState = JSON.parse(JSON.stringify(state));// make deep copy

    switch(action.type){
        case "INPUT":{
            newState.input = action.payload;
            return newState;
        }
        case "POST":{
            if(newState.input.length > 3) newState.postItArr.push(newState.input);
            return newState;
        }
        case "CLEAR":{
            newState.postItArr = [];
            return newState;
        }
        case "DELETE":{
            let newArr = newState.postItArr;
            newArr.pop()
            newState.postItArr = newArr;
            return newState;
        }
    }
}