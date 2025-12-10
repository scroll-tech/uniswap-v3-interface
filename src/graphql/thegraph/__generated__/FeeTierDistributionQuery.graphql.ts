/**
 * @generated SignedSource<<placeholder>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type FeeTierDistributionQuery$variables = {
  token0: string;
  token1: string;
};
export type FeeTierDistributionQuery$data = {
  readonly _meta: {
    readonly block: {
      readonly number: number | null;
    } | null;
  } | null;
  readonly asToken0: ReadonlyArray<{
    readonly feeTier: string | null;
    readonly totalValueLockedToken0: string | null;
    readonly totalValueLockedToken1: string | null;
  } | null> | null;
  readonly asToken1: ReadonlyArray<{
    readonly feeTier: string | null;
    readonly totalValueLockedToken0: string | null;
    readonly totalValueLockedToken1: string | null;
  } | null> | null;
};
export type FeeTierDistributionQuery = {
  response: FeeTierDistributionQuery$data;
  variables: FeeTierDistributionQuery$variables;
};

const node: ConcreteRequest = (function(){
return {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "token0",
        "type": "String!"
      },
      {
        "kind": "LocalArgument",
        "name": "token1",
        "type": "String!"
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "FeeTierDistributionQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "_Meta_",
        "kind": "LinkedField",
        "name": "_meta",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "_Block_",
            "kind": "LinkedField",
            "name": "block",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "number",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": "asToken0",
        "args": [
          {
            "kind": "Literal",
            "name": "orderBy",
            "value": "totalValueLockedToken0"
          },
          {
            "kind": "Literal",
            "name": "orderDirection",
            "value": "desc"
          },
          {
            "kind": "Variable",
            "name": "where",
            "variableName": "token0"
          },
          {
            "kind": "Variable",
            "name": "where",
            "variableName": "token1"
          }
        ],
        "concreteType": "Pool",
        "kind": "LinkedField",
        "name": "pools",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "feeTier",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalValueLockedToken0",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalValueLockedToken1",
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": "asToken1",
        "args": [
          {
            "kind": "Literal",
            "name": "orderBy",
            "value": "totalValueLockedToken0"
          },
          {
            "kind": "Literal",
            "name": "orderDirection",
            "value": "desc"
          },
          {
            "kind": "Variable",
            "name": "where",
            "variableName": "token1"
          },
          {
            "kind": "Variable",
            "name": "where",
            "variableName": "token0"
          }
        ],
        "concreteType": "Pool",
        "kind": "LinkedField",
        "name": "pools",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "feeTier",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalValueLockedToken0",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalValueLockedToken1",
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
        "name": "token0",
        "type": "String!"
      },
      {
        "kind": "LocalArgument",
        "name": "token1",
        "type": "String!"
      }
    ],
    "kind": "Operation",
    "name": "FeeTierDistributionQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "_Meta_",
        "kind": "LinkedField",
        "name": "_meta",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "_Block_",
            "kind": "LinkedField",
            "name": "block",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "number",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": "asToken0",
        "args": [
          {
            "kind": "Literal",
            "name": "orderBy",
            "value": "totalValueLockedToken0"
          },
          {
            "kind": "Literal",
            "name": "orderDirection",
            "value": "desc"
          },
          {
            "kind": "Variable",
            "name": "where",
            "variableName": "token0"
          },
          {
            "kind": "Variable",
            "name": "where",
            "variableName": "token1"
          }
        ],
        "concreteType": "Pool",
        "kind": "LinkedField",
        "name": "pools",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "feeTier",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalValueLockedToken0",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalValueLockedToken1",
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
      },
      {
        "alias": "asToken1",
        "args": [
          {
            "kind": "Literal",
            "name": "orderBy",
            "value": "totalValueLockedToken0"
          },
          {
            "kind": "Literal",
            "name": "orderDirection",
            "value": "desc"
          },
          {
            "kind": "Variable",
            "name": "where",
            "variableName": "token1"
          },
          {
            "kind": "Variable",
            "name": "where",
            "variableName": "token0"
          }
        ],
        "concreteType": "Pool",
        "kind": "LinkedField",
        "name": "pools",
        "plural": true,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "feeTier",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalValueLockedToken0",
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "totalValueLockedToken1",
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
    "name": "FeeTierDistributionQuery",
    "operationKind": "query",
    "text": "query FeeTierDistributionQuery($token0: String!, $token1: String!) { _meta { block { number } } asToken0: pools(orderBy: totalValueLockedToken0, orderDirection: desc, where: { token0: $token0, token1: $token1 }) { feeTier totalValueLockedToken0 totalValueLockedToken1 } asToken1: pools(orderBy: totalValueLockedToken0, orderDirection: desc, where: { token0: $token1, token1: $token0 }) { feeTier totalValueLockedToken0 totalValueLockedToken1 } }"
  }
};
})();

(node as any).hash = "placeholder";

export default node;

