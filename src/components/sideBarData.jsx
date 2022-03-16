import * as FaIcon from 'react-icons/fa'
import * as AiIcon from 'react-icons/ai'
import * as IoIcon from 'react-icons/io'
import React from "react";

export const sidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcon.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <IoIcon.IoIosPaper />,
        cName: 'nav-text'
    },
    {
        title: 'Products',
        path: '/products',
        icon: <FaIcon.FaCartPlus />,
        cName: 'nav-text'
    },
    {
        title: 'Team',
        path: '/team',
        icon: <IoIcon.IoMdPeople />,
        cName: 'nav-text'
    },
    {
        title: 'Messages',
        path: '/messages',
        icon: <FaIcon.FaEnvelopeOpenText />,
        cName: 'nav-text'
    },
    {
        title: 'Support',
        path: '/',
        icon: <IoIcon.IoMdHelpCircle />,
        cName: 'nav-text'
    },
]