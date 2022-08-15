import React, { MouseEventHandler, PropsWithChildren } from 'react'

interface Props {
    style?: string,
    action: MouseEventHandler<HTMLButtonElement>,
    isDisabled?: boolean
}

function ActionButon({ style, action, isDisabled, children }: PropsWithChildren<Props>) {
  return (
    <button className={style} disabled={isDisabled} onClick={action}>
        {children}
    </button>
  )
}

export default ActionButon