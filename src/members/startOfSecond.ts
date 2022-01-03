import { startOfSecond as _startOfSecond } from "date-fns";
import { reactify } from "@vueuse/shared";

export const startOfSecond = reactify(_startOfSecond);