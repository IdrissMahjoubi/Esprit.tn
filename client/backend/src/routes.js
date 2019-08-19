import React from 'react';

const Dashboard = React.lazy(() => import('./views/Pages/Dashboard/Dashboard'));

const showNews = React.lazy(() => import('./views/News/display'));
const showEvents = React.lazy(() => import('./views/Events/Events'));
const eventForm = React.lazy(() => import('./views/Events/eventForm'));
const updateEvent = React.lazy(() => import('./views/Events/updateEvents'));
const detailsEvent = React.lazy(() => import('./views/Events/detailsEvent'));
const archivedEvents = React.lazy(() => import('./views/Events/archivedEvents'));
const Users = React.lazy(() => import('./views/Pages/Users/Users'));
const User = React.lazy(() => import('./views/Pages/Users/User'));

const showPress = React.lazy(() => import('./views/Presse/showPress'));
const addPress = React.lazy(() => import('./views/Presse/addPress'));
const updatePress = React.lazy(() => import('./views/Presse/updatePress'));
const detailsPress = React.lazy(() => import('./views/Presse/detailsPress'));
const archivePress = React.lazy(() => import('./views/Presse/ArchivePress'));

const showClub = React.lazy(() => import('./views/Club/showClub'));
const addClub = React.lazy(() => import('./views/Club/addClub'));
const updateClub = React.lazy(() => import('./views/Club/updateClub'));
const detailsClub = React.lazy(() => import('./views/Club/detailsClub'));

const showPartnership = React.lazy(() => import('./views/Partnership/showPartnership'));
const addPartnership = React.lazy(() => import('./views/Partnership/addPartnership'));
const updatePartnership = React.lazy(() => import('./views/Partnership/updatePartnership'));
const detailsPartnership = React.lazy(() => import('./views/Partnership/detailsPartnership'));

const showRdi = React.lazy(() => import('./views/Rdi/showRdi'));
const addRdi = React.lazy(() => import('./views/Rdi/addRdi'));
const updateRdi = React.lazy(() => import('./views/Rdi/updateRdi'));
const detailsRdi = React.lazy(() => import('./views/Rdi/detailsRdi'));

const showSlider = React.lazy(() => import('./views/Slider/showSlider'));
const addSlider = React.lazy(() => import('./views/Slider/addSlider'));
const updateSlider = React.lazy(() => import('./views/Slider/updateSlider'));
const detailsSlider = React.lazy(() => import('./views/Slider/detailsSlider'));
const inactiveSlider = React.lazy(() => import('./views/Slider/inactiveSlider'));

const addNews = React.lazy(() => import('./views/News/add'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
	{ path: '/', exact: true, name: 'Home' },
	{ path: '/dashboard', name: 'Dashboard', component: Dashboard },
	{ path: '/users', exact: true, name: 'Users', component: Users },
	{ path: '/users/:id', exact: true, name: 'User Details', component: User },

	{ path: '/actualite', exact: true, name: 'Actualité', component: showNews },
	{ path: '/actualite/ajouter', exact: true, name: 'Ajouter', component: addNews },

	{ path: '/events', exact: true, name: 'Evénements', component: showEvents },
	{ path: '/events/show', exact: true, name: '', component: showEvents },
	{ path: '/events/add', exact: true, name: 'Ajouter', component: eventForm },
	{ path: '/events/update/:id', exact: true, name: 'Modifier', component: updateEvent },
	{ path: '/events/details/:id', exact: true, name: 'Details', component: detailsEvent },
	{ path: '/events/archived', exact: true, name: 'Archived', component: archivedEvents },

	{ path: '/presse', exact: true, name: 'Presse', component: showPress },
	{ path: '/presse/ajouter', exact: true, name: 'ajouter', component: addPress },
	{ path: '/presse/update/:id', exact: true, name: 'Modifier', component: updatePress },
	{ path: '/presse/details/:id', exact: true, name: 'Details', component: detailsPress },
	{ path: '/presse/archives', exact: true, name: 'Archives', component: archivePress },
	{ path: '/actualite/ajouter', exact: true, name: 'Ajouter', component: addNews },

	{ path: '/club', exact: true, name: 'Club', component: showClub },
	{ path: '/club/ajouter', exact: true, name: 'ajouter', component: addClub },
	{ path: '/club/update/:id', exact: true, name: 'Modifier', component: updateClub },
	{ path: '/club/details/:id', exact: true, name: 'Details', component: detailsClub },

	{ path: '/rdi', exact: true, name: 'Rdi', component: showRdi },
	{ path: '/rdi/ajouter', exact: true, name: 'ajouter', component: addRdi },
	{ path: '/rdi/update/:id', exact: true, name: 'Modifier', component: updateRdi },
	{ path: '/rdi/details/:id', exact: true, name: 'Details', component: detailsRdi },

	{ path: '/partnership', exact: true, name: 'Partnership', component: showPartnership },
	{ path: '/partnership/ajouter', exact: true, name: 'ajouter', component: addPartnership },
	{ path: '/partnership/update/:id', exact: true, name: 'Modifier', component: updatePartnership },
	{ path: '/partnership/details/:id', exact: true, name: 'Details', component: detailsPartnership },

	{ path: '/slider', exact: true, name: 'Slider', component: showSlider },
	{ path: '/slider/ajouter', exact: true, name: 'ajouter', component: addSlider },
	{ path: '/slider/update/:id', exact: true, name: 'Modifier', component: updateSlider },
	{ path: '/slider/details/:id', exact: true, name: 'Details', component: detailsSlider },
	{ path: '/slider/archived', exact: true, name: 'Inactif', component: inactiveSlider },
	
];

export default routes;
