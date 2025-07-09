"use client";
import { useRef } from 'react';

export default function Counter() {
  let ref = useRef(0);

  function handleClick() {
    ref.current = ref.current + 1;
  }

  return (
    <>
		<div>Clicked + {ref.current} + times</div>
		<button onClick={handleClick}>
			Click me!
		</button>
    </>
  );
}