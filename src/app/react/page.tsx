'use client';
// import { useRef } from 'react';

// export default function Counter() {
//   let ref = useRef(0);

//   function handleClick() {
//     ref.current = ref.current + 1;
//   }

//   return (
//     <>
// 		<div>Clicked + {ref.current} + times</div>
// 		<button onClick={handleClick}>
// 			Click me!
// 		</button>
//     </>
//   );
// }
import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h3>⚠️ Something went wrong!</h3>;
    }
    return this.props.children;
  }
}



export default ErrorBoundary