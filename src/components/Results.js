import React from 'react'
import Card from './Card'

export default function Results({results}) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
    2x1:grid-cols-5 max-w-6x1 mx-auto py-4'>
      {results.map((result) => (
        <Card key={result.id} result={result} />
      ))}
    </div>
  )
}
