import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  DateField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const PeopleList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='firstname' />
        <TextField source='lastname' />
        <EditButton basePath='/people' />
        <DeleteButton basePath='/people' />
      </Datagrid>
    </List>
  )
}

export default PeopleList