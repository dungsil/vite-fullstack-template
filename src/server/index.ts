import { createApp, eventHandler, toNodeListener } from 'h3'
import { listen } from 'listhen'

const app = createApp()
app.use('/', eventHandler(() => 'Hello world!'))

await listen(toNodeListener(app))
