import type {
	IExecuteFunctions,
	IDataObject,
	JsonObject,
	IHttpRequestMethods,
	IRequestOptions,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

export async function mallabeImagesRequest(
	this: IExecuteFunctions,
	method: IHttpRequestMethods,
	resource: string,
	body: IDataObject = {},
	qs: IDataObject = {},
	uri?: string,
	option: IDataObject = {},
) {
	const credentials = await this.getCredentials('mallabeImages');
	const n8nApiKey = 'xPHYKn7ar42idNoYrbyuc1xTk6LDWpPoIGvCRLK2';
	const productionUrl = 'https://api.dev.mallabe.com';

	const options: IRequestOptions = {
		headers: {
			'Content-Type': 'application/json',
			'User-Agent': 'n8n',
			'x-api-key': n8nApiKey,
			'x-account-api-key': credentials.apiKey,
		},
		method,
		body,
		qs,
		uri: uri || `${productionUrl}${resource}`,
		json: true,
	};

	try {
		const responseData = await this.helpers.request(options);
		return responseData;
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}
