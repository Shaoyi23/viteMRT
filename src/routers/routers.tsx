import { Route, Routes } from 'react-router-dom';
import EditTable from '../views/editTable';
import FilterTable from '../views/filterTable';
import HomePage from '../views/homePage';

export default function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/edit" element={<EditTable />} />
            <Route path="/filter" element={<FilterTable />} />
        </Routes>
    );
}