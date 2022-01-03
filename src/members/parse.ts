import { parse as _parse } from "date-fns";
import { reactify } from "@vueuse/shared";

export const parse = reactify(_parse);