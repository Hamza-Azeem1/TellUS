const Portfolio = () => {
    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto py-8">
                <h1 className="text-4xl font-bold mb-6 text-center">Our Portfolio</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Portfolio Item 1 */}
                    <div className="bg-white p-8 rounded-md shadow-md">
                        <h2 className="text-xl font-bold mb-4">Project 1</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at urna vel libero tincidunt malesuada.
                        </p>
                    </div>

                    {/* Portfolio Item 2 */}
                    <div className="bg-white p-8 rounded-md shadow-md">
                        <h2 className="text-xl font-bold mb-4">Project 2</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Vestibulum nec orci et arcu bibendum tincidunt. In hac habitasse platea dictumst.
                        </p>
                    </div>

                    {/* Portfolio Item 3 */}
                    <div className="bg-white p-8 rounded-md shadow-md">
                        <h2 className="text-xl font-bold mb-4">Project 3</h2>
                        <p className="text-gray-700 leading-relaxed">
                            Mauris sed elit auctor, aliquet nunc in, ullamcorper tortor. Sed at ipsum vel arcu mollis posuere.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
