import React, { useContext, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Colors } from '../../../styles/base'
import { Text, Title, Button } from '../../../components'
import { Authentication } from './users'
import { LogoMccLight } from '../../../assets/assets'
import { DeviceContext } from '../../../store/contexts'
import ReactPlayer from 'react-player'

function Hero(props) {
	const device = useContext(DeviceContext)
	const [activeTab, setActiveTab] = useState('default')
	const history = useHistory()
	const styles = {
		hero: {
			display: 'flex',
			paddingTop: '52px',
			justifyContent: 'space-around',
			backgroundColor: Colors.primary,
			flexDirection:
				(device === 'mobile' && 'column') ||
				(device === 'desktop' && 'row'),
		},

		container: {
			left: {
				display: 'flex',
				flexDirection: 'column',
				width: '100',
				padding: '16px',
				justifyContent: 'center',
				height: '100',
			},
			right: {
				display: 'flex',
				width: '100',
				padding: '16px',
				justifyContent: 'center',
			},
		},
		form: {
			position: device === ('desktop' || 'tablet') && 'absolute',
			marginTop: device === ('desktop' || 'tablet') ? '40px' : '-30px',
		},
		tab: {
			color: 'white',
			padding: '8px 16px',
			cursor: 'pointer',
			borderRadius: '5px',
		},
		how: {
			color: 'white',
			padding: '8px 16px',
			borderRadius: '5px',
		},
	}

	const renderDetails = (
		<React.Fragment>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					marginBottom: '32px',
				}}>
				<img
					style={{ width: '90px', height: '107px' }}
					src={LogoMccLight}
					alt='logo-mcc'
				/>
				<div
					style={{
						display: 'flex',
						flexDirection: 'column',
					}}>
					<Text type='textLight' color={Colors.accent.secondary}>
						a product of
					</Text>
					<Title color={Colors.accent.secondary}>
						MADRAS CHRISTIAN COLLEGE
					</Title>
				</div>
			</div>
			<Title type='titleLarge' color={Colors.accent.secondary}>
				A Research Assistant
			</Title>
			<Text type='textLight' color={Colors.accent.secondary}>
				Scholarly writer provides you a scaffolding for abstract
				writing
			</Text>
			<Button
				style={{
					marginTop: '30px',
					width: device === 'mobile' ? '100%' : '280px',
				}}
				color={Colors.tertiary}
				name='Signup Now'
				onClick={() => history.push('/signup')}
			/>
		</React.Fragment>
	)

	const renderTabs = (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				justifyItems: 'space-evenly',
				margin: '32px 0px',
				justifyContent: 'space-between',
				width: device === 'desktop' && '300px',
			}}>
			<Text
				onClick={() => setActiveTab('about')}
				style={{
					...styles.tab,
					backgroundColor:
						activeTab === 'about' && Colors.tertiary,
				}}>
				About
			</Text>
			<Text
				style={{
					...styles.tab,
					backgroundColor:
						activeTab === 'how' && Colors.tertiary,
				}}
				onClick={() => setActiveTab('how')}>
				How to use
			</Text>
			<Text
				onClick={() => setActiveTab('tutorial')}
				style={{
					...styles.tab,
					backgroundColor:
						activeTab === 'tutorial' && Colors.tertiary,
				}}>
				Tutorial
			</Text>
		</div>
	)

	const renderTutorial = (
		<React.Fragment>
			<Text
				onClick={() => setActiveTab('default')}
				style={{
					...styles.tab,
					backgroundColor: Colors.tertiary,
					marginBottom: '32px',
				}}>
				{`<< Back`}
			</Text>
			<ReactPlayer
				width={device === 'mobile' ? '100%' : '150%'}
				url='https://www.youtube.com/watch?v=SZmefp6NbJI'
			/>
		</React.Fragment>
	)

	const renderHow = (
		<div style={{ maxWidth: device === 'desktop' && '70%' }}>
			<Text
				onClick={() => setActiveTab('default')}
				style={{
					...styles.tab,
					backgroundColor: Colors.tertiary,
				}}>
				{`<< Back`}
			</Text>
			<Text style={styles.how}>
				1. Choose an abstract of your choice from the links given.
			</Text>
			<Text style={styles.how}>
				2. Paste it in the sample abstract textbox.
			</Text>
			<Text style={styles.how}>
				3. Break the abstract into various sections and try fitting
				into the scaffolding textboxes provided.
			</Text>
			<Text style={styles.how}>
				4. The site will suggest you the sections your abstract must
				have and restrict the length of each section. Rewrite the
				abstract and get practiced. Once done, save your work for
				future reference.
			</Text>
			<Text style={styles.how}>
				5. You can modify your saved abstract any time. This task
				will give training in writing standard abstracts and enables
				one to write abstracts fluently on his/her own.
			</Text>
		</div>
	)

	const renderAbout = (
		<div style={{ maxWidth: device === 'desktop' && '70%' }}>
			<Text
				onClick={() => setActiveTab('default')}
				style={{
					...styles.tab,
					backgroundColor: Colors.tertiary,
				}}>
				{`<< Back`}
			</Text>
			<Text style={styles.how}>
				Abstract is the essence of a paper. An abstract should be
				clear and concise. A perfectly written abstract will improve
				the acceptance rate of a paper. Scholarly writer helps in
				writing high quality abstracts by providing a neat
				scaffolding. This scaffolding can be used to produce a
				highly structured abstract. It gives you an outline about
				the contents that must be present in the abstract. Using
				this scaffolding, one can fine tune their abstract.
			</Text>
		</div>
	)

	return (
		<div style={styles.hero}>
			<div style={styles.container.left}>
				{renderTabs}
				{activeTab === 'default' && renderDetails}
				{activeTab === 'about' && renderAbout}
				{activeTab === 'how' && renderHow}
				{activeTab === 'tutorial' && renderTutorial}
			</div>
			<div style={styles.container.right}>
				<Authentication type={props.form} />
			</div>
		</div>
	)
}

export default Hero
