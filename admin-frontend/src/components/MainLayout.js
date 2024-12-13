import React, { useState } from 'react';
import {  AiOutlineMenuUnfold, AiOutlineMenuFold } from "react-icons/ai";
import { LiaBlogSolid } from "react-icons/lia";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { Button, Layout, Menu, theme } from 'antd';
import { useNavigate } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
const { Header, Sider, Content } = Layout;
const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    const navigate = useNavigate();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ "width": "400px" }} >
                <div className="demo-logo-vertical">
                    <h2 className='text-white py-3 text-center fs-4 fw-bolder mb-0'>
                        <span className='sm-logo'><PiShoppingCartSimpleFill /></span>
                        <span className='lg-logo'>BOP</span>
                    </h2>
                </div>
                <Menu
                    theme="dark"
                    style={{ "marginTop": "20px" }}
                    mode="inline"
                    defaultSelectedKeys={['']}
                    onClick={({ key }) => {
                        if (key === 'signout') {

                        } else {
                            navigate(key);
                        }
                    }}
                    items={[
                        {
                            key: '',
                            icon: <LiaBlogSolid className='fs-5' />,
                            label: 'Add Blog',
                        },
                        {
                            key: 'blog-list',
                            icon: <LiaBlogSolid className='fs-5' />,
                            label: 'Blog List',
                        },
                    ]}
                />
            </Sider>
            <Layout>
                <Header className='d-flex justify-content-between ps-1 pe-4'
                    style={{
                        padding: 0,
                        background: colorBgContainer,
                    }}
                >
                    <Button
                        type="text"
                        icon={collapsed ? <AiOutlineMenuUnfold className='fs-5' /> : <AiOutlineMenuFold className='fs-4' />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
};
export default MainLayout;