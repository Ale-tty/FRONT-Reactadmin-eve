import React from 'react'
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  EditButton,
  DeleteButton,
} from 'react-admin'

const WorksList = (props) => {
  return (
    <List {...props}>
      <Datagrid>
        <TextField source='id' />
        <TextField source='title' />
        <EmailField source='owner' />
        <EditButton basePath='/works' />
        <DeleteButton basePath='/works' />
      </Datagrid>
    </List>
  )
}

export default WorksList