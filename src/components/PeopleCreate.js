import React from 'react'
import { Create, SimpleForm, TextInput, DateInput } from 'react-admin'

const PeopleCreate = (props) => {
  return (
    <Create title='Create a Person' {...props}>
      <SimpleForm>
        <TextInput source='firstname' />
        <TextInput multiline source='lastname' />
      </SimpleForm>
    </Create>
  )
}

export default PeopleCreate