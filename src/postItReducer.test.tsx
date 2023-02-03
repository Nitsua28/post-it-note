import React, {useReducer} from "react"
import { postItReducer } from "./postItReducer"

const [PostState, dispatch] = useReducer(postItReducer,{input: "",postItArr:[]})

describe("test INPUT", () =>{
    it("Should Replace input data", ()=>{
        dispatch({type: "INPUT",payload: "Austin"})
        expect(PostState.input).toBe("Austin")
    })
})

describe("test POST", () =>{
    it("Should Append to data array", ()=>{
        dispatch({type: "INPUT",payload: "Austin"})
        dispatch({type: "POST"})
        expect(PostState.postItArr).toBe(["Austin"])
    })
})

describe("test POST (not append if less than 3 characters)", () =>{
    it("Should Not Append to data array", ()=>{
        dispatch({type: "INPUT",payload: "aa"})
        dispatch({type: "POST"})
        expect(PostState.postItArr).toBe([])
    })
})

describe("test CLEAR", () =>{
    it("Should clear data array", ()=>{
        dispatch({type: "INPUT",payload: "Austin"})
        dispatch({type: "POST"})
        dispatch({type: "INPUT",payload: "Chan"})
        dispatch({type: "POST"})
        dispatch({type: "CLEAR"})
        expect(PostState.postItArr).toBe([])
    })
})

describe("test DELETE", () =>{
    it("Should pop an element from the data array", ()=>{
        dispatch({type: "INPUT",payload: "Austin"})
        dispatch({type: "POST"})
        dispatch({type: "INPUT",payload: "Chan"})
        dispatch({type: "POST"})
        dispatch({type: "DELETE"})
        expect(PostState.postItArr).toBe(["Austin"])
    })
})