import { UserOutlined } from '@ant-design/icons'
import { Avatar, Button, Divider, Dropdown, Menu, Typography } from 'antd'
import authStore from 'stores/authStore/auth.store'

const UserMenu = () => {
  const username = authStore((state) => state.user?.displayName)

  return (
    <>
      <Dropdown
        placement="bottomCenter"
        overlay={
          <Menu
            selectable={false}
            className="flex flex-col justify-center header__dropdown-usermenu items-center py-4 px-2"
          >
            <Menu.Item
              key="avatar"
              disabled
              className="flex justify-center !cursor-default !overflow-visible active:bg-transparent"
            >
              <Avatar
                size={64}
                className="!flex justify-center m-0 items-center header__dropdown-usermenu__avatar !leading-[0px]"
                icon={<UserOutlined className="!text-4xl" />}
              />
              <Typography.Title
                level={4}
                ellipsis
                className="mt-2 !text-lg !font-medium max-w-[150px]"
              >
                Hi{' '}
                <Typography.Text className="text-brandColor800">
                  {username || ''}
                </Typography.Text>
              </Typography.Title>
            </Menu.Item>
            <Divider className="!mt-0 !mb-0" />
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
      <style jsx global>{`
        .header__dropdown-usermenu__avatar .anticon {
          line-height: 0 !important;
        }

        .header__dropdown-usermenu .ant-dropdown-menu-title-content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  )
}

export default UserMenu
