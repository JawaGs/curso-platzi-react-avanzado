import React, { useState } from 'react'
import { Category } from '../Category'
import { List, Item } from './styles'
import { categories as mockCategories } from '../../../api/db.json'

export const ListOfCategories = () => (
  
  return(
    <List>
    {categories.map(category => <Item key={category.id}><Category {...category} /></Item>)}
  </List>
  )
)
