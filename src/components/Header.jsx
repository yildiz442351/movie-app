"use client"
import React, { useState } from 'react'
import {BiSearch} from 'react-icons/bi'
import Menuitem from './Menuitem'
import ThemeComp from './ThemeComp'

const Header = () => {
       const [keyword, setKeyword] = useState('')
       const menu = [
            {
                name: "About",
                url: "/about"
            }
            {
                name: "Sig In",
                url: "/login"
            }
       ]

       const searchFunc = (e) => {
        if(e.key === "Enter" && keyword.length >= 3) {
            router.push(`/search/${keyword}`)

        }
       }

  return (
    <div className='flex items-center gap-3 h-20'>
        <div className='bg-amber-600 rounded-lg p-3 text-2xl font-bold'>MovieApp</div>
        <div className='flex items-center gap-2 border p-3 rounded-lg'>
              <input value={keyword} onKeyDown={searchFunc} onChange={e => setKeyword(e.target.value)} placeholder='Arama Yapınız !!!' className='outline-none flex-1 bg-transparent' type="text"/>
              <BiSearch size={25}/>
        </div>
        <ThemeComp/>
        {
            menu.map((mn,i) => (
                <Menuitem mn={mn} key={i}/>

            ))
        }
    </div>
  )
}

export default Header