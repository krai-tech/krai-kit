import { NgDocApi } from '@ng-doc/core';

const Api: NgDocApi = {
  title: 'API References',
  keyword: 'ApiReferences',
  scopes: [
    {
      name: 'Components',
      route: 'components',
      include: 'projects/kit/**/*.ts',
    },
    {
      name: 'CDK Pipes',
      route: 'cdk-pipes',
      include: 'projects/cdk/pipes/**/*.ts',
    },
    {
      name: 'CDK Directives',
      route: 'cdk-directives',
      include: 'projects/cdk/directives/**/*.ts',
    },
    {
      name: 'Web API Tokens',
      route: 'web-api-tokens',
      include: 'projects/web-api/tokens/src/**/*.ts',
    },
  ],
};

export default Api;
