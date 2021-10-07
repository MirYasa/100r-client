import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as BSIcons from 'react-icons/bs'

export const SidebarData = [
  {
    title: 'Главная',
    path: '/home',
    icon: <AiIcons.AiFillHome/>
  },
  {
    title: 'Формы',
    path: '/forms',
    icon: <AiIcons.AiOutlineForm/>,
    iconClosed: <RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpSFill/>,
    subNav: [
      {
        title: 'Form 1',
        path: '/forms/forms1',
        icon: <AiIcons.AiOutlineForm/>,
        cName: 'sub-nav'
      },
      {
        title: 'Form 2',
        path: '/forms/forms2',
        icon: <AiIcons.AiOutlineForm/>,
        cName: 'sub-nav'
      },
      {
        title: 'Form 3',
        path: '/forms/forms3',
        icon: <AiIcons.AiOutlineForm/>
      }
    ]
  },
  {
    title: 'Таблицы',
    path: '/tables',
    icon: <FaIcons.FaTable/>,
    iconClosed: <RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpSFill/>,
    subNav: true
  },
  {
    title: 'Каталог',
    path: '/admin_catalog',
    icon: <FaIcons.FaBook/>,
    iconClosed: <RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpSFill/>,
    subNav: true,
    subArr: [
      {
        title: 'Продукты',
        path: '/admin_catalog',
        icon: <FaIcons.FaBookOpen/>
      },
      {
        title: 'Категории',
        path: '/admin_categories',
        icon: <FaIcons.FaThLarge/>
      },
      {
        title: 'Типы цен',
        path: '/price_type',
        icon: <FaIcons.FaBookOpen/>
      },
      {
        title: 'Параметры',
        path: '/property',
        icon: <FaIcons.FaBookOpen/>
      },
      {
        title: 'Производители',
        path: '/manufacturer',
        icon: <FaIcons.FaBookOpen/>
      }
    ]
  },{
    title: 'Заказы',
    path: '/tables',
    icon: <FaIcons.FaClipboardList/>,
    iconClosed: <RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpSFill/>,
    subNav: true,
    subArr: [
      {
        title: 'Клиенты',
        path: '/clients',
        icon: <BSIcons.BsFillPeopleFill/>
      },
      {
        title: 'Источник клиентов',
        path: '/client_sources',
        icon: <BSIcons.BsFillPeopleFill/>
      },
      {
        title: 'Источник заказов',
        path: '/order_sources',
        icon: <FaIcons.FaWarehouse/>
      },
      {
        title: 'Статус заказов',
        path: '/order_status',
        icon: <FaIcons.FaWarehouse/>
      },
    ]
  }
]