import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    return (
        <footer className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
                {/* Responsive grid for sections */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 text-left">
                    {/* Shop for Section */}
                    <div>
                        <h3 className="font-semibold text-black mb-3">Shop for</h3>
                        <ul>
                            {['Creative Cloud', 'Photoshop', 'Adobe Express', 'Photography', 'Premiere Pro', 'Adobe Stock', 'Acrobat Sign', 'Special offers'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-700 hover:text-red-600">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* For Business Section */}
                    <div>
                        <h3 className="font-semibold text-black mb-3">For business</h3>
                        <ul>
                            {['Creative Cloud for business', 'Acrobat for business'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-700 hover:text-red-600">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Experience Cloud Section */}
                    <div>
                        <h3 className="font-semibold text-black mb-3">Experience Cloud</h3>
                        <ul>
                            {['Analytics', 'Commerce', 'Marketo Engage', 'Workfront'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-700 hover:text-red-600">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div>
                        <h3 className="font-semibold text-black mb-3">Support</h3>
                        <ul>
                            {['Download and Install', 'Help Centre', 'Adobe Support Community'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-700 hover:text-red-600">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources Section */}
                    <div>
                        <h3 className="font-semibold text-black mb-3">Resources</h3>
                        <ul>
                            {['Adobe Blog', 'Adobe Developer', 'Adobe Account'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="text-gray-700 hover:text-red-600">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Divider and Social Media */}
                <div className="flex flex-col lg:flex-row justify-center space-x-6 items-center border-t border-gray-300 mt-8 pt-4 space-y-4 lg:space-y-0">
                    <p className="text-sm text-gray-500">© 2024 Adobe. All rights reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="hover:text-red-600">
                            <FontAwesomeIcon icon={faFacebook} size="lg" className="text-gray-500" />
                        </a>
                        <a href="#" className="hover:text-red-600">
                            <FontAwesomeIcon icon={faTwitter} size="lg" className="text-gray-500" />
                        </a>
                        <a href="#" className="hover:text-red-600">
                            <FontAwesomeIcon icon={faInstagram} size="lg" className="text-gray-500" />
                        </a>
                        <a href="#" className="hover:text-red-600">
                            <FontAwesomeIcon icon={faLinkedin} size="lg" className="text-gray-500" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
