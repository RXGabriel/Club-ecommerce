import Categories from '../../components/categories/categories.component'
import Header from '../../components/header/header.components'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <Header />
      <Categories />
    </div>
  )
}

export default HomePage
