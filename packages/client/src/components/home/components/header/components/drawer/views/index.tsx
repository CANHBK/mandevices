import { Button, Drawer, Menu } from 'antd';
import React, { useState } from 'react';
import { RouteComponentProps, withRouter } from 'react-router';

import { ADMIN_URI } from 'routes';
import { CustomMenu } from 'shared/Menu';
import { IRoute } from 'interface';
import UserComponent from '../components/user';
import styled from 'styled-components/macro';
import { useIsLoginQuery } from 'generated/apollo-react-hook.generated';

const { Item, Divider } = Menu;

interface IDrawer extends RouteComponentProps {
	routes: IRoute[];
	onLogOutClick: () => void;
	onLoginClick: () => void;
}
const DrawerPresentational: React.FC<IDrawer> = ({
	routes,
	onLogOutClick,
	onLoginClick,
	history,
	location
}) => {
	const [visible, setVisible] = useState(false);
	const { data } = useIsLoginQuery();

	const handleLogout = () => {
		setVisible(false);
		onLogOutClick();
	};

	const handleMenuItemClick = (url: string) => {
		history.push(url);
		setVisible(false);
	};

	return (
		<>
			<Button
				icon="menu"
				onClick={() => {
					setVisible(true);
				}}
			/>
			<CustomDrawer
				visible={visible}
				placement="left"
				onClose={() =>
					setVisible(false)
				}
			>
				<CustomMenu
					defaultSelectedKeys={[
						location.pathname
					]}
				>
					{data!!.isLogin ? (
						<UserComponent />
					) : null}
					<Item
						onClick={() =>
							history.push(
								ADMIN_URI
							)
						}
					>
						Trang
						quản trị
					</Item>
					<Divider />

					{routes.map(
						route => (
							<Item
								onClick={() =>
									handleMenuItemClick(
										route.uri
									)
								}
								key={
									route.uri
								}
							>
								{
									route.name
								}
							</Item>
						)
					)}
					<Divider />
					<Item>
						{data &&
						data.isLogin ? (
							<Button
								onClick={
									handleLogout
								}
								icon="logout"
								style={{
									width:
										'100%'
								}}
								type="danger"
							>
								Đăng
								xuất
							</Button>
						) : (
							<Button
								onClick={
									onLoginClick
								}
								icon="login"
								style={{
									width:
										'100%'
								}}
								type="primary"
							>
								Đăng
								nhập
							</Button>
						)}
					</Item>
				</CustomMenu>
			</CustomDrawer>
		</>
	);
};

export default withRouter(DrawerPresentational);

const CustomDrawer = styled(Drawer)`
	.ant-drawer-body {
		padding-left: 0;
		padding-right: 0;
		padding-top: 56px;
	}
`;
