// import React from 'react'

// function Button() {
//   return (
//     <div>Button</div>
//   )
// }

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    onCLick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function Button ( props: ButtonProps) {
    return (
        <button onClick={ props.onCLick } className={ props.className }>
            { props.children }
        </button>
    )
}