import React, { memo } from 'react'

const Small = memo(({ value }) => {

    console.log('me molví a llamar :(')
    return (
        <small>
            { value }
        </small>
    )
})

export default Small
