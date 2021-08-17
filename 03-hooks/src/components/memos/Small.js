import React from 'react'

export const Small = React.memo(({value}) => {

    console.log('asdaas')
    return (
           <small>{value}</small>
    )
}
)
