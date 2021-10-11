import { createContext } from "react";

export const GlobalContext = createContext({
    tasks: [
        {
            id: '1',
            title: 'Title one',
            description: 'Some description',
            done: false
        },
        {
            id: '2',
            title: 'Title two',
            description: 'Some description',
            done: true
        }
    ]
})