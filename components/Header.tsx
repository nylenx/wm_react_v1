import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Logo: React.FC = () => (
    <div className="size-8 text-primary">
        <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.8261 17.4264C16.7203 18.1174 20.2244 18.5217 24 18.5217C27.7756 18.5217 31.2797 18.1174 34.1739 17.4264C36.9144 16.7722 39.9967 15.2331 41.3563 14.1648L24.8486 40.6391C24.4571 41.267 23.5429 41.267 23.1514 40.6391L6.64374 14.1648C8.00331 15.2331 11.0856 16.7722 13.8261 17.4264Z" fill="currentColor"></path>
            <path clipRule="evenodd" d="M39.998 12.236C39.9944 12.2537 39.9875 12.2845 39.9748 12.3294C39.9436 12.4399 39.8949 12.5741 39.8346 12.7175C39.8168 12.7597 39.7989 12.8007 39.7813 12.8398C38.5103 13.7113 35.9788 14.9393 33.7095 15.4811C30.9875 16.131 27.6413 16.5217 24 16.5217C20.3587 16.5217 17.0125 16.131 14.2905 15.4811C12.0012 14.9346 9.44505 13.6897 8.18538 12.8168C8.17384 12.7925 8.16216 12.767 8.15052 12.7408C8.09919 12.6249 8.05721 12.5114 8.02977 12.411C8.00356 12.3152 8.00039 12.2667 8.00004 12.2612C8.00004 12.261 8 12.2607 8.00004 12.2612C8.00004 12.2359 8.0104 11.9233 8.68485 11.3686C9.34546 10.8254 10.4222 10.2469 11.9291 9.72276C14.9242 8.68098 19.1919 8 24 8C28.8081 8 33.0758 8.68098 36.0709 9.72276C37.5778 10.2469 38.6545 10.8254 39.3151 11.3686C39.9006 11.8501 39.9857 12.1489 39.998 12.236ZM4.95178 15.2312L21.4543 41.6973C22.6288 43.5809 25.3712 43.5809 26.5457 41.6973L43.0534 15.223C43.0709 15.1948 43.0878 15.1662 43.104 15.1371L41.3563 14.1648C43.104 15.1371 43.1038 15.1374 43.104 15.1371L43.1051 15.135L43.1065 15.1325L43.1101 15.1261L43.1199 15.1082C43.1276 15.094 43.1377 15.0754 43.1497 15.0527C43.1738 15.0075 43.2062 14.9455 43.244 14.8701C43.319 14.7208 43.4196 14.511 43.5217 14.2683C43.6901 13.8679 44 13.0689 44 12.2609C44 10.5573 43.003 9.22254 41.8558 8.2791C40.6947 7.32427 39.1354 6.55361 37.385 5.94477C33.8654 4.72057 29.133 4 24 4C18.867 4 14.1346 4.72057 10.615 5.94478C8.86463 6.55361 7.30529 7.32428 6.14419 8.27911C4.99695 9.22255 3.99999 10.5573 3.99999 12.2609C3.99999 13.1275 4.29264 13.9078 4.49321 14.3607C4.60375 14.6102 4.71348 14.8196 4.79687 14.9689C4.83898 15.0444 4.87547 15.1065 4.9035 15.1529C4.91754 15.1762 4.92954 15.1957 4.93916 15.2111L4.94662 15.223L4.95178 15.2312ZM35.9868 18.996L24 38.22L12.0131 18.996C12.4661 19.1391 12.9179 19.2658 13.3617 19.3718C16.4281 20.1039 20.0901 20.5217 24 20.5217C27.9099 20.5217 31.5719 20.1039 34.6383 19.3718C35.082 19.2658 35.5339 19.1391 35.9868 18.996Z" fillRule="evenodd"></path>
        </svg>
    </div>
);

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [openMobileSubmenu, setOpenMobileSubmenu] = useState<string | null>(null);
    
    const location = useLocation();

    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location]);

    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);
    
    const activeLinkStyle = { color: '#537D5D', fontWeight: 700 };

    return (
        <header className="sticky top-0 z-50 w-full bg-background-light/80 backdrop-blur-sm">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    <Link to="/" className="flex items-center gap-3">
                        <Logo />
                        <h2 className="text-xl font-bold text-gray-900">WaveMicron</h2>
                    </Link>
                    
                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        {NAV_LINKS.map(link => (
                            <div 
                                key={link.name}
                                className="relative"
                                onMouseEnter={() => link.children && setOpenDropdown(link.name)}
                                onMouseLeave={() => link.children && setOpenDropdown(null)}
                            >
                                <NavLink 
                                    to={link.href}
                                    className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
                                    style={({ isActive }) => {
                                        const isParentActive = location.pathname.startsWith(link.href) && link.href !== '/';
                                        return (isActive || (link.children && isParentActive)) ? activeLinkStyle : undefined;
                                    }}
                                >
                                    {link.name}
                                    {link.children && (
                                        <svg className={`h-4 w-4 transition-transform duration-200 ${openDropdown === link.name ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    )}
                                </NavLink>
                                {link.children && openDropdown === link.name && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-56 pt-2 z-50">
                                        <div className="bg-white rounded-md shadow-lg py-2 border border-gray-200">
                                            {link.children.map(child => (
                                                <NavLink
                                                    key={child.name}
                                                    to={child.href}
                                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-dropdown-hover hover:text-gray-900 transition-colors"
                                                    style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                                                    onClick={() => setOpenDropdown(null)}
                                                >
                                                    {child.name}
                                                </NavLink>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="flex items-center">
                        <Link to="/contact" className="hidden md:block bg-primary text-white font-bold text-sm px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors">
                            Request Demo
                        </Link>
                         <button 
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                            className="md:hidden text-primary focus:outline-none focus:ring-2 focus:ring-primary rounded"
                            aria-label="Open main menu"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"} />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                 <div className="md:hidden absolute top-16 left-0 w-full h-[calc(100vh-4rem)] bg-background-light shadow-lg overflow-y-auto">
                    <nav className="flex flex-col p-4 space-y-1">
                        {NAV_LINKS.map(link => (
                            <div key={link.name}>
                                {link.children ? (
                                    <>
                                        <button 
                                            onClick={() => setOpenMobileSubmenu(openMobileSubmenu === link.name ? null : link.name)}
                                            className="w-full flex justify-between items-center text-base font-medium text-gray-800 hover:text-primary p-2 rounded-md transition-colors text-left"
                                        >
                                            <span>{link.name}</span>
                                            <svg className={`h-5 w-5 transition-transform duration-200 ${openMobileSubmenu === link.name ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                            </svg>
                                        </button>
                                        {openMobileSubmenu === link.name && (
                                            <div className="pl-4 pt-1 pb-2 space-y-1">
                                                {link.children.map(child => (
                                                    <NavLink 
                                                        key={child.name} 
                                                        to={child.href} 
                                                        className="block text-base font-medium text-gray-600 hover:text-primary p-2 rounded-md transition-colors"
                                                        style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                                                        onClick={() => setIsMobileMenuOpen(false)}
                                                    >
                                                        {child.name}
                                                    </NavLink>
                                                ))}
                                            </div>
                                        )}
                                    </>
                                ) : (
                                     <NavLink 
                                        to={link.href} 
                                        className="block text-base font-medium text-gray-800 hover:text-primary p-2 rounded-md transition-colors"
                                        style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </NavLink>
                                )}
                            </div>
                        ))}
                         <Link to="/contact" className="w-full mt-4 bg-primary text-white text-center font-bold text-base px-4 py-3 rounded-lg hover:bg-primary/90 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                            Request Demo
                        </Link>
                    </nav>
                 </div>
            )}
        </header>
    );
};

export default Header;