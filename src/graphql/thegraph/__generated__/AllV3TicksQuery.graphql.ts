/**
 * @generated SignedSource<<placeholder>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type AllV3TicksQuery$variables = {
  poolAddress: string;
  skip: number;
};
export type AllV3TicksQuery$data = {
  readonly ticks: ReadonlyArray<{
    readonly tick: string | null;
    readonly liquidityNet: string | null;
    readonly price0: string | null;
    readonly price1: string | null;
  } | null>;
};
export type AllV3TicksQuery = {
  response: AllV3TicksQuery$data;
  variables: AllV3TicksQuery$variables;
};

const node: ConcreteRequest = (function(){
return {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "poolAddress",
        "type": "String!"
      },
      {
        "kind": "LocalArgument",
        "name": "skip",
        "type": "Int!"
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AllV3TicksQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "where",
            "variableName": "poolAddress"
          },
          {
            "kind": "Variable",
            "name": "skip",
            "variableName": "skip"
          },
          {
            "kind": "Literal",
            "name": "first",
            "value": 1000
          },
          {
            "kind": "Literal",
            "name": "orderBy",
            "value": "tickIdx"
          }
        ],
        "concreteType": "Tick",
        "kind": "LinkedField",
        "name": "ticks",
        "plural": true,
        "selections": [
          {
            "alias": "tick",
            "args": null,
            "kind": "ScalarField",
            "name": "tickIdx",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "liquidityNet",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "price0",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "price1",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "poolAddress",
        "type": "String!"
      },
      {
        "kind": "LocalArgument",
        "name": "skip",
        "type": "Int!"
      }
    ],
    "kind": "Operation",
    "name": "AllV3TicksQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "where",
            "variableName": "poolAddress"
          },
          {
            "kind": "Variable",
            "name": "skip",
            "variableName": "skip"
          },
          {
            "kind": "Literal",
            "name": "first",
            "value": 1000
          },
          {
            "kind": "Literal",
            "name": "orderBy",
            "value": "tickIdx"
          }
        ],
        "concreteType": "Tick",
        "kind": "LinkedField",
        "name": "ticks",
        "plural": true,
        "selections": [
          {
            "alias": "tick",
            "args": null,
            "kind": "ScalarField",
            "name": "tickIdx",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "liquidityNet",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "price0",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "price1",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "__typename",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "placeholder",
    "id": null,
    "metadata": {},
    "name": "AllV3TicksQuery",
    "operationKind": "query",
    "text": "query AllV3TicksQuery($poolAddress: String!, $skip: Int!) { ticks(first: 1000, skip: $skip, where: { poolAddress: $poolAddress }, orderBy: tickIdx) { tick: tickIdx liquidityNet price0 price1 } }"
  }
};
})();

(node as any).hash = "placeholder";

export default node;

