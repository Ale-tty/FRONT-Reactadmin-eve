import React from 'react'
import { Admin, Resource } from 'react-admin'
import eveDataProvider from './ra-data-eve';
import PeopleList from './components/PeopleList'
import PeopleCreate from './components/PeopleCreate'
import PeopleEdit from './components/PeopleEdit'
import WorksList from './components/WorksList'
import WorksCreate from './components/WorksCreate'
import WorksEdit from './components/WorksEdit'

function App() {
  return (
    <Admin dataProvider={eveDataProvider('http://127.0.0.1:5000/')}>
        <Resource
          name='people'
          list={PeopleList}
          create={PeopleCreate}
          edit={PeopleEdit}
        />
        <Resource
          name='works'
          list={WorksList}
          create={WorksCreate}
          edit={WorksEdit}
        />
      </Admin>
  )
}

export default App;
