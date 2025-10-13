import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery, useTheme } from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import GradeIcon from '@mui/icons-material/Grade';
import AddTaskIcon from '@mui/icons-material/AddTask';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React, { useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Dashboard from './components/AdminDashboard';
import CreateProductForm from './components/CreateProductForm';
import ProductsTable from './components/ProductsTable';
import OrdersTable from './components/OrdersTable';
import CustomersTable from './components/CustomersTable';
import AdminDashboard from './components/AdminDashboard';
const menu = [
    { name: "Dashboard", path: "/admin", icon: <DashboardIcon /> },
    { name: "Products", path: "/admin/products", icon: <ProductionQuantityLimitsIcon /> },
    { name: "Customers", path: "/admin/customers", icon: <SupportAgentIcon /> },
    { name: "Orders", path: "/admin/orders", icon: <GradeIcon /> },
    { name: "AddProducts", path: "/admin/product/create", icon: <AddTaskIcon /> },
    { name: "", path: " " },
]
const Admin = () => {
    const theme = useTheme()
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = useState(false)
    const navigate = useNavigate()
    const drawer = (
        <Box sx={{
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            justifyContent: "space-between"
        }}>
            {/* {isLargeScreen && <Toolbar />} */}
            <List >
                {menu.map((item, index) => (
                    <ListItem key={item.name} disablePadding onClick={() => navigate(item.path)}>
                        <ListItemButton sx={{width:240}}>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText>
                                {item.name}
                            </ListItemText>
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>

            <List>
                <ListItem disablePadding >
                    <ListItemButton>
                        <ListItemIcon>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Account
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    )
    return (
        <div className=''>
            <div className='flex h-screen '>
                <CssBaseline />
                <div className='flex h-full border border-r-gray-300 w-[15%]'>
                    {drawer}
                </div>
                <div className='w-[85%] '>
                    <Routes>
                        <Route path="/" element={<AdminDashboard />}></Route>
                        <Route path="/product/create" element={<CreateProductForm />}></Route>
                        <Route path="/products" element={<ProductsTable />}></Route>
                        <Route path="/orders" element={<OrdersTable />}></Route>
                        <Route path="/customers" element={<CustomersTable />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
}

export default Admin