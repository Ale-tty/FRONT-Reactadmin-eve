import React from 'react'
import { Create, SimpleForm, TextInput } from 'react-admin'

const WorksCreate = (props) => {
  return (
    <Create title='Create a Work' {...props}>
      <SimpleForm>
        <TextInput source='title' />
        <TextInput source='owner' />
      </SimpleForm>
    </Create>
  )
}

export default WorksCreate