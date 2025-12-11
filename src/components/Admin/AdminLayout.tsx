import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { FaChartBar, FaBox, FaShoppingBag, FaSignOutAlt } from "react-icons/fa";

interface AdminLayoutProps {
    children: ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-900 text-white flex flex-col">
                <div className="p-6 text-2xl font-bold border-b border-gray-800">
                    GM Admin
                </div>
                <nav className="flex-grow p-4 space-y-2">
                    <Link
                        to="/admin"
                        className="flex items-center p-3 hover:bg-gray-800 rounded transition-colors text-gray-300 hover:text-white"
                    >
                        <FaChartBar className="mr-3" /> Dashboard
                    </Link>
                    <Link
                        to="/admin/products"
                        className="flex items-center p-3 hover:bg-gray-800 rounded transition-colors text-gray-300 hover:text-white"
                    >
                        <FaBox className="mr-3" /> Products
                    </Link>
                    <Link
                        to="/admin/orders"
                        className="flex items-center p-3 hover:bg-gray-800 rounded transition-colors text-gray-300 hover:text-white"
                    >
                        <FaShoppingBag className="mr-3" /> Orders
                    </Link>
                </nav>
                <div className="p-4 border-t border-gray-800">
                    <Link to="/" className="flex items-center p-3 hover:bg-red-600 rounded transition-colors text-gray-300 hover:text-white">
                        <FaSignOutAlt className="mr-3" /> Back to Store
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 overflow-y-auto">
                <header className="bg-white shadow p-4 flex justify-between items-center">
                    <h2 className="text-xl font-semibold text-gray-800">Admin Section</h2>
                    <div className="flex items-center">
                        <span className="mr-2 text-sm text-gray-600">Administrator</span>
                        <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                    </div>
                </header>
                <div className="p-6">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default AdminLayout;
