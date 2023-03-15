import React from "react";
import {reducer, StateType, TOGGLE_COLLAPSED} from "./reducer";

test('collapsed should change true', () => {

    const state: StateType = {
        collapsed: false
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(true)

})

test('collapsed should change false', () => {

    const state: StateType = {
        collapsed: true
    }

    const newState = reducer(state, {type: TOGGLE_COLLAPSED})

    expect(newState.collapsed).toBe(false)

})

test('reducer should throw error', () => {

    const state: StateType = {
        collapsed: true
    }

    expect(()=>{
        reducer(state, {type: 'FACETYPE'})
    }).toThrowError()

})