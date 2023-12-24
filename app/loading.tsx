import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function Loading() {
    return (
        <main className="flex flex-col items-center justify-center w-screen h-screen">
            <h1 className="text-4xl font-bold text-center m-5">
                Loading...
            </h1>
            <div style={{ width: '5rem', height: '5rem' }} className="animate-spin">
                <FontAwesomeIcon icon={faSpinner}/>
            </div>
        </main>
    )
}
