import { intlFormat as _intlFormat } from "date-fns";
import { reactify } from "@vueuse/shared";

export const intlFormat = reactify(_intlFormat);