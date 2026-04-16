# pi-custom-footer

A [pi](https://github.com/mariozechner/pi-coding-agent) extension that replaces the default footer with a custom status bar showing the current working directory, git branch, context usage, and model info.

## Example

```
 pi v0.x.x  ~/projects/my-app (main)                    52k/200k (26%)  claude-sonnet-4 (medium)
```

## Features

- **Path & branch** — shows `cwd` with `~` abbreviation and current git branch
- **Context usage** — token count / context window with color-coded percentage (green → yellow → red)
- **Model & thinking level** — active model ID and current thinking setting
- **Extension statuses** — renders any additional extension status lines below the main bar

## Install

Clone or symlink into the global extensions directory:

```bash
ln -s /path/to/pi-custom-footer ~/.pi/agent/extensions/pi-custom-footer
```

Or add it to your `settings.json` extensions array:

```json
{
  "extensions": ["/path/to/pi-custom-footer"]
}
```

## Development

```bash
npm install
npm run typecheck
npm test
```

## License

MIT
