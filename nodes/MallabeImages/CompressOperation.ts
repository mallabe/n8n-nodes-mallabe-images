import type { INodeProperties } from 'n8n-workflow';

export const compressFields: INodeProperties[] = [
	{
		displayName: 'Image URL',
		name: 'url',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['compress'],
				resource: ['image'],
			},
		},
		default: '',
		// description:
		// 	'Public URL of the image file to blur. Use this field or `Image in Base64 Format`.',
	},
	// {
	// 	displayName: 'Image in Base64 Format',
	// 	name: 'base64Image',
	// 	type: 'string',
	// 	displayOptions: {
	// 		show: {
	// 			operation: ['blur'],
	// 			resource: ['image'],
	// 		},
	// 	},
	// 	default: '',
	// 	description: 'When using this field the max file size is only 4MB. Prefer using `Image URL`.',
	// },
	{
		displayName: 'Quality',
		name: 'quality',
		type: 'number',
		default: 80,
		displayOptions: {
			show: {
				operation: ['compress'],
				resource: ['image'],
			},
		},
		description: 'Decrease the quality of the picture, in percentage (1-100)',
	},
	{
		displayName: 'Specify File Name',
		name: 'fileName',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['compress'],
				resource: ['image'],
			},
		},
		default: '',
		description: 'Custom file name for the compressed image',
	},
	{
		displayName: 'Specify File Extension',
		name: 'fileExtension',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['compress'],
				resource: ['image'],
			},
		},
		default: '',
		description: 'Custom file extension for the compressed image',
	},
	{
		displayName: 'Download Image?',
		name: 'download',
		type: 'boolean',
		required: true,
		displayOptions: {
			show: {
				operation: ['compress'],
				resource: ['image'],
			},
		},
		default: false,
		description: 'Whether to download the Image or return a link to it',
	},
	{
		displayName: 'Put Output File In Field',
		name: 'output',
		type: 'string',
		required: true,
		displayOptions: {
			show: {
				operation: ['compress'],
				resource: ['image'],
				download: [true],
			},
		},
		default: 'data',
		description: 'The name of the output field to put the binary file data in',
	},
	{
		displayName: 'Webhook URL (Advanced)',
		name: 'webhookUrl',
		type: 'string',
		displayOptions: {
			show: {
				operation: ['compress'],
				resource: ['image'],
			},
		},
		default: '',
		description: 'URL to send a webhook with the data of the operation',
	},
];
