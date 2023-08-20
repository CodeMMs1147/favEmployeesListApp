import React, { useState, useEffect } from 'react';
import { People } from '@/data/people';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, addPeople } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { PeopleTable } from './components';

export type HomeProps = object

const Home: React.FC<HomeProps> = () => {
	const dispatch = useDispatch();

	useEffect(() => {
	dispatch(addPeople(People));

	}, []);
	

	return (
		<PeopleTable />
	)
};

export default Home;
