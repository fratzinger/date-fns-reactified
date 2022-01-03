import { intlFormat as _intlFormat } from "date-fns";
import { reactify } from "@vueuse/core";

export const intlFormat = reactify(_intlFormat);