// Workers-safe no-op logger, drop-in replacement for the pino API surface used by this app.
const noop = () => {};
function makeLogger(level) {
  const lv = typeof level === 'string' ? level : 'info';
  const logger = {
    level: lv,
    info: (...a) => console.log('[info]', ...a),
    warn: (...a) => console.warn('[warn]', ...a),
    error: (...a) => console.error('[error]', ...a),
    fatal: (...a) => console.error('[fatal]', ...a),
    debug: noop,
    trace: noop,
    child: () => logger,
  };
  return logger;
}
export default function pino(optsOrLevel) {
  return makeLogger(typeof optsOrLevel === 'string' ? optsOrLevel : (optsOrLevel && optsOrLevel.level));
}
pino.default = pino;
pino.destination = noop;
pino.transport = noop;
pino.multistream = noop;
pino.levels = { values: { trace: 10, debug: 20, info: 30, warn: 40, error: 50, fatal: 60 } };
