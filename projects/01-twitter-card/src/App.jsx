import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App () {
    return (
        <section className='App'>
            <TwitterFollowCard userName="gorillaz" isFollowing={false}>
                gorillaz
            </TwitterFollowCard>        

            <TwitterFollowCard userName="anuel2blea" isFollowing>
                anuelaa
            </TwitterFollowCard>

            <TwitterFollowCard userName="badbunny15" isFollowing>
                badbunny
            </TwitterFollowCard>
     
        </section>
    )
}
