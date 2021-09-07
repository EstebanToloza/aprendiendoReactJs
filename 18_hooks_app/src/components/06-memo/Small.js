import React, { /* memo */ } from 'react'

const Small = React.memo(({ value }) => {
//const Small = memo(({ value }) => { ///// puede usarse "memo" de ambas maneras

    console.log('me molví a llamar :(')
    return (
        <small>
            { value }
        </small>
    )
})

export default Small
