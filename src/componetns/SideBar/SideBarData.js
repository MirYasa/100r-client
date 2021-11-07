import React from 'react'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as RiIcons from 'react-icons/ri'
import * as BSIcons from 'react-icons/bs'

export const SidebarData = [
  {
    title: 'Главная',
    path: '/admin/home',
    icon: <AiIcons.AiFillHome/>
  },
  {
    title: 'Формы',
    path: '/admin/forms',
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
    path: '/admin/tables',
    icon: <FaIcons.FaTable/>,
    iconClosed: <RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpSFill/>,
    subNav: true
  },
  {
    title: 'Каталог',
    path: '/admin/admin_catalog',
    icon: <FaIcons.FaBook/>,
    iconClosed: <RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpSFill/>,
    subNav: true,
    subArr: [
      {
        title: 'Продукты',
        path: '/admin/admin_catalog',
        icon: <FaIcons.FaBookOpen/>
      },
      {
        title: 'Категории',
        path: '/admin/admin_categories',
        icon: <FaIcons.FaThLarge/>
      },
      {
        title: 'Типы цен',
        path: '/admin/price_type',
        icon: <FaIcons.FaBookOpen/>
      },
      {
        title: 'Параметры',
        path: '/admin/property',
        icon: <FaIcons.FaBookOpen/>
      },
      {
        title: 'Производители',
        path: '/admin/manufacturer',
        icon: <FaIcons.FaBookOpen/>
      }
    ]
  },{
    title: 'Заказы',
    path: '/admin/tables',
    icon: <FaIcons.FaClipboardList/>,
    iconClosed: <RiIcons.RiArrowDownSFill/>,
    iconOpened: <RiIcons.RiArrowUpSFill/>,
    subNav: true,
    subArr: [
      {
        title: 'Клиенты',
        path: '/admin/clients',
        icon: <BSIcons.BsFillPeopleFill/>
      },
      {
        title: 'Заказы',
        path: '/admin/admin_orders',
        icon: <FaIcons.FaClipboardList/>
      },
      {
        title: 'Источник клиентов',
        path: '/admin/client_sources',
        icon: <BSIcons.BsFillPeopleFill/>
      },
      {
        title: 'Источник заказов',
        path: '/admin/order_sources',
        icon: <FaIcons.FaWarehouse/>
      },
      {
        title: 'Статус заказов',
        path: '/admin/order_status',
        icon: <FaIcons.FaWarehouse/>
      },
    ]
  }
]