// components/ExpenseList.js
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function ExpenseList() {
  const [expenses, setExpenses] = useState([])

  useEffect(() => {
    fetchExpenses()
  }, [])

  const fetchExpenses = async () => {
    try {
      const response = await axios.get('/api/expenses')
      setExpenses(response.data)
    } catch (error) {
      console.error('Error fetching expenses:', error)
    }
  }

  return (
    <div className="bg-white shadow-md rounded-lg p-4 max-w-md mx-auto">
  <h2 className="text-xl font-semibold text-gray-800 mb-4">Expenses</h2>
  <ul className="list-disc pl-5 space-y-2">
    {expenses.map(expense => (
      <li key={expense.id} className="flex justify-between items-center">
        <span className="text-gray-600">{expense.description}</span>
        <span className="font-medium">
          ${expense.amount} <span className="text-sm text-gray-500">({expense.date})</span>
        </span>
      </li>
    ))}
  </ul>
</div>
  )
}