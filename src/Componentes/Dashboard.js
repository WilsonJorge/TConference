import React, { useState } from 'react';
import { Layout, Menu,Card  } from 'antd';
import { DashboardOutlined, UserOutlined, ScheduleOutlined, LaptopOutlined, FileTextOutlined, SettingOutlined, QuestionCircleOutlined } from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;

const Dashboard = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={setCollapsed}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
			<h1>Menu</h1>
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            Dashboard
          </Menu.Item>
          <Menu.Item key="2" icon={<UserOutlined />}>
            Usuários
          </Menu.Item>
          <Menu.Item key="3" icon={<ScheduleOutlined />}>
            Reservas
          </Menu.Item>
          <Menu.Item key="4" icon={<LaptopOutlined />}>
            Salas
          </Menu.Item>
          <Menu.Item key="5" icon={<FileTextOutlined />}>
            Relatórios
          </Menu.Item>
          <Menu.Item key="6" icon={<SettingOutlined />}>
            Configurações
          </Menu.Item>
          <Menu.Item key="7" icon={<QuestionCircleOutlined />}>
            FAQ
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <div style={{ padding: 24, minHeight: 360 }}>
            <h1>Lista das Reservas</h1>

            <div style={{ display: 'flex', justifyContent: 'space-around' }}>
              <Card title="Total das Reservas" bordered={false} style={{ width: 200 }}>
                <div className="row">
                  <div className="col-8">
                    <p>15</p>
                  </div>
                  <div className="col-4">
                    <div className="hpx-50 wpx-50 br-5 d-flex align-items-center justify-content-center bg-secondary ms-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-white w-icn" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                        <path d="M17,4h-1.1846313C15.4013672,2.8383179,14.3035889,2.0014648,13,2h-2C9.6964111,2.0014648,8.5986328,2.8383179,8.1846313,4H7C5.3438721,4.0018311,4.0018311,5.3438721,4,7v12c0.0018311,1.6561279,1.3438721,2.9981689,3,3h10c1.6561279-0.0018311,2.9981689-1.3438721,3-3V7C19.9981689,5.3438721,18.6561279,4.0018311,17,4z M9,5c0.0014038-1.1040039,0.8959961-1.9985962,2-2h2c1.1040039,0.0014038,1.9985962,0.8959961,2,2v2H9V5z M19,19c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H7c-1.1040039-0.0014038-1.9985962-0.8959961-2-2V7c0.0014038-1.1040039,0.8959961-1.9985962,2-2h1v2.5006104C8.0001831,7.7765503,8.223999,8.0001831,8.5,8h7.0006104C15.7765503,7.9998169,16.0001831,7.776001,16,7.5V5h1c1.1040039,0.0014038,1.9985962,0.8959961,2,2V19z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>

			  <Card title="Salas Disponiveis" bordered={false} style={{ width: 200 }}>
                <div className="row">
                  <div className="col-8">
                    <p>15</p>
                  </div>
                  <div className="col-4">
                    <div className="hpx-50 wpx-50 br-5 d-flex align-items-center justify-content-center bg-secondary ms-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-white w-icn" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                        <path d="M17,4h-1.1846313C15.4013672,2.8383179,14.3035889,2.0014648,13,2h-2C9.6964111,2.0014648,8.5986328,2.8383179,8.1846313,4H7C5.3438721,4.0018311,4.0018311,5.3438721,4,7v12c0.0018311,1.6561279,1.3438721,2.9981689,3,3h10c1.6561279-0.0018311,2.9981689-1.3438721,3-3V7C19.9981689,5.3438721,18.6561279,4.0018311,17,4z M9,5c0.0014038-1.1040039,0.8959961-1.9985962,2-2h2c1.1040039,0.0014038,1.9985962,0.8959961,2,2v2H9V5z M19,19c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H7c-1.1040039-0.0014038-1.9985962-0.8959961-2-2V7c0.0014038-1.1040039,0.8959961-1.9985962,2-2h1v2.5006104C8.0001831,7.7765503,8.223999,8.0001831,8.5,8h7.0006104C15.7765503,7.9998169,16.0001831,7.776001,16,7.5V5h1c1.1040039,0.0014038,1.9985962,0.8959961,2,2V19z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>

			  <Card title="Salas indsponiveis" bordered={false} style={{ width: 200 }}>
                <div className="row">
                  <div className="col-8">
                    <p>15</p>
                  </div>
                  <div className="col-4">
                    <div className="hpx-50 wpx-50 br-5 d-flex align-items-center justify-content-center bg-secondary ms-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-white w-icn" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                        <path d="M17,4h-1.1846313C15.4013672,2.8383179,14.3035889,2.0014648,13,2h-2C9.6964111,2.0014648,8.5986328,2.8383179,8.1846313,4H7C5.3438721,4.0018311,4.0018311,5.3438721,4,7v12c0.0018311,1.6561279,1.3438721,2.9981689,3,3h10c1.6561279-0.0018311,2.9981689-1.3438721,3-3V7C19.9981689,5.3438721,18.6561279,4.0018311,17,4z M9,5c0.0014038-1.1040039,0.8959961-1.9985962,2-2h2c1.1040039,0.0014038,1.9985962,0.8959961,2,2v2H9V5z M19,19c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H7c-1.1040039-0.0014038-1.9985962-0.8959961-2-2V7c0.0014038-1.1040039,0.8959961-1.9985962,2-2h1v2.5006104C8.0001831,7.7765503,8.223999,8.0001831,8.5,8h7.0006104C15.7765503,7.9998169,16.0001831,7.776001,16,7.5V5h1c1.1040039,0.0014038,1.9985962,0.8959961,2,2V19z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>

			  <Card title="Salas em progresso" bordered={false} style={{ width: 200 }}>
                <div className="row">
                  <div className="col-8">
                    <p>15</p>
                  </div>
                  <div className="col-4">
                    <div className="hpx-50 wpx-50 br-5 d-flex align-items-center justify-content-center bg-secondary ms-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" className="text-white w-icn" enableBackground="new 0 0 24 24" viewBox="0 0 24 24">
                        <path d="M17,4h-1.1846313C15.4013672,2.8383179,14.3035889,2.0014648,13,2h-2C9.6964111,2.0014648,8.5986328,2.8383179,8.1846313,4H7C5.3438721,4.0018311,4.0018311,5.3438721,4,7v12c0.0018311,1.6561279,1.3438721,2.9981689,3,3h10c1.6561279-0.0018311,2.9981689-1.3438721,3-3V7C19.9981689,5.3438721,18.6561279,4.0018311,17,4z M9,5c0.0014038-1.1040039,0.8959961-1.9985962,2-2h2c1.1040039,0.0014038,1.9985962,0.8959961,2,2v2H9V5z M19,19c-0.0014038,1.1040039-0.8959961,1.9985962-2,2H7c-1.1040039-0.0014038-1.9985962-0.8959961-2-2V7c0.0014038-1.1040039,0.8959961-1.9985962,2-2h1v2.5006104C8.0001831,7.7765503,8.223999,8.0001831,8.5,8h7.0006104C15.7765503,7.9998169,16.0001831,7.776001,16,7.5V5h1c1.1040039,0.0014038,1.9985962,0.8959961,2,2V19z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          tConference ©{new Date().getFullYear()} Criado por Wilson Macuacua
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Dashboard;


