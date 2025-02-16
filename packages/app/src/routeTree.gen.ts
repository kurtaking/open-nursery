/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as LayoutImport } from './routes/_layout'
import { Route as AuthedImport } from './routes/_authed'
import { Route as LayoutIndexImport } from './routes/_layout/index'
import { Route as LayoutSignUpImport } from './routes/_layout/sign-up'
import { Route as LayoutLoginImport } from './routes/_layout/login'
import { Route as AuthedDailyLogIndexImport } from './routes/_authed/daily-log/index'
import { Route as AuthedCaregiversIndexImport } from './routes/_authed/caregivers/index'
import { Route as AuthedSettingsSettingsLayoutImport } from './routes/_authed/settings/_settings-layout'
import { Route as AuthedDailyLogHistoryImport } from './routes/_authed/daily-log/history'
import { Route as AuthedCaregiversManageImport } from './routes/_authed/caregivers/manage'
import { Route as AuthedSettingsSettingsLayoutIndexImport } from './routes/_authed/settings/_settings-layout/index'

// Create Virtual Routes

const AuthedSettingsImport = createFileRoute('/_authed/settings')()

// Create/Update Routes

const LayoutRoute = LayoutImport.update({
  id: '/_layout',
  getParentRoute: () => rootRoute,
} as any)

const AuthedRoute = AuthedImport.update({
  id: '/_authed',
  getParentRoute: () => rootRoute,
} as any)

const AuthedSettingsRoute = AuthedSettingsImport.update({
  id: '/settings',
  path: '/settings',
  getParentRoute: () => AuthedRoute,
} as any)

const LayoutIndexRoute = LayoutIndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutSignUpRoute = LayoutSignUpImport.update({
  id: '/sign-up',
  path: '/sign-up',
  getParentRoute: () => LayoutRoute,
} as any)

const LayoutLoginRoute = LayoutLoginImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => LayoutRoute,
} as any)

const AuthedDailyLogIndexRoute = AuthedDailyLogIndexImport.update({
  id: '/daily-log/',
  path: '/daily-log/',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedCaregiversIndexRoute = AuthedCaregiversIndexImport.update({
  id: '/caregivers/',
  path: '/caregivers/',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedSettingsSettingsLayoutRoute =
  AuthedSettingsSettingsLayoutImport.update({
    id: '/_settings-layout',
    getParentRoute: () => AuthedSettingsRoute,
  } as any)

const AuthedDailyLogHistoryRoute = AuthedDailyLogHistoryImport.update({
  id: '/daily-log/history',
  path: '/daily-log/history',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedCaregiversManageRoute = AuthedCaregiversManageImport.update({
  id: '/caregivers/manage',
  path: '/caregivers/manage',
  getParentRoute: () => AuthedRoute,
} as any)

const AuthedSettingsSettingsLayoutIndexRoute =
  AuthedSettingsSettingsLayoutIndexImport.update({
    id: '/',
    path: '/',
    getParentRoute: () => AuthedSettingsSettingsLayoutRoute,
  } as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/_authed': {
      id: '/_authed'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof AuthedImport
      parentRoute: typeof rootRoute
    }
    '/_layout': {
      id: '/_layout'
      path: ''
      fullPath: ''
      preLoaderRoute: typeof LayoutImport
      parentRoute: typeof rootRoute
    }
    '/_layout/login': {
      id: '/_layout/login'
      path: '/login'
      fullPath: '/login'
      preLoaderRoute: typeof LayoutLoginImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/sign-up': {
      id: '/_layout/sign-up'
      path: '/sign-up'
      fullPath: '/sign-up'
      preLoaderRoute: typeof LayoutSignUpImport
      parentRoute: typeof LayoutImport
    }
    '/_layout/': {
      id: '/_layout/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof LayoutIndexImport
      parentRoute: typeof LayoutImport
    }
    '/_authed/caregivers/manage': {
      id: '/_authed/caregivers/manage'
      path: '/caregivers/manage'
      fullPath: '/caregivers/manage'
      preLoaderRoute: typeof AuthedCaregiversManageImport
      parentRoute: typeof AuthedImport
    }
    '/_authed/daily-log/history': {
      id: '/_authed/daily-log/history'
      path: '/daily-log/history'
      fullPath: '/daily-log/history'
      preLoaderRoute: typeof AuthedDailyLogHistoryImport
      parentRoute: typeof AuthedImport
    }
    '/_authed/settings': {
      id: '/_authed/settings'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof AuthedSettingsImport
      parentRoute: typeof AuthedImport
    }
    '/_authed/settings/_settings-layout': {
      id: '/_authed/settings/_settings-layout'
      path: '/settings'
      fullPath: '/settings'
      preLoaderRoute: typeof AuthedSettingsSettingsLayoutImport
      parentRoute: typeof AuthedSettingsRoute
    }
    '/_authed/caregivers/': {
      id: '/_authed/caregivers/'
      path: '/caregivers'
      fullPath: '/caregivers'
      preLoaderRoute: typeof AuthedCaregiversIndexImport
      parentRoute: typeof AuthedImport
    }
    '/_authed/daily-log/': {
      id: '/_authed/daily-log/'
      path: '/daily-log'
      fullPath: '/daily-log'
      preLoaderRoute: typeof AuthedDailyLogIndexImport
      parentRoute: typeof AuthedImport
    }
    '/_authed/settings/_settings-layout/': {
      id: '/_authed/settings/_settings-layout/'
      path: '/'
      fullPath: '/settings/'
      preLoaderRoute: typeof AuthedSettingsSettingsLayoutIndexImport
      parentRoute: typeof AuthedSettingsSettingsLayoutImport
    }
  }
}

// Create and export the route tree

interface AuthedSettingsSettingsLayoutRouteChildren {
  AuthedSettingsSettingsLayoutIndexRoute: typeof AuthedSettingsSettingsLayoutIndexRoute
}

const AuthedSettingsSettingsLayoutRouteChildren: AuthedSettingsSettingsLayoutRouteChildren =
  {
    AuthedSettingsSettingsLayoutIndexRoute:
      AuthedSettingsSettingsLayoutIndexRoute,
  }

const AuthedSettingsSettingsLayoutRouteWithChildren =
  AuthedSettingsSettingsLayoutRoute._addFileChildren(
    AuthedSettingsSettingsLayoutRouteChildren,
  )

interface AuthedSettingsRouteChildren {
  AuthedSettingsSettingsLayoutRoute: typeof AuthedSettingsSettingsLayoutRouteWithChildren
}

const AuthedSettingsRouteChildren: AuthedSettingsRouteChildren = {
  AuthedSettingsSettingsLayoutRoute:
    AuthedSettingsSettingsLayoutRouteWithChildren,
}

const AuthedSettingsRouteWithChildren = AuthedSettingsRoute._addFileChildren(
  AuthedSettingsRouteChildren,
)

interface AuthedRouteChildren {
  AuthedCaregiversManageRoute: typeof AuthedCaregiversManageRoute
  AuthedDailyLogHistoryRoute: typeof AuthedDailyLogHistoryRoute
  AuthedSettingsRoute: typeof AuthedSettingsRouteWithChildren
  AuthedCaregiversIndexRoute: typeof AuthedCaregiversIndexRoute
  AuthedDailyLogIndexRoute: typeof AuthedDailyLogIndexRoute
}

const AuthedRouteChildren: AuthedRouteChildren = {
  AuthedCaregiversManageRoute: AuthedCaregiversManageRoute,
  AuthedDailyLogHistoryRoute: AuthedDailyLogHistoryRoute,
  AuthedSettingsRoute: AuthedSettingsRouteWithChildren,
  AuthedCaregiversIndexRoute: AuthedCaregiversIndexRoute,
  AuthedDailyLogIndexRoute: AuthedDailyLogIndexRoute,
}

const AuthedRouteWithChildren =
  AuthedRoute._addFileChildren(AuthedRouteChildren)

interface LayoutRouteChildren {
  LayoutLoginRoute: typeof LayoutLoginRoute
  LayoutSignUpRoute: typeof LayoutSignUpRoute
  LayoutIndexRoute: typeof LayoutIndexRoute
}

const LayoutRouteChildren: LayoutRouteChildren = {
  LayoutLoginRoute: LayoutLoginRoute,
  LayoutSignUpRoute: LayoutSignUpRoute,
  LayoutIndexRoute: LayoutIndexRoute,
}

const LayoutRouteWithChildren =
  LayoutRoute._addFileChildren(LayoutRouteChildren)

export interface FileRoutesByFullPath {
  '': typeof LayoutRouteWithChildren
  '/login': typeof LayoutLoginRoute
  '/sign-up': typeof LayoutSignUpRoute
  '/': typeof LayoutIndexRoute
  '/caregivers/manage': typeof AuthedCaregiversManageRoute
  '/daily-log/history': typeof AuthedDailyLogHistoryRoute
  '/settings': typeof AuthedSettingsSettingsLayoutRouteWithChildren
  '/caregivers': typeof AuthedCaregiversIndexRoute
  '/daily-log': typeof AuthedDailyLogIndexRoute
  '/settings/': typeof AuthedSettingsSettingsLayoutIndexRoute
}

export interface FileRoutesByTo {
  '': typeof AuthedRouteWithChildren
  '/login': typeof LayoutLoginRoute
  '/sign-up': typeof LayoutSignUpRoute
  '/': typeof LayoutIndexRoute
  '/caregivers/manage': typeof AuthedCaregiversManageRoute
  '/daily-log/history': typeof AuthedDailyLogHistoryRoute
  '/settings': typeof AuthedSettingsSettingsLayoutIndexRoute
  '/caregivers': typeof AuthedCaregiversIndexRoute
  '/daily-log': typeof AuthedDailyLogIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/_authed': typeof AuthedRouteWithChildren
  '/_layout': typeof LayoutRouteWithChildren
  '/_layout/login': typeof LayoutLoginRoute
  '/_layout/sign-up': typeof LayoutSignUpRoute
  '/_layout/': typeof LayoutIndexRoute
  '/_authed/caregivers/manage': typeof AuthedCaregiversManageRoute
  '/_authed/daily-log/history': typeof AuthedDailyLogHistoryRoute
  '/_authed/settings': typeof AuthedSettingsRouteWithChildren
  '/_authed/settings/_settings-layout': typeof AuthedSettingsSettingsLayoutRouteWithChildren
  '/_authed/caregivers/': typeof AuthedCaregiversIndexRoute
  '/_authed/daily-log/': typeof AuthedDailyLogIndexRoute
  '/_authed/settings/_settings-layout/': typeof AuthedSettingsSettingsLayoutIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | ''
    | '/login'
    | '/sign-up'
    | '/'
    | '/caregivers/manage'
    | '/daily-log/history'
    | '/settings'
    | '/caregivers'
    | '/daily-log'
    | '/settings/'
  fileRoutesByTo: FileRoutesByTo
  to:
    | ''
    | '/login'
    | '/sign-up'
    | '/'
    | '/caregivers/manage'
    | '/daily-log/history'
    | '/settings'
    | '/caregivers'
    | '/daily-log'
  id:
    | '__root__'
    | '/_authed'
    | '/_layout'
    | '/_layout/login'
    | '/_layout/sign-up'
    | '/_layout/'
    | '/_authed/caregivers/manage'
    | '/_authed/daily-log/history'
    | '/_authed/settings'
    | '/_authed/settings/_settings-layout'
    | '/_authed/caregivers/'
    | '/_authed/daily-log/'
    | '/_authed/settings/_settings-layout/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AuthedRoute: typeof AuthedRouteWithChildren
  LayoutRoute: typeof LayoutRouteWithChildren
}

const rootRouteChildren: RootRouteChildren = {
  AuthedRoute: AuthedRouteWithChildren,
  LayoutRoute: LayoutRouteWithChildren,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/_authed",
        "/_layout"
      ]
    },
    "/_authed": {
      "filePath": "_authed.tsx",
      "children": [
        "/_authed/caregivers/manage",
        "/_authed/daily-log/history",
        "/_authed/settings",
        "/_authed/caregivers/",
        "/_authed/daily-log/"
      ]
    },
    "/_layout": {
      "filePath": "_layout.tsx",
      "children": [
        "/_layout/login",
        "/_layout/sign-up",
        "/_layout/"
      ]
    },
    "/_layout/login": {
      "filePath": "_layout/login.tsx",
      "parent": "/_layout"
    },
    "/_layout/sign-up": {
      "filePath": "_layout/sign-up.tsx",
      "parent": "/_layout"
    },
    "/_layout/": {
      "filePath": "_layout/index.tsx",
      "parent": "/_layout"
    },
    "/_authed/caregivers/manage": {
      "filePath": "_authed/caregivers/manage.tsx",
      "parent": "/_authed"
    },
    "/_authed/daily-log/history": {
      "filePath": "_authed/daily-log/history.tsx",
      "parent": "/_authed"
    },
    "/_authed/settings": {
      "filePath": "_authed/settings",
      "parent": "/_authed",
      "children": [
        "/_authed/settings/_settings-layout"
      ]
    },
    "/_authed/settings/_settings-layout": {
      "filePath": "_authed/settings/_settings-layout.tsx",
      "parent": "/_authed/settings",
      "children": [
        "/_authed/settings/_settings-layout/"
      ]
    },
    "/_authed/caregivers/": {
      "filePath": "_authed/caregivers/index.tsx",
      "parent": "/_authed"
    },
    "/_authed/daily-log/": {
      "filePath": "_authed/daily-log/index.tsx",
      "parent": "/_authed"
    },
    "/_authed/settings/_settings-layout/": {
      "filePath": "_authed/settings/_settings-layout/index.tsx",
      "parent": "/_authed/settings/_settings-layout"
    }
  }
}
ROUTE_MANIFEST_END */
