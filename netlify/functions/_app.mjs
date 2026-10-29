import { createRequire } from "node:module";
var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
function __accessProp(key) {
  return this[key];
}
var __toESMCache_node;
var __toESMCache_esm;
var __toESM = (mod, isNodeMode, target) => {
  var canCache = mod != null && typeof mod === "object";
  if (canCache) {
    var cache = isNodeMode ? __toESMCache_node ??= new WeakMap : __toESMCache_esm ??= new WeakMap;
    var cached = cache.get(mod);
    if (cached)
      return cached;
  }
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule || !__hasOwnProp.call(mod, "default") ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  if (mod && typeof mod === "object" || typeof mod === "function") {
    for (let key of __getOwnPropNames(mod))
      if (!__hasOwnProp.call(to, key))
        __defProp(to, key, {
          get: __accessProp.bind(mod, key),
          enumerable: true
        });
  }
  if (canCache)
    cache.set(mod, to);
  return to;
};
var __commonJS = (cb, mod) => () => (mod || cb((mod = { exports: {} }).exports, mod), mod.exports);
var __returnValue = (v) => v;
function __exportSetter(name, newValue) {
  this[name] = __returnValue.bind(null, newValue);
}
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {
      get: all[name],
      enumerable: true,
      configurable: true,
      set: __exportSetter.bind(all, name)
    });
};
var __esm = (fn, res, err) => () => {
  if (fn)
    try {
      res = fn(fn = 0);
    } catch (e) {
      err = [e];
    }
  if (err)
    throw err[0];
  return res;
};
var __require = /* @__PURE__ */ createRequire(import.meta.url);

// node_modules/fast-decode-uri-component/index.js
var require_fast_decode_uri_component = __commonJS(function(exports, module) {
  var UTF8_ACCEPT = 12;
  var UTF8_REJECT = 0;
  var UTF8_DATA = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    6,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    8,
    7,
    7,
    10,
    9,
    9,
    9,
    11,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    12,
    0,
    0,
    0,
    0,
    24,
    36,
    48,
    60,
    72,
    84,
    96,
    0,
    12,
    12,
    12,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    48,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    127,
    63,
    63,
    63,
    0,
    31,
    15,
    15,
    15,
    7,
    7,
    7
  ];
  function decodeURIComponent2(uri) {
    var percentPosition = uri.indexOf("%");
    if (percentPosition === -1)
      return uri;
    var length = uri.length;
    var decoded = "";
    var last = 0;
    var codepoint = 0;
    var startOfOctets = percentPosition;
    var state = UTF8_ACCEPT;
    while (percentPosition > -1 && percentPosition < length) {
      var high = hexCodeToInt(uri[percentPosition + 1], 4);
      var low = hexCodeToInt(uri[percentPosition + 2], 0);
      var byte = high | low;
      var type = UTF8_DATA[byte];
      state = UTF8_DATA[256 + state + type];
      codepoint = codepoint << 6 | byte & UTF8_DATA[364 + type];
      if (state === UTF8_ACCEPT) {
        decoded += uri.slice(last, startOfOctets);
        decoded += codepoint <= 65535 ? String.fromCharCode(codepoint) : String.fromCharCode(55232 + (codepoint >> 10), 56320 + (codepoint & 1023));
        codepoint = 0;
        last = percentPosition + 3;
        percentPosition = startOfOctets = uri.indexOf("%", last);
      } else if (state === UTF8_REJECT) {
        return null;
      } else {
        percentPosition += 3;
        if (percentPosition < length && uri.charCodeAt(percentPosition) === 37)
          continue;
        return null;
      }
    }
    return decoded + uri.slice(last);
  }
  var HEX = {
    "0": 0,
    "1": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    a: 10,
    A: 10,
    b: 11,
    B: 11,
    c: 12,
    C: 12,
    d: 13,
    D: 13,
    e: 14,
    E: 14,
    f: 15,
    F: 15
  };
  function hexCodeToInt(c, shift) {
    var i = HEX[c];
    return i === undefined ? 255 : i << shift;
  }
  module.exports = decodeURIComponent2;
});

// node_modules/ieee754/index.js
var init_ieee754 = __esm(() => {
  /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
});

// node_modules/@borewit/text-codec/lib/index.js
function utf8Decoder() {
  if (typeof globalThis.TextDecoder === "undefined")
    return;
  return _utf8Decoder !== null && _utf8Decoder !== undefined ? _utf8Decoder : _utf8Decoder = new globalThis.TextDecoder("utf-8");
}
function textDecode(bytes, encoding = "utf-8") {
  switch (encoding.toLowerCase()) {
    case "utf-8":
    case "utf8": {
      const dec = utf8Decoder();
      return dec ? dec.decode(bytes) : decodeUTF8(bytes);
    }
    case "utf-16le":
      return decodeUTF16LE(bytes);
    case "us-ascii":
    case "ascii":
      return decodeASCII(bytes);
    case "latin1":
    case "iso-8859-1":
      return decodeLatin1(bytes);
    case "windows-1252":
      return decodeWindows1252(bytes);
    default:
      throw new RangeError(`Encoding '${encoding}' not supported`);
  }
}
function flushChunk(parts, chunk) {
  if (chunk.length === 0)
    return;
  parts.push(String.fromCharCode.apply(null, chunk));
  chunk.length = 0;
}
function pushCodeUnit(parts, chunk, codeUnit) {
  chunk.push(codeUnit);
  if (chunk.length >= CHUNK)
    flushChunk(parts, chunk);
}
function pushCodePoint(parts, chunk, cp) {
  if (cp <= 65535) {
    pushCodeUnit(parts, chunk, cp);
    return;
  }
  cp -= 65536;
  pushCodeUnit(parts, chunk, 55296 + (cp >> 10));
  pushCodeUnit(parts, chunk, 56320 + (cp & 1023));
}
function decodeUTF8(bytes) {
  const parts = [];
  const chunk = [];
  let i = 0;
  if (bytes.length >= 3 && bytes[0] === 239 && bytes[1] === 187 && bytes[2] === 191) {
    i = 3;
  }
  while (i < bytes.length) {
    const b1 = bytes[i];
    if (b1 <= 127) {
      pushCodeUnit(parts, chunk, b1);
      i++;
      continue;
    }
    if (b1 < 194 || b1 > 244) {
      pushCodeUnit(parts, chunk, REPLACEMENT);
      i++;
      continue;
    }
    if (b1 <= 223) {
      if (i + 1 >= bytes.length) {
        pushCodeUnit(parts, chunk, REPLACEMENT);
        i++;
        continue;
      }
      const b2 = bytes[i + 1];
      if ((b2 & 192) !== 128) {
        pushCodeUnit(parts, chunk, REPLACEMENT);
        i++;
        continue;
      }
      const cp = (b1 & 31) << 6 | b2 & 63;
      pushCodeUnit(parts, chunk, cp);
      i += 2;
      continue;
    }
    if (b1 <= 239) {
      if (i + 2 >= bytes.length) {
        pushCodeUnit(parts, chunk, REPLACEMENT);
        i++;
        continue;
      }
      const b2 = bytes[i + 1];
      const b3 = bytes[i + 2];
      const valid = (b2 & 192) === 128 && (b3 & 192) === 128 && !(b1 === 224 && b2 < 160) && !(b1 === 237 && b2 >= 160);
      if (!valid) {
        pushCodeUnit(parts, chunk, REPLACEMENT);
        i++;
        continue;
      }
      const cp = (b1 & 15) << 12 | (b2 & 63) << 6 | b3 & 63;
      pushCodeUnit(parts, chunk, cp);
      i += 3;
      continue;
    }
    if (i + 3 >= bytes.length) {
      pushCodeUnit(parts, chunk, REPLACEMENT);
      i++;
      continue;
    }
    const b2 = bytes[i + 1];
    const b3 = bytes[i + 2];
    const b4 = bytes[i + 3];
    const valid = (b2 & 192) === 128 && (b3 & 192) === 128 && (b4 & 192) === 128 && !(b1 === 240 && b2 < 144) && !(b1 === 244 && b2 > 143);
    if (!valid) {
      pushCodeUnit(parts, chunk, REPLACEMENT);
      i++;
      continue;
    }
    const cp = (b1 & 7) << 18 | (b2 & 63) << 12 | (b3 & 63) << 6 | b4 & 63;
    pushCodePoint(parts, chunk, cp);
    i += 4;
  }
  flushChunk(parts, chunk);
  return parts.join("");
}
function decodeUTF16LE(bytes) {
  const parts = [];
  const chunk = [];
  const len = bytes.length;
  let i = 0;
  while (i + 1 < len) {
    const u1 = bytes[i] | bytes[i + 1] << 8;
    i += 2;
    if (u1 >= 55296 && u1 <= 56319) {
      if (i + 1 < len) {
        const u2 = bytes[i] | bytes[i + 1] << 8;
        if (u2 >= 56320 && u2 <= 57343) {
          pushCodeUnit(parts, chunk, u1);
          pushCodeUnit(parts, chunk, u2);
          i += 2;
        } else {
          pushCodeUnit(parts, chunk, REPLACEMENT);
        }
      } else {
        pushCodeUnit(parts, chunk, REPLACEMENT);
      }
      continue;
    }
    if (u1 >= 56320 && u1 <= 57343) {
      pushCodeUnit(parts, chunk, REPLACEMENT);
      continue;
    }
    pushCodeUnit(parts, chunk, u1);
  }
  if (i < len) {
    pushCodeUnit(parts, chunk, REPLACEMENT);
  }
  flushChunk(parts, chunk);
  return parts.join("");
}
function decodeASCII(bytes) {
  const parts = [];
  for (let i = 0;i < bytes.length; i += CHUNK) {
    const end = Math.min(bytes.length, i + CHUNK);
    const codes = new Array(end - i);
    for (let j = i, k = 0;j < end; j++, k++) {
      codes[k] = bytes[j] & 127;
    }
    parts.push(String.fromCharCode.apply(null, codes));
  }
  return parts.join("");
}
function decodeLatin1(bytes) {
  const parts = [];
  for (let i = 0;i < bytes.length; i += CHUNK) {
    const end = Math.min(bytes.length, i + CHUNK);
    const codes = new Array(end - i);
    for (let j = i, k = 0;j < end; j++, k++) {
      codes[k] = bytes[j];
    }
    parts.push(String.fromCharCode.apply(null, codes));
  }
  return parts.join("");
}
function decodeWindows1252(bytes) {
  const parts = [];
  let out = "";
  for (let i = 0;i < bytes.length; i++) {
    const b = bytes[i];
    const extra = b >= 128 && b <= 159 ? WINDOWS_1252_EXTRA[b] : undefined;
    out += extra !== null && extra !== undefined ? extra : String.fromCharCode(b);
    if (out.length >= CHUNK) {
      parts.push(out);
      out = "";
    }
  }
  if (out)
    parts.push(out);
  return parts.join("");
}
var WINDOWS_1252_EXTRA, WINDOWS_1252_REVERSE, _utf8Decoder, CHUNK, REPLACEMENT = 65533;
var init_lib = __esm(() => {
  WINDOWS_1252_EXTRA = {
    128: "€",
    130: "‚",
    131: "ƒ",
    132: "„",
    133: "…",
    134: "†",
    135: "‡",
    136: "ˆ",
    137: "‰",
    138: "Š",
    139: "‹",
    140: "Œ",
    142: "Ž",
    145: "‘",
    146: "’",
    147: "“",
    148: "”",
    149: "•",
    150: "–",
    151: "—",
    152: "˜",
    153: "™",
    154: "š",
    155: "›",
    156: "œ",
    158: "ž",
    159: "Ÿ"
  };
  WINDOWS_1252_REVERSE = {};
  for (const [code, char] of Object.entries(WINDOWS_1252_EXTRA)) {
    WINDOWS_1252_REVERSE[char] = Number.parseInt(code, 10);
  }
  CHUNK = 32 * 1024;
});

// node_modules/token-types/lib/index.js
function dv(array) {
  return new DataView(array.buffer, array.byteOffset);
}

class StringType2 {
  constructor(len, encoding) {
    this.len = len;
    this.encoding = encoding;
  }
  get(data, offset = 0) {
    const bytes = data.subarray(offset, offset + this.len);
    return textDecode(bytes, this.encoding);
  }
}
var UINT8, UINT16_LE, UINT16_BE, UINT32_LE, UINT32_BE, INT32_BE, UINT64_LE;
var init_lib2 = __esm(() => {
  init_ieee754();
  init_lib();
  UINT8 = {
    len: 1,
    get(array, offset) {
      return dv(array).getUint8(offset);
    },
    put(array, offset, value) {
      dv(array).setUint8(offset, value);
      return offset + 1;
    }
  };
  UINT16_LE = {
    len: 2,
    get(array, offset) {
      return dv(array).getUint16(offset, true);
    },
    put(array, offset, value) {
      dv(array).setUint16(offset, value, true);
      return offset + 2;
    }
  };
  UINT16_BE = {
    len: 2,
    get(array, offset) {
      return dv(array).getUint16(offset);
    },
    put(array, offset, value) {
      dv(array).setUint16(offset, value);
      return offset + 2;
    }
  };
  UINT32_LE = {
    len: 4,
    get(array, offset) {
      return dv(array).getUint32(offset, true);
    },
    put(array, offset, value) {
      dv(array).setUint32(offset, value, true);
      return offset + 4;
    }
  };
  UINT32_BE = {
    len: 4,
    get(array, offset) {
      return dv(array).getUint32(offset);
    },
    put(array, offset, value) {
      dv(array).setUint32(offset, value);
      return offset + 4;
    }
  };
  INT32_BE = {
    len: 4,
    get(array, offset) {
      return dv(array).getInt32(offset);
    },
    put(array, offset, value) {
      dv(array).setInt32(offset, value);
      return offset + 4;
    }
  };
  UINT64_LE = {
    len: 8,
    get(array, offset) {
      return dv(array).getBigUint64(offset, true);
    },
    put(array, offset, value) {
      dv(array).setBigUint64(offset, value, true);
      return offset + 8;
    }
  };
});

// node_modules/strtok3/lib/stream/Errors.js
var defaultMessages = "End-Of-Stream", EndOfStreamError, AbortError;
var init_Errors = __esm(() => {
  EndOfStreamError = class EndOfStreamError extends Error {
    constructor() {
      super(defaultMessages);
      this.name = "EndOfStreamError";
    }
  };
  AbortError = class AbortError extends Error {
    constructor(message = "The operation was aborted") {
      super(message);
      this.name = "AbortError";
    }
  };
});

// node_modules/strtok3/lib/AbortSignal.js
function throwIfAborted(signal) {
  if (signal?.aborted) {
    throw new AbortError;
  }
}
var init_AbortSignal = __esm(() => {
  init_Errors();
});

// node_modules/strtok3/lib/BufferSizeError.js
function getMaxBufferSize(options) {
  const limit = options?.maxBufferSize ?? Number.POSITIVE_INFINITY;
  if (limit !== Number.POSITIVE_INFINITY && (!Number.isSafeInteger(limit) || limit <= 0)) {
    throw new RangeError("maxBufferSize must be a positive safe integer or Infinity");
  }
  return limit;
}
var BufferSizeError;
var init_BufferSizeError = __esm(() => {
  BufferSizeError = class BufferSizeError extends RangeError {
    constructor(requestedSize, maxBufferSize) {
      super(`Requested buffer size ${requestedSize} exceeds maxBufferSize ${maxBufferSize}`);
      this.requestedSize = requestedSize;
      this.maxBufferSize = maxBufferSize;
      this.name = "BufferSizeError";
    }
  };
});

// node_modules/strtok3/lib/stream/AbstractStreamReader.js
class AbstractStreamReader {
  constructor() {
    this.endOfStream = false;
    this.interrupted = false;
    this.peekQueue = [];
  }
  async peek(uint8Array, mayBeLess = false) {
    const bytesRead = await this.read(uint8Array, mayBeLess);
    this.peekQueue.push(uint8Array.subarray(0, bytesRead));
    return bytesRead;
  }
  async read(buffer, mayBeLess = false) {
    if (buffer.length === 0) {
      return 0;
    }
    let bytesRead = this.readFromPeekBuffer(buffer);
    if (!this.endOfStream) {
      bytesRead += await this.readRemainderFromStream(buffer.subarray(bytesRead), mayBeLess);
    }
    if (bytesRead === 0 && !mayBeLess) {
      throw new EndOfStreamError;
    }
    return bytesRead;
  }
  readFromPeekBuffer(buffer) {
    let remaining = buffer.length;
    let bytesRead = 0;
    while (this.peekQueue.length > 0 && remaining > 0) {
      const peekData = this.peekQueue.pop();
      if (!peekData) {
        throw new Error("peekData should be defined");
      }
      const lenCopy = Math.min(peekData.length, remaining);
      buffer.set(peekData.subarray(0, lenCopy), bytesRead);
      bytesRead += lenCopy;
      remaining -= lenCopy;
      if (lenCopy < peekData.length) {
        this.peekQueue.push(peekData.subarray(lenCopy));
      }
    }
    return bytesRead;
  }
  async readRemainderFromStream(buffer, mayBeLess) {
    let bytesRead = 0;
    while (bytesRead < buffer.length && !this.endOfStream) {
      if (this.interrupted) {
        throw new AbortError;
      }
      const chunkLen = await this.readFromStream(buffer.subarray(bytesRead), mayBeLess);
      if (chunkLen === 0) {
        break;
      }
      bytesRead += chunkLen;
    }
    if (!mayBeLess && bytesRead < buffer.length) {
      throw new EndOfStreamError;
    }
    return bytesRead;
  }
}
var init_AbstractStreamReader = __esm(() => {
  init_Errors();
});
// node_modules/strtok3/lib/stream/StreamReader.js
var init_StreamReader = __esm(() => {
  init_AbstractStreamReader();
  init_Errors();
});

// node_modules/strtok3/lib/stream/WebStreamReader.js
var WebStreamReader;
var init_WebStreamReader = __esm(() => {
  init_AbstractStreamReader();
  WebStreamReader = class WebStreamReader extends AbstractStreamReader {
    constructor(reader) {
      super();
      this.reader = reader;
    }
    async abort() {
      return this.close();
    }
    async close() {
      this.reader.releaseLock();
    }
  };
});

// node_modules/strtok3/lib/stream/WebStreamByobReader.js
var WebStreamByobReader;
var init_WebStreamByobReader = __esm(() => {
  init_WebStreamReader();
  WebStreamByobReader = class WebStreamByobReader extends WebStreamReader {
    async readFromStream(buffer, mayBeLess) {
      if (buffer.length === 0) {
        return 0;
      }
      const result = await this.reader.read(new Uint8Array(buffer.length), {
        min: mayBeLess ? undefined : buffer.length
      });
      if (result.done) {
        this.endOfStream = result.done;
      }
      if (result.value) {
        buffer.set(result.value);
        return result.value.length;
      }
      return 0;
    }
  };
});

// node_modules/strtok3/lib/stream/WebStreamDefaultReader.js
var WebStreamDefaultReader;
var init_WebStreamDefaultReader = __esm(() => {
  init_AbstractStreamReader();
  init_Errors();
  WebStreamDefaultReader = class WebStreamDefaultReader extends AbstractStreamReader {
    constructor(reader) {
      super();
      this.reader = reader;
      this.buffer = null;
    }
    writeChunk(target, chunk) {
      const written = Math.min(chunk.length, target.length);
      target.set(chunk.subarray(0, written));
      if (written < chunk.length) {
        this.buffer = chunk.subarray(written);
      } else {
        this.buffer = null;
      }
      return written;
    }
    async readFromStream(buffer, mayBeLess) {
      if (buffer.length === 0) {
        return 0;
      }
      let totalBytesRead = 0;
      if (this.buffer) {
        totalBytesRead += this.writeChunk(buffer, this.buffer);
      }
      while (totalBytesRead < buffer.length && !this.endOfStream) {
        const result = await this.reader.read();
        if (result.done) {
          this.endOfStream = true;
          break;
        }
        if (result.value) {
          totalBytesRead += this.writeChunk(buffer.subarray(totalBytesRead), result.value);
        }
      }
      if (!mayBeLess && totalBytesRead === 0 && this.endOfStream) {
        throw new EndOfStreamError;
      }
      return totalBytesRead;
    }
    abort() {
      this.interrupted = true;
      return this.reader.cancel();
    }
    async close() {
      try {
        await this.abort();
      } finally {
        this.reader.releaseLock();
      }
    }
  };
});

// node_modules/strtok3/lib/stream/WebStreamReaderFactory.js
function makeWebStreamReader(stream) {
  try {
    const reader = stream.getReader({ mode: "byob" });
    if (reader instanceof ReadableStreamDefaultReader) {
      return new WebStreamDefaultReader(reader);
    }
    return new WebStreamByobReader(reader);
  } catch (error) {
    if (error instanceof TypeError) {
      return new WebStreamDefaultReader(stream.getReader());
    }
    throw error;
  }
}
var init_WebStreamReaderFactory = __esm(() => {
  init_WebStreamByobReader();
  init_WebStreamDefaultReader();
});

// node_modules/strtok3/lib/stream/index.js
var init_stream = __esm(() => {
  init_Errors();
  init_StreamReader();
  init_WebStreamByobReader();
  init_WebStreamDefaultReader();
  init_WebStreamReaderFactory();
});

// node_modules/strtok3/lib/AbstractTokenizer.js
class AbstractTokenizer {
  constructor(options) {
    this.numBuffer = new Uint8Array(8);
    this.position = 0;
    this.maxBufferSize = getMaxBufferSize(options);
    throwIfAborted(options?.abortSignal);
    this.onClose = options?.onClose;
    if (options?.abortSignal) {
      this.addAbortListener(options.abortSignal, () => {
        this.abort().catch(() => {});
      });
    }
  }
  addAbortListener(signal, listener) {
    this.abortSignal = signal;
    this.abortListener = listener;
    signal.addEventListener("abort", listener, { once: true });
  }
  removeAbortListener() {
    if (this.abortListener) {
      this.abortSignal?.removeEventListener("abort", this.abortListener);
    }
    this.abortSignal = undefined;
    this.abortListener = undefined;
  }
  async readToken(token, position = this.position) {
    this.validateTokenRead(token.len, position);
    const uint8Array = new Uint8Array(token.len);
    const len = await this.readBuffer(uint8Array, { position });
    if (len < token.len) {
      throw new EndOfStreamError;
    }
    return token.get(uint8Array, 0);
  }
  async peekToken(token, position = this.position) {
    const peekPosition = position ?? this.position;
    this.validateTokenRead(token.len, peekPosition, true);
    const uint8Array = new Uint8Array(token.len);
    const len = await this.peekBuffer(uint8Array, { position: peekPosition });
    if (len < token.len) {
      throw new EndOfStreamError;
    }
    return token.get(uint8Array, 0);
  }
  async readNumber(token) {
    const len = await this.readBuffer(this.numBuffer, { length: token.len });
    if (len < token.len) {
      throw new EndOfStreamError;
    }
    return token.get(this.numBuffer, 0);
  }
  async peekNumber(token) {
    const len = await this.peekBuffer(this.numBuffer, { length: token.len });
    if (len < token.len) {
      throw new EndOfStreamError;
    }
    return token.get(this.numBuffer, 0);
  }
  async ignore(length) {
    if (length < 0) {
      throw new RangeError("ignore length must be ≥ 0 bytes");
    }
    this.validateLength(length, "ignore length");
    this.validateLength(this.position + length, "end position");
    if (this.fileInfo.size !== undefined) {
      const bytesLeft = this.fileInfo.size - this.position;
      if (length > bytesLeft) {
        this.position += bytesLeft;
        return bytesLeft;
      }
    }
    this.position += length;
    return length;
  }
  async close() {
    this.removeAbortListener();
    await this.abort();
    await this.onClose?.();
  }
  validateLength(value, name) {
    if (!Number.isSafeInteger(value) || value < 0) {
      throw new RangeError(`${name} must be a non-negative safe integer`);
    }
  }
  validateBufferSize(length) {
    this.validateLength(length, "buffer length");
    if (length > this.maxBufferSize) {
      throw new BufferSizeError(length, this.maxBufferSize);
    }
  }
  validateTokenRead(length, position, peek = false) {
    this.validateBufferSize(length);
    this.validateLength(position, "position");
    this.validateLength(position + length, "end position");
    if (!this.supportsRandomAccess() && position < this.position) {
      throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
    }
    if (peek && !this.supportsRandomAccess()) {
      this.validateBufferSize(length + position - this.position);
    }
    if (this.fileInfo.size !== undefined && length > this.fileInfo.size - position) {
      throw new EndOfStreamError;
    }
  }
  normalizeOptions(uint8Array, options) {
    const length = options?.length ?? uint8Array.length;
    const position = options?.position ?? this.position;
    this.validateLength(length, "length");
    this.validateLength(position, "position");
    this.validateLength(position + length, "end position");
    if (length > uint8Array.length) {
      throw new RangeError("length must not exceed the target buffer length");
    }
    if (!this.supportsRandomAccess() && position < this.position) {
      throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
    }
    return { length, position, mayBeLess: options?.mayBeLess ?? false };
  }
  abort() {
    this.removeAbortListener();
    return Promise.resolve();
  }
}
var init_AbstractTokenizer = __esm(() => {
  init_AbortSignal();
  init_BufferSizeError();
  init_stream();
});

// node_modules/strtok3/lib/BlobTokenizer.js
var BlobTokenizer;
var init_BlobTokenizer = __esm(() => {
  init_AbstractTokenizer();
  init_stream();
  BlobTokenizer = class BlobTokenizer extends AbstractTokenizer {
    constructor(blob, options) {
      super(options);
      this.blob = blob;
      this.fileInfo = { ...options?.fileInfo ?? {}, ...{ size: blob.size, mimeType: blob.type } };
    }
    async readBuffer(uint8Array, options) {
      const normOptions = this.normalizeOptions(uint8Array, options);
      const bytesRead = await this.peekBuffer(uint8Array, normOptions);
      this.position = normOptions.position + bytesRead;
      return bytesRead;
    }
    async peekBuffer(buffer, options) {
      const normOptions = this.normalizeOptions(buffer, options);
      const bytes2read = Math.max(0, Math.min(this.blob.size - normOptions.position, normOptions.length));
      if (!normOptions.mayBeLess && bytes2read < normOptions.length) {
        throw new EndOfStreamError;
      }
      for (let offset = 0;offset < bytes2read; ) {
        const chunkLength = Math.min(this.maxBufferSize, bytes2read - offset);
        const position = normOptions.position + offset;
        const arrayBuffer = await this.blob.slice(position, position + chunkLength).arrayBuffer();
        buffer.set(new Uint8Array(arrayBuffer), offset);
        offset += chunkLength;
      }
      return bytes2read;
    }
    close() {
      return super.close();
    }
    supportsRandomAccess() {
      return true;
    }
    setPosition(position) {
      this.position = position;
    }
  };
});

// node_modules/strtok3/lib/BufferTokenizer.js
var BufferTokenizer;
var init_BufferTokenizer = __esm(() => {
  init_AbstractTokenizer();
  init_stream();
  BufferTokenizer = class BufferTokenizer extends AbstractTokenizer {
    constructor(uint8Array, options) {
      super(options);
      this.uint8Array = uint8Array;
      this.fileInfo = { ...options?.fileInfo ?? {}, ...{ size: uint8Array.length } };
    }
    async readBuffer(uint8Array, options) {
      const normOptions = this.normalizeOptions(uint8Array, options);
      const bytesRead = await this.peekBuffer(uint8Array, normOptions);
      this.position = normOptions.position + bytesRead;
      return bytesRead;
    }
    async peekBuffer(uint8Array, options) {
      const normOptions = this.normalizeOptions(uint8Array, options);
      const bytes2read = Math.max(0, Math.min(this.uint8Array.length - normOptions.position, normOptions.length));
      if (!normOptions.mayBeLess && bytes2read < normOptions.length) {
        throw new EndOfStreamError;
      }
      uint8Array.set(this.uint8Array.subarray(normOptions.position, normOptions.position + bytes2read));
      return bytes2read;
    }
    close() {
      return super.close();
    }
    supportsRandomAccess() {
      return true;
    }
    setPosition(position) {
      this.position = position;
    }
  };
});

// node_modules/strtok3/lib/ReadStreamTokenizer.js
var ignoreChunkSize = 256000, ReadStreamTokenizer;
var init_ReadStreamTokenizer = __esm(() => {
  init_AbstractTokenizer();
  init_stream();
  ReadStreamTokenizer = class ReadStreamTokenizer extends AbstractTokenizer {
    constructor(streamReader, options) {
      super(options);
      this.streamReader = streamReader;
      this.fileInfo = options?.fileInfo ?? {};
    }
    async readBuffer(uint8Array, options) {
      const normOptions = this.normalizeOptions(uint8Array, options);
      const skipBytes = normOptions.position - this.position;
      if (skipBytes > 0) {
        await this.ignore(skipBytes);
        return this.readBuffer(uint8Array, options);
      }
      if (skipBytes < 0) {
        throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
      }
      if (normOptions.length === 0) {
        return 0;
      }
      let bytesRead = 0;
      while (bytesRead < normOptions.length) {
        const chunkLength = Math.min(this.maxBufferSize, normOptions.length - bytesRead);
        const count = await this.streamReader.read(uint8Array.subarray(bytesRead, bytesRead + chunkLength), true);
        bytesRead += count;
        this.position += count;
        if (count < chunkLength) {
          break;
        }
      }
      if (!normOptions.mayBeLess && bytesRead < normOptions.length) {
        throw new EndOfStreamError;
      }
      return bytesRead;
    }
    async peekBuffer(uint8Array, options) {
      const normOptions = this.normalizeOptions(uint8Array, options);
      if (normOptions.length === 0) {
        return 0;
      }
      const lookaheadSize = normOptions.length + normOptions.position - this.position;
      this.validateBufferSize(lookaheadSize);
      let bytesRead = 0;
      if (normOptions.position) {
        const skipBytes = normOptions.position - this.position;
        if (skipBytes > 0) {
          const skipBuffer = new Uint8Array(normOptions.length + skipBytes);
          bytesRead = await this.peekBuffer(skipBuffer, { mayBeLess: normOptions.mayBeLess });
          const bytesPeeked = Math.max(0, bytesRead - skipBytes);
          uint8Array.set(skipBuffer.subarray(skipBytes, skipBytes + bytesPeeked));
          return bytesPeeked;
        }
        if (skipBytes < 0) {
          throw new Error("Cannot peek from a negative offset in a stream");
        }
      }
      if (normOptions.length > 0) {
        try {
          const peekBuffer = new Uint8Array(normOptions.length);
          bytesRead = await this.streamReader.peek(peekBuffer, true);
          uint8Array.set(peekBuffer.subarray(0, bytesRead));
        } catch (err) {
          if (options?.mayBeLess && err instanceof EndOfStreamError) {
            return 0;
          }
          throw err;
        }
        if (!normOptions.mayBeLess && bytesRead < normOptions.length) {
          throw new EndOfStreamError;
        }
      }
      return bytesRead;
    }
    async ignore(length) {
      if (length < 0) {
        throw new RangeError("ignore length must be ≥ 0 bytes");
      }
      this.validateLength(length, "ignore length");
      this.validateLength(this.position + length, "end position");
      const bufSize = Math.min(ignoreChunkSize, this.maxBufferSize, length);
      const buf = new Uint8Array(bufSize);
      let totBytesRead = 0;
      while (totBytesRead < length) {
        const remaining = length - totBytesRead;
        const bytesRead = await this.readBuffer(buf, { length: Math.min(bufSize, remaining) });
        if (bytesRead < 0) {
          return bytesRead;
        }
        totBytesRead += bytesRead;
      }
      return totBytesRead;
    }
    abort() {
      this.removeAbortListener();
      return this.streamReader.abort();
    }
    async close() {
      this.removeAbortListener();
      return this.streamReader.close();
    }
    supportsRandomAccess() {
      return false;
    }
  };
});

// node_modules/strtok3/lib/isRandomAccessTokenizer.js
function isRandomAccessTokenizer(tokenizer) {
  return tokenizer.supportsRandomAccess() && "setPosition" in tokenizer && typeof tokenizer.setPosition === "function" && typeof tokenizer.fileInfo.size === "number";
}

// node_modules/strtok3/lib/TokenizerBoundaryError.js
var TokenizerBoundaryError;
var init_TokenizerBoundaryError = __esm(() => {
  TokenizerBoundaryError = class TokenizerBoundaryError extends RangeError {
    constructor(position, length, size) {
      super(`Range at position ${position} with length ${length} exceeds tokenizer view size ${size}`);
      this.position = position;
      this.length = length;
      this.size = size;
      this.name = "TokenizerBoundaryError";
    }
  };
});

// node_modules/strtok3/lib/TokenizerView.js
function validateOffset(value, name) {
  if (!Number.isSafeInteger(value) || value < 0) {
    throw new RangeError(`${name} must be a non-negative safe integer`);
  }
}
function createTokenizerView(source, length) {
  return isRandomAccessTokenizer(source) ? new RandomAccessTokenizerView(source, length) : new TokenizerView(source, length);
}

class TokenizerView {
  constructor(source, size) {
    this.source = source;
    this.size = size;
    this.closed = false;
    this.closedPosition = 0;
    this.busy = false;
    validateOffset(size, "length");
    validateOffset(source.position, "source position");
    validateOffset(source.position + size, "end position");
    if (source instanceof TokenizerView) {
      source.assertAvailable();
      source.translateRange(size, source.position);
    }
    this.start = source.position;
    this.fileInfo = { size };
  }
  get position() {
    return this.closed ? this.closedPosition : this.source.position - this.start;
  }
  get remaining() {
    return this.size - this.position;
  }
  supportsRandomAccess() {
    return false;
  }
  createView(length) {
    this.assertAvailable();
    return createTokenizerView(this, length);
  }
  async readBuffer(buffer, options) {
    return this.bufferOperation("readBuffer", buffer, options);
  }
  async peekBuffer(buffer, options) {
    return this.bufferOperation("peekBuffer", buffer, options);
  }
  async bufferOperation(method, buffer, options) {
    this.assertAvailable();
    const length = options?.length ?? buffer.length;
    const position = options?.position ?? this.position;
    const absolutePosition = this.translateRange(length, position);
    if (length > buffer.length) {
      throw new RangeError("length must not exceed the target buffer length");
    }
    return this.run(() => this.source[method](buffer, { ...options, length, position: absolutePosition }));
  }
  async readToken(token, position = this.position) {
    this.assertAvailable();
    const absolutePosition = this.translateRange(token.len, position);
    return this.run(() => this.source.readToken(token, absolutePosition));
  }
  async peekToken(token, position = this.position) {
    this.assertAvailable();
    const absolutePosition = this.translateRange(token.len, position ?? this.position);
    return this.run(() => this.source.peekToken(token, absolutePosition));
  }
  async readNumber(token) {
    this.assertAvailable();
    this.translateRange(token.len, this.position);
    return this.run(() => this.source.readNumber(token));
  }
  async peekNumber(token) {
    this.assertAvailable();
    this.translateRange(token.len, this.position);
    return this.run(() => this.source.peekNumber(token));
  }
  async ignore(length) {
    this.assertAvailable();
    this.translateRange(length, this.position);
    return this.run(() => this.source.ignore(length));
  }
  async consumeRemainder() {
    this.assertAvailable();
    const length = this.remaining;
    const end = this.translateRange(length, this.position) + length;
    return this.run(async () => {
      if (length === 0) {
        return 0;
      }
      if (isRandomAccessTokenizer(this.source)) {
        if (await this.source.peekBuffer(new Uint8Array(1), { position: end - 1 }) !== 1) {
          throw new EndOfStreamError;
        }
        this.source.setPosition(end);
      } else {
        const ignored = await this.source.ignore(length);
        if (ignored !== length) {
          throw new EndOfStreamError;
        }
      }
      return length;
    });
  }
  async close() {
    if (this.closed) {
      return;
    }
    if (this.busy) {
      throw new Error("Cannot close a tokenizer view during an active operation");
    }
    this.closedPosition = this.position;
    this.closed = true;
  }
  async abort() {
    if (this.closed) {
      return;
    }
    try {
      await this.source.abort();
    } finally {
      this.closedPosition = this.position;
      this.closed = true;
    }
  }
  assertAvailable() {
    if (this.closed) {
      throw new Error("Tokenizer view is closed");
    }
    if (this.busy) {
      throw new Error("Tokenizer views require sequential operations");
    }
    if (this.source instanceof TokenizerView) {
      this.source.assertAvailable();
    }
  }
  translateRange(length, position) {
    validateOffset(length, "length");
    validateOffset(position, "position");
    validateOffset(position + length, "end position");
    if (position > this.size || length > this.size - position) {
      throw new TokenizerBoundaryError(position, length, this.size);
    }
    if (!this.supportsRandomAccess() && position < this.position) {
      throw new Error("`options.position` must be equal or greater than `tokenizer.position`");
    }
    return this.start + position;
  }
  async run(operation) {
    this.busy = true;
    try {
      return await operation();
    } finally {
      this.busy = false;
    }
  }
}
var RandomAccessTokenizerView;
var init_TokenizerView = __esm(() => {
  init_stream();
  init_TokenizerBoundaryError();
  RandomAccessTokenizerView = class RandomAccessTokenizerView extends TokenizerView {
    constructor(source, size) {
      super(source, size);
    }
    supportsRandomAccess() {
      return true;
    }
    setPosition(position) {
      this.assertAvailable();
      this.source.setPosition(this.translateRange(0, position));
    }
    createView(length) {
      this.assertAvailable();
      return createTokenizerView(this, length);
    }
  };
});

// node_modules/strtok3/lib/core.js
function fromWebStream(webStream, options) {
  getMaxBufferSize(options);
  throwIfAborted(options?.abortSignal);
  const webStreamReader = makeWebStreamReader(webStream);
  return new ReadStreamTokenizer(webStreamReader, options);
}
function fromBuffer(uint8Array, options) {
  return new BufferTokenizer(uint8Array, options);
}
function fromBlob(blob, options) {
  return new BlobTokenizer(blob, options);
}
var init_core = __esm(() => {
  init_AbortSignal();
  init_BlobTokenizer();
  init_BufferSizeError();
  init_BufferTokenizer();
  init_ReadStreamTokenizer();
  init_stream();
  init_AbstractTokenizer();
  init_BufferSizeError();
  init_stream();
  init_TokenizerBoundaryError();
  init_TokenizerView();
});

// node_modules/@tokenizer/inflate/lib/GzipHandler.js
class GzipHandler {
  constructor(tokenizer) {
    this.tokenizer = tokenizer;
  }
  inflate() {
    const tokenizer = this.tokenizer;
    return new ReadableStream({
      async pull(controller) {
        const buffer = new Uint8Array(1024);
        const size = await tokenizer.readBuffer(buffer, { mayBeLess: true });
        if (size === 0) {
          controller.close();
          return;
        }
        controller.enqueue(buffer.subarray(0, size));
      }
    }).pipeThrough(new DecompressionStream("gzip"));
  }
}

// node_modules/ms/index.js
var require_ms = __commonJS(function(exports, module) {
  var s = 1000;
  var m = s * 60;
  var h = m * 60;
  var d = h * 24;
  var w = d * 7;
  var y = d * 365.25;
  module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) {
      return parse(val);
    } else if (type === "number" && isFinite(val)) {
      return options.long ? fmtLong(val) : fmtShort(val);
    }
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
  };
  function parse(str) {
    str = String(str);
    if (str.length > 100) {
      return;
    }
    var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(str);
    if (!match) {
      return;
    }
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch (type) {
      case "years":
      case "year":
      case "yrs":
      case "yr":
      case "y":
        return n * y;
      case "weeks":
      case "week":
      case "w":
        return n * w;
      case "days":
      case "day":
      case "d":
        return n * d;
      case "hours":
      case "hour":
      case "hrs":
      case "hr":
      case "h":
        return n * h;
      case "minutes":
      case "minute":
      case "mins":
      case "min":
      case "m":
        return n * m;
      case "seconds":
      case "second":
      case "secs":
      case "sec":
      case "s":
        return n * s;
      case "milliseconds":
      case "millisecond":
      case "msecs":
      case "msec":
      case "ms":
        return n;
      default:
        return;
    }
  }
  function fmtShort(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
      return Math.round(ms / d) + "d";
    }
    if (msAbs >= h) {
      return Math.round(ms / h) + "h";
    }
    if (msAbs >= m) {
      return Math.round(ms / m) + "m";
    }
    if (msAbs >= s) {
      return Math.round(ms / s) + "s";
    }
    return ms + "ms";
  }
  function fmtLong(ms) {
    var msAbs = Math.abs(ms);
    if (msAbs >= d) {
      return plural(ms, msAbs, d, "day");
    }
    if (msAbs >= h) {
      return plural(ms, msAbs, h, "hour");
    }
    if (msAbs >= m) {
      return plural(ms, msAbs, m, "minute");
    }
    if (msAbs >= s) {
      return plural(ms, msAbs, s, "second");
    }
    return ms + " ms";
  }
  function plural(ms, msAbs, n, name) {
    var isPlural = msAbs >= n * 1.5;
    return Math.round(ms / n) + " " + name + (isPlural ? "s" : "");
  }
});

// node_modules/debug/src/common.js
var require_common = __commonJS(function(exports, module) {
  function setup(env) {
    createDebug.debug = createDebug;
    createDebug.default = createDebug;
    createDebug.coerce = coerce;
    createDebug.disable = disable;
    createDebug.enable = enable;
    createDebug.enabled = enabled;
    createDebug.humanize = require_ms();
    createDebug.destroy = destroy;
    Object.keys(env).forEach((key) => {
      createDebug[key] = env[key];
    });
    createDebug.names = [];
    createDebug.skips = [];
    createDebug.formatters = {};
    function selectColor(namespace) {
      let hash = 0;
      for (let i = 0;i < namespace.length; i++) {
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0;
      }
      return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    }
    createDebug.selectColor = selectColor;
    function createDebug(namespace) {
      let prevTime;
      let enableOverride = null;
      let namespacesCache;
      let enabledCache;
      function debug(...args) {
        if (!debug.enabled) {
          return;
        }
        const self = debug;
        const curr = Number(new Date);
        const ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;
        args[0] = createDebug.coerce(args[0]);
        if (typeof args[0] !== "string") {
          args.unshift("%O");
        }
        let index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
          if (match === "%%") {
            return "%";
          }
          index++;
          const formatter = createDebug.formatters[format];
          if (typeof formatter === "function") {
            const val = args[index];
            match = formatter.call(self, val);
            args.splice(index, 1);
            index--;
          }
          return match;
        });
        createDebug.formatArgs.call(self, args);
        const logFn = self.log || createDebug.log;
        logFn.apply(self, args);
      }
      debug.namespace = namespace;
      debug.useColors = createDebug.useColors();
      debug.color = createDebug.selectColor(namespace);
      debug.extend = extend;
      debug.destroy = createDebug.destroy;
      Object.defineProperty(debug, "enabled", {
        enumerable: true,
        configurable: false,
        get: () => {
          if (enableOverride !== null) {
            return enableOverride;
          }
          if (namespacesCache !== createDebug.namespaces) {
            namespacesCache = createDebug.namespaces;
            enabledCache = createDebug.enabled(namespace);
          }
          return enabledCache;
        },
        set: (v) => {
          enableOverride = v;
        }
      });
      if (typeof createDebug.init === "function") {
        createDebug.init(debug);
      }
      return debug;
    }
    function extend(namespace, delimiter) {
      const newDebug = createDebug(this.namespace + (typeof delimiter === "undefined" ? ":" : delimiter) + namespace);
      newDebug.log = this.log;
      return newDebug;
    }
    function enable(namespaces) {
      createDebug.save(namespaces);
      createDebug.namespaces = namespaces;
      createDebug.names = [];
      createDebug.skips = [];
      const split = (typeof namespaces === "string" ? namespaces : "").trim().replace(/\s+/g, ",").split(",").filter(Boolean);
      for (const ns of split) {
        if (ns[0] === "-") {
          createDebug.skips.push(ns.slice(1));
        } else {
          createDebug.names.push(ns);
        }
      }
    }
    function matchesTemplate(search, template) {
      let searchIndex = 0;
      let templateIndex = 0;
      let starIndex = -1;
      let matchIndex = 0;
      while (searchIndex < search.length) {
        if (templateIndex < template.length && (template[templateIndex] === search[searchIndex] || template[templateIndex] === "*")) {
          if (template[templateIndex] === "*") {
            starIndex = templateIndex;
            matchIndex = searchIndex;
            templateIndex++;
          } else {
            searchIndex++;
            templateIndex++;
          }
        } else if (starIndex !== -1) {
          templateIndex = starIndex + 1;
          matchIndex++;
          searchIndex = matchIndex;
        } else {
          return false;
        }
      }
      while (templateIndex < template.length && template[templateIndex] === "*") {
        templateIndex++;
      }
      return templateIndex === template.length;
    }
    function disable() {
      const namespaces = [
        ...createDebug.names,
        ...createDebug.skips.map((namespace) => "-" + namespace)
      ].join(",");
      createDebug.enable("");
      return namespaces;
    }
    function enabled(name) {
      for (const skip of createDebug.skips) {
        if (matchesTemplate(name, skip)) {
          return false;
        }
      }
      for (const ns of createDebug.names) {
        if (matchesTemplate(name, ns)) {
          return true;
        }
      }
      return false;
    }
    function coerce(val) {
      if (val instanceof Error) {
        return val.stack || val.message;
      }
      return val;
    }
    function destroy() {
      console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
    }
    createDebug.enable(createDebug.load());
    return createDebug;
  }
  module.exports = setup;
});

// node_modules/debug/src/browser.js
var require_browser = __commonJS(function(exports, module) {
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.storage = localstorage();
  exports.destroy = (() => {
    let warned = false;
    return () => {
      if (!warned) {
        warned = true;
        console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
      }
    };
  })();
  exports.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function useColors() {
    if (typeof window !== "undefined" && window.process && (window.process.type === "renderer" || window.process.__nwjs)) {
      return true;
    }
    if (typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
      return false;
    }
    let m;
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && (m = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(m[1], 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function formatArgs(args) {
    args[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + args[0] + (this.useColors ? "%c " : " ") + "+" + module.exports.humanize(this.diff);
    if (!this.useColors) {
      return;
    }
    const c = "color: " + this.color;
    args.splice(1, 0, c, "color: inherit");
    let index = 0;
    let lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, (match) => {
      if (match === "%%") {
        return;
      }
      index++;
      if (match === "%c") {
        lastC = index;
      }
    });
    args.splice(lastC, 0, c);
  }
  exports.log = console.debug || console.log || (() => {});
  function save(namespaces) {
    try {
      if (namespaces) {
        exports.storage.setItem("debug", namespaces);
      } else {
        exports.storage.removeItem("debug");
      }
    } catch (error) {}
  }
  function load() {
    let r;
    try {
      r = exports.storage.getItem("debug") || exports.storage.getItem("DEBUG");
    } catch (error) {}
    if (!r && typeof process !== "undefined" && "env" in process) {
      r = process.env.DEBUG;
    }
    return r;
  }
  function localstorage() {
    try {
      return localStorage;
    } catch (error) {}
  }
  module.exports = require_common()(exports);
  var { formatters } = module.exports;
  formatters.j = function(v) {
    try {
      return JSON.stringify(v);
    } catch (error) {
      return "[UnexpectedJSONParseError]: " + error.message;
    }
  };
});

// node_modules/debug/src/node.js
var require_node = __commonJS(function(exports, module) {
  var tty = __require("tty");
  var util = __require("util");
  exports.init = init;
  exports.log = log;
  exports.formatArgs = formatArgs;
  exports.save = save;
  exports.load = load;
  exports.useColors = useColors;
  exports.destroy = util.deprecate(() => {}, "Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  exports.colors = [6, 2, 3, 4, 5, 1];
  try {
    const supportsColor = (()=>{throw new Error("Cannot require module "+"supports-color");})();
    if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
      exports.colors = [
        20,
        21,
        26,
        27,
        32,
        33,
        38,
        39,
        40,
        41,
        42,
        43,
        44,
        45,
        56,
        57,
        62,
        63,
        68,
        69,
        74,
        75,
        76,
        77,
        78,
        79,
        80,
        81,
        92,
        93,
        98,
        99,
        112,
        113,
        128,
        129,
        134,
        135,
        148,
        149,
        160,
        161,
        162,
        163,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        171,
        172,
        173,
        178,
        179,
        184,
        185,
        196,
        197,
        198,
        199,
        200,
        201,
        202,
        203,
        204,
        205,
        206,
        207,
        208,
        209,
        214,
        215,
        220,
        221
      ];
    }
  } catch (error) {}
  exports.inspectOpts = Object.keys(process.env).filter((key) => {
    return /^debug_/i.test(key);
  }).reduce((obj, key) => {
    const prop = key.substring(6).toLowerCase().replace(/_([a-z])/g, (_, k) => {
      return k.toUpperCase();
    });
    let val = process.env[key];
    if (/^(yes|on|true|enabled)$/i.test(val)) {
      val = true;
    } else if (/^(no|off|false|disabled)$/i.test(val)) {
      val = false;
    } else if (val === "null") {
      val = null;
    } else {
      val = Number(val);
    }
    obj[prop] = val;
    return obj;
  }, {});
  function useColors() {
    return "colors" in exports.inspectOpts ? Boolean(exports.inspectOpts.colors) : tty.isatty(process.stderr.fd);
  }
  function formatArgs(args) {
    const { namespace: name, useColors } = this;
    if (useColors) {
      const c = this.color;
      const colorCode = "\x1B[3" + (c < 8 ? c : "8;5;" + c);
      const prefix = `  ${colorCode};1m${name} \x1B[0m`;
      args[0] = prefix + args[0].split(`
`).join(`
` + prefix);
      args.push(colorCode + "m+" + module.exports.humanize(this.diff) + "\x1B[0m");
    } else {
      args[0] = getDate() + name + " " + args[0];
    }
  }
  function getDate() {
    if (exports.inspectOpts.hideDate) {
      return "";
    }
    return new Date().toISOString() + " ";
  }
  function log(...args) {
    return process.stderr.write(util.formatWithOptions(exports.inspectOpts, ...args) + `
`);
  }
  function save(namespaces) {
    if (namespaces) {
      process.env.DEBUG = namespaces;
    } else {
      delete process.env.DEBUG;
    }
  }
  function load() {
    return process.env.DEBUG;
  }
  function init(debug) {
    debug.inspectOpts = {};
    const keys = Object.keys(exports.inspectOpts);
    for (let i = 0;i < keys.length; i++) {
      debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    }
  }
  module.exports = require_common()(exports);
  var { formatters } = module.exports;
  formatters.o = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts).split(`
`).map((str) => str.trim()).join(" ");
  };
  formatters.O = function(v) {
    this.inspectOpts.colors = this.useColors;
    return util.inspect(v, this.inspectOpts);
  };
});

// node_modules/debug/src/index.js
var require_src = __commonJS(function(exports, module) {
  if (typeof process === "undefined" || process.type === "renderer" || false || process.__nwjs) {
    module.exports = require_browser();
  } else {
    module.exports = require_node();
  }
});

// node_modules/@tokenizer/inflate/lib/ZipLimitError.js
var ZipLimitError;
var init_ZipLimitError = __esm(() => {
  ZipLimitError = class ZipLimitError extends RangeError {
    constructor(limit, requestedSize, maxSize) {
      super(`ZIP ${limit} exceeded: ${requestedSize} bytes exceeds limit of ${maxSize} bytes`);
      this.limit = limit;
      this.requestedSize = requestedSize;
      this.maxSize = maxSize;
      this.name = "ZipLimitError";
    }
  };
});

// node_modules/@tokenizer/inflate/lib/ZipToken.js
var Signature, DataDescriptor, LocalFileHeaderToken, EndOfCentralDirectoryRecordToken, FileHeader;
var init_ZipToken = __esm(() => {
  init_lib2();
  Signature = {
    LocalFileHeader: 67324752,
    DataDescriptor: 134695760,
    CentralFileHeader: 33639248,
    EndOfCentralDirectory: 101010256
  };
  DataDescriptor = {
    get(array) {
      return {
        signature: UINT32_LE.get(array, 0),
        compressedSize: UINT32_LE.get(array, 8),
        uncompressedSize: UINT32_LE.get(array, 12)
      };
    },
    len: 16
  };
  LocalFileHeaderToken = {
    get(array) {
      const flags = UINT16_LE.get(array, 6);
      return {
        signature: UINT32_LE.get(array, 0),
        minVersion: UINT16_LE.get(array, 4),
        dataDescriptor: !!(flags & 8),
        compressedMethod: UINT16_LE.get(array, 8),
        compressedSize: UINT32_LE.get(array, 18),
        uncompressedSize: UINT32_LE.get(array, 22),
        filenameLength: UINT16_LE.get(array, 26),
        extraFieldLength: UINT16_LE.get(array, 28),
        filename: null
      };
    },
    len: 30
  };
  EndOfCentralDirectoryRecordToken = {
    get(array) {
      return {
        signature: UINT32_LE.get(array, 0),
        nrOfThisDisk: UINT16_LE.get(array, 4),
        nrOfThisDiskWithTheStart: UINT16_LE.get(array, 6),
        nrOfEntriesOnThisDisk: UINT16_LE.get(array, 8),
        nrOfEntriesOfSize: UINT16_LE.get(array, 10),
        sizeOfCd: UINT32_LE.get(array, 12),
        offsetOfStartOfCd: UINT32_LE.get(array, 16),
        zipFileCommentLength: UINT16_LE.get(array, 20)
      };
    },
    len: 22
  };
  FileHeader = {
    get(array) {
      const flags = UINT16_LE.get(array, 8);
      return {
        signature: UINT32_LE.get(array, 0),
        minVersion: UINT16_LE.get(array, 6),
        dataDescriptor: !!(flags & 8),
        compressedMethod: UINT16_LE.get(array, 10),
        compressedSize: UINT32_LE.get(array, 20),
        uncompressedSize: UINT32_LE.get(array, 24),
        filenameLength: UINT16_LE.get(array, 28),
        extraFieldLength: UINT16_LE.get(array, 30),
        fileCommentLength: UINT16_LE.get(array, 32),
        relativeOffsetOfLocalHeader: UINT32_LE.get(array, 42),
        filename: null
      };
    },
    len: 46
  };
});

// node_modules/@tokenizer/inflate/lib/ZipHandler.js
function signatureToArray(signature) {
  const signatureBytes = new Uint8Array(UINT32_LE.len);
  UINT32_LE.put(signatureBytes, 0, signature);
  return signatureBytes;
}

class ZipHandler {
  constructor(tokenizer, options = {}) {
    this.tokenizer = tokenizer;
    this.syncBuffer = new Uint8Array(syncBufferSize);
    this.limits = {
      maxDataDescriptorScanBytes: options.maxDataDescriptorScanBytes ?? Number.POSITIVE_INFINITY,
      maxCompressedSize: options.maxCompressedSize ?? Number.POSITIVE_INFINITY,
      maxUncompressedSize: options.maxUncompressedSize ?? Number.POSITIVE_INFINITY
    };
    for (const [name, limit] of Object.entries(this.limits)) {
      if (limit !== Number.POSITIVE_INFINITY && (!Number.isSafeInteger(limit) || limit <= 0)) {
        throw new RangeError(`${name} must be a positive safe integer or Infinity`);
      }
    }
  }
  checkLimit(limit, size) {
    if (size > this.limits[limit]) {
      throw new ZipLimitError(limit, size, this.limits[limit]);
    }
  }
  checkEntrySize(header) {
    this.checkLimit("maxCompressedSize", header.compressedSize);
    this.checkLimit("maxUncompressedSize", header.uncompressedSize);
    if (header.compressedMethod === 0) {
      this.checkLimit("maxUncompressedSize", header.compressedSize);
    }
  }
  async isZip() {
    return await this.peekSignature() === Signature.LocalFileHeader;
  }
  peekSignature() {
    return this.tokenizer.peekToken(UINT32_LE);
  }
  async findEndOfCentralDirectoryLocator() {
    const randomReadTokenizer = this.tokenizer;
    const chunkLength = Math.min(16 * 1024, randomReadTokenizer.fileInfo.size);
    const buffer = this.syncBuffer.subarray(0, chunkLength);
    await this.tokenizer.readBuffer(buffer, { position: randomReadTokenizer.fileInfo.size - chunkLength });
    for (let i = buffer.length - 4;i >= 0; i--) {
      if (buffer[i] === eocdSignatureBytes[0] && buffer[i + 1] === eocdSignatureBytes[1] && buffer[i + 2] === eocdSignatureBytes[2] && buffer[i + 3] === eocdSignatureBytes[3]) {
        return randomReadTokenizer.fileInfo.size - chunkLength + i;
      }
    }
    return -1;
  }
  async readCentralDirectory() {
    if (!this.tokenizer.supportsRandomAccess()) {
      debug("Cannot reading central-directory without random-read support");
      return;
    }
    debug("Reading central-directory...");
    const pos = this.tokenizer.position;
    try {
      const offset = await this.findEndOfCentralDirectoryLocator();
      if (offset > 0) {
        debug("Central-directory 32-bit signature found");
        const eocdHeader = await this.tokenizer.readToken(EndOfCentralDirectoryRecordToken, offset);
        const files = [];
        this.tokenizer.setPosition(eocdHeader.offsetOfStartOfCd);
        const directory = createTokenizerView(this.tokenizer, eocdHeader.sizeOfCd);
        try {
          for (let n = 0;n < eocdHeader.nrOfEntriesOfSize; ++n) {
            const entry = await directory.readToken(FileHeader);
            if (entry.signature !== Signature.CentralFileHeader) {
              throw new Error("Expected Central-File-Header signature");
            }
            entry.filename = await directory.readToken(new StringType2(entry.filenameLength, "utf-8"));
            await directory.ignore(entry.extraFieldLength);
            await directory.ignore(entry.fileCommentLength);
            files.push(entry);
            debug(`Add central-directory file-entry: n=${n + 1}/${files.length}: filename=${files[n].filename}`);
          }
          return files;
        } finally {
          await directory.close();
        }
      }
    } finally {
      this.tokenizer.setPosition(pos);
    }
  }
  async unzip(fileCb) {
    const entries = await this.readCentralDirectory();
    if (entries) {
      return this.iterateOverCentralDirectory(entries, fileCb);
    }
    let stop = false;
    do {
      const zipHeader = await this.readLocalFileHeader();
      if (!zipHeader) {
        break;
      }
      const next = fileCb(zipHeader);
      stop = !!next.stop;
      let fileData;
      await this.tokenizer.ignore(zipHeader.extraFieldLength);
      if (next.handler) {
        this.checkEntrySize(zipHeader);
      }
      if (zipHeader.dataDescriptor && zipHeader.compressedSize === 0) {
        const chunks = [];
        let totalSize = 0;
        const scanLimit = Math.min(this.limits.maxDataDescriptorScanBytes, next.handler ? this.limits.maxCompressedSize : Number.POSITIVE_INFINITY, next.handler && zipHeader.compressedMethod === 0 ? this.limits.maxUncompressedSize : Number.POSITIVE_INFINITY);
        debug("Compressed-file-size unknown, scanning for next data-descriptor-signature....");
        while (true) {
          const peekLength = Math.min(syncBufferSize, scanLimit - totalSize + ddSignatureArray.length);
          const len = await this.tokenizer.peekBuffer(this.syncBuffer.subarray(0, peekLength), { mayBeLess: true });
          const nextHeaderIndex = indexOf(this.syncBuffer.subarray(0, len), ddSignatureArray);
          if (nextHeaderIndex < 0 && len < ddSignatureArray.length) {
            throw new Error("Expected data-descriptor-signature before end of input");
          }
          const size = nextHeaderIndex >= 0 ? nextHeaderIndex : len - ddSignatureArray.length + 1;
          this.checkLimit("maxDataDescriptorScanBytes", totalSize + size);
          if (next.handler) {
            this.checkLimit("maxCompressedSize", totalSize + size);
            if (zipHeader.compressedMethod === 0) {
              this.checkLimit("maxUncompressedSize", totalSize + size);
            }
            if (size > 0) {
              const data = new Uint8Array(size);
              await this.tokenizer.readBuffer(data);
              chunks.push(data);
            }
          } else {
            await this.tokenizer.ignore(size);
          }
          totalSize += size;
          if (nextHeaderIndex >= 0) {
            break;
          }
        }
        debug(`Found data-descriptor-signature at pos=${this.tokenizer.position}`);
        if (next.handler) {
          this.checkLimit("maxCompressedSize", totalSize);
          await this.inflate(zipHeader, mergeArrays(chunks), next.handler);
        }
      } else {
        if (next.handler) {
          debug(`Reading compressed-file-data: ${zipHeader.compressedSize} bytes`);
          fileData = new Uint8Array(zipHeader.compressedSize);
          await this.tokenizer.readBuffer(fileData);
          await this.inflate(zipHeader, fileData, next.handler);
        } else {
          debug(`Ignoring compressed-file-data: ${zipHeader.compressedSize} bytes`);
          await this.tokenizer.ignore(zipHeader.compressedSize);
        }
      }
      debug(`Reading data-descriptor at pos=${this.tokenizer.position}`);
      if (zipHeader.dataDescriptor) {
        const dataDescriptor = await this.tokenizer.readToken(DataDescriptor);
        if (dataDescriptor.signature !== 134695760) {
          throw new Error(`Expected data-descriptor-signature at position ${this.tokenizer.position - DataDescriptor.len}`);
        }
      }
    } while (!stop);
  }
  async iterateOverCentralDirectory(entries, fileCb) {
    for (const fileHeader of entries) {
      const next = fileCb(fileHeader);
      if (next.handler) {
        this.tokenizer.setPosition(fileHeader.relativeOffsetOfLocalHeader);
        const zipHeader = await this.readLocalFileHeader();
        if (zipHeader) {
          await this.tokenizer.ignore(zipHeader.extraFieldLength);
          this.checkEntrySize(fileHeader);
          this.checkEntrySize(zipHeader);
          const fileData = new Uint8Array(fileHeader.compressedSize);
          await this.tokenizer.readBuffer(fileData);
          await this.inflate(zipHeader, fileData, next.handler);
        }
      }
      if (next.stop) {
        break;
      }
    }
  }
  async inflate(zipHeader, fileData, cb) {
    if (zipHeader.compressedMethod === 0) {
      this.checkLimit("maxUncompressedSize", fileData.length);
      return cb(fileData);
    }
    if (zipHeader.compressedMethod !== 8) {
      throw new Error(`Unsupported ZIP compression method: ${zipHeader.compressedMethod}`);
    }
    debug(`Decompress filename=${zipHeader.filename}, compressed-size=${fileData.length}`);
    const uncompressedData = await this.decompressDeflateRaw(fileData);
    return cb(uncompressedData);
  }
  async decompressDeflateRaw(data) {
    const input = new ReadableStream({
      start(controller) {
        controller.enqueue(data);
        controller.close();
      }
    });
    const ds = new DecompressionStream("deflate-raw");
    const output = input.pipeThrough(ds);
    const reader = output.getReader();
    const chunks = [];
    let totalSize = 0;
    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) {
          break;
        }
        this.checkLimit("maxUncompressedSize", totalSize + value.length);
        totalSize += value.length;
        chunks.push(value);
      }
      this.checkLimit("maxUncompressedSize", totalSize);
      return mergeArrays(chunks);
    } catch (err) {
      await reader.cancel(err).catch(() => {});
      if (err instanceof ZipLimitError) {
        throw err;
      }
      if (err instanceof Error && "code" in err && err.code === "ERR_TRAILING_JUNK_AFTER_STREAM_END") {
        return mergeArrays(chunks);
      }
      const message = err instanceof Error ? `Failed to deflate ZIP entry: ${err.message}` : "Unknown decompression error in ZIP entry";
      throw new TypeError(message);
    } finally {
      reader.releaseLock();
    }
  }
  async readLocalFileHeader() {
    const signature = await this.tokenizer.peekToken(UINT32_LE);
    if (signature === Signature.LocalFileHeader) {
      const header = await this.tokenizer.readToken(LocalFileHeaderToken);
      header.filename = await this.tokenizer.readToken(new StringType2(header.filenameLength, "utf-8"));
      return header;
    }
    if (signature === Signature.CentralFileHeader) {
      return false;
    }
    if (signature === 3759263696) {
      throw new Error("Encrypted ZIP");
    }
    throw new Error("Unexpected signature");
  }
}
function indexOf(buffer, portion) {
  const bufferLength = buffer.length;
  const portionLength = portion.length;
  if (portionLength > bufferLength) {
    return -1;
  }
  for (let i = 0;i <= bufferLength - portionLength; i++) {
    let found = true;
    for (let j = 0;j < portionLength; j++) {
      if (buffer[i + j] !== portion[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      return i;
    }
  }
  return -1;
}
function mergeArrays(chunks) {
  const totalLength = chunks.reduce((acc, curr) => acc + curr.length, 0);
  const mergedArray = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of chunks) {
    mergedArray.set(chunk, offset);
    offset += chunk.length;
  }
  return mergedArray;
}
var import_debug, debug, syncBufferSize, ddSignatureArray, eocdSignatureBytes;
var init_ZipHandler = __esm(() => {
  init_core();
  init_lib2();
  init_ZipLimitError();
  init_ZipToken();
  import_debug = __toESM(require_src(), 1);
  debug = import_debug.default("tokenizer:inflate");
  syncBufferSize = 256 * 1024;
  ddSignatureArray = signatureToArray(Signature.DataDescriptor);
  eocdSignatureBytes = signatureToArray(Signature.EndOfCentralDirectory);
});

// node_modules/@tokenizer/inflate/lib/index.js
var init_lib3 = __esm(() => {
  init_ZipHandler();
  init_ZipLimitError();
});

// node_modules/uint8array-extras/index.js
function isType(value, typeConstructor, typeStringified) {
  if (!value) {
    return false;
  }
  if (value.constructor === typeConstructor) {
    return true;
  }
  return objectToString.call(value) === typeStringified;
}
function isUint8Array(value) {
  return isType(value, Uint8Array, uint8ArrayStringified);
}
function isArrayBuffer(value) {
  return isType(value, ArrayBuffer, arrayBufferStringified);
}
function isUint8ArrayOrArrayBuffer(value) {
  return isUint8Array(value) || isArrayBuffer(value);
}
function toUint8ArrayIfArrayBuffer(value) {
  return isArrayBuffer(value) ? new Uint8Array(value) : value;
}
function assertUint8ArrayOrArrayBuffer(value) {
  if (!isUint8ArrayOrArrayBuffer(value)) {
    throw new TypeError(`Expected \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof value}\``);
  }
}
function concatUint8Arrays(arrays, totalLength) {
  if (arrays.length === 0) {
    return new Uint8Array(0);
  }
  totalLength ??= arrays.reduce((accumulator, currentValue) => accumulator + currentValue.byteLength, 0);
  const returnValue = new Uint8Array(totalLength);
  let offset = 0;
  for (let array of arrays) {
    assertUint8ArrayOrArrayBuffer(array);
    array = toUint8ArrayIfArrayBuffer(array);
    returnValue.set(array, offset);
    offset += array.length;
  }
  return returnValue;
}
function getUintBE(view) {
  const { byteLength } = view;
  if (byteLength === 6) {
    return view.getUint16(0) * 2 ** 32 + view.getUint32(2);
  }
  if (byteLength === 5) {
    return view.getUint8(0) * 2 ** 32 + view.getUint32(1);
  }
  if (byteLength === 4) {
    return view.getUint32(0);
  }
  if (byteLength === 3) {
    return view.getUint8(0) * 2 ** 16 + view.getUint16(1);
  }
  if (byteLength === 2) {
    return view.getUint16(0);
  }
  if (byteLength === 1) {
    return view.getUint8(0);
  }
}
var objectToString, uint8ArrayStringified = "[object Uint8Array]", arrayBufferStringified = "[object ArrayBuffer]", cachedDecoders, cachedEncoder, byteToHexLookupTable;
var init_uint8array_extras = __esm(() => {
  objectToString = Object.prototype.toString;
  cachedDecoders = {
    utf8: new globalThis.TextDecoder("utf8")
  };
  cachedEncoder = new globalThis.TextEncoder;
  byteToHexLookupTable = Array.from({ length: 256 }, (_, index) => index.toString(16).padStart(2, "0"));
});

// node_modules/file-type/source/tokens.js
function stringToBytes(string, encoding) {
  if (encoding === "utf-16le") {
    const bytes = [];
    for (let index = 0;index < string.length; index++) {
      const code = string.charCodeAt(index);
      bytes.push(code & 255, code >> 8 & 255);
    }
    return bytes;
  }
  if (encoding === "utf-16be") {
    const bytes = [];
    for (let index = 0;index < string.length; index++) {
      const code = string.charCodeAt(index);
      bytes.push(code >> 8 & 255, code & 255);
    }
    return bytes;
  }
  return [...string].map((character) => character.charCodeAt(0));
}
function tarHeaderChecksumMatches(arrayBuffer, offset = 0) {
  const readSum = Number.parseInt(new StringType2(6).get(arrayBuffer, 148), 8);
  if (Number.isNaN(readSum)) {
    return false;
  }
  let sum = 8 * 32;
  for (let index = offset;index < offset + 148; index++) {
    sum += arrayBuffer[index];
  }
  for (let index = offset + 156;index < offset + 512; index++) {
    sum += arrayBuffer[index];
  }
  return readSum === sum;
}
var uint32SyncSafeToken;
var init_tokens = __esm(() => {
  init_lib2();
  uint32SyncSafeToken = {
    get: (buffer, offset) => buffer[offset + 3] & 127 | (buffer[offset + 2] & 127) << 7 | (buffer[offset + 1] & 127) << 14 | (buffer[offset] & 127) << 21,
    len: 4
  };
});

// node_modules/file-type/source/supported.js
var extensions, mimeTypes;
var init_supported = __esm(() => {
  extensions = [
    "jpg",
    "png",
    "apng",
    "gif",
    "webp",
    "flif",
    "xcf",
    "cr2",
    "cr3",
    "orf",
    "arw",
    "dng",
    "nef",
    "rw2",
    "raf",
    "tif",
    "bmp",
    "icns",
    "jxr",
    "psd",
    "indd",
    "zip",
    "tar",
    "rar",
    "gz",
    "bz2",
    "7z",
    "dmg",
    "mp4",
    "mid",
    "mkv",
    "webm",
    "mov",
    "avi",
    "mpg",
    "mp2",
    "mp3",
    "m4a",
    "oga",
    "ogg",
    "ogv",
    "opus",
    "flac",
    "wav",
    "spx",
    "amr",
    "pdf",
    "epub",
    "elf",
    "macho",
    "exe",
    "swf",
    "rtf",
    "wasm",
    "woff",
    "woff2",
    "eot",
    "ttf",
    "otf",
    "ttc",
    "ico",
    "flv",
    "ps",
    "xz",
    "sqlite",
    "nes",
    "crx",
    "xpi",
    "cab",
    "deb",
    "ar",
    "rpm",
    "Z",
    "lz",
    "cfb",
    "mxf",
    "mts",
    "blend",
    "bpg",
    "docx",
    "pptx",
    "xlsx",
    "3gp",
    "3g2",
    "j2c",
    "jp2",
    "jpm",
    "jpx",
    "mj2",
    "aif",
    "caf",
    "qcp",
    "odt",
    "ods",
    "odp",
    "xml",
    "mobi",
    "heic",
    "cur",
    "ktx",
    "ape",
    "wv",
    "dcm",
    "ics",
    "glb",
    "pcap",
    "dsf",
    "dff",
    "lnk",
    "alias",
    "voc",
    "ac3",
    "m4v",
    "m4p",
    "m4b",
    "f4v",
    "f4p",
    "f4b",
    "f4a",
    "mie",
    "asf",
    "ogm",
    "ogx",
    "mpc",
    "arrow",
    "shp",
    "aac",
    "mp1",
    "it",
    "s3m",
    "xm",
    "skp",
    "avif",
    "eps",
    "lzh",
    "pgp",
    "asar",
    "stl",
    "chm",
    "3mf",
    "zst",
    "jxl",
    "vcf",
    "jls",
    "pst",
    "dwg",
    "parquet",
    "class",
    "arj",
    "cpio",
    "ace",
    "avro",
    "icc",
    "fbx",
    "vsdx",
    "vtt",
    "apk",
    "drc",
    "lz4",
    "potx",
    "xltx",
    "dotx",
    "xltm",
    "ott",
    "ots",
    "otp",
    "odg",
    "otg",
    "xlsm",
    "docm",
    "dotm",
    "potm",
    "pptm",
    "jar",
    "jmp",
    "rm",
    "sav",
    "ppsm",
    "ppsx",
    "tar.gz",
    "reg",
    "dat",
    "key",
    "numbers",
    "pages",
    "iso"
  ];
  mimeTypes = [
    "image/jpeg",
    "image/png",
    "image/gif",
    "image/webp",
    "image/flif",
    "image/x-xcf",
    "image/x-canon-cr2",
    "image/x-canon-cr3",
    "image/tiff",
    "image/bmp",
    "image/vnd.ms-photo",
    "image/vnd.adobe.photoshop",
    "application/x-indesign",
    "application/epub+zip",
    "application/x-xpinstall",
    "application/vnd.ms-powerpoint.slideshow.macroenabled.12",
    "application/vnd.oasis.opendocument.text",
    "application/vnd.oasis.opendocument.spreadsheet",
    "application/vnd.oasis.opendocument.presentation",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "application/vnd.openxmlformats-officedocument.presentationml.presentation",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "application/vnd.openxmlformats-officedocument.presentationml.slideshow",
    "application/zip",
    "application/x-tar",
    "application/x-rar-compressed",
    "application/gzip",
    "application/x-bzip2",
    "application/x-7z-compressed",
    "application/x-apple-diskimage",
    "application/vnd.apache.arrow.file",
    "video/mp4",
    "audio/midi",
    "video/matroska",
    "video/webm",
    "video/quicktime",
    "video/vnd.avi",
    "audio/wav",
    "audio/qcelp",
    "audio/x-ms-asf",
    "video/x-ms-asf",
    "application/vnd.ms-asf",
    "video/mpeg",
    "video/3gpp",
    "audio/mpeg",
    "audio/mp4",
    "video/ogg",
    "audio/ogg",
    "audio/ogg; codecs=opus",
    "application/ogg",
    "audio/flac",
    "audio/ape",
    "audio/wavpack",
    "audio/amr",
    "application/pdf",
    "application/x-elf",
    "application/x-mach-binary",
    "application/x-msdownload",
    "application/x-shockwave-flash",
    "application/rtf",
    "application/wasm",
    "font/woff",
    "font/woff2",
    "application/vnd.ms-fontobject",
    "font/ttf",
    "font/otf",
    "font/collection",
    "image/x-icon",
    "video/x-flv",
    "application/postscript",
    "application/eps",
    "application/x-xz",
    "application/x-sqlite3",
    "application/x-nintendo-nes-rom",
    "application/x-google-chrome-extension",
    "application/vnd.ms-cab-compressed",
    "application/x-deb",
    "application/x-unix-archive",
    "application/x-rpm",
    "application/x-compress",
    "application/lzip",
    "application/x-cfb",
    "application/x-mie",
    "application/mxf",
    "video/mp2t",
    "application/x-blender",
    "image/bpg",
    "image/j2c",
    "image/jp2",
    "image/jpx",
    "image/jpm",
    "image/mj2",
    "audio/aiff",
    "audio/x-caf",
    "application/xml",
    "application/x-mobipocket-ebook",
    "image/heif",
    "image/heif-sequence",
    "image/heic",
    "image/heic-sequence",
    "image/icns",
    "image/ktx",
    "application/dicom",
    "audio/x-musepack",
    "text/calendar",
    "text/vcard",
    "text/vtt",
    "model/gltf-binary",
    "application/vnd.tcpdump.pcap",
    "audio/x-dsf",
    "audio/x-dff",
    "application/x-ms-shortcut",
    "application/x-ft-apple.alias",
    "audio/x-voc",
    "audio/vnd.dolby.dd-raw",
    "audio/x-m4a",
    "image/apng",
    "image/x-olympus-orf",
    "image/x-sony-arw",
    "image/x-adobe-dng",
    "image/x-nikon-nef",
    "image/x-panasonic-rw2",
    "image/x-fujifilm-raf",
    "video/x-m4v",
    "video/3gpp2",
    "application/x-esri-shape",
    "audio/aac",
    "audio/x-it",
    "audio/x-s3m",
    "audio/x-xm",
    "video/MP1S",
    "video/MP2P",
    "application/vnd.sketchup.skp",
    "image/avif",
    "application/x-lzh-compressed",
    "application/pgp-encrypted",
    "application/x-asar",
    "model/stl",
    "application/vnd.ms-htmlhelp",
    "model/3mf",
    "image/jxl",
    "application/zstd",
    "image/jls",
    "application/vnd.ms-outlook",
    "image/vnd.dwg",
    "application/vnd.apache.parquet",
    "application/java-vm",
    "application/x-arj",
    "application/x-cpio",
    "application/x-ace-compressed",
    "application/avro",
    "application/vnd.iccprofile",
    "application/x-ft-fbx",
    "application/vnd.visio",
    "application/vnd.android.package-archive",
    "application/x-ft-draco",
    "application/x-lz4",
    "application/vnd.openxmlformats-officedocument.presentationml.template",
    "application/vnd.openxmlformats-officedocument.spreadsheetml.template",
    "application/vnd.openxmlformats-officedocument.wordprocessingml.template",
    "application/vnd.ms-excel.template.macroenabled.12",
    "application/vnd.oasis.opendocument.text-template",
    "application/vnd.oasis.opendocument.spreadsheet-template",
    "application/vnd.oasis.opendocument.presentation-template",
    "application/vnd.oasis.opendocument.graphics",
    "application/vnd.oasis.opendocument.graphics-template",
    "application/vnd.ms-excel.sheet.macroenabled.12",
    "application/vnd.ms-word.document.macroenabled.12",
    "application/vnd.ms-word.template.macroenabled.12",
    "application/vnd.ms-powerpoint.template.macroenabled.12",
    "application/vnd.ms-powerpoint.presentation.macroenabled.12",
    "application/java-archive",
    "application/vnd.rn-realmedia",
    "application/x-spss-sav",
    "application/x-ms-regedit",
    "application/x-ft-windows-registry-hive",
    "application/x-jmp-data",
    "application/vnd.apple.keynote",
    "application/vnd.apple.numbers",
    "application/vnd.apple.pages",
    "application/x-iso9660-image"
  ];
});

// node_modules/file-type/source/parser.js
function getSafeBound(value, maximum, reason) {
  if (!Number.isFinite(value) || value < 0 || value > maximum) {
    throw new ParserHardLimitError(`${reason} has invalid size ${value} (maximum ${maximum} bytes)`);
  }
  return value;
}
async function safeIgnore(tokenizer, length, { maximumLength = maximumUntrustedSkipSizeInBytes, reason = "skip" } = {}) {
  const safeLength = getSafeBound(length, maximumLength, reason);
  await tokenizer.ignore(safeLength);
}
async function safeReadBuffer(tokenizer, buffer, options, { maximumLength = buffer.length, reason = "read" } = {}) {
  const length = options?.length ?? buffer.length;
  const safeLength = getSafeBound(length, maximumLength, reason);
  return tokenizer.readBuffer(buffer, {
    ...options,
    length: safeLength
  });
}
function checkBytes(buffer, headers, options) {
  options = {
    offset: 0,
    ...options
  };
  for (const [index, header] of headers.entries()) {
    if (options.mask) {
      if (header !== (options.mask[index] & buffer[index + options.offset])) {
        return false;
      }
    } else if (header !== buffer[index + options.offset]) {
      return false;
    }
  }
  return true;
}
function hasUnknownFileSize(tokenizer) {
  const fileSize = tokenizer.fileInfo.size;
  return !Number.isFinite(fileSize) || fileSize === Number.MAX_SAFE_INTEGER;
}
function hasExceededUnknownSizeScanBudget(tokenizer, startOffset, maximumBytes) {
  return hasUnknownFileSize(tokenizer) && tokenizer.position - startOffset > maximumBytes;
}
var maximumUntrustedSkipSizeInBytes, ParserHardLimitError;
var init_parser = __esm(() => {
  maximumUntrustedSkipSizeInBytes = 16 * 1024 * 1024;
  ParserHardLimitError = class ParserHardLimitError extends Error {
  };
});

// node_modules/file-type/source/detectors/zip.js
function mergeByteChunks(chunks, totalLength) {
  const merged = new Uint8Array(totalLength);
  let offset = 0;
  for (const chunk of chunks) {
    merged.set(chunk, offset);
    offset += chunk.length;
  }
  return merged;
}
function getMaximumZipBufferedReadLength(tokenizer) {
  const fileSize = tokenizer.fileInfo.size;
  const remainingBytes = Number.isFinite(fileSize) ? Math.max(0, fileSize - tokenizer.position) : Number.MAX_SAFE_INTEGER;
  return Math.min(remainingBytes, maximumZipBufferedReadSizeInBytes);
}
function isRecoverableZipError(error) {
  if (error instanceof EndOfStreamError) {
    return true;
  }
  if (error instanceof ParserHardLimitError || error instanceof ZipLimitError) {
    return true;
  }
  if (!(error instanceof Error)) {
    return false;
  }
  if (error instanceof TypeError && error.message.startsWith("Failed to deflate ZIP entry:")) {
    return true;
  }
  if (recoverableZipErrorMessages.has(error.message)) {
    return true;
  }
  if (recoverableZipErrorCodes.has(error.code)) {
    return true;
  }
  for (const prefix of recoverableZipErrorMessagePrefixes) {
    if (error.message.startsWith(prefix)) {
      return true;
    }
  }
  return false;
}
function canReadZipEntryForDetection(zipHeader, maximumSize = maximumZipEntrySizeInBytes) {
  const sizes = [zipHeader.compressedSize, zipHeader.uncompressedSize];
  for (const size of sizes) {
    if (!Number.isFinite(size) || size < 0 || size > maximumSize) {
      return false;
    }
  }
  return true;
}
function createIWorkZipDetectionState() {
  return {
    hasDocumentEntry: false,
    hasMasterSlideEntry: false,
    hasTablesEntry: false,
    hasCalculationEngineEntry: false
  };
}
function updateIWorkZipDetectionStateFromFilename(iWorkState, filename) {
  if (filename === "Index/Document.iwa") {
    iWorkState.hasDocumentEntry = true;
  }
  if (filename.startsWith("Index/MasterSlide")) {
    iWorkState.hasMasterSlideEntry = true;
  }
  if (filename.startsWith("Index/Tables/")) {
    iWorkState.hasTablesEntry = true;
  }
  if (filename === "Index/CalculationEngine.iwa") {
    iWorkState.hasCalculationEngineEntry = true;
  }
}
function getIWorkFileTypeFromZipEntries(iWorkState) {
  if (!iWorkState.hasDocumentEntry) {
    return;
  }
  if (iWorkState.hasMasterSlideEntry) {
    return { ext: "key", mime: "application/vnd.apple.keynote" };
  }
  if (iWorkState.hasTablesEntry) {
    return { ext: "numbers", mime: "application/vnd.apple.numbers" };
  }
  return { ext: "pages", mime: "application/vnd.apple.pages" };
}
function getFileTypeFromMimeType(mimeType) {
  mimeType = mimeType.toLowerCase();
  switch (mimeType) {
    case "application/epub+zip":
      return { ext: "epub", mime: mimeType };
    case "application/vnd.oasis.opendocument.text":
      return { ext: "odt", mime: mimeType };
    case "application/vnd.oasis.opendocument.text-template":
      return { ext: "ott", mime: mimeType };
    case "application/vnd.oasis.opendocument.spreadsheet":
      return { ext: "ods", mime: mimeType };
    case "application/vnd.oasis.opendocument.spreadsheet-template":
      return { ext: "ots", mime: mimeType };
    case "application/vnd.oasis.opendocument.presentation":
      return { ext: "odp", mime: mimeType };
    case "application/vnd.oasis.opendocument.presentation-template":
      return { ext: "otp", mime: mimeType };
    case "application/vnd.oasis.opendocument.graphics":
      return { ext: "odg", mime: mimeType };
    case "application/vnd.oasis.opendocument.graphics-template":
      return { ext: "otg", mime: mimeType };
    case "application/vnd.openxmlformats-officedocument.presentationml.slideshow":
      return { ext: "ppsx", mime: mimeType };
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
      return { ext: "xlsx", mime: mimeType };
    case "application/vnd.ms-excel.sheet.macroenabled":
      return { ext: "xlsm", mime: "application/vnd.ms-excel.sheet.macroenabled.12" };
    case "application/vnd.openxmlformats-officedocument.spreadsheetml.template":
      return { ext: "xltx", mime: mimeType };
    case "application/vnd.ms-excel.template.macroenabled":
      return { ext: "xltm", mime: "application/vnd.ms-excel.template.macroenabled.12" };
    case "application/vnd.ms-powerpoint.slideshow.macroenabled":
      return { ext: "ppsm", mime: "application/vnd.ms-powerpoint.slideshow.macroenabled.12" };
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
      return { ext: "docx", mime: mimeType };
    case "application/vnd.ms-word.document.macroenabled":
      return { ext: "docm", mime: "application/vnd.ms-word.document.macroenabled.12" };
    case "application/vnd.openxmlformats-officedocument.wordprocessingml.template":
      return { ext: "dotx", mime: mimeType };
    case "application/vnd.ms-word.template.macroenabledtemplate":
      return { ext: "dotm", mime: "application/vnd.ms-word.template.macroenabled.12" };
    case "application/vnd.openxmlformats-officedocument.presentationml.template":
      return { ext: "potx", mime: mimeType };
    case "application/vnd.ms-powerpoint.template.macroenabled":
      return { ext: "potm", mime: "application/vnd.ms-powerpoint.template.macroenabled.12" };
    case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
      return { ext: "pptx", mime: mimeType };
    case "application/vnd.ms-powerpoint.presentation.macroenabled":
      return { ext: "pptm", mime: "application/vnd.ms-powerpoint.presentation.macroenabled.12" };
    case "application/vnd.ms-visio.drawing":
      return { ext: "vsdx", mime: "application/vnd.visio" };
    case "application/vnd.ms-package.3dmanufacturing-3dmodel+xml":
      return { ext: "3mf", mime: "model/3mf" };
    default:
  }
}
function createOpenXmlZipDetectionState() {
  return {
    hasContentTypesEntry: false,
    hasParsedContentTypesEntry: false,
    isParsingContentTypes: false,
    hasUnparseableContentTypes: false,
    hasWordDirectory: false,
    hasPresentationDirectory: false,
    hasSpreadsheetDirectory: false,
    hasThreeDimensionalModelEntry: false
  };
}
function updateOpenXmlZipDetectionStateFromFilename(openXmlState, filename) {
  if (filename.startsWith("word/")) {
    openXmlState.hasWordDirectory = true;
  }
  if (filename.startsWith("ppt/")) {
    openXmlState.hasPresentationDirectory = true;
  }
  if (filename.startsWith("xl/")) {
    openXmlState.hasSpreadsheetDirectory = true;
  }
  if (filename.startsWith("3D/") && filename.endsWith(".model")) {
    openXmlState.hasThreeDimensionalModelEntry = true;
  }
}
function getOpenXmlFileTypeFromDirectoryNames(openXmlState) {
  if (openXmlState.hasWordDirectory) {
    return {
      ext: "docx",
      mime: "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    };
  }
  if (openXmlState.hasPresentationDirectory) {
    return {
      ext: "pptx",
      mime: "application/vnd.openxmlformats-officedocument.presentationml.presentation"
    };
  }
  if (openXmlState.hasSpreadsheetDirectory) {
    return {
      ext: "xlsx",
      mime: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    };
  }
  if (openXmlState.hasThreeDimensionalModelEntry) {
    return {
      ext: "3mf",
      mime: "model/3mf"
    };
  }
}
function getOpenXmlFileTypeFromZipEntries(openXmlState) {
  if (!openXmlState.hasContentTypesEntry || openXmlState.hasUnparseableContentTypes || openXmlState.isParsingContentTypes || openXmlState.hasParsedContentTypesEntry) {
    return;
  }
  return getOpenXmlFileTypeFromDirectoryNames(openXmlState);
}
function getOpenXmlMimeTypeFromContentTypesXml(xmlContent) {
  const endPosition = xmlContent.indexOf('.main+xml"');
  if (endPosition === -1) {
    const mimeType = "application/vnd.ms-package.3dmanufacturing-3dmodel+xml";
    if (xmlContent.includes(`ContentType="${mimeType}"`)) {
      return mimeType;
    }
    return;
  }
  const truncatedContent = xmlContent.slice(0, endPosition);
  const firstQuotePosition = truncatedContent.lastIndexOf('"');
  return truncatedContent.slice(firstQuotePosition + 1);
}
function findZipDataDescriptorOffset(buffer, bytesConsumed, { allowTruncated = false } = {}) {
  const lastPossibleDescriptorOffset = buffer.length - (allowTruncated ? 4 : zipDataDescriptorLengthInBytes);
  for (let index = 0;index <= lastPossibleDescriptorOffset; index++) {
    if (UINT32_LE.get(buffer, index) !== zipDataDescriptorSignature) {
      continue;
    }
    if (buffer.length - index < 12) {
      return index;
    }
    if (UINT32_LE.get(buffer, index + 8) === bytesConsumed + index) {
      return index;
    }
  }
  return -1;
}
async function readZipDataDescriptorEntryWithLimit(zipHandler, { shouldBuffer, maximumLength = maximumZipEntrySizeInBytes } = {}) {
  const { syncBuffer } = zipHandler;
  const { length: syncBufferLength } = syncBuffer;
  const chunks = [];
  let bytesConsumed = 0;
  for (;; ) {
    const length = await zipHandler.tokenizer.peekBuffer(syncBuffer, { mayBeLess: true });
    const dataDescriptorOffset = findZipDataDescriptorOffset(syncBuffer.subarray(0, length), bytesConsumed, {
      allowTruncated: length < syncBufferLength
    });
    const retainedLength = dataDescriptorOffset >= 0 ? 0 : length === syncBufferLength ? Math.min(zipDataDescriptorOverlapLengthInBytes, length - 1) : 0;
    const chunkLength = dataDescriptorOffset >= 0 ? dataDescriptorOffset : length - retainedLength;
    if (chunkLength === 0) {
      break;
    }
    bytesConsumed += chunkLength;
    if (bytesConsumed > maximumLength) {
      throw new ParserHardLimitError(`ZIP entry data descriptor not found within ${maximumLength} bytes`);
    }
    if (shouldBuffer) {
      const data = new Uint8Array(chunkLength);
      await zipHandler.tokenizer.readBuffer(data);
      chunks.push(data);
    } else {
      await zipHandler.tokenizer.ignore(chunkLength);
    }
    if (dataDescriptorOffset >= 0) {
      break;
    }
  }
  if (!hasUnknownFileSize(zipHandler.tokenizer)) {
    zipHandler.knownSizeDescriptorScannedBytes += bytesConsumed;
  }
  if (!shouldBuffer) {
    return;
  }
  return mergeByteChunks(chunks, bytesConsumed);
}
function getRemainingZipScanBudget(zipHandler, startOffset) {
  if (hasUnknownFileSize(zipHandler.tokenizer)) {
    return Math.max(0, maximumUntrustedSkipSizeInBytes - (zipHandler.tokenizer.position - startOffset));
  }
  return Math.max(0, maximumZipEntrySizeInBytes - zipHandler.knownSizeDescriptorScannedBytes);
}
async function readZipEntryData(zipHandler, zipHeader, { shouldBuffer, maximumDescriptorLength = maximumZipEntrySizeInBytes } = {}) {
  if (zipHeader.dataDescriptor && zipHeader.compressedSize === 0) {
    return readZipDataDescriptorEntryWithLimit(zipHandler, {
      shouldBuffer,
      maximumLength: maximumDescriptorLength
    });
  }
  if (!shouldBuffer) {
    await safeIgnore(zipHandler.tokenizer, zipHeader.compressedSize, {
      maximumLength: hasUnknownFileSize(zipHandler.tokenizer) ? maximumZipEntrySizeInBytes : zipHandler.tokenizer.fileInfo.size,
      reason: "ZIP entry compressed data"
    });
    return;
  }
  if (zipHeader.compressedSize > maximumZipTextEntrySizeInBytes) {
    throw new ZipLimitError("maxCompressedSize", zipHeader.compressedSize, maximumZipTextEntrySizeInBytes);
  }
  const maximumLength = getMaximumZipBufferedReadLength(zipHandler.tokenizer);
  if (!Number.isFinite(zipHeader.compressedSize) || zipHeader.compressedSize < 0 || zipHeader.compressedSize > maximumLength) {
    throw new Error(`ZIP entry compressed data exceeds ${maximumLength} bytes`);
  }
  const fileData = new Uint8Array(zipHeader.compressedSize);
  await zipHandler.tokenizer.readBuffer(fileData);
  return fileData;
}
async function detectZip(tokenizer) {
  let fileType;
  const openXmlState = createOpenXmlZipDetectionState();
  const iWorkState = createIWorkZipDetectionState();
  try {
    await new DetectionZipHandler(tokenizer, {
      maxUncompressedSize: maximumZipTextEntrySizeInBytes
    }).unzip((zipHeader) => {
      updateOpenXmlZipDetectionStateFromFilename(openXmlState, zipHeader.filename);
      updateIWorkZipDetectionStateFromFilename(iWorkState, zipHeader.filename);
      if (iWorkState.hasDocumentEntry && (iWorkState.hasMasterSlideEntry || iWorkState.hasTablesEntry)) {
        fileType = getIWorkFileTypeFromZipEntries(iWorkState);
        return { stop: true };
      }
      const isOpenXmlContentTypesEntry = zipHeader.filename === "[Content_Types].xml";
      const openXmlFileTypeFromEntries = getOpenXmlFileTypeFromZipEntries(openXmlState);
      if (!isOpenXmlContentTypesEntry && openXmlFileTypeFromEntries) {
        fileType = openXmlFileTypeFromEntries;
        return {
          stop: true
        };
      }
      switch (zipHeader.filename) {
        case "META-INF/mozilla.rsa":
          fileType = {
            ext: "xpi",
            mime: "application/x-xpinstall"
          };
          return {
            stop: true
          };
        case "META-INF/MANIFEST.MF":
          fileType = {
            ext: "jar",
            mime: "application/java-archive"
          };
          return {
            stop: true
          };
        case "mimetype":
          if (!canReadZipEntryForDetection(zipHeader, maximumZipTextEntrySizeInBytes)) {
            return {};
          }
          return {
            async handler(fileData) {
              const mimeType = new TextDecoder("utf-8").decode(fileData).trim();
              fileType = getFileTypeFromMimeType(mimeType);
            },
            stop: true
          };
        case "[Content_Types].xml": {
          openXmlState.hasContentTypesEntry = true;
          if (!canReadZipEntryForDetection(zipHeader, maximumZipTextEntrySizeInBytes)) {
            openXmlState.hasUnparseableContentTypes = true;
            return {};
          }
          openXmlState.isParsingContentTypes = true;
          return {
            async handler(fileData) {
              const xmlContent = new TextDecoder("utf-8").decode(fileData);
              const mimeType = getOpenXmlMimeTypeFromContentTypesXml(xmlContent);
              if (mimeType) {
                fileType = getFileTypeFromMimeType(mimeType);
              }
              openXmlState.hasParsedContentTypesEntry = true;
              openXmlState.isParsingContentTypes = false;
            },
            stop: true
          };
        }
        default:
          if (/classes\d*\.dex/v.test(zipHeader.filename)) {
            fileType = {
              ext: "apk",
              mime: "application/vnd.android.package-archive"
            };
            return { stop: true };
          }
          return {};
      }
    });
  } catch (error) {
    if (!isRecoverableZipError(error)) {
      throw error;
    }
    if (openXmlState.isParsingContentTypes) {
      openXmlState.isParsingContentTypes = false;
      openXmlState.hasUnparseableContentTypes = true;
    }
    if (!fileType && (error instanceof EndOfStreamError || error instanceof ParserHardLimitError) && !openXmlState.hasContentTypesEntry) {
      fileType = getOpenXmlFileTypeFromDirectoryNames(openXmlState);
    }
  }
  const iWorkFileType = hasUnknownFileSize(tokenizer) && iWorkState.hasDocumentEntry && !iWorkState.hasMasterSlideEntry && !iWorkState.hasTablesEntry && !iWorkState.hasCalculationEngineEntry ? undefined : getIWorkFileTypeFromZipEntries(iWorkState);
  return fileType ?? getOpenXmlFileTypeFromZipEntries(openXmlState) ?? iWorkFileType ?? {
    ext: "zip",
    mime: "application/zip"
  };
}
var maximumZipEntrySizeInBytes, maximumZipEntryCount = 1024, maximumZipBufferedReadSizeInBytes, maximumZipTextEntrySizeInBytes, recoverableZipErrorMessages, recoverableZipErrorMessagePrefixes, recoverableZipErrorCodes, zipDataDescriptorSignature = 134695760, zipDataDescriptorLengthInBytes = 16, zipDataDescriptorOverlapLengthInBytes, DetectionZipHandler;
var init_zip = __esm(() => {
  init_lib2();
  init_core();
  init_lib3();
  init_parser();
  maximumZipEntrySizeInBytes = 1024 * 1024;
  maximumZipBufferedReadSizeInBytes = 2 ** 31 - 1;
  maximumZipTextEntrySizeInBytes = maximumZipEntrySizeInBytes;
  recoverableZipErrorMessages = new Set([
    "Unexpected signature",
    "Encrypted ZIP",
    "Expected Central-File-Header signature"
  ]);
  recoverableZipErrorMessagePrefixes = [
    "ZIP entry count exceeds ",
    "Unsupported ZIP compression method:",
    "ZIP entry compressed data exceeds ",
    "ZIP entry decompressed data exceeds ",
    "Expected data-descriptor-signature at position "
  ];
  recoverableZipErrorCodes = new Set([
    "Z_BUF_ERROR",
    "Z_DATA_ERROR",
    "ERR_INVALID_STATE"
  ]);
  zipDataDescriptorOverlapLengthInBytes = zipDataDescriptorLengthInBytes - 1;
  DetectionZipHandler = class DetectionZipHandler extends ZipHandler {
    async unzip(fileCallback) {
      let shouldStop = false;
      let zipEntryCount = 0;
      const zipScanStart = this.tokenizer.position;
      this.knownSizeDescriptorScannedBytes = 0;
      do {
        if (hasExceededUnknownSizeScanBudget(this.tokenizer, zipScanStart, maximumUntrustedSkipSizeInBytes)) {
          throw new ParserHardLimitError(`ZIP stream probing exceeds ${maximumUntrustedSkipSizeInBytes} bytes`);
        }
        const zipHeader = await this.readLocalFileHeader();
        if (!zipHeader) {
          break;
        }
        zipEntryCount++;
        if (zipEntryCount > maximumZipEntryCount) {
          throw new Error(`ZIP entry count exceeds ${maximumZipEntryCount}`);
        }
        const next = fileCallback(zipHeader);
        shouldStop = Boolean(next.stop);
        await this.tokenizer.ignore(zipHeader.extraFieldLength);
        const fileData = await readZipEntryData(this, zipHeader, {
          shouldBuffer: Boolean(next.handler),
          maximumDescriptorLength: Math.min(maximumZipEntrySizeInBytes, getRemainingZipScanBudget(this, zipScanStart))
        });
        if (next.handler) {
          await this.inflate(zipHeader, fileData, next.handler);
        }
        if (zipHeader.dataDescriptor) {
          const dataDescriptor = new Uint8Array(zipDataDescriptorLengthInBytes);
          await this.tokenizer.readBuffer(dataDescriptor);
          if (UINT32_LE.get(dataDescriptor, 0) !== zipDataDescriptorSignature) {
            throw new Error(`Expected data-descriptor-signature at position ${this.tokenizer.position - dataDescriptor.length}`);
          }
        }
        if (hasExceededUnknownSizeScanBudget(this.tokenizer, zipScanStart, maximumUntrustedSkipSizeInBytes)) {
          throw new ParserHardLimitError(`ZIP stream probing exceeds ${maximumUntrustedSkipSizeInBytes} bytes`);
        }
      } while (!shouldStop);
    }
  };
});

// node_modules/file-type/source/detectors/ebml.js
async function detectEbml(tokenizer) {
  async function readField() {
    const msb = await tokenizer.peekNumber(UINT8);
    let mask = 128;
    let ic = 0;
    while (mask !== 0 && (msb & mask) === 0) {
      ++ic;
      mask >>= 1;
    }
    const id = new Uint8Array(ic + 1);
    await safeReadBuffer(tokenizer, id, undefined, {
      maximumLength: id.length,
      reason: "EBML field"
    });
    return id;
  }
  async function readElement() {
    const idField = await readField();
    const lengthField = await readField();
    lengthField[0] ^= 128 >> lengthField.length - 1;
    const nrLength = Math.min(6, lengthField.length);
    const idView = new DataView(idField.buffer);
    const lengthView = new DataView(lengthField.buffer, lengthField.length - nrLength, nrLength);
    return {
      id: getUintBE(idView),
      len: getUintBE(lengthView)
    };
  }
  async function readChildren(children) {
    let ebmlElementCount = 0;
    while (children > 0) {
      ebmlElementCount++;
      if (ebmlElementCount > maximumEbmlElementCount) {
        return;
      }
      if (hasExceededUnknownSizeScanBudget(tokenizer, ebmlScanStart, maximumUntrustedSkipSizeInBytes)) {
        return;
      }
      const previousPosition = tokenizer.position;
      const element = await readElement();
      if (element.id === 17026) {
        if (element.len > maximumEbmlDocumentTypeSizeInBytes) {
          return;
        }
        const documentTypeLength = getSafeBound(element.len, maximumEbmlDocumentTypeSizeInBytes, "EBML DocType");
        const rawValue = await tokenizer.readToken(new StringType2(documentTypeLength));
        return rawValue.split("\x00", 1)[0];
      }
      if (hasUnknownFileSize(tokenizer) && (!Number.isFinite(element.len) || element.len < 0 || element.len > maximumEbmlElementPayloadSizeInBytes)) {
        return;
      }
      await safeIgnore(tokenizer, element.len, {
        maximumLength: hasUnknownFileSize(tokenizer) ? maximumEbmlElementPayloadSizeInBytes : tokenizer.fileInfo.size,
        reason: "EBML payload"
      });
      --children;
      if (tokenizer.position <= previousPosition) {
        return;
      }
    }
  }
  const rootElement = await readElement();
  const ebmlScanStart = tokenizer.position;
  const documentType = await readChildren(rootElement.len);
  switch (documentType) {
    case "webm":
      return {
        ext: "webm",
        mime: "video/webm"
      };
    case "matroska":
      return {
        ext: "mkv",
        mime: "video/matroska"
      };
    default:
  }
}
var maximumEbmlDocumentTypeSizeInBytes = 64, maximumEbmlElementPayloadSizeInBytes, maximumEbmlElementCount = 256;
var init_ebml = __esm(() => {
  init_lib2();
  init_uint8array_extras();
  init_parser();
  maximumEbmlElementPayloadSizeInBytes = 1024 * 1024;
});

// node_modules/file-type/source/detectors/png.js
function isPngAncillaryChunk(type) {
  return (type.codePointAt(0) & 32) !== 0;
}
async function detectPng(tokenizer) {
  const pngFileType = {
    ext: "png",
    mime: "image/png"
  };
  const apngFileType = {
    ext: "apng",
    mime: "image/apng"
  };
  await tokenizer.ignore(8);
  async function readChunkHeader() {
    return {
      length: await tokenizer.readToken(INT32_BE),
      type: await tokenizer.readToken(new StringType2(4, "latin1"))
    };
  }
  const isUnknownPngStream = hasUnknownFileSize(tokenizer);
  const pngScanStart = tokenizer.position;
  let pngChunkCount = 0;
  let hasSeenImageHeader = false;
  do {
    pngChunkCount++;
    if (pngChunkCount > maximumPngChunkCount) {
      break;
    }
    if (hasExceededUnknownSizeScanBudget(tokenizer, pngScanStart, maximumPngStreamScanBudgetInBytes)) {
      break;
    }
    const previousPosition = tokenizer.position;
    const chunk = await readChunkHeader();
    if (chunk.length < 0) {
      return;
    }
    if (chunk.type === "IHDR") {
      if (chunk.length !== 13) {
        return;
      }
      hasSeenImageHeader = true;
    }
    switch (chunk.type) {
      case "IDAT":
        return pngFileType;
      case "acTL":
        return apngFileType;
      default:
        if (!hasSeenImageHeader && chunk.type !== "CgBI") {
          return;
        }
        if (isUnknownPngStream && chunk.length > maximumPngChunkSizeInBytes) {
          return hasSeenImageHeader && isPngAncillaryChunk(chunk.type) ? pngFileType : undefined;
        }
        try {
          await safeIgnore(tokenizer, chunk.length + 4, {
            maximumLength: isUnknownPngStream ? maximumPngChunkSizeInBytes + 4 : tokenizer.fileInfo.size,
            reason: "PNG chunk payload"
          });
        } catch (error) {
          if (!isUnknownPngStream && (error instanceof ParserHardLimitError || error instanceof EndOfStreamError)) {
            return pngFileType;
          }
          throw error;
        }
    }
    if (tokenizer.position <= previousPosition) {
      break;
    }
  } while (tokenizer.position + 8 < tokenizer.fileInfo.size);
  return pngFileType;
}
var maximumPngChunkCount = 512, maximumPngStreamScanBudgetInBytes, maximumPngChunkSizeInBytes;
var init_png = __esm(() => {
  init_lib2();
  init_core();
  init_parser();
  maximumPngStreamScanBudgetInBytes = 16 * 1024 * 1024;
  maximumPngChunkSizeInBytes = 1024 * 1024;
});

// node_modules/file-type/source/detectors/asf.js
async function detectAsf(tokenizer) {
  let isMalformedAsf = false;
  try {
    async function readHeader() {
      const guid = new Uint8Array(16);
      await safeReadBuffer(tokenizer, guid, undefined, {
        maximumLength: guid.length,
        reason: "ASF header GUID"
      });
      return {
        id: guid,
        size: Number(await tokenizer.readToken(UINT64_LE))
      };
    }
    await safeIgnore(tokenizer, 30, {
      maximumLength: 30,
      reason: "ASF header prelude"
    });
    const isUnknownFileSize = hasUnknownFileSize(tokenizer);
    const asfHeaderScanStart = tokenizer.position;
    let asfHeaderObjectCount = 0;
    while (tokenizer.position + 24 < tokenizer.fileInfo.size) {
      asfHeaderObjectCount++;
      if (asfHeaderObjectCount > maximumAsfHeaderObjectCount) {
        break;
      }
      if (hasExceededUnknownSizeScanBudget(tokenizer, asfHeaderScanStart, maximumUntrustedSkipSizeInBytes)) {
        break;
      }
      const previousPosition = tokenizer.position;
      const header = await readHeader();
      let payload = header.size - 24;
      if (!Number.isFinite(payload) || payload < 0) {
        isMalformedAsf = true;
        break;
      }
      if (checkBytes(header.id, [145, 7, 220, 183, 183, 169, 207, 17, 142, 230, 0, 192, 12, 32, 83, 101])) {
        const typeId = new Uint8Array(16);
        payload -= await safeReadBuffer(tokenizer, typeId, undefined, {
          maximumLength: typeId.length,
          reason: "ASF stream type GUID"
        });
        if (checkBytes(typeId, [64, 158, 105, 248, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43])) {
          return {
            ext: "asf",
            mime: "audio/x-ms-asf"
          };
        }
        if (checkBytes(typeId, [192, 239, 25, 188, 77, 91, 207, 17, 168, 253, 0, 128, 95, 92, 68, 43])) {
          return {
            ext: "asf",
            mime: "video/x-ms-asf"
          };
        }
        break;
      }
      if (isUnknownFileSize && payload > maximumAsfHeaderPayloadSizeInBytes) {
        isMalformedAsf = true;
        break;
      }
      await safeIgnore(tokenizer, payload, {
        maximumLength: isUnknownFileSize ? maximumAsfHeaderPayloadSizeInBytes : tokenizer.fileInfo.size,
        reason: "ASF header payload"
      });
      if (tokenizer.position <= previousPosition) {
        isMalformedAsf = true;
        break;
      }
    }
  } catch (error) {
    if (error instanceof EndOfStreamError || error instanceof ParserHardLimitError) {
      if (hasUnknownFileSize(tokenizer)) {
        isMalformedAsf = true;
      }
    } else {
      throw error;
    }
  }
  if (isMalformedAsf) {
    return;
  }
  return {
    ext: "asf",
    mime: "application/vnd.ms-asf"
  };
}
var maximumAsfHeaderObjectCount = 512, maximumAsfHeaderPayloadSizeInBytes;
var init_asf = __esm(() => {
  init_lib2();
  init_core();
  init_parser();
  maximumAsfHeaderPayloadSizeInBytes = 1024 * 1024;
});

// node_modules/file-type/source/index.js
function normalizeSampleSize(sampleSize) {
  if (!Number.isFinite(sampleSize)) {
    return reasonableDetectionSizeInBytes;
  }
  return Math.max(1, Math.trunc(sampleSize));
}
function normalizeMpegOffsetTolerance(mpegOffsetTolerance) {
  if (!Number.isFinite(mpegOffsetTolerance)) {
    return 0;
  }
  return Math.max(0, Math.min(maximumMpegOffsetTolerance, Math.trunc(mpegOffsetTolerance)));
}
function getKnownFileSizeOrMaximum(fileSize) {
  if (!Number.isFinite(fileSize)) {
    return Number.MAX_SAFE_INTEGER;
  }
  return Math.max(0, fileSize);
}
function importAtRuntime(specifier) {
  return import(specifier);
}
function toDefaultStream(stream) {
  return stream.pipeThrough(new TransformStream);
}
function readWithSignal(reader, signal) {
  if (signal === undefined) {
    return reader.read();
  }
  signal.throwIfAborted();
  return Promise.race([
    reader.read(),
    new Promise((_resolve, reject) => {
      signal.addEventListener("abort", () => {
        reject(signal.reason);
        reader.cancel(signal.reason).catch(() => {});
      }, { once: true });
    })
  ]);
}
function createByteLimitedReadableStream(stream, maximumBytes) {
  const reader = stream.getReader();
  let emittedBytes = 0;
  let isSourceDone = false;
  let isSourceCanceled = false;
  const cancelSource = async (reason) => {
    if (isSourceDone || isSourceCanceled) {
      return;
    }
    isSourceCanceled = true;
    await reader.cancel(reason);
  };
  return new ReadableStream({
    async pull(controller) {
      if (emittedBytes >= maximumBytes) {
        controller.close();
        await cancelSource();
        return;
      }
      const { done, value } = await reader.read();
      if (done || !value) {
        isSourceDone = true;
        controller.close();
        return;
      }
      const remainingBytes = maximumBytes - emittedBytes;
      if (value.length > remainingBytes) {
        controller.enqueue(value.subarray(0, remainingBytes));
        emittedBytes += remainingBytes;
        controller.close();
        await cancelSource();
        return;
      }
      controller.enqueue(value);
      emittedBytes += value.length;
    },
    async cancel(reason) {
      await cancelSource(reason);
    }
  });
}
async function fileTypeFromBlob(blob, options) {
  return new FileTypeParser(options).fromBlob(blob);
}

class FileTypeParser {
  buffer;
  tokenizer;
  detectionReentryCount;
  constructor(options) {
    const normalizedMpegOffsetTolerance = normalizeMpegOffsetTolerance(options?.mpegOffsetTolerance);
    const maxBufferSize = options?.maxBufferSize ?? Infinity;
    if (maxBufferSize !== Infinity && (!Number.isSafeInteger(maxBufferSize) || maxBufferSize <= 0)) {
      throw new RangeError("maxBufferSize must be a positive safe integer or Infinity");
    }
    this.options = {
      ...options,
      mpegOffsetTolerance: normalizedMpegOffsetTolerance
    };
    this.detectors = [
      ...this.options.customDetectors ?? [],
      { id: "core", detect: (tokenizer) => this.detectConfident(tokenizer) },
      { id: "core.imprecise", detect: (tokenizer) => this.detectImprecise(tokenizer) }
    ];
    this.tokenizerOptions = {
      abortSignal: this.options.signal,
      maxBufferSize
    };
    this.gzipProbeDepth = 0;
  }
  getTokenizerOptions() {
    return {
      ...this.tokenizerOptions
    };
  }
  createTokenizerFromWebStream(stream) {
    return fromWebStream(toDefaultStream(stream), this.getTokenizerOptions());
  }
  async parseTokenizer(tokenizer, detectionReentryCount = 0) {
    this.detectionReentryCount = detectionReentryCount;
    const initialPosition = tokenizer.position;
    for (const detector of this.detectors) {
      let fileType;
      try {
        fileType = await detector.detect(tokenizer);
      } catch (error) {
        if (error instanceof EndOfStreamError) {
          return;
        }
        if (error instanceof ParserHardLimitError) {
          return;
        }
        throw error;
      }
      if (fileType) {
        return fileType;
      }
      if (initialPosition !== tokenizer.position) {
        return;
      }
    }
  }
  async fromTokenizer(tokenizer) {
    try {
      return await this.parseTokenizer(tokenizer);
    } finally {
      await tokenizer.close();
    }
  }
  async fromBuffer(input) {
    if (!(input instanceof Uint8Array || input instanceof ArrayBuffer)) {
      throw new TypeError(`Expected the \`input\` argument to be of type \`Uint8Array\` or \`ArrayBuffer\`, got \`${typeof input}\``);
    }
    const buffer = input instanceof Uint8Array ? input : new Uint8Array(input);
    if (!(buffer?.length > 1)) {
      return;
    }
    return this.fromTokenizer(fromBuffer(buffer, this.getTokenizerOptions()));
  }
  async fromBlob(blob) {
    this.options.signal?.throwIfAborted();
    const tokenizer = fromBlob(blob, this.getTokenizerOptions());
    return this.fromTokenizer(tokenizer);
  }
  async fromStream(stream) {
    this.options.signal?.throwIfAborted();
    const tokenizer = this.createTokenizerFromWebStream(stream);
    return this.fromTokenizer(tokenizer);
  }
  async fromFile(path) {
    this.options.signal?.throwIfAborted();
    const { fromFile, NotRegularFileError } = await importAtRuntime("strtok3");
    let tokenizer;
    try {
      tokenizer = await fromFile(path, {
        ...this.getTokenizerOptions(),
        regularFileOnly: true
      });
    } catch (error) {
      if (error instanceof NotRegularFileError) {
        return;
      }
      throw error;
    }
    return this.fromTokenizer(tokenizer);
  }
  async toDetectionStream(stream, options) {
    this.options.signal?.throwIfAborted();
    const sampleSize = normalizeSampleSize(options?.sampleSize ?? reasonableDetectionSizeInBytes);
    let detectedFileType;
    let hasStreamEnded = false;
    const reader = stream.getReader();
    const chunks = [];
    let totalSize = 0;
    try {
      while (totalSize < sampleSize) {
        const { value, done } = await readWithSignal(reader, this.options.signal);
        if (done || !value) {
          hasStreamEnded = true;
          break;
        }
        chunks.push(value);
        totalSize += value.length;
      }
      if (!hasStreamEnded && totalSize === sampleSize) {
        const { value, done } = await readWithSignal(reader, this.options.signal);
        if (done || !value) {
          hasStreamEnded = true;
        } else {
          chunks.push(value);
          totalSize += value.length;
        }
      }
    } finally {
      reader.releaseLock();
    }
    if (totalSize > 0) {
      const sample = chunks.length === 1 ? chunks[0] : concatUint8Arrays(chunks);
      try {
        detectedFileType = await this.fromBuffer(sample.subarray(0, sampleSize));
      } catch (error) {
        if (!(error instanceof EndOfStreamError)) {
          throw error;
        }
        detectedFileType = undefined;
      }
      if (!hasStreamEnded && detectedFileType?.ext === "pages") {
        detectedFileType = {
          ext: "zip",
          mime: "application/zip"
        };
      }
    }
    const transformStream = new TransformStream({
      start(controller) {
        for (const chunk of chunks) {
          controller.enqueue(chunk);
        }
      },
      transform(chunk, controller) {
        controller.enqueue(chunk);
      }
    });
    const newStream = stream.pipeThrough(transformStream);
    newStream.fileType = detectedFileType;
    return newStream;
  }
  async detectGzip(tokenizer) {
    if (this.gzipProbeDepth >= maximumNestedGzipProbeDepth) {
      return {
        ext: "gz",
        mime: "application/gzip"
      };
    }
    const gzipHandler = new GzipHandler(tokenizer);
    const limitedInflatedStream = createByteLimitedReadableStream(gzipHandler.inflate(), maximumNestedGzipDetectionSizeInBytes);
    const hasUnknownSize = hasUnknownFileSize(tokenizer);
    let timeout;
    let probeSignal;
    let probeParser;
    let compressedFileType;
    if (hasUnknownSize) {
      const timeoutController = new AbortController;
      timeout = setTimeout(() => {
        timeoutController.abort(new DOMException(`Operation timed out after ${unknownSizeGzipProbeTimeoutInMilliseconds} ms`, "TimeoutError"));
      }, unknownSizeGzipProbeTimeoutInMilliseconds);
      probeSignal = this.options.signal === undefined ? timeoutController.signal : AbortSignal.any([this.options.signal, timeoutController.signal]);
      probeParser = new FileTypeParser({
        ...this.options,
        signal: probeSignal
      });
      probeParser.gzipProbeDepth = this.gzipProbeDepth + 1;
    } else {
      this.gzipProbeDepth++;
    }
    try {
      compressedFileType = await (probeParser ?? this).fromStream(limitedInflatedStream);
    } catch (error) {
      if (error?.name === "AbortError" && probeSignal?.reason?.name !== "TimeoutError") {
        throw error;
      }
    } finally {
      clearTimeout(timeout);
      if (!hasUnknownSize) {
        this.gzipProbeDepth--;
      }
    }
    if (compressedFileType?.ext === "tar") {
      return {
        ext: "tar.gz",
        mime: "application/gzip"
      };
    }
    return {
      ext: "gz",
      mime: "application/gzip"
    };
  }
  check(header, options) {
    return checkBytes(this.buffer, header, options);
  }
  checkString(header, options) {
    return this.check(stringToBytes(header, options?.encoding), options);
  }
  async detectConfident(tokenizer) {
    this.buffer = new Uint8Array(reasonableDetectionSizeInBytes);
    if (tokenizer.fileInfo.size === undefined) {
      tokenizer.fileInfo.size = Number.MAX_SAFE_INTEGER;
    }
    this.tokenizer = tokenizer;
    if (hasUnknownFileSize(tokenizer)) {
      await tokenizer.peekBuffer(this.buffer, { length: 3, mayBeLess: true });
      if (this.check([31, 139, 8])) {
        return this.detectGzip(tokenizer);
      }
    }
    await tokenizer.peekBuffer(this.buffer, { length: 32, mayBeLess: true });
    if (this.check([66, 77])) {
      return {
        ext: "bmp",
        mime: "image/bmp"
      };
    }
    if (this.check([11, 119])) {
      return {
        ext: "ac3",
        mime: "audio/vnd.dolby.dd-raw"
      };
    }
    if (this.check([120, 1])) {
      return {
        ext: "dmg",
        mime: "application/x-apple-diskimage"
      };
    }
    if (this.check([77, 90])) {
      return {
        ext: "exe",
        mime: "application/x-msdownload"
      };
    }
    if (this.check([37, 33])) {
      await tokenizer.peekBuffer(this.buffer, { length: 24, mayBeLess: true });
      if (this.checkString("PS-Adobe-", { offset: 2 }) && this.checkString(" EPSF-", { offset: 14 })) {
        return {
          ext: "eps",
          mime: "application/eps"
        };
      }
      return {
        ext: "ps",
        mime: "application/postscript"
      };
    }
    if (this.check([31, 160]) || this.check([31, 157])) {
      return {
        ext: "Z",
        mime: "application/x-compress"
      };
    }
    if (this.check([199, 113])) {
      return {
        ext: "cpio",
        mime: "application/x-cpio"
      };
    }
    if (this.check([96, 234])) {
      return {
        ext: "arj",
        mime: "application/x-arj"
      };
    }
    if (this.check([239, 187, 191])) {
      if (this.detectionReentryCount >= maximumDetectionReentryCount) {
        return;
      }
      this.detectionReentryCount++;
      await this.tokenizer.ignore(3);
      return this.detectConfident(tokenizer);
    }
    if (this.check([71, 73, 70])) {
      return {
        ext: "gif",
        mime: "image/gif"
      };
    }
    if (this.check([73, 73, 188])) {
      return {
        ext: "jxr",
        mime: "image/vnd.ms-photo"
      };
    }
    if (this.check([31, 139, 8])) {
      return this.detectGzip(tokenizer);
    }
    if (this.check([66, 90, 104])) {
      return {
        ext: "bz2",
        mime: "application/x-bzip2"
      };
    }
    if (this.checkString("ID3")) {
      await safeIgnore(tokenizer, 6, {
        maximumLength: 6,
        reason: "ID3 header prefix"
      });
      const id3HeaderLength = await tokenizer.readToken(uint32SyncSafeToken);
      const isUnknownFileSize = hasUnknownFileSize(tokenizer);
      if (!Number.isFinite(id3HeaderLength) || id3HeaderLength < 0 || isUnknownFileSize && (id3HeaderLength > maximumId3HeaderSizeInBytes || tokenizer.position + id3HeaderLength > maximumId3HeaderSizeInBytes)) {
        return;
      }
      if (tokenizer.position + id3HeaderLength > tokenizer.fileInfo.size) {
        if (isUnknownFileSize) {
          return;
        }
        return {
          ext: "mp3",
          mime: "audio/mpeg"
        };
      }
      try {
        await safeIgnore(tokenizer, id3HeaderLength, {
          maximumLength: isUnknownFileSize ? maximumId3HeaderSizeInBytes : tokenizer.fileInfo.size,
          reason: "ID3 payload"
        });
      } catch (error) {
        if (error instanceof EndOfStreamError) {
          return;
        }
        throw error;
      }
      if (this.detectionReentryCount >= maximumDetectionReentryCount) {
        return;
      }
      this.detectionReentryCount++;
      return this.parseTokenizer(tokenizer, this.detectionReentryCount);
    }
    if (this.checkString("MP+")) {
      return {
        ext: "mpc",
        mime: "audio/x-musepack"
      };
    }
    if ((this.buffer[0] === 67 || this.buffer[0] === 70) && this.check([87, 83], { offset: 1 })) {
      return {
        ext: "swf",
        mime: "application/x-shockwave-flash"
      };
    }
    if (this.check([255, 216, 255])) {
      if (this.check([247], { offset: 3 })) {
        return {
          ext: "jls",
          mime: "image/jls"
        };
      }
      return {
        ext: "jpg",
        mime: "image/jpeg"
      };
    }
    if (this.check([79, 98, 106, 1])) {
      return {
        ext: "avro",
        mime: "application/avro"
      };
    }
    if (this.checkString("FLIF")) {
      return {
        ext: "flif",
        mime: "image/flif"
      };
    }
    if (this.checkString("8BPS")) {
      return {
        ext: "psd",
        mime: "image/vnd.adobe.photoshop"
      };
    }
    if (this.checkString("MPCK")) {
      return {
        ext: "mpc",
        mime: "audio/x-musepack"
      };
    }
    if (this.checkString("FORM")) {
      return {
        ext: "aif",
        mime: "audio/aiff"
      };
    }
    if (this.checkString("caff") && this.check([0, 1], { offset: 4 }) && this.checkString("desc", { offset: 8 })) {
      return {
        ext: "caf",
        mime: "audio/x-caf"
      };
    }
    if (this.checkString("icns", { offset: 0 })) {
      return {
        ext: "icns",
        mime: "image/icns"
      };
    }
    if (this.check([80, 75, 3, 4])) {
      return detectZip(tokenizer);
    }
    if (this.checkString("OggS")) {
      await tokenizer.ignore(28);
      const type = new Uint8Array(8);
      await tokenizer.readBuffer(type);
      if (checkBytes(type, [79, 112, 117, 115, 72, 101, 97, 100])) {
        return {
          ext: "opus",
          mime: "audio/ogg; codecs=opus"
        };
      }
      if (checkBytes(type, [128, 116, 104, 101, 111, 114, 97])) {
        return {
          ext: "ogv",
          mime: "video/ogg"
        };
      }
      if (checkBytes(type, [1, 118, 105, 100, 101, 111, 0])) {
        return {
          ext: "ogm",
          mime: "video/ogg"
        };
      }
      if (checkBytes(type, [127, 70, 76, 65, 67])) {
        return {
          ext: "oga",
          mime: "audio/ogg"
        };
      }
      if (checkBytes(type, [83, 112, 101, 101, 120, 32, 32])) {
        return {
          ext: "spx",
          mime: "audio/ogg"
        };
      }
      if (checkBytes(type, [1, 118, 111, 114, 98, 105, 115])) {
        return {
          ext: "ogg",
          mime: "audio/ogg"
        };
      }
      return {
        ext: "ogx",
        mime: "application/ogg"
      };
    }
    if (this.check([80, 75]) && [3, 5, 7].includes(this.buffer[2]) && [4, 6, 8].includes(this.buffer[3])) {
      return {
        ext: "zip",
        mime: "application/zip"
      };
    }
    if (this.checkString("MThd")) {
      return {
        ext: "mid",
        mime: "audio/midi"
      };
    }
    if (this.checkString("wOFF") && (this.check([0, 1, 0, 0], { offset: 4 }) || this.checkString("OTTO", { offset: 4 }))) {
      return {
        ext: "woff",
        mime: "font/woff"
      };
    }
    if (this.checkString("wOF2") && (this.check([0, 1, 0, 0], { offset: 4 }) || this.checkString("OTTO", { offset: 4 }))) {
      return {
        ext: "woff2",
        mime: "font/woff2"
      };
    }
    if (this.check([212, 195, 178, 161]) || this.check([161, 178, 195, 212])) {
      return {
        ext: "pcap",
        mime: "application/vnd.tcpdump.pcap"
      };
    }
    if (this.checkString("DSD ")) {
      return {
        ext: "dsf",
        mime: "audio/x-dsf"
      };
    }
    if (this.checkString("LZIP")) {
      return {
        ext: "lz",
        mime: "application/lzip"
      };
    }
    if (this.checkString("fLaC")) {
      return {
        ext: "flac",
        mime: "audio/flac"
      };
    }
    if (this.check([66, 80, 71, 251])) {
      return {
        ext: "bpg",
        mime: "image/bpg"
      };
    }
    if (this.checkString("wvpk")) {
      return {
        ext: "wv",
        mime: "audio/wavpack"
      };
    }
    if (this.checkString("%PDF")) {
      return {
        ext: "pdf",
        mime: "application/pdf"
      };
    }
    if (this.check([0, 97, 115, 109])) {
      return {
        ext: "wasm",
        mime: "application/wasm"
      };
    }
    if (this.check([73, 73])) {
      const fileType = await this.readTiffHeader(false);
      if (fileType) {
        return fileType;
      }
    }
    if (this.check([77, 77])) {
      const fileType = await this.readTiffHeader(true);
      if (fileType) {
        return fileType;
      }
    }
    if (this.checkString("MAC ")) {
      return {
        ext: "ape",
        mime: "audio/ape"
      };
    }
    if (this.check([26, 69, 223, 163])) {
      return detectEbml(tokenizer);
    }
    if (this.checkString("SQLi")) {
      return {
        ext: "sqlite",
        mime: "application/x-sqlite3"
      };
    }
    if (this.check([78, 69, 83, 26])) {
      return {
        ext: "nes",
        mime: "application/x-nintendo-nes-rom"
      };
    }
    if (this.checkString("Cr24")) {
      return {
        ext: "crx",
        mime: "application/x-google-chrome-extension"
      };
    }
    if (this.checkString("MSCF") || this.checkString("ISc(")) {
      return {
        ext: "cab",
        mime: "application/vnd.ms-cab-compressed"
      };
    }
    if (this.check([237, 171, 238, 219])) {
      return {
        ext: "rpm",
        mime: "application/x-rpm"
      };
    }
    if (this.check([197, 208, 211, 198])) {
      return {
        ext: "eps",
        mime: "application/eps"
      };
    }
    if (this.check([40, 181, 47, 253])) {
      return {
        ext: "zst",
        mime: "application/zstd"
      };
    }
    if (this.check([127, 69, 76, 70])) {
      return {
        ext: "elf",
        mime: "application/x-elf"
      };
    }
    if (this.check([33, 66, 68, 78])) {
      return {
        ext: "pst",
        mime: "application/vnd.ms-outlook"
      };
    }
    if (this.checkString("PAR1") || this.checkString("PARE")) {
      return {
        ext: "parquet",
        mime: "application/vnd.apache.parquet"
      };
    }
    if (this.checkString("ttcf")) {
      return {
        ext: "ttc",
        mime: "font/collection"
      };
    }
    if (this.check([254, 237, 250, 206]) || this.check([254, 237, 250, 207]) || this.check([206, 250, 237, 254]) || this.check([207, 250, 237, 254])) {
      return {
        ext: "macho",
        mime: "application/x-mach-binary"
      };
    }
    if (this.check([4, 34, 77, 24])) {
      return {
        ext: "lz4",
        mime: "application/x-lz4"
      };
    }
    if (this.checkString("regf")) {
      return {
        ext: "dat",
        mime: "application/x-ft-windows-registry-hive"
      };
    }
    if (this.checkString("$FL2") || this.checkString("$FL3")) {
      return {
        ext: "sav",
        mime: "application/x-spss-sav"
      };
    }
    if (this.check([79, 84, 84, 79, 0])) {
      return {
        ext: "otf",
        mime: "font/otf"
      };
    }
    if (this.checkString("#!AMR")) {
      return {
        ext: "amr",
        mime: "audio/amr"
      };
    }
    if (this.checkString(String.raw`{\rtf`)) {
      return {
        ext: "rtf",
        mime: "application/rtf"
      };
    }
    if (this.check([70, 76, 86, 1])) {
      return {
        ext: "flv",
        mime: "video/x-flv"
      };
    }
    if (this.checkString("IMPM")) {
      return {
        ext: "it",
        mime: "audio/x-it"
      };
    }
    if (this.checkString("-lh0-", { offset: 2 }) || this.checkString("-lh1-", { offset: 2 }) || this.checkString("-lh2-", { offset: 2 }) || this.checkString("-lh3-", { offset: 2 }) || this.checkString("-lh4-", { offset: 2 }) || this.checkString("-lh5-", { offset: 2 }) || this.checkString("-lh6-", { offset: 2 }) || this.checkString("-lh7-", { offset: 2 }) || this.checkString("-lzs-", { offset: 2 }) || this.checkString("-lz4-", { offset: 2 }) || this.checkString("-lz5-", { offset: 2 }) || this.checkString("-lhd-", { offset: 2 })) {
      return {
        ext: "lzh",
        mime: "application/x-lzh-compressed"
      };
    }
    if (this.check([0, 0, 1, 186])) {
      if (this.check([33], { offset: 4, mask: [241] })) {
        return {
          ext: "mpg",
          mime: "video/MP1S"
        };
      }
      if (this.check([68], { offset: 4, mask: [196] })) {
        return {
          ext: "mpg",
          mime: "video/MP2P"
        };
      }
    }
    if (this.checkString("ITSF")) {
      return {
        ext: "chm",
        mime: "application/vnd.ms-htmlhelp"
      };
    }
    if (this.check([202, 254, 186, 190])) {
      const machOArchitectureCount = UINT32_BE.get(this.buffer, 4);
      if (machOArchitectureCount > 0 && machOArchitectureCount <= 30) {
        return {
          ext: "macho",
          mime: "application/x-mach-binary"
        };
      }
      const javaClassFileMajorVersion = UINT16_BE.get(this.buffer, 6);
      if (javaClassFileMajorVersion > 30) {
        return {
          ext: "class",
          mime: "application/java-vm"
        };
      }
    }
    if (this.checkString(".RMF")) {
      return {
        ext: "rm",
        mime: "application/vnd.rn-realmedia"
      };
    }
    if (this.checkString("DRACO")) {
      return {
        ext: "drc",
        mime: "application/x-ft-draco"
      };
    }
    if (this.check([253, 55, 122, 88, 90, 0])) {
      return {
        ext: "xz",
        mime: "application/x-xz"
      };
    }
    if (this.checkString("<?xml ")) {
      return {
        ext: "xml",
        mime: "application/xml"
      };
    }
    if (this.check([55, 122, 188, 175, 39, 28])) {
      return {
        ext: "7z",
        mime: "application/x-7z-compressed"
      };
    }
    if (this.check([82, 97, 114, 33, 26, 7]) && (this.buffer[6] === 0 || this.buffer[6] === 1)) {
      return {
        ext: "rar",
        mime: "application/x-rar-compressed"
      };
    }
    if (this.checkString("solid ")) {
      return {
        ext: "stl",
        mime: "model/stl"
      };
    }
    if (this.checkString("AC")) {
      const version = new StringType2(4, "latin1").get(this.buffer, 2);
      if (/^\d+$/v.test(version) && version >= 1000 && version <= 1050) {
        return {
          ext: "dwg",
          mime: "image/vnd.dwg"
        };
      }
    }
    if (this.checkString("070707")) {
      return {
        ext: "cpio",
        mime: "application/x-cpio"
      };
    }
    if (this.checkString("BLENDER")) {
      return {
        ext: "blend",
        mime: "application/x-blender"
      };
    }
    if (this.checkString("!<arch>")) {
      await tokenizer.ignore(8);
      const string = await tokenizer.readToken(new StringType2(13, "ascii"));
      if (string === "debian-binary") {
        return {
          ext: "deb",
          mime: "application/x-deb"
        };
      }
      return {
        ext: "ar",
        mime: "application/x-unix-archive"
      };
    }
    if (this.checkString("WEBVTT") && [`
`, "\r", "\t", " ", "\x00"].some((char7) => this.checkString(char7, { offset: 6 }))) {
      return {
        ext: "vtt",
        mime: "text/vtt"
      };
    }
    if (this.check([137, 80, 78, 71, 13, 10, 26, 10])) {
      return detectPng(tokenizer);
    }
    if (this.check([65, 82, 82, 79, 87, 49, 0, 0])) {
      return {
        ext: "arrow",
        mime: "application/vnd.apache.arrow.file"
      };
    }
    if (this.check([103, 108, 84, 70, 2, 0, 0, 0])) {
      return {
        ext: "glb",
        mime: "model/gltf-binary"
      };
    }
    if (this.check([102, 114, 101, 101], { offset: 4 }) || this.check([109, 100, 97, 116], { offset: 4 }) || this.check([109, 111, 111, 118], { offset: 4 }) || this.check([119, 105, 100, 101], { offset: 4 })) {
      return {
        ext: "mov",
        mime: "video/quicktime"
      };
    }
    if (this.check([73, 73, 82, 79, 8, 0, 0, 0, 24])) {
      return {
        ext: "orf",
        mime: "image/x-olympus-orf"
      };
    }
    if (this.checkString("gimp xcf ")) {
      return {
        ext: "xcf",
        mime: "image/x-xcf"
      };
    }
    if (this.checkString("ftyp", { offset: 4 }) && (this.buffer[8] & 96) !== 0) {
      const brandMajor = new StringType2(4, "latin1").get(this.buffer, 8).replace("\x00", " ").trim();
      switch (brandMajor) {
        case "avif":
        case "avis":
          return { ext: "avif", mime: "image/avif" };
        case "mif1":
          return { ext: "heic", mime: "image/heif" };
        case "msf1":
          return { ext: "heic", mime: "image/heif-sequence" };
        case "heic":
        case "heix":
          return { ext: "heic", mime: "image/heic" };
        case "hevc":
        case "hevx":
          return { ext: "heic", mime: "image/heic-sequence" };
        case "qt":
          return { ext: "mov", mime: "video/quicktime" };
        case "M4V":
        case "M4VH":
        case "M4VP":
          return { ext: "m4v", mime: "video/x-m4v" };
        case "M4P":
          return { ext: "m4p", mime: "video/mp4" };
        case "M4B":
          return { ext: "m4b", mime: "audio/mp4" };
        case "M4A":
          return { ext: "m4a", mime: "audio/x-m4a" };
        case "F4V":
          return { ext: "f4v", mime: "video/mp4" };
        case "F4P":
          return { ext: "f4p", mime: "video/mp4" };
        case "F4A":
          return { ext: "f4a", mime: "audio/mp4" };
        case "F4B":
          return { ext: "f4b", mime: "audio/mp4" };
        case "crx":
          return { ext: "cr3", mime: "image/x-canon-cr3" };
        default:
          if (brandMajor.startsWith("3g")) {
            if (brandMajor.startsWith("3g2")) {
              return { ext: "3g2", mime: "video/3gpp2" };
            }
            return { ext: "3gp", mime: "video/3gpp" };
          }
          return { ext: "mp4", mime: "video/mp4" };
      }
    }
    if (this.checkString(`REGEDIT4\r
`)) {
      return {
        ext: "reg",
        mime: "application/x-ms-regedit"
      };
    }
    if (this.check([82, 73, 70, 70])) {
      if (this.checkString("WEBP", { offset: 8 })) {
        return {
          ext: "webp",
          mime: "image/webp"
        };
      }
      if (this.check([65, 86, 73], { offset: 8 })) {
        return {
          ext: "avi",
          mime: "video/vnd.avi"
        };
      }
      if (this.check([87, 65, 86, 69], { offset: 8 })) {
        return {
          ext: "wav",
          mime: "audio/wav"
        };
      }
      if (this.check([81, 76, 67, 77], { offset: 8 })) {
        return {
          ext: "qcp",
          mime: "audio/qcelp"
        };
      }
    }
    if (this.check([73, 73, 85, 0, 24, 0, 0, 0, 136, 231, 116, 216])) {
      return {
        ext: "rw2",
        mime: "image/x-panasonic-rw2"
      };
    }
    if (this.check([48, 38, 178, 117, 142, 102, 207, 17, 166, 217])) {
      return detectAsf(tokenizer);
    }
    if (this.check([171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10])) {
      return {
        ext: "ktx",
        mime: "image/ktx"
      };
    }
    if ((this.check([126, 16, 4]) || this.check([126, 24, 4])) && this.check([48, 77, 73, 69], { offset: 4 })) {
      return {
        ext: "mie",
        mime: "application/x-mie"
      };
    }
    if (this.check([39, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], { offset: 2 })) {
      return {
        ext: "shp",
        mime: "application/x-esri-shape"
      };
    }
    if (this.check([255, 79, 255, 81])) {
      return {
        ext: "j2c",
        mime: "image/j2c"
      };
    }
    if (this.check([0, 0, 0, 12, 106, 80, 32, 32, 13, 10, 135, 10])) {
      await tokenizer.ignore(20);
      const type = await tokenizer.readToken(new StringType2(4, "ascii"));
      switch (type) {
        case "jp2 ":
          return {
            ext: "jp2",
            mime: "image/jp2"
          };
        case "jpx ":
          return {
            ext: "jpx",
            mime: "image/jpx"
          };
        case "jpm ":
          return {
            ext: "jpm",
            mime: "image/jpm"
          };
        case "mjp2":
          return {
            ext: "mj2",
            mime: "image/mj2"
          };
        default:
          return;
      }
    }
    if (this.check([255, 10]) || this.check([0, 0, 0, 12, 74, 88, 76, 32, 13, 10, 135, 10])) {
      return {
        ext: "jxl",
        mime: "image/jxl"
      };
    }
    if (this.check([254, 255])) {
      if (this.checkString("<?xml ", { offset: 2, encoding: "utf-16be" })) {
        return {
          ext: "xml",
          mime: "application/xml"
        };
      }
      return;
    }
    if (this.check([208, 207, 17, 224, 161, 177, 26, 225])) {
      return {
        ext: "cfb",
        mime: "application/x-cfb"
      };
    }
    if (this.checkString("FRM8") && this.checkString("DSD ", { offset: 12 })) {
      return {
        ext: "dff",
        mime: "audio/x-dff"
      };
    }
    await tokenizer.peekBuffer(this.buffer, { length: Math.min(256, tokenizer.fileInfo.size), mayBeLess: true });
    if (this.check([97, 99, 115, 112], { offset: 36 })) {
      return {
        ext: "icc",
        mime: "application/vnd.iccprofile"
      };
    }
    if (this.checkString("**ACE", { offset: 7 }) && this.checkString("**", { offset: 12 })) {
      return {
        ext: "ace",
        mime: "application/x-ace-compressed"
      };
    }
    if (this.checkString("BEGIN:")) {
      if (this.checkString("VCARD", { offset: 6 })) {
        return {
          ext: "vcf",
          mime: "text/vcard"
        };
      }
      if (this.checkString("VCALENDAR", { offset: 6 })) {
        return {
          ext: "ics",
          mime: "text/calendar"
        };
      }
    }
    if (this.checkString("FUJIFILMCCD-RAW")) {
      return {
        ext: "raf",
        mime: "image/x-fujifilm-raf"
      };
    }
    if (this.checkString("Extended Module:")) {
      return {
        ext: "xm",
        mime: "audio/x-xm"
      };
    }
    if (this.checkString("Creative Voice File")) {
      return {
        ext: "voc",
        mime: "audio/x-voc"
      };
    }
    if (this.check([4, 0, 0, 0]) && this.buffer.length >= 16) {
      const jsonSize = new DataView(this.buffer.buffer).getUint32(12, true);
      if (jsonSize > 12 && this.buffer.length >= jsonSize + 16) {
        try {
          const header = new TextDecoder().decode(this.buffer.subarray(16, jsonSize + 16));
          const json = JSON.parse(header);
          if (json.files) {
            return {
              ext: "asar",
              mime: "application/x-asar"
            };
          }
        } catch {}
      }
    }
    if (this.check([6, 14, 43, 52, 2, 5, 1, 1, 13, 1, 2, 1, 1, 2])) {
      return {
        ext: "mxf",
        mime: "application/mxf"
      };
    }
    if (this.checkString("SCRM", { offset: 44 })) {
      return {
        ext: "s3m",
        mime: "audio/x-s3m"
      };
    }
    if (this.check([71]) && this.check([71], { offset: 188 })) {
      return {
        ext: "mts",
        mime: "video/mp2t"
      };
    }
    if (this.check([71], { offset: 4 }) && this.check([71], { offset: 196 })) {
      return {
        ext: "mts",
        mime: "video/mp2t"
      };
    }
    if (this.check([66, 79, 79, 75, 77, 79, 66, 73], { offset: 60 })) {
      return {
        ext: "mobi",
        mime: "application/x-mobipocket-ebook"
      };
    }
    if (this.check([68, 73, 67, 77], { offset: 128 })) {
      return {
        ext: "dcm",
        mime: "application/dicom"
      };
    }
    if (this.check([76, 0, 0, 0, 1, 20, 2, 0, 0, 0, 0, 0, 192, 0, 0, 0, 0, 0, 0, 70])) {
      return {
        ext: "lnk",
        mime: "application/x-ms-shortcut"
      };
    }
    if (this.check([98, 111, 111, 107, 0, 0, 0, 0, 109, 97, 114, 107, 0, 0, 0, 0])) {
      return {
        ext: "alias",
        mime: "application/x-ft-apple.alias"
      };
    }
    if (this.checkString("Kaydara FBX Binary  \x00")) {
      return {
        ext: "fbx",
        mime: "application/x-ft-fbx"
      };
    }
    if (this.check([76, 80], { offset: 34 }) && (this.check([0, 0, 1], { offset: 8 }) || this.check([1, 0, 2], { offset: 8 }) || this.check([2, 0, 2], { offset: 8 }))) {
      return {
        ext: "eot",
        mime: "application/vnd.ms-fontobject"
      };
    }
    if (this.check([6, 6, 237, 245, 216, 29, 70, 229, 189, 49, 239, 231, 254, 116, 183, 29])) {
      return {
        ext: "indd",
        mime: "application/x-indesign"
      };
    }
    if (this.check([255, 255, 0, 0, 7, 0, 0, 0, 4, 0, 0, 0, 1, 0, 1, 0]) || this.check([0, 0, 255, 255, 0, 0, 0, 7, 0, 0, 0, 4, 0, 1, 0, 1])) {
      return {
        ext: "jmp",
        mime: "application/x-jmp-data"
      };
    }
    await tokenizer.peekBuffer(this.buffer, { length: Math.min(512, tokenizer.fileInfo.size), mayBeLess: true });
    if (this.checkString("ustar", { offset: 257 }) && (this.checkString("\x00", { offset: 262 }) || this.checkString(" ", { offset: 262 })) || this.check([0, 0, 0, 0, 0, 0], { offset: 257 }) && tarHeaderChecksumMatches(this.buffer)) {
      return {
        ext: "tar",
        mime: "application/x-tar"
      };
    }
    if (this.check([255, 254])) {
      const encoding = "utf-16le";
      if (this.checkString("<?xml ", { offset: 2, encoding })) {
        return {
          ext: "xml",
          mime: "application/xml"
        };
      }
      if (this.check([255, 14], { offset: 2 }) && this.checkString("SketchUp Model", { offset: 4, encoding })) {
        return {
          ext: "skp",
          mime: "application/vnd.sketchup.skp"
        };
      }
      if (this.checkString(`Windows Registry Editor Version 5.00\r
`, { offset: 2, encoding })) {
        return {
          ext: "reg",
          mime: "application/x-ms-regedit"
        };
      }
      return;
    }
    if (this.checkString("-----BEGIN PGP MESSAGE-----")) {
      return {
        ext: "pgp",
        mime: "application/pgp-encrypted"
      };
    }
    const isoStandardIdentifierOffset = 32769;
    const isoStandardIdentifierLength = 5;
    if (tokenizer.supportsRandomAccess() && tokenizer.fileInfo.size >= isoStandardIdentifierOffset + isoStandardIdentifierLength) {
      const isoStandardIdentifier = new Uint8Array(isoStandardIdentifierLength);
      await tokenizer.peekBuffer(isoStandardIdentifier, {
        position: isoStandardIdentifierOffset,
        length: isoStandardIdentifierLength,
        mayBeLess: true
      });
      if (checkBytes(isoStandardIdentifier, stringToBytes("CD001"))) {
        return {
          ext: "iso",
          mime: "application/x-iso9660-image"
        };
      }
    }
  }
  async detectImprecise(tokenizer) {
    this.buffer = new Uint8Array(reasonableDetectionSizeInBytes);
    const fileSize = getKnownFileSizeOrMaximum(tokenizer.fileInfo.size);
    await tokenizer.peekBuffer(this.buffer, { length: Math.min(8, fileSize), mayBeLess: true });
    if (this.check([0, 0, 1, 186]) || this.check([0, 0, 1, 179])) {
      return {
        ext: "mpg",
        mime: "video/mpeg"
      };
    }
    if (this.check([0, 1, 0, 0, 0])) {
      return {
        ext: "ttf",
        mime: "font/ttf"
      };
    }
    if (this.check([0, 0, 1, 0])) {
      return {
        ext: "ico",
        mime: "image/x-icon"
      };
    }
    if (this.check([0, 0, 2, 0])) {
      return {
        ext: "cur",
        mime: "image/x-icon"
      };
    }
    await tokenizer.peekBuffer(this.buffer, { length: Math.min(4 + this.options.mpegOffsetTolerance, fileSize), mayBeLess: true });
    if (this.buffer.length >= 4 + this.options.mpegOffsetTolerance) {
      for (let depth = 0;depth <= this.options.mpegOffsetTolerance; ++depth) {
        const type = this.scanMpeg(depth);
        if (type) {
          return type;
        }
      }
    }
  }
  async readTiffTag(isBigEndian) {
    const tagId = await this.tokenizer.readToken(isBigEndian ? UINT16_BE : UINT16_LE);
    await this.tokenizer.ignore(10);
    switch (tagId) {
      case 50341:
        return {
          ext: "arw",
          mime: "image/x-sony-arw"
        };
      case 50706:
        return {
          ext: "dng",
          mime: "image/x-adobe-dng"
        };
      default:
    }
  }
  async readTiffIFD(isBigEndian) {
    const numberOfTags = await this.tokenizer.readToken(isBigEndian ? UINT16_BE : UINT16_LE);
    if (numberOfTags > maximumTiffTagCount) {
      return;
    }
    if (hasUnknownFileSize(this.tokenizer) && 2 + numberOfTags * 12 > maximumTiffIfdOffsetInBytes) {
      return;
    }
    for (let n = 0;n < numberOfTags; ++n) {
      const fileType = await this.readTiffTag(isBigEndian);
      if (fileType) {
        return fileType;
      }
    }
  }
  async readTiffHeader(isBigEndian) {
    const tiffFileType = {
      ext: "tif",
      mime: "image/tiff"
    };
    const version = (isBigEndian ? UINT16_BE : UINT16_LE).get(this.buffer, 2);
    const ifdOffset = (isBigEndian ? UINT32_BE : UINT32_LE).get(this.buffer, 4);
    if (version === 42) {
      if (ifdOffset >= 6) {
        if (this.checkString("CR", { offset: 8 })) {
          return {
            ext: "cr2",
            mime: "image/x-canon-cr2"
          };
        }
        if (ifdOffset >= 8) {
          const someId1 = (isBigEndian ? UINT16_BE : UINT16_LE).get(this.buffer, 8);
          const someId2 = (isBigEndian ? UINT16_BE : UINT16_LE).get(this.buffer, 10);
          if (someId1 === 28 && someId2 === 254 || someId1 === 31 && someId2 === 11) {
            return {
              ext: "nef",
              mime: "image/x-nikon-nef"
            };
          }
        }
      }
      if (hasUnknownFileSize(this.tokenizer) && ifdOffset > maximumTiffStreamIfdOffsetInBytes) {
        return tiffFileType;
      }
      const maximumTiffOffset = hasUnknownFileSize(this.tokenizer) ? maximumTiffIfdOffsetInBytes : this.tokenizer.fileInfo.size;
      try {
        await safeIgnore(this.tokenizer, ifdOffset, {
          maximumLength: maximumTiffOffset,
          reason: "TIFF IFD offset"
        });
      } catch (error) {
        if (error instanceof EndOfStreamError) {
          return;
        }
        throw error;
      }
      let fileType;
      try {
        fileType = await this.readTiffIFD(isBigEndian);
      } catch (error) {
        if (error instanceof EndOfStreamError) {
          return;
        }
        throw error;
      }
      return fileType ?? tiffFileType;
    }
    if (version === 43) {
      return tiffFileType;
    }
  }
  scanMpeg(offset) {
    if (this.check([255, 224], { offset, mask: [255, 224] })) {
      if (this.check([16], { offset: offset + 1, mask: [22] })) {
        return {
          ext: "aac",
          mime: "audio/aac"
        };
      }
      if (this.check([255, 254], { offset })) {
        return;
      }
      if (this.check([8], { offset: offset + 1, mask: [24] })) {
        return;
      }
      if (this.check([240], { offset: offset + 2, mask: [240] })) {
        return;
      }
      if (this.check([12], { offset: offset + 2, mask: [12] })) {
        return;
      }
      if (this.check([2], { offset: offset + 1, mask: [6] })) {
        return {
          ext: "mp3",
          mime: "audio/mpeg"
        };
      }
      if (this.check([4], { offset: offset + 1, mask: [6] })) {
        return {
          ext: "mp2",
          mime: "audio/mpeg"
        };
      }
      if (this.check([6], { offset: offset + 1, mask: [6] })) {
        return {
          ext: "mp1",
          mime: "audio/mpeg"
        };
      }
    }
  }
}
var reasonableDetectionSizeInBytes = 4100, maximumMpegOffsetTolerance, maximumNestedGzipDetectionSizeInBytes, maximumNestedGzipProbeDepth = 1, unknownSizeGzipProbeTimeoutInMilliseconds = 100, maximumId3HeaderSizeInBytes, maximumTiffTagCount = 512, maximumDetectionReentryCount = 256, maximumTiffStreamIfdOffsetInBytes, maximumTiffIfdOffsetInBytes, supportedExtensions, supportedMimeTypes;
var init_source = __esm(() => {
  init_lib2();
  init_core();
  init_lib3();
  init_uint8array_extras();
  init_tokens();
  init_supported();
  init_parser();
  init_zip();
  init_ebml();
  init_png();
  init_asf();
  maximumMpegOffsetTolerance = reasonableDetectionSizeInBytes - 4;
  maximumNestedGzipDetectionSizeInBytes = maximumUntrustedSkipSizeInBytes;
  maximumId3HeaderSizeInBytes = maximumUntrustedSkipSizeInBytes;
  maximumTiffStreamIfdOffsetInBytes = 1024 * 1024;
  maximumTiffIfdOffsetInBytes = maximumUntrustedSkipSizeInBytes;
  supportedExtensions = new Set(extensions);
  supportedMimeTypes = new Set(mimeTypes);
});

// node_modules/cookie/dist/index.js
var require_dist = __commonJS(function(exports) {
  Object.defineProperty(exports, "__esModule", { value: true });
  exports.parseCookie = parseCookie;
  exports.parse = parseCookie;
  exports.stringifyCookie = stringifyCookie;
  exports.stringifySetCookie = stringifySetCookie;
  exports.serialize = stringifySetCookie;
  exports.parseSetCookie = parseSetCookie;
  exports.stringifySetCookie = stringifySetCookie;
  exports.serialize = stringifySetCookie;
  var cookieNameRegExp = /^[\u0021-\u003A\u003C\u003E-\u007E]+$/;
  var cookieValueRegExp = /^[\u0021-\u003A\u003C-\u007E]*$/;
  var domainValueRegExp = /^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i;
  var pathValueRegExp = /^[\u0020-\u003A\u003D-\u007E]*$/;
  var maxAgeRegExp = /^-?\d+$/;
  var __toString = Object.prototype.toString;
  var NullObject = /* @__PURE__ */ (() => {
    const C = function() {};
    C.prototype = Object.create(null);
    return C;
  })();
  function parseCookie(str, options) {
    const obj = new NullObject;
    const len = str.length;
    if (len < 2)
      return obj;
    const dec = options?.decode || decode;
    let index = 0;
    do {
      const eqIdx = eqIndex(str, index, len);
      if (eqIdx === -1)
        break;
      const endIdx = endIndex(str, index, len);
      if (eqIdx > endIdx) {
        index = str.lastIndexOf(";", eqIdx - 1) + 1;
        continue;
      }
      const key = valueSlice(str, index, eqIdx);
      if (obj[key] === undefined) {
        obj[key] = dec(valueSlice(str, eqIdx + 1, endIdx));
      }
      index = endIdx + 1;
    } while (index < len);
    return obj;
  }
  function stringifyCookie(cookie, options) {
    const enc = options?.encode || encodeURIComponent;
    const cookieStrings = [];
    for (const name of Object.keys(cookie)) {
      const val = cookie[name];
      if (val === undefined)
        continue;
      if (!cookieNameRegExp.test(name)) {
        throw new TypeError(`cookie name is invalid: ${name}`);
      }
      const value = enc(val);
      if (!cookieValueRegExp.test(value)) {
        throw new TypeError(`cookie val is invalid: ${val}`);
      }
      cookieStrings.push(`${name}=${value}`);
    }
    return cookieStrings.join("; ");
  }
  function stringifySetCookie(_name, _val, _opts) {
    const cookie = typeof _name === "object" ? _name : { ..._opts, name: _name, value: String(_val) };
    const options = typeof _val === "object" ? _val : _opts;
    const enc = options?.encode || encodeURIComponent;
    if (!cookieNameRegExp.test(cookie.name)) {
      throw new TypeError(`argument name is invalid: ${cookie.name}`);
    }
    const value = cookie.value ? enc(cookie.value) : "";
    if (!cookieValueRegExp.test(value)) {
      throw new TypeError(`argument val is invalid: ${cookie.value}`);
    }
    let str = cookie.name + "=" + value;
    if (cookie.maxAge !== undefined) {
      if (!Number.isInteger(cookie.maxAge)) {
        throw new TypeError(`option maxAge is invalid: ${cookie.maxAge}`);
      }
      str += "; Max-Age=" + cookie.maxAge;
    }
    if (cookie.domain) {
      if (!domainValueRegExp.test(cookie.domain)) {
        throw new TypeError(`option domain is invalid: ${cookie.domain}`);
      }
      str += "; Domain=" + cookie.domain;
    }
    if (cookie.path) {
      if (!pathValueRegExp.test(cookie.path)) {
        throw new TypeError(`option path is invalid: ${cookie.path}`);
      }
      str += "; Path=" + cookie.path;
    }
    if (cookie.expires) {
      if (!isDate(cookie.expires) || !Number.isFinite(cookie.expires.valueOf())) {
        throw new TypeError(`option expires is invalid: ${cookie.expires}`);
      }
      str += "; Expires=" + cookie.expires.toUTCString();
    }
    if (cookie.httpOnly) {
      str += "; HttpOnly";
    }
    if (cookie.secure) {
      str += "; Secure";
    }
    if (cookie.partitioned) {
      str += "; Partitioned";
    }
    if (cookie.priority) {
      const priority = typeof cookie.priority === "string" ? cookie.priority.toLowerCase() : undefined;
      switch (priority) {
        case "low":
          str += "; Priority=Low";
          break;
        case "medium":
          str += "; Priority=Medium";
          break;
        case "high":
          str += "; Priority=High";
          break;
        default:
          throw new TypeError(`option priority is invalid: ${cookie.priority}`);
      }
    }
    if (cookie.sameSite) {
      const sameSite = typeof cookie.sameSite === "string" ? cookie.sameSite.toLowerCase() : cookie.sameSite;
      switch (sameSite) {
        case true:
        case "strict":
          str += "; SameSite=Strict";
          break;
        case "lax":
          str += "; SameSite=Lax";
          break;
        case "none":
          str += "; SameSite=None";
          break;
        default:
          throw new TypeError(`option sameSite is invalid: ${cookie.sameSite}`);
      }
    }
    return str;
  }
  function parseSetCookie(str, options) {
    const dec = options?.decode || decode;
    const len = str.length;
    const endIdx = endIndex(str, 0, len);
    const eqIdx = eqIndex(str, 0, endIdx);
    const setCookie = eqIdx === -1 ? { name: "", value: dec(valueSlice(str, 0, endIdx)) } : {
      name: valueSlice(str, 0, eqIdx),
      value: dec(valueSlice(str, eqIdx + 1, endIdx))
    };
    let index = endIdx + 1;
    while (index < len) {
      const endIdx = endIndex(str, index, len);
      const eqIdx = eqIndex(str, index, endIdx);
      const attr = eqIdx === -1 ? valueSlice(str, index, endIdx) : valueSlice(str, index, eqIdx);
      const val = eqIdx === -1 ? undefined : valueSlice(str, eqIdx + 1, endIdx);
      switch (attr.toLowerCase()) {
        case "httponly":
          setCookie.httpOnly = true;
          break;
        case "secure":
          setCookie.secure = true;
          break;
        case "partitioned":
          setCookie.partitioned = true;
          break;
        case "domain":
          setCookie.domain = val;
          break;
        case "path":
          setCookie.path = val;
          break;
        case "max-age":
          if (val && maxAgeRegExp.test(val))
            setCookie.maxAge = Number(val);
          break;
        case "expires":
          if (!val)
            break;
          const date = new Date(val);
          if (Number.isFinite(date.valueOf()))
            setCookie.expires = date;
          break;
        case "priority":
          if (!val)
            break;
          const priority = val.toLowerCase();
          if (priority === "low" || priority === "medium" || priority === "high") {
            setCookie.priority = priority;
          }
          break;
        case "samesite":
          if (!val)
            break;
          const sameSite = val.toLowerCase();
          if (sameSite === "lax" || sameSite === "strict" || sameSite === "none") {
            setCookie.sameSite = sameSite;
          }
          break;
      }
      index = endIdx + 1;
    }
    return setCookie;
  }
  function endIndex(str, min, len) {
    const index = str.indexOf(";", min);
    return index === -1 ? len : index;
  }
  function eqIndex(str, min, max) {
    const index = str.indexOf("=", min);
    return index < max ? index : -1;
  }
  function valueSlice(str, min, max) {
    let start = min;
    let end = max;
    do {
      const code = str.charCodeAt(start);
      if (code !== 32 && code !== 9)
        break;
    } while (++start < end);
    while (end > start) {
      const code = str.charCodeAt(end - 1);
      if (code !== 32 && code !== 9)
        break;
      end--;
    }
    return str.slice(start, end);
  }
  function decode(str) {
    if (str.indexOf("%") === -1)
      return str;
    try {
      return decodeURIComponent(str);
    } catch (e) {
      return str;
    }
  }
  function isDate(val) {
    return __toString.call(val) === "[object Date]";
  }
});

// node_modules/@sinclair/typebox/build/esm/type/type/type.mjs
var exports_type3 = {};
__export(exports_type3, {
  Any: () => Any,
  Argument: () => Argument,
  Array: () => Array2,
  AsyncIterator: () => AsyncIterator,
  Awaited: () => Awaited,
  BigInt: () => BigInt2,
  Boolean: () => Boolean2,
  Capitalize: () => Capitalize,
  Composite: () => Composite,
  Const: () => Const,
  Constructor: () => Constructor,
  ConstructorParameters: () => ConstructorParameters,
  Date: () => Date2,
  Enum: () => Enum,
  Exclude: () => Exclude,
  Extends: () => Extends,
  Extract: () => Extract,
  Function: () => Function2,
  Index: () => Index,
  InstanceType: () => InstanceType,
  Instantiate: () => Instantiate,
  Integer: () => Integer,
  Intersect: () => Intersect,
  Iterator: () => Iterator,
  KeyOf: () => KeyOf,
  Literal: () => Literal,
  Lowercase: () => Lowercase,
  Mapped: () => Mapped,
  Module: () => Module,
  Never: () => Never,
  Not: () => Not2,
  Null: () => Null,
  Number: () => Number2,
  Object: () => Object2,
  Omit: () => Omit,
  Optional: () => Optional,
  Parameters: () => Parameters,
  Partial: () => Partial,
  Pick: () => Pick,
  Promise: () => Promise2,
  Readonly: () => Readonly,
  ReadonlyOptional: () => ReadonlyOptional,
  Record: () => Record,
  Recursive: () => Recursive,
  Ref: () => Ref,
  RegExp: () => RegExp2,
  Required: () => Required,
  Rest: () => Rest,
  ReturnType: () => ReturnType,
  String: () => String2,
  Symbol: () => Symbol2,
  TemplateLiteral: () => TemplateLiteral,
  Transform: () => Transform,
  Tuple: () => Tuple,
  Uint8Array: () => Uint8Array2,
  Uncapitalize: () => Uncapitalize,
  Undefined: () => Undefined,
  Union: () => Union,
  Unknown: () => Unknown,
  Unsafe: () => Unsafe,
  Uppercase: () => Uppercase,
  Void: () => Void
});

// node_modules/memoirist/dist/index.mjs
var createNode = (part, inert) => {
  const inertMap = inert?.length ? {} : null;
  if (inertMap)
    for (const child of inert)
      inertMap[child.part.charCodeAt(0)] = child;
  return {
    part,
    store: null,
    inert: inertMap,
    params: null,
    wildcardStore: null
  };
};
var cloneNode = (node, part) => ({
  ...node,
  part
});
var createParamNode = (name) => ({
  name,
  store: null,
  inert: null
});
var Memoirist = class _Memoirist {
  constructor(config = {}) {
    this.config = config;
    if (config.lazy)
      this.find = this.lazyFind;
    if (config.onParam && !Array.isArray(config.onParam))
      this.config.onParam = [
        this.config.onParam
      ];
  }
  root = {};
  history = [];
  deferred = [];
  static regex = {
    static: /:.+?(?=\/|$)/,
    params: /:.+?(?=\/|$)/g,
    optionalParams: /(\/:\w+\?)/g
  };
  lazyFind = (method, url) => {
    if (!this.config.lazy)
      return this.find;
    this.build();
    return this.find(method, url);
  };
  build() {
    if (!this.config.lazy)
      return;
    for (const [method, path, store] of this.deferred)
      this.add(method, path, store, { lazy: false, ignoreHistory: true });
    this.deferred = [];
    this.find = (method, url) => {
      const root = this.root[method];
      if (!root)
        return null;
      return matchRoute(url, url.length, root, 0, this.config.onParam);
    };
  }
  add(method, path, store, {
    ignoreError = false,
    ignoreHistory = false,
    lazy = this.config.lazy
  } = {}) {
    if (lazy) {
      this.find = this.lazyFind;
      this.deferred.push([method, path, store]);
      return store;
    }
    if (typeof path !== "string")
      throw new TypeError("Route path must be a string");
    if (path === "")
      path = "/";
    else if (path[0] !== "/")
      path = `/${path}`;
    const isWildcard = path[path.length - 1] === "*";
    const optionalParams = path.match(_Memoirist.regex.optionalParams);
    if (optionalParams) {
      const originalPath = path.replaceAll("?", "");
      this.add(method, originalPath, store, {
        ignoreError,
        ignoreHistory,
        lazy
      });
      for (let i = 0;i < optionalParams.length; i++) {
        let newPath = path.replace(optionalParams[i], "");
        this.add(method, newPath, store, {
          ignoreError: true,
          ignoreHistory,
          lazy
        });
      }
      return store;
    }
    if (optionalParams)
      path = path.replaceAll("?", "");
    if (this.history.find(([m, p, s]) => m === method && p === path))
      return store;
    if (isWildcard || optionalParams && path.charCodeAt(path.length - 1) === 63)
      path = path.slice(0, -1);
    if (!ignoreHistory)
      this.history.push([method, path, store]);
    const inertParts = path.split(_Memoirist.regex.static);
    const paramParts = path.match(_Memoirist.regex.params) || [];
    if (inertParts[inertParts.length - 1] === "")
      inertParts.pop();
    let node;
    if (!this.root[method])
      node = this.root[method] = createNode("/");
    else
      node = this.root[method];
    let paramPartsIndex = 0;
    for (let i = 0;i < inertParts.length; ++i) {
      let part = inertParts[i];
      if (i > 0) {
        const param = paramParts[paramPartsIndex++].slice(1);
        if (node.params === null)
          node.params = createParamNode(param);
        else if (node.params.name !== param) {
          if (ignoreError)
            return store;
          else
            throw new Error(`Cannot create route "${path}" with parameter "${param}" because a route already exists with a different parameter name ("${node.params.name}") in the same location`);
        }
        const params = node.params;
        if (params.inert === null) {
          node = params.inert = createNode(part);
          continue;
        }
        node = params.inert;
      }
      for (let j = 0;; ) {
        if (j === part.length) {
          if (j < node.part.length) {
            const childNode = cloneNode(node, node.part.slice(j));
            Object.assign(node, createNode(part, [childNode]));
          }
          break;
        }
        if (j === node.part.length) {
          if (node.inert === null)
            node.inert = {};
          const inert = node.inert[part.charCodeAt(j)];
          if (inert) {
            node = inert;
            part = part.slice(j);
            j = 0;
            continue;
          }
          const childNode = createNode(part.slice(j));
          node.inert[part.charCodeAt(j)] = childNode;
          node = childNode;
          break;
        }
        if (part[j] !== node.part[j]) {
          const existingChild = cloneNode(node, node.part.slice(j));
          const newChild = createNode(part.slice(j));
          Object.assign(node, createNode(node.part.slice(0, j), [
            existingChild,
            newChild
          ]));
          node = newChild;
          break;
        }
        ++j;
      }
    }
    if (paramPartsIndex < paramParts.length) {
      const param = paramParts[paramPartsIndex];
      const name = param.slice(1);
      if (node.params === null)
        node.params = createParamNode(name);
      else if (node.params.name !== name) {
        if (ignoreError)
          return store;
        else
          throw new Error(`Cannot create route "${path}" with parameter "${name}" because a route already exists with a different parameter name ("${node.params.name}") in the same location`);
      }
      if (node.params.store === null)
        node.params.store = store;
      return node.params.store;
    }
    if (isWildcard) {
      if (node.wildcardStore === null)
        node.wildcardStore = store;
      return node.wildcardStore;
    }
    if (node.store === null)
      node.store = store;
    return node.store;
  }
  find(method, url) {
    const root = this.root[method];
    if (!root)
      return null;
    return matchRoute(url, url.length, root, 0, this.config.onParam);
  }
};
var matchRoute = (url, urlLength, node, startIndex, onParam) => {
  const part = node.part;
  const length = part.length;
  const endIndex = startIndex + length;
  if (length > 1) {
    if (endIndex > urlLength)
      return null;
    if (length < 15) {
      for (let i = 1, j = startIndex + 1;i < length; ++i, ++j)
        if (part.charCodeAt(i) !== url.charCodeAt(j))
          return null;
    } else if (url.slice(startIndex, endIndex) !== part)
      return null;
  }
  if (endIndex === urlLength) {
    if (node.store !== null)
      return {
        store: node.store,
        params: {}
      };
    if (node.wildcardStore !== null)
      return {
        store: node.wildcardStore,
        params: { "*": "" }
      };
    return null;
  }
  if (node.inert !== null) {
    const inert = node.inert[url.charCodeAt(endIndex)];
    if (inert !== undefined) {
      const route = matchRoute(url, urlLength, inert, endIndex, onParam);
      if (route !== null)
        return route;
    }
  }
  if (node.params !== null) {
    const { store, name, inert } = node.params;
    const slashIndex = url.indexOf("/", endIndex);
    if (slashIndex !== endIndex) {
      if (slashIndex === -1 || slashIndex >= urlLength) {
        if (store !== null) {
          const params = {};
          params[name] = url.substring(endIndex, urlLength);
          if (onParam)
            for (let i = 0;i < onParam.length; i++) {
              let temp = onParam[i](params[name], name);
              if (temp !== undefined)
                params[name] = temp;
            }
          return {
            store,
            params
          };
        }
      } else if (inert !== null) {
        const route = matchRoute(url, urlLength, inert, slashIndex, onParam);
        if (route !== null) {
          route.params[name] = url.substring(endIndex, slashIndex);
          if (onParam)
            for (let i = 0;i < onParam.length; i++) {
              let temp = onParam[i](route.params[name], name);
              if (temp !== undefined)
                route.params[name] = temp;
            }
          return route;
        }
      }
    }
  }
  if (node.wildcardStore !== null)
    return {
      store: node.wildcardStore,
      params: {
        "*": url.substring(endIndex, urlLength)
      }
    };
  return null;
};

// node_modules/@sinclair/typebox/build/esm/type/guard/value.mjs
function IsAsyncIterator(value) {
  return IsObject(value) && !IsArray(value) && !IsUint8Array(value) && Symbol.asyncIterator in value;
}
function IsArray(value) {
  return Array.isArray(value);
}
function IsBigInt(value) {
  return typeof value === "bigint";
}
function IsBoolean(value) {
  return typeof value === "boolean";
}
function IsDate(value) {
  return value instanceof globalThis.Date;
}
function IsFunction(value) {
  return typeof value === "function";
}
function IsIterator(value) {
  return IsObject(value) && !IsArray(value) && !IsUint8Array(value) && Symbol.iterator in value;
}
function IsNull(value) {
  return value === null;
}
function IsNumber(value) {
  return typeof value === "number";
}
function IsObject(value) {
  return typeof value === "object" && value !== null;
}
function IsRegExp(value) {
  return value instanceof globalThis.RegExp;
}
function IsString(value) {
  return typeof value === "string";
}
function IsSymbol(value) {
  return typeof value === "symbol";
}
function IsUint8Array(value) {
  return value instanceof globalThis.Uint8Array;
}
function IsUndefined(value) {
  return value === undefined;
}

// node_modules/@sinclair/typebox/build/esm/type/clone/value.mjs
function ArrayType(value) {
  return value.map((value) => Visit(value));
}
function DateType(value) {
  return new Date(value.getTime());
}
function Uint8ArrayType(value) {
  return new Uint8Array(value);
}
function RegExpType(value) {
  return new RegExp(value.source, value.flags);
}
function ObjectType(value) {
  const result = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    result[key] = Visit(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    result[key] = Visit(value[key]);
  }
  return result;
}
function Visit(value) {
  return IsArray(value) ? ArrayType(value) : IsDate(value) ? DateType(value) : IsUint8Array(value) ? Uint8ArrayType(value) : IsRegExp(value) ? RegExpType(value) : IsObject(value) ? ObjectType(value) : value;
}
function Clone(value) {
  return Visit(value);
}

// node_modules/@sinclair/typebox/build/esm/type/clone/type.mjs
function CloneType(schema, options) {
  return options === undefined ? Clone(schema) : Clone({ ...options, ...schema });
}

// node_modules/@sinclair/typebox/build/esm/value/guard/guard.mjs
function IsAsyncIterator2(value) {
  return IsObject2(value) && globalThis.Symbol.asyncIterator in value;
}
function IsIterator2(value) {
  return IsObject2(value) && globalThis.Symbol.iterator in value;
}
function IsPromise(value) {
  return value instanceof globalThis.Promise;
}
function IsDate2(value) {
  return value instanceof Date && globalThis.Number.isFinite(value.getTime());
}
function IsMap(value) {
  return value instanceof globalThis.Map;
}
function IsSet(value) {
  return value instanceof globalThis.Set;
}
function IsTypedArray(value) {
  return globalThis.ArrayBuffer.isView(value);
}
function IsUint8Array2(value) {
  return value instanceof globalThis.Uint8Array;
}
function HasPropertyKey(value, key) {
  return key in value;
}
function IsObject2(value) {
  return value !== null && typeof value === "object";
}
function IsArray2(value) {
  return globalThis.Array.isArray(value) && !globalThis.ArrayBuffer.isView(value);
}
function IsUndefined2(value) {
  return value === undefined;
}
function IsNull2(value) {
  return value === null;
}
function IsBoolean2(value) {
  return typeof value === "boolean";
}
function IsNumber2(value) {
  return typeof value === "number";
}
function IsInteger(value) {
  return globalThis.Number.isInteger(value);
}
function IsBigInt2(value) {
  return typeof value === "bigint";
}
function IsString2(value) {
  return typeof value === "string";
}
function IsFunction2(value) {
  return typeof value === "function";
}
function IsSymbol2(value) {
  return typeof value === "symbol";
}
function IsValueType(value) {
  return IsBigInt2(value) || IsBoolean2(value) || IsNull2(value) || IsNumber2(value) || IsString2(value) || IsSymbol2(value) || IsUndefined2(value);
}

// node_modules/@sinclair/typebox/build/esm/system/policy.mjs
var TypeSystemPolicy;
(function(TypeSystemPolicy) {
  TypeSystemPolicy.InstanceMode = "default";
  TypeSystemPolicy.ExactOptionalPropertyTypes = false;
  TypeSystemPolicy.AllowArrayObject = false;
  TypeSystemPolicy.AllowNaN = false;
  TypeSystemPolicy.AllowNullVoid = false;
  function IsExactOptionalProperty(value, key) {
    return TypeSystemPolicy.ExactOptionalPropertyTypes ? key in value : value[key] !== undefined;
  }
  TypeSystemPolicy.IsExactOptionalProperty = IsExactOptionalProperty;
  function IsObjectLike(value) {
    const isObject = IsObject2(value);
    return TypeSystemPolicy.AllowArrayObject ? isObject : isObject && !IsArray2(value);
  }
  TypeSystemPolicy.IsObjectLike = IsObjectLike;
  function IsRecordLike(value) {
    return IsObjectLike(value) && !(value instanceof Date) && !(value instanceof Uint8Array);
  }
  TypeSystemPolicy.IsRecordLike = IsRecordLike;
  function IsNumberLike(value) {
    return TypeSystemPolicy.AllowNaN ? IsNumber2(value) : Number.isFinite(value);
  }
  TypeSystemPolicy.IsNumberLike = IsNumberLike;
  function IsVoidLike(value) {
    const isUndefined = IsUndefined2(value);
    return TypeSystemPolicy.AllowNullVoid ? isUndefined || value === null : isUndefined;
  }
  TypeSystemPolicy.IsVoidLike = IsVoidLike;
})(TypeSystemPolicy || (TypeSystemPolicy = {}));

// node_modules/@sinclair/typebox/build/esm/type/create/immutable.mjs
function ImmutableArray(value) {
  return globalThis.Object.freeze(value).map((value) => Immutable(value));
}
function ImmutableDate(value) {
  return value;
}
function ImmutableUint8Array(value) {
  return value;
}
function ImmutableRegExp(value) {
  return value;
}
function ImmutableObject(value) {
  const result = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    result[key] = Immutable(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    result[key] = Immutable(value[key]);
  }
  return globalThis.Object.freeze(result);
}
function Immutable(value) {
  return IsArray(value) ? ImmutableArray(value) : IsDate(value) ? ImmutableDate(value) : IsUint8Array(value) ? ImmutableUint8Array(value) : IsRegExp(value) ? ImmutableRegExp(value) : IsObject(value) ? ImmutableObject(value) : value;
}

// node_modules/@sinclair/typebox/build/esm/type/create/type.mjs
function CreateType(schema, options) {
  const result = options !== undefined ? { ...options, ...schema } : schema;
  switch (TypeSystemPolicy.InstanceMode) {
    case "freeze":
      return Immutable(result);
    case "clone":
      return Clone(result);
    default:
      return result;
  }
}

// node_modules/@sinclair/typebox/build/esm/type/error/error.mjs
class TypeBoxError extends Error {
  constructor(message) {
    super(message);
  }
}

// node_modules/@sinclair/typebox/build/esm/type/symbols/symbols.mjs
var TransformKind = Symbol.for("TypeBox.Transform");
var ReadonlyKind = Symbol.for("TypeBox.Readonly");
var OptionalKind = Symbol.for("TypeBox.Optional");
var Hint = Symbol.for("TypeBox.Hint");
var Kind = Symbol.for("TypeBox.Kind");

// node_modules/@sinclair/typebox/build/esm/type/guard/kind.mjs
function IsReadonly(value) {
  return IsObject(value) && value[ReadonlyKind] === "Readonly";
}
function IsOptional(value) {
  return IsObject(value) && value[OptionalKind] === "Optional";
}
function IsAny(value) {
  return IsKindOf(value, "Any");
}
function IsArgument(value) {
  return IsKindOf(value, "Argument");
}
function IsArray3(value) {
  return IsKindOf(value, "Array");
}
function IsAsyncIterator3(value) {
  return IsKindOf(value, "AsyncIterator");
}
function IsBigInt3(value) {
  return IsKindOf(value, "BigInt");
}
function IsBoolean3(value) {
  return IsKindOf(value, "Boolean");
}
function IsComputed(value) {
  return IsKindOf(value, "Computed");
}
function IsConstructor(value) {
  return IsKindOf(value, "Constructor");
}
function IsDate3(value) {
  return IsKindOf(value, "Date");
}
function IsFunction3(value) {
  return IsKindOf(value, "Function");
}
function IsInteger2(value) {
  return IsKindOf(value, "Integer");
}
function IsIntersect(value) {
  return IsKindOf(value, "Intersect");
}
function IsIterator3(value) {
  return IsKindOf(value, "Iterator");
}
function IsKindOf(value, kind) {
  return IsObject(value) && Kind in value && value[Kind] === kind;
}
function IsLiteralValue(value) {
  return IsBoolean(value) || IsNumber(value) || IsString(value);
}
function IsLiteral(value) {
  return IsKindOf(value, "Literal");
}
function IsMappedKey(value) {
  return IsKindOf(value, "MappedKey");
}
function IsMappedResult(value) {
  return IsKindOf(value, "MappedResult");
}
function IsNever(value) {
  return IsKindOf(value, "Never");
}
function IsNot(value) {
  return IsKindOf(value, "Not");
}
function IsNull3(value) {
  return IsKindOf(value, "Null");
}
function IsNumber3(value) {
  return IsKindOf(value, "Number");
}
function IsObject3(value) {
  return IsKindOf(value, "Object");
}
function IsPromise2(value) {
  return IsKindOf(value, "Promise");
}
function IsRecord(value) {
  return IsKindOf(value, "Record");
}
function IsRef(value) {
  return IsKindOf(value, "Ref");
}
function IsRegExp2(value) {
  return IsKindOf(value, "RegExp");
}
function IsString3(value) {
  return IsKindOf(value, "String");
}
function IsSymbol3(value) {
  return IsKindOf(value, "Symbol");
}
function IsTemplateLiteral(value) {
  return IsKindOf(value, "TemplateLiteral");
}
function IsThis(value) {
  return IsKindOf(value, "This");
}
function IsTransform(value) {
  return IsObject(value) && TransformKind in value;
}
function IsTuple(value) {
  return IsKindOf(value, "Tuple");
}
function IsUndefined3(value) {
  return IsKindOf(value, "Undefined");
}
function IsUnion(value) {
  return IsKindOf(value, "Union");
}
function IsUint8Array3(value) {
  return IsKindOf(value, "Uint8Array");
}
function IsUnknown(value) {
  return IsKindOf(value, "Unknown");
}
function IsUnsafe(value) {
  return IsKindOf(value, "Unsafe");
}
function IsVoid(value) {
  return IsKindOf(value, "Void");
}
function IsKind(value) {
  return IsObject(value) && Kind in value && IsString(value[Kind]);
}
function IsSchema(value) {
  return IsAny(value) || IsArgument(value) || IsArray3(value) || IsBoolean3(value) || IsBigInt3(value) || IsAsyncIterator3(value) || IsComputed(value) || IsConstructor(value) || IsDate3(value) || IsFunction3(value) || IsInteger2(value) || IsIntersect(value) || IsIterator3(value) || IsLiteral(value) || IsMappedKey(value) || IsMappedResult(value) || IsNever(value) || IsNot(value) || IsNull3(value) || IsNumber3(value) || IsObject3(value) || IsPromise2(value) || IsRecord(value) || IsRef(value) || IsRegExp2(value) || IsString3(value) || IsSymbol3(value) || IsTemplateLiteral(value) || IsThis(value) || IsTuple(value) || IsUndefined3(value) || IsUnion(value) || IsUint8Array3(value) || IsUnknown(value) || IsUnsafe(value) || IsVoid(value) || IsKind(value);
}
// node_modules/@sinclair/typebox/build/esm/type/guard/type.mjs
var KnownTypes = [
  "Argument",
  "Any",
  "Array",
  "AsyncIterator",
  "BigInt",
  "Boolean",
  "Computed",
  "Constructor",
  "Date",
  "Enum",
  "Function",
  "Integer",
  "Intersect",
  "Iterator",
  "Literal",
  "MappedKey",
  "MappedResult",
  "Not",
  "Null",
  "Number",
  "Object",
  "Promise",
  "Record",
  "Ref",
  "RegExp",
  "String",
  "Symbol",
  "TemplateLiteral",
  "This",
  "Tuple",
  "Undefined",
  "Union",
  "Uint8Array",
  "Unknown",
  "Void"
];
function IsPattern(value) {
  try {
    new RegExp(value);
    return true;
  } catch {
    return false;
  }
}
function IsControlCharacterFree(value) {
  if (!IsString(value))
    return false;
  for (let i = 0;i < value.length; i++) {
    const code = value.charCodeAt(i);
    if (code >= 7 && code <= 13 || code === 27 || code === 127) {
      return false;
    }
  }
  return true;
}
function IsAdditionalProperties(value) {
  return IsOptionalBoolean(value) || IsSchema2(value);
}
function IsOptionalBigInt(value) {
  return IsUndefined(value) || IsBigInt(value);
}
function IsOptionalNumber(value) {
  return IsUndefined(value) || IsNumber(value);
}
function IsOptionalBoolean(value) {
  return IsUndefined(value) || IsBoolean(value);
}
function IsOptionalString(value) {
  return IsUndefined(value) || IsString(value);
}
function IsOptionalPattern(value) {
  return IsUndefined(value) || IsString(value) && IsControlCharacterFree(value) && IsPattern(value);
}
function IsOptionalFormat(value) {
  return IsUndefined(value) || IsString(value) && IsControlCharacterFree(value);
}
function IsOptionalSchema(value) {
  return IsUndefined(value) || IsSchema2(value);
}
function IsOptional2(value) {
  return IsObject(value) && value[OptionalKind] === "Optional";
}
function IsAny2(value) {
  return IsKindOf2(value, "Any") && IsOptionalString(value.$id);
}
function IsArgument2(value) {
  return IsKindOf2(value, "Argument") && IsNumber(value.index);
}
function IsArray4(value) {
  return IsKindOf2(value, "Array") && value.type === "array" && IsOptionalString(value.$id) && IsSchema2(value.items) && IsOptionalNumber(value.minItems) && IsOptionalNumber(value.maxItems) && IsOptionalBoolean(value.uniqueItems) && IsOptionalSchema(value.contains) && IsOptionalNumber(value.minContains) && IsOptionalNumber(value.maxContains);
}
function IsAsyncIterator4(value) {
  return IsKindOf2(value, "AsyncIterator") && value.type === "AsyncIterator" && IsOptionalString(value.$id) && IsSchema2(value.items);
}
function IsBigInt4(value) {
  return IsKindOf2(value, "BigInt") && value.type === "bigint" && IsOptionalString(value.$id) && IsOptionalBigInt(value.exclusiveMaximum) && IsOptionalBigInt(value.exclusiveMinimum) && IsOptionalBigInt(value.maximum) && IsOptionalBigInt(value.minimum) && IsOptionalBigInt(value.multipleOf);
}
function IsBoolean4(value) {
  return IsKindOf2(value, "Boolean") && value.type === "boolean" && IsOptionalString(value.$id);
}
function IsComputed2(value) {
  return IsKindOf2(value, "Computed") && IsString(value.target) && IsArray(value.parameters) && value.parameters.every((schema) => IsSchema2(schema));
}
function IsConstructor2(value) {
  return IsKindOf2(value, "Constructor") && value.type === "Constructor" && IsOptionalString(value.$id) && IsArray(value.parameters) && value.parameters.every((schema) => IsSchema2(schema)) && IsSchema2(value.returns);
}
function IsDate4(value) {
  return IsKindOf2(value, "Date") && value.type === "Date" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximumTimestamp) && IsOptionalNumber(value.exclusiveMinimumTimestamp) && IsOptionalNumber(value.maximumTimestamp) && IsOptionalNumber(value.minimumTimestamp) && IsOptionalNumber(value.multipleOfTimestamp);
}
function IsFunction4(value) {
  return IsKindOf2(value, "Function") && value.type === "Function" && IsOptionalString(value.$id) && IsArray(value.parameters) && value.parameters.every((schema) => IsSchema2(schema)) && IsSchema2(value.returns);
}
function IsInteger3(value) {
  return IsKindOf2(value, "Integer") && value.type === "integer" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
function IsProperties(value) {
  return IsObject(value) && Object.entries(value).every(([key, schema]) => IsControlCharacterFree(key) && IsSchema2(schema));
}
function IsIntersect2(value) {
  return IsKindOf2(value, "Intersect") && (IsString(value.type) && value.type !== "object" ? false : true) && IsArray(value.allOf) && value.allOf.every((schema) => IsSchema2(schema) && !IsTransform2(schema)) && IsOptionalString(value.type) && (IsOptionalBoolean(value.unevaluatedProperties) || IsOptionalSchema(value.unevaluatedProperties)) && IsOptionalString(value.$id);
}
function IsIterator4(value) {
  return IsKindOf2(value, "Iterator") && value.type === "Iterator" && IsOptionalString(value.$id) && IsSchema2(value.items);
}
function IsKindOf2(value, kind) {
  return IsObject(value) && Kind in value && value[Kind] === kind;
}
function IsLiteralString(value) {
  return IsLiteral2(value) && IsString(value.const);
}
function IsLiteralNumber(value) {
  return IsLiteral2(value) && IsNumber(value.const);
}
function IsLiteralBoolean(value) {
  return IsLiteral2(value) && IsBoolean(value.const);
}
function IsLiteral2(value) {
  return IsKindOf2(value, "Literal") && IsOptionalString(value.$id) && IsLiteralValue2(value.const);
}
function IsLiteralValue2(value) {
  return IsBoolean(value) || IsNumber(value) || IsString(value);
}
function IsMappedKey2(value) {
  return IsKindOf2(value, "MappedKey") && IsArray(value.keys) && value.keys.every((key) => IsNumber(key) || IsString(key));
}
function IsMappedResult2(value) {
  return IsKindOf2(value, "MappedResult") && IsProperties(value.properties);
}
function IsNever2(value) {
  return IsKindOf2(value, "Never") && IsObject(value.not) && Object.getOwnPropertyNames(value.not).length === 0;
}
function IsNot2(value) {
  return IsKindOf2(value, "Not") && IsSchema2(value.not);
}
function IsNull4(value) {
  return IsKindOf2(value, "Null") && value.type === "null" && IsOptionalString(value.$id);
}
function IsNumber4(value) {
  return IsKindOf2(value, "Number") && value.type === "number" && IsOptionalString(value.$id) && IsOptionalNumber(value.exclusiveMaximum) && IsOptionalNumber(value.exclusiveMinimum) && IsOptionalNumber(value.maximum) && IsOptionalNumber(value.minimum) && IsOptionalNumber(value.multipleOf);
}
function IsObject4(value) {
  return IsKindOf2(value, "Object") && value.type === "object" && IsOptionalString(value.$id) && IsProperties(value.properties) && IsAdditionalProperties(value.additionalProperties) && IsOptionalNumber(value.minProperties) && IsOptionalNumber(value.maxProperties);
}
function IsPromise3(value) {
  return IsKindOf2(value, "Promise") && value.type === "Promise" && IsOptionalString(value.$id) && IsSchema2(value.item);
}
function IsRecord2(value) {
  return IsKindOf2(value, "Record") && value.type === "object" && IsOptionalString(value.$id) && IsAdditionalProperties(value.additionalProperties) && IsObject(value.patternProperties) && ((schema) => {
    const keys = Object.getOwnPropertyNames(schema.patternProperties);
    return keys.length === 1 && IsPattern(keys[0]) && IsObject(schema.patternProperties) && IsSchema2(schema.patternProperties[keys[0]]);
  })(value);
}
function IsRef2(value) {
  return IsKindOf2(value, "Ref") && IsOptionalString(value.$id) && IsString(value.$ref);
}
function IsRegExp3(value) {
  return IsKindOf2(value, "RegExp") && IsOptionalString(value.$id) && IsString(value.source) && IsString(value.flags) && IsOptionalNumber(value.maxLength) && IsOptionalNumber(value.minLength);
}
function IsString4(value) {
  return IsKindOf2(value, "String") && value.type === "string" && IsOptionalString(value.$id) && IsOptionalNumber(value.minLength) && IsOptionalNumber(value.maxLength) && IsOptionalPattern(value.pattern) && IsOptionalFormat(value.format);
}
function IsSymbol4(value) {
  return IsKindOf2(value, "Symbol") && value.type === "symbol" && IsOptionalString(value.$id);
}
function IsTemplateLiteral2(value) {
  return IsKindOf2(value, "TemplateLiteral") && value.type === "string" && IsString(value.pattern) && value.pattern[0] === "^" && value.pattern[value.pattern.length - 1] === "$";
}
function IsThis2(value) {
  return IsKindOf2(value, "This") && IsOptionalString(value.$id) && IsString(value.$ref);
}
function IsTransform2(value) {
  return IsObject(value) && TransformKind in value;
}
function IsTuple2(value) {
  return IsKindOf2(value, "Tuple") && value.type === "array" && IsOptionalString(value.$id) && IsNumber(value.minItems) && IsNumber(value.maxItems) && value.minItems === value.maxItems && (IsUndefined(value.items) && IsUndefined(value.additionalItems) && value.minItems === 0 || IsArray(value.items) && value.items.every((schema) => IsSchema2(schema)));
}
function IsUndefined4(value) {
  return IsKindOf2(value, "Undefined") && value.type === "undefined" && IsOptionalString(value.$id);
}
function IsUnion2(value) {
  return IsKindOf2(value, "Union") && IsOptionalString(value.$id) && IsObject(value) && IsArray(value.anyOf) && value.anyOf.every((schema) => IsSchema2(schema));
}
function IsUint8Array4(value) {
  return IsKindOf2(value, "Uint8Array") && value.type === "Uint8Array" && IsOptionalString(value.$id) && IsOptionalNumber(value.minByteLength) && IsOptionalNumber(value.maxByteLength);
}
function IsUnknown2(value) {
  return IsKindOf2(value, "Unknown") && IsOptionalString(value.$id);
}
function IsUnsafe2(value) {
  return IsKindOf2(value, "Unsafe");
}
function IsVoid2(value) {
  return IsKindOf2(value, "Void") && value.type === "void" && IsOptionalString(value.$id);
}
function IsKind2(value) {
  return IsObject(value) && Kind in value && IsString(value[Kind]) && !KnownTypes.includes(value[Kind]);
}
function IsSchema2(value) {
  return IsObject(value) && (IsAny2(value) || IsArgument2(value) || IsArray4(value) || IsBoolean4(value) || IsBigInt4(value) || IsAsyncIterator4(value) || IsComputed2(value) || IsConstructor2(value) || IsDate4(value) || IsFunction4(value) || IsInteger3(value) || IsIntersect2(value) || IsIterator4(value) || IsLiteral2(value) || IsMappedKey2(value) || IsMappedResult2(value) || IsNever2(value) || IsNot2(value) || IsNull4(value) || IsNumber4(value) || IsObject4(value) || IsPromise3(value) || IsRecord2(value) || IsRef2(value) || IsRegExp3(value) || IsString4(value) || IsSymbol4(value) || IsTemplateLiteral2(value) || IsThis2(value) || IsTuple2(value) || IsUndefined4(value) || IsUnion2(value) || IsUint8Array4(value) || IsUnknown2(value) || IsUnsafe2(value) || IsVoid2(value) || IsKind2(value));
}
// node_modules/@sinclair/typebox/build/esm/type/patterns/patterns.mjs
var PatternBoolean = "(true|false)";
var PatternNumber = "(0|[1-9][0-9]*)";
var PatternString = "(.*)";
var PatternNever = "(?!.*)";
var PatternBooleanExact = `^${PatternBoolean}$`;
var PatternNumberExact = `^${PatternNumber}$`;
var PatternStringExact = `^${PatternString}$`;
var PatternNeverExact = `^${PatternNever}$`;

// node_modules/@sinclair/typebox/build/esm/type/registry/format.mjs
var map = new Map;
function Has(format) {
  return map.has(format);
}
function Set2(format, func) {
  map.set(format, func);
}
function Get(format) {
  return map.get(format);
}
// node_modules/@sinclair/typebox/build/esm/type/registry/type.mjs
var map2 = new Map;
function Has2(kind) {
  return map2.has(kind);
}
function Set3(kind, func) {
  map2.set(kind, func);
}
function Get2(kind) {
  return map2.get(kind);
}
// node_modules/@sinclair/typebox/build/esm/type/sets/set.mjs
function SetIncludes(T, S) {
  return T.includes(S);
}
function SetDistinct(T) {
  return [...new Set(T)];
}
function SetIntersect(T, S) {
  return T.filter((L) => S.includes(L));
}
function SetIntersectManyResolve(T, Init) {
  return T.reduce((Acc, L) => {
    return SetIntersect(Acc, L);
  }, Init);
}
function SetIntersectMany(T) {
  return T.length === 1 ? T[0] : T.length > 1 ? SetIntersectManyResolve(T.slice(1), T[0]) : [];
}
function SetUnionMany(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...L);
  return Acc;
}

// node_modules/@sinclair/typebox/build/esm/type/any/any.mjs
function Any(options) {
  return CreateType({ [Kind]: "Any" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/array/array.mjs
function Array2(items, options) {
  return CreateType({ [Kind]: "Array", type: "array", items }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/argument/argument.mjs
function Argument(index) {
  return CreateType({ [Kind]: "Argument", index });
}

// node_modules/@sinclair/typebox/build/esm/type/async-iterator/async-iterator.mjs
function AsyncIterator(items, options) {
  return CreateType({ [Kind]: "AsyncIterator", type: "AsyncIterator", items }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/computed/computed.mjs
function Computed(target, parameters, options) {
  return CreateType({ [Kind]: "Computed", target, parameters }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/discard/discard.mjs
function DiscardKey(value, key) {
  const { [key]: _, ...rest } = value;
  return rest;
}
function Discard(value, keys) {
  return keys.reduce((acc, key) => DiscardKey(acc, key), value);
}

// node_modules/@sinclair/typebox/build/esm/type/never/never.mjs
function Never(options) {
  return CreateType({ [Kind]: "Never", not: {} }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/mapped/mapped-result.mjs
function MappedResult(properties) {
  return CreateType({
    [Kind]: "MappedResult",
    properties
  });
}

// node_modules/@sinclair/typebox/build/esm/type/constructor/constructor.mjs
function Constructor(parameters, returns, options) {
  return CreateType({ [Kind]: "Constructor", type: "Constructor", parameters, returns }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/function/function.mjs
function Function2(parameters, returns, options) {
  return CreateType({ [Kind]: "Function", type: "Function", parameters, returns }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/union/union-create.mjs
function UnionCreate(T, options) {
  return CreateType({ [Kind]: "Union", anyOf: T }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/union/union-evaluated.mjs
function IsUnionOptional(types) {
  return types.some((type) => IsOptional(type));
}
function RemoveOptionalFromRest(types) {
  return types.map((left) => IsOptional(left) ? RemoveOptionalFromType(left) : left);
}
function RemoveOptionalFromType(T) {
  return Discard(T, [OptionalKind]);
}
function ResolveUnion(types, options) {
  const isOptional = IsUnionOptional(types);
  return isOptional ? Optional(UnionCreate(RemoveOptionalFromRest(types), options)) : UnionCreate(RemoveOptionalFromRest(types), options);
}
function UnionEvaluated(T, options) {
  return T.length === 1 ? CreateType(T[0], options) : T.length === 0 ? Never(options) : ResolveUnion(T, options);
}

// node_modules/@sinclair/typebox/build/esm/type/union/union.mjs
function Union(types, options) {
  return types.length === 0 ? Never(options) : types.length === 1 ? CreateType(types[0], options) : UnionCreate(types, options);
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/parse.mjs
class TemplateLiteralParserError extends TypeBoxError {
}
function Unescape(pattern) {
  return pattern.replace(/\\\$/g, "$").replace(/\\\*/g, "*").replace(/\\\^/g, "^").replace(/\\\|/g, "|").replace(/\\\(/g, "(").replace(/\\\)/g, ")");
}
function IsNonEscaped(pattern, index, char) {
  return pattern[index] === char && pattern.charCodeAt(index - 1) !== 92;
}
function IsOpenParen(pattern, index) {
  return IsNonEscaped(pattern, index, "(");
}
function IsCloseParen(pattern, index) {
  return IsNonEscaped(pattern, index, ")");
}
function IsSeparator(pattern, index) {
  return IsNonEscaped(pattern, index, "|");
}
function IsGroup(pattern) {
  if (!(IsOpenParen(pattern, 0) && IsCloseParen(pattern, pattern.length - 1)))
    return false;
  let count = 0;
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (count === 0 && index !== pattern.length - 1)
      return false;
  }
  return true;
}
function InGroup(pattern) {
  return pattern.slice(1, pattern.length - 1);
}
function IsPrecedenceOr(pattern) {
  let count = 0;
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (IsSeparator(pattern, index) && count === 0)
      return true;
  }
  return false;
}
function IsPrecedenceAnd(pattern) {
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      return true;
  }
  return false;
}
function Or(pattern) {
  let [count, start] = [0, 0];
  const expressions = [];
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index))
      count += 1;
    if (IsCloseParen(pattern, index))
      count -= 1;
    if (IsSeparator(pattern, index) && count === 0) {
      const range = pattern.slice(start, index);
      if (range.length > 0)
        expressions.push(TemplateLiteralParse(range));
      start = index + 1;
    }
  }
  const range = pattern.slice(start);
  if (range.length > 0)
    expressions.push(TemplateLiteralParse(range));
  if (expressions.length === 0)
    return { type: "const", const: "" };
  if (expressions.length === 1)
    return expressions[0];
  return { type: "or", expr: expressions };
}
function And(pattern) {
  function Group(value, index) {
    if (!IsOpenParen(value, index))
      throw new TemplateLiteralParserError(`TemplateLiteralParser: Index must point to open parens`);
    let count = 0;
    for (let scan = index;scan < value.length; scan++) {
      if (IsOpenParen(value, scan))
        count += 1;
      if (IsCloseParen(value, scan))
        count -= 1;
      if (count === 0)
        return [index, scan];
    }
    throw new TemplateLiteralParserError(`TemplateLiteralParser: Unclosed group parens in expression`);
  }
  function Range(pattern, index) {
    for (let scan = index;scan < pattern.length; scan++) {
      if (IsOpenParen(pattern, scan))
        return [index, scan];
    }
    return [index, pattern.length];
  }
  const expressions = [];
  for (let index = 0;index < pattern.length; index++) {
    if (IsOpenParen(pattern, index)) {
      const [start, end] = Group(pattern, index);
      const range = pattern.slice(start, end + 1);
      expressions.push(TemplateLiteralParse(range));
      index = end;
    } else {
      const [start, end] = Range(pattern, index);
      const range = pattern.slice(start, end);
      if (range.length > 0)
        expressions.push(TemplateLiteralParse(range));
      index = end - 1;
    }
  }
  return expressions.length === 0 ? { type: "const", const: "" } : expressions.length === 1 ? expressions[0] : { type: "and", expr: expressions };
}
function TemplateLiteralParse(pattern) {
  return IsGroup(pattern) ? TemplateLiteralParse(InGroup(pattern)) : IsPrecedenceOr(pattern) ? Or(pattern) : IsPrecedenceAnd(pattern) ? And(pattern) : { type: "const", const: Unescape(pattern) };
}
function TemplateLiteralParseExact(pattern) {
  return TemplateLiteralParse(pattern.slice(1, pattern.length - 1));
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/finite.mjs
class TemplateLiteralFiniteError extends TypeBoxError {
}
function IsNumberExpression(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "0" && expression.expr[1].type === "const" && expression.expr[1].const === "[1-9][0-9]*";
}
function IsBooleanExpression(expression) {
  return expression.type === "or" && expression.expr.length === 2 && expression.expr[0].type === "const" && expression.expr[0].const === "true" && expression.expr[1].type === "const" && expression.expr[1].const === "false";
}
function IsStringExpression(expression) {
  return expression.type === "const" && expression.const === ".*";
}
function IsTemplateLiteralExpressionFinite(expression) {
  return IsNumberExpression(expression) || IsStringExpression(expression) ? false : IsBooleanExpression(expression) ? true : expression.type === "and" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "or" ? expression.expr.every((expr) => IsTemplateLiteralExpressionFinite(expr)) : expression.type === "const" ? true : (() => {
    throw new TemplateLiteralFiniteError(`Unknown expression type`);
  })();
}
function IsTemplateLiteralFinite(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression);
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/generate.mjs
class TemplateLiteralGenerateError extends TypeBoxError {
}
function* GenerateReduce(buffer) {
  if (buffer.length === 1)
    return yield* buffer[0];
  for (const left of buffer[0]) {
    for (const right of GenerateReduce(buffer.slice(1))) {
      yield `${left}${right}`;
    }
  }
}
function* GenerateAnd(expression) {
  return yield* GenerateReduce(expression.expr.map((expr) => [...TemplateLiteralExpressionGenerate(expr)]));
}
function* GenerateOr(expression) {
  for (const expr of expression.expr)
    yield* TemplateLiteralExpressionGenerate(expr);
}
function* GenerateConst(expression) {
  return yield expression.const;
}
function* TemplateLiteralExpressionGenerate(expression) {
  return expression.type === "and" ? yield* GenerateAnd(expression) : expression.type === "or" ? yield* GenerateOr(expression) : expression.type === "const" ? yield* GenerateConst(expression) : (() => {
    throw new TemplateLiteralGenerateError("Unknown expression");
  })();
}
function TemplateLiteralGenerate(schema) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  return IsTemplateLiteralExpressionFinite(expression) ? [...TemplateLiteralExpressionGenerate(expression)] : [];
}

// node_modules/@sinclair/typebox/build/esm/type/literal/literal.mjs
function Literal(value, options) {
  return CreateType({
    [Kind]: "Literal",
    const: value,
    type: typeof value
  }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/boolean/boolean.mjs
function Boolean2(options) {
  return CreateType({ [Kind]: "Boolean", type: "boolean" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/bigint/bigint.mjs
function BigInt2(options) {
  return CreateType({ [Kind]: "BigInt", type: "bigint" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/number/number.mjs
function Number2(options) {
  return CreateType({ [Kind]: "Number", type: "number" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/string/string.mjs
function String2(options) {
  return CreateType({ [Kind]: "String", type: "string" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/syntax.mjs
function* FromUnion(syntax) {
  const trim = syntax.trim().replace(/"|'/g, "");
  return trim === "boolean" ? yield Boolean2() : trim === "number" ? yield Number2() : trim === "bigint" ? yield BigInt2() : trim === "string" ? yield String2() : yield (() => {
    const literals = trim.split("|").map((literal) => Literal(literal.trim()));
    return literals.length === 0 ? Never() : literals.length === 1 ? literals[0] : UnionEvaluated(literals);
  })();
}
function* FromTerminal(syntax) {
  if (syntax[1] !== "{") {
    const L = Literal("$");
    const R = FromSyntax(syntax.slice(1));
    return yield* [L, ...R];
  }
  for (let i = 2;i < syntax.length; i++) {
    if (syntax[i] === "}") {
      const L = FromUnion(syntax.slice(2, i));
      const R = FromSyntax(syntax.slice(i + 1));
      return yield* [...L, ...R];
    }
  }
  yield Literal(syntax);
}
function* FromSyntax(syntax) {
  for (let i = 0;i < syntax.length; i++) {
    if (syntax[i] === "$") {
      const L = Literal(syntax.slice(0, i));
      const R = FromTerminal(syntax.slice(i));
      return yield* [L, ...R];
    }
  }
  yield Literal(syntax);
}
function TemplateLiteralSyntax(syntax) {
  return [...FromSyntax(syntax)];
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/pattern.mjs
class TemplateLiteralPatternError extends TypeBoxError {
}
function Escape(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function Visit2(schema, acc) {
  return IsTemplateLiteral(schema) ? schema.pattern.slice(1, schema.pattern.length - 1) : IsUnion(schema) ? `(${schema.anyOf.map((schema) => Visit2(schema, acc)).join("|")})` : IsNumber3(schema) ? `${acc}${PatternNumber}` : IsInteger2(schema) ? `${acc}${PatternNumber}` : IsBigInt3(schema) ? `${acc}${PatternNumber}` : IsString3(schema) ? `${acc}${PatternString}` : IsLiteral(schema) ? `${acc}${Escape(schema.const.toString())}` : IsBoolean3(schema) ? `${acc}${PatternBoolean}` : (() => {
    throw new TemplateLiteralPatternError(`Unexpected Kind '${schema[Kind]}'`);
  })();
}
function TemplateLiteralPattern(kinds) {
  return `^${kinds.map((schema) => Visit2(schema, "")).join("")}$`;
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/union.mjs
function TemplateLiteralToUnion(schema) {
  const R = TemplateLiteralGenerate(schema);
  const L = R.map((S) => Literal(S));
  return UnionEvaluated(L);
}

// node_modules/@sinclair/typebox/build/esm/type/template-literal/template-literal.mjs
function TemplateLiteral(unresolved, options) {
  const pattern = IsString(unresolved) ? TemplateLiteralPattern(TemplateLiteralSyntax(unresolved)) : TemplateLiteralPattern(unresolved);
  return CreateType({ [Kind]: "TemplateLiteral", type: "string", pattern }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-property-keys.mjs
function FromTemplateLiteral(templateLiteral) {
  const keys = TemplateLiteralGenerate(templateLiteral);
  return keys.map((key) => key.toString());
}
function FromUnion2(types) {
  const result = [];
  for (const type of types)
    result.push(...IndexPropertyKeys(type));
  return result;
}
function FromLiteral(literalValue) {
  return [literalValue.toString()];
}
function IndexPropertyKeys(type) {
  return [...new Set(IsTemplateLiteral(type) ? FromTemplateLiteral(type) : IsUnion(type) ? FromUnion2(type.anyOf) : IsLiteral(type) ? FromLiteral(type.const) : IsNumber3(type) ? ["[number]"] : IsInteger2(type) ? ["[number]"] : [])];
}

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-result.mjs
function FromProperties(type, properties, options) {
  const result = {};
  for (const K2 of Object.getOwnPropertyNames(properties)) {
    result[K2] = Index(type, IndexPropertyKeys(properties[K2]), options);
  }
  return result;
}
function FromMappedResult(type, mappedResult, options) {
  return FromProperties(type, mappedResult.properties, options);
}
function IndexFromMappedResult(type, mappedResult, options) {
  const properties = FromMappedResult(type, mappedResult, options);
  return MappedResult(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed.mjs
function FromRest(types, key) {
  return types.map((type) => IndexFromPropertyKey(type, key));
}
function FromIntersectRest(types) {
  return types.filter((type) => !IsNever(type));
}
function FromIntersect(types, key) {
  return IntersectEvaluated(FromIntersectRest(FromRest(types, key)));
}
function FromUnionRest(types) {
  return types.some((L) => IsNever(L)) ? [] : types;
}
function FromUnion3(types, key) {
  return UnionEvaluated(FromUnionRest(FromRest(types, key)));
}
function FromTuple(types, key) {
  return key in types ? types[key] : key === "[number]" ? UnionEvaluated(types) : Never();
}
function FromArray(type, key) {
  return key === "[number]" ? type : Never();
}
function FromProperty(properties, propertyKey) {
  return propertyKey in properties ? properties[propertyKey] : Never();
}
function IndexFromPropertyKey(type, propertyKey) {
  return IsIntersect(type) ? FromIntersect(type.allOf, propertyKey) : IsUnion(type) ? FromUnion3(type.anyOf, propertyKey) : IsTuple(type) ? FromTuple(type.items ?? [], propertyKey) : IsArray3(type) ? FromArray(type.items, propertyKey) : IsObject3(type) ? FromProperty(type.properties, propertyKey) : Never();
}
function IndexFromPropertyKeys(type, propertyKeys) {
  return propertyKeys.map((propertyKey) => IndexFromPropertyKey(type, propertyKey));
}
function FromSchema(type, propertyKeys) {
  return UnionEvaluated(IndexFromPropertyKeys(type, propertyKeys));
}
function Index(type, key, options) {
  if (IsRef(type) || IsRef(key)) {
    const error = `Index types using Ref parameters require both Type and Key to be of TSchema`;
    if (!IsSchema(type) || !IsSchema(key))
      throw new TypeBoxError(error);
    return Computed("Index", [type, key]);
  }
  if (IsMappedResult(key))
    return IndexFromMappedResult(type, key, options);
  if (IsMappedKey(key))
    return IndexFromMappedKey(type, key, options);
  return CreateType(IsSchema(key) ? FromSchema(type, IndexPropertyKeys(key)) : FromSchema(type, key), options);
}

// node_modules/@sinclair/typebox/build/esm/type/indexed/indexed-from-mapped-key.mjs
function MappedIndexPropertyKey(type, key, options) {
  return { [key]: Index(type, [key], Clone(options)) };
}
function MappedIndexPropertyKeys(type, propertyKeys, options) {
  return propertyKeys.reduce((result, left) => {
    return { ...result, ...MappedIndexPropertyKey(type, left, options) };
  }, {});
}
function MappedIndexProperties(type, mappedKey, options) {
  return MappedIndexPropertyKeys(type, mappedKey.keys, options);
}
function IndexFromMappedKey(type, mappedKey, options) {
  const properties = MappedIndexProperties(type, mappedKey, options);
  return MappedResult(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/iterator/iterator.mjs
function Iterator(items, options) {
  return CreateType({ [Kind]: "Iterator", type: "Iterator", items }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/object/object.mjs
function RequiredArray(properties) {
  return globalThis.Object.keys(properties).filter((key) => !IsOptional(properties[key]));
}
function _Object_(properties, options) {
  const required = RequiredArray(properties);
  const schema = required.length > 0 ? { [Kind]: "Object", type: "object", required, properties } : { [Kind]: "Object", type: "object", properties };
  return CreateType(schema, options);
}
var Object2 = _Object_;

// node_modules/@sinclair/typebox/build/esm/type/promise/promise.mjs
function Promise2(item, options) {
  return CreateType({ [Kind]: "Promise", type: "Promise", item }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/readonly/readonly.mjs
function RemoveReadonly(schema) {
  return CreateType(Discard(schema, [ReadonlyKind]));
}
function AddReadonly(schema) {
  return CreateType({ ...schema, [ReadonlyKind]: "Readonly" });
}
function ReadonlyWithFlag(schema, F) {
  return F === false ? RemoveReadonly(schema) : AddReadonly(schema);
}
function Readonly(schema, enable) {
  const F = enable ?? true;
  return IsMappedResult(schema) ? ReadonlyFromMappedResult(schema, F) : ReadonlyWithFlag(schema, F);
}

// node_modules/@sinclair/typebox/build/esm/type/readonly/readonly-from-mapped-result.mjs
function FromProperties2(K, F) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = Readonly(K[K2], F);
  return Acc;
}
function FromMappedResult2(R, F) {
  return FromProperties2(R.properties, F);
}
function ReadonlyFromMappedResult(R, F) {
  const P = FromMappedResult2(R, F);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/tuple/tuple.mjs
function Tuple(types, options) {
  return CreateType(types.length > 0 ? { [Kind]: "Tuple", type: "array", items: types, additionalItems: false, minItems: types.length, maxItems: types.length } : { [Kind]: "Tuple", type: "array", minItems: types.length, maxItems: types.length }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/mapped/mapped.mjs
function FromMappedResult3(K, P) {
  return K in P ? FromSchemaType(K, P[K]) : MappedResult(P);
}
function MappedKeyToKnownMappedResultProperties(K) {
  return { [K]: Literal(K) };
}
function MappedKeyToUnknownMappedResultProperties(P) {
  const Acc = {};
  for (const L of P)
    Acc[L] = Literal(L);
  return Acc;
}
function MappedKeyToMappedResultProperties(K, P) {
  return SetIncludes(P, K) ? MappedKeyToKnownMappedResultProperties(K) : MappedKeyToUnknownMappedResultProperties(P);
}
function FromMappedKey(K, P) {
  const R = MappedKeyToMappedResultProperties(K, P);
  return FromMappedResult3(K, R);
}
function FromRest2(K, T) {
  return T.map((L) => FromSchemaType(K, L));
}
function FromProperties3(K, T) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(T))
    Acc[K2] = FromSchemaType(K, T[K2]);
  return Acc;
}
function FromSchemaType(K, T) {
  const options = { ...T };
  return IsOptional(T) ? Optional(FromSchemaType(K, Discard(T, [OptionalKind]))) : IsReadonly(T) ? Readonly(FromSchemaType(K, Discard(T, [ReadonlyKind]))) : IsMappedResult(T) ? FromMappedResult3(K, T.properties) : IsMappedKey(T) ? FromMappedKey(K, T.keys) : IsConstructor(T) ? Constructor(FromRest2(K, T.parameters), FromSchemaType(K, T.returns), options) : IsFunction3(T) ? Function2(FromRest2(K, T.parameters), FromSchemaType(K, T.returns), options) : IsAsyncIterator3(T) ? AsyncIterator(FromSchemaType(K, T.items), options) : IsIterator3(T) ? Iterator(FromSchemaType(K, T.items), options) : IsIntersect(T) ? Intersect(FromRest2(K, T.allOf), options) : IsUnion(T) ? Union(FromRest2(K, T.anyOf), options) : IsTuple(T) ? Tuple(FromRest2(K, T.items ?? []), options) : IsObject3(T) ? Object2(FromProperties3(K, T.properties), options) : IsArray3(T) ? Array2(FromSchemaType(K, T.items), options) : IsPromise2(T) ? Promise2(FromSchemaType(K, T.item), options) : T;
}
function MappedFunctionReturnType(K, T) {
  const Acc = {};
  for (const L of K)
    Acc[L] = FromSchemaType(L, T);
  return Acc;
}
function Mapped(key, map, options) {
  const K = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const RT = map({ [Kind]: "MappedKey", keys: K });
  const R = MappedFunctionReturnType(K, RT);
  return Object2(R, options);
}

// node_modules/@sinclair/typebox/build/esm/type/optional/optional.mjs
function RemoveOptional(schema) {
  return CreateType(Discard(schema, [OptionalKind]));
}
function AddOptional(schema) {
  return CreateType({ ...schema, [OptionalKind]: "Optional" });
}
function OptionalWithFlag(schema, F) {
  return F === false ? RemoveOptional(schema) : AddOptional(schema);
}
function Optional(schema, enable) {
  const F = enable ?? true;
  return IsMappedResult(schema) ? OptionalFromMappedResult(schema, F) : OptionalWithFlag(schema, F);
}

// node_modules/@sinclair/typebox/build/esm/type/optional/optional-from-mapped-result.mjs
function FromProperties4(P, F) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Optional(P[K2], F);
  return Acc;
}
function FromMappedResult4(R, F) {
  return FromProperties4(R.properties, F);
}
function OptionalFromMappedResult(R, F) {
  const P = FromMappedResult4(R, F);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-create.mjs
function IntersectCreate(T, options = {}) {
  const allObjects = T.every((schema) => IsObject3(schema));
  const clonedUnevaluatedProperties = IsSchema(options.unevaluatedProperties) ? { unevaluatedProperties: options.unevaluatedProperties } : {};
  return CreateType(options.unevaluatedProperties === false || IsSchema(options.unevaluatedProperties) || allObjects ? { ...clonedUnevaluatedProperties, [Kind]: "Intersect", type: "object", allOf: T } : { ...clonedUnevaluatedProperties, [Kind]: "Intersect", allOf: T }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect-evaluated.mjs
function IsIntersectOptional(types) {
  return types.every((left) => IsOptional(left));
}
function RemoveOptionalFromType2(type) {
  return Discard(type, [OptionalKind]);
}
function RemoveOptionalFromRest2(types) {
  return types.map((left) => IsOptional(left) ? RemoveOptionalFromType2(left) : left);
}
function ResolveIntersect(types, options) {
  return IsIntersectOptional(types) ? Optional(IntersectCreate(RemoveOptionalFromRest2(types), options)) : IntersectCreate(RemoveOptionalFromRest2(types), options);
}
function IntersectEvaluated(types, options = {}) {
  if (types.length === 1)
    return CreateType(types[0], options);
  if (types.length === 0)
    return Never(options);
  if (types.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return ResolveIntersect(types, options);
}

// node_modules/@sinclair/typebox/build/esm/type/intersect/intersect.mjs
function Intersect(types, options) {
  if (types.length === 1)
    return CreateType(types[0], options);
  if (types.length === 0)
    return Never(options);
  if (types.some((schema) => IsTransform(schema)))
    throw new Error("Cannot intersect transform types");
  return IntersectCreate(types, options);
}

// node_modules/@sinclair/typebox/build/esm/type/ref/ref.mjs
function Ref(...args) {
  const [$ref, options] = typeof args[0] === "string" ? [args[0], args[1]] : [args[0].$id, args[1]];
  if (typeof $ref !== "string")
    throw new TypeBoxError("Ref: $ref must be a string");
  return CreateType({ [Kind]: "Ref", $ref }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/awaited/awaited.mjs
function FromComputed(target, parameters) {
  return Computed("Awaited", [Computed(target, parameters)]);
}
function FromRef($ref) {
  return Computed("Awaited", [Ref($ref)]);
}
function FromIntersect2(types) {
  return Intersect(FromRest3(types));
}
function FromUnion4(types) {
  return Union(FromRest3(types));
}
function FromPromise(type) {
  return Awaited(type);
}
function FromRest3(types) {
  return types.map((type) => Awaited(type));
}
function Awaited(type, options) {
  return CreateType(IsComputed(type) ? FromComputed(type.target, type.parameters) : IsIntersect(type) ? FromIntersect2(type.allOf) : IsUnion(type) ? FromUnion4(type.anyOf) : IsPromise2(type) ? FromPromise(type.item) : IsRef(type) ? FromRef(type.$ref) : type, options);
}

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-keys.mjs
function FromRest4(types) {
  const result = [];
  for (const L of types)
    result.push(KeyOfPropertyKeys(L));
  return result;
}
function FromIntersect3(types) {
  const propertyKeysArray = FromRest4(types);
  const propertyKeys = SetUnionMany(propertyKeysArray);
  return propertyKeys;
}
function FromUnion5(types) {
  const propertyKeysArray = FromRest4(types);
  const propertyKeys = SetIntersectMany(propertyKeysArray);
  return propertyKeys;
}
function FromTuple2(types) {
  return types.map((_, indexer) => indexer.toString());
}
function FromArray2(_) {
  return ["[number]"];
}
function FromProperties5(T) {
  return globalThis.Object.getOwnPropertyNames(T);
}
function FromPatternProperties(patternProperties) {
  if (!includePatternProperties)
    return [];
  const patternPropertyKeys = globalThis.Object.getOwnPropertyNames(patternProperties);
  return patternPropertyKeys.map((key) => {
    return key[0] === "^" && key[key.length - 1] === "$" ? key.slice(1, key.length - 1) : key;
  });
}
function KeyOfPropertyKeys(type) {
  return IsIntersect(type) ? FromIntersect3(type.allOf) : IsUnion(type) ? FromUnion5(type.anyOf) : IsTuple(type) ? FromTuple2(type.items ?? []) : IsArray3(type) ? FromArray2(type.items) : IsObject3(type) ? FromProperties5(type.properties) : IsRecord(type) ? FromPatternProperties(type.patternProperties) : [];
}
var includePatternProperties = false;
function KeyOfPattern(schema) {
  includePatternProperties = true;
  const keys = KeyOfPropertyKeys(schema);
  includePatternProperties = false;
  const pattern = keys.map((key) => `(${key})`);
  return `^(${pattern.join("|")})$`;
}

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof.mjs
function FromComputed2(target, parameters) {
  return Computed("KeyOf", [Computed(target, parameters)]);
}
function FromRef2($ref) {
  return Computed("KeyOf", [Ref($ref)]);
}
function KeyOfFromType(type, options) {
  const propertyKeys = KeyOfPropertyKeys(type);
  const propertyKeyTypes = KeyOfPropertyKeysToRest(propertyKeys);
  const result = UnionEvaluated(propertyKeyTypes);
  return CreateType(result, options);
}
function KeyOfPropertyKeysToRest(propertyKeys) {
  return propertyKeys.map((L) => L === "[number]" ? Number2() : Literal(L));
}
function KeyOf(type, options) {
  return IsComputed(type) ? FromComputed2(type.target, type.parameters) : IsRef(type) ? FromRef2(type.$ref) : IsMappedResult(type) ? KeyOfFromMappedResult(type, options) : KeyOfFromType(type, options);
}

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-from-mapped-result.mjs
function FromProperties6(properties, options) {
  const result = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(properties))
    result[K2] = KeyOf(properties[K2], Clone(options));
  return result;
}
function FromMappedResult5(mappedResult, options) {
  return FromProperties6(mappedResult.properties, options);
}
function KeyOfFromMappedResult(mappedResult, options) {
  const properties = FromMappedResult5(mappedResult, options);
  return MappedResult(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/keyof/keyof-property-entries.mjs
function KeyOfPropertyEntries(schema) {
  const keys = KeyOfPropertyKeys(schema);
  const schemas = IndexFromPropertyKeys(schema, keys);
  return keys.map((_, index) => [keys[index], schemas[index]]);
}

// node_modules/@sinclair/typebox/build/esm/type/composite/composite.mjs
function CompositeKeys(T) {
  const Acc = [];
  for (const L of T)
    Acc.push(...KeyOfPropertyKeys(L));
  return SetDistinct(Acc);
}
function FilterNever(T) {
  return T.filter((L) => !IsNever(L));
}
function CompositeProperty(T, K) {
  const Acc = [];
  for (const L of T)
    Acc.push(...IndexFromPropertyKeys(L, [K]));
  return FilterNever(Acc);
}
function CompositeProperties(T, K) {
  const Acc = {};
  for (const L of K) {
    Acc[L] = IntersectEvaluated(CompositeProperty(T, L));
  }
  return Acc;
}
function Composite(T, options) {
  const K = CompositeKeys(T);
  const P = CompositeProperties(T, K);
  const R = Object2(P, options);
  return R;
}

// node_modules/@sinclair/typebox/build/esm/type/date/date.mjs
function Date2(options) {
  return CreateType({ [Kind]: "Date", type: "Date" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/null/null.mjs
function Null(options) {
  return CreateType({ [Kind]: "Null", type: "null" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/symbol/symbol.mjs
function Symbol2(options) {
  return CreateType({ [Kind]: "Symbol", type: "symbol" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/undefined/undefined.mjs
function Undefined(options) {
  return CreateType({ [Kind]: "Undefined", type: "undefined" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/uint8array/uint8array.mjs
function Uint8Array2(options) {
  return CreateType({ [Kind]: "Uint8Array", type: "Uint8Array" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/unknown/unknown.mjs
function Unknown(options) {
  return CreateType({ [Kind]: "Unknown" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/const/const.mjs
function FromArray3(T) {
  return T.map((L) => FromValue(L, false));
}
function FromProperties7(value) {
  const Acc = {};
  for (const K of globalThis.Object.getOwnPropertyNames(value))
    Acc[K] = Readonly(FromValue(value[K], false));
  return Acc;
}
function ConditionalReadonly(T, root) {
  return root === true ? T : Readonly(T);
}
function FromValue(value, root) {
  return IsAsyncIterator(value) ? ConditionalReadonly(Any(), root) : IsIterator(value) ? ConditionalReadonly(Any(), root) : IsArray(value) ? Readonly(Tuple(FromArray3(value))) : IsUint8Array(value) ? Uint8Array2() : IsDate(value) ? Date2() : IsObject(value) ? ConditionalReadonly(Object2(FromProperties7(value)), root) : IsFunction(value) ? ConditionalReadonly(Function2([], Unknown()), root) : IsUndefined(value) ? Undefined() : IsNull(value) ? Null() : IsSymbol(value) ? Symbol2() : IsBigInt(value) ? BigInt2() : IsNumber(value) ? Literal(value) : IsBoolean(value) ? Literal(value) : IsString(value) ? Literal(value) : Object2({});
}
function Const(T, options) {
  return CreateType(FromValue(T, true), options);
}

// node_modules/@sinclair/typebox/build/esm/type/constructor-parameters/constructor-parameters.mjs
function ConstructorParameters(schema, options) {
  return IsConstructor(schema) ? Tuple(schema.parameters, options) : Never(options);
}

// node_modules/@sinclair/typebox/build/esm/type/enum/enum.mjs
function Enum(item, options) {
  if (IsUndefined(item))
    throw new Error("Enum undefined or empty");
  const values1 = globalThis.Object.getOwnPropertyNames(item).filter((key) => isNaN(key)).map((key) => item[key]);
  const values2 = [...new Set(values1)];
  const anyOf = values2.map((value) => Literal(value));
  return Union(anyOf, { ...options, [Hint]: "Enum" });
}

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-check.mjs
class ExtendsResolverError extends TypeBoxError {
}
var ExtendsResult;
(function(ExtendsResult) {
  ExtendsResult[ExtendsResult["Union"] = 0] = "Union";
  ExtendsResult[ExtendsResult["True"] = 1] = "True";
  ExtendsResult[ExtendsResult["False"] = 2] = "False";
})(ExtendsResult || (ExtendsResult = {}));
function IntoBooleanResult(result) {
  return result === ExtendsResult.False ? result : ExtendsResult.True;
}
function Throw(message) {
  throw new ExtendsResolverError(message);
}
function IsStructuralRight(right) {
  return IsNever2(right) || IsIntersect2(right) || IsUnion2(right) || IsUnknown2(right) || IsAny2(right);
}
function StructuralRight(left, right) {
  return IsNever2(right) ? FromNeverRight(left, right) : IsIntersect2(right) ? FromIntersectRight(left, right) : IsUnion2(right) ? FromUnionRight(left, right) : IsUnknown2(right) ? FromUnknownRight(left, right) : IsAny2(right) ? FromAnyRight(left, right) : Throw("StructuralRight");
}
function FromAnyRight(left, right) {
  return ExtendsResult.True;
}
function FromAny(left, right) {
  return IsIntersect2(right) ? FromIntersectRight(left, right) : IsUnion2(right) && right.anyOf.some((schema) => IsAny2(schema) || IsUnknown2(schema)) ? ExtendsResult.True : IsUnion2(right) ? ExtendsResult.Union : IsUnknown2(right) ? ExtendsResult.True : IsAny2(right) ? ExtendsResult.True : ExtendsResult.Union;
}
function FromArrayRight(left, right) {
  return IsUnknown2(left) ? ExtendsResult.False : IsAny2(left) ? ExtendsResult.Union : IsNever2(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromArray4(left, right) {
  return IsObject4(right) && IsObjectArrayLike(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : !IsArray4(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.items, right.items));
}
function FromAsyncIterator(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !IsAsyncIterator4(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.items, right.items));
}
function FromBigInt(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject4(right) ? FromObjectRight(left, right) : IsRecord2(right) ? FromRecordRight(left, right) : IsBigInt4(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromBooleanRight(left, right) {
  return IsLiteralBoolean(left) ? ExtendsResult.True : IsBoolean4(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromBoolean(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject4(right) ? FromObjectRight(left, right) : IsRecord2(right) ? FromRecordRight(left, right) : IsBoolean4(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromConstructor(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject4(right) ? FromObjectRight(left, right) : !IsConstructor2(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit3(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.returns, right.returns));
}
function FromDate(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject4(right) ? FromObjectRight(left, right) : IsRecord2(right) ? FromRecordRight(left, right) : IsDate4(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromFunction(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject4(right) ? FromObjectRight(left, right) : !IsFunction4(right) ? ExtendsResult.False : left.parameters.length > right.parameters.length ? ExtendsResult.False : !left.parameters.every((schema, index) => IntoBooleanResult(Visit3(right.parameters[index], schema)) === ExtendsResult.True) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.returns, right.returns));
}
function FromIntegerRight(left, right) {
  return IsLiteral2(left) && IsNumber(left.const) ? ExtendsResult.True : IsNumber4(left) || IsInteger3(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromInteger(left, right) {
  return IsInteger3(right) || IsNumber4(right) ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : IsObject4(right) ? FromObjectRight(left, right) : IsRecord2(right) ? FromRecordRight(left, right) : ExtendsResult.False;
}
function FromIntersectRight(left, right) {
  return right.allOf.every((schema) => Visit3(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromIntersect4(left, right) {
  return left.allOf.some((schema) => Visit3(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromIterator(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : !IsIterator4(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.items, right.items));
}
function FromLiteral2(left, right) {
  return IsLiteral2(right) && right.const === left.const ? ExtendsResult.True : IsStructuralRight(right) ? StructuralRight(left, right) : IsObject4(right) ? FromObjectRight(left, right) : IsRecord2(right) ? FromRecordRight(left, right) : IsString4(right) ? FromStringRight(left, right) : IsNumber4(right) ? FromNumberRight(left, right) : IsInteger3(right) ? FromIntegerRight(left, right) : IsBoolean4(right) ? FromBooleanRight(left, right) : ExtendsResult.False;
}
function FromNeverRight(left, right) {
  return ExtendsResult.False;
}
function FromNever(left, right) {
  return ExtendsResult.True;
}
function UnwrapTNot(schema) {
  let [current, depth] = [schema, 0];
  while (true) {
    if (!IsNot2(current))
      break;
    current = current.not;
    depth += 1;
  }
  return depth % 2 === 0 ? current : Unknown();
}
function FromNot(left, right) {
  return IsNot2(left) ? Visit3(UnwrapTNot(left), right) : IsNot2(right) ? Visit3(left, UnwrapTNot(right)) : Throw("Invalid fallthrough for Not");
}
function FromNull(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject4(right) ? FromObjectRight(left, right) : IsRecord2(right) ? FromRecordRight(left, right) : IsNull4(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromNumberRight(left, right) {
  return IsLiteralNumber(left) ? ExtendsResult.True : IsNumber4(left) || IsInteger3(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromNumber(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject4(right) ? FromObjectRight(left, right) : IsRecord2(right) ? FromRecordRight(left, right) : IsInteger3(right) || IsNumber4(right) ? ExtendsResult.True : ExtendsResult.False;
}
function IsObjectPropertyCount(schema, count) {
  return Object.getOwnPropertyNames(schema.properties).length === count;
}
function IsObjectStringLike(schema) {
  return IsObjectArrayLike(schema);
}
function IsObjectSymbolLike(schema) {
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "description" in schema.properties && IsUnion2(schema.properties.description) && schema.properties.description.anyOf.length === 2 && (IsString4(schema.properties.description.anyOf[0]) && IsUndefined4(schema.properties.description.anyOf[1]) || IsString4(schema.properties.description.anyOf[1]) && IsUndefined4(schema.properties.description.anyOf[0]));
}
function IsObjectNumberLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectBooleanLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectBigIntLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectDateLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectUint8ArrayLike(schema) {
  return IsObjectArrayLike(schema);
}
function IsObjectFunctionLike(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit3(schema.properties["length"], length)) === ExtendsResult.True;
}
function IsObjectConstructorLike(schema) {
  return IsObjectPropertyCount(schema, 0);
}
function IsObjectArrayLike(schema) {
  const length = Number2();
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "length" in schema.properties && IntoBooleanResult(Visit3(schema.properties["length"], length)) === ExtendsResult.True;
}
function IsObjectPromiseLike(schema) {
  const then = Function2([Any()], Any());
  return IsObjectPropertyCount(schema, 0) || IsObjectPropertyCount(schema, 1) && "then" in schema.properties && IntoBooleanResult(Visit3(schema.properties["then"], then)) === ExtendsResult.True;
}
function Property(left, right) {
  return Visit3(left, right) === ExtendsResult.False ? ExtendsResult.False : IsOptional2(left) && !IsOptional2(right) ? ExtendsResult.False : ExtendsResult.True;
}
function FromObjectRight(left, right) {
  return IsUnknown2(left) ? ExtendsResult.False : IsAny2(left) ? ExtendsResult.Union : IsNever2(left) || IsLiteralString(left) && IsObjectStringLike(right) || IsLiteralNumber(left) && IsObjectNumberLike(right) || IsLiteralBoolean(left) && IsObjectBooleanLike(right) || IsSymbol4(left) && IsObjectSymbolLike(right) || IsBigInt4(left) && IsObjectBigIntLike(right) || IsString4(left) && IsObjectStringLike(right) || IsSymbol4(left) && IsObjectSymbolLike(right) || IsNumber4(left) && IsObjectNumberLike(right) || IsInteger3(left) && IsObjectNumberLike(right) || IsBoolean4(left) && IsObjectBooleanLike(right) || IsUint8Array4(left) && IsObjectUint8ArrayLike(right) || IsDate4(left) && IsObjectDateLike(right) || IsConstructor2(left) && IsObjectConstructorLike(right) || IsFunction4(left) && IsObjectFunctionLike(right) ? ExtendsResult.True : IsRecord2(left) && IsString4(RecordKey(left)) ? (() => {
    return right[Hint] === "Record" ? ExtendsResult.True : ExtendsResult.False;
  })() : IsRecord2(left) && IsNumber4(RecordKey(left)) ? (() => {
    return IsObjectPropertyCount(right, 0) ? ExtendsResult.True : ExtendsResult.False;
  })() : ExtendsResult.False;
}
function FromObject(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : IsRecord2(right) ? FromRecordRight(left, right) : !IsObject4(right) ? ExtendsResult.False : (() => {
    for (const key of Object.getOwnPropertyNames(right.properties)) {
      if (!(key in left.properties) && !IsOptional2(right.properties[key])) {
        return ExtendsResult.False;
      }
      if (IsOptional2(right.properties[key])) {
        return ExtendsResult.True;
      }
      if (Property(left.properties[key], right.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })();
}
function FromPromise2(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject4(right) && IsObjectPromiseLike(right) ? ExtendsResult.True : !IsPromise3(right) ? ExtendsResult.False : IntoBooleanResult(Visit3(left.item, right.item));
}
function RecordKey(schema) {
  return PatternNumberExact in schema.patternProperties ? Number2() : (PatternStringExact in schema.patternProperties) ? String2() : Throw("Unknown record key pattern");
}
function RecordValue(schema) {
  return PatternNumberExact in schema.patternProperties ? schema.patternProperties[PatternNumberExact] : (PatternStringExact in schema.patternProperties) ? schema.patternProperties[PatternStringExact] : Throw("Unable to get record value schema");
}
function FromRecordRight(left, right) {
  const [Key, Value] = [RecordKey(right), RecordValue(right)];
  return IsLiteralString(left) && IsNumber4(Key) && IntoBooleanResult(Visit3(left, Value)) === ExtendsResult.True ? ExtendsResult.True : IsUint8Array4(left) && IsNumber4(Key) ? Visit3(left, Value) : IsString4(left) && IsNumber4(Key) ? Visit3(left, Value) : IsArray4(left) && IsNumber4(Key) ? Visit3(left, Value) : IsObject4(left) ? (() => {
    for (const key of Object.getOwnPropertyNames(left.properties)) {
      if (Property(Value, left.properties[key]) === ExtendsResult.False) {
        return ExtendsResult.False;
      }
    }
    return ExtendsResult.True;
  })() : ExtendsResult.False;
}
function FromRecord(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject4(right) ? FromObjectRight(left, right) : !IsRecord2(right) ? ExtendsResult.False : Visit3(RecordValue(left), RecordValue(right));
}
function FromRegExp(left, right) {
  const L = IsRegExp3(left) ? String2() : left;
  const R = IsRegExp3(right) ? String2() : right;
  return Visit3(L, R);
}
function FromStringRight(left, right) {
  return IsLiteral2(left) && IsString(left.const) ? ExtendsResult.True : IsString4(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromString(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject4(right) ? FromObjectRight(left, right) : IsRecord2(right) ? FromRecordRight(left, right) : IsString4(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromSymbol(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject4(right) ? FromObjectRight(left, right) : IsRecord2(right) ? FromRecordRight(left, right) : IsSymbol4(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromTemplateLiteral2(left, right) {
  return IsTemplateLiteral2(left) ? Visit3(TemplateLiteralToUnion(left), right) : IsTemplateLiteral2(right) ? Visit3(left, TemplateLiteralToUnion(right)) : Throw("Invalid fallthrough for TemplateLiteral");
}
function IsArrayOfTuple(left, right) {
  return IsArray4(right) && left.items !== undefined && left.items.every((schema) => Visit3(schema, right.items) === ExtendsResult.True);
}
function FromTupleRight(left, right) {
  return IsNever2(left) ? ExtendsResult.True : IsUnknown2(left) ? ExtendsResult.False : IsAny2(left) ? ExtendsResult.Union : ExtendsResult.False;
}
function FromTuple3(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject4(right) && IsObjectArrayLike(right) ? ExtendsResult.True : IsArray4(right) && IsArrayOfTuple(left, right) ? ExtendsResult.True : !IsTuple2(right) ? ExtendsResult.False : IsUndefined(left.items) && !IsUndefined(right.items) || !IsUndefined(left.items) && IsUndefined(right.items) ? ExtendsResult.False : IsUndefined(left.items) && !IsUndefined(right.items) ? ExtendsResult.True : left.items.every((schema, index) => Visit3(schema, right.items[index]) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUint8Array(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject4(right) ? FromObjectRight(left, right) : IsRecord2(right) ? FromRecordRight(left, right) : IsUint8Array4(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUndefined(left, right) {
  return IsStructuralRight(right) ? StructuralRight(left, right) : IsObject4(right) ? FromObjectRight(left, right) : IsRecord2(right) ? FromRecordRight(left, right) : IsVoid2(right) ? FromVoidRight(left, right) : IsUndefined4(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnionRight(left, right) {
  return right.anyOf.some((schema) => Visit3(left, schema) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnion6(left, right) {
  return left.anyOf.every((schema) => Visit3(schema, right) === ExtendsResult.True) ? ExtendsResult.True : ExtendsResult.False;
}
function FromUnknownRight(left, right) {
  return ExtendsResult.True;
}
function FromUnknown(left, right) {
  return IsNever2(right) ? FromNeverRight(left, right) : IsIntersect2(right) ? FromIntersectRight(left, right) : IsUnion2(right) ? FromUnionRight(left, right) : IsAny2(right) ? FromAnyRight(left, right) : IsString4(right) ? FromStringRight(left, right) : IsNumber4(right) ? FromNumberRight(left, right) : IsInteger3(right) ? FromIntegerRight(left, right) : IsBoolean4(right) ? FromBooleanRight(left, right) : IsArray4(right) ? FromArrayRight(left, right) : IsTuple2(right) ? FromTupleRight(left, right) : IsObject4(right) ? FromObjectRight(left, right) : IsUnknown2(right) ? ExtendsResult.True : ExtendsResult.False;
}
function FromVoidRight(left, right) {
  return IsUndefined4(left) ? ExtendsResult.True : IsUndefined4(left) ? ExtendsResult.True : ExtendsResult.False;
}
function FromVoid(left, right) {
  return IsIntersect2(right) ? FromIntersectRight(left, right) : IsUnion2(right) ? FromUnionRight(left, right) : IsUnknown2(right) ? FromUnknownRight(left, right) : IsAny2(right) ? FromAnyRight(left, right) : IsObject4(right) ? FromObjectRight(left, right) : IsVoid2(right) ? ExtendsResult.True : ExtendsResult.False;
}
function Visit3(left, right) {
  return IsTemplateLiteral2(left) || IsTemplateLiteral2(right) ? FromTemplateLiteral2(left, right) : IsRegExp3(left) || IsRegExp3(right) ? FromRegExp(left, right) : IsNot2(left) || IsNot2(right) ? FromNot(left, right) : IsAny2(left) ? FromAny(left, right) : IsArray4(left) ? FromArray4(left, right) : IsBigInt4(left) ? FromBigInt(left, right) : IsBoolean4(left) ? FromBoolean(left, right) : IsAsyncIterator4(left) ? FromAsyncIterator(left, right) : IsConstructor2(left) ? FromConstructor(left, right) : IsDate4(left) ? FromDate(left, right) : IsFunction4(left) ? FromFunction(left, right) : IsInteger3(left) ? FromInteger(left, right) : IsIntersect2(left) ? FromIntersect4(left, right) : IsIterator4(left) ? FromIterator(left, right) : IsLiteral2(left) ? FromLiteral2(left, right) : IsNever2(left) ? FromNever(left, right) : IsNull4(left) ? FromNull(left, right) : IsNumber4(left) ? FromNumber(left, right) : IsObject4(left) ? FromObject(left, right) : IsRecord2(left) ? FromRecord(left, right) : IsString4(left) ? FromString(left, right) : IsSymbol4(left) ? FromSymbol(left, right) : IsTuple2(left) ? FromTuple3(left, right) : IsPromise3(left) ? FromPromise2(left, right) : IsUint8Array4(left) ? FromUint8Array(left, right) : IsUndefined4(left) ? FromUndefined(left, right) : IsUnion2(left) ? FromUnion6(left, right) : IsUnknown2(left) ? FromUnknown(left, right) : IsVoid2(left) ? FromVoid(left, right) : Throw(`Unknown left type operand '${left[Kind]}'`);
}
function ExtendsCheck(left, right) {
  return Visit3(left, right);
}

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-result.mjs
function FromProperties8(P, Right, True, False, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Extends(P[K2], Right, True, False, Clone(options));
  return Acc;
}
function FromMappedResult6(Left, Right, True, False, options) {
  return FromProperties8(Left.properties, Right, True, False, options);
}
function ExtendsFromMappedResult(Left, Right, True, False, options) {
  const P = FromMappedResult6(Left, Right, True, False, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/extends/extends.mjs
function ExtendsResolve(left, right, trueType, falseType) {
  const R = ExtendsCheck(left, right);
  return R === ExtendsResult.Union ? Union([trueType, falseType]) : R === ExtendsResult.True ? trueType : falseType;
}
function Extends(L, R, T, F, options) {
  return IsMappedResult(L) ? ExtendsFromMappedResult(L, R, T, F, options) : IsMappedKey(L) ? CreateType(ExtendsFromMappedKey(L, R, T, F, options)) : CreateType(ExtendsResolve(L, R, T, F), options);
}

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-from-mapped-key.mjs
function FromPropertyKey(K, U, L, R, options) {
  return {
    [K]: Extends(Literal(K), U, L, R, Clone(options))
  };
}
function FromPropertyKeys(K, U, L, R, options) {
  return K.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey(LK, U, L, R, options) };
  }, {});
}
function FromMappedKey2(K, U, L, R, options) {
  return FromPropertyKeys(K.keys, U, L, R, options);
}
function ExtendsFromMappedKey(T, U, L, R, options) {
  const P = FromMappedKey2(T, U, L, R, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/extends/extends-undefined.mjs
function Intersect2(schema) {
  return schema.allOf.every((schema) => ExtendsUndefinedCheck(schema));
}
function Union2(schema) {
  return schema.anyOf.some((schema) => ExtendsUndefinedCheck(schema));
}
function Not(schema) {
  return !ExtendsUndefinedCheck(schema.not);
}
function ExtendsUndefinedCheck(schema) {
  return schema[Kind] === "Intersect" ? Intersect2(schema) : schema[Kind] === "Union" ? Union2(schema) : schema[Kind] === "Not" ? Not(schema) : schema[Kind] === "Undefined" ? true : false;
}

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-template-literal.mjs
function ExcludeFromTemplateLiteral(L, R) {
  return Exclude(TemplateLiteralToUnion(L), R);
}

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude.mjs
function ExcludeRest(L, R) {
  const excluded = L.filter((inner) => ExtendsCheck(inner, R) === ExtendsResult.False);
  return excluded.length === 1 ? excluded[0] : Union(excluded);
}
function Exclude(L, R, options = {}) {
  if (IsTemplateLiteral(L))
    return CreateType(ExcludeFromTemplateLiteral(L, R), options);
  if (IsMappedResult(L))
    return CreateType(ExcludeFromMappedResult(L, R), options);
  return CreateType(IsUnion(L) ? ExcludeRest(L.anyOf, R) : ExtendsCheck(L, R) !== ExtendsResult.False ? Never() : L, options);
}

// node_modules/@sinclair/typebox/build/esm/type/exclude/exclude-from-mapped-result.mjs
function FromProperties9(P, U) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Exclude(P[K2], U);
  return Acc;
}
function FromMappedResult7(R, T) {
  return FromProperties9(R.properties, T);
}
function ExcludeFromMappedResult(R, T) {
  const P = FromMappedResult7(R, T);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-template-literal.mjs
function ExtractFromTemplateLiteral(L, R) {
  return Extract(TemplateLiteralToUnion(L), R);
}

// node_modules/@sinclair/typebox/build/esm/type/extract/extract.mjs
function ExtractRest(L, R) {
  const extracted = L.filter((inner) => ExtendsCheck(inner, R) !== ExtendsResult.False);
  return extracted.length === 1 ? extracted[0] : Union(extracted);
}
function Extract(L, R, options) {
  if (IsTemplateLiteral(L))
    return CreateType(ExtractFromTemplateLiteral(L, R), options);
  if (IsMappedResult(L))
    return CreateType(ExtractFromMappedResult(L, R), options);
  return CreateType(IsUnion(L) ? ExtractRest(L.anyOf, R) : ExtendsCheck(L, R) !== ExtendsResult.False ? L : Never(), options);
}

// node_modules/@sinclair/typebox/build/esm/type/extract/extract-from-mapped-result.mjs
function FromProperties10(P, T) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Extract(P[K2], T);
  return Acc;
}
function FromMappedResult8(R, T) {
  return FromProperties10(R.properties, T);
}
function ExtractFromMappedResult(R, T) {
  const P = FromMappedResult8(R, T);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/instance-type/instance-type.mjs
function InstanceType(schema, options) {
  return IsConstructor(schema) ? CreateType(schema.returns, options) : Never(options);
}

// node_modules/@sinclair/typebox/build/esm/type/readonly-optional/readonly-optional.mjs
function ReadonlyOptional(schema) {
  return Readonly(Optional(schema));
}

// node_modules/@sinclair/typebox/build/esm/type/record/record.mjs
function RecordCreateFromPattern(pattern, T, options) {
  return CreateType({ [Kind]: "Record", type: "object", patternProperties: { [pattern]: T } }, options);
}
function RecordCreateFromKeys(K, T, options) {
  const result = {};
  for (const K2 of K)
    result[K2] = T;
  return Object2(result, { ...options, [Hint]: "Record" });
}
function FromTemplateLiteralKey(K, T, options) {
  return IsTemplateLiteralFinite(K) ? RecordCreateFromKeys(IndexPropertyKeys(K), T, options) : RecordCreateFromPattern(K.pattern, T, options);
}
function FromUnionKey(key, type, options) {
  return RecordCreateFromKeys(IndexPropertyKeys(Union(key)), type, options);
}
function FromLiteralKey(key, type, options) {
  return RecordCreateFromKeys([key.toString()], type, options);
}
function FromRegExpKey(key, type, options) {
  return RecordCreateFromPattern(key.source, type, options);
}
function FromStringKey(key, type, options) {
  const pattern = IsUndefined(key.pattern) ? PatternStringExact : key.pattern;
  return RecordCreateFromPattern(pattern, type, options);
}
function FromAnyKey(_, type, options) {
  return RecordCreateFromPattern(PatternStringExact, type, options);
}
function FromNeverKey(_key, type, options) {
  return RecordCreateFromPattern(PatternNeverExact, type, options);
}
function FromBooleanKey(_key, type, options) {
  return Object2({ true: type, false: type }, options);
}
function FromIntegerKey(_key, type, options) {
  return RecordCreateFromPattern(PatternNumberExact, type, options);
}
function FromNumberKey(_, type, options) {
  return RecordCreateFromPattern(PatternNumberExact, type, options);
}
function Record(key, type, options = {}) {
  return IsUnion(key) ? FromUnionKey(key.anyOf, type, options) : IsTemplateLiteral(key) ? FromTemplateLiteralKey(key, type, options) : IsLiteral(key) ? FromLiteralKey(key.const, type, options) : IsBoolean3(key) ? FromBooleanKey(key, type, options) : IsInteger2(key) ? FromIntegerKey(key, type, options) : IsNumber3(key) ? FromNumberKey(key, type, options) : IsRegExp2(key) ? FromRegExpKey(key, type, options) : IsString3(key) ? FromStringKey(key, type, options) : IsAny(key) ? FromAnyKey(key, type, options) : IsNever(key) ? FromNeverKey(key, type, options) : Never(options);
}
function RecordPattern(record) {
  return globalThis.Object.getOwnPropertyNames(record.patternProperties)[0];
}
function RecordKey2(type) {
  const pattern = RecordPattern(type);
  return pattern === PatternStringExact ? String2() : pattern === PatternNumberExact ? Number2() : String2({ pattern });
}
function RecordValue2(type) {
  return type.patternProperties[RecordPattern(type)];
}

// node_modules/@sinclair/typebox/build/esm/type/instantiate/instantiate.mjs
function FromConstructor2(args, type) {
  type.parameters = FromTypes(args, type.parameters);
  type.returns = FromType(args, type.returns);
  return type;
}
function FromFunction2(args, type) {
  type.parameters = FromTypes(args, type.parameters);
  type.returns = FromType(args, type.returns);
  return type;
}
function FromIntersect5(args, type) {
  type.allOf = FromTypes(args, type.allOf);
  return type;
}
function FromUnion7(args, type) {
  type.anyOf = FromTypes(args, type.anyOf);
  return type;
}
function FromTuple4(args, type) {
  if (IsUndefined(type.items))
    return type;
  type.items = FromTypes(args, type.items);
  return type;
}
function FromArray5(args, type) {
  type.items = FromType(args, type.items);
  return type;
}
function FromAsyncIterator2(args, type) {
  type.items = FromType(args, type.items);
  return type;
}
function FromIterator2(args, type) {
  type.items = FromType(args, type.items);
  return type;
}
function FromPromise3(args, type) {
  type.item = FromType(args, type.item);
  return type;
}
function FromObject2(args, type) {
  const mappedProperties = FromProperties11(args, type.properties);
  return { ...type, ...Object2(mappedProperties) };
}
function FromRecord2(args, type) {
  const mappedKey = FromType(args, RecordKey2(type));
  const mappedValue = FromType(args, RecordValue2(type));
  const result = Record(mappedKey, mappedValue);
  return { ...type, ...result };
}
function FromArgument(args, argument) {
  return argument.index in args ? args[argument.index] : Unknown();
}
function FromProperty2(args, type) {
  const isReadonly = IsReadonly(type);
  const isOptional = IsOptional(type);
  const mapped = FromType(args, type);
  return isReadonly && isOptional ? ReadonlyOptional(mapped) : isReadonly && !isOptional ? Readonly(mapped) : !isReadonly && isOptional ? Optional(mapped) : mapped;
}
function FromProperties11(args, properties) {
  return globalThis.Object.getOwnPropertyNames(properties).reduce((result, key) => {
    return { ...result, [key]: FromProperty2(args, properties[key]) };
  }, {});
}
function FromTypes(args, types) {
  return types.map((type) => FromType(args, type));
}
function FromType(args, type) {
  return IsConstructor(type) ? FromConstructor2(args, type) : IsFunction3(type) ? FromFunction2(args, type) : IsIntersect(type) ? FromIntersect5(args, type) : IsUnion(type) ? FromUnion7(args, type) : IsTuple(type) ? FromTuple4(args, type) : IsArray3(type) ? FromArray5(args, type) : IsAsyncIterator3(type) ? FromAsyncIterator2(args, type) : IsIterator3(type) ? FromIterator2(args, type) : IsPromise2(type) ? FromPromise3(args, type) : IsObject3(type) ? FromObject2(args, type) : IsRecord(type) ? FromRecord2(args, type) : IsArgument(type) ? FromArgument(args, type) : type;
}
function Instantiate(type, args) {
  return FromType(args, CloneType(type));
}

// node_modules/@sinclair/typebox/build/esm/type/integer/integer.mjs
function Integer(options) {
  return CreateType({ [Kind]: "Integer", type: "integer" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic-from-mapped-key.mjs
function MappedIntrinsicPropertyKey(K, M, options) {
  return {
    [K]: Intrinsic(Literal(K), M, Clone(options))
  };
}
function MappedIntrinsicPropertyKeys(K, M, options) {
  const result = K.reduce((Acc, L) => {
    return { ...Acc, ...MappedIntrinsicPropertyKey(L, M, options) };
  }, {});
  return result;
}
function MappedIntrinsicProperties(T, M, options) {
  return MappedIntrinsicPropertyKeys(T["keys"], M, options);
}
function IntrinsicFromMappedKey(T, M, options) {
  const P = MappedIntrinsicProperties(T, M, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/intrinsic.mjs
function ApplyUncapitalize(value) {
  const [first, rest] = [value.slice(0, 1), value.slice(1)];
  return [first.toLowerCase(), rest].join("");
}
function ApplyCapitalize(value) {
  const [first, rest] = [value.slice(0, 1), value.slice(1)];
  return [first.toUpperCase(), rest].join("");
}
function ApplyUppercase(value) {
  return value.toUpperCase();
}
function ApplyLowercase(value) {
  return value.toLowerCase();
}
function FromTemplateLiteral3(schema, mode, options) {
  const expression = TemplateLiteralParseExact(schema.pattern);
  const finite = IsTemplateLiteralExpressionFinite(expression);
  if (!finite)
    return { ...schema, pattern: FromLiteralValue(schema.pattern, mode) };
  const strings = [...TemplateLiteralExpressionGenerate(expression)];
  const literals = strings.map((value) => Literal(value));
  const mapped = FromRest5(literals, mode);
  const union = Union(mapped);
  return TemplateLiteral([union], options);
}
function FromLiteralValue(value, mode) {
  return typeof value === "string" ? mode === "Uncapitalize" ? ApplyUncapitalize(value) : mode === "Capitalize" ? ApplyCapitalize(value) : mode === "Uppercase" ? ApplyUppercase(value) : mode === "Lowercase" ? ApplyLowercase(value) : value : value.toString();
}
function FromRest5(T, M) {
  return T.map((L) => Intrinsic(L, M));
}
function Intrinsic(schema, mode, options = {}) {
  return IsMappedKey(schema) ? IntrinsicFromMappedKey(schema, mode, options) : IsTemplateLiteral(schema) ? FromTemplateLiteral3(schema, mode, options) : IsUnion(schema) ? Union(FromRest5(schema.anyOf, mode), options) : IsLiteral(schema) ? Literal(FromLiteralValue(schema.const, mode), options) : CreateType(schema, options);
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/capitalize.mjs
function Capitalize(T, options = {}) {
  return Intrinsic(T, "Capitalize", options);
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/lowercase.mjs
function Lowercase(T, options = {}) {
  return Intrinsic(T, "Lowercase", options);
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/uncapitalize.mjs
function Uncapitalize(T, options = {}) {
  return Intrinsic(T, "Uncapitalize", options);
}

// node_modules/@sinclair/typebox/build/esm/type/intrinsic/uppercase.mjs
function Uppercase(T, options = {}) {
  return Intrinsic(T, "Uppercase", options);
}

// node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-result.mjs
function FromProperties12(properties, propertyKeys, options) {
  const result = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(properties))
    result[K2] = Omit(properties[K2], propertyKeys, Clone(options));
  return result;
}
function FromMappedResult9(mappedResult, propertyKeys, options) {
  return FromProperties12(mappedResult.properties, propertyKeys, options);
}
function OmitFromMappedResult(mappedResult, propertyKeys, options) {
  const properties = FromMappedResult9(mappedResult, propertyKeys, options);
  return MappedResult(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/omit/omit.mjs
function FromIntersect6(types, propertyKeys) {
  return types.map((type) => OmitResolve(type, propertyKeys));
}
function FromUnion8(types, propertyKeys) {
  return types.map((type) => OmitResolve(type, propertyKeys));
}
function FromProperty3(properties, key) {
  const { [key]: _, ...R } = properties;
  return R;
}
function FromProperties13(properties, propertyKeys) {
  return propertyKeys.reduce((T, K2) => FromProperty3(T, K2), properties);
}
function FromObject3(type, propertyKeys, properties) {
  const options = Discard(type, [TransformKind, "$id", "required", "properties"]);
  const mappedProperties = FromProperties13(properties, propertyKeys);
  return Object2(mappedProperties, options);
}
function UnionFromPropertyKeys(propertyKeys) {
  const result = propertyKeys.reduce((result, key) => IsLiteralValue(key) ? [...result, Literal(key)] : result, []);
  return Union(result);
}
function OmitResolve(type, propertyKeys) {
  return IsIntersect(type) ? Intersect(FromIntersect6(type.allOf, propertyKeys)) : IsUnion(type) ? Union(FromUnion8(type.anyOf, propertyKeys)) : IsObject3(type) ? FromObject3(type, propertyKeys, type.properties) : Object2({});
}
function Omit(type, key, options) {
  const typeKey = IsArray(key) ? UnionFromPropertyKeys(key) : key;
  const propertyKeys = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const isTypeRef = IsRef(type);
  const isKeyRef = IsRef(key);
  return IsMappedResult(type) ? OmitFromMappedResult(type, propertyKeys, options) : IsMappedKey(key) ? OmitFromMappedKey(type, key, options) : isTypeRef && isKeyRef ? Computed("Omit", [type, typeKey], options) : !isTypeRef && isKeyRef ? Computed("Omit", [type, typeKey], options) : isTypeRef && !isKeyRef ? Computed("Omit", [type, typeKey], options) : CreateType({ ...OmitResolve(type, propertyKeys), ...options });
}

// node_modules/@sinclair/typebox/build/esm/type/omit/omit-from-mapped-key.mjs
function FromPropertyKey2(type, key, options) {
  return { [key]: Omit(type, [key], Clone(options)) };
}
function FromPropertyKeys2(type, propertyKeys, options) {
  return propertyKeys.reduce((Acc, LK) => {
    return { ...Acc, ...FromPropertyKey2(type, LK, options) };
  }, {});
}
function FromMappedKey3(type, mappedKey, options) {
  return FromPropertyKeys2(type, mappedKey.keys, options);
}
function OmitFromMappedKey(type, mappedKey, options) {
  const properties = FromMappedKey3(type, mappedKey, options);
  return MappedResult(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-result.mjs
function FromProperties14(properties, propertyKeys, options) {
  const result = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(properties))
    result[K2] = Pick(properties[K2], propertyKeys, Clone(options));
  return result;
}
function FromMappedResult10(mappedResult, propertyKeys, options) {
  return FromProperties14(mappedResult.properties, propertyKeys, options);
}
function PickFromMappedResult(mappedResult, propertyKeys, options) {
  const properties = FromMappedResult10(mappedResult, propertyKeys, options);
  return MappedResult(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/pick/pick.mjs
function FromIntersect7(types, propertyKeys) {
  return types.map((type) => PickResolve(type, propertyKeys));
}
function FromUnion9(types, propertyKeys) {
  return types.map((type) => PickResolve(type, propertyKeys));
}
function FromProperties15(properties, propertyKeys) {
  const result = {};
  for (const K2 of propertyKeys)
    if (K2 in properties)
      result[K2] = properties[K2];
  return result;
}
function FromObject4(Type, keys, properties) {
  const options = Discard(Type, [TransformKind, "$id", "required", "properties"]);
  const mappedProperties = FromProperties15(properties, keys);
  return Object2(mappedProperties, options);
}
function UnionFromPropertyKeys2(propertyKeys) {
  const result = propertyKeys.reduce((result, key) => IsLiteralValue(key) ? [...result, Literal(key)] : result, []);
  return Union(result);
}
function PickResolve(type, propertyKeys) {
  return IsIntersect(type) ? Intersect(FromIntersect7(type.allOf, propertyKeys)) : IsUnion(type) ? Union(FromUnion9(type.anyOf, propertyKeys)) : IsObject3(type) ? FromObject4(type, propertyKeys, type.properties) : Object2({});
}
function Pick(type, key, options) {
  const typeKey = IsArray(key) ? UnionFromPropertyKeys2(key) : key;
  const propertyKeys = IsSchema(key) ? IndexPropertyKeys(key) : key;
  const isTypeRef = IsRef(type);
  const isKeyRef = IsRef(key);
  return IsMappedResult(type) ? PickFromMappedResult(type, propertyKeys, options) : IsMappedKey(key) ? PickFromMappedKey(type, key, options) : isTypeRef && isKeyRef ? Computed("Pick", [type, typeKey], options) : !isTypeRef && isKeyRef ? Computed("Pick", [type, typeKey], options) : isTypeRef && !isKeyRef ? Computed("Pick", [type, typeKey], options) : CreateType({ ...PickResolve(type, propertyKeys), ...options });
}

// node_modules/@sinclair/typebox/build/esm/type/pick/pick-from-mapped-key.mjs
function FromPropertyKey3(type, key, options) {
  return {
    [key]: Pick(type, [key], Clone(options))
  };
}
function FromPropertyKeys3(type, propertyKeys, options) {
  return propertyKeys.reduce((result, leftKey) => {
    return { ...result, ...FromPropertyKey3(type, leftKey, options) };
  }, {});
}
function FromMappedKey4(type, mappedKey, options) {
  return FromPropertyKeys3(type, mappedKey.keys, options);
}
function PickFromMappedKey(type, mappedKey, options) {
  const properties = FromMappedKey4(type, mappedKey, options);
  return MappedResult(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/partial/partial.mjs
function FromComputed3(target, parameters) {
  return Computed("Partial", [Computed(target, parameters)]);
}
function FromRef3($ref) {
  return Computed("Partial", [Ref($ref)]);
}
function FromProperties16(properties) {
  const partialProperties = {};
  for (const K of globalThis.Object.getOwnPropertyNames(properties))
    partialProperties[K] = Optional(properties[K]);
  return partialProperties;
}
function FromObject5(type, properties) {
  const options = Discard(type, [TransformKind, "$id", "required", "properties"]);
  const mappedProperties = FromProperties16(properties);
  return Object2(mappedProperties, options);
}
function FromRest6(types) {
  return types.map((type) => PartialResolve(type));
}
function PartialResolve(type) {
  return IsComputed(type) ? FromComputed3(type.target, type.parameters) : IsRef(type) ? FromRef3(type.$ref) : IsIntersect(type) ? Intersect(FromRest6(type.allOf)) : IsUnion(type) ? Union(FromRest6(type.anyOf)) : IsObject3(type) ? FromObject5(type, type.properties) : IsBigInt3(type) ? type : IsBoolean3(type) ? type : IsInteger2(type) ? type : IsLiteral(type) ? type : IsNull3(type) ? type : IsNumber3(type) ? type : IsString3(type) ? type : IsSymbol3(type) ? type : IsUndefined3(type) ? type : Object2({});
}
function Partial(type, options) {
  if (IsMappedResult(type)) {
    return PartialFromMappedResult(type, options);
  } else {
    return CreateType({ ...PartialResolve(type), ...options });
  }
}

// node_modules/@sinclair/typebox/build/esm/type/partial/partial-from-mapped-result.mjs
function FromProperties17(K, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(K))
    Acc[K2] = Partial(K[K2], Clone(options));
  return Acc;
}
function FromMappedResult11(R, options) {
  return FromProperties17(R.properties, options);
}
function PartialFromMappedResult(R, options) {
  const P = FromMappedResult11(R, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/required/required.mjs
function FromComputed4(target, parameters) {
  return Computed("Required", [Computed(target, parameters)]);
}
function FromRef4($ref) {
  return Computed("Required", [Ref($ref)]);
}
function FromProperties18(properties) {
  const requiredProperties = {};
  for (const K of globalThis.Object.getOwnPropertyNames(properties))
    requiredProperties[K] = Discard(properties[K], [OptionalKind]);
  return requiredProperties;
}
function FromObject6(type, properties) {
  const options = Discard(type, [TransformKind, "$id", "required", "properties"]);
  const mappedProperties = FromProperties18(properties);
  return Object2(mappedProperties, options);
}
function FromRest7(types) {
  return types.map((type) => RequiredResolve(type));
}
function RequiredResolve(type) {
  return IsComputed(type) ? FromComputed4(type.target, type.parameters) : IsRef(type) ? FromRef4(type.$ref) : IsIntersect(type) ? Intersect(FromRest7(type.allOf)) : IsUnion(type) ? Union(FromRest7(type.anyOf)) : IsObject3(type) ? FromObject6(type, type.properties) : IsBigInt3(type) ? type : IsBoolean3(type) ? type : IsInteger2(type) ? type : IsLiteral(type) ? type : IsNull3(type) ? type : IsNumber3(type) ? type : IsString3(type) ? type : IsSymbol3(type) ? type : IsUndefined3(type) ? type : Object2({});
}
function Required(type, options) {
  if (IsMappedResult(type)) {
    return RequiredFromMappedResult(type, options);
  } else {
    return CreateType({ ...RequiredResolve(type), ...options });
  }
}

// node_modules/@sinclair/typebox/build/esm/type/required/required-from-mapped-result.mjs
function FromProperties19(P, options) {
  const Acc = {};
  for (const K2 of globalThis.Object.getOwnPropertyNames(P))
    Acc[K2] = Required(P[K2], options);
  return Acc;
}
function FromMappedResult12(R, options) {
  return FromProperties19(R.properties, options);
}
function RequiredFromMappedResult(R, options) {
  const P = FromMappedResult12(R, options);
  return MappedResult(P);
}

// node_modules/@sinclair/typebox/build/esm/type/module/compute.mjs
function DereferenceParameters(moduleProperties, types) {
  return types.map((type) => {
    return IsRef(type) ? Dereference(moduleProperties, type.$ref) : FromType2(moduleProperties, type);
  });
}
function Dereference(moduleProperties, ref) {
  return ref in moduleProperties ? IsRef(moduleProperties[ref]) ? Dereference(moduleProperties, moduleProperties[ref].$ref) : FromType2(moduleProperties, moduleProperties[ref]) : Never();
}
function FromAwaited(parameters) {
  return Awaited(parameters[0]);
}
function FromIndex(parameters) {
  return Index(parameters[0], parameters[1]);
}
function FromKeyOf(parameters) {
  return KeyOf(parameters[0]);
}
function FromPartial(parameters) {
  return Partial(parameters[0]);
}
function FromOmit(parameters) {
  return Omit(parameters[0], parameters[1]);
}
function FromPick(parameters) {
  return Pick(parameters[0], parameters[1]);
}
function FromRequired(parameters) {
  return Required(parameters[0]);
}
function FromComputed5(moduleProperties, target, parameters) {
  const dereferenced = DereferenceParameters(moduleProperties, parameters);
  return target === "Awaited" ? FromAwaited(dereferenced) : target === "Index" ? FromIndex(dereferenced) : target === "KeyOf" ? FromKeyOf(dereferenced) : target === "Partial" ? FromPartial(dereferenced) : target === "Omit" ? FromOmit(dereferenced) : target === "Pick" ? FromPick(dereferenced) : target === "Required" ? FromRequired(dereferenced) : Never();
}
function FromArray6(moduleProperties, type) {
  return Array2(FromType2(moduleProperties, type));
}
function FromAsyncIterator3(moduleProperties, type) {
  return AsyncIterator(FromType2(moduleProperties, type));
}
function FromConstructor3(moduleProperties, parameters, instanceType) {
  return Constructor(FromTypes2(moduleProperties, parameters), FromType2(moduleProperties, instanceType));
}
function FromFunction3(moduleProperties, parameters, returnType) {
  return Function2(FromTypes2(moduleProperties, parameters), FromType2(moduleProperties, returnType));
}
function FromIntersect8(moduleProperties, types) {
  return Intersect(FromTypes2(moduleProperties, types));
}
function FromIterator3(moduleProperties, type) {
  return Iterator(FromType2(moduleProperties, type));
}
function FromObject7(moduleProperties, properties) {
  return Object2(globalThis.Object.keys(properties).reduce((result, key) => {
    return { ...result, [key]: FromType2(moduleProperties, properties[key]) };
  }, {}));
}
function FromRecord3(moduleProperties, type) {
  const [value, pattern] = [FromType2(moduleProperties, RecordValue2(type)), RecordPattern(type)];
  const result = CloneType(type);
  result.patternProperties[pattern] = value;
  return result;
}
function FromTransform(moduleProperties, transform) {
  return IsRef(transform) ? { ...Dereference(moduleProperties, transform.$ref), [TransformKind]: transform[TransformKind] } : transform;
}
function FromTuple5(moduleProperties, types) {
  return Tuple(FromTypes2(moduleProperties, types));
}
function FromUnion10(moduleProperties, types) {
  return Union(FromTypes2(moduleProperties, types));
}
function FromTypes2(moduleProperties, types) {
  return types.map((type) => FromType2(moduleProperties, type));
}
function FromType2(moduleProperties, type) {
  return IsOptional(type) ? CreateType(FromType2(moduleProperties, Discard(type, [OptionalKind])), type) : IsReadonly(type) ? CreateType(FromType2(moduleProperties, Discard(type, [ReadonlyKind])), type) : IsTransform(type) ? CreateType(FromTransform(moduleProperties, type), type) : IsArray3(type) ? CreateType(FromArray6(moduleProperties, type.items), type) : IsAsyncIterator3(type) ? CreateType(FromAsyncIterator3(moduleProperties, type.items), type) : IsComputed(type) ? CreateType(FromComputed5(moduleProperties, type.target, type.parameters)) : IsConstructor(type) ? CreateType(FromConstructor3(moduleProperties, type.parameters, type.returns), type) : IsFunction3(type) ? CreateType(FromFunction3(moduleProperties, type.parameters, type.returns), type) : IsIntersect(type) ? CreateType(FromIntersect8(moduleProperties, type.allOf), type) : IsIterator3(type) ? CreateType(FromIterator3(moduleProperties, type.items), type) : IsObject3(type) ? CreateType(FromObject7(moduleProperties, type.properties), type) : IsRecord(type) ? CreateType(FromRecord3(moduleProperties, type)) : IsTuple(type) ? CreateType(FromTuple5(moduleProperties, type.items || []), type) : IsUnion(type) ? CreateType(FromUnion10(moduleProperties, type.anyOf), type) : type;
}
function ComputeType(moduleProperties, key) {
  return key in moduleProperties ? FromType2(moduleProperties, moduleProperties[key]) : Never();
}
function ComputeModuleProperties(moduleProperties) {
  return globalThis.Object.getOwnPropertyNames(moduleProperties).reduce((result, key) => {
    return { ...result, [key]: ComputeType(moduleProperties, key) };
  }, {});
}

// node_modules/@sinclair/typebox/build/esm/type/module/module.mjs
class TModule {
  constructor($defs) {
    const computed = ComputeModuleProperties($defs);
    const identified = this.WithIdentifiers(computed);
    this.$defs = identified;
  }
  Import(key, options) {
    const $defs = { ...this.$defs, [key]: CreateType(this.$defs[key], options) };
    return CreateType({ [Kind]: "Import", $defs, $ref: key });
  }
  WithIdentifiers($defs) {
    return globalThis.Object.getOwnPropertyNames($defs).reduce((result, key) => {
      return { ...result, [key]: { ...$defs[key], $id: key } };
    }, {});
  }
}
function Module(properties) {
  return new TModule(properties);
}

// node_modules/@sinclair/typebox/build/esm/type/not/not.mjs
function Not2(type, options) {
  return CreateType({ [Kind]: "Not", not: type }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/parameters/parameters.mjs
function Parameters(schema, options) {
  return IsFunction3(schema) ? Tuple(schema.parameters, options) : Never();
}

// node_modules/@sinclair/typebox/build/esm/type/recursive/recursive.mjs
var Ordinal = 0;
function Recursive(callback, options = {}) {
  if (IsUndefined(options.$id))
    options.$id = `T${Ordinal++}`;
  const thisType = CloneType(callback({ [Kind]: "This", $ref: `${options.$id}` }));
  thisType.$id = options.$id;
  return CreateType({ [Hint]: "Recursive", ...thisType }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/regexp/regexp.mjs
function RegExp2(unresolved, options) {
  const expr = IsString(unresolved) ? new globalThis.RegExp(unresolved) : unresolved;
  return CreateType({ [Kind]: "RegExp", type: "RegExp", source: expr.source, flags: expr.flags }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/rest/rest.mjs
function RestResolve(T) {
  return IsIntersect(T) ? T.allOf : IsUnion(T) ? T.anyOf : IsTuple(T) ? T.items ?? [] : [];
}
function Rest(T) {
  return RestResolve(T);
}

// node_modules/@sinclair/typebox/build/esm/type/return-type/return-type.mjs
function ReturnType(schema, options) {
  return IsFunction3(schema) ? CreateType(schema.returns, options) : Never(options);
}

// node_modules/@sinclair/typebox/build/esm/type/transform/transform.mjs
class TransformDecodeBuilder {
  constructor(schema) {
    this.schema = schema;
  }
  Decode(decode) {
    return new TransformEncodeBuilder(this.schema, decode);
  }
}

class TransformEncodeBuilder {
  constructor(schema, decode) {
    this.schema = schema;
    this.decode = decode;
  }
  EncodeTransform(encode, schema) {
    const Encode = (value) => schema[TransformKind].Encode(encode(value));
    const Decode = (value) => this.decode(schema[TransformKind].Decode(value));
    const Codec = { Encode, Decode };
    return { ...schema, [TransformKind]: Codec };
  }
  EncodeSchema(encode, schema) {
    const Codec = { Decode: this.decode, Encode: encode };
    return { ...schema, [TransformKind]: Codec };
  }
  Encode(encode) {
    return IsTransform(this.schema) ? this.EncodeTransform(encode, this.schema) : this.EncodeSchema(encode, this.schema);
  }
}
function Transform(schema) {
  return new TransformDecodeBuilder(schema);
}

// node_modules/@sinclair/typebox/build/esm/type/unsafe/unsafe.mjs
function Unsafe(options = {}) {
  return CreateType({ [Kind]: options[Kind] ?? "Unsafe" }, options);
}

// node_modules/@sinclair/typebox/build/esm/type/void/void.mjs
function Void(options) {
  return CreateType({ [Kind]: "Void", type: "void" }, options);
}
// node_modules/@sinclair/typebox/build/esm/type/type/index.mjs
var Type = exports_type3;

// node_modules/elysia/dist/index.mjs
var import_fast_decode_uri_component4 = __toESM(require_fast_decode_uri_component(), 1);

// node_modules/@sinclair/typebox/build/esm/system/evaluate.mjs
function Evaluate(...args) {
  return new globalThis.Function(...args);
}

// node_modules/@sinclair/typebox/build/esm/errors/function.mjs
function DefaultErrorFunction(error) {
  switch (error.errorType) {
    case ValueErrorType.ArrayContains:
      return "Expected array to contain at least one matching value";
    case ValueErrorType.ArrayMaxContains:
      return `Expected array to contain no more than ${error.schema.maxContains} matching values`;
    case ValueErrorType.ArrayMinContains:
      return `Expected array to contain at least ${error.schema.minContains} matching values`;
    case ValueErrorType.ArrayMaxItems:
      return `Expected array length to be less or equal to ${error.schema.maxItems}`;
    case ValueErrorType.ArrayMinItems:
      return `Expected array length to be greater or equal to ${error.schema.minItems}`;
    case ValueErrorType.ArrayUniqueItems:
      return "Expected array elements to be unique";
    case ValueErrorType.Array:
      return "Expected array";
    case ValueErrorType.AsyncIterator:
      return "Expected AsyncIterator";
    case ValueErrorType.BigIntExclusiveMaximum:
      return `Expected bigint to be less than ${error.schema.exclusiveMaximum}`;
    case ValueErrorType.BigIntExclusiveMinimum:
      return `Expected bigint to be greater than ${error.schema.exclusiveMinimum}`;
    case ValueErrorType.BigIntMaximum:
      return `Expected bigint to be less or equal to ${error.schema.maximum}`;
    case ValueErrorType.BigIntMinimum:
      return `Expected bigint to be greater or equal to ${error.schema.minimum}`;
    case ValueErrorType.BigIntMultipleOf:
      return `Expected bigint to be a multiple of ${error.schema.multipleOf}`;
    case ValueErrorType.BigInt:
      return "Expected bigint";
    case ValueErrorType.Boolean:
      return "Expected boolean";
    case ValueErrorType.DateExclusiveMinimumTimestamp:
      return `Expected Date timestamp to be greater than ${error.schema.exclusiveMinimumTimestamp}`;
    case ValueErrorType.DateExclusiveMaximumTimestamp:
      return `Expected Date timestamp to be less than ${error.schema.exclusiveMaximumTimestamp}`;
    case ValueErrorType.DateMinimumTimestamp:
      return `Expected Date timestamp to be greater or equal to ${error.schema.minimumTimestamp}`;
    case ValueErrorType.DateMaximumTimestamp:
      return `Expected Date timestamp to be less or equal to ${error.schema.maximumTimestamp}`;
    case ValueErrorType.DateMultipleOfTimestamp:
      return `Expected Date timestamp to be a multiple of ${error.schema.multipleOfTimestamp}`;
    case ValueErrorType.Date:
      return "Expected Date";
    case ValueErrorType.Function:
      return "Expected function";
    case ValueErrorType.IntegerExclusiveMaximum:
      return `Expected integer to be less than ${error.schema.exclusiveMaximum}`;
    case ValueErrorType.IntegerExclusiveMinimum:
      return `Expected integer to be greater than ${error.schema.exclusiveMinimum}`;
    case ValueErrorType.IntegerMaximum:
      return `Expected integer to be less or equal to ${error.schema.maximum}`;
    case ValueErrorType.IntegerMinimum:
      return `Expected integer to be greater or equal to ${error.schema.minimum}`;
    case ValueErrorType.IntegerMultipleOf:
      return `Expected integer to be a multiple of ${error.schema.multipleOf}`;
    case ValueErrorType.Integer:
      return "Expected integer";
    case ValueErrorType.IntersectUnevaluatedProperties:
      return "Unexpected property";
    case ValueErrorType.Intersect:
      return "Expected all values to match";
    case ValueErrorType.Iterator:
      return "Expected Iterator";
    case ValueErrorType.Literal:
      return `Expected ${typeof error.schema.const === "string" ? `'${error.schema.const}'` : error.schema.const}`;
    case ValueErrorType.Never:
      return "Never";
    case ValueErrorType.Not:
      return "Value should not match";
    case ValueErrorType.Null:
      return "Expected null";
    case ValueErrorType.NumberExclusiveMaximum:
      return `Expected number to be less than ${error.schema.exclusiveMaximum}`;
    case ValueErrorType.NumberExclusiveMinimum:
      return `Expected number to be greater than ${error.schema.exclusiveMinimum}`;
    case ValueErrorType.NumberMaximum:
      return `Expected number to be less or equal to ${error.schema.maximum}`;
    case ValueErrorType.NumberMinimum:
      return `Expected number to be greater or equal to ${error.schema.minimum}`;
    case ValueErrorType.NumberMultipleOf:
      return `Expected number to be a multiple of ${error.schema.multipleOf}`;
    case ValueErrorType.Number:
      return "Expected number";
    case ValueErrorType.Object:
      return "Expected object";
    case ValueErrorType.ObjectAdditionalProperties:
      return "Unexpected property";
    case ValueErrorType.ObjectMaxProperties:
      return `Expected object to have no more than ${error.schema.maxProperties} properties`;
    case ValueErrorType.ObjectMinProperties:
      return `Expected object to have at least ${error.schema.minProperties} properties`;
    case ValueErrorType.ObjectRequiredProperty:
      return "Expected required property";
    case ValueErrorType.Promise:
      return "Expected Promise";
    case ValueErrorType.RegExp:
      return "Expected string to match regular expression";
    case ValueErrorType.StringFormatUnknown:
      return `Unknown format '${error.schema.format}'`;
    case ValueErrorType.StringFormat:
      return `Expected string to match '${error.schema.format}' format`;
    case ValueErrorType.StringMaxLength:
      return `Expected string length less or equal to ${error.schema.maxLength}`;
    case ValueErrorType.StringMinLength:
      return `Expected string length greater or equal to ${error.schema.minLength}`;
    case ValueErrorType.StringPattern:
      return `Expected string to match '${error.schema.pattern}'`;
    case ValueErrorType.String:
      return "Expected string";
    case ValueErrorType.Symbol:
      return "Expected symbol";
    case ValueErrorType.TupleLength:
      return `Expected tuple to have ${error.schema.maxItems || 0} elements`;
    case ValueErrorType.Tuple:
      return "Expected tuple";
    case ValueErrorType.Uint8ArrayMaxByteLength:
      return `Expected byte length less or equal to ${error.schema.maxByteLength}`;
    case ValueErrorType.Uint8ArrayMinByteLength:
      return `Expected byte length greater or equal to ${error.schema.minByteLength}`;
    case ValueErrorType.Uint8Array:
      return "Expected Uint8Array";
    case ValueErrorType.Undefined:
      return "Expected undefined";
    case ValueErrorType.Union:
      return "Expected union value";
    case ValueErrorType.Void:
      return "Expected void";
    case ValueErrorType.Kind:
      return `Expected kind '${error.schema[Kind]}'`;
    default:
      return "Unknown error type";
  }
}
var errorFunction = DefaultErrorFunction;
function GetErrorFunction() {
  return errorFunction;
}

// node_modules/@sinclair/typebox/build/esm/value/deref/deref.mjs
class TypeDereferenceError extends TypeBoxError {
  constructor(schema) {
    super(`Unable to dereference schema with $id '${schema.$ref}'`);
    this.schema = schema;
  }
}
function Resolve(schema, references) {
  const target = references.find((target) => target.$id === schema.$ref);
  if (target === undefined)
    throw new TypeDereferenceError(schema);
  return Deref(target, references);
}
function Pushref(schema, references) {
  if (!IsString2(schema.$id) || references.some((target) => target.$id === schema.$id))
    return references;
  references.push(schema);
  return references;
}
function Deref(schema, references) {
  return schema[Kind] === "This" || schema[Kind] === "Ref" ? Resolve(schema, references) : schema;
}

// node_modules/@sinclair/typebox/build/esm/value/hash/hash.mjs
class ValueHashError extends TypeBoxError {
  constructor(value) {
    super(`Unable to hash value`);
    this.value = value;
  }
}
var ByteMarker;
(function(ByteMarker) {
  ByteMarker[ByteMarker["Undefined"] = 0] = "Undefined";
  ByteMarker[ByteMarker["Null"] = 1] = "Null";
  ByteMarker[ByteMarker["Boolean"] = 2] = "Boolean";
  ByteMarker[ByteMarker["Number"] = 3] = "Number";
  ByteMarker[ByteMarker["String"] = 4] = "String";
  ByteMarker[ByteMarker["Object"] = 5] = "Object";
  ByteMarker[ByteMarker["Array"] = 6] = "Array";
  ByteMarker[ByteMarker["Date"] = 7] = "Date";
  ByteMarker[ByteMarker["Uint8Array"] = 8] = "Uint8Array";
  ByteMarker[ByteMarker["Symbol"] = 9] = "Symbol";
  ByteMarker[ByteMarker["BigInt"] = 10] = "BigInt";
})(ByteMarker || (ByteMarker = {}));
var Accumulator = BigInt("14695981039346656037");
var [Prime, Size] = [BigInt("1099511628211"), BigInt("18446744073709551616")];
var Bytes = Array.from({ length: 256 }).map((_, i) => BigInt(i));
var F64 = new Float64Array(1);
var F64In = new DataView(F64.buffer);
var F64Out = new Uint8Array(F64.buffer);
function* NumberToBytes(value) {
  const byteCount = value === 0 ? 1 : Math.ceil(Math.floor(Math.log2(value) + 1) / 8);
  for (let i = 0;i < byteCount; i++) {
    yield value >> 8 * (byteCount - 1 - i) & 255;
  }
}
function ArrayType2(value) {
  FNV1A64(ByteMarker.Array);
  for (const item of value) {
    Visit4(item);
  }
}
function BooleanType(value) {
  FNV1A64(ByteMarker.Boolean);
  FNV1A64(value ? 1 : 0);
}
function BigIntType(value) {
  FNV1A64(ByteMarker.BigInt);
  F64In.setBigInt64(0, value);
  for (const byte of F64Out) {
    FNV1A64(byte);
  }
}
function DateType2(value) {
  FNV1A64(ByteMarker.Date);
  Visit4(value.getTime());
}
function NullType(value) {
  FNV1A64(ByteMarker.Null);
}
function NumberType(value) {
  FNV1A64(ByteMarker.Number);
  F64In.setFloat64(0, value);
  for (const byte of F64Out) {
    FNV1A64(byte);
  }
}
function ObjectType2(value) {
  FNV1A64(ByteMarker.Object);
  for (const key of globalThis.Object.getOwnPropertyNames(value).sort()) {
    Visit4(key);
    Visit4(value[key]);
  }
}
function StringType(value) {
  FNV1A64(ByteMarker.String);
  for (let i = 0;i < value.length; i++) {
    for (const byte of NumberToBytes(value.charCodeAt(i))) {
      FNV1A64(byte);
    }
  }
}
function SymbolType(value) {
  FNV1A64(ByteMarker.Symbol);
  Visit4(value.description);
}
function Uint8ArrayType2(value) {
  FNV1A64(ByteMarker.Uint8Array);
  for (let i = 0;i < value.length; i++) {
    FNV1A64(value[i]);
  }
}
function UndefinedType(value) {
  return FNV1A64(ByteMarker.Undefined);
}
function Visit4(value) {
  if (IsArray2(value))
    return ArrayType2(value);
  if (IsBoolean2(value))
    return BooleanType(value);
  if (IsBigInt2(value))
    return BigIntType(value);
  if (IsDate2(value))
    return DateType2(value);
  if (IsNull2(value))
    return NullType(value);
  if (IsNumber2(value))
    return NumberType(value);
  if (IsObject2(value))
    return ObjectType2(value);
  if (IsString2(value))
    return StringType(value);
  if (IsSymbol2(value))
    return SymbolType(value);
  if (IsUint8Array2(value))
    return Uint8ArrayType2(value);
  if (IsUndefined2(value))
    return UndefinedType(value);
  throw new ValueHashError(value);
}
function FNV1A64(byte) {
  Accumulator = Accumulator ^ Bytes[byte];
  Accumulator = Accumulator * Prime % Size;
}
function Hash(value) {
  Accumulator = BigInt("14695981039346656037");
  Visit4(value);
  return Accumulator;
}

// node_modules/@sinclair/typebox/build/esm/value/check/check.mjs
class ValueCheckUnknownTypeError extends TypeBoxError {
  constructor(schema) {
    super(`Unknown type`);
    this.schema = schema;
  }
}
function IsAnyOrUnknown(schema) {
  return schema[Kind] === "Any" || schema[Kind] === "Unknown";
}
function IsDefined(value) {
  return value !== undefined;
}
function FromAny2(schema, references, value) {
  return true;
}
function FromArgument2(schema, references, value) {
  return true;
}
function FromArray7(schema, references, value) {
  if (!IsArray2(value))
    return false;
  if (IsDefined(schema.minItems) && !(value.length >= schema.minItems)) {
    return false;
  }
  if (IsDefined(schema.maxItems) && !(value.length <= schema.maxItems)) {
    return false;
  }
  for (const element of value) {
    if (!Visit5(schema.items, references, element))
      return false;
  }
  if (schema.uniqueItems === true && !function() {
    const set = new Set;
    for (const element of value) {
      const hashed = Hash(element);
      if (set.has(hashed)) {
        return false;
      } else {
        set.add(hashed);
      }
    }
    return true;
  }()) {
    return false;
  }
  if (!(IsDefined(schema.contains) || IsNumber2(schema.minContains) || IsNumber2(schema.maxContains))) {
    return true;
  }
  const containsSchema = IsDefined(schema.contains) ? schema.contains : Never();
  const containsCount = value.reduce((acc, value) => Visit5(containsSchema, references, value) ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    return false;
  }
  if (IsNumber2(schema.minContains) && containsCount < schema.minContains) {
    return false;
  }
  if (IsNumber2(schema.maxContains) && containsCount > schema.maxContains) {
    return false;
  }
  return true;
}
function FromAsyncIterator4(schema, references, value) {
  return IsAsyncIterator2(value);
}
function FromBigInt2(schema, references, value) {
  if (!IsBigInt2(value))
    return false;
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
    return false;
  }
  return true;
}
function FromBoolean2(schema, references, value) {
  return IsBoolean2(value);
}
function FromConstructor4(schema, references, value) {
  return Visit5(schema.returns, references, value.prototype);
}
function FromDate2(schema, references, value) {
  if (!IsDate2(value))
    return false;
  if (IsDefined(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
    return false;
  }
  if (IsDefined(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
    return false;
  }
  return true;
}
function FromFunction4(schema, references, value) {
  return IsFunction2(value);
}
function FromImport(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit5(target, [...references, ...definitions], value);
}
function FromInteger2(schema, references, value) {
  if (!IsInteger(value)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    return false;
  }
  return true;
}
function FromIntersect9(schema, references, value) {
  const check1 = schema.allOf.every((schema) => Visit5(schema, references, value));
  if (schema.unevaluatedProperties === false) {
    const keyPattern = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value).every((key) => keyPattern.test(key));
    return check1 && check2;
  } else if (IsSchema(schema.unevaluatedProperties)) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    const check2 = Object.getOwnPropertyNames(value).every((key) => keyCheck.test(key) || Visit5(schema.unevaluatedProperties, references, value[key]));
    return check1 && check2;
  } else {
    return check1;
  }
}
function FromIterator4(schema, references, value) {
  return IsIterator2(value);
}
function FromLiteral3(schema, references, value) {
  return value === schema.const;
}
function FromNever2(schema, references, value) {
  return false;
}
function FromNot2(schema, references, value) {
  return !Visit5(schema.not, references, value);
}
function FromNull2(schema, references, value) {
  return IsNull2(value);
}
function FromNumber2(schema, references, value) {
  if (!TypeSystemPolicy.IsNumberLike(value))
    return false;
  if (IsDefined(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    return false;
  }
  if (IsDefined(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    return false;
  }
  if (IsDefined(schema.minimum) && !(value >= schema.minimum)) {
    return false;
  }
  if (IsDefined(schema.maximum) && !(value <= schema.maximum)) {
    return false;
  }
  if (IsDefined(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    return false;
  }
  return true;
}
function FromObject8(schema, references, value) {
  if (!TypeSystemPolicy.IsObjectLike(value))
    return false;
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    return false;
  }
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      if (!Visit5(property, references, value[knownKey])) {
        return false;
      }
      if ((ExtendsUndefinedCheck(property) || IsAnyOrUnknown(property)) && !(knownKey in value)) {
        return false;
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value, knownKey) && !Visit5(property, references, value[knownKey])) {
        return false;
      }
    }
  }
  if (schema.additionalProperties === false) {
    const valueKeys = Object.getOwnPropertyNames(value);
    if (schema.required && schema.required.length === knownKeys.length && valueKeys.length === knownKeys.length) {
      return true;
    } else {
      return valueKeys.every((valueKey) => knownKeys.includes(valueKey));
    }
  } else if (typeof schema.additionalProperties === "object") {
    const valueKeys = Object.getOwnPropertyNames(value);
    return valueKeys.every((key) => knownKeys.includes(key) || Visit5(schema.additionalProperties, references, value[key]));
  } else {
    return true;
  }
}
function FromPromise4(schema, references, value) {
  return IsPromise(value);
}
function FromRecord4(schema, references, value) {
  if (!TypeSystemPolicy.IsRecordLike(value)) {
    return false;
  }
  if (IsDefined(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    return false;
  }
  if (IsDefined(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    return false;
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex = new RegExp(patternKey);
  const check1 = Object.entries(value).every(([key, value]) => {
    return regex.test(key) ? Visit5(patternSchema, references, value) : true;
  });
  const check2 = typeof schema.additionalProperties === "object" ? Object.entries(value).every(([key, value]) => {
    return !regex.test(key) ? Visit5(schema.additionalProperties, references, value) : true;
  }) : true;
  const check3 = schema.additionalProperties === false ? Object.getOwnPropertyNames(value).every((key) => {
    return regex.test(key);
  }) : true;
  return check1 && check2 && check3;
}
function FromRef5(schema, references, value) {
  return Visit5(Deref(schema, references), references, value);
}
function FromRegExp2(schema, references, value) {
  const regex = new RegExp(schema.source, schema.flags);
  if (IsDefined(schema.minLength)) {
    if (!(value.length >= schema.minLength))
      return false;
  }
  if (IsDefined(schema.maxLength)) {
    if (!(value.length <= schema.maxLength))
      return false;
  }
  return regex.test(value);
}
function FromString2(schema, references, value) {
  if (!IsString2(value)) {
    return false;
  }
  if (IsDefined(schema.minLength)) {
    if (!(value.length >= schema.minLength))
      return false;
  }
  if (IsDefined(schema.maxLength)) {
    if (!(value.length <= schema.maxLength))
      return false;
  }
  if (IsDefined(schema.pattern)) {
    const regex = new RegExp(schema.pattern);
    if (!regex.test(value))
      return false;
  }
  if (IsDefined(schema.format)) {
    if (!Has(schema.format))
      return false;
    const func = Get(schema.format);
    return func(value);
  }
  return true;
}
function FromSymbol2(schema, references, value) {
  return IsSymbol2(value);
}
function FromTemplateLiteral4(schema, references, value) {
  return IsString2(value) && new RegExp(schema.pattern).test(value);
}
function FromThis(schema, references, value) {
  return Visit5(Deref(schema, references), references, value);
}
function FromTuple6(schema, references, value) {
  if (!IsArray2(value)) {
    return false;
  }
  if (schema.items === undefined && !(value.length === 0)) {
    return false;
  }
  if (!(value.length === schema.maxItems)) {
    return false;
  }
  if (!schema.items) {
    return true;
  }
  for (let i = 0;i < schema.items.length; i++) {
    if (!Visit5(schema.items[i], references, value[i]))
      return false;
  }
  return true;
}
function FromUndefined2(schema, references, value) {
  return IsUndefined2(value);
}
function FromUnion11(schema, references, value) {
  return schema.anyOf.some((inner) => Visit5(inner, references, value));
}
function FromUint8Array2(schema, references, value) {
  if (!IsUint8Array2(value)) {
    return false;
  }
  if (IsDefined(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
    return false;
  }
  if (IsDefined(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
    return false;
  }
  return true;
}
function FromUnknown2(schema, references, value) {
  return true;
}
function FromVoid2(schema, references, value) {
  return TypeSystemPolicy.IsVoidLike(value);
}
function FromKind(schema, references, value) {
  if (!Has2(schema[Kind]))
    return false;
  const func = Get2(schema[Kind]);
  return func(schema, value);
}
function Visit5(schema, references, value) {
  const references_ = IsDefined(schema.$id) ? Pushref(schema, references) : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return FromAny2(schema_, references_, value);
    case "Argument":
      return FromArgument2(schema_, references_, value);
    case "Array":
      return FromArray7(schema_, references_, value);
    case "AsyncIterator":
      return FromAsyncIterator4(schema_, references_, value);
    case "BigInt":
      return FromBigInt2(schema_, references_, value);
    case "Boolean":
      return FromBoolean2(schema_, references_, value);
    case "Constructor":
      return FromConstructor4(schema_, references_, value);
    case "Date":
      return FromDate2(schema_, references_, value);
    case "Function":
      return FromFunction4(schema_, references_, value);
    case "Import":
      return FromImport(schema_, references_, value);
    case "Integer":
      return FromInteger2(schema_, references_, value);
    case "Intersect":
      return FromIntersect9(schema_, references_, value);
    case "Iterator":
      return FromIterator4(schema_, references_, value);
    case "Literal":
      return FromLiteral3(schema_, references_, value);
    case "Never":
      return FromNever2(schema_, references_, value);
    case "Not":
      return FromNot2(schema_, references_, value);
    case "Null":
      return FromNull2(schema_, references_, value);
    case "Number":
      return FromNumber2(schema_, references_, value);
    case "Object":
      return FromObject8(schema_, references_, value);
    case "Promise":
      return FromPromise4(schema_, references_, value);
    case "Record":
      return FromRecord4(schema_, references_, value);
    case "Ref":
      return FromRef5(schema_, references_, value);
    case "RegExp":
      return FromRegExp2(schema_, references_, value);
    case "String":
      return FromString2(schema_, references_, value);
    case "Symbol":
      return FromSymbol2(schema_, references_, value);
    case "TemplateLiteral":
      return FromTemplateLiteral4(schema_, references_, value);
    case "This":
      return FromThis(schema_, references_, value);
    case "Tuple":
      return FromTuple6(schema_, references_, value);
    case "Undefined":
      return FromUndefined2(schema_, references_, value);
    case "Union":
      return FromUnion11(schema_, references_, value);
    case "Uint8Array":
      return FromUint8Array2(schema_, references_, value);
    case "Unknown":
      return FromUnknown2(schema_, references_, value);
    case "Void":
      return FromVoid2(schema_, references_, value);
    default:
      if (!Has2(schema_[Kind]))
        throw new ValueCheckUnknownTypeError(schema_);
      return FromKind(schema_, references_, value);
  }
}
function Check(...args) {
  return args.length === 3 ? Visit5(args[0], args[1], args[2]) : Visit5(args[0], [], args[1]);
}

// node_modules/@sinclair/typebox/build/esm/errors/errors.mjs
var ValueErrorType;
(function(ValueErrorType) {
  ValueErrorType[ValueErrorType["ArrayContains"] = 0] = "ArrayContains";
  ValueErrorType[ValueErrorType["ArrayMaxContains"] = 1] = "ArrayMaxContains";
  ValueErrorType[ValueErrorType["ArrayMaxItems"] = 2] = "ArrayMaxItems";
  ValueErrorType[ValueErrorType["ArrayMinContains"] = 3] = "ArrayMinContains";
  ValueErrorType[ValueErrorType["ArrayMinItems"] = 4] = "ArrayMinItems";
  ValueErrorType[ValueErrorType["ArrayUniqueItems"] = 5] = "ArrayUniqueItems";
  ValueErrorType[ValueErrorType["Array"] = 6] = "Array";
  ValueErrorType[ValueErrorType["AsyncIterator"] = 7] = "AsyncIterator";
  ValueErrorType[ValueErrorType["BigIntExclusiveMaximum"] = 8] = "BigIntExclusiveMaximum";
  ValueErrorType[ValueErrorType["BigIntExclusiveMinimum"] = 9] = "BigIntExclusiveMinimum";
  ValueErrorType[ValueErrorType["BigIntMaximum"] = 10] = "BigIntMaximum";
  ValueErrorType[ValueErrorType["BigIntMinimum"] = 11] = "BigIntMinimum";
  ValueErrorType[ValueErrorType["BigIntMultipleOf"] = 12] = "BigIntMultipleOf";
  ValueErrorType[ValueErrorType["BigInt"] = 13] = "BigInt";
  ValueErrorType[ValueErrorType["Boolean"] = 14] = "Boolean";
  ValueErrorType[ValueErrorType["DateExclusiveMaximumTimestamp"] = 15] = "DateExclusiveMaximumTimestamp";
  ValueErrorType[ValueErrorType["DateExclusiveMinimumTimestamp"] = 16] = "DateExclusiveMinimumTimestamp";
  ValueErrorType[ValueErrorType["DateMaximumTimestamp"] = 17] = "DateMaximumTimestamp";
  ValueErrorType[ValueErrorType["DateMinimumTimestamp"] = 18] = "DateMinimumTimestamp";
  ValueErrorType[ValueErrorType["DateMultipleOfTimestamp"] = 19] = "DateMultipleOfTimestamp";
  ValueErrorType[ValueErrorType["Date"] = 20] = "Date";
  ValueErrorType[ValueErrorType["Function"] = 21] = "Function";
  ValueErrorType[ValueErrorType["IntegerExclusiveMaximum"] = 22] = "IntegerExclusiveMaximum";
  ValueErrorType[ValueErrorType["IntegerExclusiveMinimum"] = 23] = "IntegerExclusiveMinimum";
  ValueErrorType[ValueErrorType["IntegerMaximum"] = 24] = "IntegerMaximum";
  ValueErrorType[ValueErrorType["IntegerMinimum"] = 25] = "IntegerMinimum";
  ValueErrorType[ValueErrorType["IntegerMultipleOf"] = 26] = "IntegerMultipleOf";
  ValueErrorType[ValueErrorType["Integer"] = 27] = "Integer";
  ValueErrorType[ValueErrorType["IntersectUnevaluatedProperties"] = 28] = "IntersectUnevaluatedProperties";
  ValueErrorType[ValueErrorType["Intersect"] = 29] = "Intersect";
  ValueErrorType[ValueErrorType["Iterator"] = 30] = "Iterator";
  ValueErrorType[ValueErrorType["Kind"] = 31] = "Kind";
  ValueErrorType[ValueErrorType["Literal"] = 32] = "Literal";
  ValueErrorType[ValueErrorType["Never"] = 33] = "Never";
  ValueErrorType[ValueErrorType["Not"] = 34] = "Not";
  ValueErrorType[ValueErrorType["Null"] = 35] = "Null";
  ValueErrorType[ValueErrorType["NumberExclusiveMaximum"] = 36] = "NumberExclusiveMaximum";
  ValueErrorType[ValueErrorType["NumberExclusiveMinimum"] = 37] = "NumberExclusiveMinimum";
  ValueErrorType[ValueErrorType["NumberMaximum"] = 38] = "NumberMaximum";
  ValueErrorType[ValueErrorType["NumberMinimum"] = 39] = "NumberMinimum";
  ValueErrorType[ValueErrorType["NumberMultipleOf"] = 40] = "NumberMultipleOf";
  ValueErrorType[ValueErrorType["Number"] = 41] = "Number";
  ValueErrorType[ValueErrorType["ObjectAdditionalProperties"] = 42] = "ObjectAdditionalProperties";
  ValueErrorType[ValueErrorType["ObjectMaxProperties"] = 43] = "ObjectMaxProperties";
  ValueErrorType[ValueErrorType["ObjectMinProperties"] = 44] = "ObjectMinProperties";
  ValueErrorType[ValueErrorType["ObjectRequiredProperty"] = 45] = "ObjectRequiredProperty";
  ValueErrorType[ValueErrorType["Object"] = 46] = "Object";
  ValueErrorType[ValueErrorType["Promise"] = 47] = "Promise";
  ValueErrorType[ValueErrorType["RegExp"] = 48] = "RegExp";
  ValueErrorType[ValueErrorType["StringFormatUnknown"] = 49] = "StringFormatUnknown";
  ValueErrorType[ValueErrorType["StringFormat"] = 50] = "StringFormat";
  ValueErrorType[ValueErrorType["StringMaxLength"] = 51] = "StringMaxLength";
  ValueErrorType[ValueErrorType["StringMinLength"] = 52] = "StringMinLength";
  ValueErrorType[ValueErrorType["StringPattern"] = 53] = "StringPattern";
  ValueErrorType[ValueErrorType["String"] = 54] = "String";
  ValueErrorType[ValueErrorType["Symbol"] = 55] = "Symbol";
  ValueErrorType[ValueErrorType["TupleLength"] = 56] = "TupleLength";
  ValueErrorType[ValueErrorType["Tuple"] = 57] = "Tuple";
  ValueErrorType[ValueErrorType["Uint8ArrayMaxByteLength"] = 58] = "Uint8ArrayMaxByteLength";
  ValueErrorType[ValueErrorType["Uint8ArrayMinByteLength"] = 59] = "Uint8ArrayMinByteLength";
  ValueErrorType[ValueErrorType["Uint8Array"] = 60] = "Uint8Array";
  ValueErrorType[ValueErrorType["Undefined"] = 61] = "Undefined";
  ValueErrorType[ValueErrorType["Union"] = 62] = "Union";
  ValueErrorType[ValueErrorType["Void"] = 63] = "Void";
})(ValueErrorType || (ValueErrorType = {}));

class ValueErrorsUnknownTypeError extends TypeBoxError {
  constructor(schema) {
    super("Unknown type");
    this.schema = schema;
  }
}
function EscapeKey(key) {
  return key.replace(/~/g, "~0").replace(/\//g, "~1");
}
function IsDefined2(value) {
  return value !== undefined;
}

class ValueErrorIterator {
  constructor(iterator) {
    this.iterator = iterator;
  }
  [Symbol.iterator]() {
    return this.iterator;
  }
  First() {
    const next = this.iterator.next();
    return next.done ? undefined : next.value;
  }
}
function Create(errorType, schema, path, value, errors = []) {
  return {
    type: errorType,
    schema,
    path,
    value,
    message: GetErrorFunction()({ errorType, path, schema, value, errors }),
    errors
  };
}
function* FromAny3(schema, references, path, value) {}
function* FromArgument3(schema, references, path, value) {}
function* FromArray8(schema, references, path, value) {
  if (!IsArray2(value)) {
    return yield Create(ValueErrorType.Array, schema, path, value);
  }
  if (IsDefined2(schema.minItems) && !(value.length >= schema.minItems)) {
    yield Create(ValueErrorType.ArrayMinItems, schema, path, value);
  }
  if (IsDefined2(schema.maxItems) && !(value.length <= schema.maxItems)) {
    yield Create(ValueErrorType.ArrayMaxItems, schema, path, value);
  }
  for (let i = 0;i < value.length; i++) {
    yield* Visit6(schema.items, references, `${path}/${i}`, value[i]);
  }
  if (schema.uniqueItems === true && !function() {
    const set = new Set;
    for (const element of value) {
      const hashed = Hash(element);
      if (set.has(hashed)) {
        return false;
      } else {
        set.add(hashed);
      }
    }
    return true;
  }()) {
    yield Create(ValueErrorType.ArrayUniqueItems, schema, path, value);
  }
  if (!(IsDefined2(schema.contains) || IsDefined2(schema.minContains) || IsDefined2(schema.maxContains))) {
    return;
  }
  const containsSchema = IsDefined2(schema.contains) ? schema.contains : Never();
  const containsCount = value.reduce((acc, value, index) => Visit6(containsSchema, references, `${path}${index}`, value).next().done === true ? acc + 1 : acc, 0);
  if (containsCount === 0) {
    yield Create(ValueErrorType.ArrayContains, schema, path, value);
  }
  if (IsNumber2(schema.minContains) && containsCount < schema.minContains) {
    yield Create(ValueErrorType.ArrayMinContains, schema, path, value);
  }
  if (IsNumber2(schema.maxContains) && containsCount > schema.maxContains) {
    yield Create(ValueErrorType.ArrayMaxContains, schema, path, value);
  }
}
function* FromAsyncIterator5(schema, references, path, value) {
  if (!IsAsyncIterator2(value))
    yield Create(ValueErrorType.AsyncIterator, schema, path, value);
}
function* FromBigInt3(schema, references, path, value) {
  if (!IsBigInt2(value))
    return yield Create(ValueErrorType.BigInt, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.BigIntExclusiveMaximum, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.BigIntExclusiveMinimum, schema, path, value);
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.BigIntMaximum, schema, path, value);
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.BigIntMinimum, schema, path, value);
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === BigInt(0))) {
    yield Create(ValueErrorType.BigIntMultipleOf, schema, path, value);
  }
}
function* FromBoolean3(schema, references, path, value) {
  if (!IsBoolean2(value))
    yield Create(ValueErrorType.Boolean, schema, path, value);
}
function* FromConstructor5(schema, references, path, value) {
  yield* Visit6(schema.returns, references, path, value.prototype);
}
function* FromDate3(schema, references, path, value) {
  if (!IsDate2(value))
    return yield Create(ValueErrorType.Date, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximumTimestamp) && !(value.getTime() < schema.exclusiveMaximumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMaximumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimumTimestamp) && !(value.getTime() > schema.exclusiveMinimumTimestamp)) {
    yield Create(ValueErrorType.DateExclusiveMinimumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.maximumTimestamp) && !(value.getTime() <= schema.maximumTimestamp)) {
    yield Create(ValueErrorType.DateMaximumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.minimumTimestamp) && !(value.getTime() >= schema.minimumTimestamp)) {
    yield Create(ValueErrorType.DateMinimumTimestamp, schema, path, value);
  }
  if (IsDefined2(schema.multipleOfTimestamp) && !(value.getTime() % schema.multipleOfTimestamp === 0)) {
    yield Create(ValueErrorType.DateMultipleOfTimestamp, schema, path, value);
  }
}
function* FromFunction5(schema, references, path, value) {
  if (!IsFunction2(value))
    yield Create(ValueErrorType.Function, schema, path, value);
}
function* FromImport2(schema, references, path, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  yield* Visit6(target, [...references, ...definitions], path, value);
}
function* FromInteger3(schema, references, path, value) {
  if (!IsInteger(value))
    return yield Create(ValueErrorType.Integer, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.IntegerExclusiveMaximum, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.IntegerExclusiveMinimum, schema, path, value);
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.IntegerMaximum, schema, path, value);
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.IntegerMinimum, schema, path, value);
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.IntegerMultipleOf, schema, path, value);
  }
}
function* FromIntersect10(schema, references, path, value) {
  let hasError = false;
  for (const inner of schema.allOf) {
    for (const error of Visit6(inner, references, path, value)) {
      hasError = true;
      yield error;
    }
  }
  if (hasError) {
    return yield Create(ValueErrorType.Intersect, schema, path, value);
  }
  if (schema.unevaluatedProperties === false) {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value)) {
      if (!keyCheck.test(valueKey)) {
        yield Create(ValueErrorType.IntersectUnevaluatedProperties, schema, `${path}/${valueKey}`, value);
      }
    }
  }
  if (typeof schema.unevaluatedProperties === "object") {
    const keyCheck = new RegExp(KeyOfPattern(schema));
    for (const valueKey of Object.getOwnPropertyNames(value)) {
      if (!keyCheck.test(valueKey)) {
        const next = Visit6(schema.unevaluatedProperties, references, `${path}/${valueKey}`, value[valueKey]).next();
        if (!next.done)
          yield next.value;
      }
    }
  }
}
function* FromIterator5(schema, references, path, value) {
  if (!IsIterator2(value))
    yield Create(ValueErrorType.Iterator, schema, path, value);
}
function* FromLiteral4(schema, references, path, value) {
  if (!(value === schema.const))
    yield Create(ValueErrorType.Literal, schema, path, value);
}
function* FromNever3(schema, references, path, value) {
  yield Create(ValueErrorType.Never, schema, path, value);
}
function* FromNot3(schema, references, path, value) {
  if (Visit6(schema.not, references, path, value).next().done === true)
    yield Create(ValueErrorType.Not, schema, path, value);
}
function* FromNull3(schema, references, path, value) {
  if (!IsNull2(value))
    yield Create(ValueErrorType.Null, schema, path, value);
}
function* FromNumber3(schema, references, path, value) {
  if (!TypeSystemPolicy.IsNumberLike(value))
    return yield Create(ValueErrorType.Number, schema, path, value);
  if (IsDefined2(schema.exclusiveMaximum) && !(value < schema.exclusiveMaximum)) {
    yield Create(ValueErrorType.NumberExclusiveMaximum, schema, path, value);
  }
  if (IsDefined2(schema.exclusiveMinimum) && !(value > schema.exclusiveMinimum)) {
    yield Create(ValueErrorType.NumberExclusiveMinimum, schema, path, value);
  }
  if (IsDefined2(schema.maximum) && !(value <= schema.maximum)) {
    yield Create(ValueErrorType.NumberMaximum, schema, path, value);
  }
  if (IsDefined2(schema.minimum) && !(value >= schema.minimum)) {
    yield Create(ValueErrorType.NumberMinimum, schema, path, value);
  }
  if (IsDefined2(schema.multipleOf) && !(value % schema.multipleOf === 0)) {
    yield Create(ValueErrorType.NumberMultipleOf, schema, path, value);
  }
}
function* FromObject9(schema, references, path, value) {
  if (!TypeSystemPolicy.IsObjectLike(value))
    return yield Create(ValueErrorType.Object, schema, path, value);
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
  }
  const requiredKeys = Array.isArray(schema.required) ? schema.required : [];
  const knownKeys = Object.getOwnPropertyNames(schema.properties);
  const unknownKeys = Object.getOwnPropertyNames(value);
  for (const requiredKey of requiredKeys) {
    if (unknownKeys.includes(requiredKey))
      continue;
    yield Create(ValueErrorType.ObjectRequiredProperty, schema.properties[requiredKey], `${path}/${EscapeKey(requiredKey)}`, undefined);
  }
  if (schema.additionalProperties === false) {
    for (const valueKey of unknownKeys) {
      if (!knownKeys.includes(valueKey)) {
        yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
      }
    }
  }
  if (typeof schema.additionalProperties === "object") {
    for (const valueKey of unknownKeys) {
      if (knownKeys.includes(valueKey))
        continue;
      yield* Visit6(schema.additionalProperties, references, `${path}/${EscapeKey(valueKey)}`, value[valueKey]);
    }
  }
  for (const knownKey of knownKeys) {
    const property = schema.properties[knownKey];
    if (schema.required && schema.required.includes(knownKey)) {
      yield* Visit6(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
      if (ExtendsUndefinedCheck(schema) && !(knownKey in value)) {
        yield Create(ValueErrorType.ObjectRequiredProperty, property, `${path}/${EscapeKey(knownKey)}`, undefined);
      }
    } else {
      if (TypeSystemPolicy.IsExactOptionalProperty(value, knownKey)) {
        yield* Visit6(property, references, `${path}/${EscapeKey(knownKey)}`, value[knownKey]);
      }
    }
  }
}
function* FromPromise5(schema, references, path, value) {
  if (!IsPromise(value))
    yield Create(ValueErrorType.Promise, schema, path, value);
}
function* FromRecord5(schema, references, path, value) {
  if (!TypeSystemPolicy.IsRecordLike(value))
    return yield Create(ValueErrorType.Object, schema, path, value);
  if (IsDefined2(schema.minProperties) && !(Object.getOwnPropertyNames(value).length >= schema.minProperties)) {
    yield Create(ValueErrorType.ObjectMinProperties, schema, path, value);
  }
  if (IsDefined2(schema.maxProperties) && !(Object.getOwnPropertyNames(value).length <= schema.maxProperties)) {
    yield Create(ValueErrorType.ObjectMaxProperties, schema, path, value);
  }
  const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
  const regex = new RegExp(patternKey);
  for (const [propertyKey, propertyValue] of Object.entries(value)) {
    if (regex.test(propertyKey))
      yield* Visit6(patternSchema, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
  }
  if (typeof schema.additionalProperties === "object") {
    for (const [propertyKey, propertyValue] of Object.entries(value)) {
      if (!regex.test(propertyKey))
        yield* Visit6(schema.additionalProperties, references, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
  if (schema.additionalProperties === false) {
    for (const [propertyKey, propertyValue] of Object.entries(value)) {
      if (regex.test(propertyKey))
        continue;
      return yield Create(ValueErrorType.ObjectAdditionalProperties, schema, `${path}/${EscapeKey(propertyKey)}`, propertyValue);
    }
  }
}
function* FromRef6(schema, references, path, value) {
  yield* Visit6(Deref(schema, references), references, path, value);
}
function* FromRegExp3(schema, references, path, value) {
  if (!IsString2(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  if (IsDefined2(schema.minLength) && !(value.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path, value);
  }
  if (IsDefined2(schema.maxLength) && !(value.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path, value);
  }
  const regex = new RegExp(schema.source, schema.flags);
  if (!regex.test(value)) {
    return yield Create(ValueErrorType.RegExp, schema, path, value);
  }
}
function* FromString3(schema, references, path, value) {
  if (!IsString2(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  if (IsDefined2(schema.minLength) && !(value.length >= schema.minLength)) {
    yield Create(ValueErrorType.StringMinLength, schema, path, value);
  }
  if (IsDefined2(schema.maxLength) && !(value.length <= schema.maxLength)) {
    yield Create(ValueErrorType.StringMaxLength, schema, path, value);
  }
  if (IsString2(schema.pattern)) {
    const regex = new RegExp(schema.pattern);
    if (!regex.test(value)) {
      yield Create(ValueErrorType.StringPattern, schema, path, value);
    }
  }
  if (IsString2(schema.format)) {
    if (!Has(schema.format)) {
      yield Create(ValueErrorType.StringFormatUnknown, schema, path, value);
    } else {
      const format = Get(schema.format);
      if (!format(value)) {
        yield Create(ValueErrorType.StringFormat, schema, path, value);
      }
    }
  }
}
function* FromSymbol3(schema, references, path, value) {
  if (!IsSymbol2(value))
    yield Create(ValueErrorType.Symbol, schema, path, value);
}
function* FromTemplateLiteral5(schema, references, path, value) {
  if (!IsString2(value))
    return yield Create(ValueErrorType.String, schema, path, value);
  const regex = new RegExp(schema.pattern);
  if (!regex.test(value)) {
    yield Create(ValueErrorType.StringPattern, schema, path, value);
  }
}
function* FromThis2(schema, references, path, value) {
  yield* Visit6(Deref(schema, references), references, path, value);
}
function* FromTuple7(schema, references, path, value) {
  if (!IsArray2(value))
    return yield Create(ValueErrorType.Tuple, schema, path, value);
  if (schema.items === undefined && !(value.length === 0)) {
    return yield Create(ValueErrorType.TupleLength, schema, path, value);
  }
  if (!(value.length === schema.maxItems)) {
    return yield Create(ValueErrorType.TupleLength, schema, path, value);
  }
  if (!schema.items) {
    return;
  }
  for (let i = 0;i < schema.items.length; i++) {
    yield* Visit6(schema.items[i], references, `${path}/${i}`, value[i]);
  }
}
function* FromUndefined3(schema, references, path, value) {
  if (!IsUndefined2(value))
    yield Create(ValueErrorType.Undefined, schema, path, value);
}
function* FromUnion12(schema, references, path, value) {
  if (Check(schema, references, value))
    return;
  const errors = schema.anyOf.map((variant) => new ValueErrorIterator(Visit6(variant, references, path, value)));
  yield Create(ValueErrorType.Union, schema, path, value, errors);
}
function* FromUint8Array3(schema, references, path, value) {
  if (!IsUint8Array2(value))
    return yield Create(ValueErrorType.Uint8Array, schema, path, value);
  if (IsDefined2(schema.maxByteLength) && !(value.length <= schema.maxByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMaxByteLength, schema, path, value);
  }
  if (IsDefined2(schema.minByteLength) && !(value.length >= schema.minByteLength)) {
    yield Create(ValueErrorType.Uint8ArrayMinByteLength, schema, path, value);
  }
}
function* FromUnknown3(schema, references, path, value) {}
function* FromVoid3(schema, references, path, value) {
  if (!TypeSystemPolicy.IsVoidLike(value))
    yield Create(ValueErrorType.Void, schema, path, value);
}
function* FromKind2(schema, references, path, value) {
  const check = Get2(schema[Kind]);
  if (!check(schema, value))
    yield Create(ValueErrorType.Kind, schema, path, value);
}
function* Visit6(schema, references, path, value) {
  const references_ = IsDefined2(schema.$id) ? [...references, schema] : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return yield* FromAny3(schema_, references_, path, value);
    case "Argument":
      return yield* FromArgument3(schema_, references_, path, value);
    case "Array":
      return yield* FromArray8(schema_, references_, path, value);
    case "AsyncIterator":
      return yield* FromAsyncIterator5(schema_, references_, path, value);
    case "BigInt":
      return yield* FromBigInt3(schema_, references_, path, value);
    case "Boolean":
      return yield* FromBoolean3(schema_, references_, path, value);
    case "Constructor":
      return yield* FromConstructor5(schema_, references_, path, value);
    case "Date":
      return yield* FromDate3(schema_, references_, path, value);
    case "Function":
      return yield* FromFunction5(schema_, references_, path, value);
    case "Import":
      return yield* FromImport2(schema_, references_, path, value);
    case "Integer":
      return yield* FromInteger3(schema_, references_, path, value);
    case "Intersect":
      return yield* FromIntersect10(schema_, references_, path, value);
    case "Iterator":
      return yield* FromIterator5(schema_, references_, path, value);
    case "Literal":
      return yield* FromLiteral4(schema_, references_, path, value);
    case "Never":
      return yield* FromNever3(schema_, references_, path, value);
    case "Not":
      return yield* FromNot3(schema_, references_, path, value);
    case "Null":
      return yield* FromNull3(schema_, references_, path, value);
    case "Number":
      return yield* FromNumber3(schema_, references_, path, value);
    case "Object":
      return yield* FromObject9(schema_, references_, path, value);
    case "Promise":
      return yield* FromPromise5(schema_, references_, path, value);
    case "Record":
      return yield* FromRecord5(schema_, references_, path, value);
    case "Ref":
      return yield* FromRef6(schema_, references_, path, value);
    case "RegExp":
      return yield* FromRegExp3(schema_, references_, path, value);
    case "String":
      return yield* FromString3(schema_, references_, path, value);
    case "Symbol":
      return yield* FromSymbol3(schema_, references_, path, value);
    case "TemplateLiteral":
      return yield* FromTemplateLiteral5(schema_, references_, path, value);
    case "This":
      return yield* FromThis2(schema_, references_, path, value);
    case "Tuple":
      return yield* FromTuple7(schema_, references_, path, value);
    case "Undefined":
      return yield* FromUndefined3(schema_, references_, path, value);
    case "Union":
      return yield* FromUnion12(schema_, references_, path, value);
    case "Uint8Array":
      return yield* FromUint8Array3(schema_, references_, path, value);
    case "Unknown":
      return yield* FromUnknown3(schema_, references_, path, value);
    case "Void":
      return yield* FromVoid3(schema_, references_, path, value);
    default:
      if (!Has2(schema_[Kind]))
        throw new ValueErrorsUnknownTypeError(schema);
      return yield* FromKind2(schema_, references_, path, value);
  }
}
function Errors(...args) {
  const iterator = args.length === 3 ? Visit6(args[0], args[1], "", args[2]) : Visit6(args[0], [], "", args[1]);
  return new ValueErrorIterator(iterator);
}
// node_modules/@sinclair/typebox/build/esm/value/clone/clone.mjs
function FromObject10(value) {
  const Acc = {};
  for (const key of Object.getOwnPropertyNames(value)) {
    Acc[key] = Clone2(value[key]);
  }
  for (const key of Object.getOwnPropertySymbols(value)) {
    Acc[key] = Clone2(value[key]);
  }
  return Acc;
}
function FromArray9(value) {
  return value.map((element) => Clone2(element));
}
function FromTypedArray(value) {
  return value.slice();
}
function FromMap(value) {
  return new Map(Clone2([...value.entries()]));
}
function FromSet(value) {
  return new Set(Clone2([...value.entries()]));
}
function FromDate4(value) {
  return new Date(value.toISOString());
}
function FromValue2(value) {
  return value;
}
function Clone2(value) {
  if (IsArray2(value))
    return FromArray9(value);
  if (IsDate2(value))
    return FromDate4(value);
  if (IsTypedArray(value))
    return FromTypedArray(value);
  if (IsMap(value))
    return FromMap(value);
  if (IsSet(value))
    return FromSet(value);
  if (IsObject2(value))
    return FromObject10(value);
  if (IsValueType(value))
    return FromValue2(value);
  throw new Error("ValueClone: Unable to clone value");
}

// node_modules/@sinclair/typebox/build/esm/value/create/create.mjs
class ValueCreateError extends TypeBoxError {
  constructor(schema, message) {
    super(message);
    this.schema = schema;
  }
}
function FromDefault(value) {
  return IsFunction2(value) ? value() : Clone2(value);
}
function FromAny4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
function FromArgument4(schema, references) {
  return {};
}
function FromArray10(schema, references) {
  if (schema.uniqueItems === true && !HasPropertyKey(schema, "default")) {
    throw new ValueCreateError(schema, "Array with the uniqueItems constraint requires a default value");
  } else if ("contains" in schema && !HasPropertyKey(schema, "default")) {
    throw new ValueCreateError(schema, "Array with the contains constraint requires a default value");
  } else if ("default" in schema) {
    return FromDefault(schema.default);
  } else if (schema.minItems !== undefined) {
    return Array.from({ length: schema.minItems }).map((item) => {
      return Visit7(schema.items, references);
    });
  } else {
    return [];
  }
}
function FromAsyncIterator6(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return async function* () {}();
  }
}
function FromBigInt4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return BigInt(0);
  }
}
function FromBoolean4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return false;
  }
}
function FromConstructor6(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const value = Visit7(schema.returns, references);
    if (typeof value === "object" && !Array.isArray(value)) {
      return class {
        constructor() {
          for (const [key, val] of Object.entries(value)) {
            const self = this;
            self[key] = val;
          }
        }
      };
    } else {
      return class {
      };
    }
  }
}
function FromDate5(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimumTimestamp !== undefined) {
    return new Date(schema.minimumTimestamp);
  } else {
    return new Date;
  }
}
function FromFunction6(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return () => Visit7(schema.returns, references);
  }
}
function FromImport3(schema, references) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit7(target, [...references, ...definitions]);
}
function FromInteger4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimum !== undefined) {
    return schema.minimum;
  } else {
    return 0;
  }
}
function FromIntersect11(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const value = schema.allOf.reduce((acc, schema) => {
      const next = Visit7(schema, references);
      return typeof next === "object" ? { ...acc, ...next } : next;
    }, {});
    if (!Check(schema, references, value))
      throw new ValueCreateError(schema, "Intersect produced invalid value. Consider using a default value.");
    return value;
  }
}
function FromIterator6(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return function* () {}();
  }
}
function FromLiteral5(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return schema.const;
  }
}
function FromNever4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "Never types cannot be created. Consider using a default value.");
  }
}
function FromNot4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "Not types must have a default value");
  }
}
function FromNull4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return null;
  }
}
function FromNumber4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minimum !== undefined) {
    return schema.minimum;
  } else {
    return 0;
  }
}
function FromObject11(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    const required = new Set(schema.required);
    const Acc = {};
    for (const [key, subschema] of Object.entries(schema.properties)) {
      if (!required.has(key))
        continue;
      Acc[key] = Visit7(subschema, references);
    }
    return Acc;
  }
}
function FromPromise6(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Promise.resolve(Visit7(schema.item, references));
  }
}
function FromRecord6(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
function FromRef7(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Visit7(Deref(schema, references), references);
  }
}
function FromRegExp4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new ValueCreateError(schema, "RegExp types cannot be created. Consider using a default value.");
  }
}
function FromString4(schema, references) {
  if (schema.pattern !== undefined) {
    if (!HasPropertyKey(schema, "default")) {
      throw new ValueCreateError(schema, "String types with patterns must specify a default value");
    } else {
      return FromDefault(schema.default);
    }
  } else if (schema.format !== undefined) {
    if (!HasPropertyKey(schema, "default")) {
      throw new ValueCreateError(schema, "String types with formats must specify a default value");
    } else {
      return FromDefault(schema.default);
    }
  } else {
    if (HasPropertyKey(schema, "default")) {
      return FromDefault(schema.default);
    } else if (schema.minLength !== undefined) {
      return Array.from({ length: schema.minLength }).map(() => " ").join("");
    } else {
      return "";
    }
  }
}
function FromSymbol4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if ("value" in schema) {
    return Symbol.for(schema.value);
  } else {
    return Symbol();
  }
}
function FromTemplateLiteral6(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  }
  if (!IsTemplateLiteralFinite(schema))
    throw new ValueCreateError(schema, "Can only create template literals that produce a finite variants. Consider using a default value.");
  const generated = TemplateLiteralGenerate(schema);
  return generated[0];
}
function FromThis3(schema, references) {
  if (recursiveDepth++ > recursiveMaxDepth)
    throw new ValueCreateError(schema, "Cannot create recursive type as it appears possibly infinite. Consider using a default.");
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return Visit7(Deref(schema, references), references);
  }
}
function FromTuple8(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  }
  if (schema.items === undefined) {
    return [];
  } else {
    return Array.from({ length: schema.minItems }).map((_, index) => Visit7(schema.items[index], references));
  }
}
function FromUndefined4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return;
  }
}
function FromUnion13(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.anyOf.length === 0) {
    throw new Error("ValueCreate.Union: Cannot create Union with zero variants");
  } else {
    return Visit7(schema.anyOf[0], references);
  }
}
function FromUint8Array4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else if (schema.minByteLength !== undefined) {
    return new Uint8Array(schema.minByteLength);
  } else {
    return new Uint8Array(0);
  }
}
function FromUnknown4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return {};
  }
}
function FromVoid4(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    return;
  }
}
function FromKind3(schema, references) {
  if (HasPropertyKey(schema, "default")) {
    return FromDefault(schema.default);
  } else {
    throw new Error("User defined types must specify a default value");
  }
}
function Visit7(schema, references) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Any":
      return FromAny4(schema_, references_);
    case "Argument":
      return FromArgument4(schema_, references_);
    case "Array":
      return FromArray10(schema_, references_);
    case "AsyncIterator":
      return FromAsyncIterator6(schema_, references_);
    case "BigInt":
      return FromBigInt4(schema_, references_);
    case "Boolean":
      return FromBoolean4(schema_, references_);
    case "Constructor":
      return FromConstructor6(schema_, references_);
    case "Date":
      return FromDate5(schema_, references_);
    case "Function":
      return FromFunction6(schema_, references_);
    case "Import":
      return FromImport3(schema_, references_);
    case "Integer":
      return FromInteger4(schema_, references_);
    case "Intersect":
      return FromIntersect11(schema_, references_);
    case "Iterator":
      return FromIterator6(schema_, references_);
    case "Literal":
      return FromLiteral5(schema_, references_);
    case "Never":
      return FromNever4(schema_, references_);
    case "Not":
      return FromNot4(schema_, references_);
    case "Null":
      return FromNull4(schema_, references_);
    case "Number":
      return FromNumber4(schema_, references_);
    case "Object":
      return FromObject11(schema_, references_);
    case "Promise":
      return FromPromise6(schema_, references_);
    case "Record":
      return FromRecord6(schema_, references_);
    case "Ref":
      return FromRef7(schema_, references_);
    case "RegExp":
      return FromRegExp4(schema_, references_);
    case "String":
      return FromString4(schema_, references_);
    case "Symbol":
      return FromSymbol4(schema_, references_);
    case "TemplateLiteral":
      return FromTemplateLiteral6(schema_, references_);
    case "This":
      return FromThis3(schema_, references_);
    case "Tuple":
      return FromTuple8(schema_, references_);
    case "Undefined":
      return FromUndefined4(schema_, references_);
    case "Union":
      return FromUnion13(schema_, references_);
    case "Uint8Array":
      return FromUint8Array4(schema_, references_);
    case "Unknown":
      return FromUnknown4(schema_, references_);
    case "Void":
      return FromVoid4(schema_, references_);
    default:
      if (!Has2(schema_[Kind]))
        throw new ValueCreateError(schema_, "Unknown type");
      return FromKind3(schema_, references_);
  }
}
var recursiveMaxDepth = 512;
var recursiveDepth = 0;
function Create2(...args) {
  recursiveDepth = 0;
  return args.length === 2 ? Visit7(args[0], args[1]) : Visit7(args[0], []);
}
// node_modules/@sinclair/typebox/build/esm/value/clean/clean.mjs
function IsCheckable(schema) {
  return IsKind(schema) && schema[Kind] !== "Unsafe";
}
function FromArray11(schema, references, value) {
  if (!IsArray2(value))
    return value;
  return value.map((value) => Visit8(schema.items, references, value));
}
function FromImport4(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit8(target, [...references, ...definitions], value);
}
function FromIntersect12(schema, references, value) {
  const unevaluatedProperties = schema.unevaluatedProperties;
  const intersections = schema.allOf.map((schema) => Visit8(schema, references, Clone2(value)));
  const composite = intersections.reduce((acc, value) => IsObject2(value) ? { ...acc, ...value } : value, {});
  if (!IsObject2(value) || !IsObject2(composite) || !IsKind(unevaluatedProperties))
    return composite;
  const knownkeys = KeyOfPropertyKeys(schema);
  for (const key of Object.getOwnPropertyNames(value)) {
    if (knownkeys.includes(key))
      continue;
    if (Check(unevaluatedProperties, references, value[key])) {
      composite[key] = Visit8(unevaluatedProperties, references, value[key]);
    }
  }
  return composite;
}
function FromObject12(schema, references, value) {
  if (!IsObject2(value) || IsArray2(value))
    return value;
  const additionalProperties = schema.additionalProperties;
  for (const key of Object.getOwnPropertyNames(value)) {
    if (HasPropertyKey(schema.properties, key)) {
      value[key] = Visit8(schema.properties[key], references, value[key]);
      continue;
    }
    if (IsKind(additionalProperties) && Check(additionalProperties, references, value[key])) {
      value[key] = Visit8(additionalProperties, references, value[key]);
      continue;
    }
    delete value[key];
  }
  return value;
}
function FromRecord7(schema, references, value) {
  if (!IsObject2(value))
    return value;
  const additionalProperties = schema.additionalProperties;
  const propertyKeys = Object.getOwnPropertyNames(value);
  const [propertyKey, propertySchema] = Object.entries(schema.patternProperties)[0];
  const propertyKeyTest = new RegExp(propertyKey);
  for (const key of propertyKeys) {
    if (propertyKeyTest.test(key)) {
      value[key] = Visit8(propertySchema, references, value[key]);
      continue;
    }
    if (IsKind(additionalProperties) && Check(additionalProperties, references, value[key])) {
      value[key] = Visit8(additionalProperties, references, value[key]);
      continue;
    }
    delete value[key];
  }
  return value;
}
function FromRef8(schema, references, value) {
  return Visit8(Deref(schema, references), references, value);
}
function FromThis4(schema, references, value) {
  return Visit8(Deref(schema, references), references, value);
}
function FromTuple9(schema, references, value) {
  if (!IsArray2(value))
    return value;
  if (IsUndefined2(schema.items))
    return [];
  const length = Math.min(value.length, schema.items.length);
  for (let i = 0;i < length; i++) {
    value[i] = Visit8(schema.items[i], references, value[i]);
  }
  return value.length > length ? value.slice(0, length) : value;
}
function FromUnion14(schema, references, value) {
  for (const inner of schema.anyOf) {
    if (IsCheckable(inner) && Check(inner, references, value)) {
      return Visit8(inner, references, value);
    }
  }
  return value;
}
function Visit8(schema, references, value) {
  const references_ = IsString2(schema.$id) ? Pushref(schema, references) : references;
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Array":
      return FromArray11(schema_, references_, value);
    case "Import":
      return FromImport4(schema_, references_, value);
    case "Intersect":
      return FromIntersect12(schema_, references_, value);
    case "Object":
      return FromObject12(schema_, references_, value);
    case "Record":
      return FromRecord7(schema_, references_, value);
    case "Ref":
      return FromRef8(schema_, references_, value);
    case "This":
      return FromThis4(schema_, references_, value);
    case "Tuple":
      return FromTuple9(schema_, references_, value);
    case "Union":
      return FromUnion14(schema_, references_, value);
    default:
      return value;
  }
}
function Clean(...args) {
  return args.length === 3 ? Visit8(args[0], args[1], args[2]) : Visit8(args[0], [], args[1]);
}
// node_modules/@sinclair/typebox/build/esm/value/transform/decode.mjs
class TransformDecodeCheckError extends TypeBoxError {
  constructor(schema, value, error) {
    super(`Unable to decode value as it does not match the expected schema`);
    this.schema = schema;
    this.value = value;
    this.error = error;
  }
}

class TransformDecodeError extends TypeBoxError {
  constructor(schema, path, value, error) {
    super(error instanceof Error ? error.message : "Unknown error");
    this.schema = schema;
    this.path = path;
    this.value = value;
    this.error = error;
  }
}
function Default(schema, path, value) {
  try {
    return IsTransform(schema) ? schema[TransformKind].Decode(value) : value;
  } catch (error) {
    throw new TransformDecodeError(schema, path, value, error);
  }
}
function FromArray12(schema, references, path, value) {
  return IsArray2(value) ? Default(schema, path, value.map((value, index) => Visit9(schema.items, references, `${path}/${index}`, value))) : Default(schema, path, value);
}
function FromIntersect13(schema, references, path, value) {
  if (!IsObject2(value) || IsValueType(value))
    return Default(schema, path, value);
  const knownEntries = KeyOfPropertyEntries(schema);
  const knownKeys = knownEntries.map((entry) => entry[0]);
  const knownProperties = { ...value };
  for (const [knownKey, knownSchema] of knownEntries)
    if (knownKey in knownProperties) {
      knownProperties[knownKey] = Visit9(knownSchema, references, `${path}/${knownKey}`, knownProperties[knownKey]);
    }
  if (!IsTransform(schema.unevaluatedProperties)) {
    return Default(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      unknownProperties[key] = Default(unevaluatedProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default(schema, path, unknownProperties);
}
function FromImport5(schema, references, path, value) {
  const additional = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  const result = Visit9(target, [...references, ...additional], path, value);
  return Default(schema, path, result);
}
function FromNot5(schema, references, path, value) {
  return Default(schema, path, Visit9(schema.not, references, path, value));
}
function FromObject13(schema, references, path, value) {
  if (!IsObject2(value))
    return Default(schema, path, value);
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = { ...value };
  for (const key of knownKeys) {
    if (!HasPropertyKey(knownProperties, key))
      continue;
    if (IsUndefined2(knownProperties[key]) && (!IsUndefined3(schema.properties[key]) || TypeSystemPolicy.IsExactOptionalProperty(knownProperties, key)))
      continue;
    knownProperties[key] = Visit9(schema.properties[key], references, `${path}/${key}`, knownProperties[key]);
  }
  if (!IsSchema(schema.additionalProperties)) {
    return Default(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      unknownProperties[key] = Default(additionalProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default(schema, path, unknownProperties);
}
function FromRecord8(schema, references, path, value) {
  if (!IsObject2(value))
    return Default(schema, path, value);
  const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern);
  const knownProperties = { ...value };
  for (const key of Object.getOwnPropertyNames(value))
    if (knownKeys.test(key)) {
      knownProperties[key] = Visit9(schema.patternProperties[pattern], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema(schema.additionalProperties)) {
    return Default(schema, path, knownProperties);
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const unknownProperties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.test(key)) {
      unknownProperties[key] = Default(additionalProperties, `${path}/${key}`, unknownProperties[key]);
    }
  return Default(schema, path, unknownProperties);
}
function FromRef9(schema, references, path, value) {
  const target = Deref(schema, references);
  return Default(schema, path, Visit9(target, references, path, value));
}
function FromThis5(schema, references, path, value) {
  const target = Deref(schema, references);
  return Default(schema, path, Visit9(target, references, path, value));
}
function FromTuple10(schema, references, path, value) {
  return IsArray2(value) && IsArray2(schema.items) ? Default(schema, path, schema.items.map((schema, index) => Visit9(schema, references, `${path}/${index}`, value[index]))) : Default(schema, path, value);
}
function FromUnion15(schema, references, path, value) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value))
      continue;
    const decoded = Visit9(subschema, references, path, value);
    return Default(schema, path, decoded);
  }
  return Default(schema, path, value);
}
function Visit9(schema, references, path, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray12(schema_, references_, path, value);
    case "Import":
      return FromImport5(schema_, references_, path, value);
    case "Intersect":
      return FromIntersect13(schema_, references_, path, value);
    case "Not":
      return FromNot5(schema_, references_, path, value);
    case "Object":
      return FromObject13(schema_, references_, path, value);
    case "Record":
      return FromRecord8(schema_, references_, path, value);
    case "Ref":
      return FromRef9(schema_, references_, path, value);
    case "Symbol":
      return Default(schema_, path, value);
    case "This":
      return FromThis5(schema_, references_, path, value);
    case "Tuple":
      return FromTuple10(schema_, references_, path, value);
    case "Union":
      return FromUnion15(schema_, references_, path, value);
    default:
      return Default(schema_, path, value);
  }
}
function TransformDecode(schema, references, value) {
  return Visit9(schema, references, "", value);
}

// node_modules/@sinclair/typebox/build/esm/value/transform/encode.mjs
class TransformEncodeCheckError extends TypeBoxError {
  constructor(schema, value, error) {
    super(`The encoded value does not match the expected schema`);
    this.schema = schema;
    this.value = value;
    this.error = error;
  }
}

class TransformEncodeError extends TypeBoxError {
  constructor(schema, path, value, error) {
    super(`${error instanceof Error ? error.message : "Unknown error"}`);
    this.schema = schema;
    this.path = path;
    this.value = value;
    this.error = error;
  }
}
function Default2(schema, path, value) {
  try {
    return IsTransform(schema) ? schema[TransformKind].Encode(value) : value;
  } catch (error) {
    throw new TransformEncodeError(schema, path, value, error);
  }
}
function FromArray13(schema, references, path, value) {
  const defaulted = Default2(schema, path, value);
  return IsArray2(defaulted) ? defaulted.map((value, index) => Visit10(schema.items, references, `${path}/${index}`, value)) : defaulted;
}
function FromImport6(schema, references, path, value) {
  const additional = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  const result = Default2(schema, path, value);
  return Visit10(target, [...references, ...additional], path, result);
}
function FromIntersect14(schema, references, path, value) {
  const defaulted = Default2(schema, path, value);
  if (!IsObject2(value) || IsValueType(value))
    return defaulted;
  const knownEntries = KeyOfPropertyEntries(schema);
  const knownKeys = knownEntries.map((entry) => entry[0]);
  const knownProperties = { ...defaulted };
  for (const [knownKey, knownSchema] of knownEntries)
    if (knownKey in knownProperties) {
      knownProperties[knownKey] = Visit10(knownSchema, references, `${path}/${knownKey}`, knownProperties[knownKey]);
    }
  if (!IsTransform(schema.unevaluatedProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const unevaluatedProperties = schema.unevaluatedProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      properties[key] = Default2(unevaluatedProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
function FromNot6(schema, references, path, value) {
  return Default2(schema.not, path, Default2(schema, path, value));
}
function FromObject14(schema, references, path, value) {
  const defaulted = Default2(schema, path, value);
  if (!IsObject2(defaulted))
    return defaulted;
  const knownKeys = KeyOfPropertyKeys(schema);
  const knownProperties = { ...defaulted };
  for (const key of knownKeys) {
    if (!HasPropertyKey(knownProperties, key))
      continue;
    if (IsUndefined2(knownProperties[key]) && (!IsUndefined3(schema.properties[key]) || TypeSystemPolicy.IsExactOptionalProperty(knownProperties, key)))
      continue;
    knownProperties[key] = Visit10(schema.properties[key], references, `${path}/${key}`, knownProperties[key]);
  }
  if (!IsSchema(schema.additionalProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.includes(key)) {
      properties[key] = Default2(additionalProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
function FromRecord9(schema, references, path, value) {
  const defaulted = Default2(schema, path, value);
  if (!IsObject2(value))
    return defaulted;
  const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const knownKeys = new RegExp(pattern);
  const knownProperties = { ...defaulted };
  for (const key of Object.getOwnPropertyNames(value))
    if (knownKeys.test(key)) {
      knownProperties[key] = Visit10(schema.patternProperties[pattern], references, `${path}/${key}`, knownProperties[key]);
    }
  if (!IsSchema(schema.additionalProperties)) {
    return knownProperties;
  }
  const unknownKeys = Object.getOwnPropertyNames(knownProperties);
  const additionalProperties = schema.additionalProperties;
  const properties = { ...knownProperties };
  for (const key of unknownKeys)
    if (!knownKeys.test(key)) {
      properties[key] = Default2(additionalProperties, `${path}/${key}`, properties[key]);
    }
  return properties;
}
function FromRef10(schema, references, path, value) {
  const target = Deref(schema, references);
  const resolved = Visit10(target, references, path, value);
  return Default2(schema, path, resolved);
}
function FromThis6(schema, references, path, value) {
  const target = Deref(schema, references);
  const resolved = Visit10(target, references, path, value);
  return Default2(schema, path, resolved);
}
function FromTuple11(schema, references, path, value) {
  const value1 = Default2(schema, path, value);
  return IsArray2(schema.items) ? schema.items.map((schema, index) => Visit10(schema, references, `${path}/${index}`, value1[index])) : [];
}
function FromUnion16(schema, references, path, value) {
  for (const subschema of schema.anyOf) {
    if (!Check(subschema, references, value))
      continue;
    const value1 = Visit10(subschema, references, path, value);
    return Default2(schema, path, value1);
  }
  for (const subschema of schema.anyOf) {
    const value1 = Visit10(subschema, references, path, value);
    if (!Check(schema, references, value1))
      continue;
    return Default2(schema, path, value1);
  }
  return Default2(schema, path, value);
}
function Visit10(schema, references, path, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema[Kind]) {
    case "Array":
      return FromArray13(schema_, references_, path, value);
    case "Import":
      return FromImport6(schema_, references_, path, value);
    case "Intersect":
      return FromIntersect14(schema_, references_, path, value);
    case "Not":
      return FromNot6(schema_, references_, path, value);
    case "Object":
      return FromObject14(schema_, references_, path, value);
    case "Record":
      return FromRecord9(schema_, references_, path, value);
    case "Ref":
      return FromRef10(schema_, references_, path, value);
    case "This":
      return FromThis6(schema_, references_, path, value);
    case "Tuple":
      return FromTuple11(schema_, references_, path, value);
    case "Union":
      return FromUnion16(schema_, references_, path, value);
    default:
      return Default2(schema_, path, value);
  }
}
function TransformEncode(schema, references, value) {
  return Visit10(schema, references, "", value);
}

// node_modules/@sinclair/typebox/build/esm/value/transform/has.mjs
function FromArray14(schema, references) {
  return IsTransform(schema) || Visit11(schema.items, references);
}
function FromAsyncIterator7(schema, references) {
  return IsTransform(schema) || Visit11(schema.items, references);
}
function FromConstructor7(schema, references) {
  return IsTransform(schema) || Visit11(schema.returns, references) || schema.parameters.some((schema) => Visit11(schema, references));
}
function FromFunction7(schema, references) {
  return IsTransform(schema) || Visit11(schema.returns, references) || schema.parameters.some((schema) => Visit11(schema, references));
}
function FromIntersect15(schema, references) {
  return IsTransform(schema) || IsTransform(schema.unevaluatedProperties) || schema.allOf.some((schema) => Visit11(schema, references));
}
function FromImport7(schema, references) {
  const additional = globalThis.Object.getOwnPropertyNames(schema.$defs).reduce((result, key) => [...result, schema.$defs[key]], []);
  const target = schema.$defs[schema.$ref];
  return IsTransform(schema) || Visit11(target, [...additional, ...references]);
}
function FromIterator7(schema, references) {
  return IsTransform(schema) || Visit11(schema.items, references);
}
function FromNot7(schema, references) {
  return IsTransform(schema) || Visit11(schema.not, references);
}
function FromObject15(schema, references) {
  return IsTransform(schema) || Object.values(schema.properties).some((schema) => Visit11(schema, references)) || IsSchema(schema.additionalProperties) && Visit11(schema.additionalProperties, references);
}
function FromPromise7(schema, references) {
  return IsTransform(schema) || Visit11(schema.item, references);
}
function FromRecord10(schema, references) {
  const pattern = Object.getOwnPropertyNames(schema.patternProperties)[0];
  const property = schema.patternProperties[pattern];
  return IsTransform(schema) || Visit11(property, references) || IsSchema(schema.additionalProperties) && IsTransform(schema.additionalProperties);
}
function FromRef11(schema, references) {
  if (IsTransform(schema))
    return true;
  return Visit11(Deref(schema, references), references);
}
function FromThis7(schema, references) {
  if (IsTransform(schema))
    return true;
  return Visit11(Deref(schema, references), references);
}
function FromTuple12(schema, references) {
  return IsTransform(schema) || !IsUndefined2(schema.items) && schema.items.some((schema) => Visit11(schema, references));
}
function FromUnion17(schema, references) {
  return IsTransform(schema) || schema.anyOf.some((schema) => Visit11(schema, references));
}
function Visit11(schema, references) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  if (schema.$id && visited.has(schema.$id))
    return false;
  if (schema.$id)
    visited.add(schema.$id);
  switch (schema[Kind]) {
    case "Array":
      return FromArray14(schema_, references_);
    case "AsyncIterator":
      return FromAsyncIterator7(schema_, references_);
    case "Constructor":
      return FromConstructor7(schema_, references_);
    case "Function":
      return FromFunction7(schema_, references_);
    case "Import":
      return FromImport7(schema_, references_);
    case "Intersect":
      return FromIntersect15(schema_, references_);
    case "Iterator":
      return FromIterator7(schema_, references_);
    case "Not":
      return FromNot7(schema_, references_);
    case "Object":
      return FromObject15(schema_, references_);
    case "Promise":
      return FromPromise7(schema_, references_);
    case "Record":
      return FromRecord10(schema_, references_);
    case "Ref":
      return FromRef11(schema_, references_);
    case "This":
      return FromThis7(schema_, references_);
    case "Tuple":
      return FromTuple12(schema_, references_);
    case "Union":
      return FromUnion17(schema_, references_);
    default:
      return IsTransform(schema);
  }
}
var visited = new Set;
function HasTransform(schema, references) {
  visited.clear();
  return Visit11(schema, references);
}

// node_modules/@sinclair/typebox/build/esm/value/decode/decode.mjs
function Decode(...args) {
  const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
  if (!Check(schema, references, value))
    throw new TransformDecodeCheckError(schema, value, Errors(schema, references, value).First());
  return HasTransform(schema, references) ? TransformDecode(schema, references, value) : value;
}
// node_modules/@sinclair/typebox/build/esm/value/default/default.mjs
function ValueOrDefault(schema, value) {
  const defaultValue = HasPropertyKey(schema, "default") ? schema.default : undefined;
  const clone = IsFunction2(defaultValue) ? defaultValue() : Clone2(defaultValue);
  return IsUndefined2(value) ? clone : IsObject2(value) && IsObject2(clone) ? Object.assign(clone, value) : value;
}
function HasDefaultProperty(schema) {
  return IsKind(schema) && "default" in schema;
}
function FromArray15(schema, references, value) {
  if (IsArray2(value)) {
    for (let i = 0;i < value.length; i++) {
      value[i] = Visit12(schema.items, references, value[i]);
    }
    return value;
  }
  const defaulted = ValueOrDefault(schema, value);
  if (!IsArray2(defaulted))
    return defaulted;
  for (let i = 0;i < defaulted.length; i++) {
    defaulted[i] = Visit12(schema.items, references, defaulted[i]);
  }
  return defaulted;
}
function FromDate6(schema, references, value) {
  return IsDate2(value) ? value : ValueOrDefault(schema, value);
}
function FromImport8(schema, references, value) {
  const definitions = globalThis.Object.values(schema.$defs);
  const target = schema.$defs[schema.$ref];
  return Visit12(target, [...references, ...definitions], value);
}
function FromIntersect16(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  return schema.allOf.reduce((acc, schema) => {
    const next = Visit12(schema, references, defaulted);
    return IsObject2(next) ? { ...acc, ...next } : next;
  }, {});
}
function FromObject16(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsObject2(defaulted))
    return defaulted;
  const knownPropertyKeys = Object.getOwnPropertyNames(schema.properties);
  for (const key of knownPropertyKeys) {
    const propertyValue = Visit12(schema.properties[key], references, defaulted[key]);
    if (IsUndefined2(propertyValue))
      continue;
    defaulted[key] = Visit12(schema.properties[key], references, defaulted[key]);
  }
  if (!HasDefaultProperty(schema.additionalProperties))
    return defaulted;
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (knownPropertyKeys.includes(key))
      continue;
    defaulted[key] = Visit12(schema.additionalProperties, references, defaulted[key]);
  }
  return defaulted;
}
function FromRecord11(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsObject2(defaulted))
    return defaulted;
  const additionalPropertiesSchema = schema.additionalProperties;
  const [propertyKeyPattern, propertySchema] = Object.entries(schema.patternProperties)[0];
  const knownPropertyKey = new RegExp(propertyKeyPattern);
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (!(knownPropertyKey.test(key) && HasDefaultProperty(propertySchema)))
      continue;
    defaulted[key] = Visit12(propertySchema, references, defaulted[key]);
  }
  if (!HasDefaultProperty(additionalPropertiesSchema))
    return defaulted;
  for (const key of Object.getOwnPropertyNames(defaulted)) {
    if (knownPropertyKey.test(key))
      continue;
    defaulted[key] = Visit12(additionalPropertiesSchema, references, defaulted[key]);
  }
  return defaulted;
}
function FromRef12(schema, references, value) {
  return Visit12(Deref(schema, references), references, ValueOrDefault(schema, value));
}
function FromThis8(schema, references, value) {
  return Visit12(Deref(schema, references), references, value);
}
function FromTuple13(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  if (!IsArray2(defaulted) || IsUndefined2(schema.items))
    return defaulted;
  const [items, max] = [schema.items, Math.max(schema.items.length, defaulted.length)];
  for (let i = 0;i < max; i++) {
    if (i < items.length)
      defaulted[i] = Visit12(items[i], references, defaulted[i]);
  }
  return defaulted;
}
function FromUnion18(schema, references, value) {
  const defaulted = ValueOrDefault(schema, value);
  for (const inner of schema.anyOf) {
    const result = Visit12(inner, references, Clone2(defaulted));
    if (Check(inner, references, result)) {
      return result;
    }
  }
  return defaulted;
}
function Visit12(schema, references, value) {
  const references_ = Pushref(schema, references);
  const schema_ = schema;
  switch (schema_[Kind]) {
    case "Array":
      return FromArray15(schema_, references_, value);
    case "Date":
      return FromDate6(schema_, references_, value);
    case "Import":
      return FromImport8(schema_, references_, value);
    case "Intersect":
      return FromIntersect16(schema_, references_, value);
    case "Object":
      return FromObject16(schema_, references_, value);
    case "Record":
      return FromRecord11(schema_, references_, value);
    case "Ref":
      return FromRef12(schema_, references_, value);
    case "This":
      return FromThis8(schema_, references_, value);
    case "Tuple":
      return FromTuple13(schema_, references_, value);
    case "Union":
      return FromUnion18(schema_, references_, value);
    default:
      return ValueOrDefault(schema_, value);
  }
}
function Default3(...args) {
  return args.length === 3 ? Visit12(args[0], args[1], args[2]) : Visit12(args[0], [], args[1]);
}
// node_modules/@sinclair/typebox/build/esm/value/encode/encode.mjs
function Encode(...args) {
  const [schema, references, value] = args.length === 3 ? [args[0], args[1], args[2]] : [args[0], [], args[1]];
  const encoded = HasTransform(schema, references) ? TransformEncode(schema, references, value) : value;
  if (!Check(schema, references, encoded))
    throw new TransformEncodeCheckError(schema, encoded, Errors(schema, references, encoded).First());
  return encoded;
}
// node_modules/@sinclair/typebox/build/esm/compiler/compiler.mjs
class TypeCheck {
  constructor(schema, references, checkFunc, code) {
    this.schema = schema;
    this.references = references;
    this.checkFunc = checkFunc;
    this.code = code;
    this.hasTransform = HasTransform(schema, references);
  }
  Code() {
    return this.code;
  }
  Schema() {
    return this.schema;
  }
  References() {
    return this.references;
  }
  Errors(value) {
    return Errors(this.schema, this.references, value);
  }
  Check(value) {
    return this.checkFunc(value);
  }
  Decode(value) {
    if (!this.checkFunc(value))
      throw new TransformDecodeCheckError(this.schema, value, this.Errors(value).First());
    return this.hasTransform ? TransformDecode(this.schema, this.references, value) : value;
  }
  Encode(value) {
    const encoded = this.hasTransform ? TransformEncode(this.schema, this.references, value) : value;
    if (!this.checkFunc(encoded))
      throw new TransformEncodeCheckError(this.schema, value, this.Errors(value).First());
    return encoded;
  }
}
var Character;
(function(Character) {
  function DollarSign(code) {
    return code === 36;
  }
  Character.DollarSign = DollarSign;
  function IsUnderscore(code) {
    return code === 95;
  }
  Character.IsUnderscore = IsUnderscore;
  function IsAlpha(code) {
    return code >= 65 && code <= 90 || code >= 97 && code <= 122;
  }
  Character.IsAlpha = IsAlpha;
  function IsNumeric(code) {
    return code >= 48 && code <= 57;
  }
  Character.IsNumeric = IsNumeric;
})(Character || (Character = {}));
var Identifier;
(function(Identifier) {
  function Encode($id) {
    const buffer = [];
    for (let i = 0;i < $id.length; i++) {
      const code = $id.charCodeAt(i);
      if (Character.IsNumeric(code) || Character.IsAlpha(code)) {
        buffer.push($id.charAt(i));
      } else {
        buffer.push(`_${code}_`);
      }
    }
    return buffer.join("").replace(/__/g, "_");
  }
  Identifier.Encode = Encode;
})(Identifier || (Identifier = {}));
function StringConstant(value) {
  if (!IsString2(value))
    throw Error("ConstantString: Not a String");
  const canonical = JSON.stringify(value).slice(1, -1);
  const escaped = canonical.replace(/'/g, "\\'");
  return `'${escaped}'`;
}
function MemberExpression(value, key) {
  return `${value}[${StringConstant(key)}]`;
}

class TypeCompilerUnknownTypeError extends TypeBoxError {
  constructor(schema) {
    super("Unknown type");
    this.schema = schema;
  }
}

class TypeCompilerTypeGuardError extends TypeBoxError {
  constructor(schema) {
    super("Preflight validation check failed to guard for the given schema");
    this.schema = schema;
  }
}
var Policy;
(function(Policy) {
  function IsExactOptionalProperty(value, key, expression) {
    return TypeSystemPolicy.ExactOptionalPropertyTypes ? `(${StringConstant(key)} in ${value} ? ${expression} : true)` : `(${MemberExpression(value, key)} !== undefined ? ${expression} : true)`;
  }
  Policy.IsExactOptionalProperty = IsExactOptionalProperty;
  function IsObjectLike(value) {
    return !TypeSystemPolicy.AllowArrayObject ? `(typeof ${value} === 'object' && ${value} !== null && !Array.isArray(${value}))` : `(typeof ${value} === 'object' && ${value} !== null)`;
  }
  Policy.IsObjectLike = IsObjectLike;
  function IsRecordLike(value) {
    return !TypeSystemPolicy.AllowArrayObject ? `(typeof ${value} === 'object' && ${value} !== null && !Array.isArray(${value}) && !(${value} instanceof Date) && !(${value} instanceof Uint8Array))` : `(typeof ${value} === 'object' && ${value} !== null && !(${value} instanceof Date) && !(${value} instanceof Uint8Array))`;
  }
  Policy.IsRecordLike = IsRecordLike;
  function IsNumberLike(value) {
    return TypeSystemPolicy.AllowNaN ? `typeof ${value} === 'number'` : `Number.isFinite(${value})`;
  }
  Policy.IsNumberLike = IsNumberLike;
  function IsVoidLike(value) {
    return TypeSystemPolicy.AllowNullVoid ? `(${value} === undefined || ${value} === null)` : `${value} === undefined`;
  }
  Policy.IsVoidLike = IsVoidLike;
})(Policy || (Policy = {}));
var TypeCompiler;
(function(TypeCompiler) {
  function IsAnyOrUnknown(schema) {
    return schema[Kind] === "Any" || schema[Kind] === "Unknown";
  }
  function* FromAny(schema, references, value) {
    yield "true";
  }
  function* FromArgument(schema, references, value) {
    yield "true";
  }
  function* FromArray(schema, references, value) {
    yield `Array.isArray(${value})`;
    const [parameter, accumulator] = [CreateParameter("value", "any"), CreateParameter("acc", "number")];
    if (IsNumber2(schema.maxItems))
      yield `${value}.length <= ${schema.maxItems}`;
    if (IsNumber2(schema.minItems))
      yield `${value}.length >= ${schema.minItems}`;
    const elementExpression = CreateExpression(schema.items, references, "value");
    yield `((array) => { for(const ${parameter} of array) if(!(${elementExpression})) { return false }; return true; })(${value})`;
    if (IsSchema2(schema.contains) || IsNumber2(schema.minContains) || IsNumber2(schema.maxContains)) {
      const containsSchema = IsSchema2(schema.contains) ? schema.contains : Never();
      const checkExpression = CreateExpression(containsSchema, references, "value");
      const checkMinContains = IsNumber2(schema.minContains) ? [`(count >= ${schema.minContains})`] : [];
      const checkMaxContains = IsNumber2(schema.maxContains) ? [`(count <= ${schema.maxContains})`] : [];
      const checkCount = `const count = value.reduce((${accumulator}, ${parameter}) => ${checkExpression} ? acc + 1 : acc, 0)`;
      const check = [`(count > 0)`, ...checkMinContains, ...checkMaxContains].join(" && ");
      yield `((${parameter}) => { ${checkCount}; return ${check}})(${value})`;
    }
    if (schema.uniqueItems === true) {
      const check = `const hashed = hash(element); if(set.has(hashed)) { return false } else { set.add(hashed) } } return true`;
      const block = `const set = new Set(); for(const element of value) { ${check} }`;
      yield `((${parameter}) => { ${block} )(${value})`;
    }
  }
  function* FromAsyncIterator(schema, references, value) {
    yield `(typeof value === 'object' && Symbol.asyncIterator in ${value})`;
  }
  function* FromBigInt(schema, references, value) {
    yield `(typeof ${value} === 'bigint')`;
    if (IsBigInt2(schema.exclusiveMaximum))
      yield `${value} < BigInt(${schema.exclusiveMaximum})`;
    if (IsBigInt2(schema.exclusiveMinimum))
      yield `${value} > BigInt(${schema.exclusiveMinimum})`;
    if (IsBigInt2(schema.maximum))
      yield `${value} <= BigInt(${schema.maximum})`;
    if (IsBigInt2(schema.minimum))
      yield `${value} >= BigInt(${schema.minimum})`;
    if (IsBigInt2(schema.multipleOf))
      yield `(${value} % BigInt(${schema.multipleOf})) === 0`;
  }
  function* FromBoolean(schema, references, value) {
    yield `(typeof ${value} === 'boolean')`;
  }
  function* FromConstructor(schema, references, value) {
    yield* Visit(schema.returns, references, `${value}.prototype`);
  }
  function* FromDate(schema, references, value) {
    yield `(${value} instanceof Date) && Number.isFinite(${value}.getTime())`;
    if (IsNumber2(schema.exclusiveMaximumTimestamp))
      yield `${value}.getTime() < ${schema.exclusiveMaximumTimestamp}`;
    if (IsNumber2(schema.exclusiveMinimumTimestamp))
      yield `${value}.getTime() > ${schema.exclusiveMinimumTimestamp}`;
    if (IsNumber2(schema.maximumTimestamp))
      yield `${value}.getTime() <= ${schema.maximumTimestamp}`;
    if (IsNumber2(schema.minimumTimestamp))
      yield `${value}.getTime() >= ${schema.minimumTimestamp}`;
    if (IsNumber2(schema.multipleOfTimestamp))
      yield `(${value}.getTime() % ${schema.multipleOfTimestamp}) === 0`;
  }
  function* FromFunction(schema, references, value) {
    yield `(typeof ${value} === 'function')`;
  }
  function* FromImport(schema, references, value) {
    const members = globalThis.Object.getOwnPropertyNames(schema.$defs).reduce((result, key) => {
      return [...result, schema.$defs[key]];
    }, []);
    yield* Visit(Ref(schema.$ref), [...references, ...members], value);
  }
  function* FromInteger(schema, references, value) {
    yield `Number.isInteger(${value})`;
    if (IsNumber2(schema.exclusiveMaximum))
      yield `${value} < ${schema.exclusiveMaximum}`;
    if (IsNumber2(schema.exclusiveMinimum))
      yield `${value} > ${schema.exclusiveMinimum}`;
    if (IsNumber2(schema.maximum))
      yield `${value} <= ${schema.maximum}`;
    if (IsNumber2(schema.minimum))
      yield `${value} >= ${schema.minimum}`;
    if (IsNumber2(schema.multipleOf))
      yield `(${value} % ${schema.multipleOf}) === 0`;
  }
  function* FromIntersect(schema, references, value) {
    const check1 = schema.allOf.map((schema) => CreateExpression(schema, references, value)).join(" && ");
    if (schema.unevaluatedProperties === false) {
      const keyCheck = CreateVariable(`${new RegExp(KeyOfPattern(schema))};`);
      const check2 = `Object.getOwnPropertyNames(${value}).every(key => ${keyCheck}.test(key))`;
      yield `(${check1} && ${check2})`;
    } else if (IsSchema2(schema.unevaluatedProperties)) {
      const keyCheck = CreateVariable(`${new RegExp(KeyOfPattern(schema))};`);
      const check2 = `Object.getOwnPropertyNames(${value}).every(key => ${keyCheck}.test(key) || ${CreateExpression(schema.unevaluatedProperties, references, `${value}[key]`)})`;
      yield `(${check1} && ${check2})`;
    } else {
      yield `(${check1})`;
    }
  }
  function* FromIterator(schema, references, value) {
    yield `(typeof value === 'object' && Symbol.iterator in ${value})`;
  }
  function* FromLiteral(schema, references, value) {
    if (typeof schema.const === "number" || typeof schema.const === "boolean") {
      yield `(${value} === ${schema.const})`;
    } else if (typeof schema.const === "string") {
      yield `(${value} === ${StringConstant(schema.const)})`;
    } else {
      throw Error("Invalid Literal Value");
    }
  }
  function* FromNever(schema, references, value) {
    yield `false`;
  }
  function* FromNot(schema, references, value) {
    const expression = CreateExpression(schema.not, references, value);
    yield `(!${expression})`;
  }
  function* FromNull(schema, references, value) {
    yield `(${value} === null)`;
  }
  function* FromNumber(schema, references, value) {
    yield Policy.IsNumberLike(value);
    if (IsNumber2(schema.exclusiveMaximum))
      yield `${value} < ${schema.exclusiveMaximum}`;
    if (IsNumber2(schema.exclusiveMinimum))
      yield `${value} > ${schema.exclusiveMinimum}`;
    if (IsNumber2(schema.maximum))
      yield `${value} <= ${schema.maximum}`;
    if (IsNumber2(schema.minimum))
      yield `${value} >= ${schema.minimum}`;
    if (IsNumber2(schema.multipleOf))
      yield `(${value} % ${schema.multipleOf}) === 0`;
  }
  function* FromObject(schema, references, value) {
    yield Policy.IsObjectLike(value);
    if (IsNumber2(schema.minProperties))
      yield `Object.getOwnPropertyNames(${value}).length >= ${schema.minProperties}`;
    if (IsNumber2(schema.maxProperties))
      yield `Object.getOwnPropertyNames(${value}).length <= ${schema.maxProperties}`;
    const knownKeys = Object.getOwnPropertyNames(schema.properties);
    for (const knownKey of knownKeys) {
      const memberExpression = MemberExpression(value, knownKey);
      const property = schema.properties[knownKey];
      if (schema.required && schema.required.includes(knownKey)) {
        yield* Visit(property, references, memberExpression);
        if (ExtendsUndefinedCheck(property) || IsAnyOrUnknown(property))
          yield `(${StringConstant(knownKey)} in ${value})`;
      } else {
        const expression = CreateExpression(property, references, memberExpression);
        yield Policy.IsExactOptionalProperty(value, knownKey, expression);
      }
    }
    if (schema.additionalProperties === false) {
      if (schema.required && schema.required.length === knownKeys.length) {
        yield `Object.getOwnPropertyNames(${value}).length === ${knownKeys.length}`;
      } else {
        const keys = `[${knownKeys.map((key) => `${StringConstant(key)}`).join(", ")}]`;
        yield `Object.getOwnPropertyNames(${value}).every(key => ${keys}.includes(key))`;
      }
    }
    if (typeof schema.additionalProperties === "object") {
      const expression = CreateExpression(schema.additionalProperties, references, `${value}[key]`);
      const keys = `[${knownKeys.map((key) => `${StringConstant(key)}`).join(", ")}]`;
      yield `(Object.getOwnPropertyNames(${value}).every(key => ${keys}.includes(key) || ${expression}))`;
    }
  }
  function* FromPromise(schema, references, value) {
    yield `${value} instanceof Promise`;
  }
  function* FromRecord(schema, references, value) {
    yield Policy.IsRecordLike(value);
    if (IsNumber2(schema.minProperties))
      yield `Object.getOwnPropertyNames(${value}).length >= ${schema.minProperties}`;
    if (IsNumber2(schema.maxProperties))
      yield `Object.getOwnPropertyNames(${value}).length <= ${schema.maxProperties}`;
    const [patternKey, patternSchema] = Object.entries(schema.patternProperties)[0];
    const variable = CreateVariable(`${new RegExp(patternKey)}`);
    const check1 = CreateExpression(patternSchema, references, "value");
    const check2 = IsSchema2(schema.additionalProperties) ? CreateExpression(schema.additionalProperties, references, value) : schema.additionalProperties === false ? "false" : "true";
    const expression = `(${variable}.test(key) ? ${check1} : ${check2})`;
    yield `(Object.entries(${value}).every(([key, value]) => ${expression}))`;
  }
  function* FromRef(schema, references, value) {
    const target = Deref(schema, references);
    if (state.functions.has(schema.$ref))
      return yield `${CreateFunctionName(schema.$ref)}(${value})`;
    yield* Visit(target, references, value);
  }
  function* FromRegExp(schema, references, value) {
    const variable = CreateVariable(`${new RegExp(schema.source, schema.flags)};`);
    yield `(typeof ${value} === 'string')`;
    if (IsNumber2(schema.maxLength))
      yield `${value}.length <= ${schema.maxLength}`;
    if (IsNumber2(schema.minLength))
      yield `${value}.length >= ${schema.minLength}`;
    yield `${variable}.test(${value})`;
  }
  function* FromString(schema, references, value) {
    yield `(typeof ${value} === 'string')`;
    if (IsNumber2(schema.maxLength))
      yield `${value}.length <= ${schema.maxLength}`;
    if (IsNumber2(schema.minLength))
      yield `${value}.length >= ${schema.minLength}`;
    if (schema.pattern !== undefined) {
      const variable = CreateVariable(`${new RegExp(schema.pattern)};`);
      yield `${variable}.test(${value})`;
    }
    if (schema.format !== undefined) {
      yield `format(${StringConstant(schema.format)}, ${value})`;
    }
  }
  function* FromSymbol(schema, references, value) {
    yield `(typeof ${value} === 'symbol')`;
  }
  function* FromTemplateLiteral(schema, references, value) {
    yield `(typeof ${value} === 'string')`;
    const variable = CreateVariable(`${new RegExp(schema.pattern)};`);
    yield `${variable}.test(${value})`;
  }
  function* FromThis(schema, references, value) {
    yield `${CreateFunctionName(schema.$ref)}(${value})`;
  }
  function* FromTuple(schema, references, value) {
    yield `Array.isArray(${value})`;
    if (schema.items === undefined)
      return yield `${value}.length === 0`;
    yield `(${value}.length === ${schema.maxItems})`;
    for (let i = 0;i < schema.items.length; i++) {
      const expression = CreateExpression(schema.items[i], references, `${value}[${i}]`);
      yield `${expression}`;
    }
  }
  function* FromUndefined(schema, references, value) {
    yield `${value} === undefined`;
  }
  function* FromUnion(schema, references, value) {
    const expressions = schema.anyOf.map((schema) => CreateExpression(schema, references, value));
    yield `(${expressions.join(" || ")})`;
  }
  function* FromUint8Array(schema, references, value) {
    yield `${value} instanceof Uint8Array`;
    if (IsNumber2(schema.maxByteLength))
      yield `(${value}.length <= ${schema.maxByteLength})`;
    if (IsNumber2(schema.minByteLength))
      yield `(${value}.length >= ${schema.minByteLength})`;
  }
  function* FromUnknown(schema, references, value) {
    yield "true";
  }
  function* FromVoid(schema, references, value) {
    yield Policy.IsVoidLike(value);
  }
  function* FromKind(schema, references, value) {
    const instance = state.instances.size;
    state.instances.set(instance, schema);
    yield `kind(${StringConstant(schema[Kind])}, ${instance}, ${value})`;
  }
  function* Visit(schema, references, value, useHoisting = true) {
    const references_ = IsString2(schema.$id) ? [...references, schema] : references;
    const schema_ = schema;
    if (useHoisting && IsString2(schema.$id)) {
      const functionName = CreateFunctionName(schema.$id);
      if (state.functions.has(functionName)) {
        return yield `${functionName}(${value})`;
      } else {
        state.functions.set(functionName, "<deferred>");
        const functionCode = CreateFunction(functionName, schema, references, "value", false);
        state.functions.set(functionName, functionCode);
        return yield `${functionName}(${value})`;
      }
    }
    switch (schema_[Kind]) {
      case "Any":
        return yield* FromAny(schema_, references_, value);
      case "Argument":
        return yield* FromArgument(schema_, references_, value);
      case "Array":
        return yield* FromArray(schema_, references_, value);
      case "AsyncIterator":
        return yield* FromAsyncIterator(schema_, references_, value);
      case "BigInt":
        return yield* FromBigInt(schema_, references_, value);
      case "Boolean":
        return yield* FromBoolean(schema_, references_, value);
      case "Constructor":
        return yield* FromConstructor(schema_, references_, value);
      case "Date":
        return yield* FromDate(schema_, references_, value);
      case "Function":
        return yield* FromFunction(schema_, references_, value);
      case "Import":
        return yield* FromImport(schema_, references_, value);
      case "Integer":
        return yield* FromInteger(schema_, references_, value);
      case "Intersect":
        return yield* FromIntersect(schema_, references_, value);
      case "Iterator":
        return yield* FromIterator(schema_, references_, value);
      case "Literal":
        return yield* FromLiteral(schema_, references_, value);
      case "Never":
        return yield* FromNever(schema_, references_, value);
      case "Not":
        return yield* FromNot(schema_, references_, value);
      case "Null":
        return yield* FromNull(schema_, references_, value);
      case "Number":
        return yield* FromNumber(schema_, references_, value);
      case "Object":
        return yield* FromObject(schema_, references_, value);
      case "Promise":
        return yield* FromPromise(schema_, references_, value);
      case "Record":
        return yield* FromRecord(schema_, references_, value);
      case "Ref":
        return yield* FromRef(schema_, references_, value);
      case "RegExp":
        return yield* FromRegExp(schema_, references_, value);
      case "String":
        return yield* FromString(schema_, references_, value);
      case "Symbol":
        return yield* FromSymbol(schema_, references_, value);
      case "TemplateLiteral":
        return yield* FromTemplateLiteral(schema_, references_, value);
      case "This":
        return yield* FromThis(schema_, references_, value);
      case "Tuple":
        return yield* FromTuple(schema_, references_, value);
      case "Undefined":
        return yield* FromUndefined(schema_, references_, value);
      case "Union":
        return yield* FromUnion(schema_, references_, value);
      case "Uint8Array":
        return yield* FromUint8Array(schema_, references_, value);
      case "Unknown":
        return yield* FromUnknown(schema_, references_, value);
      case "Void":
        return yield* FromVoid(schema_, references_, value);
      default:
        if (!Has2(schema_[Kind]))
          throw new TypeCompilerUnknownTypeError(schema);
        return yield* FromKind(schema_, references_, value);
    }
  }
  const state = {
    language: "javascript",
    functions: new Map,
    variables: new Map,
    instances: new Map
  };
  function CreateExpression(schema, references, value, useHoisting = true) {
    return `(${[...Visit(schema, references, value, useHoisting)].join(" && ")})`;
  }
  function CreateFunctionName($id) {
    return `check_${Identifier.Encode($id)}`;
  }
  function CreateVariable(expression) {
    const variableName = `local_${state.variables.size}`;
    state.variables.set(variableName, `const ${variableName} = ${expression}`);
    return variableName;
  }
  function CreateFunction(name, schema, references, value, useHoisting = true) {
    const [newline, pad] = [`
`, (length) => "".padStart(length, " ")];
    const parameter = CreateParameter("value", "any");
    const returns = CreateReturns("boolean");
    const expression = [...Visit(schema, references, value, useHoisting)].map((expression) => `${pad(4)}${expression}`).join(` &&${newline}`);
    return `function ${name}(${parameter})${returns} {${newline}${pad(2)}return (${newline}${expression}${newline}${pad(2)})
}`;
  }
  function CreateParameter(name, type) {
    const annotation = state.language === "typescript" ? `: ${type}` : "";
    return `${name}${annotation}`;
  }
  function CreateReturns(type) {
    return state.language === "typescript" ? `: ${type}` : "";
  }
  function Build(schema, references, options) {
    const functionCode = CreateFunction("check", schema, references, "value");
    const parameter = CreateParameter("value", "any");
    const returns = CreateReturns("boolean");
    const functions = [...state.functions.values()];
    const variables = [...state.variables.values()];
    const checkFunction = IsString2(schema.$id) ? `return function check(${parameter})${returns} {
  return ${CreateFunctionName(schema.$id)}(value)
}` : `return ${functionCode}`;
    return [...variables, ...functions, checkFunction].join(`
`);
  }
  function Code(...args) {
    const defaults = { language: "javascript" };
    const [schema, references, options] = args.length === 2 && IsArray2(args[1]) ? [args[0], args[1], defaults] : args.length === 2 && !IsArray2(args[1]) ? [args[0], [], args[1]] : args.length === 3 ? [args[0], args[1], args[2]] : args.length === 1 ? [args[0], [], defaults] : [null, [], defaults];
    state.language = options.language;
    state.variables.clear();
    state.functions.clear();
    state.instances.clear();
    if (!IsSchema2(schema))
      throw new TypeCompilerTypeGuardError(schema);
    for (const schema of references)
      if (!IsSchema2(schema))
        throw new TypeCompilerTypeGuardError(schema);
    return Build(schema, references, options);
  }
  TypeCompiler.Code = Code;
  function Compile(schema, references = []) {
    const generatedCode = Code(schema, references, { language: "javascript" });
    const compiledFunction = Evaluate("kind", "format", "hash", generatedCode);
    const instances = new Map(state.instances);
    function typeRegistryFunction(kind, instance, value) {
      if (!Has2(kind) || !instances.has(instance))
        return false;
      const checkFunc = Get2(kind);
      const schema = instances.get(instance);
      return checkFunc(schema, value);
    }
    function formatRegistryFunction(format, value) {
      if (!Has(format))
        return false;
      const checkFunc = Get(format);
      return checkFunc(value);
    }
    function hashFunction(value) {
      return Hash(value);
    }
    const checkFunction = compiledFunction(typeRegistryFunction, formatRegistryFunction, hashFunction);
    return new TypeCheck(schema, references, checkFunction, generatedCode);
  }
  TypeCompiler.Compile = Compile;
})(TypeCompiler || (TypeCompiler = {}));

// node_modules/elysia/dist/universal/utils.mjs
var isBun = typeof Bun < "u";
function isCloudflareWorker() {
  try {
    if (typeof caches < "u" && typeof caches.default < "u" || typeof WebSocketPair < "u")
      return true;
  } catch {
    return false;
  }
  return false;
}

// node_modules/elysia/dist/universal/file.mjs
var mime = {
  aac: "audio/aac",
  abw: "application/x-abiword",
  ai: "application/postscript",
  arc: "application/octet-stream",
  avi: "video/x-msvideo",
  azw: "application/vnd.amazon.ebook",
  bin: "application/octet-stream",
  bz: "application/x-bzip",
  bz2: "application/x-bzip2",
  csh: "application/x-csh",
  css: "text/css",
  csv: "text/csv",
  doc: "application/msword",
  dll: "application/octet-stream",
  eot: "application/vnd.ms-fontobject",
  epub: "application/epub+zip",
  gif: "image/gif",
  htm: "text/html",
  html: "text/html",
  ico: "image/x-icon",
  ics: "text/calendar",
  jar: "application/java-archive",
  jpeg: "image/jpeg",
  jpg: "image/jpeg",
  js: "application/javascript",
  json: "application/json",
  mid: "audio/midi",
  midi: "audio/midi",
  mp2: "audio/mpeg",
  mp3: "audio/mpeg",
  mp4: "video/mp4",
  mpa: "video/mpeg",
  mpe: "video/mpeg",
  mpeg: "video/mpeg",
  mpkg: "application/vnd.apple.installer+xml",
  odp: "application/vnd.oasis.opendocument.presentation",
  ods: "application/vnd.oasis.opendocument.spreadsheet",
  odt: "application/vnd.oasis.opendocument.text",
  oga: "audio/ogg",
  ogv: "video/ogg",
  ogx: "application/ogg",
  otf: "font/otf",
  png: "image/png",
  pdf: "application/pdf",
  ppt: "application/vnd.ms-powerpoint",
  rar: "application/x-rar-compressed",
  rtf: "application/rtf",
  sh: "application/x-sh",
  svg: "image/svg+xml",
  swf: "application/x-shockwave-flash",
  tar: "application/x-tar",
  tif: "image/tiff",
  tiff: "image/tiff",
  ts: "application/typescript",
  ttf: "font/ttf",
  txt: "text/plain",
  vsd: "application/vnd.visio",
  wav: "audio/x-wav",
  weba: "audio/webm",
  webm: "video/webm",
  webp: "image/webp",
  woff: "font/woff",
  woff2: "font/woff2",
  xhtml: "application/xhtml+xml",
  xls: "application/vnd.ms-excel",
  xlsx: "application/vnd.ms-excel",
  xlsx_OLD: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  xml: "application/xml",
  xul: "application/vnd.mozilla.xul+xml",
  zip: "application/zip",
  "3gp": "video/3gpp",
  "3gp_DOES_NOT_CONTAIN_VIDEO": "audio/3gpp",
  "3gp2": "video/3gpp2",
  "3gp2_DOES_NOT_CONTAIN_VIDEO": "audio/3gpp2",
  "7z": "application/x-7z-compressed"
};
var getFileExtension = (path) => {
  const index = path.lastIndexOf(".");
  return index === -1 ? "" : path.slice(index + 1);
};
var createReadStream;
var stat;

class ElysiaFile {
  constructor(path) {
    this.path = path;
    if (isBun)
      this.value = Bun.file(path);
    else {
      if (!createReadStream || !stat) {
        if (typeof window < "u") {
          console.warn("Browser environment does not support file");
          return;
        }
        const warnMissing = (name) => console.warn(new Error(`[elysia] \`file\` require \`fs${name ? "." + name : ""}\` ${name?.includes(".") ? "module " : ""}which is not available in this environment`));
        if (typeof process > "u" || typeof process.getBuiltinModule != "function") {
          warnMissing();
          return;
        }
        const fs = process.getBuiltinModule("fs");
        if (!fs) {
          warnMissing();
          return;
        }
        if (typeof fs.createReadStream != "function") {
          warnMissing();
          return;
        }
        if (typeof fs.promises?.stat != "function") {
          warnMissing();
          return;
        }
        createReadStream = fs.createReadStream, stat = fs.promises.stat;
      }
      this.value = createReadStream(path), this.stats = stat(path);
    }
  }
  get type() {
    return mime[getFileExtension(this.path)] || "application/octet-stream";
  }
  get length() {
    return isBun ? this.value.size : this.stats?.then((x) => x.size) ?? 0;
  }
}

// node_modules/elysia/dist/utils.mjs
var replaceUrlPath = (url, pathname) => {
  const pathStartIndex = url.indexOf("/", 11), queryIndex = url.indexOf("?", pathStartIndex);
  return queryIndex === -1 ? `${url.slice(0, pathStartIndex)}${pathname.charCodeAt(0) === 47 ? "" : "/"}${pathname}` : `${url.slice(0, pathStartIndex)}${pathname.charCodeAt(0) === 47 ? "" : "/"}${pathname}${url.slice(queryIndex)}`;
};
var isClass = (v) => typeof v == "function" && /^\s*class\s+/.test(v.toString()) || v.toString && v.toString().startsWith("[object ") && v.toString() !== "[object Object]" || isNotEmpty(Object.getPrototypeOf(v));
var isObject = (item) => item && typeof item == "object" && !Array.isArray(item);
var mergeDeep = (target, source, options) => {
  const skipKeys = options?.skipKeys, override = options?.override ?? true, mergeArray = options?.mergeArray ?? false, seen = options?.seen ?? /* @__PURE__ */ new WeakSet;
  if (!isObject(target) || !isObject(source) || seen.has(source))
    return target;
  seen.add(source);
  for (const [key, value] of Object.entries(source))
    if (!(skipKeys?.includes(key) || ["__proto__", "constructor", "prototype"].includes(key))) {
      if (mergeArray && Array.isArray(value)) {
        target[key] = Array.isArray(target[key]) ? [...target[key], ...value] : target[key] = value;
        continue;
      }
      if (!isObject(value) || !(key in target) || isClass(value)) {
        if ((override || !(key in target)) && !Object.isFrozen(target))
          try {
            target[key] = value;
          } catch {}
        continue;
      }
      if (!Object.isFrozen(target[key]))
        try {
          target[key] = mergeDeep(target[key], value, { skipKeys, override, mergeArray, seen });
        } catch {}
    }
  return seen.delete(source), target;
};
var mergeCookie = (a, b) => {
  const v = mergeDeep(Object.assign({}, a), b, {
    skipKeys: ["properties"],
    mergeArray: false
  });
  return v.properties && delete v.properties, v;
};
var mergeObjectArray = (a, b) => {
  if (!b)
    return a;
  const array = [], checksums = [];
  if (a) {
    Array.isArray(a) || (a = [a]);
    for (const item of a)
      array.push(item), item.checksum && checksums.push(item.checksum);
  }
  if (b) {
    Array.isArray(b) || (b = [b]);
    for (const item of b)
      checksums.includes(item.checksum) || array.push(item);
  }
  return array;
};
var primitiveHooks = [
  "start",
  "request",
  "parse",
  "transform",
  "resolve",
  "beforeHandle",
  "afterHandle",
  "mapResponse",
  "afterResponse",
  "trace",
  "error",
  "stop",
  "body",
  "headers",
  "params",
  "query",
  "response",
  "type",
  "detail"
];
var primitiveHookMap = primitiveHooks.reduce((acc, x) => (acc[x] = true, acc), {});
var isRecordNumber = (x) => typeof x == "object" && Object.keys(x).every((x2) => !isNaN(+x2));
var mergeResponse = (a, b) => isRecordNumber(a) && isRecordNumber(b) ? Object.assign({}, a, b) : a && !isRecordNumber(a) && isRecordNumber(b) ? Object.assign({ 200: a }, b) : b ?? a;
var mergeSchemaValidator = (a, b) => !a && !b ? {
  body: undefined,
  headers: undefined,
  params: undefined,
  query: undefined,
  cookie: undefined,
  response: undefined
} : {
  body: b?.body ?? a?.body,
  headers: b?.headers ?? a?.headers,
  params: b?.params ?? a?.params,
  query: b?.query ?? a?.query,
  cookie: b?.cookie ?? a?.cookie,
  response: mergeResponse(a?.response, b?.response)
};
var mergeHook = (a, b) => {
  if (!b)
    return a ?? {};
  if (!a)
    return b ?? {};
  if (!Object.values(b).find((x) => x != null))
    return { ...a };
  const hook = {
    ...a,
    ...b,
    body: b.body ?? a.body,
    headers: b.headers ?? a.headers,
    params: b.params ?? a.params,
    query: b.query ?? a.query,
    cookie: b.cookie ?? a.cookie,
    response: mergeResponse(a.response, b.response),
    type: a.type || b.type,
    detail: mergeDeep(b.detail ?? {}, a.detail ?? {}),
    parse: mergeObjectArray(a.parse, b.parse),
    transform: mergeObjectArray(a.transform, b.transform),
    beforeHandle: mergeObjectArray(mergeObjectArray(fnToContainer(a.resolve, "resolve"), a.beforeHandle), mergeObjectArray(fnToContainer(b.resolve, "resolve"), b.beforeHandle)),
    afterHandle: mergeObjectArray(a.afterHandle, b.afterHandle),
    mapResponse: mergeObjectArray(a.mapResponse, b.mapResponse),
    afterResponse: mergeObjectArray(a.afterResponse, b.afterResponse),
    trace: mergeObjectArray(a.trace, b.trace),
    error: mergeObjectArray(a.error, b.error),
    standaloneSchema: a.standaloneSchema || b.standaloneSchema ? a.standaloneSchema && !b.standaloneSchema ? a.standaloneSchema : b.standaloneSchema && !a.standaloneSchema ? b.standaloneSchema : [
      ...a.standaloneSchema ?? [],
      ...b.standaloneSchema ?? []
    ] : undefined
  };
  return hook.resolve && delete hook.resolve, hook;
};
var lifeCycleToArray = (a) => {
  a.parse && !Array.isArray(a.parse) && (a.parse = [a.parse]), a.transform && !Array.isArray(a.transform) && (a.transform = [a.transform]), a.afterHandle && !Array.isArray(a.afterHandle) && (a.afterHandle = [a.afterHandle]), a.mapResponse && !Array.isArray(a.mapResponse) && (a.mapResponse = [a.mapResponse]), a.afterResponse && !Array.isArray(a.afterResponse) && (a.afterResponse = [a.afterResponse]), a.trace && !Array.isArray(a.trace) && (a.trace = [a.trace]), a.error && !Array.isArray(a.error) && (a.error = [a.error]);
  let beforeHandle = [];
  return a.resolve && (beforeHandle = fnToContainer(Array.isArray(a.resolve) ? a.resolve : [a.resolve], "resolve"), delete a.resolve), a.beforeHandle && (beforeHandle.length ? beforeHandle = beforeHandle.concat(Array.isArray(a.beforeHandle) ? a.beforeHandle : [a.beforeHandle]) : beforeHandle = Array.isArray(a.beforeHandle) ? a.beforeHandle : [a.beforeHandle]), beforeHandle.length && (a.beforeHandle = beforeHandle), a;
};
var hasHeaderShorthand = isBun ? "toJSON" in new Headers : false;
var hasSetImmediate = typeof setImmediate == "function";
var checksum = (s) => {
  let h = 9;
  for (let i = 0;i < s.length; )
    h = Math.imul(h ^ s.charCodeAt(i++), 9 ** 9);
  return h = h ^ h >>> 9;
};
var injectChecksum = (checksum2, x) => {
  if (!x)
    return;
  if (!Array.isArray(x)) {
    const fn = x;
    return checksum2 && !fn.checksum && (fn.checksum = checksum2), fn.scope === "scoped" && (fn.scope = "local"), fn;
  }
  const fns = [...x];
  for (const fn of fns)
    checksum2 && !fn.checksum && (fn.checksum = checksum2), fn.scope === "scoped" && (fn.scope = "local");
  return fns;
};
var mergeLifeCycle = (a, b, checksum2) => ({
  start: mergeObjectArray(a.start, injectChecksum(checksum2, b?.start)),
  request: mergeObjectArray(a.request, injectChecksum(checksum2, b?.request)),
  parse: mergeObjectArray(a.parse, injectChecksum(checksum2, b?.parse)),
  transform: mergeObjectArray(a.transform, injectChecksum(checksum2, b?.transform)),
  beforeHandle: mergeObjectArray(mergeObjectArray(fnToContainer(a.resolve, "resolve"), a.beforeHandle), injectChecksum(checksum2, mergeObjectArray(fnToContainer(b?.resolve, "resolve"), b?.beforeHandle))),
  afterHandle: mergeObjectArray(a.afterHandle, injectChecksum(checksum2, b?.afterHandle)),
  mapResponse: mergeObjectArray(a.mapResponse, injectChecksum(checksum2, b?.mapResponse)),
  afterResponse: mergeObjectArray(a.afterResponse, injectChecksum(checksum2, b?.afterResponse)),
  trace: mergeObjectArray(a.trace, injectChecksum(checksum2, b?.trace)),
  error: mergeObjectArray(a.error, injectChecksum(checksum2, b?.error)),
  stop: mergeObjectArray(a.stop, injectChecksum(checksum2, b?.stop))
});
var asHookType = (fn, inject, { skipIfHasType = false }) => {
  if (!fn)
    return fn;
  if (!Array.isArray(fn))
    return skipIfHasType ? fn.scope ??= inject : fn.scope = inject, fn;
  for (const x of fn)
    skipIfHasType ? x.scope ??= inject : x.scope = inject;
  return fn;
};
var filterGlobal = (fn) => {
  if (!fn)
    return fn;
  if (!Array.isArray(fn))
    switch (fn.scope) {
      case "global":
      case "scoped":
        return { ...fn };
      default:
        return { fn };
    }
  const array = [];
  for (const x of fn)
    switch (x.scope) {
      case "global":
      case "scoped":
        array.push({
          ...x
        });
        break;
    }
  return array;
};
var filterGlobalHook = (hook) => ({
  ...hook,
  type: hook?.type,
  detail: hook?.detail,
  parse: filterGlobal(hook?.parse),
  transform: filterGlobal(hook?.transform),
  beforeHandle: filterGlobal(hook?.beforeHandle),
  afterHandle: filterGlobal(hook?.afterHandle),
  mapResponse: filterGlobal(hook?.mapResponse),
  afterResponse: filterGlobal(hook?.afterResponse),
  error: filterGlobal(hook?.error),
  trace: filterGlobal(hook?.trace)
});
var StatusMap = {
  Continue: 100,
  "Switching Protocols": 101,
  Processing: 102,
  "Early Hints": 103,
  OK: 200,
  Created: 201,
  Accepted: 202,
  "Non-Authoritative Information": 203,
  "No Content": 204,
  "Reset Content": 205,
  "Partial Content": 206,
  "Multi-Status": 207,
  "Already Reported": 208,
  "Multiple Choices": 300,
  "Moved Permanently": 301,
  Found: 302,
  "See Other": 303,
  "Not Modified": 304,
  "Temporary Redirect": 307,
  "Permanent Redirect": 308,
  "Bad Request": 400,
  Unauthorized: 401,
  "Payment Required": 402,
  Forbidden: 403,
  "Not Found": 404,
  "Method Not Allowed": 405,
  "Not Acceptable": 406,
  "Proxy Authentication Required": 407,
  "Request Timeout": 408,
  Conflict: 409,
  Gone: 410,
  "Length Required": 411,
  "Precondition Failed": 412,
  "Payload Too Large": 413,
  "URI Too Long": 414,
  "Unsupported Media Type": 415,
  "Range Not Satisfiable": 416,
  "Expectation Failed": 417,
  "I'm a teapot": 418,
  "Enhance Your Calm": 420,
  "Misdirected Request": 421,
  "Unprocessable Content": 422,
  Locked: 423,
  "Failed Dependency": 424,
  "Too Early": 425,
  "Upgrade Required": 426,
  "Precondition Required": 428,
  "Too Many Requests": 429,
  "Request Header Fields Too Large": 431,
  "Unavailable For Legal Reasons": 451,
  "Internal Server Error": 500,
  "Not Implemented": 501,
  "Bad Gateway": 502,
  "Service Unavailable": 503,
  "Gateway Timeout": 504,
  "HTTP Version Not Supported": 505,
  "Variant Also Negotiates": 506,
  "Insufficient Storage": 507,
  "Loop Detected": 508,
  "Not Extended": 510,
  "Network Authentication Required": 511
};
var InvertedStatusMap = Object.fromEntries(Object.entries(StatusMap).map(([k, v]) => [v, k]));
function removeTrailingEquals(digest) {
  let trimmedDigest = digest;
  for (;trimmedDigest.endsWith("="); )
    trimmedDigest = trimmedDigest.slice(0, -1);
  return trimmedDigest;
}
var encoder = new TextEncoder;
var signCookie = async (val, secret) => {
  if (typeof val == "object" ? val = JSON.stringify(val) : typeof val != "string" && (val = val + ""), secret == null)
    throw new TypeError("Secret key must be provided");
  const secretKey = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]), hmacBuffer = await crypto.subtle.sign("HMAC", secretKey, encoder.encode(val));
  return val + "." + removeTrailingEquals(Buffer.from(hmacBuffer).toString("base64"));
};
var constantTimeEqual = typeof crypto?.timingSafeEqual == "function" ? (a, b) => {
  const ab = Buffer.from(a, "utf8"), bb = Buffer.from(b, "utf8");
  return ab.length !== bb.length ? false : crypto.timingSafeEqual(ab, bb);
} : (a, b) => a === b;
var unsignCookie = async (input, secret) => {
  if (typeof input != "string")
    throw new TypeError("Signed cookie string must be provided.");
  const dot = input.lastIndexOf(".");
  if (dot === -1)
    return secret === null ? input : false;
  const tentativeValue = input.slice(0, dot), expectedInput = await signCookie(tentativeValue, secret);
  return constantTimeEqual(expectedInput, input) ? tentativeValue : false;
};
var insertStandaloneValidator = (hook, name, value) => {
  if (!hook.standaloneValidator?.length || !Array.isArray(hook.standaloneValidator)) {
    hook.standaloneValidator = [
      {
        [name]: value
      }
    ];
    return;
  }
  const last = hook.standaloneValidator[hook.standaloneValidator.length - 1];
  name in last ? hook.standaloneValidator.push({
    [name]: value
  }) : last[name] = value;
};
var parseNumericString = (message) => {
  if (typeof message == "number")
    return message;
  if (message.length < 16) {
    if (message.trim().length === 0)
      return null;
    const length = Number(message);
    return Number.isNaN(length) ? null : length;
  }
  if (message.length === 16) {
    if (message.trim().length === 0)
      return null;
    const number = Number(message);
    return Number.isNaN(number) || number.toString() !== message ? null : number;
  }
  return null;
};
var isNumericString = (message) => parseNumericString(message) !== null;

class PromiseGroup {
  constructor(onError = console.error, onFinally = () => {}) {
    this.onError = onError;
    this.onFinally = onFinally;
    this.root = null;
    this.promises = [];
  }
  get size() {
    return this.promises.length;
  }
  add(promise) {
    return this.promises.push(promise), this.root ||= this.drain(), this.promises.length === 1 && this.then(this.onFinally), promise;
  }
  async drain() {
    for (;this.promises.length > 0; ) {
      try {
        await this.promises[0];
      } catch (error) {
        this.onError(error);
      }
      this.promises.shift();
    }
    this.root = null;
  }
  then(onfulfilled, onrejected) {
    return (this.root ?? Promise.resolve()).then(onfulfilled, onrejected);
  }
}
var fnToContainer = (fn, subType) => {
  if (!fn)
    return fn;
  if (!Array.isArray(fn)) {
    if (typeof fn == "function" || typeof fn == "string")
      return subType ? { fn, subType } : { fn };
    if ("fn" in fn)
      return fn;
  }
  const fns = [];
  for (const x of fn)
    typeof x == "function" || typeof x == "string" ? fns.push(subType ? { fn: x, subType } : { fn: x }) : ("fn" in x) && fns.push(x);
  return fns;
};
var localHookToLifeCycleStore = (a) => (a.start && (a.start = fnToContainer(a.start)), a.request && (a.request = fnToContainer(a.request)), a.parse && (a.parse = fnToContainer(a.parse)), a.transform && (a.transform = fnToContainer(a.transform)), a.beforeHandle && (a.beforeHandle = fnToContainer(a.beforeHandle)), a.afterHandle && (a.afterHandle = fnToContainer(a.afterHandle)), a.mapResponse && (a.mapResponse = fnToContainer(a.mapResponse)), a.afterResponse && (a.afterResponse = fnToContainer(a.afterResponse)), a.trace && (a.trace = fnToContainer(a.trace)), a.error && (a.error = fnToContainer(a.error)), a.stop && (a.stop = fnToContainer(a.stop)), a);
var lifeCycleToFn = (a) => {
  const lifecycle = /* @__PURE__ */ Object.create(null);
  return a.start?.map && (lifecycle.start = a.start.map((x) => x.fn)), a.request?.map && (lifecycle.request = a.request.map((x) => x.fn)), a.parse?.map && (lifecycle.parse = a.parse.map((x) => x.fn)), a.transform?.map && (lifecycle.transform = a.transform.map((x) => x.fn)), a.beforeHandle?.map && (lifecycle.beforeHandle = a.beforeHandle.map((x) => x.fn)), a.afterHandle?.map && (lifecycle.afterHandle = a.afterHandle.map((x) => x.fn)), a.mapResponse?.map && (lifecycle.mapResponse = a.mapResponse.map((x) => x.fn)), a.afterResponse?.map && (lifecycle.afterResponse = a.afterResponse.map((x) => x.fn)), a.error?.map && (lifecycle.error = a.error.map((x) => x.fn)), a.stop?.map && (lifecycle.stop = a.stop.map((x) => x.fn)), a.trace?.map ? lifecycle.trace = a.trace.map((x) => x.fn) : lifecycle.trace = [], lifecycle;
};
var cloneInference = (inference) => ({
  body: inference.body,
  cookie: inference.cookie,
  headers: inference.headers,
  query: inference.query,
  set: inference.set,
  server: inference.server,
  path: inference.path,
  route: inference.route,
  url: inference.url
});
var redirect = (url, status = 302) => Response.redirect(url, status);
var ELYSIA_FORM_DATA = Symbol("ElysiaFormData");
var ELYSIA_REQUEST_ID = Symbol("ElysiaRequestId");
var form = (items) => {
  const formData = new FormData;
  if (formData[ELYSIA_FORM_DATA] = {}, items)
    for (const [key, value] of Object.entries(items)) {
      if (Array.isArray(value)) {
        formData[ELYSIA_FORM_DATA][key] = [];
        for (const v of value)
          value instanceof File ? formData.append(key, value, value.name) : value instanceof ElysiaFile ? formData.append(key, value.value, value.value?.name) : formData.append(key, value), formData[ELYSIA_FORM_DATA][key].push(value);
        continue;
      }
      value instanceof File ? formData.append(key, value, value.name) : value instanceof ElysiaFile ? formData.append(key, value.value, value.value?.name) : formData.append(key, value), formData[ELYSIA_FORM_DATA][key] = value;
    }
  return formData;
};
var randomId = typeof crypto > "u" || isCloudflareWorker() ? () => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0;i < 16; i++)
    result += characters.charAt(Math.floor(Math.random() * 62));
  return result;
} : () => {
  const uuid = crypto.randomUUID();
  return uuid.slice(0, 8) + uuid.slice(24, 32);
};
var deduplicateChecksum = (array) => {
  if (!array.length)
    return [];
  const hashes = [];
  for (let i = 0;i < array.length; i++) {
    const item = array[i];
    item.checksum && (hashes.includes(item.checksum) && (array.splice(i, 1), i--), hashes.push(item.checksum));
  }
  return array;
};
var promoteEvent = (events, as = "scoped") => {
  if (events) {
    if (as === "scoped") {
      for (const event of events)
        "scope" in event && event.scope === "local" && (event.scope = "scoped");
      return;
    }
    for (const event of events)
      "scope" in event && (event.scope = "global");
  }
};
var getLoosePath = (path) => path.charCodeAt(path.length - 1) === 47 ? path.slice(0, path.length - 1) : path + "/";
var isNotEmpty = (obj) => {
  if (!obj)
    return false;
  for (const _ in obj)
    return true;
  return false;
};
var encodePath = (path, { dynamic = false } = {}) => {
  let encoded = encodeURIComponent(path).replace(/%2F/g, "/");
  return dynamic && (encoded = encoded.replace(/%3A/g, ":").replace(/%3F/g, "?")), encoded;
};
var supportPerMethodInlineHandler = !!(typeof Bun > "u" || Bun.semver?.satisfies?.(Bun.version, ">=1.2.14"));
async function getResponseLength(response) {
  if (response.bodyUsed || !response.body)
    return 0;
  let length = 0;
  const reader = response.body.getReader();
  for (;; ) {
    const { done, value } = await reader.read();
    if (done)
      break;
    length += value.byteLength;
  }
  return length;
}
var emptySchema = {
  headers: true,
  cookie: true,
  query: true,
  params: true,
  body: true,
  response: true
};

// node_modules/elysia/dist/error.mjs
var env = typeof Bun < "u" ? Bun.env : typeof process < "u" ? process?.env : undefined;
var ERROR_CODE = Symbol("ElysiaErrorCode");
var isProduction = (env?.NODE_ENV ?? env?.ENV) === "production";
var emptyHttpStatus = {
  101: undefined,
  204: undefined,
  205: undefined,
  304: undefined,
  307: undefined,
  308: undefined
};

class ElysiaCustomStatusResponse {
  constructor(code, response) {
    const res = response ?? (code in InvertedStatusMap ? InvertedStatusMap[code] : code);
    this.code = StatusMap[code] ?? code, code in emptyHttpStatus ? this.response = undefined : this.response = res;
  }
}
var status = (code, response) => new ElysiaCustomStatusResponse(code, response);
class NotFoundError extends Error {
  constructor(message) {
    super(message ?? "NOT_FOUND");
    this.code = "NOT_FOUND";
    this.status = 404;
  }
}

class ParseError extends Error {
  constructor(cause) {
    super("Bad Request", {
      cause
    });
    this.code = "PARSE";
    this.status = 400;
  }
}

class InvalidCookieSignature extends Error {
  constructor(key, message) {
    super(message ?? `"${key}" has invalid cookie signature`);
    this.key = key;
    this.code = "INVALID_COOKIE_SIGNATURE";
    this.status = 400;
  }
}
var mapValueError = (error) => {
  if (!error)
    return error;
  let { message, path, value, type } = error;
  Array.isArray(path) && (path = path[0]);
  const property = typeof path == "string" ? path.slice(1).replaceAll("/", ".") : "unknown", isRoot = path === "";
  switch (type) {
    case 42:
      return {
        ...error,
        summary: isRoot ? "Value should not be provided" : `Property '${property}' should not be provided`
      };
    case 45:
      return {
        ...error,
        summary: isRoot ? "Value is missing" : `Property '${property}' is missing`
      };
    case 50:
      const quoteIndex = message.indexOf("'"), format = message.slice(quoteIndex + 1, message.indexOf("'", quoteIndex + 1));
      return {
        ...error,
        summary: isRoot ? "Value should be an email" : `Property '${property}' should be ${format}`
      };
    case 54:
      return {
        ...error,
        summary: `${message.slice(0, 9).trim()} property '${property}' to be ${message.slice(8).trim()} but found: ${value}`
      };
    case 62:
      const union = error.schema.anyOf.map((x) => `'${x?.format ?? x.type}'`).join(", ");
      return {
        ...error,
        summary: isRoot ? `Value should be one of ${union}` : `Property '${property}' should be one of: ${union}`
      };
    default:
      return { summary: message, ...error };
  }
};
var MAX_ERRORS = 64;
var takeErrors = (iterator, limit = MAX_ERRORS) => {
  const errors = [];
  for (const error of iterator) {
    if (!error)
      continue;
    const mapped = mapValueError(error);
    if (mapped && errors.push(mapped), errors.length >= limit)
      break;
  }
  return errors;
};

class InvalidFileType extends Error {
  constructor(property, expected, message = `"${property}" has invalid file type`) {
    super(message);
    this.property = property;
    this.expected = expected;
    this.message = message;
    this.code = "INVALID_FILE_TYPE";
    this.status = 422;
    Object.setPrototypeOf(this, InvalidFileType.prototype);
  }
  toResponse(headers) {
    return isProduction ? new Response(JSON.stringify({
      type: "validation",
      on: "body"
    }), {
      status: 422,
      headers: {
        ...headers,
        "content-type": "application/json"
      }
    }) : new Response(JSON.stringify({
      type: "validation",
      on: "body",
      summary: "Invalid file type",
      message: this.message,
      property: this.property,
      expected: this.expected
    }), {
      status: 422,
      headers: {
        ...headers,
        "content-type": "application/json"
      }
    });
  }
}

class ValidationError extends Error {
  constructor(type, validator, value, allowUnsafeValidationDetails = false, errors) {
    let message = "", error, expected, customError;
    if (validator?.provider === "standard" || "~standard" in validator || validator.schema && "~standard" in validator.schema) {
      const standard = ("~standard" in validator ? validator : validator.schema)["~standard"];
      error = (errors ?? standard.validate(value).issues)?.[0], isProduction && !allowUnsafeValidationDetails ? message = JSON.stringify({
        type: "validation",
        on: type,
        found: value
      }) : message = JSON.stringify({
        type: "validation",
        on: type,
        property: error.path?.[0] || "root",
        message: error?.message,
        summary: error?.problem,
        expected,
        found: value,
        errors
      }, null, 2), customError = error?.message;
    } else {
      value && typeof value == "object" && value instanceof ElysiaCustomStatusResponse && (value = value.response), error = errors?.First() ?? ("Errors" in validator ? validator.Errors(value).First() : Errors(validator, value).First());
      const accessor = error?.path || "root", schema = validator?.schema ?? validator;
      if (!isProduction && !allowUnsafeValidationDetails)
        try {
          expected = Create2(schema);
        } catch (error2) {
          expected = {
            type: "Could not create expected value",
            message: error2?.message,
            error: error2
          };
        }
      customError = error?.schema?.message || error?.schema?.error !== undefined ? typeof error.schema.error == "function" ? error.schema.error(isProduction && !allowUnsafeValidationDetails ? {
        type: "validation",
        on: type,
        found: value
      } : {
        type: "validation",
        on: type,
        value,
        property: accessor,
        message: error?.message,
        summary: mapValueError(error)?.summary,
        found: value,
        expected,
        errors: "Errors" in validator ? takeErrors(validator.Errors(value)) : takeErrors(Errors(validator, value))
      }, validator) : error.schema.error : undefined, customError !== undefined ? message = typeof customError == "object" ? JSON.stringify(customError) : customError + "" : isProduction && !allowUnsafeValidationDetails ? message = JSON.stringify({
        type: "validation",
        on: type,
        found: value
      }) : message = JSON.stringify({
        type: "validation",
        on: type,
        property: accessor,
        message: error?.message,
        summary: mapValueError(error)?.summary,
        expected,
        found: value,
        errors: "Errors" in validator ? takeErrors(validator.Errors(value)) : takeErrors(Errors(validator, value))
      }, null, 2);
    }
    super(message);
    this.type = type;
    this.validator = validator;
    this.value = value;
    this.allowUnsafeValidationDetails = allowUnsafeValidationDetails;
    this.code = "VALIDATION";
    this.status = 422;
    this.valueError = error, this.expected = expected, this.customError = customError, Object.setPrototypeOf(this, ValidationError.prototype);
  }
  get messageValue() {
    return this.valueError;
  }
  get all() {
    return this.validator?.provider === "standard" || "~standard" in this.validator || "schema" in this.validator && this.validator.schema && "~standard" in this.validator.schema ? ("~standard" in this.validator ? this.validator : this.validator.schema)["~standard"].validate(this.value).issues?.slice(0, MAX_ERRORS).map((issue) => ({
      summary: issue.message,
      path: issue.path?.join(".") || "root",
      message: issue.message,
      value: this.value
    })) || [] : ("Errors" in this.validator) ? takeErrors(this.validator.Errors(this.value)) : takeErrors(Errors(this.validator, this.value));
  }
  static simplifyModel(validator) {
    const model = "schema" in validator ? validator.schema : validator;
    try {
      return Create2(model);
    } catch {
      return model;
    }
  }
  get model() {
    return "~standard" in this.validator ? this.validator : ValidationError.simplifyModel(this.validator);
  }
  toResponse(headers) {
    return new Response(this.message, {
      status: 400,
      headers: {
        ...headers,
        "content-type": "application/json"
      }
    });
  }
  detail(message, allowUnsafeValidatorDetails = this.allowUnsafeValidationDetails) {
    if (!this.customError)
      return this.message;
    const value = this.value, expected = this.expected, errors = this.all;
    return isProduction && !allowUnsafeValidatorDetails ? {
      type: "validation",
      on: this.type,
      found: value,
      message
    } : {
      type: "validation",
      on: this.type,
      property: this.valueError?.path || "root",
      message,
      summary: mapValueError(this.valueError)?.summary,
      found: value,
      expected,
      errors
    };
  }
}

// node_modules/elysia/dist/type-system/utils.mjs
var tryParse = (v, schema) => {
  try {
    return JSON.parse(v);
  } catch {
    throw new ValidationError("property", schema, v);
  }
};
function createType(kind, func) {
  return Has2(kind) || Set3(kind, func), (options = {}) => Unsafe({ ...options, [Kind]: kind });
}
var compile = (schema) => {
  try {
    const compiler = TypeCompiler.Compile(schema);
    return compiler.Create = () => Create2(schema), compiler.Error = (v) => new ValidationError("property", schema, v, compiler.Errors(v)), compiler;
  } catch {
    return {
      Check: (v) => Check(schema, v),
      CheckThrow: (v) => {
        if (!Check(schema, v))
          throw new ValidationError("property", schema, v, Errors(schema, v));
      },
      Decode: (v) => Decode(schema, v),
      Create: () => Create2(schema),
      Error: (v) => new ValidationError("property", schema, v, Errors(schema, v))
    };
  }
};
var parseFileUnit = (size) => {
  if (typeof size == "string")
    switch (size.slice(-1)) {
      case "k":
        return +size.slice(0, size.length - 1) * 1024;
      case "m":
        return +size.slice(0, size.length - 1) * 1048576;
      default:
        return +size;
    }
  return size;
};
var checkFileExtension = (type, extension) => type.startsWith(extension) ? true : extension.charCodeAt(extension.length - 1) === 42 && extension.charCodeAt(extension.length - 2) === 47 && type.startsWith(extension.slice(0, -1));
var _fileTypeFromBlobWarn = false;
var warnIfFileTypeIsNotInstalled = () => {
  _fileTypeFromBlobWarn || (console.warn("[Elysia] Attempt to validate file type without 'file-type'. This may lead to security risks. We recommend installing 'file-type' to properly validate file extension."), _fileTypeFromBlobWarn = true);
};
var loadFileType = async () => Promise.resolve().then(() => (init_source(), {})).then((x) => (_fileTypeFromBlob = fileTypeFromBlob, _fileTypeFromBlob)).catch(warnIfFileTypeIsNotInstalled);
var _fileTypeFromBlob;
var fileTypeFromBlob2 = (file) => _fileTypeFromBlob ? _fileTypeFromBlob(file) : loadFileType().then((mod) => {
  if (mod)
    return mod(file);
});
var fileType = async (file, extension, name = file?.name ?? "") => {
  if (Array.isArray(file))
    return await Promise.all(file.map((f) => fileType(f, extension, name))), true;
  if (!file)
    return false;
  const result = await fileTypeFromBlob2(file);
  if (!result)
    throw new InvalidFileType(name, extension);
  if (typeof extension == "string" && !checkFileExtension(result.mime, extension))
    throw new InvalidFileType(name, extension);
  for (let i = 0;i < extension.length; i++)
    if (checkFileExtension(result.mime, extension[i]))
      return true;
  throw new InvalidFileType(name, extension);
};
var validateFile = (options, value) => {
  if (value instanceof ElysiaFile)
    return true;
  if (!(value instanceof Blob) || options.minSize && value.size < parseFileUnit(options.minSize) || options.maxSize && value.size > parseFileUnit(options.maxSize))
    return false;
  if (options.extension) {
    if (typeof options.extension == "string")
      return checkFileExtension(value.type, options.extension);
    for (let i = 0;i < options.extension.length; i++)
      if (checkFileExtension(value.type, options.extension[i]))
        return true;
    return false;
  }
  return true;
};

// node_modules/elysia/dist/type-system/format.mjs
var fullFormats = {
  date,
  time: getTime(true),
  "date-time": getDateTime(true),
  "iso-time": getTime(false),
  "iso-date-time": getDateTime(false),
  duration: /^P(?!$)((\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+S)?)?|(\d+W)?)$/,
  uri,
  "uri-reference": /^(?:[a-z][a-z0-9+\-.]*:)?(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'"()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'"()*+,;=:@]|%[0-9a-f]{2})*)*)?(?:\?(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'"()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i,
  "uri-template": /^(?:(?:[^\x00-\x20"'<>%\\^`{|}]|%[0-9a-f]{2})|\{[+#./;?&=,!@|]?(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?(?:,(?:[a-z0-9_]|%[0-9a-f]{2})+(?::[1-9][0-9]{0,3}|\*)?)*\})*$/i,
  url: /^(?:https?|ftp):\/\/(?:[^\s:@]+(?::[^\s@]*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)(?:\.(?:[a-z0-9\u{00a1}-\u{ffff}]+-)*[a-z0-9\u{00a1}-\u{ffff}]+)*(?:\.(?:[a-z\u{00a1}-\u{ffff}]{2,})))(?::\d{2,5})?(?:\/[^\s]*)?$/iu,
  email: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i,
  hostname: /^(?=.{1,253}\.?$)[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?(?:\.[a-z0-9](?:[-0-9a-z]{0,61}[0-9a-z])?)*\.?$/i,
  ipv4: /^(?:(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)$/,
  ipv6: /^((([0-9a-f]{1,4}:){7}([0-9a-f]{1,4}|:))|(([0-9a-f]{1,4}:){6}(:[0-9a-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){5}(((:[0-9a-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9a-f]{1,4}:){4}(((:[0-9a-f]{1,4}){1,3})|((:[0-9a-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){3}(((:[0-9a-f]{1,4}){1,4})|((:[0-9a-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){2}(((:[0-9a-f]{1,4}){1,5})|((:[0-9a-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9a-f]{1,4}:){1}(((:[0-9a-f]{1,4}){1,6})|((:[0-9a-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9a-f]{1,4}){1,7})|((:[0-9a-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))$/i,
  regex,
  uuid: /^(?:urn:uuid:)?[0-9a-f]{8}-(?:[0-9a-f]{4}-){3}[0-9a-f]{12}$/i,
  "json-pointer": /^(?:\/(?:[^~/]|~0|~1)*)*$/,
  "json-pointer-uri-fragment": /^#(?:\/(?:[a-z0-9_\-.!$&'()*+,;:=@]|%[0-9a-f]{2}|~0|~1)*)*$/i,
  "relative-json-pointer": /^(?:0|[1-9][0-9]*)(?:#|(?:\/(?:[^~/]|~0|~1)*)*)$/,
  byte,
  int32: { type: "number", validate: validateInt32 },
  int64: { type: "number", validate: validateInt64 },
  float: { type: "number", validate: validateNumber },
  double: { type: "number", validate: validateNumber },
  password: true,
  binary: true
};
function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}
var DATE = /^(\d\d\d\d)-(\d\d)-(\d\d)$/;
var DAYS = [0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function date(str) {
  const matches = DATE.exec(str);
  if (!matches)
    return false;
  const year = +matches[1], month = +matches[2], day = +matches[3];
  return month >= 1 && month <= 12 && day >= 1 && day <= (month === 2 && isLeapYear(year) ? 29 : DAYS[month]);
}
var TIME = /^(\d\d):(\d\d):(\d\d(?:\.\d+)?)(z|([+-])(\d\d)(?::?(\d\d))?)?$/i;
function getTime(strictTimeZone) {
  return function(str) {
    const matches = TIME.exec(str);
    if (!matches)
      return false;
    const hr = +matches[1], min = +matches[2], sec = +matches[3], tz = matches[4], tzSign = matches[5] === "-" ? -1 : 1, tzH = +(matches[6] || 0), tzM = +(matches[7] || 0);
    if (tzH > 23 || tzM > 59 || strictTimeZone && !tz)
      return false;
    if (hr <= 23 && min <= 59 && sec < 60)
      return true;
    const utcMin = min - tzM * tzSign, utcHr = hr - tzH * tzSign - (utcMin < 0 ? 1 : 0);
    return (utcHr === 23 || utcHr === -1) && (utcMin === 59 || utcMin === -1) && sec < 61;
  };
}
var parseDateTimeEmptySpace = (str) => str.charCodeAt(str.length - 6) === 32 ? str.slice(0, -6) + "+" + str.slice(-5) : str;
var DATE_TIME_SEPARATOR = /t|\s/i;
function getDateTime(strictTimeZone) {
  const time = getTime(strictTimeZone);
  return function(str) {
    const dateTime = str.split(DATE_TIME_SEPARATOR);
    return dateTime.length === 2 && date(dateTime[0]) && time(dateTime[1]);
  };
}
var NOT_URI_FRAGMENT = /\/|:/;
var URI = /^(?:[a-z][a-z0-9+\-.]*:)(?:\/?\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:]|%[0-9a-f]{2})*@)?(?:\[(?:(?:(?:(?:[0-9a-f]{1,4}:){6}|::(?:[0-9a-f]{1,4}:){5}|(?:[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){4}|(?:(?:[0-9a-f]{1,4}:){0,1}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){3}|(?:(?:[0-9a-f]{1,4}:){0,2}[0-9a-f]{1,4})?::(?:[0-9a-f]{1,4}:){2}|(?:(?:[0-9a-f]{1,4}:){0,3}[0-9a-f]{1,4})?::[0-9a-f]{1,4}:|(?:(?:[0-9a-f]{1,4}:){0,4}[0-9a-f]{1,4})?::)(?:[0-9a-f]{1,4}:[0-9a-f]{1,4}|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?))|(?:(?:[0-9a-f]{1,4}:){0,5}[0-9a-f]{1,4})?::[0-9a-f]{1,4}|(?:(?:[0-9a-f]{1,4}:){0,6}[0-9a-f]{1,4})?::)|[Vv][0-9a-f]+\.[a-z0-9\-._~!$&'()*+,;=:]+)\]|(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)|(?:[a-z0-9\-._~!$&'()*+,;=]|%[0-9a-f]{2})*)(?::\d*)?(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*|\/(?:(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)?|(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})+(?:\/(?:[a-z0-9\-._~!$&'()*+,;=:@]|%[0-9a-f]{2})*)*)(?:\?(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?(?:#(?:[a-z0-9\-._~!$&'()*+,;=:@/?]|%[0-9a-f]{2})*)?$/i;
function uri(str) {
  return NOT_URI_FRAGMENT.test(str) && URI.test(str);
}
var BYTE = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/gm;
function byte(str) {
  return BYTE.lastIndex = 0, BYTE.test(str);
}
var MIN_INT32 = -(2 ** 31);
var MAX_INT32 = 2 ** 31 - 1;
function validateInt32(value) {
  return Number.isInteger(value) && value <= MAX_INT32 && value >= MIN_INT32;
}
function validateInt64(value) {
  return Number.isInteger(value);
}
function validateNumber() {
  return true;
}
var Z_ANCHOR = /[^\\]\\Z/;
function regex(str) {
  if (Z_ANCHOR.test(str))
    return false;
  try {
    return new RegExp(str), true;
  } catch {
    return false;
  }
}
var isISO8601 = /(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d\.\d+([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))|(\d{4}-[01]\d-[0-3]\dT[0-2]\d:[0-5]\d([+-][0-2]\d:[0-5]\d|Z))/;
var isFormalDate = /(?:Sun|Mon|Tue|Wed|Thu|Fri|Sat)\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s\d{2}\s\d{4}\s\d{2}:\d{2}:\d{2}\sGMT(?:\+|-)\d{4}\s\([^)]+\)/;
var isShortenDate = /^(?:(?:(?:(?:0?[1-9]|[12][0-9]|3[01])[/\s-](?:0?[1-9]|1[0-2])[/\s-](?:19|20)\d{2})|(?:(?:19|20)\d{2}[/\s-](?:0?[1-9]|1[0-2])[/\s-](?:0?[1-9]|[12][0-9]|3[01]))))(?:\s(?:1[012]|0?[1-9]):[0-5][0-9](?::[0-5][0-9])?(?:\s[AP]M)?)?$/;
var _validateDate = fullFormats.date;
var _validateDateTime = fullFormats["date-time"];
Has("date") || Set2("date", (value) => {
  const temp = parseDateTimeEmptySpace(value).replace(/"/g, "");
  if (isISO8601.test(temp) || isFormalDate.test(temp) || isShortenDate.test(temp) || _validateDate(temp)) {
    const date2 = new Date(temp);
    if (!Number.isNaN(date2.getTime()))
      return true;
  }
  return false;
}), Has("date-time") || Set2("date-time", (value) => {
  const temp = value.replace(/"/g, "");
  if (isISO8601.test(temp) || isFormalDate.test(temp) || isShortenDate.test(temp) || _validateDateTime(temp)) {
    const date2 = new Date(temp);
    if (!Number.isNaN(date2.getTime()))
      return true;
  }
  return false;
}), Object.entries(fullFormats).forEach((formatEntry) => {
  const [formatName, formatValue] = formatEntry;
  Has(formatName) || (formatValue instanceof RegExp ? Set2(formatName, (value) => formatValue.test(value)) : typeof formatValue == "function" && Set2(formatName, formatValue));
}), Has("numeric") || Set2("numeric", (value) => !!value && !isNaN(+value)), Has("integer") || Set2("integer", (value) => !!value && Number.isInteger(+value)), Has("boolean") || Set2("boolean", (value) => value === "true" || value === "false"), Has("ObjectString") || Set2("ObjectString", (value) => {
  let start = value.charCodeAt(0);
  if ((start === 9 || start === 10 || start === 32) && (start = value.trimStart().charCodeAt(0)), start !== 123 && start !== 91)
    return false;
  try {
    return JSON.parse(value), true;
  } catch {
    return false;
  }
}), Has("ArrayString") || Set2("ArrayString", (value) => {
  let start = value.charCodeAt(0);
  if ((start === 9 || start === 10 || start === 32) && (start = value.trimStart().charCodeAt(0)), start !== 123 && start !== 91)
    return false;
  try {
    return JSON.parse(value), true;
  } catch {
    return false;
  }
});

// node_modules/elysia/dist/type-system/index.mjs
var t = Object.assign({}, Type);
createType("UnionEnum", (schema, value) => (typeof value == "number" || typeof value == "string" || value === null) && schema.enum.includes(value)), createType("ArrayBuffer", (schema, value) => value instanceof ArrayBuffer);
var internalFiles = createType("Files", (options, value) => {
  if (options.minItems && options.minItems > 1 && !Array.isArray(value))
    return false;
  if (!Array.isArray(value))
    return validateFile(options, value);
  if (options.minItems && value.length < options.minItems || options.maxItems && value.length > options.maxItems)
    return false;
  for (let i = 0;i < value.length; i++)
    if (!validateFile(options, value[i]))
      return false;
  return true;
});
var internalFormData = createType("ElysiaForm", ({ compiler, ...schema }, value) => {
  if (!(value instanceof FormData))
    return false;
  if (compiler) {
    if (!(ELYSIA_FORM_DATA in value))
      throw new ValidationError("property", schema, value);
    if (!compiler.Check(value[ELYSIA_FORM_DATA]))
      throw compiler.Error(value[ELYSIA_FORM_DATA]);
  }
  return true;
});
var ElysiaType = {
  String: (property) => Type.String(property),
  Numeric: (property) => {
    const schema = Type.Number(property), compiler = compile(schema);
    return t.Transform(t.Union([
      t.String({
        format: "numeric",
        default: 0
      }),
      t.Number(property)
    ], property)).Decode((value) => {
      const number = +value;
      if (isNaN(number))
        return value;
      if (property && !compiler.Check(number))
        throw compiler.Error(number);
      return number;
    }).Encode((value) => value);
  },
  NumericEnum(item, property) {
    const schema = Type.Enum(item, property), compiler = compile(schema);
    return t.Transform(t.Union([t.String({ format: "numeric" }), t.Number()], property)).Decode((value) => {
      const number = +value;
      if (isNaN(number) || !compiler.Check(number))
        throw compiler.Error(number);
      return number;
    }).Encode((value) => value);
  },
  Integer: (property) => {
    const schema = Type.Integer(property), compiler = compile(schema);
    return t.Transform(t.Union([
      t.String({
        format: "integer",
        default: 0
      }),
      Type.Integer(property)
    ], property)).Decode((value) => {
      const number = +value;
      if (!compiler.Check(number))
        throw compiler.Error(number);
      return number;
    }).Encode((value) => value);
  },
  Date: (property) => {
    const schema = Type.Date(property), compiler = compile(schema), _default = property?.default ? new Date(property.default) : undefined;
    return t.Transform(t.Union([
      Type.Date(property),
      t.String({
        format: "date-time",
        default: _default?.toISOString()
      }),
      t.String({
        format: "date",
        default: _default?.toISOString()
      }),
      t.Number({ default: _default?.getTime() })
    ], property)).Decode((value) => {
      if (typeof value == "number") {
        const date2 = new Date(value);
        if (!compiler.Check(date2))
          throw compiler.Error(date2);
        return date2;
      }
      if (value instanceof Date)
        return value;
      const date = new Date(parseDateTimeEmptySpace(value));
      if (!date || isNaN(date.getTime()))
        throw new ValidationError("property", schema, date);
      if (!compiler.Check(date))
        throw compiler.Error(date);
      return date;
    }).Encode((value) => {
      if (value instanceof Date)
        return value.toISOString();
      if (typeof value == "string") {
        const parsed = new Date(parseDateTimeEmptySpace(value));
        if (isNaN(parsed.getTime()))
          throw new ValidationError("property", schema, value);
        return parsed.toISOString();
      }
      if (!compiler.Check(value))
        throw compiler.Error(value);
      return value;
    });
  },
  BooleanString: (property) => {
    const schema = Type.Boolean(property), compiler = compile(schema);
    return t.Transform(t.Union([
      t.Boolean(property),
      t.String({
        format: "boolean",
        default: false
      })
    ], property)).Decode((value) => {
      if (typeof value == "string")
        return value === "true";
      if (value !== undefined && !compiler.Check(value))
        throw compiler.Error(value);
      return value;
    }).Encode((value) => value);
  },
  ObjectString: (properties, options) => {
    const schema = t.Object(properties, options), compiler = compile(schema);
    return t.Transform(t.Union([
      t.String({
        format: "ObjectString",
        default: options?.default
      }),
      schema
    ], {
      elysiaMeta: "ObjectString"
    })).Decode((value) => {
      if (typeof value == "string") {
        if (value.charCodeAt(0) !== 123)
          throw new ValidationError("property", schema, value);
        if (!compiler.Check(value = tryParse(value, schema)))
          throw compiler.Error(value);
        return compiler.Decode(value);
      }
      return value;
    }).Encode((value) => {
      let original;
      if (typeof value == "string" && (value = tryParse(original = value, schema)), !compiler.Check(value))
        throw compiler.Error(value);
      return original ?? JSON.stringify(value);
    });
  },
  ArrayString: (children = t.String(), options) => {
    const schema = t.Array(children, options), compiler = compile(schema), decode = (value, isProperty = false) => {
      if (value.charCodeAt(0) === 91) {
        if (!compiler.Check(value = tryParse(value, schema)))
          throw compiler.Error(value);
        return compiler.Decode(value);
      }
      if (isProperty)
        return value;
      throw new ValidationError("property", schema, value);
    };
    return t.Transform(t.Union([
      t.String({
        format: "ArrayString",
        default: options?.default
      }),
      schema
    ], {
      elysiaMeta: "ArrayString"
    })).Decode((value) => {
      if (Array.isArray(value)) {
        let values = [];
        for (let i = 0;i < value.length; i++) {
          const v = value[i];
          if (typeof v == "string") {
            const t2 = decode(v, true);
            Array.isArray(t2) ? values = values.concat(t2) : values.push(t2);
            continue;
          }
          values.push(v);
        }
        return values;
      }
      return typeof value == "string" ? decode(value) : value;
    }).Encode((value) => {
      let original;
      if (typeof value == "string" && (value = tryParse(original = value, schema)), !compiler.Check(value))
        throw new ValidationError("property", schema, value);
      return original ?? JSON.stringify(value);
    });
  },
  ArrayQuery: (children = t.String(), options) => {
    const schema = t.Array(children, options), compiler = compile(schema), decode = (value) => value.indexOf(",") !== -1 ? compiler.Decode(value.split(",")) : compiler.Decode([value]);
    return t.Transform(t.Union([
      t.String({
        default: options?.default
      }),
      schema
    ], {
      elysiaMeta: "ArrayQuery"
    })).Decode((value) => {
      if (Array.isArray(value)) {
        let values = [];
        for (let i = 0;i < value.length; i++) {
          const v = value[i];
          if (typeof v == "string") {
            const t2 = decode(v);
            Array.isArray(t2) ? values = values.concat(t2) : values.push(t2);
            continue;
          }
          values.push(v);
        }
        return values;
      }
      return typeof value == "string" ? decode(value) : value;
    }).Encode((value) => {
      let original;
      if (typeof value == "string" && (value = tryParse(original = value, schema)), !compiler.Check(value))
        throw new ValidationError("property", schema, value);
      return original ?? JSON.stringify(value);
    });
  },
  File: createType("File", validateFile),
  Files: (options = {}) => t.Transform(internalFiles(options)).Decode((value) => Array.isArray(value) ? value : [value]).Encode((value) => value),
  Nullable: (schema, options) => t.Union([schema, t.Null()], {
    ...options,
    nullable: true
  }),
  MaybeEmpty: (schema, options) => t.Union([schema, t.Null(), t.Undefined()], options),
  Cookie: (properties, {
    domain,
    expires,
    httpOnly,
    maxAge,
    path,
    priority,
    sameSite,
    secure,
    secrets,
    sign,
    ...options
  } = {}) => {
    const v = t.Object(properties, options);
    return v.config = {
      domain,
      expires,
      httpOnly,
      maxAge,
      path,
      priority,
      sameSite,
      secure,
      secrets,
      sign
    }, v;
  },
  UnionEnum: (values, options = {}) => {
    const type = values.every((value) => typeof value == "string") ? { type: "string" } : values.every((value) => typeof value == "number") ? { type: "number" } : values.every((value) => value === null) ? { type: "null" } : {};
    if (values.some((x) => typeof x == "object" && x !== null))
      throw new Error("This type does not support objects or arrays");
    return {
      default: values[0],
      ...options,
      [Kind]: "UnionEnum",
      ...type,
      enum: values
    };
  },
  NoValidate: (v, enabled = true) => (v.noValidate = enabled, v),
  Form: (v, options = {}) => {
    const schema = t.Object(v, {
      default: form({}),
      ...options
    }), compiler = compile(schema);
    return t.Union([
      schema,
      internalFormData({
        compiler
      })
    ]);
  },
  ArrayBuffer(options = {}) {
    return {
      default: [1, 2, 3],
      ...options,
      [Kind]: "ArrayBuffer"
    };
  },
  Uint8Array: (options) => {
    const schema = Type.Uint8Array(options), compiler = compile(schema);
    return t.Transform(t.Union([t.ArrayBuffer(), Type.Uint8Array(options)])).Decode((value) => {
      if (value instanceof ArrayBuffer) {
        if (!compiler.Check(value = new Uint8Array(value)))
          throw compiler.Error(value);
        return value;
      }
      return value;
    }).Encode((value) => value);
  }
};
t.BooleanString = ElysiaType.BooleanString, t.ObjectString = ElysiaType.ObjectString, t.ArrayString = ElysiaType.ArrayString, t.ArrayQuery = ElysiaType.ArrayQuery, t.Numeric = ElysiaType.Numeric, t.NumericEnum = ElysiaType.NumericEnum, t.Integer = ElysiaType.Integer, t.File = (arg) => (arg?.type && loadFileType(), ElysiaType.File({
  default: "File",
  ...arg,
  extension: arg?.type,
  type: "string",
  format: "binary"
})), t.Files = (arg) => (arg?.type && loadFileType(), ElysiaType.Files({
  ...arg,
  elysiaMeta: "Files",
  default: "Files",
  extension: arg?.type,
  type: "array",
  items: {
    ...arg,
    default: "Files",
    type: "string",
    format: "binary"
  }
})), t.Nullable = ElysiaType.Nullable, t.MaybeEmpty = ElysiaType.MaybeEmpty, t.Cookie = ElysiaType.Cookie, t.Date = ElysiaType.Date, t.UnionEnum = ElysiaType.UnionEnum, t.NoValidate = ElysiaType.NoValidate, t.Form = ElysiaType.Form, t.ArrayBuffer = ElysiaType.ArrayBuffer, t.Uint8Array = ElysiaType.Uint8Array;

// node_modules/elysia/dist/sucrose.mjs
var separateFunction = (code) => {
  code.startsWith("async") && (code = code.slice(5)), code = code.trimStart();
  let index = -1;
  if (code.charCodeAt(0) === 40 && (index = code.indexOf("=>", code.indexOf(")")), index !== -1)) {
    let bracketEndIndex = index;
    for (;bracketEndIndex > 0 && code.charCodeAt(--bracketEndIndex) !== 41; )
      ;
    let body = code.slice(index + 2);
    return body.charCodeAt(0) === 32 && (body = body.trimStart()), [
      code.slice(1, bracketEndIndex),
      body,
      {
        isArrowReturn: body.charCodeAt(0) !== 123
      }
    ];
  }
  if (/^(\w+)=>/g.test(code) && (index = code.indexOf("=>"), index !== -1)) {
    let body = code.slice(index + 2);
    return body.charCodeAt(0) === 32 && (body = body.trimStart()), [
      code.slice(0, index),
      body,
      {
        isArrowReturn: body.charCodeAt(0) !== 123
      }
    ];
  }
  if (code.startsWith("function")) {
    index = code.indexOf("(");
    const end = code.indexOf(")");
    return [
      code.slice(index + 1, end),
      code.slice(end + 2),
      {
        isArrowReturn: false
      }
    ];
  }
  const start = code.indexOf("(");
  if (start !== -1) {
    const sep = code.indexOf(`
`, 2), parameter = code.slice(0, sep), end = parameter.lastIndexOf(")") + 1, body = code.slice(sep + 1);
    return [
      parameter.slice(start, end),
      "{" + body,
      {
        isArrowReturn: false
      }
    ];
  }
  const x = code.split(`
`, 2);
  return [x[0], x[1], { isArrowReturn: false }];
};
var bracketPairRange = (parameter) => {
  const start = parameter.indexOf("{");
  if (start === -1)
    return [-1, 0];
  let end = start + 1, deep = 1;
  for (;end < parameter.length; end++) {
    const char = parameter.charCodeAt(end);
    if (char === 123 ? deep++ : char === 125 && deep--, deep === 0)
      break;
  }
  return deep !== 0 ? [0, parameter.length] : [start, end + 1];
};
var bracketPairRangeReverse = (parameter) => {
  const end = parameter.lastIndexOf("}");
  if (end === -1)
    return [-1, 0];
  let start = end - 1, deep = 1;
  for (;start >= 0; start--) {
    const char = parameter.charCodeAt(start);
    if (char === 125 ? deep++ : char === 123 && deep--, deep === 0)
      break;
  }
  return deep !== 0 ? [-1, 0] : [start, end + 1];
};
var removeColonAlias = (parameter) => {
  for (;; ) {
    const start = parameter.indexOf(":");
    if (start === -1)
      break;
    let end = parameter.indexOf(",", start);
    end === -1 && (end = parameter.indexOf("}", start) - 1), end === -2 && (end = parameter.length), parameter = parameter.slice(0, start) + parameter.slice(end);
  }
  return parameter;
};
var retrieveRootparameters = (parameter) => {
  let hasParenthesis = false;
  parameter.charCodeAt(0) === 40 && (parameter = parameter.slice(1, -1)), parameter.charCodeAt(0) === 123 && (hasParenthesis = true, parameter = parameter.slice(1, -1)), parameter = parameter.replace(/( |\t|\n)/g, "").trim();
  let parameters = [];
  for (;; ) {
    let [start, end] = bracketPairRange(parameter);
    if (start === -1)
      break;
    parameters.push(parameter.slice(0, start - 1)), parameter.charCodeAt(end) === 44 && end++, parameter = parameter.slice(end);
  }
  parameter = removeColonAlias(parameter), parameter && (parameters = parameters.concat(parameter.split(",")));
  const parameterMap = /* @__PURE__ */ Object.create(null);
  for (const p of parameters) {
    if (p.indexOf(",") === -1) {
      parameterMap[p] = true;
      continue;
    }
    for (const q of p.split(","))
      parameterMap[q.trim()] = true;
  }
  return {
    hasParenthesis,
    parameters: parameterMap
  };
};
var findParameterReference = (parameter, inference) => {
  const { parameters, hasParenthesis } = retrieveRootparameters(parameter);
  return parameters.query && (inference.query = true), parameters.headers && (inference.headers = true), parameters.body && (inference.body = true), parameters.cookie && (inference.cookie = true), parameters.set && (inference.set = true), parameters.server && (inference.server = true), parameters.route && (inference.route = true), parameters.url && (inference.url = true), parameters.path && (inference.path = true), hasParenthesis ? `{ ${Object.keys(parameters).join(", ")} }` : Object.keys(parameters).join(", ");
};
var findEndIndex = (type, content, index) => {
  const regex = new RegExp(`${type.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\n\\t,; ]`);
  index !== undefined && (regex.lastIndex = index);
  const match = regex.exec(content);
  return match ? match.index : -1;
};
var findAlias = (type, body, depth = 0) => {
  if (depth > 5)
    return [];
  const aliases = [];
  let content = body;
  for (;; ) {
    let index = findEndIndex(" = " + type, content);
    if (index === -1 && (index = findEndIndex("=" + type, content)), index === -1) {
      let lastIndex = content.indexOf(" = " + type);
      if (lastIndex === -1 && (lastIndex = content.indexOf("=" + type)), lastIndex + 3 + type.length !== content.length)
        break;
      index = lastIndex;
    }
    const part = content.slice(0, index), lastPart = part.lastIndexOf(" ");
    let variable = part.slice(lastPart !== -1 ? lastPart + 1 : -1);
    if (variable === "}") {
      const [start, end] = bracketPairRangeReverse(part);
      aliases.push(removeColonAlias(content.slice(start, end))), content = content.slice(index + 3 + type.length);
      continue;
    }
    for (;variable.charCodeAt(0) === 44; )
      variable = variable.slice(1);
    for (;variable.charCodeAt(0) === 9; )
      variable = variable.slice(1);
    variable.includes("(") || aliases.push(variable), content = content.slice(index + 3 + type.length);
  }
  for (const alias of aliases) {
    if (alias.charCodeAt(0) === 123)
      continue;
    const deepAlias = findAlias(alias, body);
    deepAlias.length > 0 && aliases.push(...deepAlias);
  }
  return aliases;
};
var extractMainParameter = (parameter) => {
  if (!parameter)
    return;
  if (parameter.charCodeAt(0) !== 123)
    return parameter;
  if (parameter = parameter.slice(2, -2), !parameter.includes(","))
    return parameter.indexOf("...") !== -1 ? parameter.slice(parameter.indexOf("...") + 3) : undefined;
  const spreadIndex = parameter.indexOf("...");
  if (spreadIndex !== -1)
    return parameter.slice(spreadIndex + 3).trimEnd();
};
var inferBodyReference = (code, aliases, inference) => {
  const access = (type, alias) => new RegExp(`${alias}\\.(${type})|${alias}\\["${type}"\\]|${alias}\\['${type}'\\]`).test(code);
  for (const alias of aliases)
    if (alias) {
      if (alias.charCodeAt(0) === 123) {
        const parameters = retrieveRootparameters(alias).parameters;
        parameters.query && (inference.query = true), parameters.headers && (inference.headers = true), parameters.body && (inference.body = true), parameters.cookie && (inference.cookie = true), parameters.set && (inference.set = true), parameters.server && (inference.server = true), parameters.url && (inference.url = true), parameters.route && (inference.route = true), parameters.path && (inference.path = true);
        continue;
      }
      if (!inference.query && (access("query", alias) || code.includes("return " + alias) || code.includes("return " + alias + ".query")) && (inference.query = true), !inference.headers && access("headers", alias) && (inference.headers = true), !inference.body && access("body", alias) && (inference.body = true), !inference.cookie && access("cookie", alias) && (inference.cookie = true), !inference.set && access("set", alias) && (inference.set = true), !inference.server && access("server", alias) && (inference.server = true), !inference.route && access("route", alias) && (inference.route = true), !inference.url && access("url", alias) && (inference.url = true), !inference.path && access("path", alias) && (inference.path = true), inference.query && inference.headers && inference.body && inference.cookie && inference.set && inference.server && inference.route && inference.url && inference.path)
        break;
    }
  return aliases;
};
var isContextPassToFunction = (context, body, inference) => {
  try {
    const captureFunction = new RegExp(`\\w\\((?:.*?)?${context}(?:.*?)?\\)`, "gs"), exactParameter = new RegExp(`${context}(,|\\))`, "gs"), length = body.length;
    let fn;
    for (fn = captureFunction.exec(body) + "";captureFunction.lastIndex !== 0 && captureFunction.lastIndex < length + (fn ? fn.length : 0); ) {
      if (fn && exactParameter.test(fn))
        return inference.query = true, inference.headers = true, inference.body = true, inference.cookie = true, inference.set = true, inference.server = true, inference.url = true, inference.route = true, inference.path = true, true;
      fn = captureFunction.exec(body) + "";
    }
    const nextChar = body.charCodeAt(captureFunction.lastIndex);
    return nextChar === 41 || nextChar === 44 ? (inference.query = true, inference.headers = true, inference.body = true, inference.cookie = true, inference.set = true, inference.server = true, inference.url = true, inference.route = true, inference.path = true, true) : false;
  } catch {
    return console.log("[Sucrose] warning: unexpected isContextPassToFunction error, you may continue development as usual but please report the following to maintainers:"), console.log("--- body ---"), console.log(body), console.log("--- context ---"), console.log(context), true;
  }
};
var pendingGC;
var caches2 = {};
var clearSucroseCache = (delay) => {
  delay === null || isCloudflareWorker() || (delay === undefined && (delay = 4 * 60 * 1000 + 55 * 1000), pendingGC && clearTimeout(pendingGC), pendingGC = setTimeout(() => {
    caches2 = {}, pendingGC = undefined, isBun && Bun.gc(false);
  }, delay), pendingGC.unref?.());
};
var mergeInference = (a, b) => ({
  body: a.body || b.body,
  cookie: a.cookie || b.cookie,
  headers: a.headers || b.headers,
  query: a.query || b.query,
  set: a.set || b.set,
  server: a.server || b.server,
  url: a.url || b.url,
  route: a.route || b.route,
  path: a.path || b.path
});
var sucrose = (lifeCycle, inference = {
  query: false,
  headers: false,
  body: false,
  cookie: false,
  set: false,
  server: false,
  url: false,
  route: false,
  path: false
}, settings = {}) => {
  const events = [];
  lifeCycle.request?.length && events.push(...lifeCycle.request), lifeCycle.beforeHandle?.length && events.push(...lifeCycle.beforeHandle), lifeCycle.parse?.length && events.push(...lifeCycle.parse), lifeCycle.error?.length && events.push(...lifeCycle.error), lifeCycle.transform?.length && events.push(...lifeCycle.transform), lifeCycle.afterHandle?.length && events.push(...lifeCycle.afterHandle), lifeCycle.mapResponse?.length && events.push(...lifeCycle.mapResponse), lifeCycle.afterResponse?.length && events.push(...lifeCycle.afterResponse), lifeCycle.handler && typeof lifeCycle.handler == "function" && events.push(lifeCycle.handler);
  for (let i = 0;i < events.length; i++) {
    const e = events[i];
    if (!e)
      continue;
    const event = typeof e == "object" ? e.fn : e;
    if (typeof event != "function")
      continue;
    const content = event.toString(), key = checksum(content), cachedInference = caches2[key];
    if (cachedInference) {
      inference = mergeInference(inference, cachedInference);
      continue;
    }
    clearSucroseCache(settings.gcTime);
    const fnInference = {
      query: false,
      headers: false,
      body: false,
      cookie: false,
      set: false,
      server: false,
      url: false,
      route: false,
      path: false
    }, [parameter, body] = separateFunction(content), rootParameters = findParameterReference(parameter, fnInference), mainParameter = extractMainParameter(rootParameters);
    if (mainParameter) {
      const aliases = findAlias(mainParameter, body.slice(1, -1));
      aliases.splice(0, -1, mainParameter);
      let code = body;
      code.charCodeAt(0) === 123 && code.charCodeAt(body.length - 1) === 125 && (code = code.slice(1, -1).trim()), isContextPassToFunction(mainParameter, code, fnInference) || inferBodyReference(code, aliases, fnInference), !fnInference.query && code.includes("return " + mainParameter + ".query") && (fnInference.query = true);
    }
    if (caches2[key] || (caches2[key] = fnInference), inference = mergeInference(inference, fnInference), inference.query && inference.headers && inference.body && inference.cookie && inference.set && inference.server && inference.url && inference.route && inference.path)
      break;
  }
  return inference;
};

// node_modules/elysia/dist/cookies.mjs
var import_cookie = __toESM(require_dist(), 1);
var import_fast_decode_uri_component = __toESM(require_fast_decode_uri_component(), 1);
var hashString = (str) => {
  let hash = 2166136261;
  const len = str.length;
  for (let i = 0;i < len; i++)
    hash ^= str.charCodeAt(i), hash = Math.imul(hash, 16777619);
  return hash >>> 0;
};

class Cookie {
  constructor(name, jar, initial = /* @__PURE__ */ Object.create(null)) {
    this.name = name;
    this.jar = jar;
    this.initial = initial;
  }
  get cookie() {
    return this.jar[this.name] ?? this.initial;
  }
  set cookie(jar) {
    this.name in this.jar || (this.jar[this.name] = this.initial), this.jar[this.name] = jar, this.valueHash = undefined;
  }
  get setCookie() {
    return this.name in this.jar || (this.jar[this.name] = this.initial), this.jar[this.name];
  }
  set setCookie(jar) {
    this.cookie = jar;
  }
  get value() {
    return this.cookie.value;
  }
  set value(value) {
    const current = this.cookie.value;
    if (current !== value) {
      if (typeof current == "object" && current !== null && typeof value == "object" && value !== null)
        try {
          const valueStr = JSON.stringify(value), newHash = hashString(valueStr);
          if (this.valueHash !== undefined && this.valueHash !== newHash)
            this.valueHash = newHash;
          else {
            if (JSON.stringify(current) === valueStr) {
              this.valueHash = newHash;
              return;
            }
            this.valueHash = newHash;
          }
        } catch {}
      this.name in this.jar || (this.jar[this.name] = { ...this.initial }), this.jar[this.name].value = value;
    }
  }
  get expires() {
    return this.cookie.expires;
  }
  set expires(expires) {
    this.setCookie.expires = expires;
  }
  get maxAge() {
    return this.cookie.maxAge;
  }
  set maxAge(maxAge) {
    this.setCookie.maxAge = maxAge;
  }
  get domain() {
    return this.cookie.domain;
  }
  set domain(domain) {
    this.setCookie.domain = domain;
  }
  get path() {
    return this.cookie.path;
  }
  set path(path) {
    this.setCookie.path = path;
  }
  get secure() {
    return this.cookie.secure;
  }
  set secure(secure) {
    this.setCookie.secure = secure;
  }
  get httpOnly() {
    return this.cookie.httpOnly;
  }
  set httpOnly(httpOnly) {
    this.setCookie.httpOnly = httpOnly;
  }
  get sameSite() {
    return this.cookie.sameSite;
  }
  set sameSite(sameSite) {
    this.setCookie.sameSite = sameSite;
  }
  get priority() {
    return this.cookie.priority;
  }
  set priority(priority) {
    this.setCookie.priority = priority;
  }
  get partitioned() {
    return this.cookie.partitioned;
  }
  set partitioned(partitioned) {
    this.setCookie.partitioned = partitioned;
  }
  get secrets() {
    return this.cookie.secrets;
  }
  set secrets(secrets) {
    this.setCookie.secrets = secrets;
  }
  update(config) {
    return this.setCookie = Object.assign(this.cookie, typeof config == "function" ? config(this.cookie) : config), this;
  }
  set(config) {
    return this.setCookie = Object.assign({
      ...this.initial,
      value: this.value
    }, typeof config == "function" ? config(this.cookie) : config), this;
  }
  remove() {
    if (this.value !== undefined)
      return this.set({
        expires: /* @__PURE__ */ new Date(0),
        maxAge: 0,
        value: ""
      }), this;
  }
  toString() {
    return typeof this.value == "object" ? JSON.stringify(this.value) : this.value?.toString() ?? "";
  }
}
var createCookieJar = (set, store, initial) => (set.cookie || (set.cookie = /* @__PURE__ */ Object.create(null)), new Proxy(store, {
  get(_, key) {
    return key in store ? new Cookie(key, set.cookie, Object.assign({}, initial ?? {}, store[key])) : new Cookie(key, set.cookie, Object.assign({}, initial));
  }
}));
var parseCookie = async (set, cookieString, {
  secrets,
  sign,
  ...initial
} = /* @__PURE__ */ Object.create(null)) => {
  if (!cookieString)
    return createCookieJar(set, /* @__PURE__ */ Object.create(null), initial);
  const isStringKey = typeof secrets == "string";
  sign && sign !== true && !Array.isArray(sign) && (sign = [sign]);
  const jar = /* @__PURE__ */ Object.create(null), cookies = import_cookie.parse(cookieString);
  for (const [name, v] of Object.entries(cookies)) {
    if (v === undefined || name === "__proto__" || name === "constructor" || name === "prototype")
      continue;
    let value = import_fast_decode_uri_component.default(v);
    if (sign === true || sign?.includes(name)) {
      if (!secrets)
        throw new Error("No secret is provided to cookie plugin");
      if (isStringKey) {
        if (typeof value != "string")
          throw new InvalidCookieSignature(name);
        const temp = await unsignCookie(value, secrets);
        if (temp === false)
          throw new InvalidCookieSignature(name);
        value = temp;
      } else {
        let decoded = false;
        for (let i = 0;i < secrets.length; i++) {
          if (typeof value != "string")
            throw new InvalidCookieSignature(name);
          const temp = await unsignCookie(value, secrets[i]);
          if (temp !== false) {
            decoded = true, value = temp;
            break;
          }
        }
        if (!decoded)
          throw new InvalidCookieSignature(name);
      }
    }
    if (value) {
      const starts = value.charCodeAt(0), ends = value.charCodeAt(value.length - 1);
      if (starts === 123 && ends === 125 || starts === 91 && ends === 93)
        try {
          value = JSON.parse(value);
        } catch {}
    }
    jar[name] = /* @__PURE__ */ Object.create(null), jar[name].value = value;
  }
  return createCookieJar(set, jar, initial);
};
var serializeCookie = (cookies) => {
  if (!cookies || !isNotEmpty(cookies))
    return;
  const set = [];
  for (const [key, property] of Object.entries(cookies)) {
    if (!key || !property)
      continue;
    const value = property.value;
    value != null && set.push(import_cookie.serialize(key, typeof value == "object" ? JSON.stringify(value) : value + "", property));
  }
  if (set.length !== 0)
    return set.length === 1 ? set[0] : set;
};

// node_modules/elysia/dist/adapter/utils.mjs
var handleFile = (response, set, request) => {
  if (!isBun && response instanceof Promise)
    return response.then((res) => handleFile(res, set, request));
  const size = response.size, rangeHeader = request?.headers.get("range");
  if (rangeHeader) {
    const match = /bytes=(\d*)-(\d*)/.exec(rangeHeader);
    if (match) {
      if (!match[1] && !match[2])
        return new Response(null, {
          status: 416,
          headers: mergeHeaders(new Headers({ "content-range": `bytes */${size}` }), set?.headers ?? {})
        });
      let start, end;
      if (!match[1] && match[2]) {
        const suffix = parseInt(match[2]);
        start = Math.max(0, size - suffix), end = size - 1;
      } else
        start = match[1] ? parseInt(match[1]) : 0, end = match[2] ? Math.min(parseInt(match[2]), size - 1) : size - 1;
      if (start >= size || start > end)
        return new Response(null, {
          status: 416,
          headers: mergeHeaders(new Headers({ "content-range": `bytes */${size}` }), set?.headers ?? {})
        });
      const contentLength = end - start + 1, rangeHeaders = new Headers({
        "accept-ranges": "bytes",
        "content-range": `bytes ${start}-${end}/${size}`,
        "content-length": String(contentLength)
      });
      return new Response(response.slice(start, end + 1, response.type), {
        status: 206,
        headers: mergeHeaders(rangeHeaders, set?.headers ?? {})
      });
    }
  }
  const immutable = set && (set.status === 206 || set.status === 304 || set.status === 412 || set.status === 416), defaultHeader = immutable ? {} : {
    "accept-ranges": "bytes",
    "content-range": size ? `bytes 0-${size - 1}/${size}` : undefined
  };
  if (!set && !size)
    return new Response(response);
  if (!set)
    return new Response(response, {
      headers: defaultHeader
    });
  if (set.headers instanceof Headers) {
    for (const key of Object.keys(defaultHeader))
      key in set.headers && set.headers.append(key, defaultHeader[key]);
    return immutable && (set.headers.delete("content-length"), set.headers.delete("accept-ranges")), new Response(response, set);
  }
  return isNotEmpty(set.headers) ? new Response(response, {
    status: set.status,
    headers: Object.assign(defaultHeader, set.headers)
  }) : new Response(response, {
    status: set.status,
    headers: defaultHeader
  });
};
var parseSetCookies = (headers, setCookie) => {
  if (!headers)
    return headers;
  headers.delete("set-cookie");
  for (let i = 0;i < setCookie.length; i++) {
    const index = setCookie[i].indexOf("=");
    headers.append("set-cookie", `${setCookie[i].slice(0, index)}=${setCookie[i].slice(index + 1) || ""}`);
  }
  return headers;
};
var responseToSetHeaders = (response, set) => {
  if (set?.headers) {
    if (response)
      if (hasHeaderShorthand)
        Object.assign(set.headers, response.headers.toJSON());
      else
        for (const [key, value] of response.headers.entries())
          key in set.headers && (set.headers[key] = value);
    return set.status === 200 && (set.status = response.status), set.headers["content-encoding"] && delete set.headers["content-encoding"], set;
  }
  if (!response)
    return {
      headers: {},
      status: set?.status ?? 200
    };
  if (hasHeaderShorthand)
    return set = {
      headers: response.headers.toJSON(),
      status: set?.status ?? 200
    }, set.headers["content-encoding"] && delete set.headers["content-encoding"], set;
  set = {
    headers: {},
    status: set?.status ?? 200
  };
  for (const [key, value] of response.headers.entries())
    key !== "content-encoding" && key in set.headers && (set.headers[key] = value);
  return set;
};
var enqueueBinaryChunk = (controller, chunk) => chunk instanceof Blob ? chunk.arrayBuffer().then((buffer) => (controller.enqueue(new Uint8Array(buffer)), true)) : chunk instanceof Uint8Array ? (controller.enqueue(chunk), true) : chunk instanceof ArrayBuffer ? (controller.enqueue(new Uint8Array(chunk)), true) : ArrayBuffer.isView(chunk) ? (controller.enqueue(new Uint8Array(chunk.buffer, chunk.byteOffset, chunk.byteLength)), true) : false;
var createStreamHandler = ({ mapResponse, mapCompactResponse }) => async (generator, set, request, skipFormat) => {
  let init = generator.next?.();
  if (set && handleSet(set), init instanceof Promise && (init = await init), init?.value instanceof ReadableStream)
    generator = init.value;
  else if (init && (typeof init?.done > "u" || init?.done))
    return set ? mapResponse(init.value, set, request) : mapCompactResponse(init.value, request);
  const isSSE = !skipFormat && (init?.value?.sse ?? generator?.sse ?? set?.headers["content-type"]?.startsWith("text/event-stream")), format = isSSE ? (data) => `data: ${data}

` : (data) => data, contentType = isSSE ? "text/event-stream" : init?.value && typeof init?.value == "object" ? "application/json" : "text/plain";
  set?.headers ? (set.headers["transfer-encoding"] || (set.headers["transfer-encoding"] = "chunked"), set.headers["content-type"] || (set.headers["content-type"] = contentType), set.headers["cache-control"] || (set.headers["cache-control"] = "no-cache")) : set = {
    status: 200,
    headers: {
      "content-type": contentType,
      "transfer-encoding": "chunked",
      "cache-control": "no-cache",
      connection: "keep-alive"
    }
  };
  const iterator = typeof generator.next == "function" ? generator : generator[Symbol.asyncIterator]();
  let end = false;
  return new Response(new ReadableStream({
    start(controller) {
      if (request?.signal?.addEventListener("abort", () => {
        end = true, iterator.return?.();
        try {
          controller.close();
        } catch {}
      }), !(!init || init.value instanceof ReadableStream || init.value === undefined || init.value === null))
        if (init.value.toSSE)
          controller.enqueue(init.value.toSSE());
        else {
          if (enqueueBinaryChunk(controller, init.value))
            return;
          if (typeof init.value == "object")
            try {
              controller.enqueue(format(JSON.stringify(init.value)));
            } catch {
              controller.enqueue(format(init.value.toString()));
            }
          else
            controller.enqueue(format(init.value.toString()));
        }
    },
    async pull(controller) {
      if (end) {
        try {
          controller.close();
        } catch {}
        return;
      }
      try {
        const { value: chunk, done } = await iterator.next();
        if (done || end) {
          try {
            controller.close();
          } catch {}
          return;
        }
        if (chunk == null)
          return;
        if (chunk.toSSE)
          controller.enqueue(chunk.toSSE());
        else {
          if (enqueueBinaryChunk(controller, chunk))
            return;
          if (typeof chunk == "object")
            try {
              controller.enqueue(format(JSON.stringify(chunk)));
            } catch {
              controller.enqueue(format(chunk.toString()));
            }
          else
            controller.enqueue(format(chunk.toString()));
        }
      } catch (error) {
        console.warn(error);
        try {
          controller.close();
        } catch {}
      }
    },
    cancel() {
      end = true, iterator.return?.();
    }
  }), set);
};
async function* streamResponse(response) {
  const body = response.body;
  if (!body)
    return;
  const reader = body.getReader(), decoder = new TextDecoder;
  try {
    for (;; ) {
      const { done, value } = await reader.read();
      if (done)
        break;
      typeof value == "string" ? yield value : yield decoder.decode(value);
    }
  } finally {
    reader.releaseLock();
  }
}
var handleSet = (set) => {
  if (typeof set.status == "string" && (set.status = StatusMap[set.status]), set.cookie && isNotEmpty(set.cookie)) {
    const cookie = serializeCookie(set.cookie);
    cookie && (set.headers["set-cookie"] = cookie);
  }
  set.headers["set-cookie"] && Array.isArray(set.headers["set-cookie"]) && (set.headers = parseSetCookies(new Headers(set.headers), set.headers["set-cookie"]));
};
function mergeHeaders(responseHeaders, setHeaders) {
  const headers = new Headers(responseHeaders);
  if (setHeaders instanceof Headers)
    for (const key of setHeaders.keys())
      if (key === "set-cookie") {
        if (headers.has("set-cookie"))
          continue;
        for (const cookie of setHeaders.getSetCookie())
          headers.append("set-cookie", cookie);
      } else
        responseHeaders.has(key) || headers.set(key, setHeaders?.get(key) ?? "");
  else
    for (const key in setHeaders)
      key === "set-cookie" ? headers.append(key, setHeaders[key]) : responseHeaders.has(key) || headers.set(key, setHeaders[key]);
  return headers;
}
function mergeStatus(responseStatus, setStatus) {
  return typeof setStatus == "string" && (setStatus = StatusMap[setStatus]), responseStatus === 200 ? setStatus : responseStatus;
}
var createResponseHandler = (handler) => {
  const handleStream = createStreamHandler(handler);
  return (response, set, request) => {
    const newResponse = new Response(response.body, {
      headers: mergeHeaders(response.headers, set.headers),
      status: mergeStatus(response.status, set.status)
    });
    return !newResponse.headers.has("content-length") && newResponse.headers.get("transfer-encoding") === "chunked" ? handleStream(streamResponse(newResponse), responseToSetHeaders(newResponse, set), request, true) : newResponse;
  };
};
async function tee(source, branches = 2) {
  const buffer = [];
  let done = false, waiting = [];
  (async () => {
    for await (const value of source)
      buffer.push(value), waiting.forEach((w) => w.resolve()), waiting = [];
    done = true, waiting.forEach((w) => w.resolve());
  })();
  async function* makeIterator() {
    let i = 0;
    for (;; )
      if (i < buffer.length)
        yield buffer[i++];
      else {
        if (done)
          return;
        await new Promise((resolve) => waiting.push({ resolve }));
      }
  }
  return Array.from({ length: branches }, makeIterator);
}

// node_modules/elysia/dist/adapter/web-standard/handler.mjs
var handleElysiaFile = (file, set = {
  headers: {}
}, request) => {
  const path = file.path, contentType = mime[path.slice(path.lastIndexOf(".") + 1)];
  return contentType && (set.headers["content-type"] = contentType), file.stats && set.status !== 206 && set.status !== 304 && set.status !== 412 && set.status !== 416 ? file.stats.then((stat) => {
    const size = stat.size;
    return size !== undefined && (set.headers["content-range"] = `bytes 0-${size - 1}/${size}`, set.headers["content-length"] = size), handleFile(file.value, set, request);
  }) : handleFile(file.value, set, request);
};
var mapResponse = (response, set, request) => {
  if (isNotEmpty(set.headers) || set.status !== 200 || set.cookie)
    switch (handleSet(set), response?.constructor?.name) {
      case "String":
        return set.headers["content-type"] || (set.headers["content-type"] = "text/plain"), new Response(response, set);
      case "Array":
      case "Object":
        return set.headers["content-type"] || (set.headers["content-type"] = "application/json"), new Response(JSON.stringify(response), set);
      case "ElysiaFile":
        return handleElysiaFile(response, set, request);
      case "File":
        return handleFile(response, set, request);
      case "Blob":
        return handleFile(response, set, request);
      case "ElysiaCustomStatusResponse":
        return set.status = response.code, mapResponse(response.response, set, request);
      case undefined:
        return response ? new Response(JSON.stringify(response), set) : new Response("", set);
      case "Response":
        return handleResponse(response, set, request);
      case "Error":
        return errorToResponse(response, set);
      case "Promise":
        return response.then((x) => mapResponse(x, set, request));
      case "Function":
        return mapResponse(response(), set, request);
      case "Number":
      case "Boolean":
        return new Response(response.toString(), set);
      case "Cookie":
        return response instanceof Cookie ? new Response(response.value, set) : new Response(response?.toString(), set);
      case "FormData":
        return new Response(response, set);
      default:
        if (response instanceof Response)
          return handleResponse(response, set, request);
        if (response instanceof Promise)
          return response.then((x) => mapResponse(x, set));
        if (response instanceof Error)
          return errorToResponse(response, set);
        if (response instanceof ElysiaCustomStatusResponse)
          return set.status = response.code, mapResponse(response.response, set, request);
        if (typeof response?.next == "function" || response instanceof ReadableStream)
          return handleStream(response, set, request);
        if (typeof response?.then == "function")
          return response.then((x) => mapResponse(x, set));
        if (Array.isArray(response))
          return new Response(JSON.stringify(response), {
            headers: {
              "Content-Type": "application/json"
            }
          });
        if (typeof response?.toResponse == "function")
          return mapResponse(response.toResponse(), set);
        if ("charCodeAt" in response) {
          const code = response.charCodeAt(0);
          if (code === 123 || code === 91)
            return set.headers["Content-Type"] || (set.headers["Content-Type"] = "application/json"), new Response(JSON.stringify(response), set);
        }
        return new Response(response, set);
    }
  return typeof response?.next == "function" || response instanceof ReadableStream ? handleStream(response, set, request) : mapCompactResponse(response, request);
};
var mapEarlyResponse = (response, set, request) => {
  if (response != null)
    if (isNotEmpty(set.headers) || set.status !== 200 || set.cookie)
      switch (handleSet(set), response?.constructor?.name) {
        case "String":
          return set.headers["content-type"] || (set.headers["content-type"] = "text/plain"), new Response(response, set);
        case "Array":
        case "Object":
          return set.headers["content-type"] || (set.headers["content-type"] = "application/json"), new Response(JSON.stringify(response), set);
        case "ElysiaFile":
          return handleElysiaFile(response, set, request);
        case "File":
          return handleFile(response, set, request);
        case "Blob":
          return handleFile(response, set, request);
        case "ElysiaCustomStatusResponse":
          return set.status = response.code, mapEarlyResponse(response.response, set, request);
        case undefined:
          return response ? new Response(JSON.stringify(response), set) : undefined;
        case "Response":
          return handleResponse(response, set, request);
        case "Promise":
          return response.then((x) => mapEarlyResponse(x, set));
        case "Error":
          return errorToResponse(response, set);
        case "Function":
          return mapEarlyResponse(response(), set);
        case "Number":
        case "Boolean":
          return new Response(response.toString(), set);
        case "FormData":
          return new Response(response);
        case "Cookie":
          return response instanceof Cookie ? new Response(response.value, set) : new Response(response?.toString(), set);
        default:
          if (response instanceof Response)
            return handleResponse(response, set, request);
          if (response instanceof Promise)
            return response.then((x) => mapEarlyResponse(x, set));
          if (response instanceof Error)
            return errorToResponse(response, set);
          if (response instanceof ElysiaCustomStatusResponse)
            return set.status = response.code, mapEarlyResponse(response.response, set, request);
          if (typeof response?.next == "function" || response instanceof ReadableStream)
            return handleStream(response, set, request);
          if (typeof response?.then == "function")
            return response.then((x) => mapEarlyResponse(x, set));
          if (typeof response?.toResponse == "function")
            return mapEarlyResponse(response.toResponse(), set);
          if (Array.isArray(response))
            return new Response(JSON.stringify(response), {
              headers: {
                "Content-Type": "application/json"
              }
            });
          if ("charCodeAt" in response) {
            const code = response.charCodeAt(0);
            if (code === 123 || code === 91)
              return set.headers["Content-Type"] || (set.headers["Content-Type"] = "application/json"), new Response(JSON.stringify(response), set);
          }
          return new Response(response, set);
      }
    else
      switch (response?.constructor?.name) {
        case "String":
          return set.headers["content-type"] || (set.headers["content-type"] = "text/plain"), new Response(response);
        case "Array":
        case "Object":
          return set.headers["content-type"] || (set.headers["content-type"] = "application/json"), new Response(JSON.stringify(response), set);
        case "ElysiaFile":
          return handleElysiaFile(response, set, request);
        case "File":
          return handleFile(response, set, request);
        case "Blob":
          return handleFile(response, set, request);
        case "ElysiaCustomStatusResponse":
          return set.status = response.code, mapEarlyResponse(response.response, set, request);
        case undefined:
          return response ? new Response(JSON.stringify(response), {
            headers: {
              "content-type": "application/json"
            }
          }) : new Response("");
        case "Response":
          return response;
        case "Promise":
          return response.then((x) => {
            const r = mapEarlyResponse(x, set);
            if (r !== undefined)
              return r;
          });
        case "Error":
          return errorToResponse(response, set);
        case "Function":
          return mapCompactResponse(response(), request);
        case "Number":
        case "Boolean":
          return new Response(response.toString());
        case "Cookie":
          return response instanceof Cookie ? new Response(response.value, set) : new Response(response?.toString(), set);
        case "FormData":
          return new Response(response);
        default:
          if (response instanceof Response)
            return response;
          if (response instanceof Promise)
            return response.then((x) => mapEarlyResponse(x, set));
          if (response instanceof Error)
            return errorToResponse(response, set);
          if (response instanceof ElysiaCustomStatusResponse)
            return set.status = response.code, mapEarlyResponse(response.response, set, request);
          if (typeof response?.next == "function" || response instanceof ReadableStream)
            return handleStream(response, set, request);
          if (typeof response?.then == "function")
            return response.then((x) => mapEarlyResponse(x, set));
          if (typeof response?.toResponse == "function")
            return mapEarlyResponse(response.toResponse(), set);
          if (Array.isArray(response))
            return new Response(JSON.stringify(response), {
              headers: {
                "Content-Type": "application/json"
              }
            });
          if ("charCodeAt" in response) {
            const code = response.charCodeAt(0);
            if (code === 123 || code === 91)
              return set.headers["Content-Type"] || (set.headers["Content-Type"] = "application/json"), new Response(JSON.stringify(response), set);
          }
          return new Response(response);
      }
};
var mapCompactResponse = (response, request) => {
  switch (response?.constructor?.name) {
    case "String":
      return new Response(response, {
        headers: {
          "Content-Type": "text/plain"
        }
      });
    case "Object":
    case "Array":
      return new Response(JSON.stringify(response), {
        headers: {
          "Content-Type": "application/json"
        }
      });
    case "ElysiaFile":
      return handleElysiaFile(response, undefined, request);
    case "File":
      return handleFile(response, undefined, request);
    case "Blob":
      return handleFile(response, undefined, request);
    case "ElysiaCustomStatusResponse":
      return mapResponse(response.response, {
        status: response.code,
        headers: {}
      });
    case undefined:
      return response ? new Response(JSON.stringify(response), {
        headers: {
          "content-type": "application/json"
        }
      }) : new Response("");
    case "Response":
      return response;
    case "Error":
      return errorToResponse(response);
    case "Promise":
      return response.then((x) => mapCompactResponse(x, request));
    case "Function":
      return mapCompactResponse(response(), request);
    case "Number":
    case "Boolean":
      return new Response(response.toString());
    case "FormData":
      return new Response(response);
    default:
      if (response instanceof Response)
        return response;
      if (response instanceof Promise)
        return response.then((x) => mapCompactResponse(x, request));
      if (response instanceof Error)
        return errorToResponse(response);
      if (response instanceof ElysiaCustomStatusResponse)
        return mapResponse(response.response, {
          status: response.code,
          headers: {}
        });
      if (typeof response?.next == "function" || response instanceof ReadableStream)
        return handleStream(response, undefined, request);
      if (typeof response?.then == "function")
        return response.then((x) => mapCompactResponse(x, request));
      if (typeof response?.toResponse == "function")
        return mapCompactResponse(response.toResponse());
      if (Array.isArray(response))
        return new Response(JSON.stringify(response), {
          headers: {
            "Content-Type": "application/json"
          }
        });
      if ("charCodeAt" in response) {
        const code = response.charCodeAt(0);
        if (code === 123 || code === 91)
          return new Response(JSON.stringify(response), {
            headers: {
              "Content-Type": "application/json"
            }
          });
      }
      return new Response(response);
  }
};
var errorToResponse = (error, set) => {
  if (typeof error?.toResponse == "function") {
    const raw = error.toResponse(), targetSet = set ?? { headers: {}, status: 200, redirect: "" }, apply = (resolved) => (resolved instanceof Response && (targetSet.status = resolved.status), mapResponse(resolved, targetSet));
    return typeof raw?.then == "function" ? raw.then(apply) : apply(raw);
  }
  return new Response(JSON.stringify({
    name: error?.name,
    message: error?.message,
    cause: error?.cause
  }), {
    status: set?.status !== 200 ? set?.status ?? 500 : 500,
    headers: set?.headers
  });
};
var createStaticHandler = (handle, hooks, setHeaders = {}) => {
  if (typeof handle == "function")
    return;
  const response = mapResponse(handle, {
    headers: setHeaders
  });
  if (!hooks.parse?.length && !hooks.transform?.length && !hooks.beforeHandle?.length && !hooks.afterHandle?.length)
    return () => response.clone();
};
var handleResponse = createResponseHandler({
  mapResponse,
  mapCompactResponse
});
var handleStream = createStreamHandler({
  mapResponse,
  mapCompactResponse
});

// node_modules/elysia/dist/adapter/web-standard/index.mjs
var WebStandardAdapter = {
  name: "web-standard",
  isWebStandard: true,
  handler: {
    mapResponse,
    mapEarlyResponse,
    mapCompactResponse,
    createStaticHandler
  },
  composeHandler: {
    mapResponseContext: "c.request",
    preferWebstandardHeaders: true,
    headers: `c.headers={}
for(const [k,v] of c.request.headers.entries())c.headers[k]=v
`,
    parser: {
      json(isOptional) {
        return isOptional ? `try{c.body=await c.request.json()}catch{}
` : `c.body=await c.request.json()
`;
      },
      text() {
        return `c.body=await c.request.text()
`;
      },
      urlencoded() {
        return `c.body=parseQuery(await c.request.text())
`;
      },
      arrayBuffer() {
        return `c.body=await c.request.arrayBuffer()
`;
      },
      formData(isOptional) {
        let fnLiteral = `
c.body={}
`;
        return isOptional ? fnLiteral += "let form;try{form=await c.request.formData()}catch{}" : fnLiteral += `const form=await c.request.formData()
`, fnLiteral + `const dangerousKeys=new Set(['__proto__','constructor','prototype'])
const isDangerousKey=(k)=>{if(dangerousKeys.has(k))return true;const m=k.match(/^(.+)\\[(\\d+)\\]$/);return m?dangerousKeys.has(m[1]):false}
const parseArrayKey=(k)=>{const m=k.match(/^(.+)\\[(\\d+)\\]$/);return m?{name:m[1],index:parseInt(m[2],10)}:null}
const grouped=new Map()
form.forEach((v,k)=>{const l=grouped.get(k);if(l)l.push(v);else grouped.set(k,[v])})
for(const [key,value] of grouped){if(c.body[key])continue
let finalValue
if(value.length===1){
const sv=value[0]
if(typeof sv==='string'&&(sv.charCodeAt(0)===123||sv.charCodeAt(0)===91)){
try{
const p=JSON.parse(sv)
if(p&&typeof p==='object')finalValue=p
}catch{}
}
if(finalValue===undefined)finalValue=sv
}else finalValue=value
if(Array.isArray(finalValue)){
const stringValue=finalValue.find((entry)=>typeof entry==='string')
const files=typeof File==='undefined'?[]:finalValue.filter((entry)=>entry instanceof File)
if(stringValue&&files.length&&stringValue.charCodeAt(0)===123){
try{
const parsed=JSON.parse(stringValue)
if(parsed&&typeof parsed==='object'&&!Array.isArray(parsed)){
if(!('file' in parsed)&&files.length===1)parsed.file=files[0]
else if(!('files' in parsed)&&files.length>1)parsed.files=files
finalValue=parsed
}
}catch{}
}
}
if(key.includes('.')||key.includes('[')){const keys=key.split('.')
const lastKey=keys.pop()
if(isDangerousKey(lastKey)||keys.some(isDangerousKey))continue
let current=c.body
for(const k of keys){const arrayInfo=parseArrayKey(k)
if(arrayInfo){if(!Array.isArray(current[arrayInfo.name]))current[arrayInfo.name]=[]
const existing=current[arrayInfo.name][arrayInfo.index]
const isFile=typeof File!=='undefined'&&existing instanceof File
if(!existing||typeof existing!=='object'||Array.isArray(existing)||isFile){
let parsed
if(typeof existing==='string'&&existing.charCodeAt(0)===123){
try{parsed=JSON.parse(existing)
if(!parsed||typeof parsed!=='object'||Array.isArray(parsed))parsed=undefined}catch{}
}
current[arrayInfo.name][arrayInfo.index]=parsed||{}
}
current=current[arrayInfo.name][arrayInfo.index]}else{if(!current[k]||typeof current[k]!=='object')current[k]={}
current=current[k]}}
const arrayInfo=parseArrayKey(lastKey)
if(arrayInfo){if(!Array.isArray(current[arrayInfo.name]))current[arrayInfo.name]=[]
current[arrayInfo.name][arrayInfo.index]=finalValue}else{current[lastKey]=finalValue}}else c.body[key]=finalValue}`;
      }
    }
  },
  async stop(app, closeActiveConnections) {
    if (!app.server)
      throw new Error("Elysia isn't running. Call `app.listen` to start the server.");
    if (app.server && (await app.server.stop(closeActiveConnections), app.server = null, app.event.stop?.length))
      for (let i = 0;i < app.event.stop.length; i++)
        app.event.stop[i].fn(app);
  },
  composeGeneralHandler: {
    parameters: "r",
    createContext(app) {
      let decoratorsLiteral = "", fnLiteral = "";
      const defaultHeaders = app.setHeaders;
      for (const key of Object.keys(app.decorator))
        decoratorsLiteral += `,'${key}':decorator['${key}']`;
      const standardHostname = app.config.handler?.standardHostname ?? true, hasTrace = !!app.event.trace?.length;
      return fnLiteral += `const u=r.url,s=u.indexOf('/',${standardHostname ? 11 : 7}),qi=u.indexOf('?',s+1),p=u.substring(s,qi===-1?undefined:qi)
`, hasTrace && (fnLiteral += `const id=randomId()
`), fnLiteral += "const c={request:r,store,qi,path:p,url:u,redirect,status,set:{headers:", fnLiteral += Object.keys(defaultHeaders ?? {}).length ? "Object.assign({},app.setHeaders)" : "Object.create(null)", fnLiteral += ",status:200}", app.inference.server && (fnLiteral += ",get server(){return app.getServer()}"), hasTrace && (fnLiteral += ",[ELYSIA_REQUEST_ID]:id"), fnLiteral += decoratorsLiteral, fnLiteral += `}
`, fnLiteral;
    },
    error404(hasEventHook, hasErrorHook, afterHandle = "") {
      let findDynamicRoute = "if(route===null){" + afterHandle + (hasErrorHook ? "" : "c.set.status=404") + `
return `;
      return hasErrorHook ? findDynamicRoute += `app.handleError(c,notFound,false,${this.parameters})` : findDynamicRoute += hasEventHook ? "c.response=c.responseValue=new Response(error404Message,{status:c.set.status===200?404:c.set.status,headers:c.set.headers})" : "c.response=c.responseValue=error404.clone()", findDynamicRoute += "}", {
        declare: hasErrorHook ? "" : `const error404Message=notFound.message.toString()
const error404=new Response(error404Message,{status:404})
`,
        code: findDynamicRoute
      };
    }
  },
  composeError: {
    mapResponseContext: "",
    validationError: "set.headers['content-type']='application/json';return mapResponse(error.message,set)",
    unknownError: "set.status=error.status??set.status??500;return mapResponse(error.message,set)"
  },
  listen() {
    return () => {
      throw new Error("WebStandard does not support listen, you might want to export default Elysia.fetch instead");
    };
  }
};

// node_modules/elysia/dist/adapter/bun/handler.mjs
var mapResponse2 = (response, set, request) => {
  if (isNotEmpty(set.headers) || set.status !== 200 || set.cookie)
    switch (handleSet(set), response?.constructor?.name) {
      case "String":
        return new Response(response, set);
      case "Array":
      case "Object":
        return Response.json(response, set);
      case "ElysiaFile":
        return handleFile(response.value, set, request);
      case "File":
        return handleFile(response, set, request);
      case "Blob":
        return handleFile(response, set, request);
      case "ElysiaCustomStatusResponse":
        return set.status = response.code, mapResponse2(response.response, set, request);
      case undefined:
        return response ? Response.json(response, set) : new Response("", set);
      case "Response":
        return handleResponse2(response, set, request);
      case "Error":
        return errorToResponse2(response, set);
      case "Promise":
        return response.then((x) => mapResponse2(x, set, request));
      case "Function":
        return mapResponse2(response(), set, request);
      case "Number":
      case "Boolean":
        return new Response(response.toString(), set);
      case "Cookie":
        return response instanceof Cookie ? new Response(response.value, set) : new Response(response?.toString(), set);
      case "FormData":
        return new Response(response, set);
      default:
        if (response instanceof Response)
          return handleResponse2(response, set, request);
        if (response instanceof Promise)
          return response.then((x) => mapResponse2(x, set));
        if (response instanceof Error)
          return errorToResponse2(response, set);
        if (response instanceof ElysiaCustomStatusResponse)
          return set.status = response.code, mapResponse2(response.response, set, request);
        if (typeof response?.next == "function" || response instanceof ReadableStream)
          return handleStream2(response, set, request);
        if (typeof response?.then == "function")
          return response.then((x) => mapResponse2(x, set));
        if (Array.isArray(response))
          return Response.json(response);
        if (typeof response?.toResponse == "function")
          return mapResponse2(response.toResponse(), set);
        if ("charCodeAt" in response) {
          const code = response.charCodeAt(0);
          if (code === 123 || code === 91)
            return Response.json(response, set);
        }
        return new Response(response, set);
    }
  return typeof response?.next == "function" || response instanceof ReadableStream ? handleStream2(response, set, request) : mapCompactResponse2(response, request);
};
var mapEarlyResponse2 = (response, set, request) => {
  if (response != null)
    if (isNotEmpty(set.headers) || set.status !== 200 || set.cookie)
      switch (handleSet(set), response?.constructor?.name) {
        case "String":
          return new Response(response, set);
        case "Array":
        case "Object":
          return Response.json(response, set);
        case "ElysiaFile":
          return handleFile(response.value, set, request);
        case "File":
          return handleFile(response, set, request);
        case "Blob":
          return handleFile(response, set, request);
        case "ElysiaCustomStatusResponse":
          return set.status = response.code, mapEarlyResponse2(response.response, set, request);
        case undefined:
          return response ? Response.json(response, set) : undefined;
        case "Response":
          return handleResponse2(response, set, request);
        case "Promise":
          return response.then((x) => mapEarlyResponse2(x, set));
        case "Error":
          return errorToResponse2(response, set);
        case "Function":
          return mapEarlyResponse2(response(), set);
        case "Number":
        case "Boolean":
          return new Response(response.toString(), set);
        case "FormData":
          return new Response(response);
        case "Cookie":
          return response instanceof Cookie ? new Response(response.value, set) : new Response(response?.toString(), set);
        default:
          if (response instanceof Response)
            return handleResponse2(response, set, request);
          if (response instanceof Promise)
            return response.then((x) => mapEarlyResponse2(x, set));
          if (response instanceof Error)
            return errorToResponse2(response, set);
          if (response instanceof ElysiaCustomStatusResponse)
            return set.status = response.code, mapEarlyResponse2(response.response, set, request);
          if (typeof response?.next == "function" || response instanceof ReadableStream)
            return handleStream2(response, set, request);
          if (typeof response?.then == "function")
            return response.then((x) => mapEarlyResponse2(x, set));
          if (typeof response?.toResponse == "function")
            return mapEarlyResponse2(response.toResponse(), set);
          if (Array.isArray(response))
            return Response.json(response);
          if ("charCodeAt" in response) {
            const code = response.charCodeAt(0);
            if (code === 123 || code === 91)
              return Response.json(response, set);
          }
          return new Response(response, set);
      }
    else
      switch (response?.constructor?.name) {
        case "String":
          return new Response(response);
        case "Array":
        case "Object":
          return Response.json(response, set);
        case "ElysiaFile":
          return handleFile(response.value, set, request);
        case "File":
          return handleFile(response, set, request);
        case "Blob":
          return handleFile(response, set, request);
        case "ElysiaCustomStatusResponse":
          return set.status = response.code, mapEarlyResponse2(response.response, set, request);
        case undefined:
          return response ? Response.json(response) : new Response("");
        case "Response":
          return response;
        case "Promise":
          return response.then((x) => {
            const r = mapEarlyResponse2(x, set);
            if (r !== undefined)
              return r;
          });
        case "Error":
          return errorToResponse2(response, set);
        case "Function":
          return mapCompactResponse2(response(), request);
        case "Number":
        case "Boolean":
          return new Response(response.toString());
        case "Cookie":
          return response instanceof Cookie ? new Response(response.value, set) : new Response(response?.toString(), set);
        case "FormData":
          return new Response(response);
        default:
          if (response instanceof Response)
            return response;
          if (response instanceof Promise)
            return response.then((x) => mapEarlyResponse2(x, set));
          if (response instanceof Error)
            return errorToResponse2(response, set);
          if (response instanceof ElysiaCustomStatusResponse)
            return set.status = response.code, mapEarlyResponse2(response.response, set, request);
          if (typeof response?.next == "function" || response instanceof ReadableStream)
            return handleStream2(response, set, request);
          if (typeof response?.then == "function")
            return response.then((x) => mapEarlyResponse2(x, set));
          if (typeof response?.toResponse == "function")
            return mapEarlyResponse2(response.toResponse(), set);
          if (Array.isArray(response))
            return Response.json(response);
          if ("charCodeAt" in response) {
            const code = response.charCodeAt(0);
            if (code === 123 || code === 91)
              return Response.json(response, set);
          }
          return new Response(response);
      }
};
var mapCompactResponse2 = (response, request) => {
  switch (response?.constructor?.name) {
    case "String":
      return new Response(response);
    case "Object":
    case "Array":
      return Response.json(response);
    case "ElysiaFile":
      return handleFile(response.value, undefined, request);
    case "File":
      return handleFile(response, undefined, request);
    case "Blob":
      return handleFile(response, undefined, request);
    case "ElysiaCustomStatusResponse":
      return mapResponse2(response.response, {
        status: response.code,
        headers: {}
      });
    case undefined:
      return response ? Response.json(response) : new Response("");
    case "Response":
      return response;
    case "Error":
      return errorToResponse2(response);
    case "Promise":
      return response.then((x) => mapCompactResponse2(x, request));
    case "Function":
      return mapCompactResponse2(response(), request);
    case "Number":
    case "Boolean":
      return new Response(response.toString());
    case "FormData":
      return new Response(response);
    default:
      if (response instanceof Response)
        return response;
      if (response instanceof Promise)
        return response.then((x) => mapCompactResponse2(x, request));
      if (response instanceof Error)
        return errorToResponse2(response);
      if (response instanceof ElysiaCustomStatusResponse)
        return mapResponse2(response.response, {
          status: response.code,
          headers: {}
        });
      if (typeof response?.next == "function" || response instanceof ReadableStream)
        return handleStream2(response, undefined, request);
      if (typeof response?.then == "function")
        return response.then((x) => mapCompactResponse2(x, request));
      if (typeof response?.toResponse == "function")
        return mapCompactResponse2(response.toResponse());
      if (Array.isArray(response))
        return Response.json(response);
      if ("charCodeAt" in response) {
        const code = response.charCodeAt(0);
        if (code === 123 || code === 91)
          return Response.json(response);
      }
      return new Response(response);
  }
};
var errorToResponse2 = (error, set) => {
  if (typeof error?.toResponse == "function") {
    const raw = error.toResponse(), targetSet = set ?? { headers: {}, status: 200, redirect: "" }, apply = (resolved) => (resolved instanceof Response && (targetSet.status = resolved.status), mapResponse2(resolved, targetSet));
    return typeof raw?.then == "function" ? raw.then(apply) : apply(raw);
  }
  return Response.json({
    name: error?.name,
    message: error?.message,
    cause: error?.cause
  }, {
    status: set?.status !== 200 ? set?.status ?? 500 : 500,
    headers: set?.headers
  });
};
var createStaticHandler2 = (handle, hooks, setHeaders = {}) => {
  if (typeof handle == "function")
    return;
  const response = mapResponse2(handle, {
    headers: setHeaders
  });
  if (!hooks.parse?.length && !hooks.transform?.length && !hooks.beforeHandle?.length && !hooks.afterHandle?.length)
    return () => response.clone();
};
var handleResponse2 = createResponseHandler({
  mapResponse: mapResponse2,
  mapCompactResponse: mapCompactResponse2
});
var handleStream2 = createStreamHandler({
  mapResponse: mapResponse2,
  mapCompactResponse: mapCompactResponse2
});

// node_modules/elysia/dist/compose.mjs
var import_fast_decode_uri_component3 = __toESM(require_fast_decode_uri_component(), 1);

// node_modules/elysia/dist/parse-query.mjs
var import_fast_decode_uri_component2 = __toESM(require_fast_decode_uri_component(), 1);
var KEY_HAS_PLUS = 1;
var KEY_NEEDS_DECODE = 2;
var VALUE_HAS_PLUS = 4;
var VALUE_NEEDS_DECODE = 8;
function parseQueryFromURL(input, startIndex = 0, array, object) {
  const result = /* @__PURE__ */ Object.create(null);
  let flags = 0;
  const inputLength = input.length;
  let startingIndex = startIndex - 1, equalityIndex = startingIndex;
  for (let i = 0;i < inputLength; i++)
    switch (input.charCodeAt(i)) {
      case 38:
        processKeyValuePair(input, i), startingIndex = i, equalityIndex = i, flags = 0;
        break;
      case 61:
        equalityIndex <= startingIndex ? equalityIndex = i : flags |= VALUE_NEEDS_DECODE;
        break;
      case 43:
        equalityIndex > startingIndex ? flags |= VALUE_HAS_PLUS : flags |= KEY_HAS_PLUS;
        break;
      case 37:
        equalityIndex > startingIndex ? flags |= VALUE_NEEDS_DECODE : flags |= KEY_NEEDS_DECODE;
        break;
    }
  return startingIndex < inputLength && processKeyValuePair(input, inputLength), result;
  function processKeyValuePair(input2, endIndex) {
    const hasBothKeyValuePair = equalityIndex > startingIndex, effectiveEqualityIndex = hasBothKeyValuePair ? equalityIndex : endIndex, keySlice = input2.slice(startingIndex + 1, effectiveEqualityIndex);
    if (!hasBothKeyValuePair && keySlice.length === 0)
      return;
    let finalKey = keySlice;
    flags & KEY_HAS_PLUS && (finalKey = finalKey.replace(/\+/g, " ")), flags & KEY_NEEDS_DECODE && (finalKey = import_fast_decode_uri_component2.default(finalKey) || finalKey);
    let finalValue = "";
    if (hasBothKeyValuePair) {
      let valueSlice = input2.slice(equalityIndex + 1, endIndex);
      flags & VALUE_HAS_PLUS && (valueSlice = valueSlice.replace(/\+/g, " ")), flags & VALUE_NEEDS_DECODE && (valueSlice = import_fast_decode_uri_component2.default(valueSlice) || valueSlice), finalValue = valueSlice;
    }
    const currentValue = result[finalKey];
    array && array?.[finalKey] ? finalValue.charCodeAt(0) === 91 ? (object && object?.[finalKey] ? finalValue = JSON.parse(finalValue) : finalValue = finalValue.slice(1, -1).split(","), currentValue === undefined ? result[finalKey] = finalValue : Array.isArray(currentValue) ? currentValue.push(...finalValue) : (result[finalKey] = finalValue, result[finalKey].unshift(currentValue))) : currentValue === undefined ? result[finalKey] = finalValue : Array.isArray(currentValue) ? currentValue.push(finalValue) : result[finalKey] = [currentValue, finalValue] : result[finalKey] = finalValue;
  }
}
function parseQueryStandardSchema(input, startIndex = 0) {
  const result = /* @__PURE__ */ Object.create(null);
  let flags = 0;
  const inputLength = input.length;
  let startingIndex = startIndex - 1, equalityIndex = startingIndex;
  for (let i = 0;i < inputLength; i++)
    switch (input.charCodeAt(i)) {
      case 38:
        processKeyValuePair(input, i), startingIndex = i, equalityIndex = i, flags = 0;
        break;
      case 61:
        equalityIndex <= startingIndex ? equalityIndex = i : flags |= VALUE_NEEDS_DECODE;
        break;
      case 43:
        equalityIndex > startingIndex ? flags |= VALUE_HAS_PLUS : flags |= KEY_HAS_PLUS;
        break;
      case 37:
        equalityIndex > startingIndex ? flags |= VALUE_NEEDS_DECODE : flags |= KEY_NEEDS_DECODE;
        break;
    }
  return startingIndex < inputLength && processKeyValuePair(input, inputLength), result;
  function processKeyValuePair(input2, endIndex) {
    const hasBothKeyValuePair = equalityIndex > startingIndex, effectiveEqualityIndex = hasBothKeyValuePair ? equalityIndex : endIndex, keySlice = input2.slice(startingIndex + 1, effectiveEqualityIndex);
    if (!hasBothKeyValuePair && keySlice.length === 0)
      return;
    let finalKey = keySlice;
    flags & KEY_HAS_PLUS && (finalKey = finalKey.replace(/\+/g, " ")), flags & KEY_NEEDS_DECODE && (finalKey = import_fast_decode_uri_component2.default(finalKey) || finalKey);
    let finalValue = "";
    if (hasBothKeyValuePair) {
      let valueSlice = input2.slice(equalityIndex + 1, endIndex);
      flags & VALUE_HAS_PLUS && (valueSlice = valueSlice.replace(/\+/g, " ")), flags & VALUE_NEEDS_DECODE && (valueSlice = import_fast_decode_uri_component2.default(valueSlice) || valueSlice), finalValue = valueSlice;
    }
    const currentValue = result[finalKey];
    if (finalValue.charCodeAt(0) === 91 && finalValue.charCodeAt(finalValue.length - 1) === 93) {
      try {
        finalValue = JSON.parse(finalValue);
      } catch {}
      currentValue === undefined ? result[finalKey] = finalValue : Array.isArray(currentValue) ? currentValue.push(finalValue) : result[finalKey] = [currentValue, finalValue];
    } else if (finalValue.charCodeAt(0) === 123 && finalValue.charCodeAt(finalValue.length - 1) === 125) {
      try {
        finalValue = JSON.parse(finalValue);
      } catch {}
      currentValue === undefined ? result[finalKey] = finalValue : Array.isArray(currentValue) ? currentValue.push(finalValue) : result[finalKey] = [currentValue, finalValue];
    } else
      finalValue.includes(",") && (finalValue = finalValue.split(",")), currentValue === undefined ? result[finalKey] = finalValue : Array.isArray(currentValue) ? currentValue.push(finalValue) : result[finalKey] = [currentValue, finalValue];
  }
}
function parseQuery(input) {
  const result = /* @__PURE__ */ Object.create(null);
  let flags = 0;
  const inputLength = input.length;
  let startingIndex = -1, equalityIndex = -1;
  for (let i = 0;i < inputLength; i++)
    switch (input.charCodeAt(i)) {
      case 38:
        processKeyValuePair(input, i), startingIndex = i, equalityIndex = i, flags = 0;
        break;
      case 61:
        equalityIndex <= startingIndex ? equalityIndex = i : flags |= VALUE_NEEDS_DECODE;
        break;
      case 43:
        equalityIndex > startingIndex ? flags |= VALUE_HAS_PLUS : flags |= KEY_HAS_PLUS;
        break;
      case 37:
        equalityIndex > startingIndex ? flags |= VALUE_NEEDS_DECODE : flags |= KEY_NEEDS_DECODE;
        break;
    }
  return startingIndex < inputLength && processKeyValuePair(input, inputLength), result;
  function processKeyValuePair(input2, endIndex) {
    const hasBothKeyValuePair = equalityIndex > startingIndex, effectiveEqualityIndex = hasBothKeyValuePair ? equalityIndex : endIndex, keySlice = input2.slice(startingIndex + 1, effectiveEqualityIndex);
    if (!hasBothKeyValuePair && keySlice.length === 0)
      return;
    let finalKey = keySlice;
    flags & KEY_HAS_PLUS && (finalKey = finalKey.replace(/\+/g, " ")), flags & KEY_NEEDS_DECODE && (finalKey = import_fast_decode_uri_component2.default(finalKey) || finalKey);
    let finalValue = "";
    if (hasBothKeyValuePair) {
      let valueSlice = input2.slice(equalityIndex + 1, endIndex);
      flags & VALUE_HAS_PLUS && (valueSlice = valueSlice.replace(/\+/g, " ")), flags & VALUE_NEEDS_DECODE && (valueSlice = import_fast_decode_uri_component2.default(valueSlice) || valueSlice), finalValue = valueSlice;
    }
    const currentValue = result[finalKey];
    currentValue === undefined ? result[finalKey] = finalValue : Array.isArray(currentValue) ? currentValue.push(finalValue) : result[finalKey] = [currentValue, finalValue];
  }
}

// node_modules/elysia/dist/trace.mjs
var ELYSIA_TRACE = Symbol("ElysiaTrace");
var createProcess = () => {
  const { promise, resolve } = Promise.withResolvers(), { promise: end, resolve: resolveEnd } = Promise.withResolvers(), { promise: error, resolve: resolveError } = Promise.withResolvers(), callbacks = [], callbacksEnd = [];
  return [
    (callback) => (callback && callbacks.push(callback), promise),
    (process2) => {
      const processes = [], resolvers = [];
      let groupError = null;
      for (let i = 0;i < (process2.total ?? 0); i++) {
        const { promise: promise2, resolve: resolve2 } = Promise.withResolvers(), { promise: end2, resolve: resolveEnd2 } = Promise.withResolvers(), { promise: error2, resolve: resolveError2 } = Promise.withResolvers(), callbacks2 = [], callbacksEnd2 = [];
        processes.push((callback) => (callback && callbacks2.push(callback), promise2)), resolvers.push((process2) => {
          const result2 = {
            ...process2,
            end: end2,
            error: error2,
            index: i,
            onStop(callback) {
              return callback && callbacksEnd2.push(callback), end2;
            }
          };
          resolve2(result2);
          for (let i2 = 0;i2 < callbacks2.length; i2++)
            callbacks2[i2](result2);
          return (error3 = null) => {
            const end3 = performance.now();
            error3 && (groupError = error3);
            const detail = {
              end: end3,
              error: error3,
              get elapsed() {
                return end3 - process2.begin;
              }
            };
            for (let i2 = 0;i2 < callbacksEnd2.length; i2++)
              callbacksEnd2[i2](detail);
            resolveEnd2(end3), resolveError2(error3);
          };
        });
      }
      const result = {
        ...process2,
        end,
        error,
        onEvent(callback) {
          for (let i = 0;i < processes.length; i++)
            processes[i](callback);
        },
        onStop(callback) {
          return callback && callbacksEnd.push(callback), end;
        }
      };
      resolve(result);
      for (let i = 0;i < callbacks.length; i++)
        callbacks[i](result);
      return {
        resolveChild: resolvers,
        resolve(error2 = null) {
          const end2 = performance.now();
          !error2 && groupError && (error2 = groupError);
          const detail = {
            end: end2,
            error: error2,
            get elapsed() {
              return end2 - process2.begin;
            }
          };
          for (let i = 0;i < callbacksEnd.length; i++)
            callbacksEnd[i](detail);
          resolveEnd(end2), resolveError(error2);
        }
      };
    }
  ];
};
var createTracer = (traceListener) => (context) => {
  const [onRequest, resolveRequest] = createProcess(), [onParse, resolveParse] = createProcess(), [onTransform, resolveTransform] = createProcess(), [onBeforeHandle, resolveBeforeHandle] = createProcess(), [onHandle, resolveHandle] = createProcess(), [onAfterHandle, resolveAfterHandle] = createProcess(), [onError, resolveError] = createProcess(), [onMapResponse, resolveMapResponse] = createProcess(), [onAfterResponse, resolveAfterResponse] = createProcess();
  return traceListener({
    id: context[ELYSIA_REQUEST_ID],
    context,
    set: context.set,
    onRequest,
    onParse,
    onTransform,
    onBeforeHandle,
    onHandle,
    onAfterHandle,
    onMapResponse,
    onAfterResponse,
    onError,
    time: Date.now(),
    store: context.store
  }), {
    request: resolveRequest,
    parse: resolveParse,
    transform: resolveTransform,
    beforeHandle: resolveBeforeHandle,
    handle: resolveHandle,
    afterHandle: resolveAfterHandle,
    error: resolveError,
    mapResponse: resolveMapResponse,
    afterResponse: resolveAfterResponse
  };
};

// node_modules/exact-mirror/dist/index.mjs
var Kind2 = Symbol.for("TypeBox.Kind");
var Hint2 = Symbol.for("TypeBox.Hint");
var isSpecialProperty = (name) => /(\ |-|\t|\n|\.|\[|\]|\{|\})/.test(name) || !isNaN(+name[0]);
var joinProperty = (v1, v2, isOptional = false) => {
  if (typeof v2 === "number")
    return `${v1}[${v2}]`;
  if (isSpecialProperty(v2))
    return `${v1}${isOptional ? "?." : ""}["${v2}"]`;
  return `${v1}${isOptional ? "?" : ""}.${v2}`;
};
var encodeProperty = (v) => isSpecialProperty(v) ? `"${v}"` : v;
var sanitize = (key, sanitize2 = 0, schema) => {
  if (schema.type !== "string" || schema.const || schema.trusted)
    return key;
  let hof = "";
  for (let i = sanitize2 - 1;i >= 0; i--)
    hof += `d.h${i}(`;
  return hof + key + ")".repeat(sanitize2);
};
var mergeObjectIntersection = (schema) => {
  if (!schema.allOf || Kind2 in schema && (schema[Kind2] !== "Intersect" || schema.type !== "object"))
    return schema;
  const { allOf, ...newSchema } = schema;
  newSchema.properties = {};
  if (Kind2 in newSchema)
    newSchema[Kind2] = "Object";
  for (const type of allOf) {
    if (type.type !== "object")
      continue;
    const { properties, required, type: _, [Kind2]: __, ...rest } = type;
    if (required)
      newSchema.required = newSchema.required ? newSchema.required.concat(required) : required;
    Object.assign(newSchema, rest);
    for (const property in type.properties)
      newSchema.properties[property] = mergeObjectIntersection(type.properties[property]);
  }
  return newSchema;
};
var handleRecord = (schema, property, instruction) => {
  const child = schema.patternProperties["^(.*)$"] ?? schema.patternProperties[Object.keys(schema.patternProperties)[0]];
  if (!child)
    return property;
  const i = instruction.array;
  instruction.array++;
  let v = `(()=>{const ar${i}s=Object.keys(${property}),ar${i}v={};for(let i=0;i<ar${i}s.length;i++){const ar${i}p=${property}[ar${i}s[i]];ar${i}v[ar${i}s[i]]=${mirror(child, `ar${i}p`, instruction)}`;
  const optionals = instruction.optionalsInArray[i + 1];
  if (optionals) {
    for (let oi = 0;oi < optionals.length; oi++) {
      const target = `ar${i}v[ar${i}s[i]]${optionals[oi]}`;
      v += `;if(${target}===undefined)delete ${target}`;
    }
    instruction.optionalsInArray[i + 1] = [];
  }
  v += `}return ar${i}v})()`;
  return v;
};
var handleTuple = (schema, property, instruction) => {
  const i = instruction.array;
  instruction.array++;
  const isRoot = property === "v" && !instruction.unions.length;
  let v = "";
  if (!isRoot)
    v = `(()=>{`;
  v += `const ar${i}v=[`;
  for (let i2 = 0;i2 < schema.length; i2++) {
    if (i2 !== 0)
      v += ",";
    v += mirror(schema[i2], joinProperty(property, i2, instruction.parentIsOptional || instruction.fromUnion), instruction);
  }
  v += `];`;
  if (!isRoot)
    v += `return ar${i}v})()`;
  return v;
};
function deepClone(source, weak = /* @__PURE__ */ new WeakMap) {
  if (source === null || typeof source !== "object" || typeof source === "function")
    return source;
  if (weak.has(source))
    return weak.get(source);
  if (Array.isArray(source)) {
    const copy = new Array(source.length);
    weak.set(source, copy);
    for (let i = 0;i < source.length; i++)
      copy[i] = deepClone(source[i], weak);
    return copy;
  }
  if (typeof source === "object") {
    const keys = Object.keys(source).concat(Object.getOwnPropertySymbols(source));
    const cloned = {};
    for (const key of keys)
      cloned[key] = deepClone(source[key], weak);
    return cloned;
  }
  return source;
}
var handleUnion = (schemas, property, instruction) => {
  if (instruction.TypeCompiler === undefined) {
    if (!instruction.typeCompilerWanred) {
      console.warn(new Error("[exact-mirror] TypeBox's TypeCompiler is required to use Union"));
      instruction.typeCompilerWanred = true;
    }
    return property;
  }
  instruction.unionKeys[property] = 1;
  const ui = instruction.unions.length;
  const typeChecks = instruction.unions[ui] = [];
  let v = `(()=>{
`;
  const unwrapRef = (type) => {
    if (!(Kind2 in type) || !type.$ref)
      return type;
    if (type[Kind2] === "This") {
      return deepClone(instruction.definitions[type.$ref]);
    } else if (type[Kind2] === "Ref") {
      if (!instruction.modules)
        console.warn(new Error("[exact-mirror] modules is required when using nested cyclic reference"));
      else
        return instruction.modules.Import(type.$ref);
    }
    return type;
  };
  let cleanThenCheck = "";
  for (let i = 0;i < schemas.length; i++) {
    let type = unwrapRef(schemas[i]);
    if (Array.isArray(type.anyOf))
      for (let i2 = 0;i2 < type.anyOf.length; i2++)
        type.anyOf[i2] = unwrapRef(type.anyOf[i2]);
    else if (type.items) {
      if (Array.isArray(type.items))
        for (let i2 = 0;i2 < type.items.length; i2++)
          type.items[i2] = unwrapRef(type.items[i2]);
      else
        type.items = unwrapRef(type.items);
    }
    typeChecks.push(TypeCompiler.Compile(type));
    v += `if(d.unions[${ui}][${i}].Check(${property})){return ${mirror(type, property, {
      ...instruction,
      recursion: instruction.recursion + 1,
      parentIsOptional: true,
      fromUnion: true
    })}}
`;
    cleanThenCheck += (i ? "" : "let ") + "tmp=" + mirror(type, property, {
      ...instruction,
      recursion: instruction.recursion + 1,
      parentIsOptional: true,
      fromUnion: true
    }) + `
if(d.unions[${ui}][${i}].Check(tmp))return tmp
`;
  }
  if (cleanThenCheck)
    v += cleanThenCheck;
  v += `return ${instruction.removeUnknownUnionType ? "undefined" : property}`;
  return v + `})()`;
};
var mirror = (schema, property, instruction) => {
  if (!schema)
    return "";
  const isRoot = property === "v" && !instruction.unions.length;
  if (Kind2 in schema && schema[Kind2] === "Import" && schema.$ref in schema.$defs)
    return mirror(schema.$defs[schema.$ref], property, {
      ...instruction,
      definitions: Object.assign(instruction.definitions, schema.$defs)
    });
  if (isRoot && schema.type !== "object" && schema.type !== "array" && !schema.anyOf)
    return `return ${sanitize("v", instruction.sanitize?.length, schema)}`;
  if (instruction.recursion >= instruction.recursionLimit)
    return property;
  let v = "";
  if (schema.$id && Hint2 in schema)
    instruction.definitions[schema.$id] = schema;
  switch (schema.type) {
    case "object":
      if (schema[Kind2] === "Record") {
        v = handleRecord(schema, property, instruction);
        break;
      }
      schema = mergeObjectIntersection(schema);
      v += "{";
      if (schema.additionalProperties)
        v += `...${property},`;
      const keys = Object.keys(schema.properties);
      for (let i2 = 0;i2 < keys.length; i2++) {
        const key = keys[i2];
        let isOptional = !schema.required || schema.required && !schema.required.includes(key) || Array.isArray(schema.properties[key].anyOf);
        const name = joinProperty(property, key, instruction.parentIsOptional || instruction.fromUnion);
        if (isOptional) {
          const index = instruction.array;
          if (property.startsWith("ar")) {
            const dotIndex = name.indexOf(".");
            let refName;
            if (dotIndex >= 0) {
              refName = name.slice(dotIndex);
            } else {
              refName = name.slice(property.length);
            }
            if (refName.startsWith("?.")) {
              if (refName.charAt(2) === "[") {
                refName = refName.slice(2);
              } else {
                refName = refName.slice(1);
              }
            }
            const array = instruction.optionalsInArray;
            if (array[index]) {
              array[index].push(refName);
            } else {
              array[index] = [refName];
            }
          } else {
            instruction.optionals.push(name);
          }
        }
        const child = schema.properties[key];
        if (i2 !== 0)
          v += ",";
        v += `${encodeProperty(key)}:${isOptional ? `${name}===undefined?undefined:` : ""}${mirror(child, name, {
          ...instruction,
          recursion: instruction.recursion + 1,
          parentIsOptional: isOptional
        })}`;
      }
      v += "}";
      break;
    case "array":
      if (schema.items.type !== "object" && schema.items.type !== "array") {
        if (Array.isArray(schema.items)) {
          v = handleTuple(schema.items, property, instruction);
          break;
        } else if (isRoot && !Array.isArray(schema.items.anyOf))
          return "return v";
        else if (Kind2 in schema.items && schema.items.$ref && (schema.items[Kind2] === "Ref" || schema.items[Kind2] === "This"))
          v = mirror(deepClone(instruction.definitions[schema.items.$ref]), property, {
            ...instruction,
            parentIsOptional: true,
            recursion: instruction.recursion + 1
          });
        else if (!Array.isArray(schema.items.anyOf)) {
          v = property;
          break;
        }
      }
      const i = instruction.array;
      instruction.array++;
      let reference = property;
      if (isRoot)
        v = `const ar${i}v=new Array(${property}.length);`;
      else {
        reference = `ar${i}s`;
        v = `((${reference})=>{const ar${i}v=new Array(${reference}.length);`;
      }
      v += `for(let i=0;i<${reference}.length;i++){const ar${i}p=${reference}[i];ar${i}v[i]=${mirror(schema.items, `ar${i}p`, instruction)}`;
      const optionals = instruction.optionalsInArray[i + 1];
      if (optionals) {
        for (let oi = 0;oi < optionals.length; oi++) {
          const target = `ar${i}v[i]${optionals[oi]}`;
          v += `;if(${target}===undefined)delete ${target}`;
        }
        instruction.optionalsInArray[i + 1] = [];
      }
      v += `}`;
      if (!isRoot)
        v += `return ar${i}v})(${property})`;
      break;
    default:
      if (schema.$ref && schema.$ref in instruction.definitions)
        return mirror(instruction.definitions[schema.$ref], property, instruction);
      if (Array.isArray(schema.anyOf)) {
        v = handleUnion(schema.anyOf, property, instruction);
        break;
      }
      v = sanitize(property, instruction.sanitize?.length, schema);
      break;
  }
  if (!isRoot)
    return v;
  if (schema.type === "array") {
    v = `${v}const x=ar0v;`;
  } else {
    v = `const x=${v}
`;
  }
  for (let i = 0;i < instruction.optionals.length; i++) {
    const key = instruction.optionals[i];
    const prop = key.slice(1);
    v += `if(${key}===undefined`;
    if (instruction.unionKeys[key])
      v += `||x${prop}===undefined`;
    const shouldQuestion = prop.charCodeAt(0) !== 63 && schema.type !== "array";
    v += `)delete x${shouldQuestion ? prop.charCodeAt(0) === 91 ? "?." : "?" : ""}${prop}
`;
  }
  return `${v}return x`;
};
var createMirror = (schema, {
  TypeCompiler: TypeCompiler2,
  modules,
  definitions,
  sanitize: sanitize2,
  recursionLimit = 8,
  removeUnknownUnionType = false
} = {}) => {
  const unions = [];
  if (typeof sanitize2 === "function")
    sanitize2 = [sanitize2];
  const f = mirror(schema, "v", {
    optionals: [],
    optionalsInArray: [],
    array: 0,
    parentIsOptional: false,
    unions,
    unionKeys: {},
    TypeCompiler: TypeCompiler2,
    modules,
    definitions: definitions ?? modules?.$defs ?? {},
    sanitize: sanitize2,
    recursion: 0,
    recursionLimit,
    removeUnknownUnionType
  });
  if (!unions.length && !sanitize2?.length)
    return Function("v", f);
  let hof;
  if (sanitize2?.length) {
    hof = {};
    for (let i = 0;i < sanitize2.length; i++)
      hof[`h${i}`] = sanitize2[i];
  }
  return Function("d", `return function mirror(v){${f}}`)({
    unions,
    ...hof
  });
};

// node_modules/elysia/dist/replace-schema.mjs
var replaceSchemaTypeFromManyOptions = (schema, options) => {
  if (Array.isArray(options)) {
    let result = schema;
    for (const option of options)
      result = replaceSchemaTypeFromOption(result, option);
    return result;
  }
  return replaceSchemaTypeFromOption(schema, options);
};
var replaceSchemaTypeFromOption = (schema, option) => {
  if (option.rootOnly && option.excludeRoot)
    throw new Error("Can't set both rootOnly and excludeRoot");
  if (option.rootOnly && option.onlyFirst)
    throw new Error("Can't set both rootOnly and onlyFirst");
  if (option.rootOnly && option.untilObjectFound)
    throw new Error("Can't set both rootOnly and untilObjectFound");
  const walk = ({ s, isRoot, treeLvl }) => {
    if (!s)
      return s;
    const skipRoot = isRoot && option.excludeRoot, fromKind = option.from[Kind];
    if (s.elysiaMeta)
      return option.from.elysiaMeta === s.elysiaMeta && !skipRoot ? option.to(s) : s;
    const shouldTransform = fromKind && s[Kind] === fromKind;
    if (!skipRoot && option.onlyFirst && s.type === option.onlyFirst || isRoot && option.rootOnly)
      return shouldTransform ? option.to(s) : s;
    if (!isRoot && option.untilObjectFound && s.type === "object")
      return s;
    const newWalkInput = { isRoot: false, treeLvl: treeLvl + 1 }, withTransformedChildren = { ...s };
    if (s.oneOf && (withTransformedChildren.oneOf = s.oneOf.map((x) => walk({ ...newWalkInput, s: x }))), s.anyOf && (withTransformedChildren.anyOf = s.anyOf.map((x) => walk({ ...newWalkInput, s: x }))), s.allOf && (withTransformedChildren.allOf = s.allOf.map((x) => walk({ ...newWalkInput, s: x }))), s.not && (withTransformedChildren.not = walk({ ...newWalkInput, s: s.not })), s.properties) {
      withTransformedChildren.properties = {};
      for (const [k, v] of Object.entries(s.properties))
        withTransformedChildren.properties[k] = walk({
          ...newWalkInput,
          s: v
        });
    }
    if (s.items) {
      const items = s.items;
      withTransformedChildren.items = Array.isArray(items) ? items.map((x) => walk({ ...newWalkInput, s: x })) : walk({ ...newWalkInput, s: items });
    }
    return !skipRoot && fromKind && withTransformedChildren[Kind] === fromKind ? option.to(withTransformedChildren) : withTransformedChildren;
  };
  return walk({ s: schema, isRoot: true, treeLvl: 0 });
};
var _stringToStructureCoercions;
var stringToStructureCoercions = () => (_stringToStructureCoercions || (_stringToStructureCoercions = [
  {
    from: t.Object({}),
    to: (schema) => t.ObjectString(schema.properties || {}, schema),
    excludeRoot: true
  },
  {
    from: t.Array(t.Any()),
    to: (schema) => t.ArrayString(schema.items || t.Any(), schema)
  }
]), _stringToStructureCoercions);
var _queryCoercions;
var queryCoercions = () => (_queryCoercions || (_queryCoercions = [
  {
    from: t.Object({}),
    to: (schema) => t.ObjectString(schema.properties ?? {}, schema),
    excludeRoot: true
  },
  {
    from: t.Array(t.Any()),
    to: (schema) => t.ArrayQuery(schema.items ?? t.Any(), schema)
  }
]), _queryCoercions);
var _coercePrimitiveRoot;
var coercePrimitiveRoot = () => (_coercePrimitiveRoot || (_coercePrimitiveRoot = [
  {
    from: t.Number(),
    to: (schema) => t.Numeric(schema),
    rootOnly: true
  },
  {
    from: t.Boolean(),
    to: (schema) => t.BooleanString(schema),
    rootOnly: true
  }
]), _coercePrimitiveRoot);
var _coerceFormData;
var coerceFormData = () => (_coerceFormData || (_coerceFormData = [
  {
    from: t.Object({}),
    to: (schema) => t.ObjectString(schema.properties ?? {}, schema),
    onlyFirst: "object",
    excludeRoot: true
  },
  {
    from: t.Array(t.Any()),
    to: (schema) => t.ArrayString(schema.items ?? t.Any(), schema),
    onlyFirst: "array",
    excludeRoot: true
  }
]), _coerceFormData);

// node_modules/elysia/dist/schema.mjs
var isOptional = (schema) => schema ? schema?.[Kind] === "Import" && schema.References ? schema.References().some(isOptional) : (schema.schema && (schema = schema.schema), !!schema && (OptionalKind in schema)) : false;
var hasAdditionalProperties = (_schema) => {
  if (!_schema)
    return false;
  const schema = _schema?.schema ?? _schema;
  if (schema[Kind] === "Import" && _schema.References)
    return _schema.References().some(hasAdditionalProperties);
  if (schema.anyOf)
    return schema.anyOf.some(hasAdditionalProperties);
  if (schema.someOf)
    return schema.someOf.some(hasAdditionalProperties);
  if (schema.allOf)
    return schema.allOf.some(hasAdditionalProperties);
  if (schema.not)
    return schema.not.some(hasAdditionalProperties);
  if (schema.type === "object") {
    const properties = schema.properties;
    if ("additionalProperties" in schema)
      return schema.additionalProperties;
    if ("patternProperties" in schema)
      return false;
    for (const key of Object.keys(properties)) {
      const property = properties[key];
      if (property.type === "object") {
        if (hasAdditionalProperties(property))
          return true;
      } else if (property.anyOf) {
        for (let i = 0;i < property.anyOf.length; i++)
          if (hasAdditionalProperties(property.anyOf[i]))
            return true;
      }
      return property.additionalProperties;
    }
    return false;
  }
  return schema.type === "array" && schema.items && !Array.isArray(schema.items) ? hasAdditionalProperties(schema.items) : false;
};
var resolveSchema = (schema, models, modules) => {
  if (schema)
    return typeof schema != "string" ? schema : modules && (schema in modules.$defs) ? modules.Import(schema) : models?.[schema];
};
var hasType = (type, schema) => {
  if (!schema)
    return false;
  if (Kind in schema && schema[Kind] === type)
    return true;
  if (Kind in schema && schema[Kind] === "Import" && schema.$defs && schema.$ref) {
    const ref = schema.$ref.replace("#/$defs/", "");
    if (schema.$defs[ref])
      return hasType(type, schema.$defs[ref]);
  }
  if (schema.anyOf)
    return schema.anyOf.some((s) => hasType(type, s));
  if (schema.oneOf)
    return schema.oneOf.some((s) => hasType(type, s));
  if (schema.allOf)
    return schema.allOf.some((s) => hasType(type, s));
  if (schema.type === "array" && schema.items)
    return type === "Files" && Kind in schema.items && schema.items[Kind] === "File" ? true : hasType(type, schema.items);
  if (schema.type === "object") {
    const properties = schema.properties;
    if (!properties)
      return false;
    for (const key of Object.keys(properties))
      if (hasType(type, properties[key]))
        return true;
  }
  return false;
};
var hasElysiaMeta = (meta, _schema) => {
  if (!_schema)
    return false;
  const schema = _schema?.schema ?? _schema;
  if (schema.elysiaMeta === meta)
    return true;
  if (schema[Kind] === "Import" && _schema.References)
    return _schema.References().some((schema2) => hasElysiaMeta(meta, schema2));
  if (schema.anyOf)
    return schema.anyOf.some((schema2) => hasElysiaMeta(meta, schema2));
  if (schema.someOf)
    return schema.someOf.some((schema2) => hasElysiaMeta(meta, schema2));
  if (schema.allOf)
    return schema.allOf.some((schema2) => hasElysiaMeta(meta, schema2));
  if (schema.not)
    return schema.not.some((schema2) => hasElysiaMeta(meta, schema2));
  if (schema.type === "object") {
    const properties = schema.properties;
    if (!properties)
      return false;
    for (const key of Object.keys(properties)) {
      const property = properties[key];
      if (property.type === "object") {
        if (hasElysiaMeta(meta, property))
          return true;
      } else if (property.anyOf) {
        for (let i = 0;i < property.anyOf.length; i++)
          if (hasElysiaMeta(meta, property.anyOf[i]))
            return true;
      }
      return schema.elysiaMeta === meta;
    }
    return false;
  }
  return schema.type === "array" && schema.items && !Array.isArray(schema.items) ? hasElysiaMeta(meta, schema.items) : false;
};
var hasProperty = (expectedProperty, _schema) => {
  if (!_schema)
    return false;
  const schema = _schema.schema ?? _schema;
  if (schema[Kind] === "Import" && _schema.References)
    return _schema.References().some((schema2) => hasProperty(expectedProperty, schema2));
  if (schema.anyOf)
    return schema.anyOf.some((s) => hasProperty(expectedProperty, s));
  if (schema.allOf)
    return schema.allOf.some((s) => hasProperty(expectedProperty, s));
  if (schema.oneOf)
    return schema.oneOf.some((s) => hasProperty(expectedProperty, s));
  if (schema.type === "object") {
    const properties = schema.properties;
    if (!properties)
      return false;
    for (const key of Object.keys(properties)) {
      const property = properties[key];
      if (expectedProperty in property)
        return true;
      if (property.type === "object") {
        if (hasProperty(expectedProperty, property))
          return true;
      } else if (property.anyOf) {
        for (let i = 0;i < property.anyOf.length; i++)
          if (hasProperty(expectedProperty, property.anyOf[i]))
            return true;
      }
    }
    return false;
  }
  return expectedProperty in schema;
};
var hasRef = (schema) => {
  if (!schema)
    return false;
  if (schema.oneOf) {
    for (let i = 0;i < schema.oneOf.length; i++)
      if (hasRef(schema.oneOf[i]))
        return true;
  }
  if (schema.anyOf) {
    for (let i = 0;i < schema.anyOf.length; i++)
      if (hasRef(schema.anyOf[i]))
        return true;
  }
  if (schema.oneOf) {
    for (let i = 0;i < schema.oneOf.length; i++)
      if (hasRef(schema.oneOf[i]))
        return true;
  }
  if (schema.allOf) {
    for (let i = 0;i < schema.allOf.length; i++)
      if (hasRef(schema.allOf[i]))
        return true;
  }
  if (schema.not && hasRef(schema.not))
    return true;
  if (schema.type === "object" && schema.properties) {
    const properties = schema.properties;
    for (const key of Object.keys(properties)) {
      const property = properties[key];
      if (hasRef(property) || property.type === "array" && property.items && hasRef(property.items))
        return true;
    }
  }
  return schema.type === "array" && schema.items && hasRef(schema.items) ? true : schema[Kind] === "Ref" && ("$ref" in schema);
};
var hasTransform = (schema) => {
  if (!schema)
    return false;
  if (schema.$ref && schema.$defs && schema.$ref in schema.$defs && hasTransform(schema.$defs[schema.$ref]))
    return true;
  if (schema.oneOf) {
    for (let i = 0;i < schema.oneOf.length; i++)
      if (hasTransform(schema.oneOf[i]))
        return true;
  }
  if (schema.anyOf) {
    for (let i = 0;i < schema.anyOf.length; i++)
      if (hasTransform(schema.anyOf[i]))
        return true;
  }
  if (schema.allOf) {
    for (let i = 0;i < schema.allOf.length; i++)
      if (hasTransform(schema.allOf[i]))
        return true;
  }
  if (schema.not && hasTransform(schema.not))
    return true;
  if (schema.type === "object" && schema.properties) {
    const properties = schema.properties;
    for (const key of Object.keys(properties)) {
      const property = properties[key];
      if (hasTransform(property) || property.type === "array" && property.items && hasTransform(property.items))
        return true;
    }
  }
  return schema.type === "array" && schema.items && hasTransform(schema.items) ? true : (TransformKind in schema);
};
var createCleaner = (schema) => (value) => {
  if (typeof value == "object")
    try {
      return Clean(schema, value);
    } catch {}
  return value;
};
var getSchemaValidator = (s, {
  models = {},
  dynamic = false,
  modules,
  normalize = false,
  additionalProperties = false,
  forceAdditionalProperties = false,
  coerce = false,
  additionalCoerce = [],
  validators,
  sanitize
} = {}) => {
  if (validators = validators?.filter((x) => x), !s) {
    if (!validators?.length)
      return;
    s = validators[0], validators = validators.slice(1);
  }
  let doesHaveRef;
  const replaceSchema = (schema2) => coerce ? replaceSchemaTypeFromManyOptions(schema2, [
    {
      from: t.Number(),
      to: (options) => t.Numeric(options),
      untilObjectFound: true
    },
    {
      from: t.Boolean(),
      to: (options) => t.BooleanString(options),
      untilObjectFound: true
    },
    ...Array.isArray(additionalCoerce) ? additionalCoerce : [additionalCoerce]
  ]) : replaceSchemaTypeFromManyOptions(schema2, additionalCoerce), mapSchema = (s2) => {
    if (s2 && typeof s2 != "string" && "~standard" in s2)
      return s2;
    if (!s2)
      return;
    let schema2;
    if (typeof s2 != "string")
      schema2 = s2;
    else if (schema2 = modules && s2 in modules.$defs ? modules.Import(s2) : models[s2], !schema2)
      return;
    const hasAdditionalCoerce = Array.isArray(additionalCoerce) ? additionalCoerce.length > 0 : !!additionalCoerce;
    if (Kind in schema2)
      if (schema2[Kind] === "Import")
        hasRef(schema2.$defs[schema2.$ref]) || (schema2 = schema2.$defs[schema2.$ref] ?? models[schema2.$ref], (coerce || hasAdditionalCoerce) && (schema2 = replaceSchema(schema2), ("$id" in schema2) && !schema2.$defs && (schema2.$id = `${schema2.$id}_coerced_${randomId()}`)));
      else if (hasRef(schema2)) {
        const id = randomId();
        schema2 = t.Module({
          ...modules?.$defs,
          [id]: schema2
        }).Import(id);
      } else
        (coerce || hasAdditionalCoerce) && (schema2 = replaceSchema(schema2));
    return schema2;
  };
  let schema = mapSchema(s), _validators = validators;
  if ("~standard" in schema || validators?.length && validators.some((x) => x && typeof x != "string" && ("~standard" in x))) {
    let Validate2 = function(value) {
      const v = mainCheck.validate(value);
      if (v instanceof Promise)
        return v.then((resolved) => {
          if (resolved.issues)
            return resolved;
          const values2 = [];
          return resolved && typeof resolved == "object" && values2.push(resolved.value), runCheckers2(value, 0, values2, resolved);
        });
      if (v.issues)
        return v;
      const values = [];
      return v && typeof v == "object" && values.push(v.value), runCheckers2(value, 0, values, v);
    }, Check22 = function(value) {
      const v = Validate2(value);
      return v instanceof Promise ? false : !v.issues;
    }, runCheckers2 = function(value, startIndex, values, lastV) {
      for (let i = startIndex;i < checkers.length; i++) {
        let v = checkers[i].validate(value);
        if (v instanceof Promise)
          return v.then((resolved) => {
            if (resolved.issues)
              return resolved;
            const nextValues = [...values];
            return resolved && typeof resolved == "object" && nextValues.push(resolved.value), runCheckers2(value, i + 1, nextValues, resolved);
          });
        if (v.issues)
          return v;
        v && typeof v == "object" && values.push(v.value), lastV = v;
      }
      return mergeValues2(values, lastV);
    }, mergeValues2 = function(values, lastV) {
      if (!values.length)
        return { value: lastV };
      if (values.length === 1)
        return { value: values[0] };
      if (values.length === 2)
        return { value: mergeDeep(values[0], values[1]) };
      let newValue = mergeDeep(values[0], values[1]);
      for (let i = 2;i < values.length; i++)
        newValue = mergeDeep(newValue, values[i]);
      return { value: newValue };
    };
    var Validate = Validate2, Check2 = Check22, runCheckers = runCheckers2, mergeValues = mergeValues2;
    const typeboxSubValidator = (schema2) => {
      let mirror;
      if (normalize === true || normalize === "exactMirror")
        try {
          mirror = createMirror(schema2, {
            TypeCompiler,
            sanitize: sanitize?.(),
            modules
          });
        } catch {
          console.warn("Failed to create exactMirror. Please report the following code to https://github.com/elysiajs/elysia/issues"), console.warn(schema2), mirror = createCleaner(schema2);
        }
      const vali = getSchemaValidator(schema2, {
        models,
        modules,
        dynamic,
        normalize,
        additionalProperties: true,
        forceAdditionalProperties: true,
        coerce,
        additionalCoerce
      });
      return vali.Decode = mirror, {
        validate: (v) => vali.Check(v) ? {
          value: mirror ? mirror(v) : v
        } : {
          issues: [...vali.Errors(v)]
        }
      };
    }, mainCheck = schema["~standard"] ? schema["~standard"] : typeboxSubValidator(schema);
    let checkers = [];
    if (validators?.length) {
      for (const validator2 of validators)
        if (validator2 && typeof validator2 != "string") {
          if (validator2?.["~standard"]) {
            checkers.push(validator2["~standard"]);
            continue;
          }
          if (Kind in validator2) {
            checkers.push(typeboxSubValidator(validator2));
            continue;
          }
        }
    }
    const validator = {
      provider: "standard",
      schema,
      references: "",
      checkFunc: () => {},
      code: "",
      Check: Check22,
      Validate: Validate2,
      Errors: (value) => Validate2(value)?.then?.((x) => x?.issues),
      Code: () => "",
      Decode: Validate2,
      Encode: (value) => value,
      hasAdditionalProperties: false,
      hasDefault: false,
      isOptional: false,
      hasTransform: false,
      hasRef: false
    };
    return validator.parse = (v) => {
      try {
        return validator.Decode(validator.Clean?.(v) ?? v);
      } catch {
        throw [...validator.Errors(v)].map(mapValueError);
      }
    }, validator.safeParse = (v) => {
      try {
        return {
          success: true,
          data: validator.Decode(validator.Clean?.(v) ?? v),
          error: null
        };
      } catch {
        const errors = [...compiled.Errors(v)].map(mapValueError);
        return {
          success: false,
          data: null,
          error: errors[0]?.summary,
          errors
        };
      }
    }, validator;
  } else if (validators?.length) {
    let hasAdditional = false;
    const validators2 = _validators, { schema: mergedObjectSchema, notObjects } = mergeObjectSchemas([
      schema,
      ...validators2.map(mapSchema)
    ]);
    notObjects && (schema = t.Intersect([
      ...mergedObjectSchema ? [mergedObjectSchema] : [],
      ...notObjects.map((x) => {
        const schema2 = mapSchema(x);
        return schema2.type === "object" && "additionalProperties" in schema2 && (!hasAdditional && schema2.additionalProperties === false && (hasAdditional = true), delete schema2.additionalProperties), schema2;
      })
    ]), schema.type === "object" && hasAdditional && (schema.additionalProperties = false));
  } else
    schema.type === "object" && (!("additionalProperties" in schema) || forceAdditionalProperties) ? schema.additionalProperties = additionalProperties : schema = replaceSchemaTypeFromManyOptions(schema, {
      onlyFirst: "object",
      from: t.Object({}),
      to(schema2) {
        return !schema2.properties || "additionalProperties" in schema2 ? schema2 : t.Object(schema2.properties, {
          ...schema2,
          additionalProperties: false
        });
      }
    });
  if (dynamic)
    if (Kind in schema) {
      const validator = {
        provider: "typebox",
        schema,
        references: "",
        checkFunc: () => {},
        code: "",
        Check: (value) => Check(schema, value),
        Errors: (value) => Errors(schema, value),
        Code: () => "",
        Clean: createCleaner(schema),
        Decode: (value) => Decode(schema, value),
        Encode: (value) => Encode(schema, value),
        get hasAdditionalProperties() {
          return "~hasAdditionalProperties" in this ? this["~hasAdditionalProperties"] : this["~hasAdditionalProperties"] = hasAdditionalProperties(schema);
        },
        get hasDefault() {
          return "~hasDefault" in this ? this["~hasDefault"] : this["~hasDefault"] = hasProperty("default", schema);
        },
        get isOptional() {
          return "~isOptional" in this ? this["~isOptional"] : this["~isOptional"] = isOptional(schema);
        },
        get hasTransform() {
          return "~hasTransform" in this ? this["~hasTransform"] : this["~hasTransform"] = hasTransform(schema);
        },
        "~hasRef": doesHaveRef,
        get hasRef() {
          return "~hasRef" in this ? this["~hasRef"] : this["~hasRef"] = hasTransform(schema);
        }
      };
      if (schema.config && (validator.config = schema.config, validator?.schema?.config && delete validator.schema.config), normalize && schema.additionalProperties === false)
        if (normalize === true || normalize === "exactMirror")
          try {
            validator.Clean = createMirror(schema, {
              TypeCompiler,
              sanitize: sanitize?.(),
              modules
            });
          } catch {
            console.warn("Failed to create exactMirror. Please report the following code to https://github.com/elysiajs/elysia/issues"), console.warn(schema), validator.Clean = createCleaner(schema);
          }
        else
          validator.Clean = createCleaner(schema);
      return validator.parse = (v) => {
        try {
          return validator.Decode(validator.Clean?.(v) ?? v);
        } catch {
          throw [...validator.Errors(v)].map(mapValueError);
        }
      }, validator.safeParse = (v) => {
        try {
          return {
            success: true,
            data: validator.Decode(validator.Clean?.(v) ?? v),
            error: null
          };
        } catch {
          const errors = [...compiled.Errors(v)].map(mapValueError);
          return {
            success: false,
            data: null,
            error: errors[0]?.summary,
            errors
          };
        }
      }, validator;
    } else {
      const validator = {
        provider: "standard",
        schema,
        references: "",
        checkFunc: () => {},
        code: "",
        Check: (v) => schema["~standard"].validate(v),
        Errors(value) {
          const response = schema["~standard"].validate(value);
          if (response instanceof Promise)
            throw Error("Async validation is not supported in non-dynamic schema");
          return response.issues;
        },
        Code: () => "",
        Decode(value) {
          const response = schema["~standard"].validate(value);
          if (response instanceof Promise)
            throw Error("Async validation is not supported in non-dynamic schema");
          return response;
        },
        Encode: (value) => value,
        hasAdditionalProperties: false,
        hasDefault: false,
        isOptional: false,
        hasTransform: false,
        hasRef: false
      };
      return validator.parse = (v) => {
        try {
          return validator.Decode(validator.Clean?.(v) ?? v);
        } catch {
          throw [...validator.Errors(v)].map(mapValueError);
        }
      }, validator.safeParse = (v) => {
        try {
          return {
            success: true,
            data: validator.Decode(validator.Clean?.(v) ?? v),
            error: null
          };
        } catch {
          const errors = [...compiled.Errors(v)].map(mapValueError);
          return {
            success: false,
            data: null,
            error: errors[0]?.summary,
            errors
          };
        }
      }, validator;
    }
  let compiled;
  if (Kind in schema)
    if (compiled = TypeCompiler.Compile(schema, Object.values(models).filter((x) => (Kind in x))), compiled.provider = "typebox", schema.config && (compiled.config = schema.config, compiled?.schema?.config && delete compiled.schema.config), normalize === true || normalize === "exactMirror")
      try {
        compiled.Clean = createMirror(schema, {
          TypeCompiler,
          sanitize: sanitize?.(),
          modules
        });
      } catch {
        console.warn("Failed to create exactMirror. Please report the following code to https://github.com/elysiajs/elysia/issues"), console.dir(schema, {
          depth: null
        }), compiled.Clean = createCleaner(schema);
      }
    else
      normalize === "typebox" && (compiled.Clean = createCleaner(schema));
  else
    compiled = {
      provider: "standard",
      schema,
      references: "",
      checkFunc(value) {
        const response = schema["~standard"].validate(value);
        if (response instanceof Promise)
          throw Error("Async validation is not supported in non-dynamic schema");
        return response;
      },
      code: "",
      Check: (v) => schema["~standard"].validate(v),
      Errors(value) {
        const response = schema["~standard"].validate(value);
        if (response instanceof Promise)
          throw Error("Async validation is not supported in non-dynamic schema");
        return response.issues;
      },
      Code: () => "",
      Decode(value) {
        const response = schema["~standard"].validate(value);
        if (response instanceof Promise)
          throw Error("Async validation is not supported in non-dynamic schema");
        return response;
      },
      Encode: (value) => value,
      hasAdditionalProperties: false,
      hasDefault: false,
      isOptional: false,
      hasTransform: false,
      hasRef: false
    };
  return compiled.parse = (v) => {
    try {
      return compiled.Decode(compiled.Clean?.(v) ?? v);
    } catch {
      throw [...compiled.Errors(v)].map(mapValueError);
    }
  }, compiled.safeParse = (v) => {
    try {
      return {
        success: true,
        data: compiled.Decode(compiled.Clean?.(v) ?? v),
        error: null
      };
    } catch {
      const errors = [...compiled.Errors(v)].map(mapValueError);
      return {
        success: false,
        data: null,
        error: errors[0]?.summary,
        errors
      };
    }
  }, Kind in schema && Object.assign(compiled, {
    get hasAdditionalProperties() {
      return "~hasAdditionalProperties" in this ? this["~hasAdditionalProperties"] : this["~hasAdditionalProperties"] = hasAdditionalProperties(compiled);
    },
    get hasDefault() {
      return "~hasDefault" in this ? this["~hasDefault"] : this["~hasDefault"] = hasProperty("default", compiled);
    },
    get isOptional() {
      return "~isOptional" in this ? this["~isOptional"] : this["~isOptional"] = isOptional(compiled);
    },
    get hasTransform() {
      return "~hasTransform" in this ? this["~hasTransform"] : this["~hasTransform"] = hasTransform(schema);
    },
    get hasRef() {
      return "~hasRef" in this ? this["~hasRef"] : this["~hasRef"] = hasRef(schema);
    },
    "~hasRef": doesHaveRef
  }), compiled;
};
var isUnion = (schema) => schema[Kind] === "Union" || !schema.schema && !!schema.anyOf;
var getSchemaProperties = (schema) => {
  if (!schema)
    return;
  if (schema.properties)
    return schema.properties;
  const members = schema.allOf ?? schema.anyOf ?? schema.oneOf;
  if (members) {
    const result = {};
    for (const member of members) {
      const props = getSchemaProperties(member);
      props && Object.assign(result, props);
    }
    return Object.keys(result).length > 0 ? result : undefined;
  }
};
var mergeObjectSchemas = (schemas) => {
  if (schemas.length === 0)
    return {
      schema: undefined,
      notObjects: []
    };
  if (schemas.length === 1)
    return schemas[0].type === "object" ? {
      schema: schemas[0],
      notObjects: []
    } : {
      schema: undefined,
      notObjects: schemas
    };
  let newSchema;
  const notObjects = [];
  let additionalPropertiesIsTrue = false, additionalPropertiesIsFalse = false;
  for (const schema of schemas) {
    if (schema.type !== "object") {
      notObjects.push(schema);
      continue;
    }
    if ("additionalProperties" in schema && (schema.additionalProperties === true ? additionalPropertiesIsTrue = true : schema.additionalProperties === false && (additionalPropertiesIsFalse = true)), !newSchema) {
      newSchema = schema;
      continue;
    }
    newSchema = {
      ...newSchema,
      ...schema,
      properties: {
        ...newSchema.properties,
        ...schema.properties
      },
      required: [
        ...newSchema?.required ?? [],
        ...schema.required ?? []
      ]
    };
  }
  return newSchema && (newSchema.required && (newSchema.required = [...new Set(newSchema.required)]), additionalPropertiesIsFalse ? newSchema.additionalProperties = false : additionalPropertiesIsTrue && (newSchema.additionalProperties = true)), {
    schema: newSchema,
    notObjects
  };
};
var getResponseSchemaValidator = (s, {
  models = {},
  modules,
  dynamic = false,
  normalize = false,
  additionalProperties = false,
  validators = [],
  sanitize
}) => {
  if (validators = validators.filter((x) => x), !s) {
    if (!validators?.length)
      return;
    s = validators[0], validators = validators.slice(1);
  }
  let maybeSchemaOrRecord;
  if (typeof s != "string")
    maybeSchemaOrRecord = s;
  else if (maybeSchemaOrRecord = modules && s in modules.$defs ? modules.Import(s) : models[s], !maybeSchemaOrRecord)
    return;
  if (!maybeSchemaOrRecord)
    return;
  if (Kind in maybeSchemaOrRecord || "~standard" in maybeSchemaOrRecord)
    return {
      200: getSchemaValidator(maybeSchemaOrRecord, {
        modules,
        models,
        additionalProperties,
        dynamic,
        normalize,
        coerce: false,
        additionalCoerce: [],
        validators: validators.map((x) => x[200]),
        sanitize
      })
    };
  const record = {};
  return Object.keys(maybeSchemaOrRecord).forEach((status) => {
    if (isNaN(+status))
      return;
    const maybeNameOrSchema = maybeSchemaOrRecord[+status];
    if (typeof maybeNameOrSchema == "string") {
      if (maybeNameOrSchema in models) {
        const schema = models[maybeNameOrSchema];
        if (!schema)
          return;
        record[+status] = Kind in schema || "~standard" in schema ? getSchemaValidator(schema, {
          modules,
          models,
          additionalProperties,
          dynamic,
          normalize,
          coerce: false,
          additionalCoerce: [],
          validators: validators.map((x) => x[+status]),
          sanitize
        }) : schema;
      }
      return;
    }
    record[+status] = Kind in maybeNameOrSchema || "~standard" in maybeNameOrSchema ? getSchemaValidator(maybeNameOrSchema, {
      modules,
      models,
      additionalProperties,
      dynamic,
      normalize,
      coerce: false,
      additionalCoerce: [],
      validators: validators.map((x) => x[+status]),
      sanitize
    }) : maybeNameOrSchema;
  }), record;
};
var getCookieValidator = ({
  validator,
  modules,
  defaultConfig = {},
  config,
  dynamic,
  normalize = false,
  models,
  validators,
  sanitize
}) => {
  let cookieValidator = validator?.provider ? validator : getSchemaValidator(validator, {
    modules,
    dynamic,
    models,
    normalize,
    additionalProperties: true,
    coerce: true,
    additionalCoerce: stringToStructureCoercions(),
    validators,
    sanitize
  });
  return cookieValidator ? cookieValidator.config = mergeCookie(cookieValidator.config, config) : (cookieValidator = getSchemaValidator(t.Cookie(t.Any()), {
    modules,
    dynamic,
    models,
    additionalProperties: true,
    validators,
    sanitize
  }), cookieValidator.config = defaultConfig), cookieValidator;
};
var unwrapImportSchema = (schema) => schema && schema[Kind] === "Import" && schema.$defs[schema.$ref][Kind] === "Object" ? schema.$defs[schema.$ref] : schema;

// node_modules/elysia/dist/compose.mjs
var allocateIf = (value, condition) => condition ? value : "";
var defaultParsers = [
  "json",
  "text",
  "urlencoded",
  "arrayBuffer",
  "formdata",
  "application/json",
  "text/plain",
  "application/x-www-form-urlencoded",
  "application/octet-stream",
  "multipart/form-data"
];
var createReport = ({
  context = "c",
  trace = [],
  addFn
}) => {
  if (!trace.length)
    return () => ({
      resolveChild() {
        return () => {};
      },
      resolve() {}
    });
  for (let i = 0;i < trace.length; i++)
    addFn(`let report${i},reportChild${i},reportErr${i},reportErrChild${i};let trace${i}=${context}[ELYSIA_TRACE]?.[${i}]??trace[${i}](${context});
`);
  return (event, {
    name,
    total = 0,
    alias
  } = {}) => {
    name || (name = "anonymous");
    const reporter = event === "error" ? "reportErr" : "report";
    for (let i = 0;i < trace.length; i++)
      addFn(`${alias ? "const " : ""}${alias ?? reporter}${i}=trace${i}.${event}({id,event:'${event}',name:'${name}',begin:performance.now(),total:${total}})
`), alias && addFn(`${reporter}${i}=${alias}${i}
`);
    return {
      resolve() {
        for (let i = 0;i < trace.length; i++)
          addFn(`${alias ?? reporter}${i}.resolve()
`);
      },
      resolveChild(name2) {
        for (let i = 0;i < trace.length; i++)
          addFn(`${reporter}Child${i}=${reporter}${i}.resolveChild?.shift()?.({id,event:'${event}',name:'${name2}',begin:performance.now()})
`);
        return (binding) => {
          for (let i = 0;i < trace.length; i++)
            addFn(binding ? `if(${binding} instanceof Error){${reporter}Child${i}?.(${binding}) }else{${reporter}Child${i}?.()}` : `${reporter}Child${i}?.()
`);
        };
      }
    };
  };
};
var composeCleaner = ({
  schema,
  name,
  type,
  typeAlias = type,
  normalize,
  ignoreTryCatch = false
}) => !normalize || !schema.Clean ? "" : normalize === true || normalize === "exactMirror" ? ignoreTryCatch ? `${name}=validator.${typeAlias}.Clean(${name})
` : `try{${name}=validator.${typeAlias}.Clean(${name})
}catch{}` : normalize === "typebox" ? `${name}=validator.${typeAlias}.Clean(${name})
` : "";
var composeValidationFactory = ({
  injectResponse = "",
  normalize = false,
  validator,
  encodeSchema = false,
  isStaticResponse = false,
  hasSanitize = false,
  allowUnsafeValidationDetails = false
}) => ({
  validate: (type, value = `c.${type}`, error) => `c.set.status=422;throw new ValidationError('${type}',validator.${type},${value},${allowUnsafeValidationDetails}${error ? "," + error : ""})`,
  response: (name = "r") => {
    if (isStaticResponse || !validator.response)
      return "";
    let code = injectResponse + `
`;
    code += `if(${name} instanceof ElysiaCustomStatusResponse){c.set.status=${name}.code
${name}=${name}.response}if(${name} instanceof Response === false && typeof ${name}?.next !== 'function' && !(${name} instanceof ReadableStream))switch(c.set.status){`;
    for (const [status2, value] of Object.entries(validator.response)) {
      if (code += `
case ${status2}:
`, value.provider === "standard") {
        code += `let vare${status2}=validator.response[${status2}].Validate(${name})
if(vare${status2} instanceof Promise)vare${status2}=await vare${status2}
if(vare${status2}.issues)throw new ValidationError('response',validator.response[${status2}],${name},${allowUnsafeValidationDetails},vare${status2}.issues)
${name}=vare${status2}.value
c.set.status=${status2}
break
`;
        continue;
      }
      let noValidate = value.schema?.noValidate === true;
      if (!noValidate && value.schema?.$ref && value.schema?.$defs) {
        const refKey = value.schema.$ref, defKey = typeof refKey == "string" && refKey.includes("/") ? refKey.split("/").pop() : refKey;
        value.schema.$defs[defKey]?.noValidate === true && (noValidate = true);
      }
      const appliedCleaner = noValidate || hasSanitize, clean = ({ ignoreTryCatch = false } = {}) => composeCleaner({
        name,
        schema: value,
        type: "response",
        typeAlias: `response[${status2}]`,
        normalize,
        ignoreTryCatch
      });
      appliedCleaner && (code += clean());
      const applyErrorCleaner = !appliedCleaner && normalize && !noValidate;
      encodeSchema && value.hasTransform && !noValidate ? (code += `try{${name}=validator.response[${status2}].Encode(${name})
`, appliedCleaner || (code += clean({ ignoreTryCatch: true })), code += `c.set.status=${status2}}catch{` + (applyErrorCleaner ? `try{
` + clean({ ignoreTryCatch: true }) + `${name}=validator.response[${status2}].Encode(${name})
}catch{throw new ValidationError('response',validator.response[${status2}],${name},${allowUnsafeValidationDetails})}` : `throw new ValidationError('response',validator.response[${status2}],${name},${allowUnsafeValidationDetails})`) + "}") : (appliedCleaner || (code += clean()), noValidate || (code += `if(validator.response[${status2}].Check(${name})===false)throw new ValidationError('response',validator.response[${status2}],${name},${allowUnsafeValidationDetails})
c.set.status=${status2}
`)), code += `break
`;
    }
    return code + "}";
  }
});
var isAsyncName = (v) => (v?.fn ?? v).constructor.name === "AsyncFunction";
var matchResponseClone = /=>\s?response\.clone\(/;
var matchFnReturn = /(?:return|=>)\s?\S+\(|a(?:sync|wait)/;
var isAsync = (v) => {
  const isObject = typeof v == "object";
  if (isObject && v.isAsync !== undefined)
    return v.isAsync;
  const fn = isObject ? v.fn : v;
  if (fn.constructor.name === "AsyncFunction" || fn.constructor.name === "AsyncGeneratorFunction")
    return true;
  const literal = fn.toString();
  if (matchResponseClone.test(literal))
    return isObject && (v.isAsync = false), false;
  const result = matchFnReturn.test(literal);
  return isObject && (v.isAsync = result), result;
};
var hasReturn = (v) => {
  const isObject = typeof v == "object";
  if (isObject && v.hasReturn !== undefined)
    return v.hasReturn;
  const fnLiteral = isObject ? v.fn.toString() : v.toString(), parenthesisEnd = fnLiteral.indexOf(")"), arrowIndex = fnLiteral.indexOf("=>", parenthesisEnd);
  if (arrowIndex !== -1) {
    let afterArrow = arrowIndex + 2, charCode;
    for (;afterArrow < fnLiteral.length && ((charCode = fnLiteral.charCodeAt(afterArrow)) === 32 || charCode === 9 || charCode === 10 || charCode === 13); )
      afterArrow++;
    if (afterArrow < fnLiteral.length && fnLiteral.charCodeAt(afterArrow) !== 123)
      return isObject && (v.hasReturn = true), true;
  }
  const result = fnLiteral.includes("return");
  return isObject && (v.hasReturn = result), result;
};
var isGenerator = (v) => {
  const fn = v?.fn ?? v;
  return fn.constructor.name === "AsyncGeneratorFunction" || fn.constructor.name === "GeneratorFunction";
};
var coerceTransformDecodeError = (fnLiteral, type, allowUnsafeValidationDetails = false, value = `c.${type}`) => `try{${fnLiteral}}catch(error){if(error.constructor.name === 'TransformDecodeError'){c.set.status=422
throw error.error ?? new ValidationError('${type}',validator.${type},${value},${allowUnsafeValidationDetails})}}`;
var setImmediateFn = hasSetImmediate ? "setImmediate" : "Promise.resolve().then";
var composeHandler = ({
  app,
  path,
  method,
  hooks,
  validator,
  handler,
  allowMeta = false,
  inference
}) => {
  const adapter = app["~adapter"].composeHandler, adapterHandler = app["~adapter"].handler, isHandleFn = typeof handler == "function";
  if (!isHandleFn) {
    handler = adapterHandler.mapResponse(handler, {
      headers: app.setHeaders ?? {}
    });
    const isResponse = handler instanceof Response || handler?.constructor?.name === "Response" && typeof handler?.clone == "function";
    if (hooks.parse?.length && hooks.transform?.length && hooks.beforeHandle?.length && hooks.afterHandle?.length)
      return isResponse ? Function("a", `"use strict";
return function(){return a.clone()}`)(handler) : Function("a", `"use strict";
return function(){return a}`)(handler);
    if (isResponse) {
      const response = handler;
      handler = () => response.clone();
    }
  }
  const handle = isHandleFn ? "handler(c)" : "handler", hasTrace = !!hooks.trace?.length;
  let fnLiteral = "";
  if (inference = sucrose(Object.assign({ handler }, hooks), inference, app.config.sucrose), adapter.declare) {
    const literal = adapter.declare(inference);
    literal && (fnLiteral += literal);
  }
  inference.server && (fnLiteral += `Object.defineProperty(c,'server',{get:function(){return getServer()}})
`), validator.createBody?.(), validator.createQuery?.(), validator.createHeaders?.(), validator.createParams?.(), validator.createCookie?.(), validator.createResponse?.();
  const hasValidation = !!validator.body || !!validator.headers || !!validator.params || !!validator.query || !!validator.cookie || !!validator.response, hasQuery = inference.query || !!validator.query, requestNoBody = hooks.parse?.length === 1 && hooks.parse[0].fn === "none", hasBody = method !== "" && method !== "GET" && method !== "HEAD" && (inference.body || !!validator.body || !!hooks.parse?.length) && !requestNoBody, defaultHeaders = app.setHeaders, hasDefaultHeaders = defaultHeaders && !!Object.keys(defaultHeaders).length, hasHeaders = inference.headers || !!validator.headers || adapter.preferWebstandardHeaders !== true && inference.body, hasCookie = inference.cookie || !!validator.cookie, cookieMeta = validator.cookie?.config ? mergeCookie(validator?.cookie?.config, app.config.cookie) : app.config.cookie;
  let _encodeCookie = "";
  const encodeCookie = () => {
    if (_encodeCookie)
      return _encodeCookie;
    if (cookieMeta?.sign) {
      if (cookieMeta.secrets === "")
        throw new Error(`cookie secret can't be an empty string at (${method}) ${path}`, {
          cause: `(${method}) ${path}`
        });
      if (!cookieMeta.secrets)
        throw new Error(`cookie secret must be defined (${method}) ${path}`, {
          cause: `(${method}) ${path}`
        });
      const secret = cookieMeta.secrets ? typeof cookieMeta.secrets == "string" ? cookieMeta.secrets : cookieMeta.secrets[0] : undefined;
      if (_encodeCookie += `const _setCookie = c.set.cookie
if(_setCookie){`, cookieMeta.sign === true)
        _encodeCookie += `for(const [key, cookie] of Object.entries(_setCookie)){c.set.cookie[key].value=await signCookie(cookie.value,${secret ? JSON.stringify(secret) : "undefined"})}`;
      else {
        typeof cookieMeta.sign == "string" && (cookieMeta.sign = [cookieMeta.sign]);
        for (const name of cookieMeta.sign)
          _encodeCookie += `if(_setCookie[${JSON.stringify(name)}]?.value)c.set.cookie[${JSON.stringify(name)}].value=await signCookie(_setCookie[${JSON.stringify(name)}].value,${secret ? JSON.stringify(secret) : "undefined"})
`;
      }
      _encodeCookie += `}
`;
    }
    return _encodeCookie;
  }, normalize = app.config.normalize, encodeSchema = app.config.encodeSchema, allowUnsafeValidationDetails = app.config.allowUnsafeValidationDetails, validation = composeValidationFactory({
    normalize,
    validator,
    encodeSchema,
    isStaticResponse: handler instanceof Response,
    hasSanitize: !!app.config.sanitize,
    allowUnsafeValidationDetails
  });
  hasHeaders && (fnLiteral += adapter.headers), hasTrace && (fnLiteral += `const id=c[ELYSIA_REQUEST_ID]
`);
  const report = createReport({
    trace: hooks.trace,
    addFn: (word) => {
      fnLiteral += word;
    }
  });
  if (fnLiteral += "try{", hasCookie) {
    const get = (name, defaultValue) => {
      const value = cookieMeta?.[name] ?? defaultValue;
      return value === undefined ? "" : value ? typeof value == "string" ? `${name}:${JSON.stringify(value)},` : value instanceof Date ? `${name}: new Date(${value.getTime()}),` : `${name}:${value},` : typeof defaultValue == "string" ? `${name}:"${defaultValue}",` : `${name}:${defaultValue},`;
    }, options = cookieMeta ? `{secrets:${cookieMeta.secrets !== undefined && cookieMeta.secrets !== null ? typeof cookieMeta.secrets == "string" ? JSON.stringify(cookieMeta.secrets) : "[" + cookieMeta.secrets.map((x) => JSON.stringify(x)).join(",") + "]" : "undefined"},sign:${cookieMeta.sign === true ? true : cookieMeta.sign !== undefined ? typeof cookieMeta.sign == "string" ? JSON.stringify(cookieMeta.sign) : "[" + cookieMeta.sign.map((x) => JSON.stringify(x)).join(",") + "]" : "undefined"},` + get("domain") + get("expires") + get("httpOnly") + get("maxAge") + get("path", "/") + get("priority") + get("sameSite") + get("secure") + "}" : "undefined";
    hasHeaders ? fnLiteral += `
c.cookie=await parseCookie(c.set,c.headers.cookie,${options})
` : fnLiteral += `
c.cookie=await parseCookie(c.set,c.request.headers.get('cookie'),${options})
`;
  }
  if (hasQuery) {
    let arrayProperties = {}, objectProperties = {}, hasArrayProperty = false, hasObjectProperty = false;
    if (validator.query?.schema) {
      const schema = unwrapImportSchema(validator.query?.schema), properties = getSchemaProperties(schema);
      if (properties)
        for (const [key, value] of Object.entries(properties))
          hasElysiaMeta("ArrayQuery", value) && (arrayProperties[key] = true, hasArrayProperty = true), hasElysiaMeta("ObjectString", value) && (objectProperties[key] = true, hasObjectProperty = true);
    }
    fnLiteral += `if(c.qi===-1){c.query=Object.create(null)}else{c.query=parseQueryFromURL(c.url,c.qi+1${hasArrayProperty ? "," + JSON.stringify(arrayProperties) : hasObjectProperty ? ",undefined" : ""}${hasObjectProperty ? "," + JSON.stringify(objectProperties) : ""})}`;
  }
  const isAsyncHandler = typeof handler == "function" && isAsync(handler), saveResponse = hasTrace || hooks.afterResponse?.length ? "c.response=c.responseValue= " : "", responseKeys = Object.keys(validator.response ?? {}), hasMultipleResponses = responseKeys.length > 1, hasSingle200 = responseKeys.length === 0 || responseKeys.length === 1 && responseKeys[0] === "200", maybeAsync = hasCookie || hasBody || isAsyncHandler || !!hooks.parse?.length || !!hooks.afterHandle?.some(isAsync) || !!hooks.beforeHandle?.some(isAsync) || !!hooks.transform?.some(isAsync) || !!hooks.mapResponse?.some(isAsync) || validator.body?.provider === "standard" || validator.headers?.provider === "standard" || validator.query?.provider === "standard" || validator.params?.provider === "standard" || validator.cookie?.provider === "standard" || Object.values(validator.response ?? {}).find((x) => x.provider === "standard"), maybeStream = (typeof handler == "function" ? isGenerator(handler) : false) || !!hooks.beforeHandle?.some(isGenerator) || !!hooks.afterHandle?.some(isGenerator) || !!hooks.transform?.some(isGenerator), hasSet = inference.cookie || inference.set || hasHeaders || hasTrace || hasMultipleResponses || !hasSingle200 || isHandleFn && hasDefaultHeaders || maybeStream;
  let _afterResponse;
  const afterResponse = (hasStream = true) => {
    if (_afterResponse !== undefined)
      return _afterResponse;
    if (!hooks.afterResponse?.length && !hasTrace)
      return "";
    let afterResponse2 = "";
    afterResponse2 += `
${setImmediateFn}(async()=>{if(c.responseValue){if(c.responseValue instanceof ElysiaCustomStatusResponse) c.set.status=c.responseValue.code
` + (hasStream ? `if(typeof afterHandlerStreamListener!=='undefined')for await(const v of afterHandlerStreamListener){}
` : "") + `}
`;
    const reporter = createReport({
      trace: hooks.trace,
      addFn: (word) => {
        afterResponse2 += word;
      }
    })("afterResponse", {
      total: hooks.afterResponse?.length
    });
    if (hooks.afterResponse?.length && hooks.afterResponse)
      for (let i = 0;i < hooks.afterResponse.length; i++) {
        const endUnit = reporter.resolveChild(hooks.afterResponse[i].fn.name), prefix = isAsync(hooks.afterResponse[i]) ? "await " : "";
        afterResponse2 += `
${prefix}e.afterResponse[${i}](c)
`, endUnit();
      }
    return reporter.resolve(), afterResponse2 += `})
`, _afterResponse = afterResponse2;
  }, mapResponse = (r = "r") => {
    const after = afterResponse(), response = `${maybeStream && maybeAsync ? "await " : ""}${hasSet ? "mapResponse" : "mapCompactResponse"}(${saveResponse}${r}${hasSet ? ",c.set" : ""}${mapResponseContext})
`;
    return after ? `const _res=${response}` + after + "return _res" : `return ${response}`;
  }, mapResponseContext = adapter.mapResponseContext ? `,${adapter.mapResponseContext}` : "";
  (hasTrace || inference.route) && (fnLiteral += `c.route=\`${path}\`
`), (hasTrace || hooks.afterResponse?.length) && (fnLiteral += `let afterHandlerStreamListener
`);
  const parseReporter = report("parse", {
    total: hooks.parse?.length
  });
  if (hasBody) {
    const hasBodyInference = !!hooks.parse?.length || inference.body || validator.body;
    adapter.parser.declare && (fnLiteral += adapter.parser.declare), fnLiteral += `
try{`;
    let parser = typeof hooks.parse == "string" ? hooks.parse : Array.isArray(hooks.parse) && hooks.parse.length === 1 ? typeof hooks.parse[0] == "string" ? hooks.parse[0] : typeof hooks.parse[0].fn == "string" ? hooks.parse[0].fn : undefined : undefined;
    if (!parser && validator.body && !hooks.parse?.length) {
      const schema = validator.body.schema;
      schema && schema.anyOf && schema[Kind] === "Union" && schema.anyOf?.length === 2 && schema.anyOf?.find((x) => x[Kind] === "ElysiaForm") && (parser = "formdata");
    }
    if (parser && defaultParsers.includes(parser)) {
      const reporter = report("parse", {
        total: hooks.parse?.length
      }), isOptionalBody = !!validator.body?.isOptional;
      switch (parser) {
        case "json":
        case "application/json":
          fnLiteral += adapter.parser.json(isOptionalBody);
          break;
        case "text":
        case "text/plain":
          fnLiteral += adapter.parser.text(isOptionalBody);
          break;
        case "urlencoded":
        case "application/x-www-form-urlencoded":
          fnLiteral += adapter.parser.urlencoded(isOptionalBody);
          break;
        case "arrayBuffer":
        case "application/octet-stream":
          fnLiteral += adapter.parser.arrayBuffer(isOptionalBody);
          break;
        case "formdata":
        case "multipart/form-data":
          fnLiteral += adapter.parser.formData(isOptionalBody);
          break;
        default:
          parser in app["~parser"] && (fnLiteral += hasHeaders ? "let contentType = c.headers['content-type']" : "let contentType = c.request.headers.get('content-type')", fnLiteral += `
if(contentType){const index=contentType.indexOf(';')
if(index!==-1)contentType=contentType.substring(0,index)}
else{contentType=''}c.contentType=contentType
let result=parser['${parser}'](c, contentType)
if(result instanceof Promise)result=await result
if(result instanceof ElysiaCustomStatusResponse)throw result
if(result!==undefined)c.body=result
delete c.contentType
`);
          break;
      }
      reporter.resolve();
    } else if (hasBodyInference) {
      fnLiteral += `
`, fnLiteral += `let contentType
if(c.request.body)`, fnLiteral += hasHeaders ? `contentType=c.headers['content-type']
` : `contentType=c.request.headers.get('content-type')
`;
      let hasDefaultParser = false;
      if (hooks.parse?.length)
        fnLiteral += `if(contentType){
const index=contentType.indexOf(';')

if(index!==-1)contentType=contentType.substring(0,index)}else{contentType=''}let used=false
c.contentType=contentType
`;
      else {
        hasDefaultParser = true;
        const isOptionalBody = !!validator.body?.isOptional;
        fnLiteral += `if(contentType)switch(contentType.charCodeAt(12)){
case 106:` + adapter.parser.json(isOptionalBody) + `break
case 120:` + adapter.parser.urlencoded(isOptionalBody) + `break
case 111:` + adapter.parser.arrayBuffer(isOptionalBody) + `break
case 114:` + adapter.parser.formData(isOptionalBody) + `break
default:if(contentType.charCodeAt(0)===116){` + adapter.parser.text(isOptionalBody) + `}break
}`;
      }
      const reporter = report("parse", {
        total: hooks.parse?.length
      });
      if (hooks.parse)
        for (let i = 0;i < hooks.parse.length; i++) {
          const name = `bo${i}`;
          if (i !== 0 && (fnLiteral += `
if(!used){`), typeof hooks.parse[i].fn == "string") {
            const endUnit = reporter.resolveChild(hooks.parse[i].fn), isOptionalBody = !!validator.body?.isOptional;
            switch (hooks.parse[i].fn) {
              case "json":
              case "application/json":
                hasDefaultParser = true, fnLiteral += adapter.parser.json(isOptionalBody);
                break;
              case "text":
              case "text/plain":
                hasDefaultParser = true, fnLiteral += adapter.parser.text(isOptionalBody);
                break;
              case "urlencoded":
              case "application/x-www-form-urlencoded":
                hasDefaultParser = true, fnLiteral += adapter.parser.urlencoded(isOptionalBody);
                break;
              case "arrayBuffer":
              case "application/octet-stream":
                hasDefaultParser = true, fnLiteral += adapter.parser.arrayBuffer(isOptionalBody);
                break;
              case "formdata":
              case "multipart/form-data":
                hasDefaultParser = true, fnLiteral += adapter.parser.formData(isOptionalBody);
                break;
              default:
                fnLiteral += `let ${name}=parser['${hooks.parse[i].fn}'](c,contentType)
if(${name} instanceof Promise)${name}=await ${name}
if(${name}!==undefined){c.body=${name};used=true;}
`;
            }
            endUnit();
          } else {
            const endUnit = reporter.resolveChild(hooks.parse[i].fn.name);
            fnLiteral += `let ${name}=e.parse[${i}]
${name}=${name}(c,contentType)
if(${name} instanceof Promise)${name}=await ${name}
if(${name}!==undefined){c.body=${name};used=true}`, endUnit();
          }
          if (i !== 0 && (fnLiteral += "}"), hasDefaultParser)
            break;
        }
      if (reporter.resolve(), !hasDefaultParser) {
        const isOptionalBody = !!validator.body?.isOptional;
        hooks.parse?.length && (fnLiteral += `
if(!used){
`), fnLiteral += `switch(contentType){case 'application/json':
` + adapter.parser.json(isOptionalBody) + `break
case 'text/plain':` + adapter.parser.text(isOptionalBody) + `break
case 'application/x-www-form-urlencoded':` + adapter.parser.urlencoded(isOptionalBody) + `break
case 'application/octet-stream':` + adapter.parser.arrayBuffer(isOptionalBody) + `break
case 'multipart/form-data':` + adapter.parser.formData(isOptionalBody) + `break
`;
        for (const key of Object.keys(app["~parser"]))
          fnLiteral += `case '${key}':let bo${key}=parser['${key}'](c,contentType)
if(bo${key} instanceof Promise)bo${key}=await bo${key}
if(bo${key} instanceof ElysiaCustomStatusResponse){` + mapResponse(`bo${key}`) + `}if(bo${key}!==undefined)c.body=bo${key}
break
`;
        hooks.parse?.length && (fnLiteral += "}"), fnLiteral += "}";
      }
      hooks.parse?.length && (fnLiteral += `
delete c.contentType`);
    }
    fnLiteral += "}catch(error){throw new ParseError(error)}";
  }
  if (parseReporter.resolve(), hooks?.transform || hasTrace) {
    const reporter = report("transform", {
      total: hooks.transform?.length
    });
    if (hooks.transform?.length) {
      fnLiteral += `let transformed
`;
      for (let i = 0;i < hooks.transform.length; i++) {
        const transform = hooks.transform[i], endUnit = reporter.resolveChild(transform.fn.name);
        fnLiteral += isAsync(transform) ? `transformed=await e.transform[${i}](c)
` : `transformed=e.transform[${i}](c)
`, transform.subType === "mapDerive" ? fnLiteral += "if(transformed instanceof ElysiaCustomStatusResponse){" + mapResponse("transformed") + `}else{transformed.request=c.request
transformed.store=c.store
transformed.qi=c.qi
transformed.path=c.path
transformed.url=c.url
transformed.redirect=c.redirect
transformed.set=c.set
transformed.error=c.error
c=transformed}` : fnLiteral += "if(transformed instanceof ElysiaCustomStatusResponse){" + mapResponse("transformed") + `}else Object.assign(c,transformed)
`, endUnit();
      }
    }
    reporter.resolve();
  }
  const fileUnions = [];
  if (validator) {
    if (validator.headers) {
      if (validator.headers.hasDefault)
        for (const [key, value] of Object.entries(Default3(validator.headers.schema, {}))) {
          const parsed = typeof value == "object" || typeof value == "string" ? JSON.stringify(value) : value;
          parsed !== undefined && (fnLiteral += `c.headers[${JSON.stringify(key)}]??=${parsed}
`);
        }
      fnLiteral += composeCleaner({
        name: "c.headers",
        schema: validator.headers,
        type: "headers",
        normalize
      }), validator.headers.isOptional && (fnLiteral += "if(isNotEmpty(c.headers)){"), validator.headers?.provider === "standard" ? fnLiteral += `let vah=validator.headers.Validate(c.headers)
if(vah instanceof Promise)vah=await vah
if(vah.issues){` + validation.validate("headers", undefined, "vah.issues") + `}else{c.headers=vah.value}
` : validator.headers?.schema?.noValidate !== true && (fnLiteral += "if(validator.headers.Check(c.headers) === false){" + validation.validate("headers") + "}"), validator.headers.hasTransform && (fnLiteral += coerceTransformDecodeError(`c.headers=validator.headers.Decode(c.headers)
`, "headers", allowUnsafeValidationDetails)), validator.headers.isOptional && (fnLiteral += "}");
    }
    if (validator.params) {
      if (validator.params.hasDefault)
        for (const [key, value] of Object.entries(Default3(validator.params.schema, {}))) {
          const parsed = typeof value == "object" || typeof value == "string" ? JSON.stringify(value) : value;
          parsed !== undefined && (fnLiteral += `c.params[${JSON.stringify(key)}]??=${parsed}
`);
        }
      validator.params.provider === "standard" ? fnLiteral += `let vap=validator.params.Validate(c.params)
if(vap instanceof Promise)vap=await vap
if(vap.issues){` + validation.validate("params", undefined, "vap.issues") + `}else{c.params=vap.value}
` : validator.params?.schema?.noValidate !== true && (fnLiteral += "if(validator.params.Check(c.params)===false){" + validation.validate("params") + "}"), validator.params.hasTransform && (fnLiteral += coerceTransformDecodeError(`c.params=validator.params.Decode(c.params)
`, "params", allowUnsafeValidationDetails));
    }
    if (validator.query) {
      if (Kind in validator.query?.schema && validator.query.hasDefault)
        for (const [key, value] of Object.entries(Default3(validator.query.schema, {}))) {
          const parsed = typeof value == "object" || typeof value == "string" ? JSON.stringify(value) : value;
          parsed !== undefined && (fnLiteral += `if(c.query[${JSON.stringify(key)}]===undefined)c.query[${JSON.stringify(key)}]=${parsed}
`);
        }
      fnLiteral += composeCleaner({
        name: "c.query",
        schema: validator.query,
        type: "query",
        normalize
      }), validator.query.isOptional && (fnLiteral += "if(isNotEmpty(c.query)){"), validator.query.provider === "standard" ? fnLiteral += `let vaq=validator.query.Validate(c.query)
if(vaq instanceof Promise)vaq=await vaq
if(vaq.issues){` + validation.validate("query", undefined, "vaq.issues") + `}else{c.query=vaq.value}
` : validator.query?.schema?.noValidate !== true && (fnLiteral += "if(validator.query.Check(c.query)===false){" + validation.validate("query") + "}"), validator.query.hasTransform && (fnLiteral += coerceTransformDecodeError(`c.query=validator.query.Decode(c.query)
`, "query", allowUnsafeValidationDetails), fnLiteral += coerceTransformDecodeError(`c.query=validator.query.Decode(c.query)
`, "query", allowUnsafeValidationDetails)), validator.query.isOptional && (fnLiteral += "}");
    }
    if (hasBody && validator.body) {
      (validator.body.hasTransform || validator.body.isOptional) && (fnLiteral += `const isNotEmptyObject=c.body&&(typeof c.body==="object"&&(isNotEmpty(c.body)||c.body instanceof ArrayBuffer))
`);
      const hasUnion = isUnion(validator.body.schema);
      let hasNonUnionFileWithDefault = false;
      if (validator.body.hasDefault) {
        let value = Default3(validator.body.schema, validator.body.schema.type === "object" || unwrapImportSchema(validator.body.schema)[Kind] === "Object" ? {} : undefined);
        const schema = unwrapImportSchema(validator.body.schema);
        if (!hasUnion && value && typeof value == "object" && (hasType("File", schema) || hasType("Files", schema))) {
          hasNonUnionFileWithDefault = true;
          for (const [k, v] of Object.entries(value))
            (v === "File" || v === "Files") && delete value[k];
          isNotEmpty(value) || (value = undefined);
        }
        const parsed = typeof value == "object" || typeof value == "string" ? JSON.stringify(value) : value;
        value != null && (Array.isArray(value) ? fnLiteral += `if(!c.body)c.body=${parsed}
` : typeof value == "object" ? fnLiteral += `c.body=Object.assign(${parsed},c.body)
` : fnLiteral += `c.body=${parsed}
`), fnLiteral += composeCleaner({
          name: "c.body",
          schema: validator.body,
          type: "body",
          normalize
        }), validator.body.provider === "standard" ? fnLiteral += `let vab=validator.body.Validate(c.body)
if(vab instanceof Promise)vab=await vab
if(vab.issues){` + validation.validate("body", undefined, "vab.issues") + `}else{c.body=vab.value}
` : validator.body?.schema?.noValidate !== true && (validator.body.isOptional ? fnLiteral += "if(isNotEmptyObject&&validator.body.Check(c.body)===false){" + validation.validate("body") + "}" : fnLiteral += "if(validator.body.Check(c.body)===false){" + validation.validate("body") + "}");
      } else
        fnLiteral += composeCleaner({
          name: "c.body",
          schema: validator.body,
          type: "body",
          normalize
        }), validator.body.provider === "standard" ? fnLiteral += `let vab=validator.body.Validate(c.body)
if(vab instanceof Promise)vab=await vab
if(vab.issues){` + validation.validate("body", undefined, "vab.issues") + `}else{c.body=vab.value}
` : validator.body?.schema?.noValidate !== true && (validator.body.isOptional ? fnLiteral += "if(isNotEmptyObject&&validator.body.Check(c.body)===false){" + validation.validate("body") + "}" : fnLiteral += "if(validator.body.Check(c.body)===false){" + validation.validate("body") + "}");
      if (validator.body.hasTransform && (fnLiteral += coerceTransformDecodeError(`if(isNotEmptyObject)c.body=validator.body.Decode(c.body)
`, "body", allowUnsafeValidationDetails)), hasUnion && validator.body.schema.anyOf?.length) {
        const iterator = Object.values(validator.body.schema.anyOf);
        for (let i = 0;i < iterator.length; i++) {
          const type = iterator[i];
          if (hasType("File", type) || hasType("Files", type)) {
            const candidate = getSchemaValidator(type, {
              modules: app.definitions.typebox,
              dynamic: !app.config.aot,
              models: app.definitions.type,
              normalize: app.config.normalize,
              additionalCoerce: coercePrimitiveRoot(),
              sanitize: () => app.config.sanitize
            });
            if (candidate) {
              const isFirst = fileUnions.length === 0, properties = getSchemaProperties(candidate.schema) ?? getSchemaProperties(type);
              if (!properties)
                continue;
              const iterator2 = Object.entries(properties);
              let validator2 = isFirst ? `
` : " else ";
              validator2 += `if(fileUnions[${fileUnions.length}].Check(c.body)){`;
              let validateFile = "", validatorLength = 0;
              for (let i2 = 0;i2 < iterator2.length; i2++) {
                const [k, v] = iterator2[i2];
                !v.extension || v[Kind] !== "File" && v[Kind] !== "Files" || (validatorLength && (validateFile += ","), validateFile += `fileType(c.body.${k},${JSON.stringify(v.extension)},'body.${k}')`, validatorLength++);
              }
              validateFile && (validatorLength === 1 ? validator2 += `await ${validateFile}
` : validatorLength > 1 && (validator2 += `await Promise.all([${validateFile}])
`), validator2 += "}", fnLiteral += validator2, fileUnions.push(candidate));
            }
          }
        }
      } else if (hasNonUnionFileWithDefault || !hasUnion && (hasType("File", unwrapImportSchema(validator.body.schema)) || hasType("Files", unwrapImportSchema(validator.body.schema)))) {
        let validateFile = "";
        const bodyProperties = getSchemaProperties(unwrapImportSchema(validator.body.schema));
        let i = 0;
        if (bodyProperties)
          for (const [k, v] of Object.entries(bodyProperties))
            !v.extension || v[Kind] !== "File" && v[Kind] !== "Files" || (i && (validateFile += ","), validateFile += `fileType(c.body.${k},${JSON.stringify(v.extension)},'body.${k}')`, i++);
        i && (fnLiteral += `
`), i === 1 ? fnLiteral += `await ${validateFile}
` : i > 1 && (fnLiteral += `await Promise.all([${validateFile}])
`);
      }
    }
    validator.cookie && (validator.cookie.config = mergeCookie(validator.cookie.config, app.config.cookie ?? {}), fnLiteral += `let cookieValue={}
for(const [key,value] of Object.entries(c.cookie))cookieValue[key]=value.value
`, validator.cookie.isOptional && (fnLiteral += "if(isNotEmpty(c.cookie)){"), validator.cookie.provider === "standard" ? (fnLiteral += `let vac=validator.cookie.Validate(cookieValue)
if(vac instanceof Promise)vac=await vac
if(vac.issues){` + validation.validate("cookie", undefined, "vac.issues") + `}else{cookieValue=vac.value}
`, fnLiteral += `for(const k of Object.keys(cookieValue))c.cookie[k].value=cookieValue[k]
`) : validator.cookie?.schema?.noValidate !== true && (fnLiteral += "if(validator.cookie.Check(cookieValue)===false){" + validation.validate("cookie", "cookieValue") + "}", validator.cookie.hasTransform && (fnLiteral += coerceTransformDecodeError("for(const [key,value] of Object.entries(validator.cookie.Decode(cookieValue))){c.cookie[key].value = value}", "cookie", allowUnsafeValidationDetails))), validator.cookie.isOptional && (fnLiteral += "}"));
  }
  if (hooks?.beforeHandle || hasTrace) {
    const reporter = report("beforeHandle", {
      total: hooks.beforeHandle?.length
    });
    let hasResolve = false;
    if (hooks.beforeHandle?.length)
      for (let i = 0;i < hooks.beforeHandle.length; i++) {
        const beforeHandle = hooks.beforeHandle[i], endUnit = reporter.resolveChild(beforeHandle.fn.name), returning = hasReturn(beforeHandle);
        if (beforeHandle.subType === "resolve" || beforeHandle.subType === "mapResolve")
          hasResolve || (hasResolve = true, fnLiteral += `
let resolved
`), fnLiteral += isAsync(beforeHandle) ? `resolved=await e.beforeHandle[${i}](c);
` : `resolved=e.beforeHandle[${i}](c);
`, beforeHandle.subType === "mapResolve" ? fnLiteral += "if(resolved instanceof ElysiaCustomStatusResponse){" + mapResponse("resolved") + `}else{resolved.request=c.request
resolved.store=c.store
resolved.qi=c.qi
resolved.path=c.path
resolved.url=c.url
resolved.redirect=c.redirect
resolved.set=c.set
resolved.error=c.error
c=resolved}` : fnLiteral += "if(resolved instanceof ElysiaCustomStatusResponse){" + mapResponse("resolved") + `}else Object.assign(c, resolved)
`, endUnit();
        else if (!returning)
          fnLiteral += isAsync(beforeHandle) ? `await e.beforeHandle[${i}](c)
` : `e.beforeHandle[${i}](c)
`, endUnit();
        else {
          if (fnLiteral += isAsync(beforeHandle) ? `be=await e.beforeHandle[${i}](c)
` : `be=e.beforeHandle[${i}](c)
`, endUnit("be"), fnLiteral += "if(be!==undefined){", reporter.resolve(), hooks.afterHandle?.length || hasTrace) {
            report("handle", {
              name: isHandleFn ? handler.name : undefined
            }).resolve();
            const reporter2 = report("afterHandle", {
              total: hooks.afterHandle?.length
            });
            if (hooks.afterHandle?.length)
              for (let i2 = 0;i2 < hooks.afterHandle.length; i2++) {
                const hook = hooks.afterHandle[i2], returning2 = hasReturn(hook), endUnit2 = reporter2.resolveChild(hook.fn.name);
                fnLiteral += `c.response=c.responseValue=be
`, returning2 ? (fnLiteral += isAsync(hook.fn) ? `af=await e.afterHandle[${i2}](c)
` : `af=e.afterHandle[${i2}](c)
`, fnLiteral += `if(af!==undefined) c.response=c.responseValue=be=af
`) : fnLiteral += isAsync(hook.fn) ? `await e.afterHandle[${i2}](c, be)
` : `e.afterHandle[${i2}](c, be)
`, endUnit2("af");
              }
            reporter2.resolve();
          }
          validator.response && (fnLiteral += validation.response("be"));
          const mapResponseReporter = report("mapResponse", {
            total: hooks.mapResponse?.length
          });
          if (hooks.mapResponse?.length) {
            fnLiteral += `c.response=c.responseValue=be
`;
            for (let i2 = 0;i2 < hooks.mapResponse.length; i2++) {
              const mapResponse2 = hooks.mapResponse[i2], endUnit2 = mapResponseReporter.resolveChild(mapResponse2.fn.name);
              fnLiteral += `if(mr===undefined){mr=${isAsyncName(mapResponse2) ? "await " : ""}e.mapResponse[${i2}](c)
if(mr!==undefined)be=c.response=c.responseValue=mr}`, endUnit2();
            }
          }
          mapResponseReporter.resolve(), fnLiteral += afterResponse(), fnLiteral += encodeCookie(), fnLiteral += `return mapEarlyResponse(${saveResponse}be,c.set${mapResponseContext})}
`;
        }
      }
    reporter.resolve();
  }
  function reportHandler(name) {
    const handleReporter = report("handle", {
      name,
      alias: "reportHandler"
    });
    return () => {
      hasTrace && (fnLiteral += 'if(r&&(r[Symbol.iterator]||r[Symbol.asyncIterator])&&typeof r.next==="function"){' + (maybeAsync ? "" : "(async()=>{") + `const stream=await tee(r,3)
r=stream[0]
` + (hooks.afterHandle?.length ? `c.response=c.responseValue=r
` : "") + `const listener=stream[1]
` + (hasTrace || hooks.afterResponse?.length ? `afterHandlerStreamListener=stream[2]
` : "") + `${setImmediateFn}(async ()=>{if(listener)for await(const v of listener){}
`, handleReporter.resolve(), fnLiteral += "})" + (maybeAsync ? "" : "})()") + "}else{", handleReporter.resolve(), fnLiteral += `}
`);
    };
  }
  if (hooks.afterHandle?.length || hasTrace) {
    const resolveHandler = reportHandler(isHandleFn ? handler.name : undefined);
    hooks.afterHandle?.length ? fnLiteral += isAsyncHandler ? `let r=c.response=c.responseValue=await ${handle}
` : `let r=c.response=c.responseValue=${handle}
` : fnLiteral += isAsyncHandler ? `let r=await ${handle}
` : `let r=${handle}
`, resolveHandler();
    const reporter = report("afterHandle", {
      total: hooks.afterHandle?.length
    });
    if (hooks.afterHandle?.length)
      for (let i = 0;i < hooks.afterHandle.length; i++) {
        const hook = hooks.afterHandle[i], returning = hasReturn(hook), endUnit = reporter.resolveChild(hook.fn.name);
        returning ? (fnLiteral += isAsync(hook.fn) ? `af=await e.afterHandle[${i}](c)
` : `af=e.afterHandle[${i}](c)
`, endUnit("af"), validator.response ? (fnLiteral += "if(af!==undefined){", reporter.resolve(), fnLiteral += validation.response("af"), fnLiteral += "c.response=c.responseValue=af}") : (fnLiteral += "if(af!==undefined){", reporter.resolve(), fnLiteral += "c.response=c.responseValue=af}")) : (fnLiteral += isAsync(hook.fn) ? `await e.afterHandle[${i}](c)
` : `e.afterHandle[${i}](c)
`, endUnit());
      }
    reporter.resolve(), hooks.afterHandle?.length && (fnLiteral += `r=c.response
`), validator.response && (fnLiteral += validation.response()), fnLiteral += encodeCookie();
    const mapResponseReporter = report("mapResponse", {
      total: hooks.mapResponse?.length
    });
    if (hooks.mapResponse?.length)
      for (let i = 0;i < hooks.mapResponse.length; i++) {
        const mapResponse2 = hooks.mapResponse[i], endUnit = mapResponseReporter.resolveChild(mapResponse2.fn.name);
        fnLiteral += `mr=${isAsyncName(mapResponse2) ? "await " : ""}e.mapResponse[${i}](c)
if(mr!==undefined)r=c.response=c.responseValue=mr
`, endUnit();
      }
    mapResponseReporter.resolve(), fnLiteral += mapResponse();
  } else {
    const resolveHandler = reportHandler(isHandleFn ? handler.name : undefined);
    if (validator.response || hooks.mapResponse?.length || hasTrace) {
      fnLiteral += isAsyncHandler ? `let r=await ${handle}
` : `let r=${handle}
`, resolveHandler(), validator.response && (fnLiteral += validation.response());
      const mapResponseReporter = report("mapResponse", {
        total: hooks.mapResponse?.length
      });
      if (hooks.mapResponse?.length) {
        fnLiteral += `
c.response=c.responseValue=r
`;
        for (let i = 0;i < hooks.mapResponse.length; i++) {
          const mapResponse2 = hooks.mapResponse[i], endUnit = mapResponseReporter.resolveChild(mapResponse2.fn.name);
          fnLiteral += `
if(mr===undefined){mr=${isAsyncName(mapResponse2) ? "await " : ""}e.mapResponse[${i}](c)
if(mr!==undefined)r=c.response=c.responseValue=mr}
`, endUnit();
        }
      }
      mapResponseReporter.resolve(), fnLiteral += encodeCookie(), handler instanceof Response ? (fnLiteral += afterResponse(), fnLiteral += inference.set ? `if(isNotEmpty(c.set.headers)||c.set.status!==200||c.set.redirect||c.set.cookie)return mapResponse(${saveResponse}${handle}.clone(),c.set${mapResponseContext})
else return ${handle}.clone()` : `return ${handle}.clone()`, fnLiteral += `
`) : fnLiteral += mapResponse();
    } else if (hasCookie || hasTrace) {
      fnLiteral += isAsyncHandler ? `let r=await ${handle}
` : `let r=${handle}
`, resolveHandler();
      const mapResponseReporter = report("mapResponse", {
        total: hooks.mapResponse?.length
      });
      if (hooks.mapResponse?.length) {
        fnLiteral += `c.response=c.responseValue= r
`;
        for (let i = 0;i < hooks.mapResponse.length; i++) {
          const mapResponse2 = hooks.mapResponse[i], endUnit = mapResponseReporter.resolveChild(mapResponse2.fn.name);
          fnLiteral += `if(mr===undefined){mr=${isAsyncName(mapResponse2) ? "await " : ""}e.mapResponse[${i}](c)
if(mr!==undefined)r=c.response=c.responseValue=mr}`, endUnit();
        }
      }
      mapResponseReporter.resolve(), fnLiteral += encodeCookie() + mapResponse();
    } else {
      resolveHandler();
      const handled = isAsyncHandler ? `await ${handle}` : handle;
      handler instanceof Response ? (fnLiteral += afterResponse(), fnLiteral += inference.set ? `if(isNotEmpty(c.set.headers)||c.set.status!==200||c.set.redirect||c.set.cookie)return mapResponse(${saveResponse}${handle}.clone(),c.set${mapResponseContext})
else return ${handle}.clone()
` : `return ${handle}.clone()
`) : fnLiteral += mapResponse(handled);
    }
  }
  if (fnLiteral += `
}catch(error){`, !maybeAsync && hooks.error?.length && (fnLiteral += "return(async()=>{"), fnLiteral += `const set=c.set
if(!set.status||set.status<300)set.status=error?.status||500
`, hasCookie && (fnLiteral += encodeCookie()), hasTrace && hooks.trace)
    for (let i = 0;i < hooks.trace.length; i++)
      fnLiteral += `report${i}?.resolve(error);reportChild${i}?.(error)
`;
  const errorReporter = report("error", {
    total: hooks.error?.length
  });
  if (hooks.error?.length) {
    fnLiteral += `c.error=error
`, hasValidation ? fnLiteral += `if(error instanceof TypeBoxError){c.code="VALIDATION"
c.set.status=422}else{c.code=error.code??error[ERROR_CODE]??"UNKNOWN"}` : fnLiteral += `c.code=error.code??error[ERROR_CODE]??"UNKNOWN"
`, fnLiteral += `let er
`, hooks.mapResponse?.length && (fnLiteral += `let mep
`);
    for (let i = 0;i < hooks.error.length; i++) {
      const endUnit = errorReporter.resolveChild(hooks.error[i].fn.name);
      if (isAsync(hooks.error[i]) ? fnLiteral += `er=await e.error[${i}](c)
` : fnLiteral += `er=e.error[${i}](c)
if(er instanceof Promise)er=await er
`, endUnit(), hooks.mapResponse?.length) {
        const mapResponseReporter = report("mapResponse", {
          total: hooks.mapResponse?.length
        });
        for (let i2 = 0;i2 < hooks.mapResponse.length; i2++) {
          const mapResponse2 = hooks.mapResponse[i2], endUnit2 = mapResponseReporter.resolveChild(mapResponse2.fn.name);
          fnLiteral += `c.response=c.responseValue=er
mep=e.mapResponse[${i2}](c)
if(mep instanceof Promise)mep=await mep
if(mep!==undefined)er=mep
`, endUnit2();
        }
        mapResponseReporter.resolve();
      }
      if (fnLiteral += `er=mapEarlyResponse(er,set${mapResponseContext})
`, fnLiteral += "if(er){", hasTrace && hooks.trace) {
        for (let i2 = 0;i2 < hooks.trace.length; i2++)
          fnLiteral += `report${i2}.resolve()
`;
        errorReporter.resolve();
      }
      fnLiteral += afterResponse(false), fnLiteral += "return er}";
    }
  }
  errorReporter.resolve(), fnLiteral += "return handleError(c,error,true)", !maybeAsync && hooks.error?.length && (fnLiteral += "})()"), fnLiteral += "}";
  const adapterVariables = adapter.inject ? Object.keys(adapter.inject).join(",") + "," : "";
  let init = "const {handler,handleError,hooks:e, " + allocateIf("validator,", hasValidation) + "mapResponse,mapCompactResponse,mapEarlyResponse,isNotEmpty,utils:{" + allocateIf("parseQuery,", hasBody) + allocateIf("parseQueryFromURL,", hasQuery) + "},error:{" + allocateIf("ValidationError,", hasValidation) + allocateIf("ParseError", hasBody) + "},fileType,schema,definitions,tee,ERROR_CODE," + allocateIf("parseCookie,", hasCookie) + allocateIf("signCookie,", hasCookie) + allocateIf("decodeURIComponent,", hasQuery) + "ElysiaCustomStatusResponse," + allocateIf("ELYSIA_TRACE,", hasTrace) + allocateIf("ELYSIA_REQUEST_ID,", hasTrace) + allocateIf("parser,", hooks.parse?.length) + allocateIf("getServer,", inference.server) + allocateIf("fileUnions,", fileUnions.length) + adapterVariables + allocateIf("TypeBoxError", hasValidation) + `}=hooks
const trace=e.trace
return ${maybeAsync ? "async " : ""}function handle(c){`;
  hooks.beforeHandle?.length && (init += `let be
`), hooks.afterHandle?.length && (init += `let af
`), hooks.mapResponse?.length && (init += `let mr
`), allowMeta && (init += `c.schema=schema
c.defs=definitions
`), fnLiteral = init + fnLiteral + "}", init = "";
  try {
    return Function("hooks", `"use strict";
` + fnLiteral)({
      handler,
      hooks: lifeCycleToFn(hooks),
      validator: hasValidation ? validator : undefined,
      handleError: app.handleError,
      mapResponse: adapterHandler.mapResponse,
      mapCompactResponse: adapterHandler.mapCompactResponse,
      mapEarlyResponse: adapterHandler.mapEarlyResponse,
      isNotEmpty,
      utils: {
        parseQuery: hasBody ? parseQuery : undefined,
        parseQueryFromURL: hasQuery ? validator.query?.provider === "standard" ? parseQueryStandardSchema : parseQueryFromURL : undefined
      },
      error: {
        ValidationError: hasValidation ? ValidationError : undefined,
        ParseError: hasBody ? ParseError : undefined
      },
      fileType,
      schema: app.router.history,
      definitions: app.definitions.type,
      tee,
      ERROR_CODE,
      parseCookie: hasCookie ? parseCookie : undefined,
      signCookie: hasCookie ? signCookie : undefined,
      Cookie: hasCookie ? Cookie : undefined,
      decodeURIComponent: hasQuery ? import_fast_decode_uri_component3.default : undefined,
      ElysiaCustomStatusResponse,
      ELYSIA_TRACE: hasTrace ? ELYSIA_TRACE : undefined,
      ELYSIA_REQUEST_ID: hasTrace ? ELYSIA_REQUEST_ID : undefined,
      getServer: inference.server ? () => app.getServer() : undefined,
      fileUnions: fileUnions.length ? fileUnions : undefined,
      TypeBoxError: hasValidation ? TypeBoxError : undefined,
      parser: app["~parser"],
      ...adapter.inject
    });
  } catch (error) {
    const debugHooks = lifeCycleToFn(hooks);
    return console.log("[Composer] failed to generate optimized handler"), console.log("---"), console.log({
      handler: typeof handler == "function" ? handler.toString() : handler,
      instruction: fnLiteral,
      hooks: {
        ...debugHooks,
        transform: debugHooks?.transform?.map?.((x) => x.toString()),
        resolve: debugHooks?.resolve?.map?.((x) => x.toString()),
        beforeHandle: debugHooks?.beforeHandle?.map?.((x) => x.toString()),
        afterHandle: debugHooks?.afterHandle?.map?.((x) => x.toString()),
        mapResponse: debugHooks?.mapResponse?.map?.((x) => x.toString()),
        parse: debugHooks?.parse?.map?.((x) => x.toString()),
        error: debugHooks?.error?.map?.((x) => x.toString()),
        afterResponse: debugHooks?.afterResponse?.map?.((x) => x.toString()),
        stop: debugHooks?.stop?.map?.((x) => x.toString())
      },
      validator,
      definitions: app.definitions.type,
      error
    }), console.log("---"), typeof process?.exit == "function" && process.exit(1), () => new Response("Internal Server Error", { status: 500 });
  }
};
var createOnRequestHandler = (app, addFn) => {
  let fnLiteral = "";
  const reporter = createReport({
    trace: app.event.trace,
    addFn: addFn ?? ((word) => {
      fnLiteral += word;
    })
  })("request", {
    total: app.event.request?.length
  });
  if (app.event.request?.length) {
    fnLiteral += "try{";
    for (let i = 0;i < app.event.request.length; i++) {
      const hook = app.event.request[i], withReturn = hasReturn(hook), maybeAsync = isAsync(hook), endUnit = reporter.resolveChild(app.event.request[i].fn.name);
      withReturn ? (fnLiteral += `re=mapEarlyResponse(${maybeAsync ? "await " : ""}onRequest[${i}](c),c.set)
`, endUnit("re"), fnLiteral += `if(re!==undefined)return re
`) : (fnLiteral += `${maybeAsync ? "await " : ""}onRequest[${i}](c)
`, endUnit());
    }
    fnLiteral += "}catch(error){return app.handleError(c,error,false)}";
  }
  return reporter.resolve(), fnLiteral;
};
var createHoc = (app, fnName = "map") => {
  const hoc = app.extender.higherOrderFunctions;
  if (!hoc.length)
    return "return " + fnName;
  const adapter = app["~adapter"].composeGeneralHandler;
  let handler = fnName;
  for (let i = 0;i < hoc.length; i++)
    handler = `hoc[${i}](${handler},${adapter.parameters})`;
  return `return function hocMap(${adapter.parameters}){return ${handler}(${adapter.parameters})}`;
};
var composeGeneralHandler = (app) => {
  const adapter = app["~adapter"].composeGeneralHandler;
  app.router.http.build();
  const isWebstandard = app["~adapter"].isWebStandard, hasTrace = app.event.trace?.length;
  let fnLiteral = "";
  const router = app.router;
  let findDynamicRoute = router.http.root.WS ? "const route=router.find(r.method==='GET'&&r.headers.get('upgrade')==='websocket'?'WS':r.method,p)" : "const route=router.find(r.method,p)";
  findDynamicRoute += router.http.root.ALL ? `??router.find('ALL',p)
` : `
`, isWebstandard && (findDynamicRoute += 'if(r.method==="HEAD"){const route=router.find("GET",p);if(route){c.params=route.params;const _res=route.store.handler?route.store.handler(c):route.store.compile()(c);if(_res)return Promise.resolve(_res).then((_res)=>{if(!_res.headers)_res.headers=new Headers();return getResponseLength(_res).then((length)=>{_res.headers.set("content-length", length);return new Response(null,{status:_res.status,statusText:_res.statusText,headers:_res.headers});})});}}');
  let afterResponse = `c.error=notFound
`;
  if (app.event.afterResponse?.length && !app.event.error) {
    afterResponse = `
c.error=notFound
`;
    const prefix = app.event.afterResponse.some(isAsync) ? "async" : "";
    afterResponse += `
${setImmediateFn}(${prefix}()=>{if(c.responseValue instanceof ElysiaCustomStatusResponse) c.set.status=c.responseValue.code
`;
    for (let i = 0;i < app.event.afterResponse.length; i++) {
      const fn2 = app.event.afterResponse[i].fn;
      afterResponse += `
${isAsyncName(fn2) ? "await " : ""}afterResponse[${i}](c)
`;
    }
    afterResponse += `})
`;
  }
  app.inference.query && (afterResponse += `
if(c.qi===-1){c.query={}}else{c.query=parseQueryFromURL(c.url,c.qi+1)}`);
  const error404 = adapter.error404(!!app.event.request?.length, !!app.event.error?.length, afterResponse);
  findDynamicRoute += error404.code, findDynamicRoute += `
c.params=route.params
if(route.store.handler)return route.store.handler(c)
return route.store.compile()(c)
`;
  let switchMap = "";
  for (const [path, methods] of Object.entries(router.static)) {
    switchMap += `case'${path}':`, app.config.strictPath !== true && (switchMap += `case'${getLoosePath(path)}':`);
    const encoded = encodePath(path);
    path !== encoded && (switchMap += `case'${encoded}':`), switchMap += "switch(r.method){", (("GET" in methods) || ("WS" in methods)) && (switchMap += "case 'GET':", ("WS" in methods) && (switchMap += `if(r.headers.get('upgrade')==='websocket')return ht[${methods.WS}].composed(c)
`, ("GET" in methods) || ("ALL" in methods ? switchMap += `return ht[${methods.ALL}].composed(c)
` : switchMap += `break map
`)), ("GET" in methods) && (switchMap += `return ht[${methods.GET}].composed(c)
`)), isWebstandard && (("GET" in methods) || ("ALL" in methods)) && !("HEAD" in methods) && (switchMap += `case 'HEAD':return Promise.resolve(ht[${methods.GET ?? methods.ALL}].composed(c)).then(_ht=>getResponseLength(_ht).then((length)=>{_ht.headers.set('content-length', length)
return new Response(null,{status:_ht.status,statusText:_ht.statusText,headers:_ht.headers})
}))
`);
    for (const [method, index] of Object.entries(methods))
      method === "ALL" || method === "GET" || method === "WS" || (switchMap += `case '${method}':return ht[${index}].composed(c)
`);
    "ALL" in methods ? switchMap += `default:return ht[${methods.ALL}].composed(c)
` : switchMap += `default:break map
`, switchMap += "}";
  }
  const maybeAsync = !!app.event.request?.some(isAsync), adapterVariables = adapter.inject ? Object.keys(adapter.inject).join(",") + "," : "";
  fnLiteral += `
const {app,mapEarlyResponse,NotFoundError,randomId,handleError,status,redirect,getResponseLength,ElysiaCustomStatusResponse,` + allocateIf("parseQueryFromURL,", app.inference.query) + allocateIf("ELYSIA_TRACE,", hasTrace) + allocateIf("ELYSIA_REQUEST_ID,", hasTrace) + adapterVariables + `}=data
const store=app.singleton.store
const decorator=app.singleton.decorator
const staticRouter=app.router.static.http
const ht=app.router.history
const router=app.router.http
const trace=app.event.trace?.map(x=>typeof x==='function'?x:x.fn)??[]
const notFound=new NotFoundError()
const hoc=app.extender.higherOrderFunctions.map(x=>x.fn)
`, app.event.request?.length && (fnLiteral += `const onRequest=app.event.request.map(x=>x.fn)
`), app.event.afterResponse?.length && (fnLiteral += `const afterResponse=app.event.afterResponse.map(x=>x.fn)
`), fnLiteral += error404.declare, app.event.trace?.length && (fnLiteral += "const " + app.event.trace.map((_, i) => `tr${i}=app.event.trace[${i}].fn`).join(",") + `
`), fnLiteral += `${maybeAsync ? "async " : ""}function map(${adapter.parameters}){`, app.event.request?.length && (fnLiteral += `let re
`), fnLiteral += adapter.createContext(app), app.event.trace?.length && (fnLiteral += "c[ELYSIA_TRACE]=[" + app.event.trace.map((_, i) => `tr${i}(c)`).join(",") + `]
`), fnLiteral += createOnRequestHandler(app), switchMap && (fnLiteral += `
map: switch(p){
` + switchMap + "}"), fnLiteral += findDynamicRoute + `}
` + createHoc(app);
  const handleError = composeErrorHandler(app);
  app.handleError = handleError;
  const fn = Function("data", `"use strict";
` + fnLiteral)({
    app,
    mapEarlyResponse: app["~adapter"].handler.mapEarlyResponse,
    NotFoundError,
    randomId,
    handleError,
    status,
    redirect,
    getResponseLength,
    ElysiaCustomStatusResponse,
    parseQueryFromURL: app.inference.query ? parseQueryFromURL : undefined,
    ELYSIA_TRACE: hasTrace ? ELYSIA_TRACE : undefined,
    ELYSIA_REQUEST_ID: hasTrace ? ELYSIA_REQUEST_ID : undefined,
    ...adapter.inject
  });
  return isBun && Bun.gc(false), fn;
};
var composeErrorHandler = (app) => {
  const hooks = app.event;
  let fnLiteral = "";
  const adapter = app["~adapter"].composeError, adapterVariables = adapter.inject ? Object.keys(adapter.inject).join(",") + "," : "", hasTrace = !!app.event.trace?.length;
  fnLiteral += "const {mapResponse,ERROR_CODE,ElysiaCustomStatusResponse,ValidationError,TransformDecodeError," + allocateIf("onError,", app.event.error) + allocateIf("afterResponse,", app.event.afterResponse) + allocateIf("trace,", app.event.trace) + allocateIf("onMapResponse,", app.event.mapResponse) + allocateIf("ELYSIA_TRACE,", hasTrace) + allocateIf("ELYSIA_REQUEST_ID,", hasTrace) + adapterVariables + `}=inject
`, fnLiteral += "return async function(context,error,skipGlobal){", fnLiteral += "", hasTrace && (fnLiteral += `const id=context[ELYSIA_REQUEST_ID]
`);
  const report = createReport({
    context: "context",
    trace: hooks.trace,
    addFn: (word) => {
      fnLiteral += word;
    }
  }), afterResponse = () => {
    if (!hooks.afterResponse?.length && !hasTrace)
      return "";
    let afterResponse2 = "";
    const prefix = hooks.afterResponse?.some(isAsync) ? "async" : "";
    afterResponse2 += `
${setImmediateFn}(${prefix}()=>{`;
    const reporter = createReport({
      context: "context",
      trace: hooks.trace,
      addFn: (word) => {
        afterResponse2 += word;
      }
    })("afterResponse", {
      total: hooks.afterResponse?.length,
      name: "context"
    });
    if (hooks.afterResponse?.length && hooks.afterResponse)
      for (let i = 0;i < hooks.afterResponse.length; i++) {
        const fn = hooks.afterResponse[i].fn, endUnit = reporter.resolveChild(fn.name);
        afterResponse2 += `
${isAsyncName(fn) ? "await " : ""}afterResponse[${i}](context)
`, endUnit();
      }
    return reporter.resolve(), afterResponse2 += `})
`, afterResponse2;
  };
  fnLiteral += `const set=context.set
let _r
if(!context.code)context.code=error.code??error[ERROR_CODE]
if(!(context.error instanceof Error))context.error=error
if(error instanceof ElysiaCustomStatusResponse){set.status=error.status=error.code
error.message=error.response}`, adapter.declare && (fnLiteral += adapter.declare);
  const saveResponse = hasTrace || hooks.afterResponse?.length ? "context.response = " : "";
  if (fnLiteral += `if(typeof error?.toResponse==='function'&&!(error instanceof ValidationError)&&!(error instanceof TransformDecodeError)){try{let raw=error.toResponse()
if(typeof raw?.then==='function')raw=await raw
if(raw instanceof Response)set.status=raw.status
context.response=context.responseValue=raw
}catch(toResponseError){
}
}
`, app.event.error)
    for (let i = 0;i < app.event.error.length; i++) {
      const handler = app.event.error[i], response = `${isAsync(handler) ? "await " : ""}onError[${i}](context)
`;
      if (fnLiteral += "if(skipGlobal!==true&&!context.response){", hasReturn(handler)) {
        fnLiteral += `_r=${response}
if(_r!==undefined){if(_r instanceof Response){` + afterResponse() + `return mapResponse(_r,set${adapter.mapResponseContext})}if(_r instanceof ElysiaCustomStatusResponse){error.status=error.code
error.message=error.response}if(set.status===200||!set.status)set.status=error.status
`;
        const mapResponseReporter2 = report("mapResponse", {
          total: hooks.mapResponse?.length,
          name: "context"
        });
        if (hooks.mapResponse?.length)
          for (let i2 = 0;i2 < hooks.mapResponse.length; i2++) {
            const mapResponse = hooks.mapResponse[i2], endUnit = mapResponseReporter2.resolveChild(mapResponse.fn.name);
            fnLiteral += `context.response=context.responseValue=_r
_r=${isAsyncName(mapResponse) ? "await " : ""}onMapResponse[${i2}](context)
`, endUnit();
          }
        mapResponseReporter2.resolve(), fnLiteral += afterResponse() + `return mapResponse(${saveResponse}_r,set${adapter.mapResponseContext})}`;
      } else
        fnLiteral += response;
      fnLiteral += "}";
    }
  fnLiteral += `if(error instanceof ValidationError||error instanceof TransformDecodeError){
if(error.error)error=error.error
set.status=error.status??422
` + afterResponse() + adapter.validationError + `
}
`, fnLiteral += "if(!context.response&&error instanceof Error){" + afterResponse() + adapter.unknownError + `
}`;
  const mapResponseReporter = report("mapResponse", {
    total: hooks.mapResponse?.length,
    name: "context"
  });
  if (fnLiteral += `
if(!context.response)context.response=context.responseValue=error.message??error
`, hooks.mapResponse?.length) {
    fnLiteral += `let mr
`;
    for (let i = 0;i < hooks.mapResponse.length; i++) {
      const mapResponse = hooks.mapResponse[i], endUnit = mapResponseReporter.resolveChild(mapResponse.fn.name);
      fnLiteral += `if(mr===undefined){mr=${isAsyncName(mapResponse) ? "await " : ""}onMapResponse[${i}](context)
if(mr!==undefined)error=context.response=context.responseValue=mr}`, endUnit();
    }
  }
  mapResponseReporter.resolve(), fnLiteral += afterResponse() + `
return mapResponse(${saveResponse}error,set${adapter.mapResponseContext})}`;
  const mapFn = (x) => typeof x == "function" ? x : x.fn;
  return Function("inject", `"use strict";
` + fnLiteral)({
    mapResponse: app["~adapter"].handler.mapResponse,
    ERROR_CODE,
    ElysiaCustomStatusResponse,
    ValidationError,
    TransformDecodeError,
    onError: app.event.error?.map(mapFn),
    afterResponse: app.event.afterResponse?.map(mapFn),
    trace: app.event.trace?.map(mapFn),
    onMapResponse: app.event.mapResponse?.map(mapFn),
    ELYSIA_TRACE: hasTrace ? ELYSIA_TRACE : undefined,
    ELYSIA_REQUEST_ID: hasTrace ? ELYSIA_REQUEST_ID : undefined,
    ...adapter.inject
  });
};

// node_modules/elysia/dist/adapter/bun/compose.mjs
var allocateIf2 = (value, condition) => condition ? value : "";
var createContext = (app, route, inference, isInline = false) => {
  let fnLiteral = "";
  const defaultHeaders = app.setHeaders, hasTrace = !!app.event.trace?.length;
  hasTrace && (fnLiteral += `const id=randomId()
`);
  const isDynamic = /[:*]/.test(route.path), getQi = `const u=request.url,s=u.indexOf('/',${app.config.handler?.standardHostname ?? true ? 11 : 7}),qi=u.indexOf('?',s+1)
`, needsQuery = inference.query || !!route.hooks.query || !!route.hooks.standaloneValidator?.find((x) => x.query) || app.event.request?.length;
  needsQuery && (fnLiteral += getQi);
  const getPath = inference.path ? isDynamic ? "get path(){" + (needsQuery ? "" : getQi) + `if(qi===-1)return u.substring(s)
return u.substring(s,qi)
},` : `path:'${route.path}',` : "";
  fnLiteral += allocateIf2("const c=", !isInline) + "{request,store," + allocateIf2("qi,", needsQuery) + allocateIf2("params:request.params,", isDynamic) + getPath + allocateIf2("url:request.url,", hasTrace || inference.url || needsQuery) + "redirect,status,set:{headers:" + (isNotEmpty(defaultHeaders) ? "Object.assign({},app.setHeaders)" : "Object.create(null)") + ",status:200}", inference.server && (fnLiteral += ",get server(){return app.getServer()}"), hasTrace && (fnLiteral += ",[ELYSIA_REQUEST_ID]:id");
  {
    let decoratorsLiteral = "";
    for (const key of Object.keys(app.singleton.decorator))
      decoratorsLiteral += `,'${key}':decorator['${key}']`;
    fnLiteral += decoratorsLiteral;
  }
  return fnLiteral += `}
`, fnLiteral;
};
var createBunRouteHandler = (app, route) => {
  const hasTrace = !!app.event.trace?.length, hasHoc = !!app.extender.higherOrderFunctions.length;
  let inference = sucrose(route.hooks, app.inference);
  inference = sucrose({
    handler: route.handler
  }, inference);
  let fnLiteral = "const handler=data.handler,app=data.app,store=data.store,decorator=data.decorator,redirect=data.redirect,route=data.route,mapEarlyResponse=data.mapEarlyResponse," + allocateIf2("randomId=data.randomId,", hasTrace) + allocateIf2("ELYSIA_REQUEST_ID=data.ELYSIA_REQUEST_ID,", hasTrace) + allocateIf2("ELYSIA_TRACE=data.ELYSIA_TRACE,", hasTrace) + allocateIf2("trace=data.trace,", hasTrace) + allocateIf2("hoc=data.hoc,", hasHoc) + `status=data.status
`;
  app.event.request?.length && (fnLiteral += `const onRequest=app.event.request.map(x=>x.fn)
`), fnLiteral += `${app.event.request?.find(isAsync) ? "async" : ""} function map(request){`;
  const needsQuery = inference.query || !!route.hooks.query || !!route.hooks.standaloneValidator?.find((x) => x.query);
  return hasTrace || needsQuery || app.event.request?.length ? (fnLiteral += createContext(app, route, inference), fnLiteral += createOnRequestHandler(app), fnLiteral += "return handler(c)}") : fnLiteral += `return handler(${createContext(app, route, inference, true)})}`, fnLiteral += createHoc(app), Function("data", fnLiteral)({
    app,
    handler: route.compile?.() ?? route.composed,
    redirect,
    status,
    hoc: app.extender.higherOrderFunctions.map((x) => x.fn),
    store: app.store,
    decorator: app.decorator,
    route: route.path,
    randomId: hasTrace ? randomId : undefined,
    ELYSIA_TRACE: hasTrace ? ELYSIA_TRACE : undefined,
    ELYSIA_REQUEST_ID: hasTrace ? ELYSIA_REQUEST_ID : undefined,
    trace: hasTrace ? app.event.trace?.map((x) => x?.fn ?? x) : undefined,
    mapEarlyResponse: mapEarlyResponse2
  });
};

// node_modules/elysia/dist/adapter/bun/handler-native.mjs
var isEmptyPipelineHook = (hooks) => {
  for (const key in hooks) {
    switch (key) {
      case "detail":
      case "tags":
      case "start":
      case "stop":
      case "error":
      case "afterResponse":
        continue;
    }
    const value = hooks[key];
    if (value !== undefined && value !== false && (!Array.isArray(value) || value.length))
      return false;
  }
  return true;
};
var createNativeStaticHandler = (handle, hooks, set) => {
  if (typeof handle == "function" || handle instanceof Blob || !isEmptyPipelineHook(hooks))
    return;
  if (isHTMLBundle(handle))
    return () => handle;
  const response = mapResponse2(handle instanceof Response ? handle.clone() : handle instanceof Promise ? handle.then((x) => x instanceof Response ? x.clone() : isHTMLBundle(x) ? () => x : x) : handle, set ?? {
    headers: {}
  });
  return response instanceof Promise ? response.then((response2) => {
    if (response2)
      return response2.clone();
  }) : () => response.clone();
};

// node_modules/elysia/dist/ws/index.mjs
function isInvalidResponse(validator, data) {
  return validator ? validator.provider === "standard" ? validator.schema["~standard"].validate(data).issues : validator.Check(data) === false : false;
}
var websocket = {
  open(ws) {
    ws.data.open?.(ws);
  },
  message(ws, message) {
    ws.data.message?.(ws, message);
  },
  drain(ws) {
    ws.data.drain?.(ws);
  },
  close(ws, code, reason) {
    ws.data.close?.(ws, code, reason);
  },
  ping(ws) {
    ws.data.ping?.(ws);
  },
  pong(ws) {
    ws.data.pong?.(ws);
  }
};

class ElysiaWS {
  constructor(raw, data, body = undefined) {
    this.raw = raw;
    this.data = data;
    this.body = body;
    this.validator = raw.data?.validator, this.sendText = raw.sendText.bind(raw), this.sendBinary = raw.sendBinary.bind(raw), this.close = raw.close.bind(raw), this.terminate = raw.terminate.bind(raw), this.publishText = raw.publishText.bind(raw), this.publishBinary = raw.publishBinary.bind(raw), this.subscribe = raw.subscribe.bind(raw), this.unsubscribe = raw.unsubscribe.bind(raw), this.isSubscribed = raw.isSubscribed.bind(raw), this.cork = raw.cork.bind(raw), this.remoteAddress = raw.remoteAddress, this.binaryType = raw.binaryType, this.data = raw.data, this.subscriptions = raw.subscriptions, this.send = this.send.bind(this), this.ping = this.ping.bind(this), this.pong = this.pong.bind(this), this.publish = this.publish.bind(this);
  }
  send(data, compress) {
    return Buffer.isBuffer(data) ? this.raw.send(data, compress) : isInvalidResponse(this.validator, data) ? this.raw.send(new ValidationError("message", this.validator, data).message) : (typeof data == "object" && (data = JSON.stringify(data)), this.raw.send(data, compress));
  }
  ping(data) {
    return Buffer.isBuffer(data) ? this.raw.ping(data) : isInvalidResponse(this.validator, data) ? this.raw.send(new ValidationError("message", this.validator, data).message) : (typeof data == "object" && (data = JSON.stringify(data)), this.raw.ping(data));
  }
  pong(data) {
    return Buffer.isBuffer(data) ? this.raw.pong(data) : isInvalidResponse(this.validator, data) ? this.raw.send(new ValidationError("message", this.validator, data).message) : (typeof data == "object" && (data = JSON.stringify(data)), this.raw.pong(data));
  }
  publish(topic, data, compress) {
    return Buffer.isBuffer(data) ? this.raw.publish(topic, data, compress) : isInvalidResponse(this.validator, data) ? this.raw.send(new ValidationError("message", this.validator, data).message) : (typeof data == "object" && (data = JSON.stringify(data)), this.raw.publish(topic, data, compress));
  }
  get readyState() {
    return this.raw.readyState;
  }
  get id() {
    return this.data.id;
  }
}
var createWSMessageParser = (parse) => {
  const parsers = typeof parse == "function" ? [parse] : parse;
  return async function(ws, message) {
    if (typeof message == "string") {
      const start = message?.charCodeAt(0);
      if (start === 34 || start === 47 || start === 91 || start === 123)
        try {
          message = JSON.parse(message);
        } catch {}
      else
        isNumericString(message) ? message = +message : message === "true" ? message = true : message === "false" ? message = false : message === "null" && (message = null);
    }
    if (parsers)
      for (let i = 0;i < parsers.length; i++) {
        let temp = parsers[i](ws, message);
        if (temp instanceof Promise && (temp = await temp), temp !== undefined)
          return temp;
      }
    return message;
  };
};
var createHandleWSResponse = (responseValidator) => {
  const handleWSResponse = (ws, data) => {
    if (data instanceof Promise)
      return data.then((data2) => handleWSResponse(ws, data2));
    if (Buffer.isBuffer(data))
      return ws.send(data.toString());
    if (data === undefined)
      return;
    const send = (datum) => {
      if (datum !== undefined) {
        if (isInvalidResponse(responseValidator, datum))
          return ws.send(new ValidationError("message", responseValidator, datum).message);
        if (typeof datum == "object")
          return ws.send(JSON.stringify(datum));
        ws.send(datum);
      }
    };
    if (typeof data?.next != "function")
      return void send(data);
    const init = data.next();
    if (init instanceof Promise)
      return (async () => {
        const first = await init;
        if (send(first.value), !first.done)
          for await (const datum of data)
            send(datum);
      })();
    if (send(init.value), !init.done)
      for (const datum of data)
        send(datum);
  };
  return handleWSResponse;
};

// node_modules/elysia/dist/adapter/bun/index.mjs
var optionalParam = /:.+?\?(?=\/|$)/;
var getPossibleParams = (path) => {
  const match = optionalParam.exec(path);
  if (!match)
    return [path];
  const routes = [], head = path.slice(0, match.index), param = match[0].slice(0, -1), tail = path.slice(match.index + match[0].length);
  routes.push(head.slice(0, -1)), routes.push(head + param);
  for (const fragment of getPossibleParams(tail))
    fragment && (fragment.startsWith("/:") || routes.push(head.slice(0, -1) + fragment), routes.push(head + param + fragment));
  return routes;
};
var isHTMLBundle = (handle) => typeof handle == "object" && handle !== null && (handle.toString() === "[object HTMLBundle]" || typeof handle.index == "string");
var supportedMethods = {
  GET: true,
  HEAD: true,
  OPTIONS: true,
  DELETE: true,
  PATCH: true,
  POST: true,
  PUT: true
};
var mapRoutes = (app) => {
  if (!app.config.aot || app.config.systemRouter === false)
    return;
  const routes = {}, add = (route, handler) => {
    const path = encodeURI(route.path);
    routes[path] ? routes[path][route.method] || (routes[path][route.method] = handler) : routes[path] = {
      [route.method]: handler
    };
  }, tree = app.routeTree;
  for (const route of app.router.history) {
    if (typeof route.handler != "function")
      continue;
    const method = route.method;
    if (method === "GET" && `WS_${route.path}` in tree || method === "WS" || route.path.charCodeAt(route.path.length - 1) === 42 || !(method in supportedMethods))
      continue;
    if (method === "ALL") {
      `WS_${route.path}` in tree || (routes[route.path] = route.hooks?.config?.mount ? route.hooks.trace || app.event.trace || app.extender.higherOrderFunctions ? createBunRouteHandler(app, route) : route.hooks.mount || route.handler : route.handler);
      continue;
    }
    let compiled;
    const handler = app.config.precompile ? createBunRouteHandler(app, route) : (request) => compiled ? compiled(request) : (compiled = createBunRouteHandler(app, route))(request);
    for (const path of getPossibleParams(route.path))
      add({
        method,
        path
      }, handler);
  }
  return routes;
};
var mergeRoutes = (r1, r2) => {
  if (!r2)
    return r1;
  for (const key of Object.keys(r2))
    if (r1[key] !== r2[key]) {
      if (!r1[key]) {
        r1[key] = r2[key];
        continue;
      }
      if (r1[key] && r2[key]) {
        if (typeof r1[key] == "function" || r1[key] instanceof Response) {
          r1[key] = r2[key];
          continue;
        }
        r1[key] = {
          ...r1[key],
          ...r2[key]
        };
      }
    }
  return r1;
};
var removeTrailingPath = (routes) => {
  for (const key of Object.keys(routes))
    key.length > 1 && key.charCodeAt(key.length - 1) === 47 && (routes[key.slice(0, -1)] = routes[key], delete routes[key]);
  return routes;
};
var BunAdapter = {
  ...WebStandardAdapter,
  name: "bun",
  handler: {
    mapResponse: mapResponse2,
    mapEarlyResponse: mapEarlyResponse2,
    mapCompactResponse: mapCompactResponse2,
    createStaticHandler: createStaticHandler2,
    createNativeStaticHandler
  },
  composeHandler: {
    ...WebStandardAdapter.composeHandler,
    headers: hasHeaderShorthand ? `c.headers=c.request.headers.toJSON()
` : `c.headers={}
for(const [k,v] of c.request.headers.entries())c.headers[k]=v
`
  },
  listen(app) {
    return (options, callback) => {
      if (typeof Bun > "u")
        throw new Error(".listen() is designed to run on Bun only. If you are running Elysia in other environment please use a dedicated plugin or export the handler via Elysia.fetch");
      if (app.compile(), typeof options == "string") {
        if (!isNumericString(options))
          throw new Error("Port must be a numeric value");
        options = parseInt(options);
      }
      const createStaticRoute = (iterator, { withAsync = false } = {}) => {
        const staticRoutes = {}, ops = [];
        if (app.event.request?.length || app.event.trace?.length || app.extender.higherOrderFunctions.length)
          return withAsync ? Promise.resolve(staticRoutes) : staticRoutes;
        for (let [path, route] of Object.entries(iterator))
          if (path = encodeURI(path), supportPerMethodInlineHandler) {
            if (!route)
              continue;
            for (const [method, value] of Object.entries(route))
              if (!(!value || !(method in supportedMethods))) {
                if (value instanceof Promise) {
                  withAsync && (staticRoutes[path] || (staticRoutes[path] = {}), ops.push(value.then((awaited) => {
                    awaited instanceof Response && (staticRoutes[path][method] = awaited), isHTMLBundle(awaited) && (staticRoutes[path][method] = awaited);
                  })));
                  continue;
                }
                !(value instanceof Response) && !isHTMLBundle(value) || (staticRoutes[path] || (staticRoutes[path] = {}), staticRoutes[path][method] = value);
              }
          } else {
            if (!route)
              continue;
            if (route instanceof Promise) {
              withAsync && (staticRoutes[path] || (staticRoutes[path] = {}), ops.push(route.then((awaited) => {
                awaited instanceof Response && (staticRoutes[path] = awaited);
              })));
              continue;
            }
            if (!(route instanceof Response))
              continue;
            staticRoutes[path] = route;
          }
        return withAsync ? Promise.all(ops).then(() => staticRoutes) : staticRoutes;
      }, routes = removeTrailingPath(mergeRoutes(mergeRoutes(createStaticRoute(app.router.response), mapRoutes(app)), app.config.serve?.routes)), serve = typeof options == "object" ? {
        development: !isProduction,
        reusePort: true,
        idleTimeout: 30,
        ...app.config.serve || {},
        ...options || {},
        routes,
        websocket: {
          ...app.config.websocket || {},
          ...websocket || {},
          ...options.websocket || {}
        },
        fetch: app.fetch
      } : {
        development: !isProduction,
        reusePort: true,
        idleTimeout: 30,
        ...app.config.serve || {},
        routes,
        websocket: {
          ...app.config.websocket || {},
          ...websocket || {}
        },
        port: options,
        fetch: app.fetch
      };
      if (app.server = Bun.serve(serve), app.event.start)
        for (let i = 0;i < app.event.start.length; i++)
          app.event.start[i].fn(app);
      callback && callback(app.server), process.on("beforeExit", async () => {
        if (app.server && (await app.server.stop?.(), app.server = null, app.event.stop))
          for (let i = 0;i < app.event.stop.length; i++)
            app.event.stop[i].fn(app);
      }), app.promisedModules.then(async () => {
        app.config.aot, app.compile();
        const routes2 = removeTrailingPath(mergeRoutes(mergeRoutes(await createStaticRoute(app.router.response, {
          withAsync: true
        }), mapRoutes(app)), app.config.serve?.routes));
        app.server?.reload({
          ...serve,
          fetch: app.fetch,
          routes: routes2
        }), Bun?.gc(false);
      });
    };
  },
  async stop(app, closeActiveConnections) {
    if (app.server) {
      if (await app.server.stop(closeActiveConnections), app.server = null, app.event.stop?.length)
        for (let i = 0;i < app.event.stop.length; i++)
          app.event.stop[i].fn(app);
    } else
      console.log("Elysia isn't running. Call `app.listen` to start the server.", new Error().stack);
  },
  ws(app, path, options) {
    const { parse, body, response, ...rest } = options, messageValidator = getSchemaValidator(body, {
      modules: app.definitions.typebox,
      models: app.definitions.type,
      normalize: app.config.normalize
    }), validateMessage = messageValidator ? messageValidator.provider === "standard" ? (data) => messageValidator.schema["~standard"].validate(data).issues : (data) => messageValidator.Check(data) === false : undefined, responseValidator = getSchemaValidator(response, {
      modules: app.definitions.typebox,
      models: app.definitions.type,
      normalize: app.config.normalize
    });
    app.route("WS", path, async (context) => {
      const server = context.server ?? app.server, { set, path: path2, qi, headers, query, params } = context;
      if (context.validator = responseValidator, options.upgrade)
        if (typeof options.upgrade == "function") {
          const temp = options.upgrade(context);
          temp instanceof Promise && await temp;
        } else
          options.upgrade && Object.assign(set.headers, options.upgrade);
      if (set.cookie && isNotEmpty(set.cookie)) {
        const cookie = serializeCookie(set.cookie);
        cookie && (set.headers["set-cookie"] = cookie);
      }
      set.headers["set-cookie"] && Array.isArray(set.headers["set-cookie"]) && (set.headers = parseSetCookies(new Headers(set.headers), set.headers["set-cookie"]));
      const handleResponse = createHandleWSResponse(responseValidator), parseMessage = createWSMessageParser(parse);
      let _id;
      if (typeof options.beforeHandle == "function") {
        const result = options.beforeHandle(context);
        result instanceof Promise && await result;
      }
      const errorHandlers = [
        ...options.error ? Array.isArray(options.error) ? options.error : [options.error] : [],
        ...(app.event.error ?? []).map((x) => typeof x == "function" ? x : x.fn)
      ].filter((x) => x), hasCustomErrorHandlers = errorHandlers.length > 0, handleErrors = hasCustomErrorHandlers ? async (ws, error) => {
        for (const handleError of errorHandlers) {
          let response2 = handleError(Object.assign(context, { error }));
          if (response2 instanceof Promise && (response2 = await response2), await handleResponse(ws, response2), response2)
            break;
        }
      } : () => {};
      if (!server?.upgrade(context.request, {
        headers: isNotEmpty(set.headers) ? set.headers : undefined,
        data: {
          ...context,
          get id() {
            return _id || (_id = randomId());
          },
          validator: responseValidator,
          ping(ws, data) {
            options.ping?.(ws, data);
          },
          pong(ws, data) {
            options.pong?.(ws, data);
          },
          open: async (ws) => {
            try {
              await handleResponse(ws, options.open?.(new ElysiaWS(ws, context)));
            } catch (error) {
              handleErrors(ws, error);
            }
          },
          message: async (ws, _message) => {
            const message = await parseMessage(ws, _message);
            if (validateMessage && validateMessage(message)) {
              const validationError = new ValidationError("message", messageValidator, message);
              return hasCustomErrorHandlers ? handleErrors(ws, validationError) : void ws.send(validationError.message);
            }
            try {
              await handleResponse(ws, options.message?.(new ElysiaWS(ws, context, message), message));
            } catch (error) {
              handleErrors(ws, error);
            }
          },
          drain: async (ws) => {
            try {
              await handleResponse(ws, options.drain?.(new ElysiaWS(ws, context)));
            } catch (error) {
              handleErrors(ws, error);
            }
          },
          close: async (ws, code, reason) => {
            try {
              await handleResponse(ws, options.close?.(new ElysiaWS(ws, context), code, reason));
            } catch (error) {
              handleErrors(ws, error);
            }
          }
        }
      }))
        return status(400, "Expected a websocket connection");
    }, {
      ...rest,
      websocket: options
    });
  }
};

// node_modules/elysia/dist/universal/env.mjs
var env2 = isBun ? Bun.env : typeof process < "u" && process?.env ? process.env : {};

// node_modules/elysia/dist/dynamic-handle.mjs
var ARRAY_INDEX_REGEX = /^(.+)\[(\d+)\]$/;
var DANGEROUS_KEYS = /* @__PURE__ */ new Set(["__proto__", "constructor", "prototype"]);
var isDangerousKey = (key) => {
  if (DANGEROUS_KEYS.has(key))
    return true;
  const match = key.match(ARRAY_INDEX_REGEX);
  return match ? DANGEROUS_KEYS.has(match[1]) : false;
};
var parseArrayKey = (key) => {
  const match = key.match(ARRAY_INDEX_REGEX);
  return match ? {
    name: match[1],
    index: parseInt(match[2], 10)
  } : null;
};
var parseObjectString = (entry) => {
  if (!(typeof entry != "string" || entry.charCodeAt(0) !== 123))
    try {
      const parsed = JSON.parse(entry);
      if (parsed && typeof parsed == "object" && !Array.isArray(parsed))
        return parsed;
    } catch {
      return;
    }
};
var setNestedValue = (obj, path, value) => {
  const keys = path.split("."), lastKey = keys.pop();
  if (isDangerousKey(lastKey) || keys.some(isDangerousKey))
    return;
  let current = obj;
  for (const key of keys) {
    const arrayInfo2 = parseArrayKey(key);
    if (arrayInfo2) {
      Array.isArray(current[arrayInfo2.name]) || (current[arrayInfo2.name] = []);
      const existing = current[arrayInfo2.name][arrayInfo2.index], isFile = typeof File < "u" && existing instanceof File;
      (!existing || typeof existing != "object" || Array.isArray(existing) || isFile) && (current[arrayInfo2.name][arrayInfo2.index] = parseObjectString(existing) ?? {}), current = current[arrayInfo2.name][arrayInfo2.index];
    } else
      (!current[key] || typeof current[key] != "object") && (current[key] = {}), current = current[key];
  }
  const arrayInfo = parseArrayKey(lastKey);
  arrayInfo ? (Array.isArray(current[arrayInfo.name]) || (current[arrayInfo.name] = []), current[arrayInfo.name][arrayInfo.index] = value) : current[lastKey] = value;
};
var normalizeFormValue = (value) => {
  if (value.length === 1) {
    const stringValue2 = value[0];
    if (typeof stringValue2 == "string" && (stringValue2.charCodeAt(0) === 123 || stringValue2.charCodeAt(0) === 91))
      try {
        const parsed2 = JSON.parse(stringValue2);
        if (parsed2 && typeof parsed2 == "object")
          return parsed2;
      } catch {}
    return value[0];
  }
  const stringValue = value.find((entry) => typeof entry == "string");
  if (!stringValue || typeof File > "u")
    return value;
  const files = value.filter((entry) => entry instanceof File);
  if (!files.length || stringValue.charCodeAt(0) !== 123)
    return value;
  let parsed;
  try {
    parsed = JSON.parse(stringValue);
  } catch {
    return value;
  }
  return typeof parsed != "object" || parsed === null ? value : (!("file" in parsed) && files.length === 1 ? parsed.file = files[0] : !("files" in parsed) && files.length > 1 && (parsed.files = files), parsed);
};
var injectDefaultValues = (typeChecker, obj) => {
  let schema = typeChecker.schema;
  if (!schema)
    return;
  schema.$defs?.[schema.$ref] && (schema = schema.$defs[schema.$ref]);
  const properties = getSchemaProperties(schema);
  if (properties)
    for (const [key, keySchema] of Object.entries(properties))
      obj[key] ??= keySchema.default;
};
async function validateStandardSchema(type, validator, value) {
  const result = await validator.Validate(value);
  if (result.issues)
    throw new ValidationError(type, validator, value, false, result.issues);
  return result.value;
}
var createDynamicHandler = (app) => {
  const { mapResponse, mapEarlyResponse } = app["~adapter"].handler, defaultHeader = app.setHeaders;
  return async (request) => {
    const url = request.url, s = url.indexOf("/", 11), qi = url.indexOf("?", s + 1), path = qi === -1 ? url.substring(s) : url.substring(s, qi), set = {
      cookie: {},
      status: 200,
      headers: defaultHeader ? { ...defaultHeader } : {}
    }, context = Object.assign({}, app.singleton.decorator, {
      set,
      store: app.singleton.store,
      request,
      path,
      qi,
      error: status,
      status,
      redirect
    });
    let hooks;
    try {
      if (app.event.request)
        for (let i = 0;i < app.event.request.length; i++) {
          const onRequest = app.event.request[i].fn;
          let response2 = onRequest(context);
          if (response2 instanceof Promise && (response2 = await response2), response2 = mapEarlyResponse(response2, set), response2)
            return context.response = response2;
        }
      const methodKey = request.method === "GET" && request.headers.get("upgrade")?.toLowerCase() === "websocket" ? "WS" : request.method, handler = app.router.dynamic.find(request.method, path) ?? app.router.dynamic.find(methodKey, path) ?? app.router.dynamic.find("ALL", path);
      if (!handler)
        throw context.query = qi === -1 ? {} : parseQuery(url.substring(qi + 1)), new NotFoundError;
      const { handle, validator, content, route } = handler.store;
      if (hooks = handler.store.hooks, hooks.config?.mount)
        return await hooks.config.mount(request);
      let body;
      if (request.method !== "GET" && request.method !== "HEAD")
        if (content)
          switch (content) {
            case "application/json":
              body = await request.json();
              break;
            case "text/plain":
              body = await request.text();
              break;
            case "application/x-www-form-urlencoded":
              body = parseQuery(await request.text());
              break;
            case "application/octet-stream":
              body = await request.arrayBuffer();
              break;
            case "multipart/form-data": {
              body = {};
              const form = await request.formData(), grouped = /* @__PURE__ */ new Map;
              form.forEach((v, k) => {
                const list = grouped.get(k);
                list ? list.push(v) : grouped.set(k, [v]);
              });
              for (const [key, value] of grouped) {
                if (body[key])
                  continue;
                const finalValue = normalizeFormValue(value);
                key.includes(".") || key.includes("[") ? setNestedValue(body, key, finalValue) : body[key] = finalValue;
              }
              break;
            }
          }
        else {
          let contentType;
          if (request.body && (contentType = request.headers.get("content-type")), contentType) {
            const index = contentType.indexOf(";");
            if (index !== -1 && (contentType = contentType.slice(0, index)), context.contentType = contentType, hooks.parse)
              for (let i = 0;i < hooks.parse.length; i++) {
                const hook = hooks.parse[i].fn;
                if (typeof hook == "string")
                  switch (hook) {
                    case "json":
                    case "application/json":
                      body = await request.json();
                      break;
                    case "text":
                    case "text/plain":
                      body = await request.text();
                      break;
                    case "urlencoded":
                    case "application/x-www-form-urlencoded":
                      body = parseQuery(await request.text());
                      break;
                    case "arrayBuffer":
                    case "application/octet-stream":
                      body = await request.arrayBuffer();
                      break;
                    case "formdata":
                    case "multipart/form-data": {
                      body = {};
                      const form = await request.formData(), grouped = /* @__PURE__ */ new Map;
                      form.forEach((v, k) => {
                        const list = grouped.get(k);
                        list ? list.push(v) : grouped.set(k, [v]);
                      });
                      for (const [key, value] of grouped) {
                        if (body[key])
                          continue;
                        const finalValue = normalizeFormValue(value);
                        key.includes(".") || key.includes("[") ? setNestedValue(body, key, finalValue) : body[key] = finalValue;
                      }
                      break;
                    }
                    default: {
                      const parser = app["~parser"][hook];
                      if (parser) {
                        let temp = parser(context, contentType);
                        if (temp instanceof Promise && (temp = await temp), temp) {
                          body = temp;
                          break;
                        }
                      }
                      break;
                    }
                  }
                else {
                  let temp = hook(context, contentType);
                  if (temp instanceof Promise && (temp = await temp), temp) {
                    body = temp;
                    break;
                  }
                }
              }
            if (delete context.contentType, body === undefined)
              switch (contentType) {
                case "application/json":
                  body = await request.json();
                  break;
                case "text/plain":
                  body = await request.text();
                  break;
                case "application/x-www-form-urlencoded":
                  body = parseQuery(await request.text());
                  break;
                case "application/octet-stream":
                  body = await request.arrayBuffer();
                  break;
                case "multipart/form-data": {
                  body = {};
                  const form = await request.formData(), grouped = /* @__PURE__ */ new Map;
                  form.forEach((v, k) => {
                    const list = grouped.get(k);
                    list ? list.push(v) : grouped.set(k, [v]);
                  });
                  for (const [key, value] of grouped) {
                    if (body[key])
                      continue;
                    const finalValue = normalizeFormValue(value);
                    key.includes(".") || key.includes("[") ? setNestedValue(body, key, finalValue) : body[key] = finalValue;
                  }
                  break;
                }
              }
          }
        }
      context.route = route, context.body = body, context.params = handler?.params || undefined, context.query = qi === -1 ? {} : parseQuery(url.substring(qi + 1)), context.headers = {};
      for (const [key, value] of request.headers.entries())
        context.headers[key] = value;
      const cookieMeta = {
        domain: app.config.cookie?.domain ?? validator?.cookie?.config.domain,
        expires: app.config.cookie?.expires ?? validator?.cookie?.config.expires,
        httpOnly: app.config.cookie?.httpOnly ?? validator?.cookie?.config.httpOnly,
        maxAge: app.config.cookie?.maxAge ?? validator?.cookie?.config.maxAge,
        path: app.config.cookie?.path ?? validator?.cookie?.config.path,
        priority: app.config.cookie?.priority ?? validator?.cookie?.config.priority,
        partitioned: app.config.cookie?.partitioned ?? validator?.cookie?.config.partitioned,
        sameSite: app.config.cookie?.sameSite ?? validator?.cookie?.config.sameSite,
        secure: app.config.cookie?.secure ?? validator?.cookie?.config.secure,
        secrets: app.config.cookie?.secrets ?? validator?.cookie?.config.secrets,
        sign: app.config.cookie?.sign ?? validator?.cookie?.config.sign
      }, cookieHeaderValue = request.headers.get("cookie");
      context.cookie = await parseCookie(context.set, cookieHeaderValue, cookieMeta);
      const headerValidator = validator?.createHeaders?.();
      headerValidator && injectDefaultValues(headerValidator, context.headers);
      const paramsValidator = validator?.createParams?.();
      paramsValidator && injectDefaultValues(paramsValidator, context.params);
      const queryValidator = validator?.createQuery?.();
      if (queryValidator && injectDefaultValues(queryValidator, context.query), hooks.transform)
        for (let i = 0;i < hooks.transform.length; i++) {
          const hook = hooks.transform[i];
          let response2 = hook.fn(context);
          if (response2 instanceof Promise && (response2 = await response2), response2 instanceof ElysiaCustomStatusResponse) {
            const result = mapEarlyResponse(response2, context.set);
            if (result)
              return context.response = result;
          }
          hook.subType === "derive" && Object.assign(context, response2);
        }
      if (validator) {
        if (headerValidator) {
          const _header = structuredClone(context.headers);
          for (const [key, value] of request.headers)
            _header[key] = value;
          if (headerValidator.provider === "standard")
            context.headers = await validateStandardSchema("header", headerValidator, _header);
          else if (validator.headers.Check(_header) === false)
            throw new ValidationError("header", validator.headers, _header);
        } else
          validator.headers?.Decode && (context.headers = validator.headers.Decode(context.headers));
        if (paramsValidator?.provider === "standard")
          context.params = await validateStandardSchema("params", paramsValidator, context.params);
        else {
          if (paramsValidator?.Check(context.params) === false)
            throw new ValidationError("params", validator.params, context.params);
          validator.params?.Decode && (context.params = validator.params.Decode(context.params));
        }
        if (validator.query?.schema) {
          let schema = validator.query.schema;
          schema.$defs?.[schema.$ref] && (schema = schema.$defs[schema.$ref]);
          const properties = getSchemaProperties(schema);
          if (properties)
            for (const property of Object.keys(properties)) {
              const value = properties[property];
              (value.type === "array" || value.items?.type === "string") && typeof context.query[property] == "string" && context.query[property] && (context.query[property] = context.query[property].split(","));
            }
        }
        if (queryValidator?.provider === "standard")
          context.query = await validateStandardSchema("query", queryValidator, context.query);
        else {
          if (queryValidator?.Check(context.query) === false)
            throw new ValidationError("query", validator.query, context.query);
          validator.query?.Decode && (context.query = validator.query.Decode(context.query));
        }
        if (validator.createCookie?.()) {
          let cookieValue = {};
          for (const [key, value] of Object.entries(context.cookie))
            cookieValue[key] = value.value;
          if (validator.cookie.provider === "standard") {
            cookieValue = await validateStandardSchema("cookie", validator.cookie, cookieValue);
            for (const key of Object.keys(cookieValue))
              context.cookie[key].value = cookieValue[key];
          } else {
            if (validator.cookie.Check(cookieValue) === false)
              throw new ValidationError("cookie", validator.cookie, cookieValue);
            validator.cookie?.Decode && (cookieValue = validator.cookie.Decode(cookieValue));
          }
        }
        const bodyValidator = validator.createBody?.();
        if (bodyValidator?.provider === "standard")
          context.body = await validateStandardSchema("body", bodyValidator, body);
        else {
          if (bodyValidator?.Check(body) === false)
            throw new ValidationError("body", validator.body, body);
          if (validator.body?.Decode) {
            let decoded = validator.body.Decode(body);
            decoded instanceof Promise && (decoded = await decoded), context.body = decoded?.value ?? decoded;
          }
        }
      }
      if (hooks.beforeHandle)
        for (let i = 0;i < hooks.beforeHandle.length; i++) {
          const hook = hooks.beforeHandle[i];
          let response2 = hook.fn(context);
          if (response2 instanceof Promise && (response2 = await response2), response2 instanceof ElysiaCustomStatusResponse) {
            const result = mapEarlyResponse(response2, context.set);
            if (result)
              return context.response = result;
          }
          if (hook.subType === "resolve") {
            Object.assign(context, response2);
            continue;
          }
          if (response2 !== undefined) {
            if (context.response = response2, hooks.afterHandle)
              for (let i2 = 0;i2 < hooks.afterHandle.length; i2++) {
                let newResponse = hooks.afterHandle[i2].fn(context);
                newResponse instanceof Promise && (newResponse = await newResponse), newResponse && (response2 = newResponse);
              }
            const result = mapEarlyResponse(response2, context.set);
            if (result)
              return context.response = result;
          }
        }
      let response = typeof handle == "function" ? handle(context) : handle;
      if (response instanceof Promise && (response = await response), hooks.afterHandle?.length) {
        context.response = response;
        for (let i = 0;i < hooks.afterHandle.length; i++) {
          let response2 = hooks.afterHandle[i].fn(context);
          response2 instanceof Promise && (response2 = await response2);
          const isCustomStatuResponse = response2 instanceof ElysiaCustomStatusResponse, status2 = isCustomStatuResponse ? response2.code : set.status ? typeof set.status == "string" ? StatusMap[set.status] : set.status : 200;
          isCustomStatuResponse && (set.status = status2, response2 = response2.response);
          const responseValidator = validator?.createResponse?.()?.[status2];
          if (responseValidator?.provider === "standard")
            response2 = await validateStandardSchema("response", responseValidator, response2);
          else if (responseValidator?.Check(response2) === false)
            if (responseValidator?.Clean)
              try {
                const temp = responseValidator.Clean(response2);
                if (responseValidator?.Check(temp) === false)
                  throw new ValidationError("response", responseValidator, response2);
                response2 = temp;
              } catch (error) {
                throw error instanceof ValidationError ? error : new ValidationError("response", responseValidator, response2);
              }
            else
              throw new ValidationError("response", responseValidator, response2);
          if (responseValidator?.Encode && (context.response = response2 = responseValidator.Encode(response2)), responseValidator?.Clean)
            try {
              context.response = response2 = responseValidator.Clean(response2);
            } catch {}
          const result = mapEarlyResponse(response2, context.set);
          if (result !== undefined)
            return context.response = result;
        }
      } else {
        const isCustomStatuResponse = response instanceof ElysiaCustomStatusResponse, status2 = isCustomStatuResponse ? response.code : set.status ? typeof set.status == "string" ? StatusMap[set.status] : set.status : 200;
        isCustomStatuResponse && (set.status = status2, response = response.response);
        const responseValidator = validator?.createResponse?.()?.[status2];
        if (responseValidator?.provider === "standard")
          response = await validateStandardSchema("response", responseValidator, response);
        else if (responseValidator?.Check(response) === false)
          if (responseValidator?.Clean)
            try {
              const temp = responseValidator.Clean(response);
              if (responseValidator?.Check(temp) === false)
                throw new ValidationError("response", responseValidator, response);
              response = temp;
            } catch (error) {
              throw error instanceof ValidationError ? error : new ValidationError("response", responseValidator, response);
            }
          else
            throw new ValidationError("response", responseValidator, response);
        if (responseValidator?.Encode && (response = responseValidator.Encode(response)), responseValidator?.Clean)
          try {
            response = responseValidator.Clean(response);
          } catch {}
      }
      if (context.set.cookie && cookieMeta?.sign) {
        const secret = cookieMeta.secrets ? typeof cookieMeta.secrets == "string" ? cookieMeta.secrets : cookieMeta.secrets[0] : undefined;
        if (cookieMeta.sign === true) {
          if (secret)
            for (const [key, cookie] of Object.entries(context.set.cookie))
              context.set.cookie[key].value = await signCookie(cookie.value, secret);
        } else {
          const properties = getSchemaProperties(validator?.cookie?.schema);
          if (secret)
            for (const name of cookieMeta.sign)
              !properties || !(name in properties) || context.set.cookie[name]?.value && (context.set.cookie[name].value = await signCookie(context.set.cookie[name].value, secret));
        }
      }
      return mapResponse(context.response = response, context.set);
    } catch (error) {
      const reportedError = error instanceof TransformDecodeError && error.error ? error.error : error;
      return app.handleError(context, reportedError);
    } finally {
      const afterResponses = hooks ? hooks.afterResponse : app.event.afterResponse;
      afterResponses && (hasSetImmediate ? setImmediate(async () => {
        for (const afterResponse of afterResponses)
          await afterResponse.fn(context);
      }) : Promise.resolve().then(async () => {
        for (const afterResponse of afterResponses)
          await afterResponse.fn(context);
      }));
    }
  };
};
var createDynamicErrorHandler = (app) => {
  const { mapResponse } = app["~adapter"].handler;
  return async (context, error) => {
    const errorContext = Object.assign(context, { error, code: error.code });
    if (errorContext.set = context.set, typeof error?.toResponse == "function" && !(error instanceof ValidationError) && !(error instanceof TransformDecodeError))
      try {
        let raw = error.toResponse();
        typeof raw?.then == "function" && (raw = await raw), raw instanceof Response && (context.set.status = raw.status), context.response = raw;
      } catch {}
    if (!context.response && app.event.error)
      for (let i = 0;i < app.event.error.length; i++) {
        let response = app.event.error[i].fn(errorContext);
        if (response instanceof Promise && (response = await response), response != null)
          return context.response = mapResponse(response, context.set);
      }
    if (context.response) {
      if (app.event.mapResponse)
        for (let i = 0;i < app.event.mapResponse.length; i++) {
          let response = app.event.mapResponse[i].fn(errorContext);
          response instanceof Promise && (response = await response), response != null && (context.response = response);
        }
      return mapResponse(context.response, context.set);
    }
    return context.set.status = error.status ?? 500, mapResponse(typeof error.cause == "string" ? error.cause : error.message, context.set);
  };
};

// node_modules/elysia/dist/index.mjs
var _a;
_a = Symbol.dispose;
var _Elysia = class _Elysia {
  constructor(config = {}) {
    this.server = null;
    this.dependencies = {};
    this["~Prefix"] = "";
    this["~Singleton"] = null;
    this["~Definitions"] = null;
    this["~Metadata"] = null;
    this["~Ephemeral"] = null;
    this["~Volatile"] = null;
    this["~Routes"] = null;
    this.singleton = {
      decorator: {},
      store: {},
      derive: {},
      resolve: {}
    };
    this.definitions = {
      typebox: t.Module({}),
      type: {},
      error: {}
    };
    this.extender = {
      macro: {},
      higherOrderFunctions: []
    };
    this.validator = {
      global: null,
      scoped: null,
      local: null,
      getCandidate() {
        return !this.global && !this.scoped && !this.local ? {
          body: undefined,
          headers: undefined,
          params: undefined,
          query: undefined,
          cookie: undefined,
          response: undefined
        } : mergeSchemaValidator(mergeSchemaValidator(this.global, this.scoped), this.local);
      }
    };
    this.standaloneValidator = {
      global: null,
      scoped: null,
      local: null
    };
    this.event = {};
    this.router = {
      "~http": undefined,
      get http() {
        return this["~http"] || (this["~http"] = new Memoirist({
          lazy: true,
          onParam: import_fast_decode_uri_component4.default
        })), this["~http"];
      },
      "~dynamic": undefined,
      get dynamic() {
        return this["~dynamic"] || (this["~dynamic"] = new Memoirist({
          onParam: import_fast_decode_uri_component4.default
        })), this["~dynamic"];
      },
      static: {},
      response: {},
      history: []
    };
    this.routeTree = {};
    this.inference = {
      body: false,
      cookie: false,
      headers: false,
      query: false,
      set: false,
      server: false,
      path: false,
      route: false,
      url: false
    };
    this["~parser"] = {};
    this.handle = async (request) => this.fetch(request);
    this.handleError = async (context, error) => (this.handleError = this.config.aot ? composeErrorHandler(this) : createDynamicErrorHandler(this))(context, error);
    this.listen = (options, callback) => (this["~adapter"].listen(this)(options, callback), this);
    this.stop = async (closeActiveConnections) => (await this["~adapter"].stop?.(this, closeActiveConnections), this);
    this[_a] = () => {
      this.server && this.stop();
    };
    config.tags && (config.detail ? config.detail.tags = config.tags : config.detail = {
      tags: config.tags
    }), this.config = {
      aot: env2.ELYSIA_AOT !== "false",
      nativeStaticResponse: true,
      encodeSchema: true,
      normalize: true,
      ...config,
      prefix: config.prefix ? config.prefix.charCodeAt(0) === 47 ? config.prefix : `/${config.prefix}` : undefined,
      cookie: {
        path: "/",
        ...config?.cookie
      },
      experimental: config?.experimental ?? {},
      seed: config?.seed === undefined ? "" : config?.seed
    }, this["~adapter"] = config.adapter ?? (typeof Bun < "u" ? BunAdapter : WebStandardAdapter), config?.analytic && (config?.name || config?.seed !== undefined) && (this.telemetry = {
      stack: new Error().stack
    });
  }
  get store() {
    return this.singleton.store;
  }
  get decorator() {
    return this.singleton.decorator;
  }
  get routes() {
    return this.router.history;
  }
  getGlobalRoutes() {
    return this.router.history;
  }
  getGlobalDefinitions() {
    return this.definitions;
  }
  getServer() {
    return this.server;
  }
  getParent() {
    return null;
  }
  get promisedModules() {
    return this._promisedModules || (this._promisedModules = new PromiseGroup(console.error, () => {})), this._promisedModules;
  }
  env(model, _env = env2) {
    if (getSchemaValidator(model, {
      modules: this.definitions.typebox,
      dynamic: true,
      additionalProperties: true,
      coerce: true,
      sanitize: () => this.config.sanitize
    }).Check(_env) === false) {
      const error = new ValidationError("env", model, _env);
      throw new Error(error.all.map((x) => x.summary).join(`
`));
    }
    return this;
  }
  wrap(fn) {
    return this.extender.higherOrderFunctions.push({
      checksum: checksum(JSON.stringify({
        name: this.config.name,
        seed: this.config.seed,
        content: fn.toString()
      })),
      fn
    }), this;
  }
  get models() {
    const models = {};
    for (const name of Object.keys(this.definitions.type))
      models[name] = getSchemaValidator(this.definitions.typebox.Import(name), {
        models: this.definitions.type
      });
    return models.modules = this.definitions.typebox, models;
  }
  add(method, path, handle, localHook, options) {
    const skipPrefix = options?.skipPrefix ?? false, allowMeta = options?.allowMeta ?? false;
    localHook ??= {}, this.applyMacro(localHook);
    let standaloneValidators = [];
    if (localHook.standaloneValidator && (standaloneValidators = standaloneValidators.concat(localHook.standaloneValidator)), this.standaloneValidator.local && (standaloneValidators = standaloneValidators.concat(this.standaloneValidator.local)), this.standaloneValidator.scoped && (standaloneValidators = standaloneValidators.concat(this.standaloneValidator.scoped)), this.standaloneValidator.global && (standaloneValidators = standaloneValidators.concat(this.standaloneValidator.global)), path !== "" && path.charCodeAt(0) !== 47 && (path = "/" + path), this.config.prefix && !skipPrefix && (path = this.config.prefix + path), localHook?.type)
      switch (localHook.type) {
        case "text":
          localHook.type = "text/plain";
          break;
        case "json":
          localHook.type = "application/json";
          break;
        case "formdata":
          localHook.type = "multipart/form-data";
          break;
        case "urlencoded":
          localHook.type = "application/x-www-form-urlencoded";
          break;
        case "arrayBuffer":
          localHook.type = "application/octet-stream";
          break;
        default:
          break;
      }
    const instanceValidator = this.validator.getCandidate(), cloned = {
      body: localHook?.body ?? instanceValidator?.body,
      headers: localHook?.headers ?? instanceValidator?.headers,
      params: localHook?.params ?? instanceValidator?.params,
      query: localHook?.query ?? instanceValidator?.query,
      cookie: localHook?.cookie ?? instanceValidator?.cookie,
      response: localHook?.response ?? instanceValidator?.response
    }, shouldPrecompile = this.config.precompile === true || typeof this.config.precompile == "object" && this.config.precompile.compose === true, createValidator = () => {
      const models = this.definitions.type, dynamic = !this.config.aot, normalize = this.config.normalize, modules = this.definitions.typebox, sanitize = () => this.config.sanitize, cookieValidator = () => {
        if (cloned.cookie || standaloneValidators.find((x) => x.cookie))
          return getCookieValidator({
            modules,
            validator: cloned.cookie,
            defaultConfig: this.config.cookie,
            normalize,
            config: cloned.cookie?.config ?? {},
            dynamic,
            models,
            validators: standaloneValidators.map((x) => x.cookie),
            sanitize
          });
      };
      return shouldPrecompile ? {
        body: getSchemaValidator(cloned.body, {
          modules,
          dynamic,
          models,
          normalize,
          additionalCoerce: (() => {
            const resolved = resolveSchema(cloned.body, models, modules);
            return resolved && Kind in resolved && (hasType("File", resolved) || hasType("Files", resolved)) ? coerceFormData() : coercePrimitiveRoot();
          })(),
          validators: standaloneValidators.map((x) => x.body),
          sanitize
        }),
        headers: getSchemaValidator(cloned.headers, {
          modules,
          dynamic,
          models,
          additionalProperties: true,
          coerce: true,
          additionalCoerce: stringToStructureCoercions(),
          validators: standaloneValidators.map((x) => x.headers),
          sanitize
        }),
        params: getSchemaValidator(cloned.params, {
          modules,
          dynamic,
          models,
          coerce: true,
          additionalCoerce: stringToStructureCoercions(),
          validators: standaloneValidators.map((x) => x.params),
          sanitize
        }),
        query: getSchemaValidator(cloned.query, {
          modules,
          dynamic,
          models,
          normalize,
          coerce: true,
          additionalCoerce: queryCoercions(),
          validators: standaloneValidators.map((x) => x.query),
          sanitize
        }),
        cookie: cookieValidator(),
        response: getResponseSchemaValidator(cloned.response, {
          modules,
          dynamic,
          models,
          normalize,
          validators: standaloneValidators.map((x) => x.response),
          sanitize
        })
      } : {
        createBody() {
          return this.body ? this.body : this.body = getSchemaValidator(cloned.body, {
            modules,
            dynamic,
            models,
            normalize,
            additionalCoerce: (() => {
              const resolved = resolveSchema(cloned.body, models, modules);
              return resolved && Kind in resolved && (hasType("File", resolved) || hasType("Files", resolved)) ? coerceFormData() : coercePrimitiveRoot();
            })(),
            validators: standaloneValidators.map((x) => x.body),
            sanitize
          });
        },
        createHeaders() {
          return this.headers ? this.headers : this.headers = getSchemaValidator(cloned.headers, {
            modules,
            dynamic,
            models,
            normalize,
            additionalProperties: !normalize,
            coerce: true,
            additionalCoerce: stringToStructureCoercions(),
            validators: standaloneValidators.map((x) => x.headers),
            sanitize
          });
        },
        createParams() {
          return this.params ? this.params : this.params = getSchemaValidator(cloned.params, {
            modules,
            dynamic,
            models,
            normalize,
            coerce: true,
            additionalCoerce: stringToStructureCoercions(),
            validators: standaloneValidators.map((x) => x.params),
            sanitize
          });
        },
        createQuery() {
          return this.query ? this.query : this.query = getSchemaValidator(cloned.query, {
            modules,
            dynamic,
            models,
            normalize,
            coerce: true,
            additionalCoerce: queryCoercions(),
            validators: standaloneValidators.map((x) => x.query),
            sanitize
          });
        },
        createCookie() {
          return this.cookie ? this.cookie : this.cookie = cookieValidator();
        },
        createResponse() {
          return this.response ? this.response : this.response = getResponseSchemaValidator(cloned.response, {
            modules,
            dynamic,
            models,
            normalize,
            validators: standaloneValidators.map((x) => x.response),
            sanitize
          });
        }
      };
    };
    (instanceValidator.body || instanceValidator.cookie || instanceValidator.headers || instanceValidator.params || instanceValidator.query || instanceValidator.response) && (localHook = mergeHook(localHook, instanceValidator)), localHook.tags && (localHook.detail ? localHook.detail.tags = localHook.tags : localHook.detail = {
      tags: localHook.tags
    }), isNotEmpty(this.config.detail) && (localHook.detail = mergeDeep(Object.assign({}, this.config.detail), localHook.detail));
    const hooks = isNotEmpty(this.event) ? mergeHook(this.event, localHookToLifeCycleStore(localHook)) : { ...lifeCycleToArray(localHookToLifeCycleStore(localHook)) };
    if (standaloneValidators.length && Object.assign(hooks, {
      standaloneValidator: standaloneValidators
    }), this.config.aot === false) {
      const validator = createValidator();
      this.router.dynamic.add(method, path, {
        validator,
        hooks,
        content: localHook?.type,
        handle,
        route: path
      });
      const encoded = encodePath(path, { dynamic: true });
      if (path !== encoded && this.router.dynamic.add(method, encoded, {
        validator,
        hooks,
        content: localHook?.type,
        handle,
        route: path
      }), !this.config.strictPath) {
        const loosePath = getLoosePath(path);
        this.router.dynamic.add(method, loosePath, {
          validator,
          hooks,
          content: localHook?.type,
          handle,
          route: path
        });
        const encoded2 = encodePath(loosePath);
        loosePath !== encoded2 && this.router.dynamic.add(method, loosePath, {
          validator,
          hooks,
          content: localHook?.type,
          handle,
          route: path
        });
      }
      this.router.history.push({
        method,
        path,
        composed: null,
        handler: handle,
        compile: undefined,
        hooks
      });
      return;
    }
    const adapter = this["~adapter"].handler, nativeStaticHandler = typeof handle != "function" ? () => {
      const fn = adapter.createNativeStaticHandler?.(handle, hooks, {
        headers: Object.assign({}, this.setHeaders)
      });
      return fn instanceof Promise ? fn.then((fn2) => {
        if (fn2)
          return fn2;
      }) : fn?.();
    } : undefined, useNativeStaticResponse = this.config.nativeStaticResponse === true, addResponsePath = (path2) => {
      !useNativeStaticResponse || !nativeStaticHandler || (supportPerMethodInlineHandler ? this.router.response[path2] ? this.router.response[path2][method] = nativeStaticHandler() : this.router.response[path2] = {
        [method]: nativeStaticHandler()
      } : this.router.response[path2] = nativeStaticHandler());
    };
    addResponsePath(path);
    let _compiled;
    const compile = () => {
      if (_compiled)
        return _compiled;
      const compiled = composeHandler({
        app: this,
        path,
        method,
        hooks,
        validator: createValidator(),
        handler: typeof handle != "function" && typeof adapter.createStaticHandler != "function" ? () => handle : handle,
        allowMeta,
        inference: this.inference
      });
      return this.router.history[index] && (_compiled = this.router.history[index].composed = compiled), compiled;
    };
    let oldIndex;
    if (`${method}_${path}` in this.routeTree)
      for (let i = 0;i < this.router.history.length; i++) {
        const route2 = this.router.history[i];
        if (route2.path === path && route2.method === method) {
          oldIndex = i;
          break;
        }
      }
    else
      this.routeTree[`${method}_${path}`] = this.router.history.length;
    const index = oldIndex ?? this.router.history.length, route = this.router.history, mainHandler = shouldPrecompile ? compile() : (ctx) => _compiled ? _compiled(ctx) : (route[index].composed = compile())(ctx);
    oldIndex !== undefined ? this.router.history[oldIndex] = Object.assign({
      method,
      path,
      composed: mainHandler,
      compile,
      handler: handle,
      hooks
    }, standaloneValidators.length ? {
      standaloneValidators
    } : undefined, localHook.webSocket ? { websocket: localHook.websocket } : undefined) : this.router.history.push(Object.assign({
      method,
      path,
      composed: mainHandler,
      compile,
      handler: handle,
      hooks
    }, localHook.webSocket ? { websocket: localHook.websocket } : undefined));
    const handler = {
      handler: shouldPrecompile ? route[index].composed : undefined,
      compile() {
        return this.handler = compile();
      }
    }, staticRouter = this.router.static, isStaticPath = path.indexOf(":") === -1 && path.indexOf("*") === -1;
    if (method === "WS") {
      if (isStaticPath) {
        path in staticRouter ? staticRouter[path][method] = index : staticRouter[path] = {
          [method]: index
        };
        return;
      }
      this.router.http.add("WS", path, handler), this.config.strictPath || this.router.http.add("WS", getLoosePath(path), handler);
      const encoded = encodePath(path, { dynamic: true });
      path !== encoded && this.router.http.add("WS", encoded, handler);
      return;
    }
    if (isStaticPath)
      path in staticRouter ? staticRouter[path][method] = index : staticRouter[path] = {
        [method]: index
      }, this.config.strictPath || addResponsePath(getLoosePath(path));
    else {
      if (this.router.http.add(method, path, handler), !this.config.strictPath) {
        const loosePath = getLoosePath(path);
        addResponsePath(loosePath), this.router.http.add(method, loosePath, handler);
      }
      const encoded = encodePath(path, { dynamic: true });
      path !== encoded && (this.router.http.add(method, encoded, handler), addResponsePath(encoded));
    }
  }
  headers(header) {
    return header ? (this.setHeaders || (this.setHeaders = {}), this.setHeaders = mergeDeep(this.setHeaders, header), this) : this;
  }
  onStart(handler) {
    return this.on("start", handler), this;
  }
  onRequest(handler) {
    return this.on("request", handler), this;
  }
  onParse(options, handler) {
    return handler ? this.on(options, "parse", handler) : typeof options == "string" ? this.on("parse", this["~parser"][options]) : this.on("parse", options);
  }
  parser(name, parser) {
    return this["~parser"][name] = parser, this;
  }
  onTransform(options, handler) {
    return handler ? this.on(options, "transform", handler) : this.on("transform", options);
  }
  resolve(optionsOrResolve, resolve) {
    resolve || (resolve = optionsOrResolve, optionsOrResolve = { as: "local" });
    const hook = {
      subType: "resolve",
      fn: resolve
    };
    return this.onBeforeHandle(optionsOrResolve, hook);
  }
  mapResolve(optionsOrResolve, mapper) {
    mapper || (mapper = optionsOrResolve, optionsOrResolve = { as: "local" });
    const hook = {
      subType: "mapResolve",
      fn: mapper
    };
    return this.onBeforeHandle(optionsOrResolve, hook);
  }
  onBeforeHandle(options, handler) {
    return handler ? this.on(options, "beforeHandle", handler) : this.on("beforeHandle", options);
  }
  onAfterHandle(options, handler) {
    return handler ? this.on(options, "afterHandle", handler) : this.on("afterHandle", options);
  }
  mapResponse(options, handler) {
    return handler ? this.on(options, "mapResponse", handler) : this.on("mapResponse", options);
  }
  onAfterResponse(options, handler) {
    return handler ? this.on(options, "afterResponse", handler) : this.on("afterResponse", options);
  }
  trace(options, handler) {
    handler || (handler = options, options = { as: "local" }), Array.isArray(handler) || (handler = [handler]);
    for (const fn of handler)
      this.on(options, "trace", createTracer(fn));
    return this;
  }
  error(name, error) {
    switch (typeof name) {
      case "string":
        return error.prototype[ERROR_CODE] = name, this.definitions.error[name] = error, this;
      case "function":
        return this.definitions.error = name(this.definitions.error), this;
    }
    for (const [code, error2] of Object.entries(name))
      error2.prototype[ERROR_CODE] = code, this.definitions.error[code] = error2;
    return this;
  }
  onError(options, handler) {
    return handler ? this.on(options, "error", handler) : this.on("error", options);
  }
  onStop(handler) {
    return this.on("stop", handler), this;
  }
  on(optionsOrType, typeOrHandlers, handlers) {
    let type;
    switch (typeof optionsOrType) {
      case "string":
        type = optionsOrType, handlers = typeOrHandlers;
        break;
      case "object":
        type = typeOrHandlers, !Array.isArray(typeOrHandlers) && typeof typeOrHandlers == "object" && (handlers = typeOrHandlers);
        break;
    }
    Array.isArray(handlers) ? handlers = fnToContainer(handlers) : typeof handlers == "function" ? handlers = [
      {
        fn: handlers
      }
    ] : handlers = [handlers];
    const handles = handlers;
    for (const handle of handles)
      handle.scope = typeof optionsOrType == "string" ? "local" : optionsOrType?.as ?? "local", (type === "resolve" || type === "derive") && (handle.subType = type);
    type !== "trace" && (this.inference = sucrose({
      [type]: handles.map((x) => x.fn)
    }, this.inference, this.config.sucrose));
    for (const handle of handles) {
      const fn = asHookType(handle, "global", { skipIfHasType: true });
      switch ((this.config.name || this.config.seed) && (fn.checksum = checksum(this.config.name + JSON.stringify(this.config.seed))), type) {
        case "start":
          this.event.start ??= [], this.event.start.push(fn);
          break;
        case "request":
          this.event.request ??= [], this.event.request.push(fn);
          break;
        case "parse":
          this.event.parse ??= [], this.event.parse.push(fn);
          break;
        case "transform":
          this.event.transform ??= [], this.event.transform.push(fn);
          break;
        case "derive":
          this.event.transform ??= [], this.event.transform.push(fnToContainer(fn, "derive"));
          break;
        case "beforeHandle":
          this.event.beforeHandle ??= [], this.event.beforeHandle.push(fn);
          break;
        case "resolve":
          this.event.beforeHandle ??= [], this.event.beforeHandle.push(fnToContainer(fn, "resolve"));
          break;
        case "afterHandle":
          this.event.afterHandle ??= [], this.event.afterHandle.push(fn);
          break;
        case "mapResponse":
          this.event.mapResponse ??= [], this.event.mapResponse.push(fn);
          break;
        case "afterResponse":
          this.event.afterResponse ??= [], this.event.afterResponse.push(fn);
          break;
        case "trace":
          this.event.trace ??= [], this.event.trace.push(fn);
          break;
        case "error":
          this.event.error ??= [], this.event.error.push(fn);
          break;
        case "stop":
          this.event.stop ??= [], this.event.stop.push(fn);
          break;
      }
    }
    return this;
  }
  as(type) {
    return promoteEvent(this.event.parse, type), promoteEvent(this.event.transform, type), promoteEvent(this.event.beforeHandle, type), promoteEvent(this.event.afterHandle, type), promoteEvent(this.event.mapResponse, type), promoteEvent(this.event.afterResponse, type), promoteEvent(this.event.trace, type), promoteEvent(this.event.error, type), type === "scoped" ? (this.validator.scoped = mergeSchemaValidator(this.validator.scoped, this.validator.local), this.validator.local = null, this.standaloneValidator.local !== null && (this.standaloneValidator.scoped ||= [], this.standaloneValidator.scoped.push(...this.standaloneValidator.local), this.standaloneValidator.local = null)) : type === "global" && (this.validator.global = mergeSchemaValidator(this.validator.global, mergeSchemaValidator(this.validator.scoped, this.validator.local)), this.validator.scoped = null, this.validator.local = null, this.standaloneValidator.local !== null && (this.standaloneValidator.scoped ||= [], this.standaloneValidator.scoped.push(...this.standaloneValidator.local), this.standaloneValidator.local = null), this.standaloneValidator.scoped !== null && (this.standaloneValidator.global ||= [], this.standaloneValidator.global.push(...this.standaloneValidator.scoped), this.standaloneValidator.scoped = null)), this;
  }
  group(prefix, schemaOrRun, run) {
    const instance = new _Elysia({
      ...this.config,
      prefix: ""
    });
    instance.singleton = { ...this.singleton }, instance.definitions = { ...this.definitions }, instance.getServer = () => this.getServer(), instance.inference = cloneInference(this.inference), instance.extender = { ...this.extender }, instance["~parser"] = this["~parser"], instance.standaloneValidator = {
      local: [...this.standaloneValidator.local ?? []],
      scoped: [...this.standaloneValidator.scoped ?? []],
      global: [...this.standaloneValidator.global ?? []]
    };
    const isSchema = typeof schemaOrRun == "object", sandbox = (isSchema ? run : schemaOrRun)(instance);
    return this.singleton = mergeDeep(this.singleton, instance.singleton), this.definitions = mergeDeep(this.definitions, instance.definitions), sandbox.event.request?.length && (this.event.request = [
      ...this.event.request || [],
      ...sandbox.event.request || []
    ]), sandbox.event.mapResponse?.length && (this.event.mapResponse = [
      ...this.event.mapResponse || [],
      ...sandbox.event.mapResponse || []
    ]), this.model(sandbox.definitions.type), Object.values(instance.router.history).forEach(({ method, path, handler, hooks }) => {
      if (path = (isSchema ? "" : this.config.prefix ?? "") + prefix + path, isSchema) {
        const {
          body,
          headers,
          query,
          params,
          cookie,
          response,
          ...hook
        } = schemaOrRun, localHook = hooks;
        this.applyMacro(hook);
        const hasStandaloneSchema = body || headers || query || params || cookie || response;
        this.add(method, path, handler, mergeHook(hook, {
          ...localHook || {},
          error: localHook.error ? Array.isArray(localHook.error) ? [
            ...localHook.error ?? [],
            ...sandbox.event.error ?? []
          ] : [
            localHook.error,
            ...sandbox.event.error ?? []
          ] : sandbox.event.error,
          standaloneValidator: hook.standaloneValidator || localHook.standaloneValidator || hasStandaloneSchema ? [
            ...hook.standaloneValidator ?? [],
            ...localHook.standaloneValidator ?? [],
            ...hasStandaloneSchema ? [
              {
                body,
                headers,
                query,
                params,
                cookie,
                response
              }
            ] : []
          ] : undefined
        }), undefined);
      } else
        this.add(method, path, handler, mergeHook(hooks, {
          error: sandbox.event.error
        }), {
          skipPrefix: true
        });
    }), this;
  }
  guard(hook, run) {
    if (!run) {
      if (typeof hook == "object") {
        this.applyMacro(hook), hook.detail && (this.config.detail ? this.config.detail = mergeDeep(Object.assign({}, this.config.detail), hook.detail) : this.config.detail = hook.detail), hook.tags && (this.config.detail ? this.config.detail.tags = hook.tags : this.config.detail = {
          tags: hook.tags
        });
        const type = hook.as ?? "local";
        if (hook.schema === "standalone") {
          this.standaloneValidator[type] || (this.standaloneValidator[type] = []);
          const response = hook?.response ? typeof hook.response == "string" || Kind in hook.response || "~standard" in hook.response ? {
            200: hook.response
          } : hook?.response : undefined;
          this.standaloneValidator[type].push({
            body: hook.body,
            headers: hook.headers,
            params: hook.params,
            query: hook.query,
            response,
            cookie: hook.cookie
          });
        } else
          this.validator[type] = {
            body: hook.body ?? this.validator[type]?.body,
            headers: hook.headers ?? this.validator[type]?.headers,
            params: hook.params ?? this.validator[type]?.params,
            query: hook.query ?? this.validator[type]?.query,
            response: hook.response ?? this.validator[type]?.response,
            cookie: hook.cookie ?? this.validator[type]?.cookie
          };
        return hook.parse && this.on({ as: type }, "parse", hook.parse), hook.transform && this.on({ as: type }, "transform", hook.transform), hook.derive && this.on({ as: type }, "derive", hook.derive), hook.beforeHandle && this.on({ as: type }, "beforeHandle", hook.beforeHandle), hook.resolve && this.on({ as: type }, "resolve", hook.resolve), hook.afterHandle && this.on({ as: type }, "afterHandle", hook.afterHandle), hook.mapResponse && this.on({ as: type }, "mapResponse", hook.mapResponse), hook.afterResponse && this.on({ as: type }, "afterResponse", hook.afterResponse), hook.error && this.on({ as: type }, "error", hook.error), this;
      }
      return this.guard({}, hook);
    }
    const instance = new _Elysia({
      ...this.config,
      prefix: ""
    });
    instance.singleton = { ...this.singleton }, instance.definitions = { ...this.definitions }, instance.inference = cloneInference(this.inference), instance.extender = { ...this.extender }, instance.getServer = () => this.getServer();
    const sandbox = run(instance);
    if (this.singleton = mergeDeep(this.singleton, instance.singleton), this.definitions = mergeDeep(this.definitions, instance.definitions), sandbox.getServer = () => this.server, sandbox.event.request?.length && (this.event.request = [
      ...this.event.request || [],
      ...sandbox.event.request || []
    ]), sandbox.event.mapResponse?.length && (this.event.mapResponse = [
      ...this.event.mapResponse || [],
      ...sandbox.event.mapResponse || []
    ]), this.model(sandbox.definitions.type), Object.values(instance.router.history).forEach(({ method, path, handler, hooks: localHook }) => {
      const {
        body,
        headers,
        query,
        params,
        cookie,
        response,
        ...guardHook
      } = hook, hasStandaloneSchema = body || headers || query || params || cookie || response;
      this.add(method, path, handler, mergeHook(guardHook, {
        ...localHook || {},
        error: localHook.error ? Array.isArray(localHook.error) ? [
          ...localHook.error ?? [],
          ...sandbox.event.error ?? []
        ] : [
          localHook.error,
          ...sandbox.event.error ?? []
        ] : sandbox.event.error,
        standaloneValidator: hasStandaloneSchema ? [
          ...localHook.standaloneValidator ?? [],
          {
            body,
            headers,
            query,
            params,
            cookie,
            response
          }
        ] : localHook.standaloneValidator
      }));
    }), instance.promisedModules.size > 0) {
      let processedUntil = instance.router.history.length;
      for (const promise of instance.promisedModules.promises)
        this.promisedModules.add(promise.then(() => {
          const {
            body,
            headers,
            query,
            params,
            cookie,
            response,
            ...guardHook
          } = hook, hasStandaloneSchema = body || headers || query || params || cookie || response, startIndex = processedUntil;
          processedUntil = instance.router.history.length;
          for (let i = startIndex;i < instance.router.history.length; i++) {
            const {
              method,
              path,
              handler,
              hooks: localHook
            } = instance.router.history[i];
            this.add(method, path, handler, mergeHook(guardHook, {
              ...localHook || {},
              error: localHook.error ? Array.isArray(localHook.error) ? [
                ...localHook.error ?? [],
                ...sandbox.event.error ?? []
              ] : [
                localHook.error,
                ...sandbox.event.error ?? []
              ] : sandbox.event.error,
              standaloneValidator: hasStandaloneSchema ? [
                ...localHook.standaloneValidator ?? [],
                {
                  body,
                  headers,
                  query,
                  params,
                  cookie,
                  response
                }
              ] : localHook.standaloneValidator
            }));
          }
        }));
    }
    return this;
  }
  use(plugin) {
    if (!plugin)
      return this;
    if (Array.isArray(plugin)) {
      let app = this;
      for (const p of plugin)
        app = app.use(p);
      return app;
    }
    return plugin instanceof Promise ? (this.promisedModules.add(plugin.then((plugin2) => {
      if (typeof plugin2 == "function")
        return plugin2(this);
      if (plugin2 instanceof _Elysia)
        return this._use(plugin2).compile();
      if (plugin2.constructor?.name === "Elysia")
        return this._use(plugin2).compile();
      if (typeof plugin2.default == "function")
        return plugin2.default(this);
      if (plugin2.default instanceof _Elysia)
        return this._use(plugin2.default);
      if (plugin2.constructor?.name === "Elysia")
        return this._use(plugin2.default);
      if (plugin2.constructor?.name === "_Elysia")
        return this._use(plugin2.default);
      try {
        return this._use(plugin2.default);
      } catch (error) {
        throw console.error('Invalid plugin type. Expected Elysia instance, function, or module with "default" as Elysia instance or function that returns Elysia instance.'), error;
      }
    }).then((v) => (v && typeof v.compile == "function" && v.compile(), v))), this) : this._use(plugin);
  }
  propagatePromiseModules(plugin) {
    if (plugin.promisedModules.size <= 0)
      return this;
    for (const promise of plugin.promisedModules.promises)
      this.promisedModules.add(promise.then((v) => {
        if (!v)
          return;
        const t3 = this._use(v);
        return t3 instanceof Promise ? t3.then((v2) => {
          v2 ? v2.compile() : v.compile();
        }) : v.compile();
      }));
    return this;
  }
  _use(plugin) {
    if (typeof plugin == "function") {
      const instance = plugin(this);
      return instance instanceof Promise ? (this.promisedModules.add(instance.then((plugin2) => {
        if (plugin2 instanceof _Elysia) {
          plugin2.getServer = () => this.getServer(), plugin2.getGlobalRoutes = () => this.getGlobalRoutes(), plugin2.getGlobalDefinitions = () => this.getGlobalDefinitions(), plugin2.model(this.definitions.type), plugin2.error(this.definitions.error);
          for (const {
            method,
            path,
            handler,
            hooks
          } of Object.values(plugin2.router.history))
            this.add(method, path, handler, hooks, undefined);
          return plugin2 === this ? undefined : (this.propagatePromiseModules(plugin2), plugin2);
        }
        return typeof plugin2 == "function" ? plugin2(this) : typeof plugin2.default == "function" ? plugin2.default(this) : this._use(plugin2);
      }).then((v) => (v && typeof v.compile == "function" && v.compile(), v))), this) : instance;
    }
    this.propagatePromiseModules(plugin);
    const name = plugin.config.name, seed = plugin.config.seed;
    if (plugin.getParent = () => this, plugin.getServer = () => this.getServer(), plugin.getGlobalRoutes = () => this.getGlobalRoutes(), plugin.getGlobalDefinitions = () => this.getGlobalDefinitions(), plugin.standaloneValidator?.scoped && (this.standaloneValidator.local ? this.standaloneValidator.local = this.standaloneValidator.local.concat(plugin.standaloneValidator.scoped) : this.standaloneValidator.local = plugin.standaloneValidator.scoped), plugin.standaloneValidator?.global && (this.standaloneValidator.global ? this.standaloneValidator.global = this.standaloneValidator.global.concat(plugin.standaloneValidator.global) : this.standaloneValidator.global = plugin.standaloneValidator.global), isNotEmpty(plugin["~parser"]) && (this["~parser"] = {
      ...plugin["~parser"],
      ...this["~parser"]
    }), plugin.setHeaders && this.headers(plugin.setHeaders), name) {
      name in this.dependencies || (this.dependencies[name] = []);
      const current = seed !== undefined ? checksum(name + JSON.stringify(seed)) : 0;
      this.dependencies[name].some(({ checksum: checksum3 }) => current === checksum3) || (this.extender.macro = {
        ...this.extender.macro,
        ...plugin.extender.macro
      }, this.extender.higherOrderFunctions = this.extender.higherOrderFunctions.concat(plugin.extender.higherOrderFunctions));
    } else
      isNotEmpty(plugin.extender.macro) && (this.extender.macro = {
        ...this.extender.macro,
        ...plugin.extender.macro
      }), plugin.extender.higherOrderFunctions.length && (this.extender.higherOrderFunctions = this.extender.higherOrderFunctions.concat(plugin.extender.higherOrderFunctions));
    if (plugin.extender.higherOrderFunctions.length) {
      deduplicateChecksum(this.extender.higherOrderFunctions);
      const hofHashes = [];
      for (let i = 0;i < this.extender.higherOrderFunctions.length; i++) {
        const hof = this.extender.higherOrderFunctions[i];
        hof.checksum && (hofHashes.includes(hof.checksum) && (this.extender.higherOrderFunctions.splice(i, 1), i--), hofHashes.push(hof.checksum));
      }
      hofHashes.length = 0;
    }
    this.inference = mergeInference(this.inference, plugin.inference), isNotEmpty(plugin.singleton.decorator) && this.decorate(plugin.singleton.decorator), isNotEmpty(plugin.singleton.store) && this.state(plugin.singleton.store), isNotEmpty(plugin.definitions.type) && this.model(plugin.definitions.type), isNotEmpty(plugin.definitions.error) && this.error(plugin.definitions.error), isNotEmpty(plugin.extender.macro) && (this.extender.macro = {
      ...this.extender.macro,
      ...plugin.extender.macro
    });
    for (const { method, path, handler, hooks } of Object.values(plugin.router.history))
      this.add(method, path, handler, hooks);
    if (name) {
      name in this.dependencies || (this.dependencies[name] = []);
      const current = seed !== undefined ? checksum(name + JSON.stringify(seed)) : 0;
      if (this.dependencies[name].some(({ checksum: checksum3 }) => current === checksum3))
        return this;
      this.dependencies[name].push(this.config?.analytic ? {
        name: plugin.config.name,
        seed: plugin.config.seed,
        checksum: current,
        dependencies: plugin.dependencies,
        stack: plugin.telemetry?.stack,
        routes: plugin.router.history,
        decorators: plugin.singleton,
        store: plugin.singleton.store,
        error: plugin.definitions.error,
        derive: plugin.event.transform?.filter((x) => x?.subType === "derive").map((x) => ({
          fn: x.toString(),
          stack: new Error().stack ?? ""
        })),
        resolve: plugin.event.transform?.filter((x) => x?.subType === "resolve").map((x) => ({
          fn: x.toString(),
          stack: new Error().stack ?? ""
        }))
      } : {
        name: plugin.config.name,
        seed: plugin.config.seed,
        checksum: current,
        dependencies: plugin.dependencies
      }), isNotEmpty(plugin.event) && (this.event = mergeLifeCycle(this.event, filterGlobalHook(plugin.event), current));
    } else
      isNotEmpty(plugin.event) && (this.event = mergeLifeCycle(this.event, filterGlobalHook(plugin.event)));
    return plugin.validator.global && (this.validator.global = mergeHook(this.validator.global, {
      ...plugin.validator.global
    })), plugin.validator.scoped && (this.validator.local = mergeHook(this.validator.local, {
      ...plugin.validator.scoped
    })), this;
  }
  macro(macroOrName, macro) {
    if (typeof macroOrName == "string" && !macro)
      throw new Error("Macro function is required");
    return typeof macroOrName == "string" ? this.extender.macro[macroOrName] = macro : this.extender.macro = {
      ...this.extender.macro,
      ...macroOrName
    }, this;
  }
  applyMacro(localHook, appliable = localHook, {
    iteration = 0,
    applied = {}
  } = {}) {
    if (iteration >= 16)
      return;
    const macro = this.extender.macro;
    for (let [key, value] of Object.entries(appliable)) {
      if (!(key in macro))
        continue;
      const macroHook = typeof macro[key] == "function" ? macro[key](value) : macro[key];
      if (!macroHook || typeof macro[key] == "object" && value === false)
        return;
      const seed = checksum(key + JSON.stringify(macroHook.seed ?? value));
      if (!(seed in applied)) {
        applied[seed] = true;
        for (let [k, value2] of Object.entries(macroHook))
          if (k !== "seed") {
            if (k in emptySchema) {
              insertStandaloneValidator(localHook, k, value2), delete localHook[key];
              continue;
            }
            if (k === "introspect") {
              value2?.(localHook), delete localHook[key];
              continue;
            }
            if (k === "detail") {
              localHook.detail || (localHook.detail = {}), localHook.detail = mergeDeep(localHook.detail, value2, {
                mergeArray: true
              }), delete localHook[key];
              continue;
            }
            if (k in macro) {
              this.applyMacro(localHook, { [k]: value2 }, { applied, iteration: iteration + 1 }), delete localHook[key];
              continue;
            }
            switch ((k === "derive" || k === "resolve") && typeof value2 == "function" && (value2 = {
              fn: value2,
              subType: k
            }), typeof localHook[k]) {
              case "function":
                localHook[k] = [localHook[k], value2];
                break;
              case "object":
                Array.isArray(localHook[k]) ? localHook[k].push(value2) : localHook[k] = [localHook[k], value2];
                break;
              case "undefined":
                localHook[k] = value2;
                break;
            }
            delete localHook[key];
          }
      }
    }
  }
  mount(path, handleOrConfig, config) {
    if (path instanceof _Elysia || typeof path == "function" || path.length === 0 || path === "/") {
      const run = typeof path == "function" ? path : path instanceof _Elysia ? path.compile().fetch : handleOrConfig instanceof _Elysia ? handleOrConfig.compile().fetch : typeof handleOrConfig == "function" ? handleOrConfig : (() => {
        throw new Error("Invalid handler");
      })(), handler2 = ({ request, path: path2 }) => run(new Request(replaceUrlPath(request.url, path2), request));
      return this.route("ALL", "/*", handler2, {
        parse: "none",
        ...config,
        detail: {
          ...config?.detail,
          hide: true
        },
        config: {
          mount: run
        }
      }), this;
    }
    const handle = handleOrConfig instanceof _Elysia ? handleOrConfig.compile().fetch : typeof handleOrConfig == "function" ? handleOrConfig : (() => {
      throw new Error("Invalid handler");
    })(), length = (typeof path == "string" && this.config.prefix ? this.config.prefix + path : path).length - (path.endsWith("*") ? 1 : 0), handler = ({ request, path: path2 }) => handle(new Request(replaceUrlPath(request.url, path2.slice(length) || "/"), request));
    return this.route("ALL", path, handler, {
      parse: "none",
      ...config,
      detail: {
        ...config?.detail,
        hide: true
      },
      config: {
        mount: handle
      }
    }), this.route("ALL", path + (path.endsWith("/") ? "*" : "/*"), handler, {
      parse: "none",
      ...config,
      detail: {
        ...config?.detail,
        hide: true
      },
      config: {
        mount: handle
      }
    }), this;
  }
  get(path, handler, hook) {
    return this.add("GET", path, handler, hook), this;
  }
  post(path, handler, hook) {
    return this.add("POST", path, handler, hook), this;
  }
  put(path, handler, hook) {
    return this.add("PUT", path, handler, hook), this;
  }
  patch(path, handler, hook) {
    return this.add("PATCH", path, handler, hook), this;
  }
  delete(path, handler, hook) {
    return this.add("DELETE", path, handler, hook), this;
  }
  options(path, handler, hook) {
    return this.add("OPTIONS", path, handler, hook), this;
  }
  all(path, handler, hook) {
    return this.add("ALL", path, handler, hook), this;
  }
  head(path, handler, hook) {
    return this.add("HEAD", path, handler, hook), this;
  }
  connect(path, handler, hook) {
    return this.add("CONNECT", path, handler, hook), this;
  }
  route(method, path, handler, hook) {
    return this.add(method.toUpperCase(), path, handler, hook, hook?.config), this;
  }
  ws(path, options) {
    return this["~adapter"].ws ? this["~adapter"].ws(this, path, options) : console.warn("Current adapter doesn't support WebSocket"), this;
  }
  state(options, name, value) {
    name === undefined ? (value = options, options = { as: "append" }, name = "") : value === undefined && (typeof options == "string" ? (value = name, name = options, options = { as: "append" }) : typeof options == "object" && (value = name, name = ""));
    const { as } = options;
    if (typeof name != "string")
      return this;
    switch (typeof value) {
      case "object":
        return !value || !isNotEmpty(value) ? this : name ? ((name in this.singleton.store) ? this.singleton.store[name] = mergeDeep(this.singleton.store[name], value, {
          override: as === "override"
        }) : this.singleton.store[name] = value, this) : value === null ? this : (this.singleton.store = mergeDeep(this.singleton.store, value, {
          override: as === "override"
        }), this);
      case "function":
        return name ? (as === "override" || !(name in this.singleton.store)) && (this.singleton.store[name] = value) : this.singleton.store = value(this.singleton.store), this;
      default:
        return (as === "override" || !(name in this.singleton.store)) && (this.singleton.store[name] = value), this;
    }
  }
  decorate(options, name, value) {
    name === undefined ? (value = options, options = { as: "append" }, name = "") : value === undefined && (typeof options == "string" ? (value = name, name = options, options = { as: "append" }) : typeof options == "object" && (value = name, name = ""));
    const { as } = options;
    if (typeof name != "string")
      return this;
    switch (typeof value) {
      case "object":
        return name ? ((name in this.singleton.decorator) ? this.singleton.decorator[name] = mergeDeep(this.singleton.decorator[name], value, {
          override: as === "override"
        }) : this.singleton.decorator[name] = value, this) : value === null ? this : (this.singleton.decorator = mergeDeep(this.singleton.decorator, value, {
          override: as === "override"
        }), this);
      case "function":
        return name ? (as === "override" || !(name in this.singleton.decorator)) && (this.singleton.decorator[name] = value) : this.singleton.decorator = value(this.singleton.decorator), this;
      default:
        return (as === "override" || !(name in this.singleton.decorator)) && (this.singleton.decorator[name] = value), this;
    }
  }
  derive(optionsOrTransform, transform) {
    transform || (transform = optionsOrTransform, optionsOrTransform = { as: "local" });
    const hook = {
      subType: "derive",
      fn: transform
    };
    return this.onTransform(optionsOrTransform, hook);
  }
  model(name, model) {
    const onlyTypebox = (a) => {
      const res = {};
      for (const key in a)
        "~standard" in a[key] || (res[key] = a[key]);
      return res;
    };
    switch (typeof name) {
      case "object":
        const parsedTypebox = {}, kvs = Object.entries(name);
        if (!kvs.length)
          return this;
        for (const [key, value] of kvs)
          key in this.definitions.type || ("~standard" in value ? this.definitions.type[key] = value : (parsedTypebox[key] = this.definitions.type[key] = value, parsedTypebox[key].$id ??= `#/components/schemas/${key}`));
        return this.definitions.typebox = t.Module({
          ...this.definitions.typebox.$defs,
          ...parsedTypebox
        }), this;
      case "function":
        const result = name(this.definitions.type);
        return this.definitions.type = result, this.definitions.typebox = t.Module(onlyTypebox(result)), this;
      case "string":
        if (!model)
          break;
        if (this.definitions.type[name] = model, "~standard" in model)
          return this;
        const newModel = {
          ...model,
          id: model.$id ?? `#/components/schemas/${name}`
        };
        return this.definitions.typebox = t.Module({
          ...this.definitions.typebox.$defs,
          ...newModel
        }), this;
    }
    return model ? (this.definitions.type[name] = model, ("~standard" in model) ? this : (this.definitions.typebox = t.Module({
      ...this.definitions.typebox.$defs,
      [name]: model
    }), this)) : this;
  }
  Ref(key) {
    return t.Ref(key);
  }
  mapDerive(optionsOrDerive, mapper) {
    mapper || (mapper = optionsOrDerive, optionsOrDerive = { as: "local" });
    const hook = {
      subType: "mapDerive",
      fn: mapper
    };
    return this.onTransform(optionsOrDerive, hook);
  }
  affix(base, type, word) {
    if (word === "")
      return this;
    const delimieter = ["_", "-", " "], capitalize = (word2) => word2[0].toUpperCase() + word2.slice(1), joinKey = base === "prefix" ? (prefix, word2) => delimieter.includes(prefix.at(-1) ?? "") ? prefix + word2 : prefix + capitalize(word2) : delimieter.includes(word.at(-1) ?? "") ? (suffix, word2) => word2 + suffix : (suffix, word2) => word2 + capitalize(suffix), remap = (type2) => {
      const store = {};
      switch (type2) {
        case "decorator":
          for (const key in this.singleton.decorator)
            store[joinKey(word, key)] = this.singleton.decorator[key];
          this.singleton.decorator = store;
          break;
        case "state":
          for (const key in this.singleton.store)
            store[joinKey(word, key)] = this.singleton.store[key];
          this.singleton.store = store;
          break;
        case "model":
          for (const key in this.definitions.type)
            store[joinKey(word, key)] = this.definitions.type[key];
          this.definitions.type = store;
          break;
        case "error":
          for (const key in this.definitions.error)
            store[joinKey(word, key)] = this.definitions.error[key];
          this.definitions.error = store;
          break;
      }
    }, types = Array.isArray(type) ? type : [type];
    for (const type2 of types.some((x) => x === "all") ? ["decorator", "state", "model", "error"] : types)
      remap(type2);
    return this;
  }
  prefix(type, word) {
    return this.affix("prefix", type, word);
  }
  suffix(type, word) {
    return this.affix("suffix", type, word);
  }
  compile() {
    return this["~adapter"].beforeCompile?.(this), this["~adapter"].isWebStandard ? (this._handle = this.config.aot ? composeGeneralHandler(this) : createDynamicHandler(this), Object.defineProperty(this, "fetch", {
      value: this._handle,
      configurable: true,
      writable: true
    }), typeof this.server?.reload == "function" && this.server.reload({
      ...this.server || {},
      fetch: this.fetch
    }), this) : (typeof this.server?.reload == "function" && this.server.reload(this.server || {}), this._handle = composeGeneralHandler(this), this);
  }
  get fetch() {
    const fetch2 = this.config.aot ? composeGeneralHandler(this) : createDynamicHandler(this);
    return Object.defineProperty(this, "fetch", {
      value: fetch2,
      configurable: true,
      writable: true
    }), fetch2;
  }
  get modules() {
    return this.promisedModules;
  }
};
var Elysia = _Elysia;

// node_modules/@elysiajs/cors/dist/index.mjs
var isBun2 = typeof new Headers()?.toJSON === "function";
var processHeaders = (headers) => {
  if (isBun2)
    return Object.keys(headers.toJSON()).join(", ");
  let keys = "";
  let i = 0;
  headers.forEach((_, key) => {
    if (i)
      keys = keys + ", " + key;
    else
      keys = key;
    i++;
  });
  return keys;
};
var cors = (config) => {
  let {
    aot = true,
    origin = true,
    methods = true,
    allowedHeaders = true,
    exposeHeaders = true,
    credentials = true,
    maxAge = 5,
    preflight = true
  } = config ?? {};
  if (Array.isArray(allowedHeaders))
    allowedHeaders = allowedHeaders.join(", ");
  if (Array.isArray(exposeHeaders))
    exposeHeaders = exposeHeaders.join(", ");
  const origins = typeof origin === "boolean" ? undefined : Array.isArray(origin) ? origin : [origin];
  const app = new Elysia({
    name: "@elysiajs/cors",
    seed: config,
    aot
  });
  const anyOrigin = origins?.some((o) => o === "*");
  const originMap = {};
  if (origins) {
    for (const origin2 of origins)
      if (typeof origin2 === "string")
        originMap[origin2] = true;
  }
  const processOrigin = (origin2, request, from) => {
    if (Array.isArray(origin2))
      return origin2.some((o) => processOrigin(o, request, from));
    switch (typeof origin2) {
      case "string":
        if (from in originMap)
          return true;
        const fromProtocol = from.indexOf("://");
        if (fromProtocol !== -1)
          from = from.slice(fromProtocol + 3);
        return origin2 === from;
      case "function":
        return origin2(request) === true;
      case "object":
        if (origin2 instanceof RegExp)
          return origin2.test(from);
    }
    return false;
  };
  const handleOrigin = (set, request) => {
    if (origin === true) {
      set.headers.vary = "*";
      set.headers["access-control-allow-origin"] = request.headers.get("Origin") || "*";
      return;
    }
    if (anyOrigin) {
      set.headers.vary = "*";
      set.headers["access-control-allow-origin"] = "*";
      return;
    }
    if (!origins?.length)
      return;
    if (origins.length) {
      const from = request.headers.get("Origin") ?? "";
      for (let i = 0;i < origins.length; i++) {
        const value = processOrigin(origins[i], request, from);
        if (value === true) {
          set.headers.vary = origin ? "Origin" : "*";
          set.headers["access-control-allow-origin"] = from || "*";
          return;
        }
      }
    }
    set.headers.vary = "Origin";
  };
  const handleMethod = (set, method) => {
    if (!method)
      return;
    if (methods === true)
      return set.headers["access-control-allow-methods"] = method ?? "*";
    if (methods === false || !methods?.length)
      return;
    if (methods === "*")
      return set.headers["access-control-allow-methods"] = "*";
    if (!Array.isArray(methods))
      return set.headers["access-control-allow-methods"] = methods;
    set.headers["access-control-allow-methods"] = methods.join(", ");
  };
  const defaultHeaders = {};
  if (typeof exposeHeaders === "string")
    defaultHeaders["access-control-expose-headers"] = exposeHeaders;
  if (typeof allowedHeaders === "string")
    defaultHeaders["access-control-allow-headers"] = allowedHeaders;
  if (credentials === true)
    defaultHeaders["access-control-allow-credentials"] = "true";
  app.headers(defaultHeaders);
  function handleOption({ set, request, headers }) {
    handleOrigin(set, request);
    handleMethod(set, request.headers.get("access-control-request-method"));
    if (allowedHeaders === true || exposeHeaders === true) {
      if (allowedHeaders === true)
        set.headers["access-control-allow-headers"] = headers["access-control-request-headers"];
      if (exposeHeaders === true)
        set.headers["access-control-expose-headers"] = Object.keys(headers).join(",");
    }
    if (maxAge)
      set.headers["access-control-max-age"] = maxAge.toString();
    return new Response(null, {
      status: 204
    });
  }
  if (preflight)
    app.options("/", handleOption).options("/*", handleOption);
  return app.onRequest(function processCors({ set, request }) {
    handleOrigin(set, request);
    if (preflight && request.method === "OPTIONS") {
      return handleOption({
        set,
        request,
        headers: isBun2 ? request.headers.toJSON() : Object.fromEntries(request.headers.entries())
      });
    }
    handleMethod(set, request.method);
    if (allowedHeaders === true || exposeHeaders === true) {
      const headers = processHeaders(request.headers);
      if (allowedHeaders === true)
        set.headers["access-control-allow-headers"] = headers;
      if (exposeHeaders === true)
        set.headers["access-control-expose-headers"] = headers;
    }
  });
};

// src/core/errors.ts
var HTTP_STATUS = {
  INVALID_URL: 400,
  UNSUPPORTED_PLATFORM: 422,
  UNSUPPORTED_CONTENT: 422,
  CONTENT_NOT_FOUND: 404,
  CONTENT_RESTRICTED: 403,
  AUTH_REQUIRED: 424,
  RISK_CONTROL: 503,
  UPSTREAM_CHANGED: 502,
  UPSTREAM_TIMEOUT: 504,
  UPSTREAM_ERROR: 502,
  RATE_LIMITED: 429,
  MEDIA_PROXY_DISABLED: 501,
  MEDIA_BAD_SIGNATURE: 403,
  MEDIA_LINK_EXPIRED: 410,
  CONFIG_MISSING: 501,
  INTERNAL: 500
};

class AppError extends Error {
  code;
  detail;
  constructor(code, message, detail) {
    super(message);
    this.name = "AppError";
    this.code = code;
    this.detail = detail;
  }
  get httpStatus() {
    return HTTP_STATUS[this.code];
  }
}

// src/core/envelope.ts
function ok(data) {
  return { success: true, data };
}
function fail(code, message, detail) {
  return { success: false, data: null, error: { code, message, detail } };
}

// src/platforms/hosts.ts
var PLATFORM_HOSTS = {
  douyin: ["douyin.com", "iesdouyin.com", "v.douyin.com"],
  xhs: ["xiaohongshu.com", "xhslink.com", "xhslink.cn"],
  kuaishou: ["kuaishou.com", "chenzhongtech.com", "v.kuaishou.com"],
  bilibili: ["bilibili.com", "b23.tv"],
  weibo: ["weibo.com", "weibo.cn", "weibo.com.cn", "t.cn"],
  twitter: ["x.com", "twitter.com", "t.co"],
  youtube: ["youtube.com", "youtu.be", "youtube-nocookie.com"],
  instagram: ["instagram.com", "instagr.am"],
  tiktok: ["tiktok.com", "vm.tiktok.com", "vt.tiktok.com"]
};
function hostMatches(host, domain) {
  const h = host.toLowerCase();
  const d = domain.toLowerCase();
  return h === d || h.endsWith(`.${d}`);
}
function findPlatform(url) {
  for (const [platform, hosts] of Object.entries(PLATFORM_HOSTS)) {
    for (const h of hosts) {
      if (hostMatches(url.hostname, h))
        return platform;
    }
  }
  return null;
}

// src/platforms/registry.ts
var adapters = [];
function register(adapter) {
  if (adapters.some((a) => a.platform === adapter.platform))
    return;
  adapters.push(adapter);
}
function listAdapters() {
  return adapters;
}
function matchAdapter(url) {
  return adapters.find((a) => findPlatform(url) === a.platform) ?? null;
}
async function dispatch(url, ctx, depth = 0) {
  if (depth > 3) {
    throw new AppError("INVALID_URL", "短链跳转超过 3 层，疑似循环", { url: url.href });
  }
  const adapter = matchAdapter(url);
  if (!adapter) {
    throw new AppError("UNSUPPORTED_PLATFORM", `无法识别的平台: ${url.hostname}`, { host: url.hostname });
  }
  const input = adapter.match(url);
  if (!input) {
    throw new AppError("INVALID_URL", `链接格式不属于 ${adapter.platform}`, { url: url.href });
  }
  if (!input.needsResolve || !adapter.resolve) {
    return { adapter, input, url };
  }
  const finalUrl = await adapter.resolve(url, ctx);
  const next = matchAdapter(finalUrl);
  if (!next) {
    throw new AppError("UNSUPPORTED_PLATFORM", `短链展开后无法识别: ${finalUrl.hostname}`, {
      host: finalUrl.hostname
    });
  }
  return dispatch(finalUrl, ctx, depth + 1);
}

// src/core/signers.ts
var registry = new Map;
function registerSigner(provider, opts = {}) {
  const list = (registry.get(provider.platform) ?? []).filter((e) => e.provider.name !== provider.name);
  list.unshift({ provider, priority: opts.priority ?? 0 });
  list.sort((a, b) => b.priority - a.priority);
  registry.set(provider.platform, list);
}
function pickSigner(platform) {
  for (const { provider } of registry.get(platform) ?? []) {
    if (provider.isAvailable())
      return provider;
  }
  return null;
}
function listSigners(platform) {
  return (registry.get(platform) ?? []).map((e) => e.provider);
}

// node_modules/abogus/dist/index.js
var x = class {
  lookup = [];
  revLookup = [];
  constructor(e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/") {
    this.initLookups(e);
  }
  getLens(e) {
    let t = e.length;
    if (t % 4 > 0)
      throw new Error("Invalid string. Length must be a multiple of 4");
    let r = e.indexOf("=");
    if (r === -1)
      return [t, 0];
    let o = t - r;
    if (o > 2 || e.slice(r) !== "=".repeat(o))
      throw new Error('Invalid string. Padding must be one or two "=" at the end');
    return [r, o];
  }
  decodedLength(e, t) {
    return (e + t) * 3 / 4 - t;
  }
  byteLength(e) {
    let [t, r] = this.getLens(e);
    return this.decodedLength(t, r);
  }
  encode(e) {
    let t = e.length, r = t % 3, o = [], a = 16383;
    for (let i = 0;i < t - r; i += a) {
      let s = i + a > t - r ? t - r : i + a;
      o.push(this.encodeChunk(e, i, s));
    }
    if (r === 1) {
      let i = e[t - 1];
      o.push(`${this.lookup[i >> 2] + this.lookup[i << 4 & 63]}==`);
    } else if (r === 2) {
      let i = (e[t - 2] << 8) + e[t - 1];
      o.push(`${this.lookup[i >> 10] + this.lookup[i >> 4 & 63] + this.lookup[i << 2 & 63]}=`);
    }
    return o.join("");
  }
  decode(e) {
    let [t, r] = this.getLens(e), o = new Uint8Array(this.decodedLength(t, r)), a = 0, i = r > 0 ? t + r - 4 : t, s;
    for (s = 0;s < i; s += 4) {
      let c = this.revLookup[e.charCodeAt(s)] << 18 | this.revLookup[e.charCodeAt(s + 1)] << 12 | this.revLookup[e.charCodeAt(s + 2)] << 6 | this.revLookup[e.charCodeAt(s + 3)];
      o[a++] = c >> 16 & 255, o[a++] = c >> 8 & 255, o[a++] = c & 255;
    }
    if (r === 2) {
      let c = this.revLookup[e.charCodeAt(s)] << 2 | this.revLookup[e.charCodeAt(s + 1)] >> 4;
      o[a++] = c & 255;
    }
    if (r === 1) {
      let c = this.revLookup[e.charCodeAt(s)] << 10 | this.revLookup[e.charCodeAt(s + 1)] << 4 | this.revLookup[e.charCodeAt(s + 2)] >> 2;
      o[a++] = c >> 8 & 255, o[a++] = c & 255;
    }
    return o;
  }
  encodeChunk(e, t, r) {
    let o = [];
    for (let a = t;a < r; a += 3) {
      let i = e[a] << 16 | e[a + 1] << 8 | e[a + 2];
      o.push(this.lookup[i >> 18 & 63], this.lookup[i >> 12 & 63], this.lookup[i >> 6 & 63], this.lookup[i & 63]);
    }
    return o.join("");
  }
  initLookups(e) {
    if (e.length !== 64)
      throw new Error("Alphabet must be exactly 64 characters long");
    for (let r = 0;r < 64; r++) {
      let o = e.charCodeAt(r);
      if (o >= 55296 && o <= 57343)
        throw new Error("Alphabet must not contain surrogate pairs");
      if (this.revLookup[o] !== undefined)
        throw new Error(`Alphabet must not contain duplicate characters: "${e[r]}"`);
      this.lookup[r] = e[r], this.revLookup[o] = r;
    }
    let t = [["-", 62], ["_", 63], ["+", 62], ["/", 63]];
    for (let [r, o] of t) {
      let a = r.charCodeAt(0);
      this.revLookup[a] === undefined && (this.revLookup[a] = o);
    }
  }
};
var q = new x;
var w = class n {
  buffer = new Uint8Array(0);
  state = new Int32Array(4);
  totalLength = 0;
  constructor() {
    this.reset();
  }
  static hash(e) {
    return new n().update(e).digest();
  }
  compress(e) {
    let t = new DataView(e.buffer, e.byteOffset), r = new Int32Array(16);
    for (let u = 0;u < 16; u++)
      r[u] = t.getInt32(u * 4, true);
    let [o, a, i, s] = this.state, c = [[0, 7, 3614090360, this.F], [1, 12, 3905402710, this.F], [2, 17, 606105819, this.F], [3, 22, 3250441966, this.F], [4, 7, 4118548399, this.F], [5, 12, 1200080426, this.F], [6, 17, 2821735955, this.F], [7, 22, 4249261313, this.F], [8, 7, 1770035416, this.F], [9, 12, 2336552879, this.F], [10, 17, 4294925233, this.F], [11, 22, 2304563134, this.F], [12, 7, 1804603682, this.F], [13, 12, 4254626195, this.F], [14, 17, 2792965006, this.F], [15, 22, 1236535329, this.F], [1, 5, 4129170786, this.G], [6, 9, 3225465664, this.G], [11, 14, 643717713, this.G], [0, 20, 3921069994, this.G], [5, 5, 3593408605, this.G], [10, 9, 38016083, this.G], [15, 14, 3634488961, this.G], [4, 20, 3889429448, this.G], [9, 5, 568446438, this.G], [14, 9, 3275163606, this.G], [3, 14, 4107603335, this.G], [8, 20, 1163531501, this.G], [13, 5, 2850285829, this.G], [2, 9, 4243563512, this.G], [7, 14, 1735328473, this.G], [12, 20, 2368359562, this.G], [5, 4, 4294588738, this.H], [8, 11, 2272392833, this.H], [11, 16, 1839030562, this.H], [14, 23, 4259657740, this.H], [1, 4, 2763975236, this.H], [4, 11, 1272893353, this.H], [7, 16, 4139469664, this.H], [10, 23, 3200236656, this.H], [13, 4, 681279174, this.H], [0, 11, 3936430074, this.H], [3, 16, 3572445317, this.H], [6, 23, 76029189, this.H], [9, 4, 3654602809, this.H], [12, 11, 3873151461, this.H], [15, 16, 530742520, this.H], [2, 23, 3299628645, this.H], [0, 6, 4096336452, this.I], [7, 10, 1126891415, this.I], [14, 15, 2878612391, this.I], [5, 21, 4237533241, this.I], [12, 6, 1700485571, this.I], [3, 10, 2399980690, this.I], [10, 15, 4293915773, this.I], [1, 21, 2240044497, this.I], [8, 6, 1873313359, this.I], [15, 10, 4264355552, this.I], [6, 15, 2734768916, this.I], [13, 21, 1309151649, this.I], [4, 6, 4149444226, this.I], [11, 10, 3174756917, this.I], [2, 15, 718787259, this.I], [9, 21, 3951481745, this.I]];
    for (let [u, f, d, p] of c) {
      let l = o + p(a, i, s) + r[u] + d;
      o = s, s = i, i = a, a = a + this.rol(l, f) | 0;
    }
    this.state[0] = this.state[0] + o | 0, this.state[1] = this.state[1] + a | 0, this.state[2] = this.state[2] + i | 0, this.state[3] = this.state[3] + s | 0;
  }
  digest(e) {
    let r = (64 - (this.totalLength / 8 + 9) % 64) % 64, o = new Uint8Array(1 + r + 8);
    o[0] = 128;
    let a = new DataView(o.buffer), i = this.totalLength & 4294967295, s = this.totalLength / 4294967296 & 4294967295;
    a.setUint32(1 + r, i, true), a.setUint32(1 + r + 4, s, true);
    let c = new Uint8Array(this.buffer.length + o.length);
    c.set(this.buffer), c.set(o, this.buffer.length);
    for (let d = 0;d < c.length; d += 64)
      this.compress(c.subarray(d, d + 64));
    let u = new Uint8Array(16), f = new DataView(u.buffer);
    for (let d = 0;d < 4; d++)
      f.setInt32(d * 4, this.state[d], true);
    return e === "hex" ? Array.from(u).map((d) => d.toString(16).padStart(2, "0")).join("") : u;
  }
  F(e, t, r) {
    return e & t | ~e & r;
  }
  G(e, t, r) {
    return e & r | t & ~r;
  }
  H(e, t, r) {
    return e ^ t ^ r;
  }
  I(e, t, r) {
    return t ^ (e | ~r);
  }
  reset() {
    return this.state = new Int32Array([1732584193, 4023233417, 2562383102, 271733878]), this.buffer = new Uint8Array(0), this.totalLength = 0, this;
  }
  rol(e, t) {
    return e << t | e >>> 32 - t;
  }
  update(e) {
    let t;
    if (typeof e == "string")
      t = new TextEncoder().encode(e);
    else if (e instanceof ArrayBuffer)
      t = new Uint8Array(e);
    else if (e instanceof Uint8Array)
      t = e;
    else
      throw new TypeError("Data must be string, ArrayBuffer or Uint8Array");
    if (t.length === 0)
      return this;
    this.totalLength += t.length * 8;
    let r = new Uint8Array(this.buffer.length + t.length);
    r.set(this.buffer), r.set(t, this.buffer.length);
    let o = 0;
    for (;o + 64 <= r.length; )
      this.compress(r.subarray(o, o + 64)), o += 64;
    return this.buffer = r.slice(o), this;
  }
};
var D = (n) => {
  let e = n.length, t = new Uint8Array(e);
  for (let r = 0;r < e; r++)
    t[r] = n.charCodeAt(r) & 255;
  return t;
};
function y(n, e) {
  let t = e - n;
  if (t <= 0)
    return n;
  let r = globalThis.crypto;
  if (r?.getRandomValues) {
    let o = new Uint32Array(1), a = Math.floor(4294967296 / t) * t, i;
    do
      r.getRandomValues(o), i = o[0];
    while (i >= a);
    return n + i % t;
  }
  return n + Math.floor(Math.random() * t);
}
new TextDecoder("latin1");
function j(n) {
  if (!n)
    return;
  let [e] = n.split(";"), t = e.indexOf("=");
  if (t !== -1)
    return { name: e.slice(0, t).trim(), value: e.slice(t + 1).trim() };
}
var pe = new x("Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe");
var le = "0".repeat(32);
var be = "f".repeat(32);
function E(n) {
  return w.hash(n);
}
var J = E(E(""));
var we = new x("ckdp1h4ZKsUB80/Mfvw36XIgR25+WQAlEi7NLboqYTOPuzmFjJnryx9HVGDaStCe");
var Ae = new x("Dkdpgh2ZmsQB80/MfvV36XI1R45-WUAlEixNLwoqYTOPuzKFjJnry79HbGcaStCe");
var ke = Uint8Array.of(211);
var Z = y(1280, 1920);
var ee = y(720, 1080);
y(Z, 1920);
y(ee, 1080);
y(1024, 1920);
y(768, 1080);
y(1280, 1920);
y(800, 1080);
y(1280, 1920);
y(720, 1080);
var at = new x("Dkdpgh4ZKsQB80/Mfvw36XI1R25+WUAlEi7NLboqYTOPuzmFjJnryx9HVGcaStCe");
var At = new Set(["a_bogus", "X-Bogus"]);
async function se() {
  let n = await fetch("https://ttwid.bytedance.com/ttwid/union/register/?aid=6383&service=www.douyin.com", { method: "POST", headers: { "Content-Type": "application/json", referer: "https://www.douyin.com" }, body: JSON.stringify({ aid: 6383, service: "www.douyin.com" }) });
  if (!n.ok)
    throw new Error(`ttwid register failed: ${n.status} ${n.statusText}`);
  let [e = ""] = n.headers.getSetCookie(), t = j(e);
  if (!t?.value)
    throw new Error("ttwid register response has no Set-Cookie");
  return t;
}
async function sr() {
  let { value: n } = await se();
  return n;
}
var Ct = new x("u09tbS3UvgDEe6r-ZVMXzLpsAohTn7mdINQlW412GqBjfYiyk8JORCF5/xKHwacP");
var Dt = "A96D855A08C0A9707F8BEF0D9A527E4E";
var ce = "x-secsdk-web-signature";
function xr(n, { uifid: e, timestamp: t = Math.floor(Date.now() / 1000) }) {
  let r = n.indexOf("#"), o = r === -1 ? n : n.slice(0, r), a = o.indexOf("?"), i = a === -1 ? o : o.slice(0, a), s = a === -1 ? "" : o.slice(a + 1);
  if (H(s, ce) !== null)
    return n;
  let c = H(s, "uifid"), u = c ?? e, f = [];
  c === null && f.push(`uifid=${u}`), H(s, "timestamp") === null && f.push(`timestamp=${t}`);
  let d = f.length ? s ? `${s}&${f.join("&")}` : f.join("&") : s, p = new w().update(`${u}_${t}_${Dt}_${d}`).digest("hex"), l = s ? "&" : "?";
  return `${i}${s ? `?${s}` : ""}${l}${[...f, `${ce}=${p}`].join("&")}`;
}
function H(n, e) {
  for (let t of n.split("&")) {
    let r = t.indexOf("=");
    if (r !== -1 && t.slice(0, r) === e)
      return t.slice(r + 1);
  }
  return null;
}
var Bt = { "bd-ticket-guard-version": 2, "bd-ticket-guard-iteration-version": 1, "bd-ticket-guard-ree-public-key": "BNUI7u8fBBfzAMpoyB3vv+4TRCdxiWgBnVI+ERXdVkjFuvau1+0XTALP2fRfB2VxLzIMyRLp04iz6Cy2JHGXNPA=", "bd-ticket-guard-web-version": 2 };
var vr = q.encode(D(JSON.stringify(Bt)));

// src/platforms/douyin/abogus-signer.ts
var mintedTtwid = null;
var douyinAbogusSigner = {
  name: "abogus",
  platform: "douyin",
  version: "abogus@2.1.1",
  isAvailable() {
    try {
      xr("https://www.douyin.com/?probe=1", { uifid: "probe", timestamp: 1 });
      return true;
    } catch {
      return false;
    }
  },
  signRequest(req) {
    const signed = xr(req.url, { uifid: req.uifid, timestamp: req.timestamp });
    const q = new URL(signed).searchParams;
    return {
      url: signed,
      headers: {
        uifid: req.uifid,
        "x-secsdk-web-signature": q.get("x-secsdk-web-signature") ?? "",
        "x-secsdk-web-expire": q.get("timestamp") ?? ""
      }
    };
  },
  async mintTtwid(signal) {
    signal?.throwIfAborted();
    if (mintedTtwid)
      return mintedTtwid;
    let onAbort;
    try {
      const value = await Promise.race([
        sr(),
        signal ? new Promise((_, reject) => {
          onAbort = () => reject(signal.reason);
          signal.addEventListener("abort", onAbort, { once: true });
        }) : new Promise(() => {})
      ]);
      mintedTtwid = value;
      return value;
    } catch (err) {
      if (signal?.aborted)
        throw err;
      return null;
    } finally {
      if (signal && onAbort)
        signal.removeEventListener("abort", onAbort);
    }
  }
};

// src/core/fetch-proxy.ts
async function proxiedFetch(url, init = {}) {
  const { proxy, ...rest } = init;
  const headers = new Headers(rest.headers);
  if (!headers.has("accept-encoding"))
    headers.set("accept-encoding", "identity");
  const options = { ...rest, headers };
  if (proxy) {
    options.proxy = proxy;
  }
  try {
    return await fetch(url, options);
  } catch (e) {
    if (e instanceof Error && e.name === "AbortError")
      throw e;
    throw new AppError("UPSTREAM_ERROR", "上游请求网络失败（可重试）", {
      cause: e instanceof Error ? e.message : String(e)
    });
  }
}

// src/infra/metrics.ts
var DURATION_BUCKETS = [50, 100, 250, 500, 1000, 2000, 5000, 1e4, 30000];
var counters = new Map;
var histograms = new Map;
var gauges = new Map;
function escapeLabelValue(v) {
  return v.replace(/\\/g, "\\\\").replace(/"/g, "\\\"").replace(/\n/g, "\\n");
}
function series(name, labels) {
  if (!labels)
    return name;
  const entries = Object.entries(labels);
  if (entries.length === 0)
    return name;
  const inner = entries.map(([k, v]) => `${k}="${escapeLabelValue(v)}"`).join(",");
  return `${name}{${inner}}`;
}
var metrics = {
  inc(name, labels, value = 1) {
    const key = series(name, labels);
    counters.set(key, (counters.get(key) ?? 0) + value);
  },
  setGauge(name, labels, value) {
    gauges.set(series(name, labels), value);
  },
  observe(name, labels, value) {
    const key = series(name, labels);
    let h = histograms.get(key);
    if (!h) {
      h = { counts: new Array(DURATION_BUCKETS.length).fill(0), sum: 0, count: 0 };
      histograms.set(key, h);
    }
    const idx = DURATION_BUCKETS.findIndex((b) => value <= b);
    if (idx >= 0)
      h.counts[idx]++;
    h.sum += value;
    h.count++;
  },
  render() {
    const lines = [];
    lines.push("# HELP parse_total 解析请求计数（code=ok 或业务错误码）");
    lines.push("# TYPE parse_total counter");
    for (const [key, v] of sortedEntries(counters)) {
      if (key.startsWith("parse_total"))
        lines.push(`${key} ${v}`);
    }
    lines.push("# HELP parse_duration_ms 解析耗时分布（毫秒）");
    lines.push("# TYPE parse_duration_ms histogram");
    for (const [key, h] of sortedEntries(histograms)) {
      const labelPart = key.includes("{") ? key.slice(key.indexOf("{")) : "";
      for (let i = 0;i < DURATION_BUCKETS.length; i++) {
        const cumulative = h.counts.slice(0, i + 1).reduce((a, b) => a + b, 0);
        lines.push(`parse_duration_ms_bucket${insertLabel(labelPart, `le="${DURATION_BUCKETS[i]}"`)} ${cumulative}`);
      }
      lines.push(`parse_duration_ms_bucket${insertLabel(labelPart, 'le="+Inf"')} ${h.count}`);
      lines.push(`parse_duration_ms_sum${labelPart} ${h.sum}`);
      lines.push(`parse_duration_ms_count${labelPart} ${h.count}`);
    }
    lines.push("# HELP cache_hit_total 缓存命中次数（P4 接入）");
    lines.push("# TYPE cache_hit_total counter");
    emitCounter(lines, counters, "cache_hit_total");
    lines.push("# HELP upstream_error_total 上游失败/风控次数");
    lines.push("# TYPE upstream_error_total counter");
    emitCounter(lines, counters, "upstream_error_total");
    lines.push("# HELP channel_downgrade_total 解析通道降级次数（platform, from→to）");
    lines.push("# TYPE channel_downgrade_total counter");
    emitCounter(lines, counters, "channel_downgrade_total");
    lines.push("# HELP parse_retry_total 瞬态错误重试次数");
    lines.push("# TYPE parse_retry_total counter");
    emitCounter(lines, counters, "parse_retry_total");
    lines.push("# HELP uifid_mint_total uifid 铸造次数（result=ok|fail；身份池自动铸造访客身份）");
    lines.push("# TYPE uifid_mint_total counter");
    emitSeenCounter(lines, counters, "uifid_mint_total");
    lines.push("# HELP uifid_retired_total uifid 退休次数（reason=suspect|evicted）");
    lines.push("# TYPE uifid_retired_total counter");
    emitSeenCounter(lines, counters, "uifid_retired_total");
    lines.push("# HELP channel_breaker_open 通道熔断粘性状态（1=该平台 HTTP 通道熔断中，固定走浏览器）");
    lines.push("# TYPE channel_breaker_open gauge");
    for (const [key, v] of sortedEntries(gauges)) {
      if (key.startsWith("channel_breaker_open"))
        lines.push(`${key} ${v}`);
    }
    return `${lines.join(`
`)}
`;
  },
  reset() {
    counters.clear();
    histograms.clear();
    gauges.clear();
    prewarm();
  }
};
function prewarm() {
  metrics.inc("cache_hit_total", undefined, 0);
  metrics.inc("upstream_error_total", undefined, 0);
  metrics.inc("channel_downgrade_total", undefined, 0);
  metrics.inc("parse_retry_total", undefined, 0);
}
function emitCounter(lines, source, prefix) {
  let found = false;
  for (const [key, v] of sortedEntries(source)) {
    if (key === prefix || key.startsWith(`${prefix}{`)) {
      lines.push(`${key} ${v}`);
      found = true;
    }
  }
  if (!found)
    lines.push(`${prefix} 0`);
}
function emitSeenCounter(lines, source, prefix) {
  for (const [key, v] of sortedEntries(source)) {
    if (key === prefix || key.startsWith(`${prefix}{`))
      lines.push(`${key} ${v}`);
  }
}
function sortedEntries(m) {
  return [...m.entries()].sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0);
}
function insertLabel(labelPart, le) {
  if (!labelPart)
    return `{${le}}`;
  return labelPart.replace(/\}$/, `,${le}}`);
}
var recordParse = (platform, code) => metrics.inc("parse_total", { platform, code });
var observeParseDuration = (platform, ms) => metrics.observe("parse_duration_ms", { platform }, ms);
var recordCacheHit = () => metrics.inc("cache_hit_total");
var recordUpstreamError = (platform, reason) => metrics.inc("upstream_error_total", { platform, reason });
var recordChannelDowngrade = (platform, from, to) => metrics.inc("channel_downgrade_total", { platform, from, to });
var recordParseRetry = (platform) => metrics.inc("parse_retry_total", { platform });
function recordChannelBreaker(platform, open) {
  metrics.setGauge("channel_breaker_open", { platform }, open ? 1 : 0);
}

// src/platforms/douyin/uifid-pool.ts
var MAX_ENTRIES = 3;
var MINT_INTERVAL_MS = 60000;
var MINT_BACKOFF_CAP_MS = 3600000;
var COOLING_MS = 60000;

class UifidPool {
  entries = [];
  nextMintAt = 0;
  mintFailures = 0;
  minting = null;
  async acquire(minter, signal, now = Date.now()) {
    const usable = this.pickUsable(now);
    if (usable)
      return usable.identity;
    if (now < this.nextMintAt)
      return null;
    if (!this.minting) {
      this.minting = this.mint(minter, signal, now).finally(() => {
        this.minting = null;
      });
    }
    return this.minting;
  }
  pickUsable(now) {
    for (const e of this.entries) {
      if (e.status === "cooling" && now >= e.retryAt)
        e.status = "active";
    }
    const usable = this.entries.filter((e) => e.status === "active");
    usable.sort((a, b) => a.failures - b.failures || b.retryAt - a.retryAt);
    return usable[0] ?? null;
  }
  async mint(minter, signal, now) {
    const identity = await minter(signal).catch(() => null);
    if (!identity) {
      this.mintFailures += 1;
      const backoff = Math.min(MINT_INTERVAL_MS * 2 ** (this.mintFailures - 1), MINT_BACKOFF_CAP_MS);
      this.nextMintAt = now + backoff;
      metrics.inc("uifid_mint_total", { result: "fail" });
      return null;
    }
    this.mintFailures = 0;
    this.nextMintAt = now + MINT_INTERVAL_MS;
    metrics.inc("uifid_mint_total", { result: "ok" });
    this.addEntry(identity);
    return identity;
  }
  addEntry(identity) {
    this.entries.unshift({
      identity,
      status: "active",
      failures: 0,
      retryAt: Date.now()
    });
    while (this.entries.length > MAX_ENTRIES) {
      const dropped = this.entries.pop();
      if (dropped && dropped.status !== "retired")
        metrics.inc("uifid_retired_total", { reason: "evicted" });
    }
  }
  reportSuccess(uifid) {
    const e = this.entries.find((x) => x.identity.uifid === uifid);
    if (e) {
      e.failures = 0;
      e.status = "active";
    }
  }
  reportSuspect(uifid, now = Date.now()) {
    const e = this.entries.find((x) => x.identity.uifid === uifid);
    if (!e)
      return;
    e.failures += 1;
    if (e.failures >= 2) {
      e.status = "retired";
      metrics.inc("uifid_retired_total", { reason: "suspect" });
    } else {
      e.status = "cooling";
      e.retryAt = now + COOLING_MS;
    }
  }
  snapshot() {
    return this.entries.map((e) => ({
      uifid: `${e.identity.uifid.slice(0, 8)}…`,
      status: e.status,
      failures: e.failures
    }));
  }
  resetForTests() {
    this.entries = [];
    this.nextMintAt = 0;
    this.mintFailures = 0;
    this.minting = null;
  }
}
var uifidPool = new UifidPool;

// src/infra/channel-policy.ts
var BREAKER_THRESHOLD = 2;
var PROBE_INTERVAL_MS = 60000;
var breakers = new Map;
function stateOf(platform) {
  let s = breakers.get(platform);
  if (!s) {
    s = { consecutiveFailures: 0, openedAt: null };
    breakers.set(platform, s);
  }
  return s;
}
function shouldSkipHttp(platform, now = Date.now()) {
  const s = breakers.get(platform);
  if (!s || s.openedAt === null)
    return false;
  if (now - s.openedAt >= PROBE_INTERVAL_MS) {
    s.openedAt = null;
    return false;
  }
  return true;
}
function recordHttpRiskControl(platform, now = Date.now()) {
  const s = stateOf(platform);
  s.consecutiveFailures += 1;
  if (s.consecutiveFailures >= BREAKER_THRESHOLD) {
    s.openedAt = now;
  }
}
function recordHttpSuccess(platform) {
  const s = stateOf(platform);
  s.consecutiveFailures = 0;
  s.openedAt = null;
}
function breakerSnapshot() {
  return breakers;
}

// src/platforms/douyin/parse.ts
function firstUrl(u) {
  return u?.url_list?.[0];
}
function expiresFromDetail(d) {
  if (d.video?.cdn_url_expired && d.video.cdn_url_expired > 0)
    return d.video.cdn_url_expired;
  return;
}
function authorOf(d) {
  return {
    name: d.author?.nickname ?? "",
    id: d.author?.sec_uid,
    avatar: firstUrl(d.author?.avatar_thumb)
  };
}
function tagsOf(d) {
  return (d.text_extra ?? []).map((t) => t.hashtag_name).filter((n) => !!n);
}
function videoAsset(d) {
  const v = d.video;
  const uri = v?.play_addr?.uri;
  if (!uri)
    return null;
  const variants = [];
  for (const g of v?.bit_rate ?? []) {
    const u = firstUrl(g.play_addr);
    if (!u)
      continue;
    variants.push({
      ratio: g.gear_name ?? "unknown",
      url: buildPlayUrl(uri, ratioFromGear(g.gear_name)),
      size: g.play_addr?.data_size,
      width: g.play_addr?.width,
      height: g.play_addr?.height,
      watermark: false
    });
  }
  variants.push({ ratio: "origin", url: buildPlayUrl(uri, "default"), watermark: false });
  const dl = firstUrl(v?.download_addr);
  if (dl)
    variants.push({ ratio: "watermarked_720p", url: dl, size: v?.download_addr?.data_size, watermark: true });
  return {
    type: "video",
    url: buildPlayUrl(uri, "1080p"),
    size: v?.play_addr?.data_size,
    width: v?.play_addr?.width,
    height: v?.play_addr?.height,
    durationMs: v?.duration,
    coverUrl: firstUrl(v?.cover),
    variants
  };
}
function ratioFromGear(gear) {
  const m = gear?.match(/(\d{3,4})/);
  return m?.[1] ? `${m[1]}p` : "1080p";
}
function imageAssets(d) {
  return (d.images ?? []).map((img) => {
    const url = img.url_list?.[0];
    const isLive = img.live_photo_type === 1 && img.clip_type === 5;
    return {
      type: "image",
      url: url ?? "",
      width: img.width,
      height: img.height,
      liveClipUrl: isLive ? firstUrl(img.video?.play_addr) : undefined,
      variants: img.download_url_list?.[0] ? [{ ratio: "watermarked", url: img.download_url_list[0], watermark: true }] : []
    };
  });
}
function parseAweme(raw) {
  if (raw.via !== "api") {
    throw new AppError("UPSTREAM_CHANGED", `抖音解析收到未知载荷类型: ${raw.via}`);
  }
  const via = raw.channel;
  const body = raw.body;
  const d = body.aweme_detail;
  if (!d) {
    const reason = body.filter_detail?.filter_reason;
    if (reason) {
      throw new AppError("CONTENT_RESTRICTED", body.filter_detail?.detail_msg || "作品不可见", {
        filter_reason: reason
      });
    }
    throw new AppError("CONTENT_NOT_FOUND", "作品不存在或已删除");
  }
  const isAlbum = d.media_type === 2 || (d.images?.length ?? 0) > 0;
  const assets = isAlbum ? imageAssets(d) : [videoAsset(d)].filter((a) => a !== null);
  if (assets.length === 0 || assets.every((a) => !a.url)) {
    throw new AppError("UPSTREAM_CHANGED", "抖音返回数据中无可下载资源", { media_type: d.media_type });
  }
  const expiresAt = expiresFromDetail(d);
  const desc = d.desc ?? "";
  return {
    platform: "douyin",
    id: d.aweme_id ?? "",
    kind: isAlbum ? "album" : "video",
    title: desc.split(`
`)[0] ?? "",
    description: desc,
    tags: tagsOf(d),
    author: authorOf(d),
    assets,
    expiresAt,
    parsedAt: raw.fetchedAt,
    via
  };
}

// src/platforms/douyin/signing.ts
var UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
var DETAIL_URL = "https://www.douyin.com/aweme/v1/web/aweme/detail/";
var PAGE_ORIGIN = "https://www.douyin.com";
var BASE_PARAMS = {
  device_platform: "webapp",
  aid: "6383",
  channel: "channel_pc_web",
  pc_client_type: "1",
  version_code: "290100",
  version_name: "29.1.0",
  cookie_enabled: "true",
  screen_width: "1920",
  screen_height: "1080",
  browser_language: "zh-CN",
  browser_platform: "MacIntel",
  browser_name: "Chrome",
  browser_version: "131.0.0.0",
  browser_online: "true",
  engine_name: "Blink",
  engine_version: "131.0.0.0",
  os_name: "Mac OS",
  os_version: "10.15.7",
  cpu_core_num: "8",
  device_memory: "8",
  platform: "PC",
  downlink: "10",
  effective_type: "4g",
  round_trip_time: "0",
  update_version_code: "170400"
};
function activeSigner() {
  return pickSigner("douyin") ?? douyinAbogusSigner;
}
function buildL2DetailRequest(awemeId, identity, opts = {}) {
  const searchParams = new URLSearchParams({ ...BASE_PARAMS, aweme_id: awemeId });
  const signed = activeSigner().signRequest({
    url: `${DETAIL_URL}?${searchParams.toString()}`,
    uifid: identity.uifid,
    timestamp: opts.timestamp
  });
  return {
    url: signed.url,
    headers: {
      "User-Agent": UA,
      Referer: `${PAGE_ORIGIN}/`,
      Cookie: `ttwid=${identity.ttwid}; UIFID_TEMP=${identity.uifid}`,
      Accept: "application/json, text/plain, */*",
      ...signed.headers
    }
  };
}
async function resolveTtwid(injected, signal) {
  if (injected)
    return injected;
  return await activeSigner().mintTtwid?.(signal) ?? null;
}

// src/platforms/douyin/adapter.ts
var UA2 = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
var DETAIL_URL2 = "https://www.douyin.com/aweme/v1/web/aweme/detail/";
var DETAIL_PATH = "/aweme/v1/web/aweme/detail/";
var OPEN_ORIGIN = "https://open.douyin.com";
var BROWSER_TIMEOUT_MS = 15000;
var AWEME_ID_RE = /\/(?:video|note|share\/video|share\/note)\/(\d{15,20})/;
var MODAL_ID_RE = /[?&]modal_id=(\d{15,20})/;
function buildPlayUrl(videoId, ratio) {
  return `https://www.douyin.com/aweme/v1/play/?video_id=${encodeURIComponent(videoId)}&ratio=${ratio}&line=0`;
}
async function fetchViaHttp(input, ctx) {
  const qs = new URLSearchParams({ aweme_id: input.id, aid: "6383" });
  let res;
  try {
    res = await fetch(`${DETAIL_URL2}?${qs}`, {
      headers: {
        Origin: OPEN_ORIGIN,
        "User-Agent": UA2
      },
      signal: ctx.signal
    });
  } catch (err) {
    if (ctx.signal.aborted)
      throw err;
    throw new AppError("UPSTREAM_TIMEOUT", "抖音接口网络错误或超时", { err: String(err).slice(0, 120) });
  }
  if (res.status === 403) {
    const text = await res.text();
    if (text.includes("ArgusSecurityPlugin") || text.includes("Uifid")) {
      throw new AppError("RISK_CONTROL", "抖音风控拦截（L1 通道疑似失效）", { body: text.slice(0, 120) });
    }
    throw new AppError("UPSTREAM_ERROR", "抖音接口 403", { body: text.slice(0, 120) });
  }
  if (res.status !== 200) {
    throw new AppError("UPSTREAM_ERROR", `抖音接口 HTTP ${res.status}`);
  }
  const text = await res.text();
  if (!text) {
    throw new AppError("UPSTREAM_CHANGED", "抖音接口返回空 body");
  }
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new AppError("UPSTREAM_CHANGED", "抖音接口返回非 JSON");
  }
  return { via: "api", fetchedAt: Math.floor(Date.now() / 1000), body: json, channel: "http" };
}
async function fetchViaSigned(input, ctx, identity) {
  const { url, headers } = buildL2DetailRequest(input.id, identity);
  let res;
  try {
    res = await fetch(url, { headers, signal: ctx.signal });
  } catch (err) {
    if (ctx.signal.aborted)
      throw err;
    throw new AppError("UPSTREAM_TIMEOUT", "抖音 L2 签名通道网络错误或超时", {
      err: String(err).slice(0, 120)
    });
  }
  if (res.status === 403) {
    const text = await res.text();
    throw new AppError("UPSTREAM_CHANGED", "抖音 L2 签名失效（403，疑似 bdms 升级或 uifid 过期）", {
      body: text.slice(0, 120)
    });
  }
  if (res.status !== 200) {
    throw new AppError("UPSTREAM_ERROR", `抖音 L2 接口 HTTP ${res.status}`);
  }
  const text = await res.text();
  if (!text) {
    throw new AppError("UPSTREAM_CHANGED", "抖音 L2 接口返回空 body（静默拒绝）");
  }
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new AppError("UPSTREAM_CHANGED", "抖音 L2 接口返回非 JSON");
  }
  return { via: "api", fetchedAt: Math.floor(Date.now() / 1000), body: json, channel: "http-l2" };
}
async function fetchViaBrowser(input, url, ctx) {
  if (!ctx.browser) {
    throw new AppError("RISK_CONTROL", "抖音风控拦截，且浏览器兜底通道不可用", { id: input.id });
  }
  const pageUrl = hostMatches(url.hostname, "douyin.com") ? url.href : `https://www.douyin.com/video/${input.id}`;
  let body;
  try {
    body = await ctx.browser.interceptJson(pageUrl, DETAIL_PATH, BROWSER_TIMEOUT_MS, ctx.signal);
  } catch (err) {
    if (err instanceof AppError || ctx.signal.aborted)
      throw err;
    throw new AppError("UPSTREAM_TIMEOUT", "抖音浏览器通道超时", { err: String(err).slice(0, 120) });
  }
  const detail = body?.aweme_detail;
  if (!detail) {
    throw new AppError("UPSTREAM_CHANGED", "浏览器通道未截到 aweme_detail 数据");
  }
  return { via: "api", fetchedAt: Math.floor(Date.now() / 1000), body, channel: "browser" };
}
var CAST_URL = "https://www.douyin.com/jingxuan";
var CAST_TIMEOUT_MS = 8000;
async function resolveL2Identity(ctx) {
  if (ctx.douyinUifid) {
    const ttwid = await resolveTtwid(ctx.douyinTtwid, ctx.signal);
    return ttwid ? { uifid: ctx.douyinUifid, ttwid, pooled: false } : null;
  }
  const collect = ctx.browser?.collectCookies;
  if (!collect)
    return null;
  const minter = async (signal) => {
    const cookies = await collect(CAST_URL, { name: "UIFID_TEMP", timeoutMs: CAST_TIMEOUT_MS }, signal);
    const uifid = cookies["UIFID_TEMP"];
    return uifid ? { uifid, ttwid: cookies["ttwid"] ?? null } : null;
  };
  const minted = await uifidPool.acquire(minter, ctx.signal);
  if (!minted)
    return null;
  const ttwid = minted.ttwid ?? await resolveTtwid(undefined, ctx.signal);
  return ttwid ? { uifid: minted.uifid, ttwid, pooled: true } : null;
}
var douyinAdapter = {
  platform: "douyin",
  description: "抖音：零签名 detail 通道 + 签名 L2 通道 + play 直链（L1 风控时逐级降级，浏览器兜底）",
  hosts: ["douyin.com", "iesdouyin.com"],
  capabilities: { http: true, browser: true, tlsImpersonation: false, kinds: ["video", "album"] },
  match(url) {
    if (url.hostname === "v.douyin.com") {
      return { platform: "douyin", id: url.pathname.replace(/\//g, ""), kind: "unknown", needsResolve: true };
    }
    const m = url.href.match(AWEME_ID_RE);
    if (m?.[1])
      return { platform: "douyin", id: m[1], kind: "unknown", needsResolve: false };
    const modal = url.href.match(MODAL_ID_RE);
    if (modal?.[1])
      return { platform: "douyin", id: modal[1], kind: "unknown", needsResolve: false };
    return null;
  },
  async resolve(url, ctx) {
    const res = await proxiedFetch(url.href, {
      method: "HEAD",
      redirect: "manual",
      headers: { "User-Agent": UA2 },
      signal: ctx.signal
    });
    await res.body?.cancel();
    const loc = res.headers.get("location");
    if (!loc) {
      throw new AppError("INVALID_URL", "抖音短链未返回跳转地址", { url: url.href, status: res.status });
    }
    return new URL(loc);
  },
  async fetch(input, url, ctx) {
    const wantL2 = !!ctx.douyinUifid || !!ctx.browser?.collectCookies;
    let lastErr = null;
    let l1RiskControl = false;
    const skipL1 = shouldSkipHttp("douyin") && (wantL2 || !!ctx.browser);
    if (skipL1) {
      ctx.logger.warn("douyin circuit sticky: skip L1", { id: input.id, l2: wantL2 });
    } else {
      try {
        return await fetchViaHttp(input, ctx);
      } catch (err) {
        const downgrade = err instanceof AppError && (err.code === "RISK_CONTROL" || err.code === "UPSTREAM_ERROR");
        if (!downgrade || ctx.signal.aborted || !wantL2 && !ctx.browser)
          throw err;
        l1RiskControl = err instanceof AppError && err.code === "RISK_CONTROL";
        lastErr = err;
      }
    }
    let viaL2 = false;
    if (wantL2) {
      const identity = await resolveL2Identity(ctx);
      if (identity) {
        viaL2 = true;
        if (!skipL1) {
          recordChannelDowngrade("douyin", "http-l1", "http-l2");
          if (l1RiskControl)
            recordHttpRiskControl("douyin");
        }
        try {
          const raw = await fetchViaSigned(input, ctx, identity);
          if (identity.pooled)
            uifidPool.reportSuccess(identity.uifid);
          return raw;
        } catch (err) {
          if (ctx.signal.aborted)
            throw err;
          lastErr = err;
          if (identity.pooled && err instanceof AppError && err.code === "UPSTREAM_CHANGED") {
            uifidPool.reportSuspect(identity.uifid);
          }
          ctx.logger.warn("douyin L2 failed, downgrade to browser channel", {
            id: input.id,
            code: lastErr.code,
            identity: identity.pooled ? "pool" : "env"
          });
        }
      }
    }
    if (!ctx.browser)
      throw lastErr ?? new AppError("UPSTREAM_ERROR", "抖音无可用取数通道");
    if (viaL2)
      recordChannelDowngrade("douyin", "http-l2", "browser");
    else if (!skipL1) {
      recordChannelDowngrade("douyin", "http", "browser");
      if (l1RiskControl)
        recordHttpRiskControl("douyin");
    }
    return fetchViaBrowser(input, url, ctx);
  },
  parse: parseAweme
};

// src/platforms/kuaishou/parse.ts
function extractPhotoJson(html) {
  const idx = html.indexOf('"photo":');
  if (idx < 0) {
    throw new AppError("UPSTREAM_CHANGED", "快手分享页未找到 photo 数据（页面结构可能已改版）");
  }
  const start = html.indexOf("{", idx);
  if (start < 0)
    throw new AppError("UPSTREAM_CHANGED", "快手 photo 数据格式异常");
  let depth = 0;
  let inStr = false;
  let esc = false;
  for (let i = start;i < html.length; i++) {
    const c = html[i];
    if (esc) {
      esc = false;
      continue;
    }
    if (c === "\\") {
      esc = true;
      continue;
    }
    if (c === '"')
      inStr = !inStr;
    if (inStr)
      continue;
    if (c === "{")
      depth++;
    else if (c === "}") {
      depth--;
      if (depth === 0) {
        try {
          return JSON.parse(html.slice(start, i + 1));
        } catch (e) {
          throw new AppError("UPSTREAM_CHANGED", "快手 photo JSON 解析失败", {
            err: e instanceof Error ? e.message : String(e)
          });
        }
      }
    }
  }
  throw new AppError("UPSTREAM_CHANGED", "快手 photo JSON 未闭合");
}
function sortRepresentations(reps) {
  return [...reps].sort((a, b) => (b.height ?? 0) - (a.height ?? 0));
}
function parseKuaishou(raw) {
  if (raw.via !== "html-embedded-json") {
    throw new AppError("UPSTREAM_CHANGED", `快手解析收到未知载荷类型: ${raw.via}`);
  }
  const photo = extractPhotoJson(raw.body);
  const picUrls = (photo.picUrls ?? []).map((p) => p?.url).filter((u) => !!u);
  const isAlbum = picUrls.length > 0 && !(photo.manifest || photo.mainMvUrls);
  let assets;
  if (isAlbum) {
    assets = picUrls.map((url) => ({ type: "image", url }));
  } else {
    const reps = sortRepresentations((photo.manifest?.adaptationSet ?? []).flatMap((s) => s.representation ?? []));
    const main = photo.mainMvUrls?.[0]?.url;
    const best = reps[0];
    const primary = best?.url ?? main;
    if (!primary) {
      throw new AppError("UPSTREAM_CHANGED", "快手返回数据中无可下载资源");
    }
    const variants = reps.slice(1).map((r) => ({
      ratio: r.qualityType ?? `${r.height ?? 0}p`,
      url: r.url ?? "",
      size: r.fileSize,
      width: r.width,
      height: r.height,
      watermark: false
    }));
    assets = [
      {
        type: "video",
        url: primary,
        size: best?.fileSize,
        width: best?.width,
        height: best?.height,
        durationMs: photo.duration,
        coverUrl: photo.coverUrls?.[0]?.url,
        variants
      }
    ];
  }
  return {
    platform: "kuaishou",
    id: photo.photoId ?? "",
    kind: isAlbum ? "album" : "video",
    title: (photo.caption ?? "").split(`
`)[0] ?? "",
    description: photo.caption,
    author: { name: photo.userName ?? "", avatar: photo.headUrl ?? photo.headUrls?.[0]?.url },
    assets,
    parsedAt: raw.fetchedAt,
    via: "http"
  };
}

// src/platforms/kuaishou/adapter.ts
var KUAISHOU_UA = "Mozilla/5.0 (iPhone; CPU iPhone OS 17_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.5 Mobile/15E148 Safari/604.1";
var PHOTO_PATH_RE = /\/fw\/photo\/([A-Za-z0-9_-]+)/;
var PHOTO_ID_QS_RE = /[?&]photoId=([A-Za-z0-9_-]+)/;
var SHORT_CODE_RE = /^\/([A-Za-z0-9]+)\/?$/;
var kuaishouAdapter = {
  platform: "kuaishou",
  description: "快手：短链 302 取 photoId + 移动端分享页 INIT_STATE",
  hosts: ["kuaishou.com", "chenzhongtech.com"],
  capabilities: { http: true, browser: false, tlsImpersonation: false, kinds: ["video", "album"] },
  match(url) {
    if (!hostMatches(url.hostname, "kuaishou.com") && !hostMatches(url.hostname, "chenzhongtech.com"))
      return null;
    if (url.hostname === "v.kuaishou.com") {
      const m = url.pathname.match(SHORT_CODE_RE);
      if (!m?.[1])
        return null;
      return { platform: "kuaishou", id: m[1], kind: "unknown", needsResolve: true };
    }
    const path = url.href.match(PHOTO_PATH_RE);
    if (path?.[1])
      return { platform: "kuaishou", id: path[1], kind: "unknown", needsResolve: false };
    const qs = url.href.match(PHOTO_ID_QS_RE);
    if (qs?.[1])
      return { platform: "kuaishou", id: qs[1], kind: "unknown", needsResolve: false };
    return null;
  },
  async resolve(url, ctx) {
    const res = await proxiedFetch(url.href, {
      method: "HEAD",
      redirect: "manual",
      headers: { "User-Agent": KUAISHOU_UA },
      signal: ctx.signal
    });
    await res.body?.cancel();
    const loc = res.headers.get("location");
    if (!loc) {
      throw new AppError("INVALID_URL", "快手短链未返回跳转地址", { url: url.href, status: res.status });
    }
    return new URL(loc, url.href);
  },
  async fetch(input, _url, ctx) {
    const pageUrl = `https://v.m.chenzhongtech.com/fw/photo/${input.id}`;
    const res = await proxiedFetch(pageUrl, {
      redirect: "follow",
      headers: {
        "User-Agent": KUAISHOU_UA,
        Accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8"
      },
      signal: ctx.signal
    });
    if (res.status !== 200) {
      throw new AppError("UPSTREAM_ERROR", `快手分享页 HTTP ${res.status}`, { photoId: input.id });
    }
    const html = await res.text();
    if (!html.includes("window.INIT_STATE")) {
      throw new AppError("UPSTREAM_CHANGED", "快手分享页无 INIT_STATE（可能被跳到桌面空壳页）", {
        photoId: input.id,
        finalUrl: res.url
      });
    }
    return {
      via: "html-embedded-json",
      fetchedAt: Math.floor(Date.now() / 1000),
      body: html,
      channel: "http"
    };
  },
  parse: parseKuaishou
};

// src/platforms/bilibili/parse.ts
function streamUrl(s) {
  return s.base_url ?? s.baseUrl ?? "";
}
function streamBackups(s) {
  const list = s.backup_url ?? s.backupUrl ?? [];
  return Array.isArray(list) ? list.filter((u) => typeof u === "string") : [];
}
function qualityName(id, w, h) {
  const names = {
    127: "8K",
    126: "杜比视界",
    125: "HDR",
    120: "4K",
    116: "1080P60",
    112: "1080P+",
    100: "智能修复",
    80: "1080P",
    74: "720P60",
    64: "720P",
    32: "480P",
    16: "360P"
  };
  if (id !== undefined && names[id])
    return names[id];
  if (w && h)
    return `${h}p`;
  return `id${id ?? "?"}`;
}
function sortStreams(streams) {
  return [...streams].sort((a, b) => {
    const hd = (b.height ?? 0) - (a.height ?? 0);
    if (hd !== 0)
      return hd;
    return (b.bandwidth ?? 0) - (a.bandwidth ?? 0);
  });
}
function urlExpiry(url) {
  const m = url.match(/[?&](?:deadline|expires)=(\d{9,11})(?:[&#]|$)/);
  const ts = m?.[1] ? Number(m[1]) : undefined;
  return ts !== undefined && ts > 1e9 && ts < 100000000000 ? ts : undefined;
}
function parseBilibili(raw) {
  if (raw.via !== "api") {
    throw new AppError("UPSTREAM_CHANGED", `B站解析收到未知载荷类型: ${raw.via}`);
  }
  const payload = raw.body;
  if (!payload || !Array.isArray(payload.streams) || payload.streams.length === 0) {
    throw new AppError("UPSTREAM_CHANGED", "B站载荷缺少 streams");
  }
  const viewData = payload.view.data ?? {};
  const pages = viewData.pages ?? [];
  const isMulti = (viewData.videos ?? pages.length) > 1;
  const assets = payload.streams.map((stream, idx) => {
    const videos = sortStreams(stream.videos ?? []);
    const audios = stream.audios ?? [];
    const best = videos[0];
    if (!best || !streamUrl(best)) {
      throw new AppError("UPSTREAM_CHANGED", `B站 P${stream.page} 无可用视频流`);
    }
    const bestAudio = [...audios].sort((a, b) => (b.bandwidth ?? 0) - (a.bandwidth ?? 0))[0];
    const byTier = new Map;
    for (const s of videos) {
      if (s.id === best.id)
        continue;
      const key = s.id ?? -1;
      const cur = byTier.get(key);
      if (!cur || (s.bandwidth ?? 0) > (cur.bandwidth ?? 0))
        byTier.set(key, s);
    }
    const variants = [...byTier.values()].map((s) => ({
      ratio: qualityName(s.id, s.width, s.height),
      url: streamUrl(s),
      width: s.width,
      height: s.height,
      watermark: false
    }));
    const pageInfo = pages.find((p) => p.page === stream.page) ?? pages[idx];
    const dim = pageInfo?.dimension ?? viewData.dimension;
    const part = stream.part ?? pageInfo?.part;
    const asset = {
      type: "video",
      url: streamUrl(best),
      width: best.width ?? dim?.width,
      height: best.height ?? dim?.height,
      durationMs: pageInfo?.duration ? pageInfo.duration * 1000 : viewData.duration ? viewData.duration * 1000 : undefined,
      backups: streamBackups(best),
      coverUrl: viewData.pic,
      variants
    };
    const expiries = [urlExpiry(asset.url), bestAudio ? urlExpiry(streamUrl(bestAudio)) : undefined].filter((t) => t !== undefined);
    if (expiries.length > 0)
      asset.expiresAt = Math.min(...expiries);
    if (bestAudio && streamUrl(bestAudio)) {
      asset.audioUrl = streamUrl(bestAudio);
    }
    if (isMulti && part) {
      asset.partTitle = part;
    }
    return asset;
  });
  return {
    platform: "bilibili",
    id: viewData.bvid ?? "",
    kind: "video",
    title: isMulti && viewData.title ? `${viewData.title}（共 ${payload.streams.length}P）` : viewData.title ?? "",
    description: viewData.desc,
    author: {
      name: viewData.owner?.name ?? "",
      id: viewData.owner?.mid !== undefined ? String(viewData.owner.mid) : undefined,
      avatar: viewData.owner?.face
    },
    assets,
    expiresAt: minExpiry(assets),
    parsedAt: raw.fetchedAt,
    via: "http"
  };
}
function minExpiry(assets) {
  const list = assets.map((a) => a.expiresAt).filter((t) => t !== undefined);
  return list.length > 0 ? Math.min(...list) : undefined;
}

// src/platforms/bilibili/adapter.ts
var BILIBILI_UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
var REFERER = "https://www.bilibili.com";
var API = "https://api.bilibili.com";
var VIEW_URL = `${API}/x/web-interface/view`;
var PLAY_URL = `${API}/x/player/playurl`;
function playUrlParams(bvid, cid) {
  return new URLSearchParams({
    bvid,
    cid,
    qn: "80",
    fnval: "4048",
    fnver: "0",
    fourk: "1",
    try_look: "1"
  });
}
var BVID_RE = /(BV[0-9A-Za-z]{10})/;
var AV_RE = /av(\d{6,15})/;
function bvidFromAv(av) {
  return `__av_${av}`;
}
var bilibiliAdapter = {
  platform: "bilibili",
  description: "B站：view + playurl(try_look=1)，DASH 音视频分离，多 P 逐个出 asset",
  hosts: ["bilibili.com", "b23.tv"],
  capabilities: { http: true, browser: false, tlsImpersonation: false, kinds: ["video"] },
  match(url) {
    if (!hostMatches(url.hostname, "bilibili.com") && url.hostname !== "b23.tv")
      return null;
    if (url.hostname === "b23.tv") {
      const code = url.pathname.replace(/\//g, "");
      if (!code)
        return null;
      return { platform: "bilibili", id: code, kind: "unknown", needsResolve: true };
    }
    const bv = url.href.match(BVID_RE);
    if (bv?.[1])
      return { platform: "bilibili", id: bv[1], kind: "video", needsResolve: false };
    const av = url.href.match(AV_RE);
    if (av?.[1])
      return { platform: "bilibili", id: bvidFromAv(av[1]), kind: "video", needsResolve: false };
    return null;
  },
  async resolve(url, ctx) {
    const res = await proxiedFetch(url.href, {
      method: "HEAD",
      redirect: "manual",
      headers: { "User-Agent": BILIBILI_UA },
      signal: ctx.signal
    });
    await res.body?.cancel();
    const loc = res.headers.get("location");
    if (!loc) {
      throw new AppError("INVALID_URL", "b23.tv 短链未返回跳转地址", { url: url.href, status: res.status });
    }
    return new URL(loc, url.href);
  },
  async fetch(input, _url, ctx) {
    const headers = { "User-Agent": BILIBILI_UA, Referer: REFERER };
    const isAv = input.id.startsWith("__av_");
    const aid = isAv ? input.id.slice(5) : null;
    const viewQs = new URLSearchParams(isAv && aid ? { aid } : { bvid: input.id });
    const view = await requestJson(`${VIEW_URL}?${viewQs}`, headers, ctx.signal);
    const viewData = asRecord(view.data);
    if (!viewData)
      throw new AppError("CONTENT_NOT_FOUND", "B站接口未返回视频数据", { bvid: input.id });
    const bvid = typeof viewData.bvid === "string" ? viewData.bvid : input.id.replace(/^__av_/, "");
    const pageList = Array.isArray(viewData.pages) ? viewData.pages : [];
    if (pageList.length === 0) {
      throw new AppError("UPSTREAM_CHANGED", "B站 view 未返回 pages", { bvid });
    }
    const streams = await Promise.all(pageList.map(async (page, i) => {
      const cid = asRecord(page)?.cid;
      if (typeof cid !== "number" && typeof cid !== "string") {
        throw new AppError("UPSTREAM_CHANGED", `B站 pages[${i}] 缺少 cid`, { bvid });
      }
      const play = await requestJson(`${PLAY_URL}?${playUrlParams(bvid, String(cid))}`, headers, ctx.signal);
      const playData = asRecord(play.data);
      if (!playData)
        throw new AppError("UPSTREAM_CHANGED", `B站 playurl 未返回数据（P${i + 1}）`, { bvid, cid });
      const dash = asRecord(playData.dash);
      const videos = dash?.video;
      const audios = dash?.audio;
      if (!Array.isArray(videos) || videos.length === 0) {
        throw new AppError("UPSTREAM_CHANGED", `B站 playurl 无 dash.video（P${i + 1}）`, { bvid, cid });
      }
      return {
        page: i + 1,
        cid,
        part: asRecord(page)?.part,
        videos,
        audios: Array.isArray(audios) ? audios : []
      };
    }));
    return {
      via: "api",
      fetchedAt: Math.floor(Date.now() / 1000),
      body: { view, streams },
      channel: "http"
    };
  },
  parse: parseBilibili
};
function asRecord(v) {
  return v !== null && typeof v === "object" ? v : null;
}
async function requestJson(url, headers, signal) {
  const res = await proxiedFetch(url, { headers, signal });
  const text = await res.text();
  if (res.status !== 200) {
    throw new AppError("UPSTREAM_ERROR", `B站接口 HTTP ${res.status}`, {
      url: url.split("?")[0],
      body: text.slice(0, 120)
    });
  }
  if (!text) {
    throw new AppError("UPSTREAM_CHANGED", "B站接口返回空 body");
  }
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new AppError("UPSTREAM_CHANGED", "B站接口返回非 JSON");
  }
  if (json.code !== 0) {
    const msg = json.message ?? "未知错误";
    if (json.code === -404 || json.code === -400) {
      throw new AppError("CONTENT_NOT_FOUND", `B站视频不存在（${msg}）`, { code: json.code });
    }
    if (json.code === 62002 || json.code === -403) {
      throw new AppError("CONTENT_RESTRICTED", `B站视频不可见（${msg}）`, { code: json.code });
    }
    throw new AppError("UPSTREAM_ERROR", `B站接口错误 ${json.code}: ${msg}`, { code: json.code });
  }
  return { code: 0, message: json.message, data: json.data };
}

// src/platforms/xhs/parse.ts
var STATE_RE = /window\.__INITIAL_STATE__\s*=\s*/;
var NO_INITIAL_STATE = Symbol("NO_INITIAL_STATE");
function extractInitialState(html) {
  const m = html.match(STATE_RE);
  if (!m || m.index === undefined) {
    throw NO_INITIAL_STATE;
  }
  const start = m.index + m[0].length;
  const open = html.indexOf("{", start);
  if (open === -1) {
    throw new AppError("UPSTREAM_CHANGED", "__INITIAL_STATE__ 不是对象字面量");
  }
  const slice = braceMatchedSlice(html, open);
  const json = replaceBareUndefined(slice);
  let state;
  try {
    state = JSON.parse(json);
  } catch (e) {
    throw new AppError("UPSTREAM_CHANGED", "__INITIAL_STATE__ 不是合法 JSON", {
      err: e instanceof Error ? e.message : String(e)
    });
  }
  return state;
}
function braceMatchedSlice(html, open) {
  let depth = 0;
  let inStr = false;
  let escape = false;
  for (let i = open;i < html.length; i++) {
    const c = html[i];
    if (inStr) {
      if (escape)
        escape = false;
      else if (c === "\\")
        escape = true;
      else if (c === '"')
        inStr = false;
      continue;
    }
    if (c === '"')
      inStr = true;
    else if (c === "{" || c === "[")
      depth++;
    else if (c === "}" || c === "]") {
      depth--;
      if (depth === 0)
        return html.slice(open, i + 1);
    }
  }
  throw new AppError("UPSTREAM_CHANGED", "__INITIAL_STATE__ 括号不配对（脚本被截断）");
}
function isUndefinedAt(chars, i) {
  if (i + 9 > chars.length)
    return false;
  return chars[i] === "u" && chars[i + 1] === "n" && chars[i + 2] === "d" && chars[i + 3] === "e" && chars[i + 4] === "f" && chars[i + 5] === "i" && chars[i + 6] === "n" && chars[i + 7] === "e" && chars[i + 8] === "d";
}
function replaceBareUndefined(src) {
  const chars = src.split("");
  let inStr = false;
  let escape = false;
  for (let i = 0;i < chars.length; i++) {
    const c = chars[i];
    if (inStr) {
      if (escape)
        escape = false;
      else if (c === "\\")
        escape = true;
      else if (c === '"')
        inStr = false;
      continue;
    }
    if (c === '"') {
      inStr = true;
      continue;
    }
    if (isUndefinedAt(chars, i)) {
      chars[i] = "n";
      chars[i + 1] = "u";
      chars[i + 2] = "l";
      chars[i + 3] = "l";
      for (let k = 4;k < 9; k++)
        chars[i + k] = "";
    }
  }
  return chars.join("");
}
function bestImageUrl(img) {
  const list = img.infoList ?? [];
  return (list.find((i) => i.imageScene === "WB_DFT") ?? list[0])?.url;
}
function videoAsset2(note) {
  const streams = note.video?.media?.stream;
  const h264 = streams?.h264 ?? [];
  const candidates = h264.length > 0 ? h264 : streams?.h265 ?? [];
  const best = candidates.find((s) => s.masterUrl);
  if (!best)
    return null;
  const backups = (best.backupUrls ?? []).filter((u) => !!u);
  return {
    type: "video",
    url: best.masterUrl,
    size: best.size,
    width: best.width,
    height: best.height,
    durationMs: best.duration ?? note.video?.media?.video?.duration,
    coverUrl: note.imageList?.[0] ? bestImageUrl(note.imageList[0]) : undefined,
    backups: backups.length > 0 ? backups : undefined
  };
}
function imageAssets2(note) {
  return (note.imageList ?? []).map((img) => ({
    type: "image",
    url: bestImageUrl(img) ?? "",
    width: img.width,
    height: img.height
  }));
}
function authorOf2(note) {
  return {
    name: note.user?.nickname ?? "",
    id: note.user?.userId,
    avatar: note.user?.avatar
  };
}
function tagsOf2(note) {
  return (note.tagList ?? []).map((t) => t.name).filter((n) => !!n);
}
function noteDataVerdict(html, id) {
  let state;
  try {
    state = extractInitialState(html);
  } catch (err) {
    if (err !== NO_INITIAL_STATE && !(err instanceof AppError))
      throw err;
    return isRiskPage(html) ? "risk" : "shell";
  }
  const detailMap = state.note?.noteDetailMap ?? {};
  const noteId = id || state.note?.currentNoteId || "";
  const entry = noteId !== "" ? detailMap[noteId] : undefined;
  if (entry?.note)
    return "data";
  return isRiskPage(html) ? "risk" : "empty";
}
function parseNote(raw, input) {
  if (raw.via !== "browser-intercept") {
    throw new AppError("UPSTREAM_CHANGED", `小红书解析收到未知载荷类型: ${raw.via}`);
  }
  const html = raw.body;
  if (typeof html !== "string") {
    throw new AppError("UPSTREAM_CHANGED", "小红书载荷不是 HTML 文本");
  }
  let state;
  try {
    state = extractInitialState(html);
  } catch (err) {
    if (err !== NO_INITIAL_STATE)
      throw err;
    if (isRiskPage(html)) {
      throw new AppError("RISK_CONTROL", "小红书风控拦截（出口 IP 被平台限制或未登录，换网络后重试）", {
        noteId: input.id || undefined
      });
    }
    throw new AppError("UPSTREAM_CHANGED", "页面里没有 window.__INITIAL_STATE__（可能被改版或落到安全页）");
  }
  const detailMap = state.note?.noteDetailMap ?? {};
  const id = input.id || state.note?.currentNoteId || "";
  const entry = id !== "" ? detailMap[id] : undefined;
  if (!entry) {
    if (isRiskPage(html)) {
      throw new AppError("RISK_CONTROL", "小红书命中登录墙/风控页", {
        noteId: id || undefined
      });
    }
    throw new AppError("CONTENT_NOT_FOUND", "笔记不在返回数据中（不存在/已删除/无权查看）", {
      noteId: id || undefined
    });
  }
  const note = entry.note;
  if (!note) {
    throw new AppError("CONTENT_NOT_FOUND", "笔记数据为空（不存在或已删除）", {
      noteId: id
    });
  }
  const isVideo = note.type === "video" && !!note.video?.media?.stream;
  const assets = isVideo ? [videoAsset2(note)].filter((a) => a !== null) : imageAssets2(note);
  if (assets.length === 0 || assets.every((a) => !a.url)) {
    throw new AppError("UPSTREAM_CHANGED", "小红书返回数据中无可下载资源", {
      noteId: id,
      type: note.type
    });
  }
  const desc = note.desc ?? "";
  return {
    platform: "xhs",
    id: note.noteId ?? id,
    kind: isVideo ? "video" : "album",
    title: (note.title || desc.split(`
`)[0] || "").trim(),
    description: desc,
    tags: tagsOf2(note),
    author: authorOf2(note),
    assets,
    parsedAt: raw.fetchedAt,
    via: raw.channel === "http" ? "http" : "browser"
  };
}
function isRiskPage(html) {
  return html.includes("/website-login") || html.includes("error_code=300012") || html.includes("error_code=300031") || html.includes("IP at risk");
}

// src/platforms/xhs/adapter.ts
var NOTE_ID_RE = /\/(?:explore|discovery\/item)\/([0-9a-f]{24})/;
var SHORT_HOSTS = new Set(["xhslink.com", "xhslink.cn"]);
var UA3 = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
var BROWSER_HEADERS = {
  "user-agent": UA3,
  accept: "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
  "accept-language": "zh-CN,zh;q=0.9"
};
var BROWSER_TIMEOUT_MS2 = 12000;
var LOGINWALL_RETRIES = 1;
var client = (url, init) => fetch(url, init);
function classifyRedirect(location) {
  if (location.includes("error_code=300012"))
    return "ip-risk";
  if (location.includes("error_code=300031"))
    return "token-invalid";
  return "loginwall";
}
function noteUrl(input, url) {
  if (url.hostname.endsWith("xiaohongshu.com") && NOTE_ID_RE.test(url.href)) {
    return url.href;
  }
  const path = input.id ? `/explore/${input.id}` : "/explore";
  const token = input.params?.xsec_token;
  return token ? `https://www.xiaohongshu.com${path}?xsec_token=${encodeURIComponent(token)}&xsec_source=pc_share` : `https://www.xiaohongshu.com${path}`;
}
async function fetchViaHttp2(input, url, ctx) {
  const target = noteUrl(input, url);
  let loginwall = 0;
  for (;; ) {
    let res;
    try {
      res = await client(target, {
        redirect: "manual",
        headers: BROWSER_HEADERS,
        signal: ctx.signal
      });
    } catch (err) {
      if (ctx.signal.aborted)
        throw err;
      throw new AppError("UPSTREAM_TIMEOUT", "小红书接口网络错误或超时", { err: String(err).slice(0, 120) });
    }
    if (res.status < 200 || res.status >= 300) {
      await res.body?.cancel();
      const loc = res.headers.get("location") ?? "";
      const kind = classifyRedirect(loc);
      if (kind === "ip-risk") {
        throw new AppError("RISK_CONTROL", "小红书风控拦截（出口 IP 被平台限制，换网络后重试）", {
          noteId: input.id || undefined
        });
      }
      if (kind === "token-invalid") {
        throw new AppError("CONTENT_NOT_FOUND", "笔记链接无效或已过期（xsec_token 失效）", {
          noteId: input.id || undefined
        });
      }
      loginwall += 1;
      if (loginwall > LOGINWALL_RETRIES) {
        throw new AppError("UPSTREAM_ERROR", "小红书登录墙（HTTP 通道请求头被拒）", {
          noteId: input.id || undefined,
          status: res.status,
          location: loc.slice(0, 120)
        });
      }
      continue;
    }
    const html = await res.text();
    const verdict = noteDataVerdict(html, input.id);
    if (verdict === "risk") {
      throw new AppError("RISK_CONTROL", "小红书风控拦截（出口 IP 被平台限制或未登录，换网络后重试）", {
        noteId: input.id || undefined
      });
    }
    if (ctx.browser && (verdict === "shell" || verdict === "empty")) {
      throw new AppError("UPSTREAM_CHANGED", "小红书返回壳页/笔记数据为空，交浏览器验证", {
        noteId: input.id || undefined
      });
    }
    return {
      via: "browser-intercept",
      fetchedAt: Math.floor(Date.now() / 1000),
      body: html,
      channel: "http"
    };
  }
}
async function fetchViaBrowser2(url, ctx) {
  if (!ctx.browser) {
    throw new AppError("UPSTREAM_ERROR", "小红书 HTTP 通道失败，且浏览器兜底通道不可用");
  }
  const html = await ctx.browser.getDocumentHtml(url.href, BROWSER_TIMEOUT_MS2);
  if (!html) {
    throw new AppError("UPSTREAM_CHANGED", "浏览器未截到主文档 HTML");
  }
  return {
    via: "browser-intercept",
    fetchedAt: Math.floor(Date.now() / 1000),
    body: html,
    channel: "browser"
  };
}
var xhsAdapter = {
  platform: "xhs",
  description: "小红书：纯 HTTP 直抓 __INITIAL_STATE__（请求头三件套放行），风控时自动降级浏览器",
  hosts: ["xiaohongshu.com", "xhslink.com", "xhslink.cn"],
  capabilities: {
    http: true,
    browser: true,
    tlsImpersonation: false,
    kinds: ["video", "album"]
  },
  match(url) {
    if (SHORT_HOSTS.has(url.hostname)) {
      return { platform: "xhs", id: "", kind: "unknown", needsResolve: true };
    }
    const m = url.href.match(NOTE_ID_RE);
    if (!m?.[1])
      return null;
    const token = url.searchParams.get("xsec_token");
    return {
      platform: "xhs",
      id: m[1],
      kind: "unknown",
      needsResolve: false,
      params: token ? { xsec_token: token } : undefined
    };
  },
  async resolve(url, ctx) {
    let res;
    try {
      res = await client(url.href, {
        redirect: "manual",
        headers: BROWSER_HEADERS,
        signal: ctx.signal
      });
    } catch (err) {
      if (ctx.signal.aborted)
        throw err;
      throw new AppError("UPSTREAM_TIMEOUT", "小红书短链展开网络错误或超时", {
        err: String(err).slice(0, 120)
      });
    }
    await res.body?.cancel();
    const loc = res.headers.get("location");
    if (!loc) {
      throw new AppError("INVALID_URL", "小红书短链未返回跳转地址", { url: url.href, status: res.status });
    }
    return new URL(loc);
  },
  async fetch(input, url, ctx) {
    if (ctx.browser && shouldSkipHttp("xhs")) {
      ctx.logger.warn("xhs circuit sticky: skip http channel, go browser directly", { id: input.id });
      return fetchViaBrowser2(url, ctx);
    }
    try {
      return await fetchViaHttp2(input, url, ctx);
    } catch (err) {
      const downgrade = err instanceof AppError && (err.code === "UPSTREAM_ERROR" || err.code === "UPSTREAM_CHANGED");
      if (!downgrade || !ctx.browser || ctx.signal.aborted) {
        throw err;
      }
      ctx.logger.warn("xhs http channel risk signal, downgrade to browser channel", { id: input.id });
      recordChannelDowngrade("xhs", "http", "browser");
      if (err instanceof AppError && err.code === "UPSTREAM_ERROR")
        recordHttpRiskControl("xhs");
      return fetchViaBrowser2(url, ctx);
    }
  },
  parse: parseNote
};

// src/platforms/weibo/parse.ts
function templateDims(url) {
  const m = url.match(/[?&]template=(\d+)x(\d+)/);
  return { width: m?.[1] ? Number(m[1]) : undefined, height: m?.[2] ? Number(m[2]) : undefined };
}
function urlExpiry2(url) {
  const m = url.match(/[?&](?:Expires|expires)=(\d{9,11})(?:[&#]|$)/);
  const ts = m?.[1] ? Number(m[1]) : undefined;
  return ts !== undefined && ts > 1e9 && ts < 100000000000 ? ts : undefined;
}
function absUrl(u) {
  return u.startsWith("//") ? `https:${u}` : u;
}
function showRatio(key) {
  return key.replace(/^mp4_/, "").replace(/_mp4$/, "");
}
function componentRatio(key) {
  const m = key.match(/(\d+)\s*[Pp]/);
  return m?.[1] ? `${m[1]}P` : key.trim();
}
function streamFromUrl(url, ratio) {
  const { width, height } = templateDims(url);
  return { url: absUrl(url), ratio, width, height };
}
function collectStreams(status, play) {
  const streams = [];
  const seen = new Set;
  const push = (url, ratio) => {
    const abs = absUrl(url);
    if (!abs.startsWith("http") || seen.has(abs))
      return;
    seen.add(abs);
    streams.push(streamFromUrl(abs, ratio));
  };
  for (const [key, url] of Object.entries(play?.urls ?? {})) {
    if (url)
      push(url, componentRatio(key));
  }
  for (const [key, url] of Object.entries(status.page_info?.urls ?? {})) {
    if (url)
      push(url, showRatio(key));
  }
  const mi = status.page_info?.media_info;
  if (mi?.stream_url_hd)
    push(mi.stream_url_hd, "hd");
  if (mi?.stream_url)
    push(mi.stream_url, "sd");
  return streams;
}
function area(s) {
  return (s.width ?? 0) * (s.height ?? 0);
}
function cleanText(html) {
  return html.replace(/<br\s*\/?>/gi, `
`).replace(/<[^>]+>/g, "").replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/\s+\n/g, `
`).trim();
}
function extractTags(text, play) {
  const tags = new Set;
  for (const t of play?.topics ?? []) {
    if (t.content)
      tags.add(t.content.replace(/\[超话\]$/, "").trim());
  }
  for (const m of text.matchAll(/<a[^>]*href="[^"]*(?:extparam=|huati\.weibo)[^"]*"[^>]*>[\s\S]*?<span[^>]*class="surl-text"[^>]*>([^<]+)<\/span>/g)) {
    const tag = m[1]?.trim().replace(/\[超话\]$/, "");
    if (tag)
      tags.add(tag);
  }
  for (const m of text.matchAll(/#([^#\n]{1,40})#/g)) {
    const tag = m[1]?.replace(/\[超话\]$/, "").trim();
    if (tag)
      tags.add(tag);
  }
  return [...tags];
}
function classifyEnvelope(show) {
  const msg = show.msg ?? "";
  const detail = { errno: show.errno, msg: show.msg };
  if (show.errno === "20101" || /不存在|已删除/.test(msg)) {
    return new AppError("CONTENT_NOT_FOUND", `微博内容不存在（${msg}）`, detail);
  }
  if (/可见|权限|隐私|关注|登录|受限|仅粉丝|仅自己/.test(msg)) {
    return new AppError("CONTENT_RESTRICTED", `微博内容不可见（${msg}）`, detail);
  }
  if (/频繁|拥挤|稍后|风控/.test(msg)) {
    return new AppError("RISK_CONTROL", `微博风控拦截（${msg}）`, detail);
  }
  return new AppError("UPSTREAM_ERROR", `微博接口错误（${msg}）`, detail);
}
function parseWeibo(raw) {
  if (raw.via !== "api") {
    throw new AppError("UPSTREAM_CHANGED", `微博解析收到未知载荷类型: ${raw.via}`);
  }
  const payload = raw.body;
  const show = payload?.show;
  if (!show || typeof show !== "object") {
    throw new AppError("UPSTREAM_CHANGED", "微博载荷缺少 show 响应");
  }
  if (show.ok !== 1 || !show.data) {
    throw classifyEnvelope(show);
  }
  const status = show.data;
  const play = payload.component?.data?.Component_Play_Playinfo;
  const mi = status.page_info?.media_info;
  const assets = [];
  const streams = collectStreams(status, play);
  if (streams.length > 0) {
    const sorted = [...streams].sort((a, b) => area(b) - area(a));
    const best = sorted[0];
    const variants = sorted.slice(1).map((s) => ({
      ratio: s.ratio,
      url: s.url,
      width: s.width,
      height: s.height,
      watermark: false
    }));
    const durationSec = mi?.duration ?? play?.duration_time;
    const asset = {
      type: "video",
      url: best.url,
      width: best.width,
      height: best.height,
      durationMs: durationSec ? Math.round(durationSec * 1000) : undefined,
      coverUrl: absUrl(status.page_info?.page_pic?.url ?? play?.cover_image ?? ""),
      variants
    };
    const expiry = urlExpiry2(asset.url);
    if (expiry)
      asset.expiresAt = expiry;
    assets.push(asset);
  }
  const pics = status.pics ?? [];
  const picInfos = Object.values(status.pic_infos ?? {});
  const imageSources = [
    ...pics.map((p) => ({ url: p.large?.url ?? p.url, geo: p.large?.geo })),
    ...picInfos.map((p) => ({ url: p.large?.url, geo: p.large?.geo }))
  ];
  for (const pic of imageSources) {
    if (!pic.url)
      continue;
    assets.push({
      type: "image",
      url: absUrl(pic.url),
      width: pic.geo?.width !== undefined ? Number(pic.geo.width) : undefined,
      height: pic.geo?.height !== undefined ? Number(pic.geo.height) : undefined
    });
  }
  if (assets.length === 0) {
    throw new AppError("CONTENT_NOT_FOUND", "微博内容不含可下载的媒体");
  }
  const text = cleanText(status.text ?? "");
  const title = text.split(`
`)[0]?.trim() || status.page_info?.page_title || "微博";
  const expiries = assets.map((a) => a.expiresAt).filter((t) => t !== undefined);
  return {
    platform: "weibo",
    id: String(status.id ?? status.mid ?? ""),
    kind: streams.length > 0 ? "video" : "album",
    title,
    description: text || undefined,
    tags: extractTags(status.text ?? "", play),
    author: {
      name: status.user?.screen_name ?? "",
      id: status.user?.id !== undefined ? String(status.user.id) : undefined,
      avatar: status.user?.avatar_hd
    },
    assets,
    expiresAt: expiries.length > 0 ? Math.min(...expiries) : undefined,
    parsedAt: raw.fetchedAt,
    via: "http"
  };
}

// src/platforms/weibo/adapter.ts
var WEIBO_UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
var SHOW_URL = "https://m.weibo.cn/statuses/show";
var COMPONENT_URL = "https://weibo.com/tv/api/component";
var FID_RE = /^\d+:(?:[\da-f]{32}|\d{16,})$/;
var POST_ID_RE = /^[A-Za-z0-9]{8,20}$/;
var SHORT_CODE_RE2 = /^\/([A-Za-z0-9]+)\/?$/;
var guestTicket = null;
var GUEST_TTL_SECONDS = 3600;
async function fetchGuestTicket(ctx) {
  const fp = JSON.stringify({
    os: "1",
    browser: "Chrome131,0,0,0",
    fonts: "undefined",
    screenInfo: "1920*1080*24",
    plugins: ""
  });
  const genRes = await proxiedFetch("https://passport.weibo.com/visitor/genvisitor2", {
    method: "POST",
    headers: {
      "User-Agent": WEIBO_UA,
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: new URLSearchParams({ cb: "gen_callback", fp }).toString(),
    redirect: "manual",
    signal: ctx.signal
  });
  const genText = await genRes.text();
  const gen = stripJsonp(genText);
  const tid = gen?.data?.tid;
  if (!tid) {
    throw new AppError("UPSTREAM_CHANGED", "微博访客票据响应结构变化", { body: genText.slice(0, 120) });
  }
  const incRes = await proxiedFetch(`https://passport.weibo.com/visitor/visitor?a=incarnate&t=${encodeURIComponent(tid)}&w=2&c=095&gc=&cb=cross_domain&from=weibo&_rand=${Math.random()}`, {
    headers: { "User-Agent": WEIBO_UA, Referer: "https://passport.weibo.com/visitor/visitor" },
    redirect: "manual",
    signal: ctx.signal
  });
  await incRes.body?.cancel();
  let sub = gen.data?.sub ?? "";
  let subp = gen.data?.subp ?? "";
  for (const line of incRes.headers.getSetCookie?.() ?? []) {
    const pair = line.split(";")[0] ?? "";
    const idx = pair.indexOf("=");
    if (idx <= 0)
      continue;
    const name = pair.slice(0, idx);
    const value = pair.slice(idx + 1);
    if (name === "SUB")
      sub = value;
    if (name === "SUBP")
      subp = value;
  }
  if (!sub || !subp) {
    throw new AppError("UPSTREAM_ERROR", "微博访客票据获取失败（未返回 SUB/SUBP）");
  }
  return { cookie: `SUB=${sub}; SUBP=${subp}`, fetchedAt: Math.floor(Date.now() / 1000) };
}
async function guestCookie(ctx) {
  const now = Math.floor(Date.now() / 1000);
  if (guestTicket && now - guestTicket.fetchedAt < GUEST_TTL_SECONDS) {
    return guestTicket.cookie;
  }
  guestTicket = await fetchGuestTicket(ctx);
  return guestTicket.cookie;
}
function stripJsonp(text) {
  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start < 0 || end <= start)
    return null;
  try {
    return JSON.parse(text.slice(start, end + 1));
  } catch {
    return null;
  }
}
async function requestShow(id, ctx) {
  const url = `${SHOW_URL}?id=${encodeURIComponent(id)}`;
  const res = await proxiedFetch(url, {
    headers: {
      "User-Agent": WEIBO_UA,
      Referer: "https://m.weibo.cn/",
      "X-Requested-With": "XMLHttpRequest"
    },
    redirect: "manual",
    signal: ctx.signal
  });
  const text = await res.text();
  if (res.status >= 300 && res.status < 400) {
    throw new AppError("CONTENT_RESTRICTED", "微博内容需要登录（302 到 passport）", {
      id,
      status: res.status
    });
  }
  if (res.status === 429 || res.status === 418 || res.status === 403) {
    throw new AppError("RISK_CONTROL", `微博风控拦截（HTTP ${res.status}）`, { id });
  }
  if (res.status !== 200) {
    throw new AppError("UPSTREAM_ERROR", `微博接口 HTTP ${res.status}`, { id, body: text.slice(0, 120) });
  }
  if (!text) {
    throw new AppError("UPSTREAM_CHANGED", "微博接口返回空 body", { id });
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new AppError("UPSTREAM_CHANGED", "微博接口返回非 JSON", { id, body: text.slice(0, 120) });
  }
}
var weiboAdapter = {
  platform: "weibo",
  description: "微博：statuses/show 匿名 JSON（bid/mid 通用），视频直链页 fid 经 tv/api/component 换 mid，图集走 pics[]",
  hosts: ["weibo.com", "weibo.cn", "weibo.com.cn", "t.cn"],
  capabilities: { http: true, browser: false, tlsImpersonation: false, kinds: ["video", "album"] },
  match(url) {
    if (!hostMatches(url.hostname, "weibo.com") && !hostMatches(url.hostname, "weibo.cn") && !hostMatches(url.hostname, "weibo.com.cn") && url.hostname !== "t.cn") {
      return null;
    }
    if (url.hostname === "t.cn") {
      const m = url.pathname.match(SHORT_CODE_RE2);
      if (!m?.[1])
        return null;
      return { platform: "weibo", id: m[1], kind: "unknown", needsResolve: true };
    }
    const fid = url.hostname === "video.weibo.com" && url.pathname === "/show" ? url.searchParams.get("fid") : url.pathname.match(/^\/tv\/show\/([^/?#]+)/)?.[1] ?? null;
    if (fid && FID_RE.test(fid)) {
      return { platform: "weibo", id: fid, kind: "video", needsResolve: false };
    }
    const [seg1, seg2] = url.pathname.split("/").filter(Boolean);
    if (seg2 && /^\d+$/.test(seg1 ?? "") && POST_ID_RE.test(seg2)) {
      return { platform: "weibo", id: seg2, kind: "unknown", needsResolve: false };
    }
    const segs = url.pathname.split("/").filter(Boolean);
    const last = segs[segs.length - 1] ?? "";
    if (segs.length >= 2 && (segs.includes("status") || segs.includes("detail")) && POST_ID_RE.test(last)) {
      return { platform: "weibo", id: last, kind: "unknown", needsResolve: false };
    }
    return null;
  },
  async resolve(url, ctx) {
    const res = await proxiedFetch(url.href, {
      method: "GET",
      redirect: "manual",
      headers: { "User-Agent": WEIBO_UA },
      signal: ctx.signal
    });
    await res.body?.cancel();
    const loc = res.headers.get("location");
    if (!loc) {
      throw new AppError("INVALID_URL", "t.cn 短链未返回跳转地址", { url: url.href, status: res.status });
    }
    return new URL(loc, url.href);
  },
  async fetch(input, _url, ctx) {
    let showId = input.id;
    let component;
    if (FID_RE.test(input.id)) {
      const cookie = await guestCookie(ctx);
      component = await requestComponent(input.id, cookie, ctx);
      showId = String(component?.data?.Component_Play_Playinfo?.mid ?? "");
      if (!showId) {
        throw new AppError("UPSTREAM_CHANGED", "微博 component 未返回 mid", { fid: input.id });
      }
    }
    const show = await requestShow(showId, ctx);
    const body = component ? { show, component } : { show };
    return {
      via: "api",
      channel: "http",
      fetchedAt: Math.floor(Date.now() / 1000),
      body
    };
  },
  parse: parseWeibo
};
async function requestComponent(fid, cookie, ctx) {
  const body = new URLSearchParams({
    data: JSON.stringify({ Component_Play_Playinfo: { oid: fid } })
  }).toString();
  const doRequest = (ck) => fetch(`${COMPONENT_URL}?page=${encodeURIComponent(`/tv/show/${fid}`)}`, {
    method: "POST",
    headers: {
      "User-Agent": WEIBO_UA,
      "Content-Type": "application/x-www-form-urlencoded",
      Referer: `https://video.weibo.com/show?fid=${fid}`,
      Cookie: ck
    },
    body,
    redirect: "manual",
    signal: ctx.signal
  });
  let res = await doRequest(cookie);
  if (res.status >= 300 && res.status < 400) {
    await res.body?.cancel();
    guestTicket = null;
    const retryCookie = await guestCookie(ctx);
    res = await doRequest(retryCookie);
  }
  const text = await res.text();
  if (res.status >= 300 && res.status < 400) {
    throw new AppError("CONTENT_RESTRICTED", "微博视频页需要登录态（component 302 到 passport）", {
      fid,
      status: res.status
    });
  }
  if (res.status !== 200) {
    throw new AppError("UPSTREAM_ERROR", `微博 component HTTP ${res.status}`, {
      fid,
      body: text.slice(0, 120)
    });
  }
  if (!text) {
    throw new AppError("UPSTREAM_CHANGED", "微博 component 返回空 body", { fid });
  }
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new AppError("UPSTREAM_CHANGED", "微博 component 返回非 JSON", { fid });
  }
  if (json.code !== "100000") {
    throw new AppError("CONTENT_NOT_FOUND", "微博视频不存在（component 错误）", { fid, code: json.code });
  }
  return json;
}

// src/platforms/twitter/parse.ts
var ORIG_SUFFIX = "?name=orig";
function isRecord(v) {
  return v !== null && typeof v === "object";
}
function str(v) {
  return typeof v === "string" ? v : "";
}
function parseTweetResultJson(text, tweetId) {
  let json;
  try {
    json = JSON.parse(text);
  } catch {
    throw new AppError("UPSTREAM_CHANGED", "syndication 返回非 JSON（疑似错误页）", { tweetId });
  }
  if (!isRecord(json)) {
    throw new AppError("UPSTREAM_CHANGED", "syndication 返回了非对象 JSON", { tweetId });
  }
  if (Object.keys(json).length === 0) {
    throw new AppError("CONTENT_NOT_FOUND", "推文不存在或 syndication 未返回数据", { tweetId });
  }
  const typename = str(json.__typename);
  if (typename === "TweetTombstone" || typename === "TweetUnavailable") {
    throw new AppError("CONTENT_NOT_FOUND", "推文已删除或不可见", { tweetId, typename });
  }
  if (typename !== "Tweet" || !isRecord(json.user)) {
    throw new AppError("UPSTREAM_CHANGED", "syndication 载荷结构变化（缺 __typename=user）", {
      tweetId,
      typename
    });
  }
  return json;
}
function bitrateName(bitrate, url) {
  const m = url.match(/\/vid\/[^/]+\/(\d+x\d+)\//);
  if (m?.[1])
    return m[1];
  if (bitrate === undefined)
    return "hls";
  return `${Math.round(bitrate / 1000)}kbps`;
}
function videoVariants(media) {
  const variants = (media.video_info?.variants ?? []).filter((v) => str(v.url) !== "");
  const mp4 = variants.filter((v) => v.content_type === "video/mp4").sort((a, b) => (b.bitrate ?? 0) - (a.bitrate ?? 0));
  const main = mp4[0];
  const cover = str(media.media_url_https);
  if (!main?.url)
    return { main: null, rest: [], cover };
  const rest = mp4.slice(1).map((v) => ({
    ratio: bitrateName(v.bitrate, str(v.url)),
    url: str(v.url),
    watermark: false
  }));
  const hls = variants.find((v) => v.content_type === "application/x-mpegURL");
  if (hls?.url) {
    rest.push({ ratio: "hls", url: hls.url, watermark: false });
  }
  return {
    main: { ratio: bitrateName(main.bitrate, main.url), url: main.url, watermark: false },
    rest,
    cover
  };
}
function mediaAssets(mediaDetails) {
  const assets = [];
  for (const media of mediaDetails) {
    const type = str(media.type);
    if (type === "photo") {
      const url = str(media.media_url_https);
      if (!url)
        continue;
      const info = media.original_info;
      assets.push({
        type: "image",
        url: `${url}${ORIG_SUFFIX}`,
        width: info?.width,
        height: info?.height,
        backups: [url]
      });
      continue;
    }
    if (type === "video" || type === "animated_gif") {
      const { main, rest, cover } = videoVariants(media);
      if (!main)
        continue;
      const asset = {
        type: "video",
        url: main.url,
        width: media.original_info?.width,
        height: media.original_info?.height,
        durationMs: media.video_info?.duration_millis,
        coverUrl: cover || undefined,
        variants: rest.length > 0 ? rest : undefined
      };
      assets.push(asset);
    }
  }
  return assets;
}
function splitTitle(text) {
  const description = text.trim();
  const title = (description.split(`
`)[0] ?? "").slice(0, 80).trim();
  return { title, description };
}
function parseTwitter(raw, input) {
  if (raw.via !== "api") {
    throw new AppError("UPSTREAM_CHANGED", `X 解析收到未知载荷类型: ${raw.via}`);
  }
  const tweet = raw.body;
  if (!tweet || !tweet.user) {
    throw new AppError("UPSTREAM_CHANGED", "X 载荷缺少推文数据");
  }
  const assets = mediaAssets(tweet.mediaDetails ?? []);
  if (assets.length === 0) {
    throw new AppError("UNSUPPORTED_CONTENT", "推文没有可下载的视频或图片", {
      tweetId: tweet.id_str ?? input.id
    });
  }
  const { title, description } = splitTitle(str(tweet.text));
  const tags = (tweet.entities?.hashtags ?? []).map((h) => str(h.text)).filter((t) => t !== "");
  return {
    platform: "twitter",
    id: tweet.id_str ?? input.id,
    kind: assets[0]?.type === "video" ? "video" : "album",
    title: title || `X post ${tweet.id_str ?? input.id}`,
    description: description || undefined,
    tags: tags.length > 0 ? tags : undefined,
    author: {
      name: str(tweet.user.name) || str(tweet.user.screen_name),
      id: str(tweet.user.id_str) || undefined,
      avatar: str(tweet.user.profile_image_url_https) || undefined
    },
    assets,
    parsedAt: raw.fetchedAt,
    via: "http"
  };
}

// src/platforms/twitter/adapter.ts
var UA4 = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
var SYNDICATION_URL = "https://cdn.syndication.twimg.com/tweet-result";
var STATUS_RE = /\/status(?:es)?\/(\d{15,20})/;
var twitterAdapter = {
  platform: "twitter",
  description: "X/Twitter：cdn.syndication.twimg.com/tweet-result 免 token 单条取，variants 含 mp4 档位",
  hosts: ["x.com", "twitter.com", "t.co"],
  capabilities: {
    http: true,
    browser: false,
    tlsImpersonation: false,
    kinds: ["video", "album"]
  },
  match(url) {
    if (!hostMatches(url.hostname, "x.com") && !hostMatches(url.hostname, "twitter.com") && url.hostname !== "t.co") {
      return null;
    }
    if (url.hostname === "t.co") {
      const code = url.pathname.replace(/\//g, "");
      if (!code)
        return null;
      return { platform: "twitter", id: code, kind: "unknown", needsResolve: true };
    }
    const m = url.href.match(STATUS_RE);
    if (!m?.[1])
      return null;
    return { platform: "twitter", id: m[1], kind: "unknown", needsResolve: false };
  },
  async resolve(url, ctx) {
    const res = await proxiedFetch(url.href, {
      method: "GET",
      redirect: "manual",
      headers: { accept: "*/*" },
      signal: ctx.signal,
      proxy: ctx.proxyUrl
    });
    await res.body?.cancel();
    const loc = res.headers.get("location");
    if (!loc) {
      throw new AppError("INVALID_URL", "t.co 短链未返回跳转地址", { url: url.href, status: res.status });
    }
    return new URL(loc, url.href);
  },
  async fetch(input, _url, ctx) {
    const qs = new URLSearchParams({ id: input.id, token: "0" });
    const res = await proxiedFetch(`${SYNDICATION_URL}?${qs}`, {
      headers: { "user-agent": UA4, accept: "*/*" },
      signal: ctx.signal,
      proxy: ctx.proxyUrl
    });
    const text = await res.text();
    if (res.status === 404) {
      throw new AppError("CONTENT_NOT_FOUND", "推文不存在或已删除", { tweetId: input.id, status: 404 });
    }
    if (res.status === 429) {
      throw new AppError("RATE_LIMITED", "syndication 限流，请稍后再试", { tweetId: input.id });
    }
    if (res.status !== 200) {
      throw new AppError("UPSTREAM_ERROR", `syndication HTTP ${res.status}`, {
        tweetId: input.id,
        body: text.slice(0, 120)
      });
    }
    const tweet = parseTweetResultJson(text, input.id);
    return {
      via: "api",
      channel: "http",
      fetchedAt: Math.floor(Date.now() / 1000),
      body: tweet
    };
  },
  parse: parseTwitter
};

// src/platforms/youtube/parse.ts
function mapPlayability(status, reason) {
  const detail = { status, reason };
  if (status === "LOGIN_REQUIRED") {
    return new AppError("RISK_CONTROL", `YouTube 风控拦截（${reason ?? status}）`, detail);
  }
  if (status === "UNPLAYABLE" || status === "AGE_CHECK_REQUIRED" || status === "CONTENT_CHECK_REQUIRED") {
    return new AppError("CONTENT_RESTRICTED", `YouTube 视频受限（${reason ?? status}）`, detail);
  }
  if (status === "ERROR" || status === "VIDEO_UNAVAILABLE") {
    return new AppError("CONTENT_NOT_FOUND", `YouTube 视频不可用（${reason ?? status}）`, detail);
  }
  return new AppError("UPSTREAM_ERROR", `YouTube 播放状态异常: ${status ?? "未知"}`, detail);
}
function isMp4(f) {
  return (f.mimeType ?? "").startsWith("video/mp4");
}
function hasAudio(f) {
  return f.audioQuality !== undefined;
}
function fmtUrl(f) {
  return f.url ?? "";
}
function pickBest(list) {
  return [...list].sort((a, b) => {
    const mp4 = Number(isMp4(b)) - Number(isMp4(a));
    if (mp4 !== 0)
      return mp4;
    return (b.bitrate ?? 0) - (a.bitrate ?? 0);
  })[0];
}
function urlExpiry3(url) {
  const m = url.match(/[?&]expire=(\d{9,11})(?:[&#]|$)/);
  const ts = m?.[1] ? Number(m[1]) : undefined;
  return ts !== undefined && ts > 1e9 && ts < 100000000000 ? ts : undefined;
}
function parseYoutube(raw, input) {
  if (raw.via !== "api") {
    throw new AppError("UPSTREAM_CHANGED", `YouTube 解析收到未知载荷类型: ${raw.via}`);
  }
  const payload = raw.body;
  if (!payload || typeof payload.client !== "string" || !payload.player) {
    throw new AppError("UPSTREAM_CHANGED", "YouTube 载荷缺少 player 响应");
  }
  const player = payload.player;
  const ps = player.playabilityStatus;
  if (ps?.status !== "OK") {
    throw mapPlayability(ps?.status, ps?.reason);
  }
  const details = player.videoDetails;
  const sd = player.streamingData;
  if (!details || !sd) {
    throw new AppError("UPSTREAM_CHANGED", "YouTube 响应缺少 videoDetails/streamingData");
  }
  const all = [...sd.formats ?? [], ...sd.adaptiveFormats ?? []].filter((f) => fmtUrl(f));
  if (all.length === 0) {
    const ciphered = [...sd.formats ?? [], ...sd.adaptiveFormats ?? []];
    if (ciphered.length > 0) {
      throw new AppError("UPSTREAM_CHANGED", "YouTube 只返回加密直链（signatureCipher），解析需更新");
    }
    throw new AppError("UPSTREAM_CHANGED", "YouTube 响应没有可用格式");
  }
  const muxed = all.filter((f) => isMp4(f) && hasAudio(f));
  const videoOnly = all.filter((f) => !hasAudio(f));
  const audioOnly = all.filter((f) => (f.mimeType ?? "").startsWith("audio/"));
  let primary;
  if (muxed.length > 0) {
    primary = pickBest(muxed);
  } else {
    primary = pickBest(videoOnly);
  }
  if (!primary || !fmtUrl(primary)) {
    throw new AppError("UPSTREAM_CHANGED", "YouTube 无可用视频流");
  }
  const bestAudio = [...audioOnly].sort((a, b) => {
    const mp4 = Number((b.mimeType ?? "").startsWith("audio/mp4")) - Number((a.mimeType ?? "").startsWith("audio/mp4"));
    if (mp4 !== 0)
      return mp4;
    return (b.bitrate ?? 0) - (a.bitrate ?? 0);
  })[0];
  const byTier = new Map;
  for (const f of [...muxed, ...videoOnly]) {
    const key = f.height ?? -1;
    if (key === (primary.height ?? -1))
      continue;
    const cur = byTier.get(key);
    if (!cur || Number(isMp4(f)) > Number(isMp4(cur)) || isMp4(f) === isMp4(cur) && (f.bitrate ?? 0) > (cur.bitrate ?? 0)) {
      byTier.set(key, f);
    }
  }
  const variants = [...byTier.values()].filter((f) => fmtUrl(f)).sort((a, b) => (b.height ?? 0) - (a.height ?? 0)).map((f) => ({
    ratio: f.height ? `${f.height}p` : `itag${f.itag ?? "?"}`,
    url: fmtUrl(f),
    width: f.width,
    height: f.height,
    watermark: false
  }));
  const durationSec = Number(details.lengthSeconds ?? 0);
  const thumbs = details.thumbnail?.thumbnails ?? [];
  const cover = [...thumbs].reverse().find((t) => typeof t.url === "string");
  const asset = {
    type: "video",
    url: fmtUrl(primary),
    width: primary.width,
    height: primary.height,
    durationMs: Number.isFinite(durationSec) && durationSec > 0 ? durationSec * 1000 : undefined,
    size: primary.contentLength ? Number(primary.contentLength) : undefined,
    coverUrl: cover?.url,
    variants
  };
  if (bestAudio && fmtUrl(bestAudio)) {
    asset.audioUrl = fmtUrl(bestAudio);
    if (asset.size !== undefined && bestAudio.contentLength) {
      asset.size += Number(bestAudio.contentLength);
    }
  }
  const expiresSec = Number(sd.expiresInSeconds ?? 0);
  const expiries = [
    urlExpiry3(asset.url),
    asset.audioUrl ? urlExpiry3(asset.audioUrl) : undefined,
    Number.isFinite(expiresSec) && expiresSec > 0 ? raw.fetchedAt + expiresSec : undefined
  ].filter((t) => t !== undefined);
  if (expiries.length > 0) {
    asset.expiresAt = Math.min(...expiries);
  }
  return {
    platform: "youtube",
    id: details.videoId ?? input.id,
    kind: "video",
    title: details.title ?? "",
    description: details.shortDescription || undefined,
    author: {
      name: details.author ?? "",
      id: details.channelId
    },
    assets: [asset],
    expiresAt: asset.expiresAt,
    parsedAt: raw.fetchedAt,
    via: "http"
  };
}

// src/platforms/youtube/adapter.ts
var PLAYER_URL = "https://www.youtube.com/youtubei/v1/player";
var CLIENT_CHAIN = ["ANDROID_VR", "IOS"];
var CLIENTS = {
  ANDROID_VR: {
    context: {
      clientName: "ANDROID_VR",
      clientVersion: "1.62.27",
      androidSdkVersion: 32,
      hl: "en",
      gl: "US"
    },
    headers: {
      "User-Agent": "com.google.android.apps.youtube.vr.oculus/1.62.27 (Linux; U; Android 12; en_US) gzip",
      "X-Youtube-Client-Name": "28",
      "X-Youtube-Client-Version": "1.62.27"
    }
  },
  IOS: {
    context: {
      clientName: "IOS",
      clientVersion: "20.32.4",
      deviceModel: "iPhone16,2",
      osVersion: "18.5.22F76",
      hl: "en",
      gl: "US"
    },
    headers: {
      "User-Agent": "com.google.ios.youtube/20.32.4 (iPhone16,2; U; CPU iOS 18_5_22 like Mac OS X;) gzip",
      "X-Youtube-Client-Name": "5",
      "X-Youtube-Client-Version": "20.32.4"
    }
  }
};
var VIDEO_ID_RE = /^[A-Za-z0-9_-]{11}$/;
function videoIdOf(value) {
  return value && VIDEO_ID_RE.test(value) ? value : null;
}
async function playerRequest(client, videoId, ctx) {
  const def = CLIENTS[client];
  const res = await proxiedFetch(PLAYER_URL, {
    method: "POST",
    proxy: ctx.proxyUrl,
    signal: ctx.signal,
    headers: { "Content-Type": "application/json", ...def.headers },
    body: JSON.stringify({
      context: { client: def.context },
      videoId,
      contentCheckOk: true,
      racyCheckOk: true
    })
  });
  const text = await res.text();
  if (res.status !== 200) {
    throw new AppError("UPSTREAM_ERROR", `YouTube player HTTP ${res.status}`, {
      client,
      body: text.slice(0, 120)
    });
  }
  try {
    return JSON.parse(text);
  } catch {
    throw new AppError("UPSTREAM_CHANGED", "YouTube player 返回非 JSON", { client });
  }
}
var youtubeAdapter = {
  platform: "youtube",
  description: "YouTube：innertube player（ANDROID_VR→IOS 回退），明文直链免解扰，直链绑 IP 走 /media 中转",
  hosts: ["youtube.com", "youtu.be", "youtube-nocookie.com"],
  capabilities: { http: true, browser: false, tlsImpersonation: false, kinds: ["video"] },
  match(url) {
    if (url.hostname === "youtu.be") {
      const id = videoIdOf(url.pathname.replace(/\//g, "").slice(0, 11));
      if (!id)
        return null;
      return { platform: "youtube", id, kind: "video", needsResolve: true };
    }
    if (!hostMatches(url.hostname, "youtube.com") && !hostMatches(url.hostname, "youtube-nocookie.com")) {
      return null;
    }
    const fromQuery = videoIdOf(url.searchParams.get("v"));
    if (url.pathname === "/watch" && fromQuery) {
      return { platform: "youtube", id: fromQuery, kind: "video", needsResolve: false };
    }
    const m = url.pathname.match(/^\/(shorts|embed|live|v)\/([A-Za-z0-9_-]{11})(?:[/?]|$)/);
    const id = videoIdOf(m?.[2]);
    if (id) {
      return { platform: "youtube", id, kind: "video", needsResolve: false };
    }
    return null;
  },
  async resolve(url, ctx) {
    const res = await proxiedFetch(url.href, {
      method: "HEAD",
      redirect: "manual",
      proxy: ctx.proxyUrl,
      signal: ctx.signal
    });
    await res.body?.cancel();
    const loc = res.headers.get("location");
    if (!loc) {
      throw new AppError("INVALID_URL", "youtu.be 短链未返回跳转地址", { url: url.href, status: res.status });
    }
    return new URL(loc, url.href);
  },
  async fetch(input, _url, ctx) {
    const attempts = [];
    for (const client of CLIENT_CHAIN) {
      let player;
      try {
        player = await playerRequest(client, input.id, ctx);
      } catch (e) {
        attempts.push({ client, reason: e instanceof Error ? e.message : String(e) });
        continue;
      }
      const ps = player.playabilityStatus ?? {};
      const streamingData = player.streamingData;
      if (ps.status === "OK" && streamingData && (streamingData.formats ?? []).length + (streamingData.adaptiveFormats ?? []).length > 0) {
        return {
          via: "api",
          channel: "http",
          fetchedAt: Math.floor(Date.now() / 1000),
          body: { client, player }
        };
      }
      attempts.push({ client, status: ps.status, reason: ps.reason });
    }
    const last = attempts[attempts.length - 1];
    const err = mapPlayability(last?.status, last?.reason);
    throw new AppError(err.code, err.message, { ...err.detail ?? {}, attempts });
  },
  parse: parseYoutube
};

// src/platforms/instagram/parse.ts
var EXECUTION_ERROR_PATH = "xdt_api__v1__media__shortcode__web_info";
function isoDurationToMs(value) {
  if (!value)
    return;
  const m = value.match(/^P(?:(\d+(?:\.\d+)?)D)?T?(?:(\d+(?:\.\d+)?)H)?(?:(\d+(?:\.\d+)?)M)?(?:(\d+(?:\.\d+)?)S)?$/);
  if (!m)
    return;
  const [d, h, min, s] = [m[1], m[2], m[3], m[4]].map((x) => x ? Number(x) : 0);
  const total = ((d ?? 0) * 24 + (h ?? 0)) * 3600 + (min ?? 0) * 60 + (s ?? 0);
  return total > 0 ? Math.round(total * 1000) : undefined;
}
function urlExpiry4(url) {
  const m = url.match(/[?&]oe=([0-9A-Fa-f]+)(?:[&#]|$)/);
  if (!m?.[1])
    return;
  const ts = Number.parseInt(m[1], 16);
  return Number.isFinite(ts) && ts > 1e9 && ts < 100000000000 ? ts : undefined;
}
function mediaItems(payload, id) {
  if (payload.errors?.some((e) => e.path?.includes(EXECUTION_ERROR_PATH))) {
    throw new AppError("CONTENT_NOT_FOUND", "Instagram 作品不存在或已删除", { shortcode: id });
  }
  const item = payload.data?.xdt_api__v1__media__shortcode__web_info?.items?.[0];
  if (!item) {
    throw new AppError("UPSTREAM_CHANGED", "Instagram 响应缺少 media items（结构可能已变化）", {
      shortcode: id
    });
  }
  return item;
}
function bestImage(media) {
  return media.image_versions2?.candidates?.find((c) => !!c.url);
}
function videoVariants2(media, excludeHeight) {
  const byTier = new Map;
  for (const v of media.video_versions ?? []) {
    if (!v.url)
      continue;
    const key = v.height ?? -1;
    if (key === excludeHeight)
      continue;
    if (!byTier.has(key))
      byTier.set(key, v);
  }
  return [...byTier.values()].sort((a, b) => (b.height ?? 0) - (a.height ?? 0)).map((v) => ({
    ratio: v.height ? `${v.height}p` : "origin",
    url: v.url,
    width: v.width,
    height: v.height,
    watermark: false
  }));
}
function videoAssetOf(media) {
  const versions = (media.video_versions ?? []).filter((v) => !!v.url);
  if (versions.length === 0) {
    throw new AppError("CONTENT_NOT_FOUND", "Instagram 作品没有可用视频流", { shortcode: media.code });
  }
  const primary = versions[0];
  const cover = bestImage(media);
  const asset = {
    type: "video",
    url: primary.url,
    width: primary.width ?? media.original_width,
    height: primary.height ?? media.original_height,
    durationMs: isoDurationToMs(media.video_dash_manifest?.match(/mediaPresentationDuration="([^"]+)"/)?.[1] ?? media.video_dash_manifest?.match(/duration="([^"]+)"/)?.[1]),
    coverUrl: cover?.url,
    variants: videoVariants2(media, primary.height)
  };
  const expiries = versions.map((v) => urlExpiry4(v.url)).filter((t) => t !== undefined);
  if (expiries.length > 0)
    asset.expiresAt = Math.min(...expiries);
  return asset;
}
function imageAssetOf(media) {
  const img = bestImage(media);
  if (!img?.url) {
    throw new AppError("CONTENT_NOT_FOUND", "Instagram 作品没有可用图片", { shortcode: media.code });
  }
  return {
    type: "image",
    url: img.url,
    width: img.width ?? media.original_width,
    height: img.height ?? media.original_height
  };
}
function splitTitle2(text) {
  const title = (text.split(`
`)[0] ?? "").slice(0, 80).trim();
  return { title, description: text };
}
function parseInstagram(raw, input) {
  if (raw.via !== "api") {
    throw new AppError("UPSTREAM_CHANGED", `Instagram 解析收到未知载荷类型: ${raw.via}`);
  }
  const payload = raw.body;
  if (!payload || typeof payload !== "object" || !("data" in payload)) {
    throw new AppError("UPSTREAM_CHANGED", "Instagram 载荷缺少 GraphQL 响应");
  }
  const media = mediaItems(payload, input.id);
  const captionText = media.caption?.text ?? "";
  const { title, description } = splitTitle2(captionText);
  const carousel = media.carousel_media ?? [];
  let assets;
  let kind;
  if (carousel.length > 0) {
    kind = "album";
    assets = carousel.map((sub) => sub.media_type === 2 ? videoAssetOf(sub) : imageAssetOf(sub));
  } else if (media.media_type === 2 || (media.video_versions?.length ?? 0) > 0) {
    kind = "video";
    assets = [videoAssetOf(media)];
  } else {
    kind = "album";
    assets = [imageAssetOf(media)];
  }
  const expiresAt = assets.map((a) => a.expiresAt).filter((t) => t !== undefined).sort((a, b) => a - b)[0];
  return {
    platform: "instagram",
    id: media.code ?? input.id,
    kind,
    title: title || `Instagram ${media.code ?? input.id}`,
    description: description || undefined,
    tags: [...captionText.matchAll(/#([\p{L}\p{N}_]+)/gu)].map((m) => m[1]).slice(0, 30),
    author: {
      name: media.user?.username ?? "",
      avatar: media.user?.profile_pic_url,
      id: media.user?.pk
    },
    assets,
    expiresAt,
    parsedAt: raw.fetchedAt,
    via: "http"
  };
}

// src/platforms/instagram/adapter.ts
var IG_HOME = "https://www.instagram.com/";
var GRAPHQL_URL = "https://www.instagram.com/graphql/query";
var IG_APP_ID = "936619743392459";
var UA5 = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
var SHORTCODE_RE = /\/(?:reel|reels|p|tv)\/([A-Za-z0-9_-]+)(?:[/?#]|$)/;
async function fetchCsrfToken(ctx) {
  let res;
  try {
    res = await proxiedFetch(IG_HOME, {
      method: "GET",
      headers: { "user-agent": UA5, accept: "text/html" },
      redirect: "manual",
      proxy: ctx.proxyUrl,
      signal: ctx.signal
    });
  } catch (e) {
    throw new AppError("UPSTREAM_ERROR", "Instagram csrftoken 请求网络失败（瞬态重试）", {
      cause: e instanceof Error ? e.message : String(e)
    });
  }
  await res.body?.cancel();
  const cookies = typeof res.headers.getSetCookie === "function" ? res.headers.getSetCookie() : [];
  const token = cookies.map((c) => c.match(/csrftoken=([^;]+)/)?.[1]).find((t) => !!t);
  if (!token) {
    throw new AppError("UPSTREAM_ERROR", "Instagram 未返回 csrftoken（可能被风控/登录墙拦截）", {
      status: res.status
    });
  }
  return token;
}
var instagramAdapter = {
  platform: "instagram",
  description: "Instagram：匿名 GraphQL doc_id 口子（免登录免 cookie），Reels/Post/IGTV 直链",
  hosts: ["instagram.com", "instagr.am"],
  capabilities: { http: true, browser: false, tlsImpersonation: false, kinds: ["video", "album"] },
  match(url) {
    if (!hostMatches(url.hostname, "instagram.com") && !hostMatches(url.hostname, "instagr.am")) {
      return null;
    }
    const m = url.pathname.match(SHORTCODE_RE);
    const code = m?.[1];
    if (!code)
      return null;
    const kind = m[0].startsWith("/p/") ? "unknown" : "video";
    return { platform: "instagram", id: code, kind, needsResolve: false };
  },
  async fetch(input, _url, ctx) {
    if (!ctx.instagramDocId) {
      throw new AppError("CONFIG_MISSING", "Instagram 通道需要配置 IG_GRAPHQL_DOC_ID（匿名 GraphQL doc_id，会随 IG 发版轮换，跟踪 instaloader/gallery-dl 更新）", { env: "IG_GRAPHQL_DOC_ID" });
    }
    const token = await fetchCsrfToken(ctx);
    let res;
    try {
      res = await proxiedFetch(GRAPHQL_URL, {
        method: "POST",
        headers: {
          "user-agent": UA5,
          "content-type": "application/x-www-form-urlencoded",
          "x-ig-app-id": IG_APP_ID,
          "x-csrftoken": token,
          cookie: `csrftoken=${token}`
        },
        body: new URLSearchParams({
          doc_id: ctx.instagramDocId,
          variables: JSON.stringify({
            shortcode: input.id,
            __relay_internal__pv__PolarisAIGMMediaWebLabelEnabledrelayprovider: false
          })
        }),
        proxy: ctx.proxyUrl,
        signal: ctx.signal
      });
    } catch (e) {
      throw new AppError("UPSTREAM_ERROR", "Instagram GraphQL 网络失败（瞬态重试）", {
        shortcode: input.id,
        cause: e instanceof Error ? e.message : String(e)
      });
    }
    const text = await res.text();
    if (res.status === 429) {
      throw new AppError("RATE_LIMITED", "Instagram GraphQL 限流，请稍后再试", { shortcode: input.id });
    }
    if (res.status !== 200) {
      throw new AppError("UPSTREAM_ERROR", `Instagram GraphQL HTTP ${res.status}`, {
        shortcode: input.id,
        body: text.slice(0, 120)
      });
    }
    let body;
    try {
      body = JSON.parse(text);
    } catch {
      throw new AppError("UPSTREAM_CHANGED", "Instagram GraphQL 返回非 JSON（可能落到登录页 HTML）", {
        shortcode: input.id
      });
    }
    return { via: "api", channel: "http", fetchedAt: Math.floor(Date.now() / 1000), body };
  },
  parse: parseInstagram
};

// src/platforms/tiktok/parse.ts
function urlExpiry5(url, nowSec) {
  const seg = url.split("?")[0]?.split("/").find((s) => /^[0-9a-f]{8,11}$/.test(s));
  const ts = seg ? Number.parseInt(seg, 16) : NaN;
  return Number.isFinite(ts) && ts > nowSec && ts < nowSec + 30 * 86400 ? ts : undefined;
}
function absUrl2(u) {
  return u ? u.startsWith("/") ? `https://www.tikwm.com${u}` : u : u;
}
function mapTikwmFailure(code, msg, videoId) {
  const detail = { videoId, code, msg };
  const m = (msg ?? "").toLowerCase();
  if (m.includes("frequent") || m.includes("rate") || m.includes("limit") || m.includes("too many")) {
    return new AppError("RATE_LIMITED", `tikwm 限频（${msg ?? code}）`, detail);
  }
  if (m.includes("parsing") || m.includes("invalid") || m.includes("check url")) {
    return new AppError("CONTENT_NOT_FOUND", `TikTok 作品不存在或链接无法识别（${msg ?? code}）`, detail);
  }
  return new AppError("UPSTREAM_ERROR", `tikwm 返回失败（${msg ?? code}）`, detail);
}
function str2(v) {
  return typeof v === "string" ? v : "";
}
function authorOf3(data) {
  return {
    name: str2(data.author?.nickname) || str2(data.author?.unique_id),
    id: str2(data.author?.id) || undefined,
    avatar: str2(data.author?.avatar) || undefined
  };
}
function splitTitle3(title) {
  const tags = [...title.matchAll(/#([^\s#]+)/g)].map((m) => m[1] ?? "").filter((t) => t !== "");
  return { title: title.trim().slice(0, 80) || "TikTok 视频", tags };
}
function videoAsset3(data, nowSec) {
  const play = absUrl2(str2(data.play));
  const hdplay = absUrl2(str2(data.hdplay));
  const variants = [];
  if (hdplay) {
    variants.push({ ratio: "hd", url: hdplay, size: data.hd_size, watermark: false });
  }
  if (str2(data.wmplay)) {
    variants.push({ ratio: "sd", url: absUrl2(str2(data.wmplay)), size: data.wm_size, watermark: true });
  }
  const expiries = [urlExpiry5(play, nowSec), ...variants.map((v) => urlExpiry5(v.url, nowSec))].filter((t) => t !== undefined);
  const asset = {
    type: "video",
    url: play,
    durationMs: data.duration && data.duration > 0 ? data.duration * 1000 : undefined,
    size: data.size,
    coverUrl: absUrl2(str2(data.origin_cover)) || absUrl2(str2(data.cover)) || undefined,
    variants: variants.length > 0 ? variants : undefined
  };
  if (expiries.length > 0) {
    asset.expiresAt = Math.min(...expiries);
  }
  const music = str2(data.music);
  if (music) {
    asset.audioUrl = absUrl2(music);
  }
  return asset;
}
function albumAssets(data) {
  const images = (data.images ?? []).filter((u) => typeof u === "string" && u !== "");
  return images.map((url) => ({
    type: "image",
    url: absUrl2(url)
  }));
}
function parseTiktok(raw, input) {
  if (raw.via !== "api") {
    throw new AppError("UPSTREAM_CHANGED", `TikTok 解析收到未知载荷类型: ${raw.via}`);
  }
  const payload = raw.body;
  if (!payload || typeof payload !== "object") {
    throw new AppError("UPSTREAM_CHANGED", "TikTok 载荷缺少 tikwm 响应");
  }
  if (payload.code !== 0) {
    throw mapTikwmFailure(payload.code, payload.msg, input.id);
  }
  const data = payload.data;
  if (!data) {
    throw new AppError("UPSTREAM_CHANGED", "tikwm 响应缺少 data", { videoId: input.id });
  }
  const id = str2(data.id) || input.id;
  const hasImages = (data.images ?? []).length > 0;
  const play = str2(data.play);
  if (!play && !hasImages) {
    throw new AppError("UPSTREAM_CHANGED", "tikwm 响应没有可下载资源（既无 play 也无 images）", {
      videoId: id
    });
  }
  const isAlbum = hasImages && (!play || play === str2(data.music));
  const assets = isAlbum ? albumAssets(data) : [videoAsset3(data, raw.fetchedAt)];
  if (assets.length === 0) {
    throw new AppError("UPSTREAM_CHANGED", "tikwm 响应没有可下载资源（既无 play 也无 images）", {
      videoId: id
    });
  }
  const { title, tags } = splitTitle3(str2(data.title));
  const expiresAt = assets.map((a) => a.expiresAt).filter((t) => t !== undefined);
  return {
    platform: "tiktok",
    id,
    kind: assets[0].type === "video" ? "video" : "album",
    title,
    tags: tags.length > 0 ? tags : undefined,
    author: authorOf3(data),
    assets,
    expiresAt: expiresAt.length > 0 ? Math.min(...expiresAt) : undefined,
    parsedAt: raw.fetchedAt,
    via: "http"
  };
}

// src/platforms/tiktok/adapter.ts
var TIKWM_API = "https://www.tikwm.com/api/";
var VIDEO_RE = /\/@(?:[^/]*)\/(video|photo)\/(\d{15,25})/;
var SHORT_HOSTS2 = ["vm.tiktok.com", "vt.tiktok.com"];
var tiktokAdapter = {
  platform: "tiktok",
  description: "TikTok：tikwm 公开接口（无水印直链/图集/音乐），出站走代理，直链不绑 IP",
  hosts: ["tiktok.com", "vm.tiktok.com", "vt.tiktok.com"],
  capabilities: { http: true, browser: false, tlsImpersonation: false, kinds: ["video", "album"] },
  match(url) {
    const isShort = SHORT_HOSTS2.includes(url.hostname);
    if (!isShort && !hostMatches(url.hostname, "tiktok.com")) {
      return null;
    }
    if (isShort) {
      const code = url.pathname.replace(/\//g, "");
      if (!code)
        return null;
      return { platform: "tiktok", id: code, kind: "unknown", needsResolve: true };
    }
    const m = url.href.match(VIDEO_RE);
    if (!m?.[2])
      return null;
    return { platform: "tiktok", id: m[2], kind: "unknown", needsResolve: false };
  },
  async resolve(url, ctx) {
    const res = await proxiedFetch(url.href, {
      method: "GET",
      redirect: "manual",
      headers: { accept: "*/*" },
      signal: ctx.signal,
      proxy: ctx.proxyUrl
    });
    await res.body?.cancel();
    const loc = res.headers.get("location");
    if (!loc) {
      throw new AppError("INVALID_URL", "TikTok 短链未返回跳转地址", { url: url.href, status: res.status });
    }
    return new URL(loc, url.href);
  },
  async fetch(input, url, ctx) {
    const qs = new URLSearchParams({ url: url.href, hd: "1" });
    const res = await proxiedFetch(`${TIKWM_API}?${qs}`, {
      method: "GET",
      headers: { accept: "application/json" },
      signal: ctx.signal,
      proxy: ctx.proxyUrl
    });
    const text = await res.text();
    if (res.status === 429) {
      throw new AppError("RATE_LIMITED", "tikwm 限流，请稍后再试", { videoId: input.id });
    }
    if (res.status !== 200) {
      throw new AppError("UPSTREAM_ERROR", `tikwm HTTP ${res.status}`, {
        videoId: input.id,
        body: text.slice(0, 120)
      });
    }
    let json;
    try {
      json = JSON.parse(text);
    } catch {
      throw new AppError("UPSTREAM_ERROR", "tikwm 返回非 JSON（疑似限频或风控）", {
        videoId: input.id,
        body: text.slice(0, 120)
      });
    }
    return {
      via: "api",
      channel: "http",
      fetchedAt: Math.floor(Date.now() / 1000),
      body: json
    };
  },
  parse: parseTiktok
};

// src/infra/logger.ts
import pino from "pino";
var REDACTED = "REDACTED";
var INLINE_URL = /https?:\/\/[^\s"'<>）」』\]]+/g;
var SECRET_PARAM_RE = /token|secret|sig|key|pass|auth|cookie/i;
var LEVELS = ["fatal", "error", "warn", "info", "debug", "trace"];
function resolveLevel() {
  const v = process.env.LOG_LEVEL;
  return v && LEVELS.includes(v) ? v : "info";
}
function redactUrl(value) {
  const q = value.indexOf("?");
  if (q === -1)
    return value;
  try {
    const u = new URL(value);
    for (const [k] of u.searchParams)
      u.searchParams.set(k, REDACTED);
    return u.toString();
  } catch {
    let end = value.length;
    for (let i = q + 1;i < value.length; i++) {
      const c = value[i];
      if (c === " " || c === '"' || c === "'") {
        end = i;
        break;
      }
    }
    return `${value.slice(0, q + 1)}${REDACTED}${value.slice(end)}`;
  }
}
function redactRequestUrl(rawUrl) {
  try {
    const u = new URL(rawUrl);
    for (const [k, v] of u.searchParams) {
      if (/^https?:\/\//.test(v)) {
        u.searchParams.set(k, redactUrl(v));
      } else if (SECRET_PARAM_RE.test(k)) {
        u.searchParams.set(k, REDACTED);
      }
    }
    const q = u.searchParams.toString();
    return `${u.pathname}${q ? `?${q}` : ""}`;
  } catch {
    return redactUrl(rawUrl);
  }
}
function redactText(text) {
  return text.replace(INLINE_URL, (u) => redactUrl(u));
}
function redactValue(value, depth) {
  if (depth === 0)
    return value;
  if (typeof value === "string")
    return redactText(value);
  if (value instanceof Error) {
    const plain = { name: value.name, message: redactText(value.message) };
    if (value.stack)
      plain.stack = redactText(value.stack);
    for (const [k, v] of Object.entries(value))
      plain[k] = redactValue(v, depth - 1);
    return plain;
  }
  if (Array.isArray(value))
    return value.map((v) => redactValue(v, depth - 1));
  if (value && typeof value === "object") {
    const out = {};
    for (const [k, v] of Object.entries(value))
      out[k] = redactValue(v, depth - 1);
    return out;
  }
  return value;
}
function redactLog(obj) {
  return redactValue(obj, 4);
}
function createLogger(destination) {
  return pino({ level: resolveLevel(), base: undefined, formatters: { log: redactLog } }, destination);
}
var logger = createLogger();
var requestMeta = new WeakMap;
function reqIdOf(request) {
  let meta = requestMeta.get(request);
  if (!meta) {
    meta = {
      id: request.headers.get("x-request-id")?.trim() || crypto.randomUUID(),
      startedAt: performance.now()
    };
    requestMeta.set(request, meta);
  }
  return meta.id;
}
function reqStartedAt(request) {
  return requestMeta.get(request)?.startedAt ?? performance.now();
}
function requestLogger(request) {
  return logger.child({ reqId: reqIdOf(request) });
}
function asFetchLogger(log) {
  return {
    info: (msg, data) => log.info(data ?? {}, msg),
    warn: (msg, data) => log.warn(data ?? {}, msg),
    error: (msg, data) => log.error(data ?? {}, msg)
  };
}

// node_modules/lru-cache/dist/esm/node/index.min.js
import { tracingChannel as G, channel as P } from "node:diagnostics_channel";
var S = P("lru-cache:metrics");
var W = G("lru-cache");
var L = typeof performance == "object" && performance && typeof performance.now == "function" ? performance : Date;
var R = () => S.hasSubscribers || W.hasSubscribers;
var U = new Set;
var M = typeof process == "object" && process ? process : {};
var k = (d, e, t, i) => {
  typeof M.emitWarning == "function" ? M.emitWarning(d, e, t, i) : console.error(`[${t}] ${e}: ${d}`);
};
var H2 = (d) => !U.has(d);
var T = (d) => !!d && d === Math.floor(d) && d > 0 && isFinite(d);
var j2 = (d) => T(d) ? d <= Math.pow(2, 8) ? Uint8Array : d <= Math.pow(2, 16) ? Uint16Array : d <= Math.pow(2, 32) ? Uint32Array : d <= Number.MAX_SAFE_INTEGER ? O : null : null;
var O = class extends Array {
  constructor(e) {
    super(e), this.fill(0);
  }
};
var x2 = class d {
  heap;
  length;
  static #o = false;
  static create(e) {
    let t = j2(e);
    if (!t)
      return [];
    d.#o = true;
    let i = new d(e, t);
    return d.#o = false, i;
  }
  constructor(e, t) {
    if (!d.#o)
      throw new TypeError("instantiate Stack using Stack.create(n)");
    this.heap = new t(e), this.length = 0;
  }
  push(e) {
    this.heap[this.length++] = e;
  }
  pop() {
    return this.heap[--this.length];
  }
};
var I = class d {
  #o;
  #c;
  #S;
  #O;
  #w;
  #M;
  #I;
  #m;
  get perf() {
    return this.#m;
  }
  ttl;
  ttlResolution;
  ttlAutopurge;
  updateAgeOnGet;
  updateAgeOnHas;
  allowStale;
  noDisposeOnSet;
  noUpdateTTL;
  maxEntrySize;
  sizeCalculation;
  noDeleteOnFetchRejection;
  noDeleteOnStaleGet;
  allowStaleOnFetchAbort;
  allowStaleOnFetchRejection;
  ignoreFetchAbort;
  backgroundFetchSize;
  #n;
  #b;
  #s;
  #i;
  #t;
  #l;
  #u;
  #a;
  #h;
  #y;
  #r;
  #_;
  #F;
  #d;
  #g;
  #T;
  #U;
  #f;
  #D;
  static unsafeExposeInternals(e) {
    return { starts: e.#F, ttls: e.#d, autopurgeTimers: e.#g, sizes: e.#_, keyMap: e.#s, keyList: e.#i, valList: e.#t, next: e.#l, prev: e.#u, get head() {
      return e.#a;
    }, get tail() {
      return e.#h;
    }, free: e.#y, isBackgroundFetch: (t) => e.#e(t), backgroundFetch: (t, i, s, n) => e.#P(t, i, s, n), moveToTail: (t) => e.#L(t), indexes: (t) => e.#A(t), rindexes: (t) => e.#z(t), isStale: (t) => e.#p(t) };
  }
  get max() {
    return this.#o;
  }
  get maxSize() {
    return this.#c;
  }
  get calculatedSize() {
    return this.#b;
  }
  get size() {
    return this.#n;
  }
  get fetchMethod() {
    return this.#M;
  }
  get memoMethod() {
    return this.#I;
  }
  get dispose() {
    return this.#S;
  }
  get onInsert() {
    return this.#O;
  }
  get disposeAfter() {
    return this.#w;
  }
  constructor(e) {
    let { max: t = 0, ttl: i, ttlResolution: s = 1, ttlAutopurge: n, updateAgeOnGet: o, updateAgeOnHas: l, allowStale: h, dispose: r, onInsert: c, disposeAfter: m, noDisposeOnSet: _, noUpdateTTL: u, maxSize: g = 0, maxEntrySize: f = 0, sizeCalculation: y, fetchMethod: a, memoMethod: w, noDeleteOnFetchRejection: F, noDeleteOnStaleGet: b, allowStaleOnFetchRejection: p, allowStaleOnFetchAbort: A, ignoreFetchAbort: z, backgroundFetchSize: C = 1, perf: E } = e;
    if (this.backgroundFetchSize = C, E !== undefined && typeof E?.now != "function")
      throw new TypeError("perf option must have a now() method if specified");
    if (this.#m = E ?? L, t !== 0 && !T(t))
      throw new TypeError("max option must be a nonnegative integer");
    let v = t ? j2(t) : Array;
    if (!v)
      throw new Error("invalid max value: " + t);
    if (this.#o = t, this.#c = g, this.maxEntrySize = f || this.#c, this.sizeCalculation = y, this.sizeCalculation) {
      if (!this.#c && !this.maxEntrySize)
        throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
      if (typeof this.sizeCalculation != "function")
        throw new TypeError("sizeCalculation set to non-function");
    }
    if (w !== undefined && typeof w != "function")
      throw new TypeError("memoMethod must be a function if defined");
    if (this.#I = w, a !== undefined && typeof a != "function")
      throw new TypeError("fetchMethod must be a function if specified");
    if (this.#M = a, this.#U = !!a, this.#s = new Map, this.#i = Array.from({ length: t }).fill(undefined), this.#t = Array.from({ length: t }).fill(undefined), this.#l = new v(t), this.#u = new v(t), this.#a = 0, this.#h = 0, this.#y = x2.create(t), this.#n = 0, this.#b = 0, typeof r == "function" && (this.#S = r), typeof c == "function" && (this.#O = c), typeof m == "function" ? (this.#w = m, this.#r = []) : (this.#w = undefined, this.#r = undefined), this.#T = !!this.#S, this.#D = !!this.#O, this.#f = !!this.#w, this.noDisposeOnSet = !!_, this.noUpdateTTL = !!u, this.noDeleteOnFetchRejection = !!F, this.allowStaleOnFetchRejection = !!p, this.allowStaleOnFetchAbort = !!A, this.ignoreFetchAbort = !!z, this.maxEntrySize !== 0) {
      if (this.#c !== 0 && !T(this.#c))
        throw new TypeError("maxSize must be a positive integer if specified");
      if (!T(this.maxEntrySize))
        throw new TypeError("maxEntrySize must be a positive integer if specified");
      this.#X();
    }
    if (this.allowStale = !!h, this.noDeleteOnStaleGet = !!b, this.updateAgeOnGet = !!o, this.updateAgeOnHas = !!l, this.ttlResolution = T(s) || s === 0 ? s : 1, this.ttlAutopurge = !!n, this.ttl = i || 0, this.ttl) {
      if (!T(this.ttl))
        throw new TypeError("ttl must be a positive integer if specified");
      this.#k();
    }
    if (this.#o === 0 && this.ttl === 0 && this.#c === 0)
      throw new TypeError("At least one of max, maxSize, or ttl is required");
    if (!this.ttlAutopurge && !this.#o && !this.#c) {
      let D = "LRU_CACHE_UNBOUNDED";
      H2(D) && (U.add(D), k("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", D, d));
    }
  }
  getRemainingTTL(e) {
    return this.#s.has(e) ? 1 / 0 : 0;
  }
  #k() {
    let e = new O(this.#o), t = new O(this.#o);
    this.#d = e, this.#F = t;
    let i = this.ttlAutopurge ? Array.from({ length: this.#o }) : undefined;
    this.#g = i, this.#H = (h, r, c = this.#m.now()) => {
      t[h] = r !== 0 ? c : 0, e[h] = r, s(h, r);
    }, this.#R = (h) => {
      t[h] = e[h] !== 0 ? this.#m.now() : 0, s(h, e[h]);
    };
    let s = this.ttlAutopurge ? (h, r) => {
      if (i?.[h] && (clearTimeout(i[h]), i[h] = undefined), r && r !== 0 && i) {
        let c = setTimeout(() => {
          this.#p(h) ? (this.#E(this.#i[h], "expire"), i[h] = undefined) : s(h, l(h));
        }, r + 1);
        c.unref && c.unref(), i[h] = c;
      }
    } : () => {};
    this.#v = (h, r) => {
      if (e[r]) {
        let c = e[r], m = t[r];
        if (!c || !m)
          return;
        h.ttl = c, h.start = m, h.now = n || o();
        let _ = h.now - m;
        h.remainingTTL = c - _;
      }
    };
    let n = 0, o = () => {
      let h = this.#m.now();
      if (this.ttlResolution > 0) {
        n = h;
        let r = setTimeout(() => n = 0, this.ttlResolution);
        r.unref && r.unref();
      }
      return h;
    };
    this.getRemainingTTL = (h) => {
      let r = this.#s.get(h);
      return r === undefined ? 0 : l(r);
    };
    let l = (h) => {
      let r = e[h], c = t[h];
      if (!r || !c)
        return 1 / 0;
      let m = (n || o()) - c;
      return r - m;
    };
    this.#p = (h) => {
      let r = t[h], c = e[h];
      return !!c && !!r && (n || o()) - r > c;
    };
  }
  #R = () => {};
  #v = () => {};
  #H = () => {};
  #p = () => false;
  #X() {
    let e = new O(this.#o);
    this.#b = 0, this.#_ = e, this.#x = (t) => {
      this.#b -= e[t], e[t] = 0;
    }, this.#N = (t, i, s, n) => {
      if (!T(s)) {
        if (this.#e(i))
          return this.backgroundFetchSize;
        if (n) {
          if (typeof n != "function")
            throw new TypeError("sizeCalculation must be a function");
          if (s = n(i, t), !T(s))
            throw new TypeError("sizeCalculation return invalid (expect positive integer)");
        } else
          throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
      }
      return s;
    }, this.#j = (t, i, s) => {
      if (e[t] = i, this.#c) {
        let n = this.#c - e[t];
        for (;this.#b > n; )
          this.#G(true);
      }
      this.#b += e[t], s && (s.entrySize = i, s.totalCalculatedSize = this.#b);
    };
  }
  #x = (e) => {};
  #j = (e, t, i) => {};
  #N = (e, t, i, s) => {
    if (i || s)
      throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
    return 0;
  };
  *#A({ allowStale: e = this.allowStale } = {}) {
    if (this.#n)
      for (let t = this.#h;this.#V(t) && ((e || !this.#p(t)) && (yield t), t !== this.#a); )
        t = this.#u[t];
  }
  *#z({ allowStale: e = this.allowStale } = {}) {
    if (this.#n)
      for (let t = this.#a;this.#V(t) && ((e || !this.#p(t)) && (yield t), t !== this.#h); )
        t = this.#l[t];
  }
  #V(e) {
    return e !== undefined && this.#s.get(this.#i[e]) === e;
  }
  *entries() {
    for (let e of this.#A())
      this.#t[e] !== undefined && this.#i[e] !== undefined && !this.#e(this.#t[e]) && (yield [this.#i[e], this.#t[e]]);
  }
  *rentries() {
    for (let e of this.#z())
      this.#t[e] !== undefined && this.#i[e] !== undefined && !this.#e(this.#t[e]) && (yield [this.#i[e], this.#t[e]]);
  }
  *keys() {
    for (let e of this.#A()) {
      let t = this.#i[e];
      t !== undefined && !this.#e(this.#t[e]) && (yield t);
    }
  }
  *rkeys() {
    for (let e of this.#z()) {
      let t = this.#i[e];
      t !== undefined && !this.#e(this.#t[e]) && (yield t);
    }
  }
  *values() {
    for (let e of this.#A())
      this.#t[e] !== undefined && !this.#e(this.#t[e]) && (yield this.#t[e]);
  }
  *rvalues() {
    for (let e of this.#z())
      this.#t[e] !== undefined && !this.#e(this.#t[e]) && (yield this.#t[e]);
  }
  [Symbol.iterator]() {
    return this.entries();
  }
  [Symbol.toStringTag] = "LRUCache";
  find(e, t = {}) {
    for (let i of this.#A()) {
      let s = this.#t[i], n = this.#e(s) ? s.__staleWhileFetching : s;
      if (n !== undefined && e(n, this.#i[i], this))
        return this.#C(this.#i[i], t);
    }
  }
  forEach(e, t = this) {
    for (let i of this.#A()) {
      let s = this.#t[i], n = this.#e(s) ? s.__staleWhileFetching : s;
      n !== undefined && e.call(t, n, this.#i[i], this);
    }
  }
  rforEach(e, t = this) {
    for (let i of this.#z()) {
      let s = this.#t[i], n = this.#e(s) ? s.__staleWhileFetching : s;
      n !== undefined && e.call(t, n, this.#i[i], this);
    }
  }
  purgeStale() {
    let e = false;
    for (let t of this.#z({ allowStale: true }))
      this.#p(t) && (this.#E(this.#i[t], "expire"), e = true);
    return e;
  }
  info(e) {
    let t = this.#s.get(e);
    if (t === undefined)
      return;
    let i = this.#t[t], s = this.#e(i) ? i.__staleWhileFetching : i;
    if (s === undefined)
      return;
    let n = { value: s };
    if (this.#d && this.#F) {
      let o = this.#d[t], l = this.#F[t];
      if (o && l) {
        let h = o - (this.#m.now() - l);
        n.ttl = h, n.start = Date.now();
      }
    }
    return this.#_ && (n.size = this.#_[t]), n;
  }
  dump() {
    let e = [];
    for (let t of this.#A({ allowStale: true })) {
      let i = this.#i[t], s = this.#t[t], n = this.#e(s) ? s.__staleWhileFetching : s;
      if (n === undefined || i === undefined)
        continue;
      let o = { value: n };
      if (this.#d && this.#F) {
        o.ttl = this.#d[t];
        let l = this.#m.now() - this.#F[t];
        o.start = Math.floor(Date.now() - l);
      }
      this.#_ && (o.size = this.#_[t]), e.unshift([i, o]);
    }
    return e;
  }
  load(e) {
    this.clear();
    for (let [t, i] of e) {
      if (i.start) {
        let s = Date.now() - i.start;
        i.start = this.#m.now() - s;
      }
      this.#W(t, i.value, i);
    }
  }
  set(e, t, i = {}) {
    let { status: s = S.hasSubscribers ? {} : undefined } = i;
    i.status = s, s && (s.op = "set", s.key = e, t !== undefined && (s.value = t), s.cache = this);
    let n = this.#W(e, t, i);
    return s && S.hasSubscribers && S.publish(s), n;
  }
  #W(e, t, i, s) {
    let { ttl: n = this.ttl, start: o, noDisposeOnSet: l = this.noDisposeOnSet, sizeCalculation: h = this.sizeCalculation, status: r } = i, c = this.#e(t);
    if (t === undefined)
      return r && (r.set = "deleted"), this.delete(e), this;
    let { noUpdateTTL: m = this.noUpdateTTL } = i;
    r && !c && (r.value = t);
    let _ = this.#N(e, t, i.size || 0, h, r);
    if (this.maxEntrySize && _ > this.maxEntrySize)
      return this.#E(e, "set"), r && (r.set = "miss", r.maxEntrySizeExceeded = true), this;
    let u = this.#n === 0 ? undefined : this.#s.get(e);
    if (u === undefined)
      u = this.#n === 0 ? this.#h : this.#y.length !== 0 ? this.#y.pop() : this.#n === this.#o ? this.#G(false) : this.#n, this.#i[u] = e, this.#t[u] = t, this.#s.set(e, u), this.#l[this.#h] = u, this.#u[u] = this.#h, this.#h = u, this.#n++, this.#j(u, _, r), r && (r.set = "add"), m = false, this.#D && !c && this.#O?.(t, e, "add");
    else {
      this.#L(u);
      let g = this.#t[u];
      if (t !== g) {
        if (!l)
          if (this.#e(g)) {
            g !== s && g.__abortController.abort(new Error("replaced"));
            let { __staleWhileFetching: f } = g;
            f !== undefined && f !== t && (this.#T && this.#S?.(f, e, "set"), this.#f && this.#r?.push([f, e, "set"]));
          } else
            this.#T && this.#S?.(g, e, "set"), this.#f && this.#r?.push([g, e, "set"]);
        if (this.#x(u), this.#j(u, _, r), this.#t[u] = t, !c) {
          let f = g && this.#e(g) ? g.__staleWhileFetching : g, y = f === undefined ? "add" : t !== f ? "replace" : "update";
          r && (r.set = y, f !== undefined && (r.oldValue = f)), this.#D && this.onInsert?.(t, e, y);
        }
      } else
        c || (r && (r.set = "update"), this.#D && this.onInsert?.(t, e, "update"));
    }
    if (n !== 0 && !this.#d && this.#k(), this.#d && (m || this.#H(u, n, o), r && this.#v(r, u)), !l && this.#f && this.#r) {
      let g = this.#r, f;
      for (;f = g?.shift(); )
        this.#w?.(...f);
    }
    return this;
  }
  pop() {
    try {
      for (;this.#n; ) {
        let e = this.#t[this.#a];
        if (this.#G(true), this.#e(e)) {
          if (e.__staleWhileFetching)
            return e.__staleWhileFetching;
        } else if (e !== undefined)
          return e;
      }
    } finally {
      if (this.#f && this.#r) {
        let e = this.#r, t;
        for (;t = e?.shift(); )
          this.#w?.(...t);
      }
    }
  }
  #G(e) {
    let t = this.#a, i = this.#i[t], s = this.#t[t], n = this.#e(s);
    n && s.__abortController.abort(new Error("evicted"));
    let o = n ? s.__staleWhileFetching : s;
    return (this.#T || this.#f) && o !== undefined && (this.#T && this.#S?.(o, i, "evict"), this.#f && this.#r?.push([o, i, "evict"])), this.#x(t), this.#g?.[t] && (clearTimeout(this.#g[t]), this.#g[t] = undefined), e && (this.#i[t] = undefined, this.#t[t] = undefined, this.#y.push(t)), this.#n === 1 ? (this.#a = this.#h = 0, this.#y.length = 0) : this.#a = this.#l[t], this.#s.delete(i), this.#n--, t;
  }
  has(e, t = {}) {
    let { status: i = S.hasSubscribers ? {} : undefined } = t;
    t.status = i, i && (i.op = "has", i.key = e, i.cache = this);
    let s = this.#Y(e, t);
    return S.hasSubscribers && S.publish(i), s;
  }
  #Y(e, t = {}) {
    let { updateAgeOnHas: i = this.updateAgeOnHas, status: s } = t, n = this.#s.get(e);
    if (n !== undefined) {
      let o = this.#t[n];
      if (this.#e(o) && o.__staleWhileFetching === undefined)
        return false;
      if (this.#p(n))
        s && (s.has = "stale", this.#v(s, n));
      else
        return i && this.#R(n), s && (s.has = "hit", this.#v(s, n)), true;
    } else
      s && (s.has = "miss");
    return false;
  }
  peek(e, t = {}) {
    let { status: i = R() ? {} : undefined } = t;
    i && (i.op = "peek", i.key = e, i.cache = this), t.status = i;
    let s = this.#J(e, t);
    return S.hasSubscribers && S.publish(i), s;
  }
  #J(e, t) {
    let { status: i, allowStale: s = this.allowStale } = t, n = this.#s.get(e);
    if (n === undefined || !s && this.#p(n)) {
      i && (i.peek = n === undefined ? "miss" : "stale");
      return;
    }
    let o = this.#t[n], l = this.#e(o) ? o.__staleWhileFetching : o;
    return i && (l !== undefined ? (i.peek = "hit", i.value = l) : i.peek = "miss"), l;
  }
  #P(e, t, i, s) {
    let n = t === undefined ? undefined : this.#t[t];
    if (this.#e(n))
      return n;
    let o = new AbortController, { signal: l } = i;
    l?.addEventListener("abort", () => o.abort(l.reason), { signal: o.signal });
    let h = { signal: o.signal, options: i, context: s }, r = (f, y = false) => {
      let { aborted: a } = o.signal, w = i.ignoreFetchAbort && f !== undefined, F = i.ignoreFetchAbort || !!(i.allowStaleOnFetchAbort && f !== undefined);
      if (i.status && (a && !y ? (i.status.fetchAborted = true, i.status.fetchError = o.signal.reason, w && (i.status.fetchAbortIgnored = true)) : i.status.fetchResolved = true), a && !w && !y)
        return m(o.signal.reason, F);
      let b = u, p = this.#t[t];
      return (p === u || p === undefined && w && y) && (f === undefined ? b.__staleWhileFetching !== undefined ? this.#t[t] = b.__staleWhileFetching : this.#E(e, "fetch") : (i.status && (i.status.fetchUpdated = true), this.#W(e, f, h.options, b))), f;
    }, c = (f) => (i.status && (i.status.fetchRejected = true, i.status.fetchError = f), m(f, false)), m = (f, y) => {
      let { aborted: a } = o.signal, w = a && i.allowStaleOnFetchAbort, F = w || i.allowStaleOnFetchRejection, b = F || i.noDeleteOnFetchRejection, p = u;
      if (this.#t[t] === u && (!b || !y && p.__staleWhileFetching === undefined ? this.#E(e, "fetch") : w || (this.#t[t] = p.__staleWhileFetching)), F)
        return i.status && p.__staleWhileFetching !== undefined && (i.status.returnedStale = true), p.__staleWhileFetching;
      if (p.__returned === p)
        throw f;
    }, _ = (f, y) => {
      let a = this.#M?.(e, n, h);
      o.signal.addEventListener("abort", () => {
        (!i.ignoreFetchAbort || i.allowStaleOnFetchAbort) && (f(undefined), i.allowStaleOnFetchAbort && (f = (w) => r(w, true)));
      }), a && a instanceof Promise ? a.then((w) => f(w === undefined ? undefined : w), y) : a !== undefined && f(a);
    };
    i.status && (i.status.fetchDispatched = true);
    let u = new Promise(_).then(r, c), g = Object.assign(u, { __abortController: o, __staleWhileFetching: n, __returned: undefined });
    return t === undefined ? (this.#W(e, g, { ...h.options, status: undefined }), t = this.#s.get(e)) : this.#t[t] = g, g;
  }
  #e(e) {
    if (!this.#U)
      return false;
    let t = e;
    return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof AbortController;
  }
  fetch(e, t = {}) {
    let i = W.hasSubscribers, { status: s = R() ? {} : undefined } = t;
    t.status = s, s && t.context && (s.context = t.context);
    let n = this.#B(e, t);
    return s && i && (s.trace = true, W.tracePromise(() => n, s).catch(() => {})), n;
  }
  async#B(e, t = {}) {
    let { allowStale: i = this.allowStale, updateAgeOnGet: s = this.updateAgeOnGet, noDeleteOnStaleGet: n = this.noDeleteOnStaleGet, ttl: o = this.ttl, noDisposeOnSet: l = this.noDisposeOnSet, size: h = 0, sizeCalculation: r = this.sizeCalculation, noUpdateTTL: c = this.noUpdateTTL, noDeleteOnFetchRejection: m = this.noDeleteOnFetchRejection, allowStaleOnFetchRejection: _ = this.allowStaleOnFetchRejection, ignoreFetchAbort: u = this.ignoreFetchAbort, allowStaleOnFetchAbort: g = this.allowStaleOnFetchAbort, context: f, forceRefresh: y = false, status: a, signal: w } = t;
    if (a && (a.op = "fetch", a.key = e, y && (a.forceRefresh = true), a.cache = this), !this.#U)
      return a && (a.fetch = "get"), this.#C(e, { allowStale: i, updateAgeOnGet: s, noDeleteOnStaleGet: n, status: a });
    let F = { allowStale: i, updateAgeOnGet: s, noDeleteOnStaleGet: n, ttl: o, noDisposeOnSet: l, size: h, sizeCalculation: r, noUpdateTTL: c, noDeleteOnFetchRejection: m, allowStaleOnFetchRejection: _, allowStaleOnFetchAbort: g, ignoreFetchAbort: u, status: a, signal: w }, b = this.#s.get(e);
    if (b === undefined) {
      a && (a.fetch = "miss");
      let p = this.#P(e, b, F, f);
      return p.__returned = p;
    } else {
      let p = this.#t[b];
      if (this.#e(p)) {
        let v = i && p.__staleWhileFetching !== undefined;
        return a && (a.fetch = "inflight", v && (a.returnedStale = true)), v ? p.__staleWhileFetching : p.__returned = p;
      }
      let A = this.#p(b);
      if (!y && !A)
        return a && (a.fetch = "hit"), this.#L(b), s && this.#R(b), a && this.#v(a, b), p;
      let z = this.#P(e, b, F, f), E = z.__staleWhileFetching !== undefined && i;
      return a && (a.fetch = A ? "stale" : "refresh", E && A && (a.returnedStale = true)), E ? z.__staleWhileFetching : z.__returned = z;
    }
  }
  forceFetch(e, t = {}) {
    let i = W.hasSubscribers, { status: s = R() ? {} : undefined } = t;
    t.status = s, s && t.context && (s.context = t.context);
    let n = this.#K(e, t);
    return s && i && (s.trace = true, W.tracePromise(() => n, s).catch(() => {})), n;
  }
  async#K(e, t = {}) {
    let i = await this.#B(e, t);
    if (i === undefined)
      throw new Error("fetch() returned undefined");
    return i;
  }
  memo(e, t = {}) {
    let { status: i = S.hasSubscribers ? {} : undefined } = t;
    t.status = i, i && (i.op = "memo", i.key = e, t.context && (i.context = t.context), i.cache = this);
    let s = this.#Q(e, t);
    return i && (i.value = s), S.hasSubscribers && S.publish(i), s;
  }
  #Q(e, t = {}) {
    let i = this.#I;
    if (!i)
      throw new Error("no memoMethod provided to constructor");
    let { context: s, status: n, forceRefresh: o, ...l } = t;
    n && o && (n.forceRefresh = true);
    let h = this.#C(e, l), r = o || h === undefined;
    if (n && (n.memo = r ? "miss" : "hit", r || (n.value = h)), !r)
      return h;
    let c = i(e, h, { options: l, context: s });
    return n && (n.value = c), this.#W(e, c, l), c;
  }
  get(e, t = {}) {
    let { status: i = S.hasSubscribers ? {} : undefined } = t;
    t.status = i, i && (i.op = "get", i.key = e, i.cache = this);
    let s = this.#C(e, t);
    return i && (s !== undefined && (i.value = s), S.hasSubscribers && S.publish(i)), s;
  }
  #C(e, t = {}) {
    let { allowStale: i = this.allowStale, updateAgeOnGet: s = this.updateAgeOnGet, noDeleteOnStaleGet: n = this.noDeleteOnStaleGet, status: o } = t, l = this.#s.get(e);
    if (l === undefined) {
      o && (o.get = "miss");
      return;
    }
    let h = this.#t[l], r = this.#e(h);
    return o && this.#v(o, l), this.#p(l) ? r ? (o && (o.get = "stale-fetching"), i && h.__staleWhileFetching !== undefined ? (o && (o.returnedStale = true), h.__staleWhileFetching) : undefined) : (n || this.#E(e, "expire"), o && (o.get = "stale"), i ? (o && (o.returnedStale = true), h) : undefined) : (o && (o.get = r ? "fetching" : "hit"), this.#L(l), s && this.#R(l), r ? h.__staleWhileFetching : h);
  }
  #$(e, t) {
    this.#u[t] = e, this.#l[e] = t;
  }
  #L(e) {
    e !== this.#h && (e === this.#a ? this.#a = this.#l[e] : this.#$(this.#u[e], this.#l[e]), this.#$(this.#h, e), this.#h = e);
  }
  delete(e) {
    return this.#E(e, "delete");
  }
  #E(e, t) {
    S.hasSubscribers && S.publish({ op: "delete", delete: t, key: e, cache: this });
    let i = false;
    if (this.#n !== 0) {
      let s = this.#s.get(e);
      if (s !== undefined)
        if (this.#g?.[s] && (clearTimeout(this.#g[s]), this.#g[s] = undefined), i = true, this.#n === 1)
          this.#q(t);
        else {
          this.#x(s);
          let n = this.#t[s];
          if (this.#e(n) ? n.__abortController.abort(new Error("deleted")) : (this.#T || this.#f) && (this.#T && this.#S?.(n, e, t), this.#f && this.#r?.push([n, e, t])), this.#s.delete(e), this.#i[s] = undefined, this.#t[s] = undefined, s === this.#h)
            this.#h = this.#u[s];
          else if (s === this.#a)
            this.#a = this.#l[s];
          else {
            let o = this.#u[s];
            this.#l[o] = this.#l[s];
            let l = this.#l[s];
            this.#u[l] = this.#u[s];
          }
          this.#n--, this.#y.push(s);
        }
    }
    if (this.#f && this.#r?.length) {
      let s = this.#r, n;
      for (;n = s?.shift(); )
        this.#w?.(...n);
    }
    return i;
  }
  clear() {
    return this.#q("delete");
  }
  #q(e) {
    for (let t of this.#z({ allowStale: true })) {
      let i = this.#t[t];
      if (this.#e(i))
        i.__abortController.abort(new Error("deleted"));
      else {
        let s = this.#i[t];
        this.#T && this.#S?.(i, s, e), this.#f && this.#r?.push([i, s, e]);
      }
    }
    if (this.#s.clear(), this.#t.fill(undefined), this.#i.fill(undefined), this.#d && this.#F) {
      this.#d.fill(0), this.#F.fill(0);
      for (let t of this.#g ?? [])
        t !== undefined && clearTimeout(t);
      this.#g?.fill(undefined);
    }
    if (this.#_ && this.#_.fill(0), this.#a = 0, this.#h = 0, this.#y.length = 0, this.#b = 0, this.#n = 0, this.#f && this.#r) {
      let t = this.#r, i;
      for (;i = t?.shift(); )
        this.#w?.(...i);
    }
  }
};

// src/services/cache.ts
var MAX_TTL_MS = 30 * 60 * 1000;
var DEFAULT_TTL_MS = 10 * 60 * 1000;
var NEGATIVE_TTL_MS = 10 * 60 * 1000;
var RISK_TTL_MS = 45000;
var MAX_ENTRIES2 = 5000;
var NEGATIVE_CODES = new Set(["CONTENT_NOT_FOUND", "CONTENT_RESTRICTED"]);
function ttlFor(result, now = Date.now()) {
  if (!result.expiresAt)
    return DEFAULT_TTL_MS;
  const remain = result.expiresAt * 1000 - now;
  return remain <= 0 ? 0 : Math.min(remain, MAX_TTL_MS);
}
var isNegativeCode = (code) => NEGATIVE_CODES.has(code);
function negativeOf(err) {
  if (err instanceof AppError && isNegativeCode(err.code)) {
    return { kind: "error", code: err.code, message: err.message };
  }
  return null;
}

class ParseCache {
  store = new I({ max: MAX_ENTRIES2 });
  inflight = new Map;
  riskTtlMs;
  constructor(opts = {}) {
    this.riskTtlMs = opts.riskTtlMs ?? RISK_TTL_MS;
  }
  resetForTests() {
    this.store.clear();
    this.inflight.clear();
  }
  get(key) {
    const e = this.store.get(key);
    return e?.kind === "value" ? e.result : undefined;
  }
  getError(key) {
    const e = this.store.get(key);
    return e?.kind === "error" ? e : undefined;
  }
  set(key, result) {
    const ttl = ttlFor(result);
    if (ttl <= 0)
      return;
    this.store.set(key, { kind: "value", result }, { ttl });
  }
  setNegative(key, err) {
    const negative = negativeOf(err);
    if (!negative)
      return;
    this.store.set(key, negative, { ttl: NEGATIVE_TTL_MS });
  }
  setPlatformRisk(platform, err) {
    this.store.set(riskKey(platform), { kind: "risk", message: err.message }, { ttl: this.riskTtlMs });
  }
  getPlatformRisk(platform) {
    const e = this.store.get(riskKey(platform));
    return e?.kind === "risk" ? e : undefined;
  }
  async wrap(key, loader) {
    const hit = this.get(key);
    if (hit)
      return { cached: true, result: hit };
    const neg = this.getError(key);
    if (neg)
      throw new AppError(neg.code, neg.message);
    const pending = this.inflight.get(key);
    if (pending)
      return { cached: false, result: await pending };
    const flight = loader().then((result) => {
      this.set(key, result);
      return result;
    }).catch((err) => {
      this.setNegative(key, err);
      throw err;
    }).finally(() => {
      this.inflight.delete(key);
    });
    this.inflight.set(key, flight);
    try {
      return { cached: false, result: await flight };
    } catch (err) {
      const negEntry = this.getError(key);
      if (negEntry)
        throw new AppError(negEntry.code, negEntry.message);
      throw err;
    }
  }
}
var parseCache = new ParseCache;
function cacheKey(platform, id, fallbackUrl) {
  const identity = id || fallbackUrl;
  return `${platform}:${identity}`;
}
function riskKey(platform) {
  return `risk:${platform}`;
}

// src/services/parse.service.ts
var RETRYABLE_CODES = new Set(["UPSTREAM_TIMEOUT", "UPSTREAM_ERROR"]);
var RETRY_BACKOFF_MS = [500, 1000];
function backoff(ms, signal) {
  return new Promise((resolve, reject) => {
    if (signal.aborted) {
      reject(new DOMException("aborted", "AbortError"));
      return;
    }
    const timer = setTimeout(done, ms);
    function done() {
      signal.removeEventListener("abort", onAbort);
      resolve();
    }
    function onAbort() {
      clearTimeout(timer);
      reject(new DOMException("aborted", "AbortError"));
    }
    signal.addEventListener("abort", onAbort, { once: true });
  });
}
async function parseUrl(rawUrl, ctx) {
  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    throw new AppError("INVALID_URL", `无法解析的链接: ${rawUrl.slice(0, 120)}`);
  }
  if (url.protocol !== "http:" && url.protocol !== "https:") {
    throw new AppError("INVALID_URL", "仅支持 http(s) 链接");
  }
  const adapter = matchAdapter(url);
  if (!adapter) {
    throw new AppError("UNSUPPORTED_PLATFORM", `无法识别的平台: ${url.hostname}`, { host: url.hostname });
  }
  const matched = adapter.match(url);
  if (!matched) {
    throw new AppError("INVALID_URL", `链接格式不属于 ${adapter.platform}`, {
      url: url.href
    });
  }
  const key = cacheKey(matched.platform, matched.id, url.href);
  const { cached, result } = await parseCache.wrap(key, async () => {
    const risk = parseCache.getPlatformRisk(adapter.platform);
    if (!ctx.browser && risk)
      throw new AppError("RISK_CONTROL", risk.message);
    const { adapter: finalAdapter, input, url: finalUrl } = await dispatch(url, ctx);
    const started = Date.now();
    let payload;
    try {
      payload = await finalAdapter.fetch(input, finalUrl, ctx);
    } catch (err) {
      const retryable = err instanceof AppError && RETRYABLE_CODES.has(err.code) && !ctx.signal.aborted;
      if (!retryable) {
        if (err instanceof AppError && err.code === "RISK_CONTROL") {
          recordHttpRiskControl(finalAdapter.platform);
          parseCache.setPlatformRisk(finalAdapter.platform, err);
        }
        throw err;
      }
      ctx.logger.warn("transient upstream error, retrying once", {
        platform: finalAdapter.platform,
        code: err.code
      });
      recordParseRetry(finalAdapter.platform);
      await backoff(RETRY_BACKOFF_MS[0], ctx.signal);
      try {
        payload = await finalAdapter.fetch(input, finalUrl, ctx);
      } catch (retryErr) {
        if (retryErr instanceof AppError && retryErr.code === "RISK_CONTROL") {
          recordHttpRiskControl(finalAdapter.platform);
          parseCache.setPlatformRisk(finalAdapter.platform, retryErr);
        }
        throw retryErr;
      }
    }
    if (payload.channel === "http")
      recordHttpSuccess(finalAdapter.platform);
    const parsed = finalAdapter.parse(payload, input);
    const canonical = cacheKey(parsed.platform, parsed.id, finalUrl.href);
    if (canonical !== key)
      parseCache.set(canonical, parsed);
    ctx.logger.info("parse done", {
      platform: parsed.platform,
      id: parsed.id,
      assets: parsed.assets.length,
      ms: Date.now() - started
    });
    return parsed;
  });
  return { result, cached };
}

// src/infra/browser.ts
async function loadPuppeteer() {
  try {
    const mod = await import("puppeteer");
    return mod.default ?? mod;
  } catch {
    return null;
  }
}
var UA6 = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
var MAX_CONCURRENT_PAGES = 2;
var browserPromise = null;
async function getBrowser() {
  if (!browserPromise) {
    const puppeteer = await loadPuppeteer();
    if (!puppeteer) {
      throw new Error("puppeteer not installed");
    }
    browserPromise = puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"]
    }).then((b) => {
      b.once("disconnected", () => {
        browserPromise = null;
      });
      return b;
    }).catch((err) => {
      browserPromise = null;
      throw err;
    });
  }
  return browserPromise;
}

class Semaphore {
  max;
  active = 0;
  queue = [];
  constructor(max) {
    this.max = max;
  }
  async acquire(signal) {
    if (signal?.aborted)
      throw abortError();
    if (this.active < this.max) {
      this.active++;
      return () => this.release();
    }
    await new Promise((resolve, reject) => {
      const onAbort = () => {
        const i = this.queue.indexOf(wake);
        if (i >= 0)
          this.queue.splice(i, 1);
        signal?.removeEventListener("abort", onAbort);
        reject(abortError());
      };
      const wake = () => {
        signal?.removeEventListener("abort", onAbort);
        resolve();
      };
      signal?.addEventListener("abort", onAbort, { once: true });
      this.queue.push(wake);
    });
    this.active++;
    return () => this.release();
  }
  release() {
    this.active--;
    this.queue.shift()?.();
  }
  get stats() {
    return { active: this.active, waiting: this.queue.length, max: this.max };
  }
}
function abortError() {
  return new DOMException("aborted", "AbortError");
}
function sleepWithSignal(ms, signal) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(abortError());
      return;
    }
    const timer = setTimeout(done, ms);
    function done() {
      signal?.removeEventListener("abort", onAbort);
      resolve();
    }
    function onAbort() {
      clearTimeout(timer);
      reject(abortError());
    }
    signal?.addEventListener("abort", onAbort, { once: true });
  });
}
var pageSemaphore = new Semaphore(MAX_CONCURRENT_PAGES);
async function withPage(fn, signal) {
  const release = await pageSemaphore.acquire(signal);
  let page;
  try {
    page = await (await getBrowser()).newPage();
    await page.setUserAgent(UA6);
    await page.setExtraHTTPHeaders({ "accept-language": "zh-CN,zh;q=0.9" });
    return await fn(page, signal ?? abortErrorSignal());
  } finally {
    await page?.close().catch(() => {});
    release();
  }
}
function abortErrorSignal() {
  return new AbortController().signal;
}
async function getDocumentHtml(url, timeoutMs, signal) {
  return withPage(async (page, signal) => {
    const docResponses = [];
    page.on("response", (res) => {
      if (res.request().isNavigationRequest() && res.request().resourceType() === "document") {
        docResponses.push(res);
      }
    });
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: timeoutMs, signal });
    const doc = docResponses.at(-1);
    if (doc) {
      try {
        return await doc.text();
      } catch {}
    }
    return await page.content();
  }, signal);
}
async function interceptJson(url, urlIncludes, timeoutMs, signal) {
  return withPage(async (page, sig) => {
    const pending = [];
    page.on("response", (res) => {
      if (res.url().includes(urlIncludes) && res.request().resourceType() !== "document") {
        pending.push(res.text().catch(() => ""));
      }
    });
    await Promise.race([
      page.goto(url, { waitUntil: "domcontentloaded", timeout: timeoutMs, signal: sig }).catch(() => null),
      sleepWithSignal(timeoutMs, sig)
    ]);
    const deadline = Date.now() + Math.min(timeoutMs, 8000);
    while (Date.now() < deadline && pending.length === 0) {
      await sleepWithSignal(200, sig);
    }
    const bodies = await Promise.race([
      Promise.all(pending),
      sleepWithSignal(2000, sig).then(() => [])
    ]);
    for (const body of bodies) {
      try {
        return JSON.parse(body);
      } catch {}
    }
    throw new AppError("UPSTREAM_CHANGED", `浏览器未截到 ${urlIncludes} 响应（可能被改版或风控页拦截）`);
  }, signal);
}
async function collectCookies(url, waitFor, signal) {
  return withPage(async (page, sig) => {
    await page.goto(url, { waitUntil: "domcontentloaded", timeout: waitFor.timeoutMs, signal: sig }).catch(() => null);
    const deadline = Date.now() + waitFor.timeoutMs;
    for (;; ) {
      const cookies = await page.cookies();
      const map = Object.fromEntries(cookies.map((c) => [c.name, c.value]));
      if (map[waitFor.name] || Date.now() >= deadline)
        return map;
      await sleepWithSignal(250, sig);
    }
  }, signal);
}
var browserGateway = { getDocumentHtml, interceptJson, collectCookies };

// src/services/limiter.ts
var CAPACITY = 30;
var REFILL_PER_MS = CAPACITY / 60000;

class IpRateLimiter {
  capacity;
  refillPerMs;
  buckets = new Map;
  constructor(capacity = CAPACITY, refillPerMs = REFILL_PER_MS) {
    this.capacity = capacity;
    this.refillPerMs = refillPerMs;
  }
  take(ip, now = Date.now()) {
    const bucket = this.buckets.get(ip) ?? { tokens: this.capacity, updatedAt: now };
    const elapsed = now - bucket.updatedAt;
    bucket.tokens = Math.min(this.capacity, bucket.tokens + elapsed * this.refillPerMs);
    bucket.updatedAt = now;
    if (bucket.tokens < 1) {
      this.buckets.set(ip, bucket);
      return false;
    }
    bucket.tokens -= 1;
    this.buckets.set(ip, bucket);
    if (this.buckets.size > 1e4) {
      this.sweep(now);
    }
    return true;
  }
  sweep(now) {
    for (const [ip, b] of this.buckets) {
      if (b.tokens >= this.capacity) {
        this.buckets.delete(ip);
      } else {
        b.tokens = Math.min(this.capacity, b.tokens + (now - b.updatedAt) * this.refillPerMs);
        b.updatedAt = now;
        if (b.tokens >= this.capacity)
          this.buckets.delete(ip);
      }
    }
  }
}
var ipRateLimiter = new IpRateLimiter;
function isTrustedProxy(addr) {
  const ip = addr.startsWith("::ffff:") ? addr.slice(7) : addr;
  if (ip === "127.0.0.1" || ip === "::1")
    return true;
  if (/^127\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(ip))
    return true;
  if (/^10\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(ip))
    return true;
  if (/^192\.168\.\d{1,3}\.\d{1,3}$/.test(ip))
    return true;
  const m = /^172\.(\d{1,3})\./.exec(ip);
  if (m && +m[1] >= 16 && +m[1] <= 31)
    return true;
  return /^f[cd][0-9a-f]{2}:/i.test(ip) || /^fe[89ab][0-9a-f]:/i.test(ip);
}
function clientIp(headers, request, server) {
  const info = server?.requestIP(request);
  const peer = info && typeof info === "object" && "address" in info ? String(info.address) : undefined;
  if (peer === undefined || isTrustedProxy(peer)) {
    const real = headers.get("x-real-ip");
    if (real)
      return real;
    const xff = headers.get("x-forwarded-for");
    if (xff)
      return xff.split(",")[0].trim();
  }
  return peer ?? "unknown";
}

// src/infra/proxy.ts
function resolveProxy(platform) {
  return process.env[`PROXY_${platform.toUpperCase()}`] || process.env.HTTPS_PROXY;
}

// src/services/media-proxy.ts
import { createHmac, timingSafeEqual } from "node:crypto";
var SIGN_TTL_SECONDS = 600;
var MAX_REDIRECTS = 5;
var MAX_CONCURRENCY = 2;
var PASSTHROUGH_HEADERS = ["range", "if-range", "if-none-match", "if-modified-since"];
var STRIPPED_RESPONSE_HEADERS = new Set([
  "connection",
  "keep-alive",
  "proxy-authenticate",
  "proxy-authorization",
  "te",
  "trailer",
  "transfer-encoding",
  "upgrade",
  "host",
  "content-encoding"
]);
var BROWSER_UA = "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36";
var CDN_HOSTS = [
  "douyinvod.com",
  "douyinpic.com",
  "snssdk.com",
  "zjcdn.com",
  "xhscdn.com",
  "kwimgs.com",
  "chenzhongtech.com",
  "gifshow.com",
  "bilivideo.com",
  "bilivideo.cn",
  "hdslb.com",
  "weibocdn.com",
  "sinaimg.cn",
  "twimg.com",
  "googlevideo.com",
  "ytimg.com",
  "fbcdn.net",
  "cdninstagram.com",
  "tiktokcdn.com",
  "tiktokcdn-us.com",
  "tiktokcdn-eu.com",
  "tiktok.com",
  "tikwm.com"
];
function allowedHosts() {
  return [...Object.values(PLATFORM_HOSTS).flat(), ...CDN_HOSTS];
}
var IP_BOUND_HOSTS = ["googlevideo.com"];
function isIpBoundUrl(rawUrl) {
  try {
    return IP_BOUND_HOSTS.some((d) => hostMatches(new URL(rawUrl).hostname, d));
  } catch {
    return false;
  }
}
var UPSTREAM_HEADERS = [
  { match: "douyinvod.com", referer: "https://www.douyin.com/" },
  { match: "douyin.com", referer: "https://www.douyin.com/" },
  { match: "douyinpic.com", referer: "https://www.douyin.com/" },
  { match: "snssdk.com", referer: "https://www.douyin.com/" },
  { match: "zjcdn.com", referer: "https://www.douyin.com/" },
  { match: "xhscdn.com", referer: undefined },
  { match: "xiaohongshu.com", referer: undefined },
  { match: "bilivideo.com", referer: "https://www.bilibili.com" },
  { match: "bilivideo.cn", referer: "https://www.bilibili.com" },
  { match: "hdslb.com", referer: "https://www.bilibili.com" },
  { match: "kuaishou.com", referer: undefined },
  { match: "kwimgs.com", referer: undefined },
  { match: "chenzhongtech.com", referer: undefined },
  { match: "gifshow.com", referer: undefined },
  { match: "weibocdn.com", referer: "https://weibo.com/" },
  { match: "sinaimg.cn", referer: "https://weibo.com/" },
  { match: "twimg.com", referer: undefined },
  { match: "googlevideo.com", referer: undefined },
  { match: "ytimg.com", referer: undefined },
  { match: "fbcdn.net", referer: undefined },
  { match: "cdninstagram.com", referer: undefined },
  { match: "tiktokcdn.com", referer: undefined },
  { match: "tiktokcdn-us.com", referer: undefined },
  { match: "tiktokcdn-eu.com", referer: undefined },
  { match: "tiktok.com", referer: undefined },
  { match: "tikwm.com", referer: undefined }
];
function upstreamHeadersFor(host) {
  const rule = UPSTREAM_HEADERS.find((r) => hostMatches(host, r.match));
  const headers = {
    "user-agent": BROWSER_UA,
    accept: "*/*",
    "accept-encoding": "identity"
  };
  if (rule?.referer)
    headers.referer = rule.referer;
  return headers;
}
function secret() {
  return process.env.PROXY_SECRET ?? "";
}
function sign(rawUrl, exp) {
  return createHmac("sha256", secret()).update(`${rawUrl}
${exp}`).digest("hex").slice(0, 32);
}
function isProxyConfigured() {
  return secret().length > 0;
}
function signMediaUrl(url, nowSec = Math.floor(Date.now() / 1000)) {
  if (!isProxyConfigured()) {
    throw new AppError("MEDIA_PROXY_DISABLED", "PROXY_SECRET 未配置，/media 中转未启用");
  }
  const exp = nowSec + SIGN_TTL_SECONDS;
  return { url, exp, sig: sign(url, exp) };
}
function assetLinkFields(a) {
  return [
    { get: () => a.url, set: (v) => void (a.url = v) },
    { get: () => a.audioUrl, set: (v) => void (a.audioUrl = v) },
    { get: () => a.liveClipUrl, set: (v) => void (a.liveClipUrl = v) },
    ...(a.backups ?? []).map((_, i) => ({
      get: () => a.backups?.[i],
      set: (v) => void (a.backups && (a.backups[i] = v))
    })),
    ...(a.variants ?? []).map((_, i) => ({
      get: () => a.variants?.[i]?.url,
      set: (x) => void (a.variants && (a.variants[i].url = x))
    }))
  ];
}
function signIpBoundLinks(result, origin, nowSec = Math.floor(Date.now() / 1000)) {
  if (!isProxyConfigured())
    return result;
  const assets = result.assets.map((a) => ({
    ...a,
    ...a.variants ? { variants: a.variants.map((v) => ({ ...v })) } : {},
    ...a.backups ? { backups: [...a.backups] } : {}
  }));
  const hasIpBound = assets.some((a) => assetLinkFields(a).some((f) => f.get() ? isIpBoundUrl(f.get()) : false));
  if (!hasIpBound)
    return result;
  let minExp = Number.POSITIVE_INFINITY;
  assets.forEach((a, idx) => {
    let assetExp = Number.POSITIVE_INFINITY;
    for (const f of assetLinkFields(a)) {
      const u = f.get();
      if (!u || !isIpBoundUrl(u))
        continue;
      const { exp, sig } = signMediaUrl(u, nowSec);
      const q = new URLSearchParams({
        u: Buffer.from(u).toString("base64url"),
        exp: String(exp),
        sig
      });
      const title = assets.length > 1 ? `${result.title}-${idx + 1}` : result.title;
      if (title)
        q.set("title", title);
      f.set(`${origin}/media?${q}`);
      assetExp = Math.min(assetExp, exp);
    }
    if (Number.isFinite(assetExp))
      a.expiresAt = assetExp;
    minExp = Math.min(minExp, assetExp);
  });
  return { ...result, assets, expiresAt: Number.isFinite(minExp) ? minExp : result.expiresAt };
}
function verifyMediaSignature(query, nowSec = Math.floor(Date.now() / 1000)) {
  if (!isProxyConfigured()) {
    throw new AppError("MEDIA_PROXY_DISABLED", "PROXY_SECRET 未配置，/media 中转未启用（可选增强）。直链仍是主路径。");
  }
  const { u, exp, sig } = query;
  if (!u || !exp || !sig) {
    throw new AppError("INVALID_URL", "缺少签名参数（需要 u / exp / sig）");
  }
  const expNum = Number(exp);
  if (!Number.isFinite(expNum) || expNum <= 0) {
    throw new AppError("INVALID_URL", "exp 不是合法时间戳");
  }
  if (nowSec > expNum) {
    throw new AppError("MEDIA_LINK_EXPIRED", "媒体链接已过期，请重新解析获取新链接", { expiredAt: expNum });
  }
  const rawUrl = Buffer.from(u, "base64url").toString("utf8");
  const expected = sign(rawUrl, expNum);
  const a = Buffer.from(expected);
  const b = Buffer.from(sig);
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    throw new AppError("MEDIA_BAD_SIGNATURE", "签名校验失败");
  }
  let url;
  try {
    url = new URL(rawUrl);
  } catch {
    throw new AppError("INVALID_URL", "u 参数不是合法 URL");
  }
  if (url.protocol !== "https:") {
    throw new AppError("CONTENT_RESTRICTED", "中转只允许 https 链接", {
      protocol: url.protocol
    });
  }
  if (!allowedHosts().some((d) => hostMatches(url.hostname, d))) {
    throw new AppError("CONTENT_RESTRICTED", "目标域名不在允许列表", {
      host: url.hostname
    });
  }
  return { url: url.href, exp: expNum };
}
function assertSafeHost(rawUrl, allowlist) {
  let u;
  try {
    u = new URL(rawUrl);
  } catch {
    throw new AppError("INVALID_URL", "跳转地址不是合法 URL", {
      url: rawUrl.slice(0, 120)
    });
  }
  if (u.protocol !== "https:") {
    throw new AppError("CONTENT_RESTRICTED", "中转只允许 https 链接", {
      protocol: u.protocol
    });
  }
  if (!allowlist.some((d) => hostMatches(u.hostname, d))) {
    throw new AppError("CONTENT_RESTRICTED", "跳转域名不在允许列表", {
      host: u.hostname
    });
  }
  return u;
}
async function fetchUpstream(target, requestHeaders, method, allowlist, depth = 0) {
  if (depth > MAX_REDIRECTS) {
    throw new AppError("UPSTREAM_ERROR", "上游重定向超过 5 跳", {
      url: target.slice(0, 120)
    });
  }
  const u = assertSafeHost(target, allowlist);
  const headers = new Headers(upstreamHeadersFor(u.hostname));
  for (const k of PASSTHROUGH_HEADERS) {
    const v = requestHeaders.get(k);
    if (v)
      headers.set(k, v);
  }
  const proxy = isIpBoundUrl(u.href) ? resolveProxy("youtube") : undefined;
  const res = await proxiedFetch(u, { method, headers, redirect: "manual", proxy });
  if (res.status >= 300 && res.status < 400) {
    const loc = res.headers.get("location");
    await res.body?.cancel();
    if (!loc)
      return res;
    return fetchUpstream(new URL(loc, u).href, requestHeaders, method, allowlist, depth + 1);
  }
  return res;
}
function buildMediaResponseHeaders(upstream) {
  const out = new Headers;
  for (const [k, v] of upstream) {
    const lk = k.toLowerCase();
    if (STRIPPED_RESPONSE_HEADERS.has(lk))
      continue;
    if (lk === "content-length")
      continue;
    out.set(k, v);
  }
  const cl = upstream.get("content-length");
  if (cl)
    out.set("content-length", cl);
  const ct = upstream.get("content-type");
  out.set("content-type", !ct || ct.includes("octet-stream") ? "video/mp4" : ct);
  out.set("accept-ranges", "bytes");
  out.set("cache-control", "public, max-age=3600");
  out.set("access-control-allow-origin", "*");
  out.set("access-control-expose-headers", "Content-Length, Content-Range, Accept-Ranges");
  return out;
}

class Semaphore2 {
  limit;
  active = 0;
  waiters = [];
  constructor(limit) {
    this.limit = limit;
  }
  async run(fn) {
    if (this.active >= this.limit) {
      await new Promise((resolve) => this.waiters.push(resolve));
    } else {
      this.active += 1;
    }
    try {
      return await fn();
    } finally {
      const next = this.waiters.shift();
      if (next)
        next();
      else
        this.active -= 1;
    }
  }
  get size() {
    return this.active;
  }
}
var mediaConcurrency = new Semaphore2(MAX_CONCURRENCY);

// src/routes/parse.routes.ts
function browserFallbackEnabled() {
  return (process.env.BROWSER_FALLBACK ?? "").trim().toLowerCase() !== "off";
}
var httpCtx = (request, platform) => ({
  signal: AbortSignal.timeout(15000),
  channel: "http",
  browser: browserFallbackEnabled() ? browserGateway : undefined,
  logger: asFetchLogger(requestLogger(request)),
  proxyUrl: platform ? resolveProxy(platform) : undefined,
  instagramDocId: process.env.IG_GRAPHQL_DOC_ID || undefined,
  douyinUifid: process.env.DOUYIN_UIFID || undefined,
  douyinTtwid: process.env.DOUYIN_TTWID || undefined
});
var UPSTREAM_CODES = new Set(["UPSTREAM_ERROR", "UPSTREAM_CHANGED", "UPSTREAM_TIMEOUT", "RISK_CONTROL"]);
function guessPlatform(rawUrl) {
  try {
    return findPlatform(new URL(rawUrl));
  } catch {
    return null;
  }
}
async function handleParse(rawUrl, request, server) {
  const ctx = httpCtx(request, guessPlatform(rawUrl));
  const ip = clientIp(request.headers, request, server);
  if (!ipRateLimiter.take(ip)) {
    throw new AppError("RATE_LIMITED", "请求过于频繁，请稍后再试", { ip });
  }
  const startedAt = performance.now();
  try {
    const { result, cached } = await parseUrl(rawUrl, ctx);
    recordParse(result.platform, "ok");
    observeParseDuration(result.platform, performance.now() - startedAt);
    if (cached)
      recordCacheHit();
    const out = signIpBoundLinks(result, new URL(request.url).origin);
    return { ...ok(out), cached };
  } catch (error) {
    const platform = guessPlatform(rawUrl) ?? "unknown";
    const code = error instanceof AppError ? error.code : "INTERNAL";
    recordParse(platform, code);
    observeParseDuration(platform, performance.now() - startedAt);
    if (UPSTREAM_CODES.has(code))
      recordUpstreamError(platform, code);
    throw error;
  }
}
var parseRoutes = new Elysia({ prefix: "/parse" }).post("/", ({ body, request, server }) => handleParse(body.url, request, server), {
  body: t.Object({ url: t.String({ minLength: 8 }) })
}).get("/", ({ query, request, server }) => handleParse(query.url, request, server), {
  query: t.Object({ url: t.String({ minLength: 8 }) })
});

// src/routes/media.routes.ts
var PROXY_HINT = "PROXY_SECRET 未配置，/media 中转未启用（可选增强）。直链仍是主路径。";
function contentDisposition(title, contentType) {
  const ext = contentType.includes("audio") ? "m4a" : "mp4";
  const base = title.replace(/[\\/:*?"<>|\n\r]/g, " ").trim().slice(0, 80);
  if (!base)
    return null;
  return `attachment; filename*=UTF-8''${encodeURIComponent(`${base}.${ext}`)}`;
}
async function proxyMedia(request, query) {
  if (!process.env.PROXY_SECRET) {
    throw new AppError("MEDIA_PROXY_DISABLED", PROXY_HINT);
  }
  const verified = verifyMediaSignature(query);
  const method = request.method === "HEAD" ? "HEAD" : "GET";
  if (mediaConcurrency.size >= 2) {
    throw new AppError("RATE_LIMITED", "中转并发已达上限，请稍后重试");
  }
  return mediaConcurrency.run(async () => {
    const upstream = await fetchUpstream(verified.url, request.headers, method, allowedHosts());
    const out = buildMediaResponseHeaders(upstream.headers);
    if (method === "GET") {
      const cd = contentDisposition(query.title ?? "", out.get("content-type") ?? "");
      if (cd)
        out.set("content-disposition", cd);
    }
    return new Response(method === "HEAD" ? null : upstream.body, {
      status: upstream.status,
      headers: out
    });
  });
}
var mediaRoutes = new Elysia({ prefix: "/media" }).get("/", ({ request, query }) => proxyMedia(request, query)).head("/", ({ request, query }) => proxyMedia(request, query));

// src/routes/ops.routes.ts
var ALL_PLATFORMS = [
  "douyin",
  "xhs",
  "kuaishou",
  "bilibili",
  "weibo",
  "twitter",
  "youtube",
  "instagram",
  "tiktok"
];
function publishBreakerGauges() {
  const snapshot = breakerSnapshot();
  for (const p of ALL_PLATFORMS) {
    const s = snapshot.get(p);
    recordChannelBreaker(p, s?.openedAt !== undefined && s.openedAt !== null);
  }
}
var opsRoutes = new Elysia().get("/health", () => ({ status: "ok", uptime: process.uptime() })).get("/ready", ({ set }) => {
  const n = listAdapters().length;
  if (n === 0) {
    set.status = 503;
    return { status: "degraded", platforms: 0 };
  }
  return { status: "ready", platforms: n };
}).get("/platforms", () => ok(listAdapters().map((a) => ({
  platform: a.platform,
  description: a.description,
  hosts: a.hosts,
  capabilities: a.capabilities,
  signers: listSigners(a.platform).map((s) => ({
    name: s.name,
    version: s.version,
    available: s.isAvailable()
  }))
})))).get("/metrics", ({ set }) => {
  set.headers["content-type"] = "text/plain; version=0.0.4; charset=utf-8";
  publishBreakerGauges();
  return metrics.render();
});

// src/routes/status.routes.ts
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
function loadStatusPage() {
  const candidates = [
    new URL("./status.html", import.meta.url),
    new URL("../../docs/status.html", import.meta.url)
  ];
  for (const u of candidates) {
    try {
      return readFileSync(fileURLToPath(u), "utf8");
    } catch {}
  }
  return '<!DOCTYPE html><meta charset="utf-8"><title>status</title><p>status page not bundled</p>';
}
var statusPage = loadStatusPage();
var statusRoutes = new Elysia().get("/status", ({ set }) => {
  set.headers["content-type"] = "text/html; charset=utf-8";
  set.headers["cache-control"] = "no-store";
  return statusPage;
});

// src/bootstrap/app.ts
function createApp() {
  register(douyinAdapter);
  registerSigner(douyinAbogusSigner);
  register(kuaishouAdapter);
  register(bilibiliAdapter);
  register(xhsAdapter);
  register(weiboAdapter);
  register(twitterAdapter);
  register(youtubeAdapter);
  register(instagramAdapter);
  register(tiktokAdapter);
  const app = new Elysia().use(cors({ origin: "*" })).onRequest(({ request, set }) => {
    set.headers["x-request-id"] = reqIdOf(request);
  }).onAfterResponse(({ request, set }) => {
    const status = typeof set.status === "number" ? set.status : 200;
    requestLogger(request).info({
      method: request.method,
      path: redactRequestUrl(request.url),
      status,
      ms: Math.round(performance.now() - reqStartedAt(request))
    }, "request done");
  }).onError(({ code, error, set, request }) => {
    if (error instanceof AppError) {
      set.status = error.httpStatus;
      return fail(error.code, error.message, error.detail);
    }
    if (code === "NOT_FOUND") {
      set.status = 404;
      return fail("UNSUPPORTED_CONTENT", "接口不存在");
    }
    if (code === "VALIDATION") {
      set.status = 400;
      return fail("INVALID_URL", "请求参数不合法");
    }
    requestLogger(request).error({ err: error }, "unhandled error");
    set.status = 500;
    return fail("INTERNAL", error instanceof Error ? error.message : "内部错误");
  }).get("/", async ({ set }) => {
    try {
      const { readFileSync } = await import("node:fs");
      const { fileURLToPath } = await import("node:url");
      const candidates = [
        new URL("./index.html", import.meta.url),
        new URL("../../public/index.html", import.meta.url)
      ];
      for (const cu of candidates) {
        try {
          const p = fileURLToPath(cu);
          set.headers["content-type"] = "text/html; charset=utf-8";
          return readFileSync(p, "utf8");
        } catch {}
      }
    } catch {}
    return {
      name: "short-video-extractor",
      version: "2.1.0",
      platforms: listAdapters().map((a) => a.platform)
    };
  }).get("/platforms", () => ({
    platforms: listAdapters().map((a) => a.platform)
  })).use(parseRoutes).use(mediaRoutes).use(opsRoutes).use(statusRoutes);
  return app;
}

// api/netlify.ts
var app = createApp();
async function handler(request) {
  return app.fetch(request);
}
export {
  handler as default
};
