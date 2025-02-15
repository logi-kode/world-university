import { useNavigate } from 'react-router-dom'
import DetailCard from '../components/DetailCard'

const Home = () => {
    const navigate = useNavigate()

    return(
        <>
            <h3>Hom</h3>
            <button onClick={() => navigate('/about')} className='bg-blue-500 border border-blue-800 p-1 w-[100px] hover:cursor-pointer hover:bg-blue-200'>About</button>
            <DetailCard/>
        </>
    )
}

export default Home