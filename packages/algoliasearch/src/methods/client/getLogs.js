// @flow

import type { RequestMethod, RequestOptions } from '../../types';

export type Parameters = {
  offset?: number,
  length?: number,
};

export default function getLogs({
  requester,
  params = {},
  options,
}: {
  requester: RequestMethod,
  params?: Parameters,
  options?: RequestOptions,
}) {
  const { offset = 0, length = 10 } = params;
  return requester({
    method: 'GET',
    path: '/1/logs',
    qs: { offset, length },
    options,
  });
}