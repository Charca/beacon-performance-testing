export function getScript(url = 'https://beacon-v2.helpscout.net/') {
  return `

    !(function(n, a, e) {
      function t() {
        var e = a.getElementsByTagName('script')[0],
          t = a.createElement('script')
        ;(t.type = 'text/javascript'),
          (t.async = !0),
          (t.src = '${url}'),
          e.parentNode.insertBefore(t, e)
      }
      if (
        ((n.Beacon = e = function(e, t, a) {
          n.Beacon.readyQueue.push({ method: e, options: t, data: a })
        }),
        (e.readyQueue = []),
        'complete' === a.readyState)
      )
        return t()
      n.attachEvent
        ? n.attachEvent('onload', t)
        : n.addEventListener('load', t, !1)
    })(window, document, window.Beacon || function() {})

    Beacon('init', 'd5139521-f235-4c83-b6fe-88f8e8685615')

  `
}
