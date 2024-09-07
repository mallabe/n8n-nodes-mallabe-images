import {
	IExecuteFunctions,
	IDataObject,
	INodeExecutionData,
	INodeType,
	INodeTypeDescription,
} from 'n8n-workflow';
import { mallabeImagesCdnRequest, mallabeImagesRequest } from './GenericFunctions';
import { resizeFields } from './ResizeOperation';
import { compressFields } from './CompressOperation';
import { metadataFields } from './MetadataOperation';
import { cropFields } from './CropOperation';
import { flipFields } from './FlipOperation';
import { rotateFields } from './RotateOperation';
import { blurFields } from './BlurOperation';
import { greyscaleFields } from './GreyscaleOperation';
import { joinFields } from './JoinOperation';

export class MallabeImages implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Mallabe Images',
		name: 'mallabeImages',
		icon: 'file:mallabe.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{ $parameter["operation"] + ": " + $parameter["resource"] }}',
		description:
			'Mallabe Images is an automation toolchain that allows you to process images, resize, crop and apply other manipulations on images on the fly.',
		defaults: {
			name: 'Mallabe Images',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'mallabeImagesApi',
				required: true,
			},
		],
		properties: [
			// Node properties which the user gets displayed and
			// can change on the node.
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{
						name: 'Image',
						value: 'image',
					},
				],
				default: 'image',
				required: true,
			},

			// images
			{
				displayName: 'Operation',
				name: 'operation',
				type: 'options',
				noDataExpression: true,
				displayOptions: {
					show: {
						resource: ['image'],
					},
				},
				options: [
					{
						name: 'Blur Image',
						value: 'blur',
						description: 'Blur images and send the new image to another integration',
						action: 'Blur image',
					},
					{
						name: 'Compress Image',
						value: 'compress',
						description:
							"Compress images and drive the new image to another integration.Note: if a given URL isn't an image file (png, jpg/jpeg, etc..) - the file will not convert. Note: some Zapier integrations give URLs that are protected - these can't be used & compressed.",
						action: 'Compress image',
					},
					{
						name: 'Crop Image',
						value: 'crop',
						description:
							"Crop images and send the new image to another integration. Note: If a given URL isn't an image file (e.g., png, jpg/jpeg, gif), the file will not convert. Also, some Zapier integrations provide protected URLs that cannot be cropped.",
						action: 'Crop image',
					},
					{
						name: 'Extract Image Metadata',
						value: 'metadata',
						description:
							"Extract image metadata. Note: some integrations give URLs that are protected - these can't be used & resized.",
						action: 'Extract image metadata',
					},
					{
						name: 'Flip Image',
						value: 'flip',
						description: 'Flip images and send the new image to another integration',
						action: 'Flip image',
					},
					{
						name: 'Greyscale Image',
						value: 'greyscale',
						description: 'Greyscale images and send the new image to another integration',
						action: 'Greyscale image',
					},
					{
						name: 'Join/Combine Images',
						value: 'join',
						description: 'Join images into one image and send the new image to another integration',
						action: 'Join combine images',
					},
					{
						name: 'Resize Image',
						value: 'resize',
						description:
							"Resize or Scale images and drive the new image to another integration. Note: if a given URL isn't an image file (png, jpg/jpeg, gif, etc..) - the file will not convert.Note: some Zapier integrations give URLs that are protected - these can't be used & resized.",
						action: 'Resize image',
					},
					{
						name: 'Rotate Image',
						value: 'rotate',
						description: 'Rotate images and send the new image to another integration',
						action: 'Rotate image',
					},
				],
				default: 'resize',
			},

			...resizeFields,
			...compressFields,
			...metadataFields,
			...cropFields,
			...flipFields,
			...rotateFields,
			...blurFields,
			...greyscaleFields,
			...joinFields,
		],
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: IDataObject[] = [];
		const length = items.length;
		const qs: IDataObject = {};
		let response;
		let responseData;
		let download;
		for (let i = 0; i < length; i++) {
			try {
				const resource = this.getNodeParameter('resource', 0);
				const operation = this.getNodeParameter('operation', 0);

				if (resource === 'image') {
					if (operation === 'resize') {
						const url = this.getNodeParameter('url', i) as string;
						const strategy = this.getNodeParameter('strategy', i) as number;
						const width = this.getNodeParameter('width', i) as number | null;
						const height = this.getNodeParameter('height', i) as number | null;
						const removeExif = this.getNodeParameter('removeExif', i) as boolean;
						const fileName = this.getNodeParameter('fileName', i) as string | null;
						const fileExtension = this.getNodeParameter('fileExtension', i) as string | null;
						const webhookUrl = this.getNodeParameter('webhookUrl', i) as string;

						const body = {
							url,
							strategy,
							width,
							height,
							removeExif,
							fileName,
							fileExtension,
							webhookUrl,
						};

						response = await mallabeImagesRequest.call(this, 'POST', '/v1/images/resize', body, qs);
					} else if (operation === 'compress') {
						const url = this.getNodeParameter('url', i) as string;
						const quality = this.getNodeParameter('quality', i) as number;
						const fileName = this.getNodeParameter('fileName', i) as string;
						const fileExtension = this.getNodeParameter('fileExtension', i) as string;
						const webhookUrl = this.getNodeParameter('webhookUrl', i) as string;

						const body = {
							url,
							quality,
							fileName,
							fileExtension,
							webhookUrl,
						};

						response = await mallabeImagesRequest.call(
							this,
							'POST',
							'/v1/images/compress',
							body,
							qs,
						);
					} else if (operation === 'metadata') {
						const url = this.getNodeParameter('url', i) as string;
						const webhookUrl = this.getNodeParameter('webhookUrl', i) as string;

						const body = {
							url,
							webhookUrl,
						};

						response = await mallabeImagesRequest.call(
							this,
							'POST',
							'/v1/images/metadata',
							body,
							qs,
						);
					} else if (operation === 'crop') {
						const url = this.getNodeParameter('url', i) as string;
						const gravity = this.getNodeParameter('gravity', i) as number;
						const width = this.getNodeParameter('width', i) as string | null;
						const height = this.getNodeParameter('height', i) as string | null;
						const x = gravity === 10 ? (this.getNodeParameter('x', i) as number | null) : null;
						const y = gravity === 10 ? (this.getNodeParameter('x', i) as number | null) : null;
						const webhookUrl = this.getNodeParameter('webhookUrl', i) as string;

						const body = {
							url,
							gravity,
							width,
							height,
							x,
							y,
							webhookUrl,
						};

						response = await mallabeImagesRequest.call(this, 'POST', '/v1/images/crop', body, qs);
					} else if (operation === 'flip') {
						const url = this.getNodeParameter('url', i) as string;
						const vertical = this.getNodeParameter('vertical', i) as boolean;
						const horizontal = this.getNodeParameter('horizontal', i) as boolean;
						const webhookUrl = this.getNodeParameter('webhookUrl', i) as string;

						const body = {
							url,
							vertical,
							horizontal,
							webhookUrl,
						};

						response = await mallabeImagesRequest.call(this, 'POST', '/v1/images/flip', body, qs);
					} else if (operation === 'rotate') {
						const url = this.getNodeParameter('url', i) as string;
						const angle = this.getNodeParameter('angle', i) as number;
						const backgroundColor = this.getNodeParameter('backgroundColor', i) as string;
						const webhookUrl = this.getNodeParameter('webhookUrl', i) as string;

						const body = {
							url,
							angle,
							backgroundColor,
							webhookUrl,
						};

						response = await mallabeImagesRequest.call(this, 'POST', '/v1/images/rotate', body, qs);
					} else if (operation === 'blur') {
						const url = this.getNodeParameter('url', i) as string;
						const value = this.getNodeParameter('value', i) as number;
						const webhookUrl = this.getNodeParameter('webhookUrl', i) as string;

						const body = {
							url,
							value,
							webhookUrl,
						};

						response = await mallabeImagesRequest.call(this, 'POST', '/v1/images/blur', body, qs);
					} else if (operation === 'greyscale') {
						const url = this.getNodeParameter('url', i) as string;
						const webhookUrl = this.getNodeParameter('webhookUrl', i) as string;

						const body = {
							url,
							webhookUrl,
						};

						response = await mallabeImagesRequest.call(
							this,
							'POST',
							'/v1/images/greyscale',
							body,
							qs,
						);
					} else if (operation === 'join') {
						const image1Url = this.getNodeParameter('image1Url', i) as string;
						const image2Url = this.getNodeParameter('image2Url', i) as string;
						const direction = this.getNodeParameter('direction', i) as string;
						const align = this.getNodeParameter('align', i) as string;
						const backgroundColor = this.getNodeParameter('backgroundColor', i) as string;
						const offset = this.getNodeParameter('offset', i) as number;
						const webhookUrl = this.getNodeParameter('webhookUrl', i) as string;

						const body = {
							image1Url,
							image2Url,
							direction,
							align,
							backgroundColor,
							offset,
							webhookUrl,
						};

						response = await mallabeImagesRequest.call(this, 'POST', '/v1/images/join', body, qs);
					}

					download = this.getNodeParameter('download', i);
					if (download) {
						const output = this.getNodeParameter('output', i) as string;
						const buffer = (await mallabeImagesCdnRequest.call(
							this,
							response.data.url as string
						)) as Buffer;
						responseData = {
							json: response,
							binary: {
								[output]: await this.helpers.prepareBinaryData(buffer),
							},
						};
					} else {
						responseData = response;
					}
				}

				if (Array.isArray(responseData)) {
					returnData.push.apply(returnData, responseData as IDataObject[]);
				} else {
					returnData.push(responseData as IDataObject);
				}
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({ error: error.message });
					continue;
				}
				throw error;
			}
		}

		if (download) {
			return [returnData as unknown as INodeExecutionData[]];
		}

		return [this.helpers.returnJsonArray(returnData)];
	}
}
