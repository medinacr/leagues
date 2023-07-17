'use client';

import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import AddButton from '@components/AddButton'
 
const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter()
  
  if(status === 'loading') {
    return <div>Loading...</div>
  }

  if(!session) {
    router.push('http://localhost:3000/')
    return null
  }

  return (
    <div className='w-full mb-16'>
      <div className='prompt_card !w-full !pb-6'>
        <h1 className=''>Standings</h1>
        <div className='flex items-center justify-between'>
          <svg xmlns="http://www.w3.org/2000/svg" className='shrink-0' class="icon icon-tabler icon-tabler-circle-arrow-left" width="160" height="160" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 21a9 9 0 1 0 0 -18a9 9 0 0 0 0 18" />
            <path d="M8 12l4 4" />
            <path d="M8 12h8" />
            <path d="M12 8l-4 4" />
          </svg>
          <div className='flex flex-grow overflow-x-hidden'>
            <p className='prompt_card'>1. Team 1</p>
            <p className='prompt_card'>2. Team 2</p>
            <p className='prompt_card'>3. Team 2</p>
            <p className='prompt_card'>3. Team 2</p>
            <p className='prompt_card'>3. Team 2</p>
            <p className='prompt_card'>3. Team 2</p>
            <p className='prompt_card'>3. Team 2</p>
            <p className='prompt_card'>3. Team 2</p>
            <p className='prompt_card'>3. Team 2</p>
            <p className='prompt_card'>3. Team 2</p>
            <p className='prompt_card'>3. Team 2</p>
            <p className='prompt_card'>3. Team 2</p>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" className='shrink-0' class="icon icon-tabler icon-tabler-circle-arrow-right" width="160" height="160" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M12 3a9 9 0 1 0 0 18a9 9 0 0 0 0 -18" />
            <path d="M16 12l-4 -4" />
            <path d="M16 12h-8" />
            <path d="M12 16l4 -4" />
          </svg>
        </div>
      </div>
      <div className='w-full flex justify-between py-8 sm:columns-3 sm:gap-6 xl:columns-3 max-h-full'>
        <section className='prompt_card flex-grow'>
          <h1>Schedule</h1>
          <div>
            <ol>
              <li>Team 1 vs Team 2</li>
            </ol>
          </div>
        </section>
        <section className='prompt_card'>
          <h1>Feed</h1>
          <p>Post team messages here!</p>
        </section>
        <section className='prompt_card'>
          <div className='flex justify-between justify-items-center'>
            <h1 className=''>Messages</h1>
            <AddButton/>
          </div>
          <p>Sample Message</p>
        </section>
      </div>
    </div>
  )
}

export default Dashboard