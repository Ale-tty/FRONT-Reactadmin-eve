import React from 'react'
import { Edit, SimpleForm, TextInput } from 'react-admin'

const WorksEdit = (props) => {
  return (
    <Edit title='Edit Work' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='title' />
        <TextInput source='owner' />
      </SimpleForm>
    </Edit>
  )
}

export default WorksEdit
