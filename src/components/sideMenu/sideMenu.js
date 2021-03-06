import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
const { Sider } = Layout;

class SideMenu extends Component{

    render(){
        return(

        <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
        >
        <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1">
                    <Icon type="home" />
                    <span className="nav-text">Home</span>
                    <Link to='/' />
                </Menu.Item>

                <Menu.Item key="2">
                    <Icon type="profile" />
                    <span className="nav-text">Palpite</span>
                    <Link to='/bet' />
                </Menu.Item>

                {/* <Menu.Item key="3">
                    <Icon type="upload" />
                    <span className="nav-text">nav 3</span>
                    <Link to='/' />
                </Menu.Item>

                <Menu.Item key="4">
                    <Icon type="user" />
                    <span className="nav-text">nav 4</span>
                    <Link to='/' />
                </Menu.Item> */}
            </Menu>
        </Sider>
        )
    }
}
export default SideMenu;