import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../public/assets/icons/logo.svg'
import logo_small from '../public/assets/icons/logo-icon.svg'
import { cn } from '@/lib/utils'

const Header = ({children, className}: HeaderProps) => {
  return (
    <div className={cn('header', className)}>
        <Link href='/' className='md:flex-1'>
            <Image src={logo} alt='logo' width={120} height={32} className='hidden md:block' />
            <Image src={logo_small} alt='logo' width={32} height={32} className='mr-2 md:hidden' />
        </Link>
        {children}

    </div>
  )
}

export default Header