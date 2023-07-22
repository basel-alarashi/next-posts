"use client"
import React from 'react';
import './components.css';
import {useContext} from 'react';
import {ThemeContext} from '@/context/ThemeContext';

const DarkLightToggle = () => {
	const {toggle, mode} = useContext(ThemeContext);
	return (
		<div className='toggle' onClick={toggle}>
			<div className='toggle-icon'>🌙</div>
			<div className='toggle-icon'>☀</div>
			<div className='ball' style={mode === 'light'? {left: '2px'}: {right: '2px'}} />
		</div>
	);
};

export default DarkLightToggle;