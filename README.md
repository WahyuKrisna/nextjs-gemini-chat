## Known issues / TODO

- [ ] Prompt result is duplicated (shown in both "Result" and "History")
- [ ] Prompt box doesn't clear after generating
- [ ] Empty prompt still hits the server (validate on the client first)
- [ ] History is lost on refresh (stored only in state)
- [ ] No styling and not responsive (use Tailwind)
- [x] Everything is in one large component (split into form, result, history)
- [ ] Error handling: `fetch` doesn't check `res.ok`, and failures are untested
- [ ] No tests
- [ ] Not deployed

## Already working

- Prompt input and Gemini response
- Loading state
- API key kept server side
- Markdown-formatted output
- In-session history
- Next.js 14, React 18, TypeScript
- React Query set up for requests