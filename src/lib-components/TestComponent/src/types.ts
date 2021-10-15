import type { ComputedRef } from 'vue';

import type { Nullable, Optional } from '#/helpers';

export interface RouteItem {
  name?: string | symbol;
  path: string;
  meta: {
    breadcrumb?: string;
  };
}

export type TestComponentPropRoute = Nullable<RouteItem[]>;

export interface TestComponentProps {
  linkComponent: Nullable<string>;
  last: Nullable<string>;
  route: TestComponentPropRoute;
}

export interface TestComponentInstance {
//   pushTo: (arg0: {
//     name?: string | symbol;
//     path?: string;
//   }) => Optional<string | Record<'name', string | symbol>>;
//   breadcrumbs: ComputedRef<RouteItem[]>;
//   lastCrumb: ComputedRef<string>;
}