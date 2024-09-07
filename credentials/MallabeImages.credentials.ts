import type { ICredentialType, INodeProperties, IAuthenticateGeneric, ICredentialTestRequest } from 'n8n-workflow';

const N8N_API_KEY = 'xPHYKn7ar42idNoYrbyuc1xTk6LDWpPoIGvCRLK2';

export class MallabeImages implements ICredentialType {
	name = 'mallabeImages';

	displayName = 'Mallabe Images';

	documentationUrl = 'mallabeImages';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
		},
	];

	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				'x-api-key': N8N_API_KEY,
				'x-account-api-key': '={{$credentials.apiKey}}'
			},
		},
	};

	test: ICredentialTestRequest = {
		request: {
			baseURL: 'https://api.dev.mallabe.com',
			url: '/v1/accounts/me',
			method: 'POST'
		},
	};
}
