// components/ExpenseForm.js
import { useState } from 'react'
import axios from 'axios'

export default function ExpenseForm() {
  const [expense, setExpense] = useState({ amount: '', description: '', date: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post('/api/expenses', expense)
      setExpense({ amount: '', description: '', date: '' })
      // Trigger a refresh of the expense list
    } catch (error) {
      console.error('Error adding expense:', error)
    }
  }

  return (
   <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-blue-50 p-6 rounded-lg shadow-lg">
  <div className="mb-4">
    <input
      type="number"
      value={expense.amount}
      onChange={(e) => setExpense({...expense, amount: e.target.value})}
      placeholder="Amount"
      required
      className="w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-100"
    />
  </div>
  <div className="mb-4">
    <input
      type="text"
      value={expense.description}
      onChange={(e) => setExpense({...expense, description: e.target.value})}
      placeholder="Description"
      required
      className="w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-100"
    />
  </div>
  <div className="mb-4">
    <input
      type="date"
      value={expense.date}
      onChange={(e) => setExpense({...expense, date: e.target.value})}
      required
      className="w-full p-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-blue-100"
    />
  </div>
  <button type="submit" className="w-full bg-green-500 text-white p-2 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2">
    Add Expense
  </button>
</form>
  )
}