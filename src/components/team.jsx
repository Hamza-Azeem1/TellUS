import maqsoodImage from '../assets/Maqsood.jpeg';
import abdulImage from '../assets/abdul.jpg';
import hamzaImage from '../assets/hamza.jpg';

const TeamMembers = () => {
    const teamMembers = [
        { name: 'Abubakr', designation: 'CEO', image: maqsoodImage },
        { name: 'Maqsood', designation: 'CTO', image: maqsoodImage },
        { name: 'Abdul Rahman', designation: 'HR', image: abdulImage },
        { name: 'Hamza Azeem', designation: 'Developer', image: hamzaImage },
    ];

    return (
        <div className="bg-gray-100 py-16">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-center">
                <div className="md:order-2 text-center">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">Our Team</h2>
                    <div className="md:order-1 md:mr-8 mb-4 text-center">
                        <p className="text-gray-700 text-lg md:text-xl lg:text-2xl leading-relaxed mb-6">
                            &#34;Together, we build strength and achieve greatness as a team.&#34;
                        </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="mx-auto h-40 md:h-40 lg:h-48 w-40 md:w-40 lg:w-48 rounded-full mb-4 object-cover"
                                />
                                <h3 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">{member.name}</h3>
                                <p className="text-black">{member.designation}</p>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default TeamMembers;
