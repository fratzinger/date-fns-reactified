# date-fns-reactified

[![npm](https://img.shields.io/npm/v/date-fns-reactified)](https://www.npmjs.com/package/date-fns-reactified)
[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/fratzinger/date-fns-reactified/Node.js%20CI)](https://github.com/fratzinger/date-fns-reactified/actions/workflows/node.js.yml?query=branch%3Amain++)
[![Code Climate maintainability](https://img.shields.io/codeclimate/maintainability/fratzinger/date-fns-reactified)](https://codeclimate.com/github/fratzinger/date-fns-reactified)
[![Code Climate coverage](https://img.shields.io/codeclimate/coverage/fratzinger/date-fns-reactified)](https://codeclimate.com/github/fratzinger/date-fns-reactified)
[![libraries.io](https://img.shields.io/librariesio/release/npm/date-fns-reactified)](https://libraries.io/npm/date-fns-reactified)
[![npm](https://img.shields.io/npm/dm/date-fns-reactified)](https://www.npmjs.com/package/date-fns-reactified)
[![GitHub license](https://img.shields.io/github/license/fratzinger/date-fns-reactified)](https://github.com/fratzinger/date-fns-reactified/blob/main/LICENSE)

This is meant as a replacement of [`date-fns`](https://github.com/date-fns/date-fns) for vue.js composition api with `Ref<>`. It uses [`reactify` from `@vueuse/core`](https://vueuse.org/shared/reactify/) all over the place.

## Installation

```bash
npm i date-fns-reactified
```

## Usage

instead of:
```typescript
import { addDays } from 'date-fns';
import { ref } from 'vue-demi';

const date = ref(new Date());
const days = ref(7);

const newDate = addDays(date.value, days.value)
```

do this:
```typescript
import { addDays } from 'date-fns-reactified';
import { ref } from 'vue-demi';

const date = ref(new Date());
const days = ref(7);

const newDate = addDays(date, days)
```

## Testing

Simply run `npm test` and all your tests in the `test/` directory will be run. It has full support for *Visual Studio Code*. You can use the debugger to set breakpoints.

## License

Licensed under the [MIT license](LICENSE).