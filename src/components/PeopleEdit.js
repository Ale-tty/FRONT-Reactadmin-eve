import React from 'react'
import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'

const PeopleEdit = (props) => {
  return (
    <Edit title='Edit Person' {...props}>
      <SimpleForm>
        <TextInput disabled source='id' />
        <TextInput source='firstname' />
        <TextInput multiline source='lastname' />
        {/* <DateInput label='Published' source='publishedAt' /> */}
      </SimpleForm>
    </Edit>
  )
}

export default PeopleEdit
