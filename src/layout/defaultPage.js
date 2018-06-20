import React,{ Component } from 'react';
import { Layout } from 'antd';
import SideMenu from '../components/sideMenu';
import HeaderBar from '../components/header';
import Route from '../common/routes';
import Content from '../common/content';
const { Footer } = Layout;

class DefaulPage extends Component{


    render(){

        return(

            <Layout>
                <SideMenu />
                <Layout>
                    <HeaderBar />
                    <Content >
                        <Route />
                    </Content>
                <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©2016 Created by Ant UED
                </Footer>
                </Layout>
            </Layout>

        )
    }
}

export default DefaulPage;