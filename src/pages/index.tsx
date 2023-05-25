import {UserOutlined} from '@ant-design/icons';
import type {ProSettings} from '@ant-design/pro-components';
import {PageContainer, ProLayout} from '@ant-design/pro-components';
import {Button, Descriptions, Space, Statistic, Typography} from 'antd';
import {useState} from 'react';
import defaultProps from './_defaultProps';

import chabeLogoWhite from '../assets/logo_chabe_blanc_500.png';
import chabeLogoBlue from '../assets/logo_chabe_bleu_400.png';

const {Text} = Typography;

const content = (
	<Descriptions size="small" column={2}>
		<Descriptions.Item label="Etat sauvegarde">
			<span style={{color: 'green'}}>OK</span>
		</Descriptions.Item>
		<Descriptions.Item label="Missions sauvegardées">
			<a>123 456</a>
		</Descriptions.Item>
		<Descriptions.Item label="Sauvegarde mission">Il y a 15min.</Descriptions.Item>
		<Descriptions.Item label="Sauvegarde complète">Il y a 11h.</Descriptions.Item>
		<Descriptions.Item label="Prochaine sauvegarde">
			Sauvegarde des missions dans 2h.
		</Descriptions.Item>
	</Descriptions>
);

export default () => {
	const [settings, setSetting] = useState<Partial<ProSettings> | undefined>({

		"fixSiderbar": true,
		"layout": "mix",
		"contentWidth": "Fluid",
		"colorPrimary": "#1677FF", // Chabe color, #061E3A, is too dark for the dark mode to be readable
		navTheme: 'realDark',


	});
	const [pathname, setPathname] = useState('/welcome');
	return (
		<div
			id="test-pro-layout"
			style={{
				height: '100vh',
			}}
		>
			<ProLayout

				title={'CHABE - Backup '}
				logo={ settings?.navTheme === "realDark" ? chabeLogoWhite : chabeLogoBlue }
				locale={"en-US"}
				{...defaultProps}
				location={{
					pathname,
				}}
				menuFooterRender={(props) => {
					return (
						<a
							style={{
								lineHeight: '48rpx',
								display: 'flex',
								height: 48,
								color: 'rgba(255, 255, 255, 0.65)',
								alignItems: 'center',
							}}
							// href="https://preview.pro.ant.design/dashboard/analysis"
							target="_blank"
							rel="noreferrer"
						>
							<div
								onClick={(e) => {
									e.preventDefault();
									setSetting({
										...settings,
										navTheme: settings?.navTheme === 'realDark' ? 'light' : 'realDark',
									})
								}}
							>
								<img
									alt="pro-logo"
									src="https://procomponents.ant.design/favicon.ico"
									style={{
										width: 16,
										height: 16,
										margin: '0 16px',
										marginInlineEnd: 10,
									}}
								/>
								{!props?.collapsed && <Text>Changer thème</Text>}
							</div>
						</a>
					);
				}}
				onMenuHeaderClick={(e) => console.log(e)}
				menuItemRender={(item, dom) => (
					<a
						onClick={() => {
							setPathname(item.path || '/welcome');
						}}
					>
						{dom}
					</a>
				)}
				avatarProps={{
					icon: <UserOutlined/>,
				}}
				{...settings}
			>
				<PageContainer

					title={'Sauvegarde des données'}

					content={content}
					tabList={[
						{
							tab: 'Informations générales',
							key: 'base',
							children: (
								<div>
									OK
								</div>
							),
						},
						{
							tab: 'Surveillance BDD OVH',
							key: 'info',
						},
						{
							tab: 'Surveillance BDD Locale',
							key: 'rule',
						},
						{
							tab: 'Logs temps réel',
							key: 'log',
						}
					]}
					extraContent={
						<Space size={24}>
							<Statistic
								title="Missions"
								value={123456}
								// prefix={<LikeOutlined/>}
							/>
							<Statistic title="Charge serveur" value={14} suffix="%"/>
						</Space>
					}
					extra={[
						<Button key="1" type="primary">
							Forcer sauvegarde immédiatement
						</Button>,
					]}
					// footer={[
					// 	<Button key="3">重置</Button>,
					// 	<Button key="2" type="primary">
					// 		提交
					// 	</Button>,
					// ]}
				>
					{/*<div*/}
					{/*	style={{*/}
					{/*		height: '120vh',*/}
					{/*		minHeight: '100%',*/}
					{/*	}}*/}
					{/*>*/}
					{/*	<Result*/}
					{/*		status="404"*/}
					{/*		style={{*/}
					{/*			height: '100%',*/}
					{/*			background: '#fff',*/}
					{/*		}}*/}
					{/*		title="Hello World"*/}
					{/*		subTitle="Sorry, you are not authorized to access this page."*/}
					{/*		extra={<Button type="primary">Back Home</Button>}*/}
					{/*	/>*/}
					{/*</div>*/}
				</PageContainer>
			</ProLayout>
			{/*<SettingDrawer*/}
			{/*	pathname={pathname}*/}
			{/*	getContainer={() => document.getElementById('test-pro-layout')}*/}
			{/*	settings={settings}*/}
			{/*	onSettingChange={(changeSetting) => {*/}
			{/*		setSetting(changeSetting);*/}
			{/*	}}*/}
			{/*/>*/}
		</div>
	);
};