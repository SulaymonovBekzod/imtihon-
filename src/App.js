import React from 'react'
import "./App.css"
import { Routes, Route } from 'react-router-dom'
import Royxat from './components/Royxat/Royxat'
import Login from './components/Login/Login'
import Sidebar from './components/Sidebar/Sidebar'
import Notfound from './components/NotFound/Notfound'
import Akkaunt from './components/Akkaunt/Akkaunt'


export default function App() {

    return (
        <div>
            <Routes>
                <Route path='/sidebar' element={<Sidebar />} />
                <Route path='/akkaunt' elelment={<Akkaunt />} />
                <Route path='/login' element={<Login />} />
                <Route path="/royxat" element={<Royxat />} />
                <Route path='*' element={<Notfound />} />
            </Routes>
        </div>
    )
}
