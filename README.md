![Banner image](https://user-images.githubusercontent.com/10284570/173569848-c624317f-42b1-45a6-ab09-f0ea3c247648.png)

# n8n-nodes-mallabe-images

This is an n8n community node for [Mallabe Images](https://mallabe.com/).

It allows you to manipulate images using different operations.

For more information, refer to the [Mallabe website](https://mallabe.com/).

Current supported operations:
- Resize
- Compress
- Get Metadata
- Crop
- Rotate
- Flip / Flop
- Greyscale
- Join

## More information

Refer to our [documentation on creating nodes](https://docs.n8n.io/integrations/creating-nodes/) for detailed information on building your own nodes.

## License

[MIT](https://github.com/n8n-io/n8n-nodes-starter/blob/master/LICENSE.md)

## Development
### Running Locally (Summary)
1. Install n8n globally using https://docs.n8n.io/integrations/creating-nodes/test/run-node-locally/
2. Run `nvm use` to use the correct node version in the node folder.
3. Run `pnpm install` in the node folder.
4. Run `pnpm link n8n-nodes-mallabe-images --global` to register as package
5. Run `pnpm run build` whenever you make changes to the node
6. Run `cd ~/.n8n`
7. Stop n8n if it was already running.
8. Run `pnpm link n8n-nodes-mallabe-images` in n8n folder
9. Run `n8n start`

Note: if you like to watch the development instead of rebuilding every time, use `npm run dev`.
