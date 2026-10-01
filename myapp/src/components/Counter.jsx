import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(Math.max(0, count - 1))
  const reset = () => setCount(0)

  return (
    <section className="card">
      <h2>Counter</h2>
      <p className="value">{count}</p>
      {count === 0 && <p className="warning">Minimum limit reached</p>}
      <div className="actions">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement} disabled={count === 0}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
    </section>
  )
}

export default Counter