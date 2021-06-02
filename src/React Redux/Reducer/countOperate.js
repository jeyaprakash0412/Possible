export const countOperate = (state =5, action) =>{

    switch(action.type){
        case "ADD":
            return state+1
        case "SUBTRACT":
            return state-1
        case "MULTIPLY":
            return state*5
        case "DIV":
            return state/2
         default:
             return state   
    }
    
    
    }