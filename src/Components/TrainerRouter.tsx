import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import Categories from './Pages/Categories'
import Home from './Pages/Home'

export default function TrainerRouter() {
  return (
    <>
      <div className="bg-white p-4">
        <Link
          className="no-underline text-black text-4xl font-semibold font-mono"
          to="/"
        >
          MCT-Trainer
        </Link>
      </div>
      <div className="bg-white p-6">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/categories">
            <Categories />
          </Route>
        </Switch>
      </div>
    </>
  )
}
