import { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import person1 from '../assets/person-1.jpeg';
import person2 from '../assets/person-2.jpeg';
import person3 from '../assets/person-3.jpeg';
import person4 from '../assets/person-4.jpeg';

const Slider = () => {
    const [people] = useState([
        {
            id: 1,
            image: person1,
            name: 'Maria Ferguson',
            quote:
                'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
        },
        {
            id: 2,
            image: person2,
            name: 'John Doe',
            quote:
                'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
        },
        {
            id: 3,
            image: person3,
            name: 'Peter Smith',
            quote:
                'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
        },
        {
            id: 4,
            image: person4,
            name: 'Susan Andersen',
            quote:
                'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag.',
        },
    ]);

    const [currentPerson, setCurrentPerson] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentPerson((prevPerson) => (prevPerson + 1) % people.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [people.length]);

    const handleNext = () => {
        setCurrentPerson((prevPerson) => (prevPerson + 1) % people.length);
    };

    const handlePrev = () => {
        setCurrentPerson((prevPerson) => (prevPerson - 1 + people.length) % people.length);
    };

    return (
        <div className="w-full max-w-screen-lg mx-auto mt-8 mb-8 relative bg-white p-6 rounded-lg">
            <h2 className="text-3xl font-semibold mb-4 text-center">User Opinions</h2>
            <div className="flex items-center justify-center relative">
                <button
                    onClick={handlePrev}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
                >
                    <ChevronLeftIcon className="h-6 w-6" />
                </button>
                <div className="flex flex-col items-center">
                    <img
                        src={people[currentPerson].image}
                        alt={people[currentPerson].name}
                        className="w-40 h-40 object-cover rounded-full border-4 border-gray-800"
                    />
                    <div className="mt-4 text-center">
                        <p className="text-xl font-semibold text-gray-800">{people[currentPerson].name}</p>
                        <p className="text-black text-lg">&ldquo;{people[currentPerson].quote}&rdquo;</p>
                    </div>
                </div>
                <button
                    onClick={handleNext}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full focus:outline-none"
                >
                    <ChevronRightIcon className="h-6 w-6" />
                </button>
            </div>
        </div>
    );
};

export default Slider;
