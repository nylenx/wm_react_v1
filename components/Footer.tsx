import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => (
    <div className="size-8 text-primary">
        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
            <path clipRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z" fillRule="evenodd"></path>
        </svg>
    </div>
);


const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                <div className="col-span-2 sm:col-span-1">
                    <Link to="/" className="flex items-center gap-3">
                        <Logo />
                        <h2 className="text-xl font-bold text-gray-900">WaveMicron</h2>
                    </Link>
                    <p className="mt-4 text-sm text-gray-600">Streamlining your revenue cycle for a healthier practice.</p>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Quick Links</h3>
                    <ul className="mt-4 space-y-2">
                        <li><Link to="/services" className="text-sm text-gray-600 hover:text-primary transition-colors">Services</Link></li>
                        <li><Link to="/expertise" className="text-sm text-gray-600 hover:text-primary transition-colors">Our Expertise</Link></li>
                        <li><Link to="/why-us/about-us" className="text-sm text-gray-600 hover:text-primary transition-colors">About Us</Link></li>
                        <li><Link to="/contact" className="text-sm text-gray-600 hover:text-primary transition-colors">Contact Us</Link></li>
                        <li><Link to="/submit-testimonial" className="text-sm text-gray-600 hover:text-primary transition-colors">Leave a Review</Link></li>
                        <li><Link to="/admin/create-post" className="text-sm text-gray-600 hover:text-primary transition-colors">Admin</Link></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Legal</h3>
                    <ul className="mt-4 space-y-2">
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">Terms of Service</a></li>
                        <li><a href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">HIPAA Compliance</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Contact Info</h3>
                    <ul className="mt-4 space-y-2">
                        <li className="text-sm text-gray-600">2795 E Cottonwood Pkwy</li>
                        <li className="text-sm text-gray-600">Ste 300, Salt Lake City, UT 84121</li>
                        <li className="text-sm text-gray-600">Email: info@wavemicron.com</li>
                        <li className="text-sm text-gray-600">Phone: +1 (385) 421-2421</li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
                    <div className="mt-4 flex space-x-4">
                        <a href="https://www.linkedin.com/company/wavemicron" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM6 9h4v12H6z" />
                                <circle cx="4" cy="4" r="2" />
                            </svg>
                        </a>
                        <a href="https://twitter.com/wavemicron" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                            <span className="sr-only">Twitter</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                            </svg>
                        </a>
                        <a href="https://www.facebook.com/wavemicron" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary transition-colors">
                            <span className="sr-only">Facebook</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
                <p>&copy; {new Date().getFullYear()} WaveMicron. All Rights Reserved.</p>
                <a href="#" className="mt-4 sm:mt-0 hover:text-primary transition-colors">Privacy Policy</a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;