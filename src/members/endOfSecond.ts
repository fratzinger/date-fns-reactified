import { endOfSecond as _endOfSecond } from "date-fns";
import { reactify } from "@vueuse/shared";

export const endOfSecond = reactify(_endOfSecond);