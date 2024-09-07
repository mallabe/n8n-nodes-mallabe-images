import type { INodeProperties } from 'n8n-workflow';

export const blurFields: INodeProperties[] = [
	{
		displayName: 'Image URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['blur'],
				resource: ['image'],
			},
		},
		default: '',
		description:
			'Public URL of the image file to blur. Use this field or `Image in Base64 Format`.',
	},
	{
		displayName: 'Image in Base64 Format',
		name: 'base64Image',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['blur'],
				resource: ['image'],
			},
		},
		default: '',
		description: 'When using this field the max file size is only 4MB. Prefer using `Image URL`.',
	},
	{
		displayName: 'Blur Value',
		name: 'value',
		type: 'number',
		default: null,
		required: true,
		displayOptions: {
			show: {
				operation: ['blur'],
				resource: ['image'],
			},
		},
		description:
			'A value ranging from 0.3 to 1000. The higher the number, the more pronounced the blur effect.',
	},
	{
		displayName: 'Webhook URL (Advanced)',
		name: 'webhookUrl',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['blur'],
				resource: ['image'],
			},
		},
		default: '',
		description: 'URL to send a webhook with the data of the operation',
	},
];
