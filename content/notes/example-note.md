---
title: Example Note
tags:
  - example
  - guide
---

# Example Note

This is an example of how to structure notes for publication. You can copy notes from your Obsidian vault (000 Slip Box or 050 Law) into this folder.

## Frontmatter

Each note should have frontmatter at the top:

```yaml
---
title: Your Note Title
tags:
  - topic1
  - topic2
---
```

## Wikilinks

Obsidian-style wikilinks work automatically:

- `[[other-note]]` links to another note
- `[[other-note|custom text]]` links with custom display text
- `[[folder/note]]` links to notes in subfolders

## Publishing Workflow

1. Write notes in your Obsidian vault as usual
2. When ready to publish, copy the `.md` file to `content/notes/`
3. Review and remove any private information
4. Commit and push: `git add . && git commit -m "Add new notes" && git push`
5. Cloudflare Pages will automatically rebuild

## Folder Organization

- `/content/notes/` - Class notes and Zettelkasten notes
- `/content/blog/` - Longer-form blog posts
- `/content/projects/` - Project documentation
- `/content/about/` - About page and resume

---

*Delete this example note once you've added your own content.*
