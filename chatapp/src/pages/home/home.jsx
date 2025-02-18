import React from 'react'
import Searchinput from '../components/sidebar/searchinput'
import Sidebar from '../components/sidebar/sidebar'
import Messagecontainer from '../components/message/messagecontainer'

const Home = () => {
  return (
      <div className=' flex sm:h-[520px] md:h-[520px]   bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
        <Sidebar/>
    < Messagecontainer/>
      </div>
  )
}

export default Home

/* CODE FOR HOME PAGE 

import React from 'react'
import Searchinput from '../components/sidebar/searchinput'
import Sidebar from '../components/sidebar/sidebar'
import Messagecontainer from '../components/message/messagecontainer'

const Home = () => {
  return (
      <div className=' flex sm:h-[450px] md:h-[500px]   bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100'>
        <Sidebar/>
    < Messagecontainer/>
      </div>
  )
}

export default Home
*/