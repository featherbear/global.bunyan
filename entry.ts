import * as bunyan from 'bunyan'
/* alternatively... YMMV
import bunyan from 'bunyan'
*/

globalThis.logger = bunyan.createLogger({
  name: "{{ YOUR LOGGER NAME HERE }}"
})
