import { useEffect, useState } from 'react'
import axios from 'axios'
import Category from '../../types/category.types'
import env from '../../config/env.config'
import './categories.styles.css'

const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])
  console.log(categories)

  const fetchCategories = async () => {
    try {
      const { data } = await axios.get(`${env.apiUrl}/api/category`)
      console.log({ data })
      setCategories(data)
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <div className="categories-container">
      <div className="categories-content">{}</div>
    </div>
  )
}

export default Categories
