import React from "react";
import { FaDollarSign, FaShoppingCart, FaUsers, FaBoxOpen } from "react-icons/fa";

const AdminDashboard: React.FC = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-8 text-gray-800">Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <DashboardCard title="Total Revenue" value="&#2547;45,200" icon={<FaDollarSign />} color="bg-green-500" />
                <DashboardCard title="Total Orders" value="125" icon={<FaShoppingCart />} color="bg-blue-500" />
                <DashboardCard title="Active Customers" value="89" icon={<FaUsers />} color="bg-purple-500" />
                <DashboardCard title="Products" value="42" icon={<FaBoxOpen />} color="bg-orange-500" />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-bold mb-4">Recent Activity</h3>
                <p className="text-gray-500">No recent activity to display (Demo).</p>
            </div>
        </div>
    );
};

const DashboardCard: React.FC<{ title: string; value: string; icon: React.ReactNode; color: string }> = ({ title, value, icon, color }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-sm flex items-center">
            <div className={`p-4 rounded-full text-white mr-4 ${color}`}>
                <div className="text-xl">{icon}</div>
            </div>
            <div>
                <p className="text-gray-500 text-sm">{title}</p>
                <h3 className="text-2xl font-bold">{value}</h3>
            </div>
        </div>
    )
}

export default AdminDashboard;
