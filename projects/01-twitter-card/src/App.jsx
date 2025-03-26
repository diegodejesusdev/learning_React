import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard  
                userName="gorillaz" 
                name="gorillaz" 
                isFollowing={false}
            />

            <TwitterFollowCard  
                userName="anuel2blea" 
                name="anuelaa" 
                isFollowing
            />

            <TwitterFollowCard  
                userName="badbunny15" 
                name="badbunny" 
                isFollowing
            />
        </section>
    )
}
