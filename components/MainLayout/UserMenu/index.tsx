import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Dropdown, Menu, Typography } from 'antd'
import authStore from 'stores/authStore/auth.store'

const UserMenu = () => {
  const username = authStore((state) => state.user)

  return (
    <Dropdown
      placement="bottomCenter"
      overlay={
        <Menu
          selectable={false}
          className="flex flex-col justify-center items-center py-4 px-2"
        >
          <Menu.Item
            key="avatar"
            disabled
            className="flex hover:cursor-default !overflow-visible active:bg-transparent"
          >
            <Avatar
              size={64}
              className="flex justify-center items-center"
              icon={<UserOutlined className="!text-4xl" />}
            />
            <Typography>{`Hi ${username || ''}`}</Typography>
          </Menu.Item>
          <Menu.ItemGroup>
            <Menu.Item key="1">Buenas tardes </Menu.Item>
            <Menu.Item key="2">3rd menu item</Menu.Item>
            <Menu.Item key="3">Sign Out</Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      }
      trigger={['click']}
    >
      <Button
        icon={<UserOutlined className="text-xl text-white" />}
        shape="circle"
        type="primary"
      />
    </Dropdown>
  )
}

export default UserMenu
