import React from 'react'
import Filter_Sort_Menu from '../Components/Filter&Sort/Filter&Sort'
export default function Collection() {
  const links = [
    { href: '/account-settings', label: 'Account settings' },
    { href: '/support', label: 'Support' },
    { href: '/license', label: 'License' },
    { href: '/sign-out', label: 'Sign out' },
  ]
  return (
  <>
  <Filter_Sort_Menu/>
  <div>Collection</div>
  </>
  )
}
