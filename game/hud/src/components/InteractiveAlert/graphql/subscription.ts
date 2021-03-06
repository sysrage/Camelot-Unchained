/*
 * This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */

import gql from 'graphql-tag';
import { client } from '@csegames/camelot-unchained';
import { GraphQLSubscriptionOptions } from '@csegames/camelot-unchained/lib/graphql/react';
import { InteractiveAlertSubscriptionGQL } from 'gql/interfaces';

const url =  (client.apiHost + '/graphql').replace('http', 'ws');
const initPayload = {
  shardID: client.shardID,
  Authorization: `${client.ACCESS_TOKEN_PREFIX} ${client.accessToken}`,
  characterID: client.characterID,
};


export type SubscriptionData = InteractiveAlertSubscriptionGQL.Subscription;

export const subscription: GraphQLSubscriptionOptions<SubscriptionData> = {
  query: gql`
    subscription InteractiveAlertSubscriptionGQL {
      interactiveAlerts {
        category
        targetID
        ... on TradeAlert {
          targetID
          secureTradeID
          otherEntityID
          otherName
          kind
        }
        ... on GroupAlert {
          kind
          fromName
          fromID
          forGroup
          forGroupName
          code
        }
      }
    }
    `,
  url,
  initPayload,
  debug: false,
};
