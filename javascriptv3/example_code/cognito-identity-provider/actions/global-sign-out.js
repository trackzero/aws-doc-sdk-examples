/**
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  GlobalSignOutCommand,
  CognitoIdentityProviderClient,
} from "@aws-sdk/client-cognito-identity-provider";
import { fromCognitoIdentityPool } from "@aws-sdk/credential-providers";

/** snippet-start:[javascript.v3.cognito-idp.actions.GlobalSignOut] */
const globalSignOut = ({ accessCode, identityPoolId }) => {
  const client = new CognitoIdentityProviderClient({});

  const command = new GlobalSignOutCommand({
    AccessCode: accessCode,
    credentials: fromCognitoIdentityPool({
      identityPoolId,
    }),
  });

  return client.send(command);
};
/** snippet-end:[javascript.v3.cognito-idp.actions.GlobalSignOut] */

export { globalSignOut };
