import { createExtension } from '@ohbug/core'
import Perfume from 'perfume.js'

const extension = createExtension({
  name: 'OhbugExtensionPerfume',
  init: (client) => {
    new Perfume({
      analyticsTracker: (options) => {
        const { metricName, data } = options
        const event = client.createEvent({
          category: 'performance',
          type: metricName,
          detail: data,
        })
        client.notify(event)
      },
    })
  },
})

export default extension
