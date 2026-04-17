# pi-custom-footer

A [pi](https://github.com/mariozechner/pi-coding-agent) extension that replaces the default footer with a custom status bar showing working directory, git branch, context usage, and model info.

## Install

```bash
# Global (user-level)
pi install ssh://git@github.com/SunflowerFuchs/pi-custom-footer.git

# Project-level (shared with team via .pi/settings.json)
pi install -l ssh://git@github.com/SunflowerFuchs/pi-custom-footer.git

# Try without installing
pi -e ssh://git@github.com/SunflowerFuchs/pi-custom-footer.git
```

## What's Included

| Type | Name | Description |
|------|------|-------------|
| Extension | — | Custom status bar with cwd, branch, context usage, and model info |

## Usage

The footer displays a single status line:

```
 pi v0.x.x  ~/projects/my-app (main)                    52k/200k (26%)  claude-sonnet-4 (medium)
```

- **Path & branch** — shows `cwd` with `~` abbreviation and current git branch
- **Context usage** — token count / context window with color-coded percentage (green → yellow → red)
- **Model & thinking level** — active model ID and current thinking setting
- **Extension statuses** — renders any additional extension status lines below the main bar. Multi-line status values (containing `\n`) are split into separate rows.

## Development

```bash
npm install
npm run typecheck
npm test
```

## License

MIT
