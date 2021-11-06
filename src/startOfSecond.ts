import { startOfSecond as _startOfSecond } from "date-fns";
import { reactify } from "@vueuse/core";

export const startOfSecond = reactify(_startOfSecond);