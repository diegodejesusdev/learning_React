import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
    {userName: 'gorillaz', name: 'Gorillaz', isFollowing: true},
    {userName: 'anuel2blea', name: 'Anuel AA', isFollowing: false},
    {userName: 'badbunny15', name: 'Bad Bunny', isFollowing: true},
]

export function App () {
    return (
        <section className='App'>
           {
            users.map(user => {
                const { userName, name, isFollowing } = user
                return (
                    <TwitterFollowCard 
                        key={userName}
                        userName={userName} 
                        initialIsFollowing={isFollowing}
                    >
                        {name}
                    </TwitterFollowCard>
                )
            })
           }
        </section>
    )
}
